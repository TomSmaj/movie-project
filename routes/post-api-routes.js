const db = require("../models");

module.exports = function(app) {
  app.post("/api/posts/",
    (req, res) => {
      //console.log("req body" + req.body);
      db.Post.create({
        text: req.body.text,
        title: req.body.title,
        discussionId: req.body.discussionId,
        userId: req.body.userId,
        respondingTo: req.body.respondingTo
      }).then(function(dbPost) {
        res.json(dbPost);
      });
    });
};
