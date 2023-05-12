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
      url: 'https://www.travelandleisure.com/thmb/umcoSMJygYyG5OIYDdBPgnrJGLc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/01-neuschwanstein-castle-bavaria-NEUSCHWANSTEIN0417-273a040698f24fc1ac22e717bb3f1f0c.jpg',
      preview: true
    },
    {
      spotId: 1,
      url: 'https://britonthemove.com/wp-content/uploads/2020/03/Inside-Neuschwanstein-Castle.jpg',
      preview: false
    },
    {
      spotId: 1,
      url: 'https://cdn.hswstatic.com/gif/Neuschwanstein-Castle-1.jpg',
      preview: false
    },
    {
      spotId: 1,
      url: 'https://www.neuschwanstein.de/bilder/background/wohnzimmer.jpg',
      preview: false
    },
    {
      spotId: 1,
      url: 'https://www.neuschwanstein.de/bilder/schloss/schlafzimmer450.jpg',
      preview: false
    },
    {
      spotId: 2,
      url: 'https://www.japan-guide.com/g21/3501_13.jpg',
      preview: true
    },
    {
      spotId: 2,
      url: 'https://www.remotelands.com/travelogues/app/uploads/2019/07/Himeji-Castle-02.jpg',
      preview: false
    },
    {
      spotId: 2,
      url: 'https://muza-chan.net/aj/poze-weblog7/himeji-castle-tenshu-interior-big.jpg',
      preview: false
    },
    {
      spotId: 2,
      url: 'https://upload.wikimedia.org/wikipedia/commons/6/62/Himeji-Castle_%2CRoom_of_armor_-_panoramio.jpg',
      preview: false
    },
    {
      spotId: 2,
      url: 'https://cdn.cheapoguides.com/wp-content/uploads/sites/3/2017/10/himeji-castle-approach_gdl.jpg',
      preview: false
    },
    {
      spotId: 3,
      url: 'https://www.gpsmycity.com/img/gd_cover/4875.jpg',
      preview: true
    },
    {
      spotId: 3,
      url: 'https://www.historyhit.com/app/uploads/2020/11/Stirling-Castle.jpg',
      preview: false
    },
    {
      spotId: 3,
      url: 'https://thetudortravelguide.com/wp-content/uploads/6.-Queens-Bedchamber.jpg',
      preview: false
    },
    {
      spotId: 3,
      url: 'https://i.pinimg.com/originals/fe/4b/98/fe4b98b3c3ec981e330d49916bdd6674.jpg',
      preview: false
    },
    {
      spotId: 3,
      url: 'https://t4.ftcdn.net/jpg/05/45/39/51/360_F_545395138_R13PeRCCjZ8TNyrVleWCWs2CGtCWQfzV.jpg',
      preview: false
    },
    {
      spotId: 4,
      url: 'https://www.hotelmiramaretrieste.it/img/castello.jpg',
      preview: true
    },
    {
      spotId: 4,
      url: 'https://media.tacdn.com/media/attractions-splice-spp-674x446/06/e6/34/cd.jpg',
      preview: false
    },
    {
      spotId: 4,
      url: 'https://www.travelinpink.com/wp-content/uploads/2020/12/Castello-Di-Miramar-008-scaled.jpeg',
      preview: false
    },
    {
      spotId: 4,
      url: 'https://i.pinimg.com/originals/fc/69/cb/fc69cb52bbbe662d26ad23dc739e0bb3.jpg',
      preview: false
    },
    {
      spotId: 4,
      url: 'https://i.pinimg.com/originals/98/4d/0e/984d0ea15518101ad0dcbdaab1cd0acf.jpg',
      preview: false
    },
    {
      spotId: 5,
      url: 'https://bodiamcastle.uk/wp-content/uploads/bodiam-castle-sussex-england.jpg',
      preview: true
    },
    {
      spotId: 5,
      url: 'https://www.greatbritishbucketlist.com/wp-content/uploads/2020/09/bodiam-castle-aerial-view.jpg',
      preview: false
    },
    {
      spotId: 5,
      url: 'https://www.ourworldforyou.com/wp-content/uploads/2021/10/Inside-the-southwest-tower-National-Trust-East-Sussex-England-V5.jpg',
      preview: false
    },
    {
      spotId: 5,
      url: 'https://nt.global.ssl.fastly.net/binaries/content/gallery/website/national/regions/sussex/places/bodiam-castle/library/built-heritage-history-and-collections/the-three-arches-of-the-screens-passage-at-bodiam-castle-east-sussex-164994.jpg',
      preview: false
    },
    {
      spotId: 5,
      url: 'https://live.staticflickr.com/1070/534366584_31a7979594_b.jpg',
      preview: false
    },
    {
      spotId: 6,
      url: 'https://c4.wallpaperflare.com/wallpaper/243/174/529/bridge-lights-tower-wales-conwy-castle-hd-wallpaper-preview.jpg',
      preview: true
    },
    {
      spotId: 6,
      url: 'https://i2-prod.dailypost.co.uk/incoming/article7826583.ece/ALTERNATES/s1200b/Conwy.jpg',
      preview: false
    },
    {
      spotId: 6,
      url: 'https://visitwalesimages.thedms.co.uk/eandapics/MW/vlarge/0812284_1_2.jpg',
      preview: false
    },
    {
      spotId: 6,
      url: 'https://thumbs.dreamstime.com/b/architecture-conwy-wales-great-britain-conwy-wales-juky-conwy-castle-medieval-fortification-conwy-wales-unesco-world-105877832.jpg',
      preview: false
    },
    {
      spotId: 6,
      url: 'https://travelingwithkrushworth.files.wordpress.com/2012/11/conwy_castle_conwy_north_wales.jpg',
      preview: false
    },
    {
      spotId: 7,
      url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/001_Chateau_de_Chillon_and_Dents_du_Midi_Photo_by_Giles_Laurent.jpg/640px-001_Chateau_de_Chillon_and_Dents_du_Midi_Photo_by_Giles_Laurent.jpg',
      preview: true
    },
    {
      spotId: 7,
      url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Chateau_de_Chillon_28-08-2016_n09.jpg/2560px-Chateau_de_Chillon_28-08-2016_n09.jpg',
      preview: false
    },
    {
      spotId: 7,
      url: 'https://s27363.pcdn.co/wp-content/uploads/2020/05/Chateau-de-Chillon-1-1200x900.jpg.optimal.jpg',
      preview: false
    },
    {
      spotId: 7,
      url: 'https://live.staticflickr.com/2462/4068267303_e6085da218_b.jpg',
      preview: false
    },
    {
      spotId: 7,
      url: 'https://wanderingcarol.com/wp-content/uploads/2016/06/Chillon-Castle-courtyard.jpg',
      preview: false
    },
    {
      spotId: 8,
      url: 'https://live.staticflickr.com/4764/25847802788_327598339e_b.jpg',
      preview: true
    },
    {
      spotId: 8,
      url: 'https://i.pinimg.com/originals/bc/bf/f1/bcbff1cb60ef7f849a4e38226b26e0cd.jpg',
      preview: false
    },
    {
      spotId: 8,
      url: 'https://wanderingcarol.com/wp-content/uploads/2016/06/Chillon-Castle-courtyard.jpg',
      preview: false
    },
    {
      spotId: 8,
      url: 'https://photostorage.explorest.com/europe/uk/mkuhr-drone-dunnottar-castle-compressed.jpg',
      preview: false
    },
    {
      spotId: 8,
      url: 'https://coconutsandcamels.co.uk/wp-content/uploads/2021/03/DJI_0628-Pano.jpg',
      preview: false
    },
    {
      spotId: 9,
      url: 'https://img.atlasobscura.com/bGTQKX4mxe7xrlNzEyhK30grOGuPHHVZ8H6IHqA785E/rs:fill:580:580:1/g:ce/q:81/sm:1/scp:1/ar:1/aHR0cHM6Ly9hdGxh/cy1kZXYuczMuYW1h/em9uYXdzLmNvbS91/cGxvYWRzL3BsYWNl/X2ltYWdlcy80NDkw/NzM0MDUxNjRmZWM0/ZmNfMjYyMjIwMjlf/NTYzOTIyNjAwNjI5/MzAyXzUyMzIzMzg5/MjE4OTQ5NjkzNDRf/bi5qcGc.jpg',
      preview: true
    },
    {
      spotId: 9,
      url: 'https://i.pinimg.com/originals/0b/b5/c9/0bb5c9efdd9823eb43418d83a0ab6b30.png',
      preview: false
    },
    {
      spotId: 9,
      url: 'https://3.bp.blogspot.com/-fq4Ff4kIwCU/Vf4xwSMd-ZI/AAAAAAAA1Eo/YjxkldXUjUg/s1600/01_obersaal.jpg',
      preview: false
    },
    {
      spotId: 9,
      url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Le_ch%C3%A2teau_d%27Eltz_%28Burg_Eltz%29_en_allemagne.jpg/1200px-Le_ch%C3%A2teau_d%27Eltz_%28Burg_Eltz%29_en_allemagne.jpg',
      preview: false
    },
    {
      spotId: 9,
      url: 'https://www.topworldimages.com/photos/Eltz_Castle_room.jpg',
      preview: false
    },
    {
      spotId: 10,
      url: 'https://cdn.getyourguide.com/img/location/5b2138cd04d83.jpeg/99.jpg',
      preview: true
    },
    {
      spotId: 10,
      url: 'https://www.picturesofscotland.co.uk/wp-content/uploads/2018/02/IMG_8273.jpg',
      preview: false
    },
    {
      spotId: 10,
      url: 'https://traveldigg.com/wp-content/uploads/2016/06/Edinburgh-Castle-Interior.jpg',
      preview: false
    },
    {
      spotId: 10,
      url: 'https://www.meetingedinburgh.com/dyn/scld/1508317358988.jpeg',
      preview: false
    },
    {
      spotId: 10,
      url: 'https://c1.wallpaperflare.com/preview/139/299/735/united-kingdom-castle-city-edinburgh.jpg',
      preview: false
    },
    {
      spotId: 11,
      url: 'https://static1.thetravelimages.com/wordpress/wp-content/uploads/2022/01/hluboka-castle-czech-republic.jpg',
      preview: true
    },
    {
      spotId: 11,
      url: 'https://cdn.tatlerasia.com/asiatatler/i/ph/2018/11/05132908-5-interier-ranni-salon_cover_1920x1286.jpg',
      preview: false
    },
    {
      spotId: 11,
      url: 'https://mypraguewedding.cz/wp-content/uploads/2021/01/gluboka-5.jpg',
      preview: false
    },
    {
      spotId: 11,
      url: 'https://i1.wp.com/rachelsruminations.com/wp-content/uploads/2022/10/Hluboka-Castle-game-room.jpg',
      preview: false
    },
    {
      spotId: 11,
      url: 'https://static.saltinourhair.com/wp-content/uploads/2021/02/23103841/visit-Hluboka-Castle-Czech-Republic-540x810.jpg',
      preview: false
    },
    {
      spotId: 12,
      url: 'https://travelingtransylvania.com/wp-content/uploads/2021/04/corvin-castle-3.jpg',
      preview: true
    },
    {
      spotId: 12,
      url: 'https://www.omnivagant.com/wp-content/uploads/2019/09/023A0527-2-1200x800.jpg',
      preview: false
    },
    {
      spotId: 12,
      url: 'https://romaniatourstore.com/wp-content/uploads/2015/11/IMG_3392.jpg',
      preview: false
    },
    {
      spotId: 12,
      url: 'https://www.omnivagant.com/wp-content/uploads/2019/09/023A0537-1200x800.jpg',
      preview: false
    },
    {
      spotId: 12,
      url: 'https://img.myloview.com/stickers/corvin-castle-a-gothic-castle-in-transylvania-romania-700-269572040.jpg',
      preview: false
    },
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
