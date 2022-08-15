const router = require('express').Router();
const sequelize = require('../config/connection');
const {  User, Option, Comment, Vote } = require('../models');


router.get('/', (req, res) => {
  console.log('======================');
  Option.findAll({
    attributes: [
      'id',
      'option_url',
      'title',
      'created_at',
      [sequelize.literal('(SELECT COUNT(*) FROM vote WHERE option.id = vote.option_id)'), 'vote_count']
    ],
    include: [
      {
        model: Comment,
        attributes: ['id', 'comment_text', 'option_id', 'user_id', 'created_at'],
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
    .then(dboptionData => {
      const options = dboptionData.map(option => option.get({ plain: true }));

      res.render('homepage', {
        options,
        loggedIn: req.session.loggedIn
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// get single option
router.get('/option/:id', (req, res) => {
  Option.findOne({
    where: {
      id: req.params.id
    },
    attributes: [
      'id',
      'option_url',
      'title',
      'created_at',
      [sequelize.literal('(SELECT COUNT(*) FROM vote WHERE option.id = vote.option_id)'), 'vote_count']
    ],
    include: [
      {
        model: Comment,
        attributes: ['id', 'comment_text', 'option_id', 'user_id', 'created_at'],
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
    .then(dbOptionData => {
      if (!dbOptionData) {
        res.status(404).json({ message: 'No option found with this id' });
        return;
      }

      const option = dbOptionData.get({ plain: true });

      res.render('single-option', {
        option,
        loggedIn: req.session.loggedIn
      });
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
