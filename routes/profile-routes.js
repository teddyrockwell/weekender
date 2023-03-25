const router = require('express').Router();

const authCheck = (req, res, next) => {
  // checks if user is logged in
  if (!req.user){
    // if user is not logged in
    res.redirect('/auth/login');
  } else {
    // if logged in 
    next();
  }
};

router.get('/', authCheck, (req, res) => {
  // res.send('You are logged in, this is your profile -' + req.user.username);
  res.render('profile', { user: req.user });
});

module.exports = router;