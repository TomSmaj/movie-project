const db = require("../models");

module.exports = function(app) {
  // Load example page and pass in an example by id
  app.post("/api/user/:userinfo", (req, res) => {
    db.User.create({
      username: req.body.name,
      userId: req.body.userId
    }).then(dbUser => {
      res.json(dbUser);
    });
  });
};
