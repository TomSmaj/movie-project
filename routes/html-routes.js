// *********************************************************************************
// html-routes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************

// Dependencies
// =============================================================
var path = require("path");
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
    let clubData, discussionData;
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
      // res.json(data)
      //change me back to res.render
      //make sure this object is formatted as a hbrs object
    });
  });

  // db.Club.findAll({
  //     where: { clubId: req.params.clubid }
  //   }).then(dbDisc => {
  //      res.json(dbDisc)
  // res.render("club", {
  //   discs: dbDisc
  // });
  // })
  // db.Discussion.findAll({
  //   where: { ClubClubId: req.params.clubid }
  // }).then(dbDisc => {
  //   // res.json(dbDisc)
  //   res.render("club", {
  //     discs: dbDisc
  //   });
  // }).catch(err => console.log(err))
  // });

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

  // add-club route loads add-club.handlebars
  // app.get("/add-club", function(req, res) {
  //   res.sendFile(path.join(__dirname, "../views/add-club.handlebars"));
  // });

  // add-movie route loads add-movie.handlebars
  //   app.get("/add-movie", function(req, res) {
  //     res.sendFile(path.join(__dirname, "../views/add-movie.handlebars"));
  //   });


  // Nav bar links - not needing to make db call until submit button clicked
  app.get("/add-club", function(req, res) {
      res.render("add-club");
  });

  app.get("/add-movie", function(req, res) {
    res.render("add-movie");
  });

};
