const express = require('express');
const { Op } = require('sequelize');
const bcrypt = require('bcryptjs');
const { restoreUser, requireAuth } = require('../../utils/auth');
const { Review, User, Spot, ReviewImage, SpotImage } = require('../../db/models');
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');
const router = express.Router();


router.get('/current', requireAuth, async (req, res) => {
    const user = await User.findByPk(req.user.id, {
        attributes: [],
        include: [
            {
                model: Review,
                include: [
                    {
                        model: User,
                        attributes: ['id', 'firstName', 'lastName']
                    },
                    {
                        model: Spot,
                        attributes: {
                            exclude: ['createdAt', 'updatedAt', 'description']
                        }
                    },
                    {
                        model: ReviewImage,
                        attributes: ['id', 'url']
                    }
                ]
            }
        ]
    });

    const userObj = user.toJSON();

    for (let i = 0; i < userObj.Reviews.length; i ++) {
        const review = userObj.Reviews[i];

        const previewImg = await SpotImage.findOne({
            where: {
                spotId: review.Spot.id,
                preview: true
            }
        });

        if (previewImg) {
            review.Spot.previewImage = previewImg.url
        } else {
            review.Spot.previewImage = 'No preview image yet'
        }
    }

    return res.json(userObj);
});




module.exports = router;
