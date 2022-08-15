const sequelize = require('../config/connection');
const { User, Post } = require('../models');

const userdata = [
  {
    username: 'willmain',
    email: 'willmain@gmail.com',
    password: 'password556611'
  },
  {
    username: 'aldomain',
    email: 'aldomain@gmail.com',
    password: 'password556622'
  },
  {
    username: 'angelmain',
    email: 'angelmain@gmail.com',
    password: 'password556633'
  },
  {
    username: 'marvanmain',
    email: 'marvanmain@gmail.com',
    password: 'password556644'
  },
  {
    username: 'willmain1',
    email: 'willmain1@gmail.com',
    password: 'password223311'
  },
  {
    username: 'aldomain1',
    email: 'aldomain1@gmail.com',
    password: 'password223322'
  },
  {
    username: 'angelmain1',
    email: 'angelmain1@gmail.com',
    password: 'password223333'
  },
  {
    username: 'marvanmain1',
    email: 'marvanmain1@gmail.com',
    password: 'password223344'
  },
  {
    username: 'testbaby',
    email: 'testbaby@yaaol.com',
    password: 'password774484'
  },
  {
    username: 'testbaby2',
    email: 'testbaby2@yahoo.com',
    password: 'password887794'
  },
  
  {
    username: 'usera',
    email: 'usera@gmail.com',
    password: 'password221122'
  },
  {
    username: 'userb',
    email: 'userb@yahoo.com',
    password: 'password331133'
  },
  {
    username: 'userc',
    email: 'userc@gmail.com',
    password: 'password665511'
  },
  {
    username: 'userd',
    email: 'userd@yahoo.com',
    password: 'password225511'
  },
  {
    username: 'usere',
    email: 'usere@gmail.com',
    password: 'password123'
  },
  {
    username: 'userf',
    email: 'userf@aol.com',
    password: 'password444555'
  },
  {
    username: 'userg',
    email: 'userg@gmail.com',
    password: 'password335566'
  },
  {
    username: 'userh',
    email: 'userh@yahoo.com',
    password: 'password881144'
  },
  {
    username: 'userj',
    email: 'userj@gmail.com',
    password: 'password774433'
  },
  {
    username: 'testino',
    email: 'testino5@gmail.com',
    password: 'password665544'
  }
];

const seedUsers = () => User.bulkCreate(userdata, {individualHooks: true});

module.exports = seedUsers;
