"use strict";

var fs = require("fs");
var path = require("path");
var Sequelize = require("sequelize");
var basename = path.basename(module.filename);
var env = process.env.NODE_ENV || "development";
var config = require(__dirname + "/../config/config.json")[env];
var db = {};

if (config.use_env_variable) {
  var sequelize = new Sequelize(process.env[config.use_env_variable]);
} else {
  var sequelize = new Sequelize(
    config.database,
    config.username,
    config.password,
    config
  );
}

fs.readdirSync(__dirname)
  .filter(function(file) {
    return (
      file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
    );
  })
  .forEach(function(file) {
    var model = sequelize.import(path.join(__dirname, file));
    db[model.name] = model;
  });

Object.keys(db).forEach(function(modelName) {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

// basic associations
db.Discussion.belongsTo(db.Club, {foreignKey: 'clubId'});
db.Club.hasMany(db.Discussion, {foreignKey: 'clubId'});
db.Post.belongsTo(db.Discussion, {foreignKey: 'discussionId'});
db.Discussion.hasMany(db.Post, {foreignKey: 'discussionId'});

//One post/discussion to One User 
db.Post.belongsTo(db.User, {foreignKey: 'userId'});
db.User.hasMany(db.Post, {foreignKey: 'userId'});
db.Discussion.belongsTo(db.User, {foreignKey: 'userId'});
db.User.hasMany(db.Discussion, {foreignKey: 'userId'});

//Many Users to Many Clubs
// db.Club.belongsToMany(db.User, {through: 'ClubUser'});
// db.User.belongsToMany(db.Club, {through: 'ClubUser'});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
