const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20');
const keys = require('./keys');
const User = require('../models/user-model');

//create serialize user
passport.serializeUser((user, done) => {
  done(null, user.id);
});

//create deserialize user
passport.deserializeUser((id, done) => {
  User.findById(id).then((user) => {
    done(null, user);
  })
});

passport.use(new GoogleStrategy({
  // options for google strategy
  callbackURL: '/auth/google/redirect',
  clientID: keys.google.clientID,
  clientSecret: keys.google.clientSecret
}, (accessToken, refreshToken, profile, done) => {
  // passport callback function
  // console.log('passport callback function fired!')
  // console.log(profile);
  // check if user already exists in db
  User.findOne({googleId: profile.id}).then((currentUser) => {
    if(currentUser){
      // already have the user
      console.log(`Current user is: ${currentUser}`, currentUser);
      done(null, currentUser)
    } else{
      // if not, create user in db
      new User({
        username: profile.displayName,
        googleId: profile.id,
        thumbnail: profile._json.picture
      }).save().then((newUser) => {
        console.log(`New User Created: ${newUser}`, newUser);
        done(null, newUser);
      })
    }
  });
  
})
)