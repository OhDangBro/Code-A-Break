const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
// create our option model
class Option extends Model {
  static upvote(body, models) {
    return models.Vote.create({
      user_id: body.user_id,
      option_id: body.option_id
    }).then(() => {
      return Option.findOne({
        where: {
          id: body.option_id
        },
        attributes: [
          'id',
          'option_url',
          'title',
          'created_at',
          [
            sequelize.literal('(SELECT COUNT(*) FROM vote WHERE option.id = vote.option_id)'),
            'vote_count'
          ]
        ],
        include: [
          {
            model: models.Comment,
            attributes: ['id', 'comment_text', 'option_id', 'user_id', 'created_at'],
            include: {
              model: models.User,
              attributes: ['username']
            }
          }
        ]
      });
    });
  }
}

// create fields/columns for option model
Option.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    option_url: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isURL: true
      }
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'id'
      }
    }
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'option'
  }
);

module.exports = Option;
