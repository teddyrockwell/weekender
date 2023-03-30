const express = require('express');
const cookieSession = require('cookie-session');
const passport = require('passport');
const passportSetup = require('./passport')
const authRoute = require('./routes/auth');

// const weatherRoute = require('./routes/weather');
 const campGroundsRoute = require('./routes/campgrounds');



const List = require('./routes/packing');
const AddingTrip = require('./routes/trips'); // THEO
const bodyparser = require('body-parser');
const cors = require('cors');
const path = require ('path');
// const dotenv = require('dotenv');
const { Users, Trips, Weather } = require('./db/index');
const clientPath = path.resolve(__dirname, '..', 'dist');
const port = 8080;
require('dotenv').config();
// dotenv.config({
//     path: path.resolve(__dirname, '../.env'),
//   });

const app = express();
app.use(bodyparser.json()); // THEO
app.use(express.static(clientPath));

//start a new cookie session
app.use(
    cookieSession({name: "session", keys: ["weekender"], maxAge: 24 * 60 * 60 * 100})
);
//use passport for authentication
app.use(passport.initialize())
app.use(passport.session())

//cors
app.use(cors({
    origin: process.env.CLIENT_URL,
    methods: "GET,POST,PUT,DELETE",
    credentials: true,
}))

  app.get('/auth/google/callback', passport.authenticate('google', { failureRedirect: '/' }), function(req, res) {
    res.redirect('/');
  });
//allows the server to change routes with react router


app.use("/auth", authRoute);

app.use("/packing", List);

app.use("/campgrounds", campGroundsRoute);



app.use("/trips", AddingTrip); // THEO




// app.get('/auth/google',
//   passport.authenticate('google', { scope: ['profile'] }));

app.get('*', (req, res) =>{
    res.sendFile(path.join(clientPath, 'index.html'))
});

app.listen(port, () => {
    console.log(`Listening on PORT: ${port}`);
})