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
    //res.sendFile(path.join(__dirname, "../views/index.handlebars"));
    db.Club.findAll({
      order: [["createdAt", "DESC"]]
    }).then(dbClubs => {
      res.render("index-2", {
        clubs: dbClubs
      });
    });
  });

  // add-club route loads add-club.handlebars
  app.get("/add-club", function(req, res) {
    res.sendFile(path.join(__dirname, "../views/add-club.handlebars"));
  });

  // add-movie route loads add-movie.handlebars
  app.get("/add-movie", function(req, res) {
    res.sendFile(path.join(__dirname, "../views/add-movie.handlebars"));
  });
};
