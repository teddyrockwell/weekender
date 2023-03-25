// const mongoose = require('mongoose');

// const DB_URI =  'mongodb://localhost/weekender';

// mongoose.connect(DB_URI);

// const UserSchema = new mongoose.Schema({
//   username: String,
//   tripsIds: [String]

// });

// const TripSchema = new mongoose.Schema({
//     dateStart: String,
//     dateEnd: String,
//     campsiteImg: String,
//     campsiteName: String,
//     campsiteDesc: String,
//     packingList: [String],
//     weatherId: String
// });

// const WeatherSchema = new mongoose.Schema({
//     faren: Number,
//     conditionText: String,
//     conditionIcon: String,
//     wind: String
// })





// module.exports = {
//   Users: mongoose.model('Users', UserSchema), 
//   Trips: mongoose.model('Trips', TripSchema),
//   Weather: mongoose.model('Weather', WeatherSchema)
// };