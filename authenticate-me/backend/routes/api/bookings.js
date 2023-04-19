const express = require('express');
const { Op } = require('sequelize');
const bcrypt = require('bcryptjs');
const { restoreUser, requireAuth } = require('../../utils/auth');
const { Booking, User, Spot, SpotImage } = require('../../db/models');
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');
const router = express.Router();


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





module.exports = router;
