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
    comment_text: 'Sed vel enim sit amet nunc viverra dapibus.',
    user_id: 7,
    option_id: 4
  },
  {
    comment_text: 'Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat.',
    user_id: 6,
    option_id: 12
  },
  {
    comment_text: 'Morbi a ipsum.',
    user_id: 6,
    option_id: 20
  },
  {
    comment_text: 'Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.',
    user_id: 3,
    option_id: 14
  },
  {
    comment_text: 'Donec ut mauris eget massa tempor convallis.',
    user_id: 5,
    option_id: 4
  },
  {
    comment_text:
      'Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo.',
    user_id: 4,
    option_id: 9
  },
  {
    comment_text:
      'Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.',
    user_id: 5,
    option_id: 14
  },
  {
    comment_text: 'Quisque porta volutpat erat.',
    user_id: 6,
    option_id: 2
  },
  {
    comment_text: 'Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.',
    user_id: 8,
    option_id: 2
  },
  {
    comment_text:
      'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est.',
    user_id: 2,
    option_id: 20
  },
  {
    comment_text: 'Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis.',
    user_id: 4,
    option_id: 11
  },
  {
    comment_text:
      'Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est.',
    user_id: 5,
    option_id: 13
  },
  {
    comment_text:
      'Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.',
    user_id: 9,
    option_id: 16
  },
  {
    comment_text: 'Curabitur convallis.',
    user_id: 6,
    option_id: 4
  },
  {
    comment_text: 'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
    user_id: 4,
    option_id: 10
  },
  {
    comment_text: 'Morbi non quam nec dui luctus rutrum.',
    user_id: 3,
    option_id: 8
  },
  {
    comment_text:
      'Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique.',
    user_id: 8,
    option_id: 10
  },
  {
    comment_text:
      'Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.',
    user_id: 1,
    option_id: 15
  },
  {
    comment_text: 'Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend.',
    user_id: 5,
    option_id: 3
  },
  {
    comment_text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
    user_id: 1,
    option_id: 15
  },
  {
    comment_text: 'Nam tristique tortor eu pede.',
    user_id: 4,
    option_id: 16
  },
  {
    comment_text: 'Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.',
    user_id: 4,
    option_id: 18
  },
  {
    comment_text: 'Proin eu mi. Nulla ac enim.',
    user_id: 4,
    option_id: 10
  },
  {
    comment_text: 'Sed ante. Vivamus tortor.',
    user_id: 7,
    option_id: 5
  },
  {
    comment_text: 'Aliquam quis turpis eget elit sodales scelerisque.',
    user_id: 10,
    option_id: 1
  },
  {
    comment_text: 'Donec quis orci eget orci vehicula condimentum.',
    user_id: 3,
    option_id: 19
  },
  {
    comment_text: 'Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.',
    user_id: 5,
    option_id: 3
  },
  {
    comment_text: 'Curabitur gravida nisi at nibh. In hac habitasse platea dictumst.',
    user_id: 10,
    option_id: 14
  },
  {
    comment_text: 'Maecenas ut massa quis augue luctus tincidunt.',
    user_id: 10,
    option_id: 8
  },
  {
    comment_text: 'Cras in purus eu magna vulputate luctus.',
    user_id: 10,
    option_id: 11
  },
  {
    comment_text: 'Etiam vel augue. Vestibulum rutrum rutrum neque.',
    user_id: 8,
    option_id: 5
  },
  {
    comment_text: 'Proin at turpis a pede posuere nonummy.',
    user_id: 8,
    option_id: 19
  },
  {
    comment_text: 'Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl.',
    user_id: 9,
    option_id: 19
  },
  {
    comment_text:
      'Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.',
    user_id: 5,
    option_id: 4
  },
  {
    comment_text:
      'Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc.',
    user_id: 2,
    option_id: 11
  },
  {
    comment_text: 'Vestibulum ac est lacinia nisi venenatis tristique.',
    user_id: 4,
    option_id: 6
  },
  {
    comment_text: 'Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.',
    user_id: 9,
    option_id: 6
  },
  {
    comment_text:
      'Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam.',
    user_id: 7,
    option_id: 9
  },
  {
    comment_text: 'Integer ac leo. Pellentesque ultrices mattis odio.',
    user_id: 4,
    option_id: 19
  },
  {
    comment_text: 'Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.',
    user_id: 10,
    option_id: 1
  },
  {
    comment_text:
      'Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus.',
    user_id: 2,
    option_id: 19
  },
  {
    comment_text: 'Proin risus. Praesent lectus.',
    user_id: 10,
    option_id: 1
  },
  {
    comment_text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus.',
    user_id: 10,
    option_id: 12
  }
];

const seedComments = () => Comment.bulkCreate(commentdata);

module.exports = seedComments;
