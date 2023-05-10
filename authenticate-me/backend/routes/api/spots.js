const express = require('express');
const { Op } = require('sequelize');
const bcrypt = require('bcryptjs');
const { restoreUser, requireAuth } = require('../../utils/auth');
const { Spot, Review, SpotImage, User, ReviewImage, Booking } = require('../../db/models');
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
    check('country')
        .exists({ checkFalsy: true })
        .withMessage('Country is required.'),
    check('name')
        .exists({ checkFalsy: true })
        .isLength({ max: 50 })
        .withMessage('Name must be less than 50 characters.'),
    check('description')
        .exists({ checkFalsy: true })
        .isLength({ min: 30 })
        .withMessage('Description is required.'),
    check('price')
        .exists({ checkFalsy: true })
        .withMessage('Price per day is required.'),
    handleValidationErrors
];

//for validating review created for spot
const validateReview = [
    check('review')
        .exists({ checkFalsy: true })
        .withMessage('Review text is required.'),
    check('stars')
        .exists({ checkFalsy: true })
        .isInt({ min: 1, max: 5 })
        .withMessage('Stars must be an integer from 1 to 5.'),
    handleValidationErrors
];

//validate bookings
const validateBooking = [
    check('startDate')
        .exists({ checkFalsy: true })
        .isDate({ format: 'YYYY-MM-DD' })
        .withMessage('startDate must be formatted YYYY-MM-DD'),
    check('endDate')
        .exists({ checkFalsy: true })
        .isDate({ format: 'YYYY-MM-DD' })
        .withMessage('endDate must be formatted YYYY-MM-DD'),
    handleValidationErrors
]

//validate query params
const validateQueryFilters = [
    check('page')
        .custom( value => {
            if (value) {
                if (isNaN(value)) return false
                return true
            }
            return true
        })
        .withMessage('Page must be greater than or equal to 1'),
    check('size')
        .custom( value => {
            if (value) {
                if (isNaN(value)) return false
                return true
            }
            return true
        })
        .withMessage('Size must be greater than or equal to 1'),
    check('maxLat')
        .custom( value => {
            if (value) {
                if (isNaN(value)) return false
                return true
            }
            return true
        })
        .withMessage('Maximum latitude is invalid'),
    check('minLat')
        .custom( value => {
            if (value) {
                if (isNaN(value)) return false
                return true
            }
            return true
        })
        .withMessage('Minimum latitude is invalid'),
    check('maxLng')
        .custom( value => {
            if (value) {
                if (isNaN(value)) return false
                return true
            }
            return true
        })
        .withMessage('Maximum longitutde is invalid'),
    check('minLng')
        .custom( value => {
            if (value) {
                if (isNaN(value)) return false
                return true
            }
            return true
        })
        .withMessage('Minimum longitude is invalid'),
    check('minPrice')
        .custom( value => {
            if (value) {
                if (isNaN(value)) return false
                if (Number(value) < 0) return false
                return true
            }
            return true
        })
        .withMessage('Minimun price must be greater than or equal to 0'),
    check('maxPrice')
        .custom( value => {
            if (value) {
                if (isNaN(value)) return false
                if (Number(value) < 0) return false
                return true
            }
            return true
        })
        .withMessage('Maximum price must be greater than or equal to 0'),
    handleValidationErrors
]

//want to add middleware to check authorization...
const checkAuthorization = async (req, res, next) => {
    const spot = await Spot.findByPk(req.params.spotId);

    if (!spot) {
        const err = new Error("Spot couldn't be found");
        err.status = 404;
        err.title = "Spot couldn't be found";
        return next(err);
    }

    if (spot.ownerId !== req.user.id) {
        const err = new Error("Unauthorized");
        err.status = 401;
        err.title = "Unauthorized";
        return next(err);
    }

    next();
}

//make sure booking user is not owner of spot
const checkIfOwned = async (req, res, next) => {
    const spot = await Spot.findByPk(req.params.spotId);

    if (!spot) {
        const err = new Error("Spot couldn't be found");
        err.status = 404;
        err.title = "Spot couldn't be found";
        return next(err);
    }

    if (spot.ownerId === req.user.id) {
        const err = new Error("Spot owned by user");
        err.status = 401;
        err.title = "Unauthorized";
        return next(err);
    }

    next();
}



