const { Strategy, ExtractJwt } = require("passport-jwt");
const db = require("./models");
const opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = process.env.SECRETORKEY;

module.exports = passport => {
  passport.use(
    new Strategy(opts, function(jwt_payload, done) {
      db.User.findById(jwt_payload.id)
        .then(user => {
          if (user) {
            return done(null, user);
          }
          return done(null, false);
        })
        .catch(err => console.log(err));
    })
  );
};