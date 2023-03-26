const express = require('express');
const cookieSession = require('cookie-session');
const passport = require('passport');
const passportSetup = require('./passport')
const authRoute = require('./routes/auth')
const cors = require('cors');
const path = require ('path');
const { Users, Trips, Weather } = require('./db/index');
const clientPath = path.resolve(__dirname, '..', 'dist');
const port = 8080;


const app = express();

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
    origin: "http://localhost:8080",
    methods: "GET,POST,PUT,DELETE",
    credentials: true,
}))

//allows the server to change routes with react router
app.get('*', (req, res) =>{
    res.sendFile(path.join(clientPath, 'index.html'))
});

app.use("/auth", authRoute);

app.listen(port, () => {
    console.log(`Listening on PORT: ${port}`);
})