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
      address: '1225 Castle Place',
      city: 'Hohenschwangau',
      state: 'Bavaria',
      country: 'Germany',
      lat: 10,
      lng: 47,
      name: 'Neuschwanstein',
      description: `Neuschwanstein Castle is a 19th-century historicist palace on a rugged hill above the village of Hohenschwangau near Füssen in southwest Bavaria, Germany. The palace was commissioned by King Ludwig II of Bavaria as a retreat and in honour of composer Richard Wagner. Ludwig chose to pay for the palace out of his personal fortune and by means of extensive borrowing, rather than Bavarian public funds. Construction began in 1869, but was never completed.

      The castle was intended to serve as a private residence for the king, but he died in 1886 and it was opened to the public shortly after his death. Since then more than 61 million people have visited Neuschwanstein Castle. More than 1.3 million people visit annually, with as many as 6,000 per day in the summer.`,
      price: 5000
    },
    {
      ownerId: 1,
      address: '1226 Himeji House',
      city: 'Himeji',
      state: 'Hyōgo Prefecture',
      country: 'Japan',
      lat: 134,
      lng: 34,
      name: 'White Heron',
      description: `Himeji Castle, also known as White Heron Castle due to its elegant, white appearance, is widely considered Japan's most spectacular castle for its imposing size and beauty and its well preserved, complex castle grounds. The castle is both a national treasure and a world heritage site. Unlike many other Japanese castles, it was never destroyed by war, earthquake or fire and survives to this day as one of the country's twelve original castles.

      Himeji Castle lies at a strategic point along the western approach to the former capital city of Kyoto. The first fortifications built on the site were completed in the 1400s, and were gradually enlarged over the centuries by the various clans who ruled over the region. The castle complex as it survives today was completed in 1609. It is made up of over eighty buildings spread across multiple baileys, which are connected by a series of gates and winding paths.`,
      price: 7012
    },
    {
      ownerId: 1,
      address: '1227 Stirling Street',
      city: 'Stirling',
      state: 'Scotland',
      country: 'Scotland',
      lat: -3,
      lng: 56,
      name: 'The Stirling Castle',
      description: `This castle sits atop an intrusive crag, which forms part of the Stirling Sill geological formation. It is surrounded on three sides by steep cliffs, giving it a strong defensive position.

      Most of the principal buildings of the castle date from the fifteenth and sixteenth centuries. A few structures remain from the fourteenth century, while the outer defences fronting the town date from the early eighteenth century.

      Before the union with England, Stirling Castle was also one of the most used of the many Scottish royal residences, very much a palace as well as a fortress. Several Scottish Kings and Queens have been crowned at Stirling, including Mary, Queen of Scots, in 1542, and others were born or died there.

      There have been at least eight sieges of Stirling Castle, including several during the Wars of Scottish Independence, with the last being in 1746, when Bonnie Prince Charlie unsuccessfully tried to take the castle.`,
      price: 4011
    },
    {
      ownerId: 1,
      address: '1228 Miramare Square',
      city: 'Miramare',
      state: 'Trieste',
      country: 'Italy',
      lat: -80.8888,
      lng: 45.4730326,
      name: 'Miramare Castle',
      description: `This majestic white castle, the beloved home of Archduke Ferdinand Maximilian of Habsburg (brother of Emperor Franz Joseph), overlooks the sea and is surrounded by a huge park full of rare and exotic tree species collected by the Archduke himself in his scientific expeditions around the world aboard the frigate Novara.

      The Castle was built for Maximilian, who fell in love with the view of the small bay and decided to build his home here, where he lived with his wife Charlotte of Belgium.

      Maximilian and Charlotte were able to enjoy their beautiful castle for only four years or so before leaving for Mexico, where Maximilian was crowned Emperor Maximilian of Mexico, only to be executed by firing squad in 1867.
      Legend has it that Charlotte, mad with grief, still wanders in the park calling his name.`,
      price: 3050
    },
    {
      ownerId: 2,
      address: '2112 Bodiam Lane',
      city: 'Bodiam',
      state: 'Robertsbridge',
      country: 'United Kingdom',
      lat: 0.5435,
      lng: 51.0023,
      name: 'Bodiam Castle',
      description: `Bodiam Castle was built around 1385 by Sir Edward Dallingridge and his wife Elizabeth. They lived in a turbulent age, with protests and social upheaval caused by the Black Death and royal disputes that led to the Wars of the Roses.
      Set in the heart of an historic landscape, with spiral staircases, battlements and a portcullis, 14th century Bodiam Castle is one of Britain's most picturesque and romantic ancient monuments.

      Windows where arrows were once loosed, a tower that was once a look-out and ruins that were once walked upon by knights; this is a place where you can relive your childhood memories and let your imagination run riot.

      A wide moat encircles the seemingly untouched Medieval exterior. In the impressive gatehouse is the castle's original wooden portcullis, an extremely rare example of its kind. In the courtyard, enough of the interior ruins survive to give an impression of castle life.`,
      price: 902
    },
    {
      ownerId: 2,
      address: '2113 Conwy Ave',
      city: 'Conwy',
      state: 'North Wales',
      country: 'United Kingdom',
      lat: -4,
      lng: 53,
      name: 'Castle Conwy',
      description: `Construction of Conwy began in 1283. The castle was an important part of King Edward I's plan of surrounding Wales in "an iron ring of castles" to subdue the rebellious population. The highly defensible wall Edward built around the town was intended to protect the English colony planted at Conwy. The native Welsh population were violently opposed to English occupation of their homeland.

      Conwy is by any standards one of the great fortresses of medieval Europe. First impressions are of tremendous military strength, a dominating position and a unity and compactness of design. The eight mighty towers seem to spring from the very rock which dictated the castle's eventual layout. As with Edward I's other great castles in north Wales, the design and building operations were in the hands of James of St. George, who eventually held the title of Master of the Kings Works in Wales.`,
      price: 1019
    },
    {
      ownerId: 2,
      address: '2114 Chillon Place',
      city: 'Veytaux',
      state: 'Vaud',
      country: 'Switzerland',
      lat: -5,
      lng: 53,
      name: 'Château de Chillon',
      description: `The castle of Chillon is built on the island of Chillon, an oval limestone rock advancing in Lake Geneva between Montreux and Villeneuve with a steep side on one side and on the other side the lake and its steep bottom. The placement of the castle is strategic: it guards the passage between the Vaud Riviera [fr], which allows access to the north towards Germany and France, and the Rhone valley, a quick route to Italy, and offers a viewpoint over the Savoyard coast on the opposite side of the lake. A garrison could thus control (both militarily and commercially) access to the road to Italy and apply a toll.

      Chillon has been a military site since the Roman period and the development of the current castle spans three periods: the Savoy Period, the Bernese Period, and the Vaudois Period.`,
      price: 8200
    },
    {
      ownerId: 2,
      address: '2115 Dunnottar Square',
      city: 'Stonehaven',
      state: 'Aberdeenshire',
      country: 'Scotland',
      lat: -6,
      lng: 53,
      name: 'Fort on the Shelving Slope',
      description: `Dunnottar Castle is a ruined medieval fortress located upon a rocky headland on the north-eastern coast of Scotland, about 2 miles south of Stonehaven. The surviving buildings are largely of the 15th and 16th centuries, but the site is believed to have been fortified in the Early Middle Ages. Dunnottar has played a prominent role in the history of Scotland through to the 18th-century Jacobite risings because of its strategic location and defensive strength.`,
      price: 509
    },
    {
      ownerId: 3,
      address: '2116 Eltz Plaza',
      city: 'Wierschem',
      state: 'Rhineland',
      country: 'Germany',
      lat: -7,
      lng: 53,
      name: 'Eltz Castle',
      description: `Eltz Castle is different. It remained unscathed by wars. It has been owned and cared for by the same family from when it was built until today. Its architecture has no comparison and many of the original furnishings of the past eight centuries still remain in place. It houses rustic suits of armour, swords and halberds as well as magnificent courtly gold and silver artefacts. It towers high on a large rock set deep in a valley. It stands in the midst of the Eltz Forest, a nature reserve of serene beauty, which offers numerous hiking trails and outdoor areas for sports and recreation for all age groups. `,
      price: 1920
    },
    {
      ownerId: 3,
      address: '2117 Edinburgh Lane',
      city: 'Edinburgh',
      state: 'Scotland',
      country: 'Scotland',
      lat: -8,
      lng: 53,
      name: 'Edinburgh',
      description: `As one of the most important strongholds in the Kingdom of Scotland, Edinburgh Castle was involved in many historical conflicts from the Wars of Scottish Independence in the 14th century to the Jacobite rising of 1745. Research undertaken in 2014 identified 26 sieges in its 1,100-year history, giving it a claim to having been "the most besieged place in Great Britain and one of the most attacked in the world".[4] Few of the present buildings pre-date the Lang Siege of the 16th century when the medieval defences were largely destroyed by artillery bombardment.`,
      price: 3000
    },
    {
      ownerId: 3,
      address: '2118 Hluboka Ave',
      city: 'Hluboká nad Vltavou',
      state: 'Czechia',
      country: 'Czech Republic',
      lat: -9,
      lng: 53,
      name: 'Hluboká Castle',
      description: `Originally a royal castle on a promontory above the Vltava River, after many changes in 1661 became the property of the Schwarzenberg family. The current appearance of the chateau complex, including the park and the surrounding landscape, was inspired by the trips of Prince Jan Adolf II. Schwarzenberg to Great Britain, who as a representative of an important and wealthy family participated the coronation of Queen Victoria in 1838. As an honorary diplomat of the Habsburg monarchy, he traveled to the coronation with his wife, Princess Eleonora, who greatly influenced castle appearance. Hluboká soon became the seat of the Schwarzenberg family.

      The chateau itself was rebuilt in the Baroque style in the first third of the 18th century and maintained its appearance until the romantic reconstruction in the mid-19th century. The inspiration for the reconstruction of the chateau was mainly the royal castle Windsdor.`,
      price: 6091
    },
    {
      ownerId: 3,
      address: '2118 Hluboka Ave',
      city: 'Hunedoara',
      state: 'Transylvania',
      country: 'Romania',
      lat: -10,
      lng: 53,
      name: 'Castle Corvin',
      description: `The castle has three large areas: the Knight's Hall, the Diet Hall and the circular stairway. The halls are rectangular in shape and are decorated with marble. The Diet Hall was used for ceremonies or formal receptions whilst the Knight's Hall was used for feasts. In 1456, John Hunyadi died and work on the castle stagnated. Starting with 1458, new commissions were being undergone to construct the Matia Wing of the castle. In 1480, work was completely stopped on the castle and it was recognised as being one of the biggest and most impressive buildings in Eastern Europe.`,
      price: 9023
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
    options.tableName = 'Spots';
    // const Op = Sequelize.Op;
    await queryInterface.bulkDelete(options);
  }
};
