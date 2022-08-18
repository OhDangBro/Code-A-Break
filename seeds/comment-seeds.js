const { Comment } = require('../models');

const commentdata = [
  {
    comment_text: 'Wow, this is so soothing, thank you for sharing this .',
    user_id: 10,
    post_id: 1
  },
  {
    comment_text: 'Wish I knew about these communities before I started coding!!.',
    user_id: 6,
    post_id: 4
  },
  {
    comment_text: 'I did not know these movies existed, I will definitely check them out.',
    user_id: 7,
    post_id: 10
  },
  {
    comment_text: 'Not sure if I ca nkeep up with the practices after getting conused but I will try, love the idea.',
    user_id: 1,
    post_id: 3
  },
  {
    comment_text: 'I have gained at lease 15 pounds since I started coding, let me check this out',
    user_id: 5,
    post_id: 8
  },
  {
    comment_text: 'Some of these guys are so cool!!, I made a good connection, thank you for this .',
    user_id: 2,
    post_id: 7
  },
  {
    comment_text: 'Needed those laughs, I was cracking up.',
    user_id: 8,
    post_id: 6
  },
  {
    comment_text: 'I did not get some of the jokes at first, but this is funny as hell.',
    user_id: 3,
    post_id: 2
  },
  {
    comment_text: 'I generally focus on coding but I find taking time to to a mindless activity helps me.',
    user_id: 9,
    post_id: 5
  },
  {
    comment_text: 'never put much thought into what I snack on but it makes sense.',
    user_id: 4,
    post_id: 9
  },
  {
    comment_text: 'I agree 100 percent, strectching is good for your circulation after sitting long hours.',
    user_id: 10,
    post_id: 5
  },
  {
    comment_text: 'I find that I have a better coding experience after watching or listening to a little humor.',
    user_id: 1,
    post_id: 11
  },

  {
    comment_text: 'I love this ',
    user_id: 9,
    option_id: 1
  },
  {
    comment_text: 'Cool.',
    user_id: 1,
    option_id: 8
  },
  {
    comment_text: 'Amazing community.',
    user_id: 3,
    option_id: 10
  },
  {
    comment_text: 'This is so funny.',
    user_id: 5,
    option_id: 18
  },
  {
    comment_text: 'many coders like this a lot.',
    user_id: 8,
    option_id: 5
  },
  {
    comment_text: 'Laugh a little.',
    user_id: 7,
    option_id: 20
  },
  {
    comment_text: 'Snacking goes woht coding, see this!.',
    user_id: 1,
    option_id: 7
  },
  {
    comment_text: 'Sweet!.',
    user_id: 10,
    option_id: 6
  }

];

const seedComments = () => Comment.bulkCreate(commentdata);

module.exports = seedComments;
