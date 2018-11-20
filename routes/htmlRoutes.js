// *********************************************************************************
// html-routes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************

// Dependencies
// =============================================================
var path = require("path");

// Routes
// =============================================================
module.exports = function(app) {
  // Each of the below routes just handles the HTML/handlebars page that the user gets sent to.

  // index route loads view.html
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../views/index.handlebars"));
  });

  // cms route loads cms.html
  app.get("/newGoup", function(req, res) {
    res.sendFile(path.join(__dirname, "../views/newGroup.handlebars"));
  });

  // // blog route loads blog.html
  // app.get("/blog", function(req, res) {
  //   res.sendFile(path.join(__dirname, "../public/blog.html"));
  // });

  // authors route loads author-manager.html
  app.get("/addMovie", function(req, res) {
    res.sendFile(path.join(__dirname, "../views/addMovie.handlebars"));
  });
};
