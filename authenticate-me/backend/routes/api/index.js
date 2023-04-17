const router = require('express').Router();
const sessionRouter = require('./session.js');
const usersRouter = require('./users.js');
const spotsRouter = require('./spots.js');
const { restoreUser } = require('../../utils/auth.js');

//if current user session is valid, set req.user to user in db
//if not valid, set req.user to null
router.use(restoreUser);

router.use('/session', sessionRouter);

router.use('/users', usersRouter);

router.use('/spots', spotsRouter);

router.post('/test', (req, res) => {
    res.json({ requesBody: req.body });
});



module.exports = router;
