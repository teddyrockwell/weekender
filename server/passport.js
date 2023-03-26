const GoogleStrategy = require('passport-google-oauth20').Strategy;
const passport = require('passport');
const { Users } = require('./db/index')


const GOOGLE_CLIENT_ID = "270227781239-3ndt34703bp9geojo944i087o2kj83md.apps.googleusercontent.com"
const GOOGLE_CLIENT_SECRET ="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"

passport.use(new GoogleStrategy({
  clientID: GOOGLE_CLIENT_ID,
  clientSecret: GOOGLE_CLIENT_SECRET,
  callbackURL: "/auth/google/callback"
},
function(accessToken, refreshToken, profile, cb) {
  const user = {
    username: profile.displayName,
    googleId: profile.id,
    avatar: profile.photos[0]
  }
  Users.findOrCreate(user, function (err, user) {
    return cb(err, user);
  });
}
));

passport.serializeUser((user,done)=>{
  done(null,user)
})

passport.deserializeUser((user,done)=>{
  done(null,user)
})