const { Post } = require('../models');

const postdata = [
  {
    title: 'Music is medicine, listen while you code.',
    post_url: 'https://www.youtube.com/watch?v=M5QY2_8704o',
    user_id: 4
  },
  {
    title: 'Find others coders, working with another person is highly recommended.',
    post_url: 'https://www.freecodecamp.org/news/best-developer-communities-to-be-part-of-in-2020/',
    user_id: 4
  },
  {
    title: 'Your chair is important, find the right one for you.',
    post_url: 'https://www.autonomous.ai/ourblog/10-best-chair-for-programmers/',
    user_id: 1
  },
  {
    title: 'Movies for code a break.',
    post_url: 'https://movieslist.best/list/comedy-movies-about-programmers/',
    user_id: 3
  },
  {
    title: 'Good Study practice for Coding ',
    post_url: 'https://www.coursera.org/articles/study-habits',
    user_id: 2
  },
  {
    title: 'Brain Food snacking while studying',
    post_url: 'http://canada1.national.edu/the-10-best-brain-food-snacks-for-studying/',
    user_id: 1
  },
  {
    title: 'Snack well while coding ',
    post_url: 'https://www.buzzfeed.com/tashweenali/snacks-for-studying',
    user_id: 4
  },
  {
    title: 'Find like minded people ',
    post_url: 'https://www.freecodecamp.org/news/best-developer-communities-to-be-part-of-in-2020/	',
    user_id: 3
  },
  {
    title: 'Jokes for Developers.',
    post_url: 'https://levelup.gitconnected.com/20-funny-jokes-that-only-a-programmer-can-understand-62d4723a8dca',
    user_id: 2
  },
  {
    title: 'Excercising can heel your mind and body while coding .',
    post_url: 'https://www.nytimes.com/wirecutter/blog/free-home-workouts/	',
    user_id: 1
  },
  {
    title: 'This is a coding world.',
    post_url: 'https://medium.com/geekculture/funny-things-only-developers-understand-347f7d73a228	',
    user_id: 4
  },
  {
    title: 'Its not all about the stress, its funny too.',
    post_url: 'https://levelup.gitconnected.com/the-funny-side-of-a-programmers-life-44cab153edf9',
    user_id: 3
  },
  {
    title: 'I did not even try this, I jumped right in ,thank you!.',
    post_url: 'https://careerkarma.com/blog/coding-bootcamp-questions-to-ask-yourself/#:~:text=Coding%20bootcamp%20is%20fantastic%E2%80%93%20for,best%20career%20path%20for%20you.	',
    user_id: 2
  },
  {
    title: 'What is coding without humor.',
    post_url: 'http://china.com.cn/lectus/vestibulum.json',
    user_id: 1
  },
  {
    title: 'Coders tweet too, code a break and tweet a little.',
    post_url: 'https://javascript.plainenglish.io/20-funny-tweets-that-real-people-actually-tweeted-about-programming-960e9e5e324d',
    user_id: 4
  },
  {
    title: 'Remember to Strecth your coding self.',
    post_url: 'https://simpleprogrammer.com/ergonomic-stretches-for-programmers/',
    user_id: 3
  }

 
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;
