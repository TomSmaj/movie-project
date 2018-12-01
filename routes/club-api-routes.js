const db = require("../models");

module.exports = function(app) {
  // Load example page and pass in an example by id
  app.get("/api/clubs/:club_id", (req, res) => {
    db.Club.findOne({
      // eslint-disable-next-line camelcase
      where: { club_id: req.params.club_id },
      include: [db.Discussion]
    }).then(dbClub => {
      res.render("club", {
        club: dbClub
      });
    });
  });

  //send json object of all clubs from db
  app.get("/api/clubs", (req, res) => {
    db.Club.findAll({
      order: [["createdAt", "DESC"]]
    }).then(dbClubs => {
      res.json(dbClubs);
    });
  });

  app.post("/api/clubs", (req, res) => {
    db.Club.create({
      name: req.body.name,
      description: req.body.description,
      admin: req.body.admin
    }).then(dbClub => {
      res.json(dbClub);
    });
  });

  app.get("/delete/all", (req, res) => {
    db.User.destroy({
      where: {},
      truncate: true
    });
    db.Post.destroy({
      where: {},
      truncate: true
    });
    db.Discussion.destroy({
      where: {},
      truncate: true
    });
    db.Club.destroy({
      where: {},
      truncate: true
    });
  });
};
