const db = require("../models");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

module.exports = {
  // Make a new user
  create: (req, res) => {
    db.User.findOne({ email: req.body.email }).then(user => {
      if (user) {
        return res.status(400).json({ email: "Account already exists" });
      }
      bcrypt.genSalt(12, (err, salt) => {
        if (err) throw err;
        bcrypt.hash(req.body.password, salt, (err, hash) => {
          if (err) throw err;
          db.User.create({
            email: req.body.email,
            name: req.body.name,
            password: hash
          })
            .then(user => res.json(user))
            .catch(err => res.status(422).json(err));
        });
      });
    });
  },
  // Find an existing user
  read: (req, res) => {
    db.User.findOne({ email: req.body.email }).then(user => {
      if (!user) {
        return res.status(400).json({ email: "Account not found!" });
      }
      bcrypt.compare(req.body.password, user.password).then(isMatch => {
        if (isMatch) {
          jwt.sign(
            // payload
            { id: user.id, name: user.name },
            process.env.SECRETORKEY,
            { expiresIn: 36000 },
            (err, token) => {
              if (err)
                res.status(500).json({ token: "Error signing token", raw: err });
              res.json({
                success: true,
                token: `Bearer ${token}`
              });
            });
        } else {
          res.status(400).json({ password: "Password incorrect" });
        };
      });
    });
  }
};