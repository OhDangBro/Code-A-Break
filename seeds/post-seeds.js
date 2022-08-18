const { Post } = require('../models');

const postdata = [
  {
    title: 'Youtube Music Jams',
    post_url: 'https://music.youtube.com/browse/FEmusic_genre_selection',
    post_text: 'This is where I listen to my music!',
    user_id: 10,
    options_id: 'Music'
  },
  {
    title: 'Coding ',
    post_url: 'https://www.youtube.com/watch?v=M5QY2_8704o',
    post_text: 'This worked',
    user_id: 8,
    options_id: 'Music'
  },
  {
    title: 'Music is medicine, listen while you code.',
    post_url: 'https://www.youtube.com/watch?v=M5QY2_8704o',
    post_text:  'This is beatiful',
    user_id: 4,
    options_id: 'Music'
  },
  {
    title: 'Find others coders, working with another person is highly recommended.',
    post_url: 'https://www.freecodecamp.org/news/best-developer-communities-to-be-part-of-in-2020/',
    post_text:  'Love this',
    user_id: 4,
    options_id: 'Other coders'
  },
  {
    title: 'Your chair is important, find the right one for you.',
    post_url: 'https://www.autonomous.ai/ourblog/10-best-chair-for-programmers/',
    post_text:  'My back is suffering, i will check this out',
    user_id: 1,
    options_id: 'Chair'

  },
  {
    title: 'Movies for code a break.',
    post_url: 'https://movieslist.best/list/comedy-movies-about-programmers/',
    post_text:  'This is a great list',
    user_id: 3,
    options_id: 'Movie'
  },
  {
    title: 'Good Study practice for Coding ',
    post_url: 'https://www.coursera.org/articles/study-habits',
    post_text:  'Good to know',
    user_id: 2,
    options_id: 'Study'
  },
  {
    title: 'Brain Food snacking while studying',
    post_url: 'http://canada1.national.edu/the-10-best-brain-food-snacks-for-studying/',
    post_text:  'I will try this ',
    user_id: 1,
    options_id: 'Study'
  },
  {
    title: 'Snack well while coding ',
    post_url: 'https://www.buzzfeed.com/tashweenali/snacks-for-studying',
    post_text:  'good stuff',
    user_id: 4,
    options_id: 'Snacks'
  },
  {
    title: 'Find like minded people ',
    post_url: 'https://www.freecodecamp.org/news/best-developer-communities-to-be-part-of-in-2020/  ',
    post_text:  ' thanks for this ',
    user_id: 3,
    options_id: 'Other coders'
  },
  {
    title: 'Jokes for Developers.',
    post_url: 'https://levelup.gitconnected.com/20-funny-jokes-that-only-a-programmer-can-understand-62d4723a8dca',
    post_text:  'Haha once you get it, lol',
    user_id: 2,
    options_id: 'Humor'
  },
  {
    title: 'Excercising can heel your mind and body while coding .',
    post_url: 'https://www.nytimes.com/wirecutter/blog/free-home-workouts/  ',
    post_text:  'I will try this for sure',
    user_id: 1,
    options_id: 'Excercise'
  },
  {
    title: 'This is a coding world.',
    post_url: 'https://medium.com/geekculture/funny-things-only-developers-understand-347f7d73a228  ',
    post_text:  'This is soo cool',
    user_id: 4,
    options_id: 'Humor'
  },
  {
    title: 'Its not all about the stress, its funny too.',
    post_url: 'https://levelup.gitconnected.com/the-funny-side-of-a-programmers-life-44cab153edf9',
    post_text:  ' good laughs',
    user_id: 3,
    options_id: 'Humor'
  },
  {
    title: 'I did not even try this, I jumped right in ,thank you!.',
    post_url: 'https://careerkarma.com/blog/coding-bootcamp-questions-to-ask-yourself/#:~:text=Coding%20bootcamp%20is%20fantastic%E2%80%93%20for,best%20career%20path%20for%20you.  ',
    post_text:  'something to keep in mind or share with others, cool',
    user_id: 2,
    options_id: 'Research'
  },
  {
    title: 'What is coding without humor.',
    post_url: 'https://flatlogic.com/blog/top-nerd-jokes-for-programmers-to-liven-up-your-day-golden-collection/',
    post_text:  'this is crazy funny',
    user_id: 1,
    options_id: 'Humor'
  },
  {
    title: 'Coders tweet too, code a break and tweet a little.',
    post_url: 'https://javascript.plainenglish.io/20-funny-tweets-that-real-people-actually-tweeted-about-programming-960e9e5e324d',
    post_text:  'nice way to meet other coders too ',
    user_id: 4,
    options_id: 'Tweet'
  },
  {
    title: 'Remember to stretch your coding self.',
    post_url: 'https://simpleprogrammer.com/ergonomic-stretches-for-programmers/',
    post_text:  'I hate stretch but I will try this ',
    user_id: 3,
    options_id: 'Excercise'
  }

  
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;
