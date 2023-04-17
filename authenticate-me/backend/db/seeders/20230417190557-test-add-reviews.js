'use strict';

/** @type {import('sequelize-cli').Migration} */

let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA
}
options.tableName = 'Reviews';

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
   await queryInterface.bulkInsert(options, [
    {
      spotId: 3,
      userId: 3,
      review: "I thought this was Sherlock Holmes house...I guess I should've read the series before booking here...",
      stars: 2
    },
    {
      spotId: 1,
      userId: 1,
      review: "For the house being on Disney Lane the experience sure wasn't magical...simply average.",
      stars: 3
    },
    {
      spotId: 4,
      userId: 2,
      review: "Excellent trip. I've always wanted to vist the petunias. They were in full bloom.",
      stars: 5
    },
    {
      spotId: 4,
      userId: 2,
      review: "Amazing, beautiful, wonderful, etc.",
      stars: 5
    },
    {
      spotId: 4,
      userId: 2,
      review: "This is a very hot city, too hot for me.",
      stars: 3
    }
   ], {})
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete(options);
  }
};
