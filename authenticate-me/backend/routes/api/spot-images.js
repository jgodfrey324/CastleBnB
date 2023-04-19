const express = require('express');
const { Op } = require('sequelize');
const bcrypt = require('bcryptjs');
const { restoreUser, requireAuth } = require('../../utils/auth');
const { SpotImage, Spot } = require('../../db/models');
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');
const router = express.Router();

//middleware for authorization
const checkAuthorization = async (req, res, next) => {
    const spotImg = await SpotImage.findByPk(req.params.imageId);

    if (!spotImg) {
        const err = new Error("Spot Image couldn't be found");
        err.status = 404;
        err.title = "Spot Image couldn't be found";
        return next(err);
    }

    const spot = await Spot.findByPk(spotImg.spotId);

    if (spot.ownerId !== req.user.id) {
        const err = new Error("Unauthorized");
        err.status = 401;
        err.title = "Unauthorized";
        return next(err);
    }

    next();
}

router.delete('/:imageId', [requireAuth, checkAuthorization], async (req, res) => {
    const deleteImg = await SpotImage.findByPk(req.params.imageId);

    deleteImg.destroy();

    return res.json({
        message: 'Successfully deleted'
    });
});





module.exports = router;
