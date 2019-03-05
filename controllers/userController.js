const db = require("../models");
const bcrypt = require("bcrpyt");

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
          db.User.create({ email: req.body.email, password: hash })
            .then(data => res.json(data))
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
            { id: user._id },
            process.env.SECRETORKEY,
            { expiresIn: 36000 },
            (err, token) => {
              if (err)
                res
                  .status(500)
                  .json({ error: "Error signing token", raw: err });
              res.json({
                success: true,
                token: `Bearer ${token}`
              });
            }
          );
        } else {
          res.status(400).json({ password: "Password incorrect" });
        }
      });
    });
  },
  // Change the user's password
  update: (req, res) => {},
  // Remove the user's account
  destroy: (req, res) => {}
};
