const db = require("../models");

module.exports = function(app) {
  app.post("/api/user/", (req, res) => {
    db.User.findOne({
      where: { userId: req.body.userId }
    }).then(dbUser => {
      if (dbUser) {
        console.log("there is a user");
      } else {
        console.log("there is no user, thus we can create one");
        db.User.create({
          username: req.body.username,
          userId: req.body.userId
        });
      }
    });
  });
};
