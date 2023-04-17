const express = require('express');
const { Op } = require('sequelize');
const bcrypt = require('bcryptjs');
const { setTokenCookie, restoreUser } = require('../../utils/auth');
const { Spot } = require('../../db/models');
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

    return res.json(spots);
});




module.exports = router;
