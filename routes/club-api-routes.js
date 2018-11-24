const db = require("../models");

module.exports = function(app) {
  // moved the load index to the HTML routes
  /*
  app.get("/", (req, res) => {
    db.Club.findAll({
      order: [["createdAt", "DESC"]]
    }).then(dbClubs => {
      res.render("index", {
        clubs: dbClubs
      });
    });
  });
  */

  app.get("/clubs", (req, res) => {
    db.Club.findAll({
      order: [["createdAt", "DESC"]]
    }).then(dbClubs => {
      res.render("index-2", {
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
      description: req.body.description
    }).then(dbClub => {
      res.json(dbClub);
    });
  });

  /*
  // Render 404 page for any unmatched routes
  app.get("*", (req, res) => {
    res.render("404");
  });
  */
};
