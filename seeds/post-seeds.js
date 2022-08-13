const { Post } = require('../models');

const postdata = [
  {
    title: 'Coding Help.',
    post_url: 'https://www.freecodecamp.org/news/best-developer-communities-to-be-part-of-in-2020/',
    user_id: 10
  },
  {
    title: 'Morbi non quam nec dui luctus rutrum.',
    post_url: 'https://www.coursera.org/articles/study-habits',
    user_id: 8
  },
  {
    title: 'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue.',
    post_url: 'http://canada1.national.edu/the-10-best-brain-food-snacks-for-studying/',
    user_id: 1
  },
  {
    title: 'Nunc purus.',
    post_url: 'https://www.buzzfeed.com/tashweenali/snacks-for-studying',
    user_id: 4
  },
  {
    title: 'Pellentesque eget nunc.',
    post_url: 'https://www.freecodecamp.org/news/best-developer-communities-to-be-part-of-in-2020/	',
    user_id: 7
  },
  {
    title: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
    post_url: 'https://stanford.edu/consequat.png',
    user_id: 4
  },
  {
    title: 'In hac habitasse platea dictumst.',
    post_url: 'https://www.nytimes.com/wirecutter/blog/free-home-workouts/	',
    user_id: 1
  },
  {
    title: 'Morbi non quam nec dui luctus rutrum.',
    post_url: 'https://medium.com/geekculture/funny-things-only-developers-understand-347f7d73a228	',
    user_id: 1
  },
  {
    title: 'Duis ac nibh.',
    post_url: 'https://levelup.gitconnected.com/the-funny-side-of-a-programmers-life-44cab153edf9',
    user_id: 9
  },
  {
    title: 'Curabitur at ipsum ac tellus semper interdum.',
    post_url: 'https://betterprogramming.pub/7-great-sources-for-programming-humor-14983a36f437	',
    user_id: 5
  },
  {
    title: 'In hac habitasse platea dictumst.',
    post_url: 'http://china.com.cn/lectus/vestibulum.json',
    user_id: 3
  },
  {
    title: 'Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo.',
    post_url: 'https://javascript.plainenglish.io/20-funny-tweets-that-real-people-actually-tweeted-about-programming-960e9e5e324d',
    user_id: 10
  },
  {
    title: 'Donec dapibus.',
    post_url: 'https://simpleprogrammer.com/ergonomic-stretches-for-programmers/',
    user_id: 8
  },
  {
    title: 'Nulla tellus.',
    post_url: 'https://lycos.com/natoque/penatibus/et.html',
    user_id: 3
  },
  {
    title: 'Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo.',
    post_url: 'https://gmpg.org/lorem.jpg',
    user_id: 3
  },
  {
    title:
      'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam.',
    post_url: 'https://paginegialle.it/mattis/egestas.jsp',
    user_id: 7
  },
  {
    title: 'In hac habitasse platea dictumst.',
    post_url: 'http://wikia.com/turpis/eget.jpg',
    user_id: 6
  },
  {
    title: 'Etiam justo.',
    post_url: 'https://shareasale.com/quis.json',
    user_id: 4
  },
  {
    title: 'Nulla ut erat id mauris vulputate elementum.',
    post_url: 'http://java.com/diam/neque/vestibulum/eget/vulputate/ut/ultrices.png',
    user_id: 6
  },
  {
    title: 'Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.',
    post_url: 'https://java.com/at/nibh/in.png',
    user_id: 7
  }
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;
