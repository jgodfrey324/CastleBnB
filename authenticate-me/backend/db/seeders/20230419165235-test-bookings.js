'use strict';

/** @type {import('sequelize-cli').Migration} */

let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA
}
options.tableName = 'Bookings';

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
      userId: 2,
      startDate: "2023-06-23",
      endDate: "2023-07-01"
    },
    {
      spotId: 2,
      userId: 1,
      startDate: "2023-06-23",
      endDate: "2023-07-01"
    },
    {
      spotId: 4,
      userId: 4,
      startDate: "2023-05-01",
      endDate: "2023-05-12"
    },
    {
      spotId: 1,
      userId: 3,
      startDate: "2023-09-15",
      endDate: "2023-09-20"
    },
    {
      spotId: 4,
      userId: 1,
      startDate: "2023-05-15",
      endDate: "2023-05-19"
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
