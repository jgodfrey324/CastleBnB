'use strict';

/** @type {import('sequelize-cli').Migration} */

let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA
}
options.tableName = 'SpotImages';

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
      spotId: 1,
      url: 'https://vulcca.com/wp-content/uploads/2022/03/722-Steiner-Street-Alamo-Square-San-Francisco-1.jpeg',
      preview: true
    },
    {
      spotId: 2,
      url: 'https://luxesource.com/wp-content/uploads/2021/09/LX_Arizona65_HOM_Miller_03.jpg',
      preview: true
    },
    {
      spotId: 3,
      url: 'https://clv.h-cdn.co/assets/17/12/2560x2560/square-1490112508-colorful-house-from-up-recreation-utah.jpg',
      preview: true
    },
    {
      spotId: 4,
      url: 'https://flowermag.com/wp-content/uploads/2021/05/MJ21_LadewGardens_Helen-Norman-The-Cottage-Garden.jpg',
      preview: true
    },
    {
      spotId: 3,
      url: 'https://thedisneyblog.com/wp-content/uploads/2011/07/UP_house_front_wballoons.jpg',
      preview: false
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
