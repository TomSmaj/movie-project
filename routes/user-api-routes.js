const db = require("../models");

module.exports = function(app) {
  // Load example page and pass in an example by id
  app.post("/api/user/", (req, res) => {
    db.User.create({
      username: req.body.username,
      userId: req.body.userId
    }).then(dbUser => {
      res.json(dbUser);
    });
  });

  app.get("/api/user/:userinfo", (req, res) => {
    db.User.findOne({
      where: { userId: req.params.userinfo }
    })
      .catch(err => {
        res.json(err);
      })
      .then(dbUser => {
        res.json(dbUser);
      });
  });
};
