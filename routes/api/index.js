const router = require('express').Router();

const userRoutes = require('./user-routes.js');
const optionRoutes = require('./option-routes');
const commentRoutes = require('./comment-routes');

router.use('/users', userRoutes);
router.use('/options', optionRoutes);
router.use('/comments', commentRoutes);

module.exports = router;