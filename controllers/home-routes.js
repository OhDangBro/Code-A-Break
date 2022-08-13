const router = require('express').Router();
const sequelize = require('../config/connection');
const { User, Review, Comment, Vote } = require('../models');


router.get('/', (req, res) => {
  console.log(req.session);
  Review.findAll({
    attributes: [
      'id',
      'review_url',
      'title',
      'created_at',
      [sequelize.literal('(SELECT COUNT(*) FROM vote WHERE review.id = vote.Review_id)'), 'vote_count']
    ],
    include: [
      {
        model: Comment,
        attributes: ['id', 'comment_text', 'review_id', 'user_id', 'created_at'],
        include: {
          model: User,
          attributes: ['username']
        }
      },
      {
        model: User,
        attributes: ['username']
      }
    ]
  })
    .then(dbReviewData => {
      const reviews = dbReviewData.map(review => review.get({ plain: true }));

      res.render('homepage', { reviews });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

module.exports = router;
