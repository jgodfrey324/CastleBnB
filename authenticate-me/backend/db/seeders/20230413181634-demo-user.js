'use strict';

const bcrypt = require('bcryptjs');

let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;
}

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
   options.tableName = 'Users';
   await queryInterface.bulkInsert(options, [
    {
      firstName: 'Sherlock',
      lastName: 'Holmes',
      email: 'sherly@holmes.io',
      username: 'sherlock-holmes',
      hashedPassword: bcrypt.hashSync('password1')
    },
    {
      firstName: 'Elizabeth',
      lastName: 'Bennet',
      email: 'liz@bennet.io',
      username: 'liz-bennet',
      hashedPassword: bcrypt.hashSync('password2')
    },
    {
      firstName: 'Holly',
      lastName: 'Golightly',
      email: 'holly@golightly.io',
      username: 'holly-golightly',
      hashedPassword: bcrypt.hashSync('password3')
    },
    {
      firstName: 'Effie',
      lastName: 'Trinket',
      email: 'effie@trinket.io',
      username: 'effie-trinket',
      hashedPassword: bcrypt.hashSync('password4')
    },
    {
      firstName: 'Nurse',
      lastName: 'Ratched',
      email: 'nurse@ratched.io',
      username: 'nurse-ratched',
      hashedPassword: bcrypt.hashSync('password5')
    },
    {
      firstName: 'Atticus',
      lastName: 'Finch',
      email: 'atticus@finch.io',
      username: 'atticus-finch',
      hashedPassword: bcrypt.hashSync('password6')
    },
    {
      firstName: 'Clarissa',
      lastName: 'Dalloway',
      email: 'clarissa@dalloway.io',
      username: 'clarissa-dalloway',
      hashedPassword: bcrypt.hashSync('password7')
    },
    {
      firstName: 'Holden',
      lastName: 'Caulfield',
      email: 'holden@caulfield.io',
      username: 'holden-caulfield',
      hashedPassword: bcrypt.hashSync('password8')
    }
   ])
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    options.tableName = 'Users';
    // const Op = Sequelize.Op;
    await queryInterface.bulkDelete(options);
  }
};
