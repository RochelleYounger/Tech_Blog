const { User } = require('../models');

const userData = [
  {
    username: 'john',
    password: 'password123',
  },
  {
    username: 'jane',
    password: 'password123',
  },
  {
    username: 'brody',
    password: 'password123',
  },
  {
    username: 'brock',
    password: 'password123',
  },
  {
    username: 'slater',
    password: 'password123',
  },
  {
    username: 'dick',
    password: 'password123',
  },
  {
    username: 'damian',
    password: 'password123',
  },
  {
    username: 'bruce',
    password: 'password123',
  },
  {
    username: 'tony',
    password: 'password123',
  },
  {
    username: 'matthew',
    password: 'password123'
  }
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;