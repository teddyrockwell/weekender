const { Trips } = require('./index.js');

const list = 
[
  {
    item: 'Food',
    isComplete: false,
  },
  {
    item: 'Toothpaste/brush',
    isComplete: false,
  },
  {
    item: 'Raincoat',
    isComplete: false,
  },
  {
    item: 'Umbrella',
    isComplete: false,
  },
  {
    item: 'Hat',
    isComplete: false,
  },
  {
    item: 'Sunscreen',
    isComplete: false,
  },
  {
    item: 'Sunglasses',
    isComplete: false,
  },
  {
    item: 'Shorts',
    isComplete: false,
  },
  {
    item: 'Pants',
    isComplete: false,
  },
  {
    item: 'Jacket',
    isComplete: false,
  },
  {
    item: 'Swimsuit',
    isComplete: false,
  },
  {
    item: 'Cooler',
    isComplete: false,
  },
  {
    item: 'Sandals',
    isComplete: false,
  },
  {
    item: 'Coat',
    isComplete: false,
  },
  {
    item: 'Boots',
    isComplete: false,
  },
];

const seedList = (tripId) => {
  return Trips.findOneAndUpdate(
    { _id: tripId },
    { packingList: list },
    { new: true },
    // { campsiteDesc: "<h2>An Amazing Getaway Just For You!</h2>"},
    // { campsiteImg: [{URL:"https://cdn.recreation.gov/public/images/68613.jpg"},{URL:"https://cdn.recreation.gov/public/images/68805.jpg"}]},
    // { campsiteLat: 37.3902778 },
    // { campsiteLong: -107.54 },
    // { campsiteName: "GRAHAM CREEK CAMPGROUND" },
    // { dateEnd: "2023-04-03" },
    // { dateStart: "2023-04-08" }



  )
    .then((trip) => {
      console.log(`success`);
    })
    .catch((err) => {
      console.error(err);
    });
};

module.exports = seedList;
