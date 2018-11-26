/* eslint-disable camelcase */
const db = require("../models");

module.exports = function(app) {
  // Load index page
  app.get("/discussion/:discussion_id", (req, res) => {
    db.Discussion.findOne({
      where: { discussion_id: req.params.discussion_id },
      include: [db.Post]
    }).then(dbDiscussion => {
      res.render("discussion", {
        discussion: dbDiscussion
      });
    });
  });

  // Load example page and pass in an example by id
  app.get("/group/:group_id", (req, res) => {
    // eslint-disable-next-line camelcase
    db.Group.findOne({
      // eslint-disable-next-line camelcase
      where: { group_id: req.params.group_id },
      include: [db.Discussion]
    }).then(dbGroup => {
      res.render("group", {
        group: dbGroup
      });
    });
  });

  // Render 404 page for any unmatched routes
  /*
  app.get("*", (req, res) => {
    res.render("404");
  });
  */
};
