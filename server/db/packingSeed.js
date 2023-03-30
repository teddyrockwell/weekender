const fakePacking = require('./fakePacking.js');
const { Trips } = require('./index.js');

const seedTrip = () => {
  return Trips.deleteMany({})
  .then(({ deleted }) => {
    return Trips.insertMany(fakePacking)
  })
  .catch((err) => console.error(err))
  .finally(() => process.exit(0));
}

seedTrip();