router.post('/', [requireAuth, validateSpot], async (req, res, next) => {
    const { address, city, state, country, lat, lng, name, description, price } = req.body;

    const errors = {};

    const foundAddress = await Spot.findOne({
        where: {
            address
        }
    });

    let foundCoordinates;
    if (lat !== '0' && lng !== '0') {
        foundCoordinates = await Spot.findOne({
            where: {
                lat,
                lng
            }
        });
    }

    if (foundAddress) {
        errors.address = "Spot with that address already exists";
    }
    if (foundCoordinates) {
        errors.lat = "Spot with that latitude and longitude already exists";
        errors.lng = "Spot with that latitude and longitude already exists";
    }

    if (errors.address || errors.lat) {
        const err = Error("Spot already exists.");
        err.errors = errors;
        err.status = 500;
        err.title = "Spot already exists.";
        return next(err);
    }

    let newSpot;
    if (lat && lng) {
        newSpot = await Spot.create({
            ownerId: req.user.id,
            address,
            city,
            state,
            country,
            lat: Number(lat),
            lng: Number(lng),
            name,
            description,
            price: Number(price)
        });
    } else {
        newSpot = await Spot.create({
            ownerId: req.user.id,
            address,
            city,
            state,
            country,
            name,
            description,
            price: Number(price)
        });
    }

    return res.status(201).json(newSpot);
});

router.get('/', validateQueryFilters, async (req, res) => {
    let { page, size, minLat, maxLat, minLng, maxLng, minPrice, maxPrice } = req.query;
    if (!page) page = 1;
    if (!size) size = 20;

    const limit = size;
    const offset = size * (page - 1);

    const where = {};

    if (minLat) where.lat = { [Op.gte]: minLat }
    if (maxLat) where.lat = { [Op.lte]: maxLat }
    if (maxLng) where.lng = { [Op.lte]: maxLng }
    if (minLng) where.lng = { [Op.gte]: minLng }
    if (minPrice) where.price = { [Op.gte]: minPrice }
    if (maxPrice) where.price = { [Op.lte]: maxPrice }

    const spots = await Spot.findAll({
        where,
        limit,
        offset
    });

    const spotsWithRating = [];

    for(let i = 0; i < spots.length; i++) {
        const spotObj = spots[i].toJSON();

        spotObj.price = Number(spotObj.price);
        spotObj.lat = Number(spotObj.lat);
        spotObj.lng = Number(spotObj.lng);

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
            spotObj.avgRating = Number((starAvg).toFixed(1));
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

    return res.json({
        Spots: spotsWithRating,
        page: Number(page),
        size: Number(size)
    });
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

        spotObj.price = Number(spotObj.price);
        spotObj.lat = Number(spotObj.lat);
        spotObj.lng = Number(spotObj.lng);

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
            spotObj.avgRating = Number((starAvg).toFixed(1));
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

    spotObj.price = Number(spotObj.price);
    spotObj.lat = Number(spotObj.lat);
    spotObj.lng = Number(spotObj.lng);

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
        spotObj.avgStarRating = Number((starAvg).toFixed(1));
    } else {
        spotObj.numReviews = 'No reviews yet';
        spotObj.avgStarRating = 'No reviews yet';
    }

    return res.json(spotObj);
});

router.put('/:spotId', [requireAuth, validateSpot, checkAuthorization], async (req, res, next) => {
    const spot = await Spot.findByPk(req.params.spotId);

    const { address, city, state, country, lat, lng, name, description, price } = req.body;

    const errors = {};

    const checkAddress = await Spot.findOne({
        where: {
            address
        }
    });

    let checkCoordinates;
    if (lat !== '0' && lng !== '0') {
        checkCoordinates = await Spot.findOne({
            where: {
                lat,
                lng
            }
        });
    }

    if (checkAddress && checkAddress.id !== Number(req.params.spotId)) {
        errors.address = "Spot with that address already exists";
    }
    if (checkCoordinates && checkCoordinates.id !== Number(req.params.spotId)) {
        errors.lat = "Spot with that latitude and longitude already exists";
        errors.lng = "Spot with that latitude and longitude already exists"
    }

    if (errors.lat || errors.address) {
        const err = Error("Spot already exists.");
        err.errors = errors;
        err.status = 500;
        err.title = "Spot already exists.";
        return next(err);
    }

    spot.set({
        address,
        city,
        state,
        country,
        lat: Number(lat),
        lng: Number(lng),
        name,
        description,
        price: Number(price)
    });

    await spot.save();
    return res.json(spot);
});

