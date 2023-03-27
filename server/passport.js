const GoogleStrategy = require('passport-google-oauth20').Strategy;
const passport = require('passport');
const mongoose = require('mongoose');
const { Users } = require('./db/index');
// const {GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET } = require('./config');

const GOOGLE_CLIENT_ID= "keys here for now"
const GOOGLE_CLIENT_SECRET= "keys here for now"

passport.use(new GoogleStrategy({
  clientID: GOOGLE_CLIENT_ID,
  clientSecret: GOOGLE_CLIENT_SECRET,
  callbackURL: "/auth/google/callback",
  scope: ["profile", "email"]
},
function(accessToken, refreshToken, profile, cb) {
  const user = {
    username: profile.displayName,
    googleId: profile.id,
    avatar: profile.photos[0].value
  }
 Users.findOne({googleId: profile.id})
 .then((existingUser)=>{
  if(existingUser){
    return cb(null, profile);
  }
  Users.create(user)
  .then((user)=>{
    console.log('succesfully created user', user)
    cb(null, profile);
  })
  .catch((err)=>{
    console.log('could not add user to db', err)
    cb(err, null);
  })
 })
 .catch((err)=>{
  console.log('could not find user', err)
  cb(err, null);
 })
}
));

passport.serializeUser((user,done)=>{
  done(null,user)
})

passport.deserializeUser((user,done)=>{
  done(null,user)
})