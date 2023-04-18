const express = require('express');
const { Op } = require('sequelize');
const bcrypt = require('bcryptjs');
const { restoreUser, requireAuth } = require('../../utils/auth');
const { Review, User, Spot, ReviewImage, SpotImage } = require('../../db/models');
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');
const router = express.Router();


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
//want to add middleware to check authorization...
const checkAuthorization = async (req, res, next) => {
    const review = await Review.findByPk(req.params.reviewId);

    if (!review) {
        const err = new Error("Review couldn't be found");
        err.status = 404;
        err.title = "Review couldn't be found";
        return next(err);
    }

    if (review.userId !== req.user.id) {
        const err = new Error("Unauthorized");
        err.status = 401;
        err.title = "Unauthorized";
        return next(err);
    }

    next();
}

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

router.put('/:reviewId', [requireAuth, checkAuthorization, validateReview], async (req, res) => {
    const updateReview = await Review.findByPk(req.params.reviewId);

    const { review, stars } = req.body;

    updateReview.set({
        review,
        stars
    });

    await updateReview.save();

    return res.json(updateReview);
});

router.delete('/:reviewId', [requireAuth, checkAuthorization], async (req, res) => {
    const review = await Review.findByPk(req.params.reviewId);

    await review.destroy();

    return res.json({
        message: 'Successfully deleted'
    });
})


module.exports = router;