router.delete('/:spotId', [requireAuth, checkAuthorization], async (req, res, next) => {
    const spot = await Spot.findByPk(req.params.spotId);

    await spot.destroy();
    return res.json({
        message: 'Successfully deleted'
    });
});

router.get('/:spotId/reviews', async (req, res, next) => {
    const spotReviews = await Spot.findByPk(req.params.spotId, {
        attributes: [],
        include: {
            model: Review,
            include: [
                {
                    model: User,
                    attributes: ['id', 'firstName', 'lastName']
                },
                {
                    model: ReviewImage,
                    attributes: ['id', 'url']
                }
            ]
        }
    });

    if (!spotReviews) {
        const err = new Error("Spot couldn't be found");
        err.status = 404;
        err.title = "Spot couldn't be found";
        return next(err);
    }

    return res.json(spotReviews);
});

router.post('/:spotId/reviews', [requireAuth, validateReview], async (req, res, next) => {
    const { review, stars } = req.body;

    const spot = await Spot.findByPk(req.params.spotId);

    if (!spot) {
        const err = new Error("Spot couldn't be found");
        err.status = 404;
        err.title = "Spot couldn't be found";
        return next(err);
    }

    const checkOldReview = await Review.findOne({
        where: {
            spotId: spot.id,
            userId: req.user.id
        }
    });

    if (checkOldReview) {
        const err = new Error("User already has a review for this spot");
        err.status = 500;
        err.title = "Review already exists";
        return next(err);
    }

    const newReview = await Review.create({
        userId: req.user.id,
        spotId: Number(req.params.spotId),
        review,
        stars: Number(stars)
    });

    return res.status(201).json(newReview);
});

router.post('/:spotId/images', [requireAuth, checkAuthorization], async (req, res, next) => {
    let { url, preview } = req.body;

    let newImage;
    if (url && (preview === true || preview === false)) {
        newImage = await SpotImage.create({
            spotId: req.params.spotId,
            url,
            preview
        });
    }

    const returnImg = await SpotImage.findOne({
        where: {
            url
        },
        attributes: ['id', 'url', 'preview']
    });

    return res.json(returnImg);
});

router.get('/:spotId/bookings', requireAuth, async (req, res, next) => {
    const spot = await Spot.findByPk(req.params.spotId);

    if (!spot) {
        const err = new Error("Spot couldn't be found");
        err.status = 404;
        err.title = "Spot couldn't be found";
        return next(err);
    }

    let spotBookings;
    if (req.user.id !== spot.ownerId) {
        spotBookings = await Spot.findByPk(req.params.spotId, {
            attributes: [],
            include: {
                model: Booking,
                attributes: ['spotId', 'startDate', 'endDate']
            }
        });

        return res.json(spotBookings);
    } else {
        spotBookings = await Spot.findByPk(req.params.spotId, {
            attributes: [],
            include: [
                {
                    model: Booking,
                    include: {
                        model: User,
                        attributes: ['id', 'firstName', 'lastName']
                    }
                }
            ]
        });
    }

    return res.json(spotBookings);
});

router.post('/:spotId/bookings', [requireAuth, checkIfOwned, validateBooking], async (req, res, next) => {
    let { startDate, endDate } = req.body;

    let start = new Date(startDate).getTime();
    let end = new Date(endDate).getTime();

    if (start >= end) {
        const err = new Error("Bad Request");
        err.status = 400;
        err.title = "Bad Request";
        err.errors = {
            endDate: 'endDate cannot be on or before startDate'
        }
        return next(err);
    }

    const bookingStartCheck = await Booking.findOne({
        where: {
            spotId: Number(req.params.spotId),
            startDate: {
                [Op.between]: [start, end]
            }
        }
    });

    const bookingEndCheck = await Booking.findOne({
        where: {
            spotId: Number(req.params.spotId),
            endDate: {
                [Op.between]: [start, end]
            }
        }
    });

    if (bookingStartCheck || bookingEndCheck) {
        const err = new Error("Sorry, this spot is already booked for the specified dates");
        err.status = 403;
        err.title = "Booking already exists";
        err.errors = {
            startDate: 'Start date conflicts with an existing booking',
            endDate: 'End date conflicts with an existing booking'
        }

        return next(err);
    }

    const newBooking = await Booking.create({
        spotId: Number(req.params.spotId),
        userId: req.user.id,
        startDate,
        endDate
    });

    return res.json(newBooking);
});




module.exports = router;
