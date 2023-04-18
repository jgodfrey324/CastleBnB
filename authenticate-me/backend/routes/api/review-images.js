const express = require('express');
const { Op } = require('sequelize');
const bcrypt = require('bcryptjs');
const { restoreUser, requireAuth } = require('../../utils/auth');
const { Review, ReviewImage } = require('../../db/models');
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');
const router = express.Router();


//want to add middleware to check authorization...
const checkAuthorization = async (req, res, next) => {
    const reviewImg = await ReviewImage.findByPk(req.params.imageId);

    if (!reviewImg) {
        const err = new Error("Review Image couldn't be found");
        err.status = 404;
        err.title = "Review Image couldn't be found";
        return next(err);
    }

    const review = await Review.findByPk(reviewImg.reviewId);

    if (review.userId !== req.user.id) {
        const err = new Error("Unauthorized");
        err.status = 401;
        err.title = "Unauthorized";
        return next(err);
    }

    next();
}

router.delete('/:imageId', [requireAuth, checkAuthorization], async (req, res) => {
    const img = await ReviewImage.findByPk(req.params.imageId);

    await img.destroy();

    return res.json({
        message: 'Successfully deleted'
    });
});



module.exports = router;
