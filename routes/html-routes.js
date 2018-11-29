// Dependencies
// =============================================================
const db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {
  // Each of the below routes just handles the HTML/handlebars page that the user gets sent to.

  // index route loads index.handlebars
  app.get("/", function(req, res) {
    db.Club.findAll({
      order: [["createdAt", "DESC"]]
    }).then(dbClubs => {
      res.render("index-2", {
        clubs: dbClubs
      });
    });
  });

  app.get("/club/:clubid", function(req, res) {
    db.Club.findOne({
      where: { clubId: req.params.clubid },
      include: [
        {
          model: db.Discussion
        }
      ]
    }).then(data => {
      res.render("club", {
        discs: data
      });
    });
  });

  app.get("/discussion/:discussionId", function(req, res) {
    db.Discussion.findOne({
      where: { discussionId: req.params.discussionId },
      include: [
        {
          model: db.Post
        }
      ]
    }).then(dbPost => {
      // res.json(dbPost);
      res.render("discussion", {
        userComment: dbPost
      });
    });
  });

  // Nav bar links - not needing to make db call until submit button clicked
  app.get("/add-club", function(req, res) {
    res.render("add-club");
  });

  app.get("/add-movie", function(req, res) {
    res.render("add-movie");
  });

  app.get("/create-user", function(req, res) {
    res.render("create-user");
  });
};
