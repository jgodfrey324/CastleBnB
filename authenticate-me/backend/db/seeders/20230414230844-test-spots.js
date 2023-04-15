'use strict';

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
   options.tableName = 'Spots';
   await queryInterface.bulkInsert(options, [
    {
      ownerId: 1,
      address: '123 Disney Lane',
      city: 'San Francisco',
      state: 'California',
      country: 'United States of America',
      lat: 37.7645358,
      lng: -122.4730327,
      name: 'App Academy',
      description: 'Place where web developers are created',
      price: 123
    },
    {
      ownerId: 3,
      address: '125 Biscuit Ave',
      city: 'Lavender',
      state: 'Arizona',
      country: 'United States of America',
      lat: 30.55555,
      lng: -102.2345,
      name: 'Universal Meeting',
      description: 'Some place over the rainbow',
      price: 158
    },
    {
      ownerId: 3,
      address: '2225 Baker Street',
      city: 'Colorful',
      state: 'Utah',
      country: 'USA',
      lat: 21.7645356,
      lng: -55.4730326,
      name: 'Up High',
      description: 'The number one place to escape, go off the radar',
      price: 275
    },
    {
      ownerId: 2,
      address: '3456 Wonderful Lane',
      city: 'Petunia',
      state: 'Maryland',
      country: 'USA',
      lat: -80.8888,
      lng: 45.4730326,
      name: 'Up High',
      description: 'The number one place to escape, go off the radar',
      price: 308
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
    options.tableName = 'Spots';
    // const Op = Sequelize.Op;
    await queryInterface.bulkDelete(options);
  }
};
