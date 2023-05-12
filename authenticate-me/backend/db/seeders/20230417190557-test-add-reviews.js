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
      spotId: 1,
      userId: 8,
      review: "Honestly very impractical",
      stars: 2
    },
    {
      spotId: 1,
      userId: 4,
      review: "I can basically see Disney Land looking at this castle! Fun to explore, but very very crowded outside.",
      stars: 3
    },
    {
      spotId: 1,
      userId: 2,
      review: "Met all of my expectations. Beautiful inside and outside. Would've liked to have a longer stay...",
      stars: 4
    },
    {
      spotId: 1,
      userId: 3,
      review: "Wonderful girls trip! The place is so big it was almost creepy..but still loved it",
      stars: 5
    },
    {
      spotId: 2,
      userId: 2,
      review: "Is a hotdog a sandwich?",
      stars: 3
    },
    {
      spotId: 2,
      userId: 7,
      review: "I came all the way here for the cherry blossoms and it was so worth it!",
      stars: 5
    },
    {
      spotId: 2,
      userId: 6,
      review: "The wooden interior is excellent, very homey :)",
      stars: 4
    },
    {
      spotId: 2,
      userId: 5,
      review: "I wish the view from the outside was better",
      stars: 3
    },
    {
      spotId: 3,
      userId: 2,
      review: "The history! Magnificent!",
      stars: 5
    },
    {
      spotId: 3,
      userId: 4,
      review: "An apple a day keeps the doctor away.",
      stars: 2
    },
    {
      spotId: 4,
      userId: 6,
      review: "The most beautiful place I've ever been. Best view of the sea from the room.",
      stars: 5
    },
    {
      spotId: 4,
      userId: 8,
      review: "It stormed the whole time I was there",
      stars: 1
    },
    {
      spotId: 4,
      userId: 3,
      review: "Wonderful place to visit, but there was no dishwasher!",
      stars: 3
    },
    {
      spotId: 4,
      userId: 7,
      review: "Something else, that's all. Just something else",
      stars: 4
    },
    {
      spotId: 5,
      userId: 1,
      review: "I loved the moat! I wonder what would be at the bottom if it was drained...",
      stars: 5
    },
    {
      spotId: 5,
      userId: 2,
      review: "I wish it was furnished a little more :(",
      stars: 2
    },
    {
      spotId: 5,
      userId: 8,
      review: "What an amazing area all around!",
      stars: 5
    },
    {
      spotId: 5,
      userId: 6,
      review: "...dogs or cats...",
      stars: 3
    },
    {
      spotId: 6,
      userId: 3,
      review: "I expected....more.....",
      stars: 2
    },
    {
      spotId: 6,
      userId: 1,
      review: "Atleast the history is rich",
      stars: 3
    },
    {
      spotId: 6,
      userId: 7,
      review: "The host wasn't very easy to communicate with",
      stars: 2
    },
    {
      spotId: 7,
      userId: 8,
      review: "I love this ocean spot! At night it's something else too",
      stars: 4
    },
    {
      spotId: 7,
      userId: 3,
      review: "I couldn't decide whether to spend more time inside or outside!",
      stars: 5
    },
    {
      spotId: 8,
      userId: 1,
      review: "Even though there's not much left, it was an amazing experience, just look at the area!",
      stars: 4
    },
    {
      spotId: 8,
      userId: 8,
      review: "My reservation got cancelled by the owner and I never got an explanation.",
      stars: 1
    },
    {
      spotId: 8,
      userId: 7,
      review: "The whole area felt like a fairy tale... I wish there was more left of the place",
      stars: 3
    },
    {
      spotId: 9,
      userId: 2,
      review: "Favorite place hands down. Quiet area, lovely architecture.",
      stars: 5
    },
    {
      spotId: 9,
      userId: 1,
      review: "Speechless, a must see",
      stars: 5
    },
    {
      spotId: 9,
      userId: 6,
      review: "Never seen anything like it. 10/10 recommend",
      stars: 5
    },
    {
      spotId: 9,
      userId: 4,
      review: "I want to stay here forever!",
      stars: 5
    },
    {
      spotId: 10,
      userId: 6,
      review: "What's your favorite fruit?",
      stars: 3
    },
    {
      spotId: 10,
      userId: 4,
      review: "I wonder what it's like to see this place in it's prime..",
      stars: 3
    },
    {
      spotId: 11,
      userId: 5,
      review: "My number 1 visit. Everyone needs to see",
      stars: 5
    },
    {
      spotId: 11,
      userId: 8,
      review: "Beautiful glowing exterior and shining interior",
      stars: 5
    },
    {
      spotId: 11,
      userId: 1,
      review: "Something suspicious about this place..",
      stars: 3
    },
    {
      spotId: 12,
      userId: 1,
      review: "Is this what Dracula's castle is based off of?",
      stars: 3
    },
    {
      spotId: 12,
      userId: 2,
      review: "Lovely colors in this castle. Take me back to when it was first built!",
      stars: 5
    },
    {
      spotId: 12,
      userId: 3,
      review: "There's something spooky about this place at night",
      stars: 2
    },
    {
      spotId: 13,
      userId: 2,
      review: "The city surrounding is far too busy for me. If you like quiet space, this isn't for you.",
      stars: 2
    },
    {
      spotId: 13,
      userId: 6,
      review: "The stained glass windows and architecture are beautiful",
      stars: 4
    },
    {
      spotId: 13,
      userId: 8,
      review: "Crunchy or soft shell tacos?",
      stars: 2
    },
    {
      spotId: 16,
      userId: 3,
      review: "Make sure you come outside during the sunset to see the golden reflection!",
      stars: 5
    },
    {
      spotId: 16,
      userId: 7,
      review: "Not very much lounging space inside, but overall very beautiful",
      stars: 4
    },
    {
      spotId: 16,
      userId: 5,
      review: "How many licks to the center of the tootsie pop?",
      stars: 3
    },
    {
      spotId: 17,
      userId: 1,
      review: "My number 1 favorite, you must stay here",
      stars: 5
    },
    {
      spotId: 17,
      userId: 6,
      review: "Beautiful colors. The exterior compliments the land so well.",
      stars: 4
    },
    {
      spotId: 17,
      userId: 7,
      review: "It's better to look at from far away than near..",
      stars: 2
    },
    {
      spotId: 17,
      userId: 8,
      review: "Orange is my favorite color",
      stars: 3
    },
    {
      spotId: 18,
      userId: 4,
      review: "Lovely garden.",
      stars: 4
    },
    {
      spotId: 18,
      userId: 3,
      review: "Loved being on the balconey the most",
      stars: 4
    },
    {
      spotId: 19,
      userId: 2,
      review: "The inside and the outside match so well it's very satisfying.",
      stars: 4
    },
    {
      spotId: 19,
      userId: 1,
      review: "So quiet and peaceful inside",
      stars: 4
    },
    {
      spotId: 19,
      userId: 5,
      review: "Wish there was more sunlight coming inside :(",
      stars: 2
    },
    {
      spotId: 19,
      userId: 4,
      review: "So many fascinating details inside.",
      stars: 3
    },
    {
      spotId: 20,
      userId: 8,
      review: "I love the snow",
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
