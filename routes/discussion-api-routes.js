/* eslint-disable camelcase */
const db = require("../models");

module.exports = function(app) {
  app.get("/api/discussions", (req, res) => {
    db.Discussion.findAll({
      order: [["createdAt", "DESC"]]
    }).then(dbDiscussion => {
      res.json(dbDiscussion);
    });
  });

  app.post("/api/discussions", (req, res) => {
    db.Discussion.create({
      text: req.body.text,
      startDate: req.body.startDate,
      endDate: req.body.endDate,
      movie: req.body.movie,
      moviePoster: req.body.moviePoster,
      moviePlot: req.body.moviePlot,
      movieYear: req.body.movieYear
    }).then(dbDiscussion => {
      res.json(dbDiscussion);
    });
  });
};
