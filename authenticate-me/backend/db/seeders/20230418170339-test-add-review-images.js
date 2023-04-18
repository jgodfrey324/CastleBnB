'use strict';

/** @type {import('sequelize-cli').Migration} */

let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA
}
options.tableName = 'ReviewImages';

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
      reviewId: 1,
      url: "https://media-cldnry.s-nbcnews.com/image/upload/t_fit-1500w,f_auto,q_auto:best/ap/disney%20up%20house%20visitors--2134566421_v2.jpg"
    },
    {
      reviewId: 3,
      url: "https://s3.amazonaws.com/finegardening.s3.tauntoncloud.com/app/uploads/2018/01/23202107/6-11-2012-Barker1-thumb16x9.jpg"
    },
    {
      reviewId: 2,
      url: "https://st.hzcdn.com/simgs/pictures/living-rooms/grand-traditional-mansion-in-fairfax-va-asta-homes-img~af61f08d0cd26c9b_4-1873-1-4a9897e.jpg"
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
