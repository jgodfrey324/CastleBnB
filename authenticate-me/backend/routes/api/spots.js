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
        .withMessage('Please provide a valid address.'),
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
        .withMessage('Please provide valid coordinates.'),
    check('lng')
        .exists({ checkFalsy: true })
        .withMessage('Please provide valid coordinates.'),
    check('name')
        .exists({ checkFalsy: true })
        .withMessage('Please provide a name for your spot.'),
    check('description')
        .exists({ checkFalsy: true })
        .isLength({ min: 10 })
        .withMessage('Please provide a description longer than 10 characters'),
    check('price')
        .exists({ checkFalsy: true })
        .withMessage('Please list the price of your spot.'),
    handleValidationErrors
];

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

        spotObj.previewImage = previewUrl.url

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

        spotObj.previewImage = previewUrl.url

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
