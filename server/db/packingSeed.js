const fakePacking = require('./fakePacking.js');
const { Trips } = require('./index.js');

const seedTrip = () => {
  return Trips.deleteMany({})
  .then(({ deleted }) => {
    return Trips.create(fakePacking)
  })
  .catch((err) => console.log(err))
  .finally(() => process.exit(0));
}

seedTrip();
