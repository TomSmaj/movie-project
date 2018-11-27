// *********************************************************************************
// html-routes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************

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

  // app.get("/club/:clubid", function(req, res) {
  //   db.Discussion.findAll({
  //     where: { ClubClubId: req.params.clubid }
  //   }).then(dbDisc => {
  //     res.render("club", {
  //       discs: dbDisc
  //     });
  //   });
  // });

  app.get("/club/:clubid", function(req, res) {
    db.Club.findOne({
      where: { clubId: req.params.clubid },
      include: [
        {
          model: db.Discussion
        }
      ]
    }).then(data => {
      res.json(data);
      //change me back to res.render
      //make sure this object is formatted as a hbrs object
    });
  });

  app.get("/discussion/:discussionid", function(req, res) {
    db.Post.findAll({
      where: { DiscussionDiscussionId: req.params.discussionid }
    }).then(dbPosts => {
      res.render("discussion", {
        posts: dbPosts
      });
    });
  });
};
