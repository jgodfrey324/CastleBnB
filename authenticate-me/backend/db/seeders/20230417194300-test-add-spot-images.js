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
    {
      spotId: 13,
      url: 'https://cdn.pariscityvision.com/library/image/4020.jpg',
      preview: true
    },
    {
      spotId: 13,
      url: 'https://snippetsofparis.com/wp-content/uploads/2022/03/IMG_5905-Sainte-chapelle-2-1.jpg',
      preview: false
    },
    {
      spotId: 13,
      url: 'https://lifeaperture.files.wordpress.com/2012/01/dsc0051.jpg',
      preview: false
    },
    {
      spotId: 13,
      url: 'https://lp-cms-production.s3.amazonaws.com/public/2021-05/GettyRF_561145625.jpg',
      preview: false
    },
    {
      spotId: 13,
      url: 'https://www.timographie360.fr/photos/realisations/sliders/hd/visite-virtuelle-sainte-chapelle-01_517.jpg',
      preview: false
    },
    {
      spotId: 14,
      url: 'https://admin.visititaly.eu/uploads/articoli/paragrafo/20190320123650Castel%20del%20Monte.jpg',
      preview: true
    },
    {
      spotId: 14,
      url: 'https://www.borgocasteldelmonte.com/wp-content/uploads/2020/03/Gallery-casteldelmonte-borgo-gransasso-transumanza-chiocciola.jpg',
      preview: false
    },
    {
      spotId: 14,
      url: 'https://imaginapulia.com/wp-content/uploads/2018/06/castel-del-monte-room-window-detail.jpg',
      preview: false
    },
    {
      spotId: 14,
      url: 'https://casteldelmonte.gocity.it/media/castel_del_monte_aerea.jpg',
      preview: false
    },
    {
      spotId: 14,
      url: 'https://live.staticflickr.com/4553/38359980146_ce4405c78c_b.jpg',
      preview: false
    },
    {
      spotId: 15,
      url: 'https://www.visitdundee.com/wp-content/uploads/2021/05/glamis.jpg',
      preview: true
    },
    {
      spotId: 15,
      url: 'https://media.houseandgarden.co.uk/photos/618950e251c95671034bbf4c/3:2/w_3102,h_2068,c_limit/shutterstock_editorial_8521117l_huge.jpg',
      preview: false
    },
    {
      spotId: 15,
      url: 'https://www.discoverbritainmag.com/wp-content/uploads/2014/08/1.3725132-image-image.jpg',
      preview: false
    },
    {
      spotId: 15,
      url: 'https://www.discoverbritainmag.com/wp-content/uploads/2014/08/1.3725130-image-image.jpg',
      preview: false
    },
    {
      spotId: 15,
      url: 'https://static.wixstatic.com/media/2540bd_bd37174d7d8a4ecab389413a97d05985~mv2.jpg/v1/fill/w_640,h_854,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/2540bd_bd37174d7d8a4ecab389413a97d05985~mv2.jpg',
      preview: false
    },
    {
      spotId: 16,
      url: 'https://fullsuitcase.com/wp-content/uploads/2020/10/Doges-Palace-Venice-Italy.jpg',
      preview: true
    },
    {
      spotId: 16,
      url: 'https://www.ulysses.travel/wp-content/uploads/2019/11/Palais-des-Doges-Venise-cour-inte%CC%81rieure.jpg',
      preview: false
    },
    {
      spotId: 16,
      url: 'https://palazzoducale.visitmuve.it/wp-content/uploads/2021/05/MUVE-DUCALE-Maggior-Consiglio4.jpg',
      preview: false
    },
    {
      spotId: 16,
      url: 'https://www.visit-venice-italy.com/pics/palaces/doge/chamber-of-the-great-council-doge-palace-venice-italy-02.jpg',
      preview: false
    },
    {
      spotId: 16,
      url: 'https://media.tacdn.com/media/attractions-splice-spp-674x446/06/70/4a/79.jpg',
      preview: false
    },
    {
      spotId: 17,
      url: 'https://afar.brightspotcdn.com/dims4/default/98257ba/2147483647/strip/true/crop/989x679+17+0/resize/660x453!/quality/90/?url=https%3A%2F%2Fafar-media-production-web.s3.amazonaws.com%2Fbrightspot%2F7a%2F85%2F8cf32197bd8df600fc8717031bb7%2Foriginal-d458cb89a28bffb6bb836900b7b1b3c1.jpg',
      preview: true
    },
    {
      spotId: 17,
      url: 'https://mrshuttle.com/wp-content/uploads/2021/08/Aerial-view-of-Malbork-Castle.jpg',
      preview: false
    },
    {
      spotId: 17,
      url: 'https://www.hecktictravels.com/wp-content/uploads/2015/04/Malbork-Poland-Castle-08.jpg',
      preview: false
    },
    {
      spotId: 17,
      url: 'https://stephentravelsdotcom.files.wordpress.com/2021/08/poland_malbork_malbork-castle_2.jpg',
      preview: false
    },
    {
      spotId: 17,
      url: 'https://www.globeguide.ca/wp-content/uploads/2016/06/Poland-Malbork-Castle-Courtyard-9.jpg',
      preview: false
    },
    {
      spotId: 18,
      url: 'https://ychef.files.bbci.co.uk/976x549/p086hwfw.jpg',
      preview: true
    },
    {
      spotId: 18,
      url: 'https://live.staticflickr.com/4318/35644985680_663a943146_b.jpg',
      preview: false
    },
    {
      spotId: 18,
      url: 'https://www.travelcaffeine.com/wp-content/uploads/2016/10/terrace-cha%CC%82teau-de-chambord-loire-valley-france.jpg',
      preview: false
    },
    {
      spotId: 18,
      url: 'https://cdn1.chambord.org/en/wp-content/uploads/sites/3/2017/02/SL-5780-%C2%A9-DNC.-Photo-Sophie-Lloyd.-Ts-droits-jusquu2019en-f%C3%A9v.-2025-1180x550.jpg',
      preview: false
    },
    {
      spotId: 18,
      url: 'https://e1.pxfuel.com/desktop-wallpaper/130/843/desktop-wallpaper-old-castle-gold-france-beauty-columns-fireplace-marble-palace-chambord-section-%D0%B8%D0%BD%D1%82%D0%B5%D1%80%D1%8C%D0%B5%D1%80-castle-interior.jpg',
      preview: false
    },
    {
      spotId: 19,
      url: 'https://bojnicecastle.sk/wp-content/uploads/2022/03/main-img.jpg',
      preview: true
    },
    {
      spotId: 19,
      url: 'https://bernhardherzog.com/en/wp-content/uploads/sites/3/2019/01/DJI_0158-Pano.jpg',
      preview: false
    },
    {
      spotId: 19,
      url: 'https://aprileveryday.com/wp-content/uploads/2019/11/IMG_7207.jpg',
      preview: false
    },
    {
      spotId: 19,
      url: 'https://lamyerda.com/wp-content/uploads/2018/04/0-02-06-6c92b7a979eac710752c8c36e4abcbb250eb493c367e9d6193be5916fc91100c_full-768x1024.jpg',
      preview: false
    },
    {
      spotId: 19,
      url: 'https://live.staticflickr.com/7150/6655458061_464a953880_b.jpg',
      preview: false
    },
    {
      spotId: 20,
      url: 'https://64.media.tumblr.com/aa479983ef52dfd93e2f00d957bdc028/69478bf5def48eaa-09/s1280x1920/cdef4700181dec04250b1fb2553fb40e94f4824b.jpg',
      preview: true
    },
    {
      spotId: 20,
      url: 'https://render.fineartamerica.com/images/images-profile-flow/400/images/artworkimages/mediumlarge/2/fairy-tale-castle-ulrike-leinemann.jpg',
      preview: false
    },
    {
      spotId: 20,
      url: 'https://farm6.staticflickr.com/5088/5281289852_a25ced7415.jpg',
      preview: false
    },
    {
      spotId: 20,
      url: 'https://www.timetravelturtle.com/wp-content/uploads/2013/11/Germany-2013-41_new.jpg',
      preview: false
    },
    {
      spotId: 20,
      url: 'https://c4.wallpaperflare.com/wallpaper/303/415/775/hohenzollern-castle-castle-hechingen-lighting-wallpaper-preview.jpg',
      preview: false
    },
    {
      spotId: 21,
      url: 'https://go-nagano.a.kuroco-img.app/v=1586155642/files/user/Matsumoto%20Castle%20and%20Cherry%20Blossoms.jpg',
      preview: true
    },
    {
      spotId: 21,
      url: 'https://st.depositphotos.com/1035886/3433/i/450/depositphotos_34338559-stock-photo-matsumoto-jo-castle-designated-as.jpg',
      preview: false
    },
    {
      spotId: 21,
      url: 'https://upload.wikimedia.org/wikipedia/commons/b/b7/Matsumoto_Castle09n4592.jpg',
      preview: false
    },
    {
      spotId: 21,
      url: 'https://www.justonecookbook.com/wp-content/uploads/2021/02/Matsumoto-Castle-Guide-43-P1290340.jpg',
      preview: false
    },
    {
      spotId: 21,
      url: 'https://img.theculturetrip.com/wp-content/uploads/2020/04/m5cf8c.jpg',
      preview: false
    },
    {
      spotId: 22,
      url: 'https://www.lapland.fi/uploads/2018/03/lapland-kemi-finland-snow-castle-winter-kemi-tourism-ltd-1440x810.jpg',
      preview: true
    },
    {
      spotId: 22,
      url: 'https://www.discoveringfinland.com/wp-content/uploads/2014/12/zzzz2-2.jpg',
      preview: false
    },
    {
      spotId: 22,
      url: 'https://www.journeywonders.com/wp-content/uploads/2015/02/Snow-Restaurant-at-Kemi-Snow-Castle-800x533.jpg',
      preview: false
    },
    {
      spotId: 22,
      url: 'https://ak-d.tripcdn.com/images/10070z000000nqryp49E6.jpg',
      preview: false
    },
    {
      spotId: 22,
      url: 'https://cdn.modlar.com/photos/2717/img/s_1920_x/lumilinna_snow_castle_finland_5674af0106d12.jpg',
      preview: false
    },
    {
      spotId: 23,
      url: 'https://bloximages.newyork1.vip.townnews.com/wrex.com/content/tncms/assets/v3/editorial/0/49/0493c2a2-4313-11ec-833a-2f1ad5059e1d/618d4fc62e21b.image.jpg',
      preview: true
    },
    {
      spotId: 23,
      url: 'https://www.gettingstamped.com/wp-content/uploads/2020/01/Lake-Geneva-Ice-Castles-Wisconsin-winter-Activities-Ice-tunnel-800x450.jpg',
      preview: false
    },
    {
      spotId: 23,
      url: 'https://media.bizj.us/view/img/11938884/icecastle-018*1200xx1700-956-0-89.jpg',
      preview: false
    },
    {
      spotId: 23,
      url: 'https://img.atlasobscura.com/dzw9fXKiTvB7w4a4ghoFPLbo03OdN3XiO0yfA5V-tak/rt:fit/h:390/q:81/sm:1/scp:1/ar:1/aHR0cHM6Ly9hdGxh/cy1kZXYuczMuYW1h/em9uYXdzLmNvbS91/cGxvYWRzL3BsYWNl/X2ltYWdlcy8wMzNm/ZGRiYS02ZTkxLTRk/ZTgtODkzMC0wNWQy/NTMwZDVkYTkwYmFm/YjhjM2E2OGUzZTU0/NjBfMTE5Mzk5NTA1/MzNfNDRjOThmMWY5/Yl9rLmpwZw.jpg',
      preview: false
    },
    {
      spotId: 23,
      url: 'https://onmilwaukee.com/images/articles/ic/ice-castles-dells/ice-castles-dells_fullsize_story1.jpg',
      preview: false
    },
    {
      spotId: 24,
      url: 'https://lp-cms-production.imgix.net/2019-06/fb18f2f0fca95a0a650e7eb2f08ec76a-karak-castle.jpg',
      preview: true
    },
    {
      spotId: 24,
      url: 'https://images.memphistours.com/large/1068762908_castle2.jpg',
      preview: false
    },
    {
      spotId: 24,
      url: 'https://streetsofnuremberg.com/wp-content/uploads/2020/01/Kerak-Castle-12-1024x768.jpg',
      preview: false
    },
    {
      spotId: 24,
      url: 'https://upload.wikimedia.org/wikipedia/commons/d/dd/Jordan_Kerak_Castle_2496.jpg',
      preview: false
    },
    {
      spotId: 24,
      url: 'https://images.fineartamerica.com/images/artworkimages/mediumlarge/3/2-kerak-castle-in-jordan-karol-kozlowski.jpg',
      preview: false
    },
    {
      spotId: 25,
      url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Sun_Palace_%DA%A9%D8%A7%D8%AE_%D8%AE%D9%88%D8%B1%D8%B4%DB%8C%D8%AF_-_panoramio.jpg/1280px-Sun_Palace_%DA%A9%D8%A7%D8%AE_%D8%AE%D9%88%D8%B1%D8%B4%DB%8C%D8%AF_-_panoramio.jpg',
      preview: true
    },
    {
      spotId: 25,
      url: 'https://live.staticflickr.com/143/323148482_6b31a2748c_b.jpg',
      preview: false
    },
    {
      spotId: 25,
      url: 'https://irantripedia.com/wp-content/uploads/2022/07/Sun-Palace-9_Irantripedia.jpg',
      preview: false
    },
    {
      spotId: 25,
      url: 'https://media.karnaval.ir/uploads/2020/09/6876f269-3908-4f11-9d3c-d223ab63b5b3.jpg',
      preview: false
    },
    {
      spotId: 25,
      url: 'https://upload.wikimedia.org/wikipedia/commons/8/84/Sun_palace_%28Kaakh-e-Khorshid%29_-_Kalat_4.jpg',
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
