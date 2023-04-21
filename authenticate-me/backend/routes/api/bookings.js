const express = require('express');
const { Op } = require('sequelize');
const bcrypt = require('bcryptjs');
const { restoreUser, requireAuth } = require('../../utils/auth');
const { Booking, User, Spot, SpotImage } = require('../../db/models');
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');
const router = express.Router();

//if current user owns booking
const checkAuthorization = async (req, res, next) => {
    const booking = await Booking.findByPk(req.params.bookingId);

    if (!booking) {
        const err = new Error("Booking couldn't be found");
        err.status = 404;
        err.title = "Booking couldn't be found";
        return next(err);
    }

    if (booking.userId !== req.user.id) {
        const err = new Error("Unauthorized");
        err.status = 401;
        err.title = "Unauthorized";
        return next(err);
    }

    next();
}

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


router.get('/current', requireAuth, async (req, res) => {
    const currentUser = await User.findByPk(req.user.id, {
        attributes: [],
        include: {
            model: Booking,
            include: {
                model: Spot,
                attributes: {
                    exclude: ['description', 'createdAt', 'updatedAt']
                }
            }
        }
    });

    const bookings = currentUser.Bookings;

    const bookingWithPreviewImg = [];

    for (let i = 0; i < bookings.length; i ++) {
         const spotObj = bookings[i].toJSON();

         spotObj.Spot.price = Number(spotObj.Spot.price);
         spotObj.Spot.lat = Number(spotObj.Spot.lat);
         spotObj.Spot.lng = Number(spotObj.Spot.lng);

         const previewUrl = await SpotImage.findOne({
            where: {
                spotId: spotObj.id,
                preview: true
            }
        });

        if (previewUrl) {
            spotObj.Spot.previewImage = previewUrl.url
        } else {
            spotObj.Spot.previewImage = 'No preview image yet'
        }

        bookingWithPreviewImg.push(spotObj);
    }

    const returnUser = currentUser.toJSON();

    returnUser.Bookings = bookingWithPreviewImg;

    return res.json(returnUser);
});

router.put('/:bookingId', [requireAuth, checkAuthorization, validateBooking], async (req, res, next) => {
    const editBooking = await Booking.findByPk(req.params.bookingId);

    const { startDate, endDate } = req.body

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

    const currentTime = new Date().getTime();

    if (currentTime > start) {
        const err = new Error("Past bookings can't be modified");
        err.status = 403;
        err.title = "Unable to process request";
        return next(err);
    }

    const bookingStartCheck = await Booking.findOne({
        where: {
            spotId: editBooking.spotId,
            startDate: {
                [Op.between]: [start, end]
            }
        }
    });
    const bookingEndCheck = await Booking.findOne({
        where: {
            spotId: editBooking.spotId,
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

    editBooking.set({
        startDate,
        endDate
    });

    await editBooking.save();

    return res.json(editBooking);
});

router.delete('/:bookingId', requireAuth, async (req, res, next) => {
    const booking = await Booking.findByPk(req.params.bookingId);

    if (!booking) {
        const err = new Error("Booking couldn't be found");
        err.status = 404;
        err.title = "Booking couldn't be found";
        return next(err);
    }

    const spot = await Spot.findOne({
        where: {
            ownerId: req.user.id,
            id: booking.spotId
        }
    });

    if (booking.userId !== req.user.id && !spot) {
        const err = new Error("Unauthorized");
        err.status = 401;
        err.title = "Unauthorized";
        return next(err);
    }

    const currentTime = new Date().getTime();
    const startTime = new Date(booking.startDate).getTime();

    if (currentTime >= startTime) {
        const err = new Error("Bookings that have been started can't be deleted");
        err.status = 403;
        err.title = "Unable to process request";
        return next(err);
    }

    await booking.destroy();

    return res.json({
        message: 'Successfully deleted'
    });
});



module.exports = router;
