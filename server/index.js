const express = require('express');
const authRoutes = require('../routes/auth-routes')
const profileRoutes = require('../routes/profile-routes')

const passportSetup = require('../config/passport-setup');
const mongoose = require('mongoose');
const keys = require('../config/keys');
const cookieSession = require('cookie-session');
const passport = require('passport');
const path = require ('path');
const { Users, Trips, Weather } = require('./db/index')
const clientPath = path.resolve(__dirname, '..', 'dist');
const port = 8080;


const app = express();

// set up view engine
app.set('view engine', 'ejs');

app.use(cookieSession({
    maxAge: 24 * 60 * 60 * 1000, // => equals a day in milliseconds 
    keys: [keys.session.cookieKey] 
}))

// initialize passport
app.use(passport.initialize());
app.use(passport.session());

///////////////////////////////////////
// THIS IS WHAT IS GIVING US OUR REACT PAGE
// app.use(express.static(clientPath));
///////////////////////////////////////

// connect to mongodb
mongoose.connect(keys.mongodb.dbURI, () => {
    console.log('CONNECTED TO MONGODB');
});


// set up routes
app.use('/auth', authRoutes);
app.use('/profile', profileRoutes);


app.get('/', (req, res) => {
    res.render('home', { user: req.user });
})


app.listen(port, () => {
    console.log(`Listening on PORT: ${port}`);
})