require("dotenv").config();
<<<<<<< HEAD
var express = require("express");
var exphbs = require("express-handlebars");

var db = require("./models");

var app = express();
var PORT = process.env.PORT || 3000;
=======
const express = require("express");
const exphbs = require("express-handlebars");

const db = require("./models");

const app = express();
const PORT = process.env.PORT || 3000;
>>>>>>> da26bc76e9b1006660a8a22d5799a24ad4762d57

// Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static("public"));

// Handlebars
<<<<<<< HEAD
=======

>>>>>>> da26bc76e9b1006660a8a22d5799a24ad4762d57
app.engine(
  "handlebars",
  exphbs({
    defaultLayout: "main"
  })
);
app.set("view engine", "handlebars");

// Routes
<<<<<<< HEAD
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

var syncOptions = { force: false };
=======
require("./routes/club-api-routes")(app);
require("./routes/discussion-api-routes")(app);
require("./routes/user-api-routes")(app);
require("./routes/post-api-routes")(app);
require("./routes/html-routes")(app);

const syncOptions = { force: false };
>>>>>>> da26bc76e9b1006660a8a22d5799a24ad4762d57

// If running a test, set syncOptions.force to true
// clearing the `testdb`
if (process.env.NODE_ENV === "test") {
  syncOptions.force = true;
}

// Starting the server, syncing our models ------------------------------------/
<<<<<<< HEAD
db.sequelize.sync(syncOptions).then(function() {
  app.listen(PORT, function() {
=======
db.sequelize.sync(syncOptions).then(() => {
  app.listen(PORT, () => {
>>>>>>> da26bc76e9b1006660a8a22d5799a24ad4762d57
    console.log(
      "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
      PORT,
      PORT
    );
  });
});

module.exports = app;
