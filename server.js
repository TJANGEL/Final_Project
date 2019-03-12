const express = require("express");
const session = require("express-session");
const mongoose = require("mongoose");
const passport = require("passport");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Passport authentification
// ### TO DO ###
// require session package cos express separated it out
// app.use(session({ secret: process.env.SECRET }));
app.use(passport.initialize());
app.use(passport.session());

// Add routes, both API and view
app.use(routes);

// Connect to the Mongo DB
mongoose
  .connect(process.env.MONGODB_URI || "mongodb://localhost/netflixTitles", {
    useNewUrlParser: true
  })
  .then(() => console.log("mongoDB connected"))
  .catch(err => console.log(err));

// Start the API server
app.listen(PORT, function () {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
