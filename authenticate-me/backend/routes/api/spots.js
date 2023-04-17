const express = require('express');
const { Op } = require('sequelize');
const bcrypt = require('bcryptjs');
const { restoreUser, requireAuth } = require('../../utils/auth');
const { Spot, Review, SpotImage, User } = require('../../db/models');
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');
const router = express.Router();

const validateSpot = [
    check('address')
        .exists({ checkFalsy: true })
        .isLength({ min: 5 })
        .withMessage('Street address is required.'),
    check('city')
        .exists({ checkFalsy: true })
        .withMessage('City is required.'),
    check('state')
        .exists({ checkFalsy: true })
        .withMessage('State is required.'),
    check('state')
        .isLength({ min: 3 })
        .withMessage('State cannot be abbreviated.'),
    check('country')
        .exists({ checkFalsy: true })
        .withMessage('Country is required.'),
    check('lat')
        .exists({ checkFalsy: true })
        .withMessage('Latitude is not valid.'),
    check('lng')
        .exists({ checkFalsy: true })
        .withMessage('Longitude is not valid.'),
    check('name')
        .exists({ checkFalsy: true })
        .isLength({ max: 50 })
        .withMessage('Name must be less than 50 characters.'),
    check('description')
        .exists({ checkFalsy: true })
        .isLength({ min: 10 })
        .withMessage('Description is required.'),
    check('price')
        .exists({ checkFalsy: true })
        .withMessage('Price per day is required.'),
    handleValidationErrors
];

router.post('/', [requireAuth, validateSpot], async (req, res, next) => {
    const { address, city, state, country, lat, lng, name, description, price } = req.body;

    try {
        const newSpot = await Spot.create({ ownerId: req.user.id, address, city, state, country, lat, lng, name, description, price });

        return res.status(201).json(newSpot);
    } catch(e) {
        const err = new Error('Validation error');
        err.status = 500;
        err.title = 'Valiation error';

        const errors = [];
        e.errors.forEach(error => {
            const errObj = {};

            errObj.message = error.message,
            errObj.type = error.type,
            errObj.field = error.path

            errors.push(errObj);
        });

        err.errors = errors;

        return next(err);
    }
})

router.get('/', async (req, res) => {
    const spots = await Spot.findAll();

    const spotsWithRating = [];

    for(let i = 0; i < spots.length; i++) {
        const spotObj = spots[i].toJSON();
        const reviewsCount = await Review.count({
            where: {
                spotId: spotObj.id
            }
        });
        const starReviewSum = await Review.sum('stars', {
            where: {
                spotId: spotObj.id
            }
        });
        const starAvg = starReviewSum / reviewsCount;

        if (starAvg) {
            spotObj.avgRating = (starAvg).toFixed(1);
        } else {
            spotObj.avgRating = 'No reviews yet';
        }

        const previewUrl = await SpotImage.findOne({
            where: {
                spotId: spotObj.id,
                preview: true
            }
        });

        if (previewUrl) {
            spotObj.previewImage = previewUrl.url
        } else {
            spotObj.previewImage = 'No preview image yet'
        }

        spotsWithRating.push(spotObj);
    }

    return res.json(spotsWithRating);
});

router.get('/current', requireAuth, async (req, res) => {
    const currentUser = await User.findByPk(req.user.id, {
        attributes: [],
        include: {
            model: Spot
        }
    });

    const spots = currentUser.Spots;
    const spotsWithRating = [];

    for(let i = 0; i < spots.length; i++) {
        const spotObj = spots[i].toJSON();

        const reviewsCount = await Review.count({
            where: {
                spotId: spotObj.id
            }
        });
        const starReviewSum = await Review.sum('stars', {
            where: {
                spotId: spotObj.id
            }
        });
        const starAvg = starReviewSum / reviewsCount;

        if (starAvg) {
            spotObj.avgRating = (starAvg).toFixed(1);
        } else {
            spotObj.avgRating = 'No reviews yet';
        }

        const previewUrl = await SpotImage.findOne({
            where: {
                spotId: spotObj.id,
                preview: true
            }
        });

        if (previewUrl) {
            spotObj.previewImage = previewUrl.url
        } else {
            spotObj.previewImage = 'No preview image yet'
        }

        spotsWithRating.push(spotObj);
    }

    const returnUser = currentUser.toJSON();

    returnUser.Spots = spotsWithRating;

    return res.json(returnUser);
});

router.get('/:spotId', async (req, res, next) => {
    const spot = await Spot.findByPk(req.params.spotId, {
        include: [
            {
                model: SpotImage,
                attributes: {
                    exclude: ['createdAt', 'updatedAt', 'spotId']
                }
            },
            {
                model: User,
                as: 'Owner',
                attributes: ['id', 'firstName', 'lastName']
            }
        ]
    });

    if (!spot) {
        const err = new Error("Spot couldn't be found");
        err.status = 404;
        err.title = "Spot couldn't be found";
        return next(err);
    }

    const spotObj = spot.toJSON();

    const reviewsCount = await Review.count({
        where: {
            spotId: spotObj.id
        }
    });
    const starReviewSum = await Review.sum('stars', {
        where: {
            spotId: spotObj.id
        }
    });
    const starAvg = starReviewSum / reviewsCount;

    if (reviewsCount && starAvg) {
        spotObj.numReviews = reviewsCount;
        spotObj.avgStarRating = (starAvg).toFixed(1);
    } else {
        spotObj.numReviews = 'No reviews yet';
        spotObj.avgRating = 'No reviews yet';
    }

    return res.json(spotObj);
});





module.exports = router;
