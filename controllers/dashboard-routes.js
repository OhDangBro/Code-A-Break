const router = require('express').Router();
const sequelize = require('../config/connection');
const { Option, User, Comment, Vote } = require('../models');
const withAuth = require('../utils/auth');

// get all Options for dashboard
router.get('/', withAuth, (req, res) => {
  console.log(req.session);
  console.log('======================');
  Option.findAll({
    where: {
      user_id: req.session.user_id
    },
    attributes: [
      'id',
      'otion_url',
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
      const options = dbOptionData.map(option => option.get({ plain: true }));
      res.render('dashboard', { options, loggedIn: true });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get('/edit/:id', withAuth, (req, res) => {
  Option.findByPk(req.params.id, {
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
      if (dbOptionData) {
        const Option = dbOptionData.get({ plain: true });
        
        res.render('edit-option', {
          Option,
          loggedIn: true
        });
      } else {
        res.status(404).end();
      }
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

module.exports = router;