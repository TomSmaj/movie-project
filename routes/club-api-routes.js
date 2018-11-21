const db = require("../models");

module.exports = function(app) {
  // Load index page
  app.get("/", (req, res) => {
    db.Club.findAll({
      order: [["createdAt", "DESC"]]
    }).then(dbClubs => {
      res.render("index", {
        clubs: dbClubs
      });
    });
  });

  // Load example page and pass in an example by id
  app.get("/clubs/:club_id", (req, res) => {
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

  app.post("/api/clubs", (req, res) => {
    db.Club.create({
      name: req.body.name,
      description: req.body.description
    }).then(dbClub => {
      res.json(dbClub);
    });
  });
  // Render 404 page for any unmatched routes
  app.get("*", (req, res) => {
    res.render("404");
  });
};
