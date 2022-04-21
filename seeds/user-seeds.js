const { User } = require('../models');

const userData = [
  {
    username: 'john',
    password123: 'password123',
  },
  {
    username: 'jane',
    password123: 'password123'
  },
  {
    username: 'brody',
    password123: 'password123'
  },
  {
    username: 'brock',
    password123: 'password123'
  },
  {
    username: 'slater',
    password123: 'password123'
  },
  {
    username: 'dick',
    password123: 'password123'
  },
  {
    username: 'damian',
    password123: 'password123'
  },
  {
    username: 'bruce',
    password123: 'password123'
  },
  {
    username: 'tony',
    password123: 'password123'
  },
  {
    username: 'matthew',
    password123: 'password123'
  }
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;