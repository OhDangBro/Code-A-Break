const router = require('express').Router();
const sequelize = require('../../config/connection');
const { Option, User, Vote, Comment } = require('../../models');

// get all users
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
    order: [['created_at', 'DESC']],
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
    .then(dbOptionData => res.json(dbOptionData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get('/:id', (req, res) => {
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
      res.json(dbOptionData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.post('/', (req, res) => {
  // expects {title: 'Codeabreak goes public!', option_url: 'https://code.com/press', user_id: 1}
  Option.create({
    title: req.body.title,
    option_url: req.body.option_url,
    user_id: req.body.user_id
  })
    .then(dbOptionData => res.json(dbOptionData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.put('/upvote', (req, res) => {
  Option.upvote(req.body, { Vote, Comment, User})
    .then(updatedOptionData => res.json(updatedOptionData))
    .catch(err => {
      console.log(err);
      res.status(400).json(err);
    });
});

router.put('/:id', (req, res) => {
  Option.update(
    {
      title: req.body.title
    },
    {
      where: {
        id: req.params.id
      }
    }
  )
    .then(dbOptionData => {
      if (!dbOptionData) {
        res.status(404).json({ message: 'No option found with this id' });
        return;
      }
      res.json(dbOptionData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.delete('/:id', (req, res) => {
  Option.destroy({
    where: {
      id: req.params.id
    }
  })
    .then(dbOptionData => {
      if (!dbOptionData) {
        res.status(404).json({ message: 'No option found with this id' });
        return;
      }
      res.json(dbOptionData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
  
