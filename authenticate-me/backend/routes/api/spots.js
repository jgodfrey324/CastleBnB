const express = require('express');
const { Op } = require('sequelize');
const bcrypt = require('bcryptjs');
const { setTokenCookie, restoreUser } = require('../../utils/auth');
const { Spot, Review } = require('../../db/models');
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

        spotsWithRating.push(spotObj);
    }

    return res.json(spotsWithRating);
});




module.exports = router;
