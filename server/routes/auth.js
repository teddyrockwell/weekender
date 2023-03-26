const routes = require("express").Router();
const passport = require("passport");
const CLIENT_URL= "http://localhost:8080";

routes.get("/login/success", (req, res)=>{
  if (req.user){
    res.status(200).json({
      success: true,
      message: "Succesful",
      user: req.user,
      cookies:req.cookies
    })
  }

})

routes.get("/login/failed", (req, res)=>{
  res.status(401).json({
    success: false,
    message: "failure",
  })
});

routes.get("/logout", (req, res)=>{
  req.logout();
  res.redirect(CLIENT_URL);
});

routes.get("/google", passport.authenticate("google", { scope: ["profile"] }));

routes.get("/google/callback", passport.authenticate("google", {
    successRedirect: CLIENT_URL,
    failureRedirect: "/login/failed"
}));


module.exports = routes