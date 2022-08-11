// import all models
const Option = require('./Option');
const User = require('./User');
const Vote = require('./Vote');
const Comment = require('./Comment');

// create associations
User.hasMany(Option, {
  foreignKey: 'user_id'
});

Option.belongsTo(User, {
  foreignKey: 'user_id'
});

// vote
User.belongsToMany(Option, {
  through: Vote,
  as: 'voted_options',
  foreignKey: 'user_id'
});

Option.belongsToMany(User, {
  through: Vote,
  as: 'voted_Options',
  foreignKey: 'option_id'
});


// connect users to vote
Vote.belongsTo(User, {
  foreignKey: 'user_id'
});

Vote.belongsTo(Option, {
  foreignKey: 'option_id'
});

User.hasMany(Vote, {
  foreignKey: 'user_id'
});

Option.hasMany(Vote, {
  foreignKey: 'option_id'
});

//comment
Comment.belongsTo(User, {
  foreignKey: 'user_id'
});

Comment.belongsTo(Option, {
  foreignKey: 'option_id'
});

User.hasMany(Comment, {
  foreignKey: 'user_id'
});

Option.hasMany(Comment, {
  foreignKey: 'option_id'
});





module.exports = { User, Option, Vote, Comment };