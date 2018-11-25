//the many to many relation might make this table automatically

/*module.exports = function(sequelize, Sequelize) {
  var clubUser = sequelize.define("ClubUser", {
    userId: Sequelize.INTEGER, // this table relates users to a particular club they are part of
    clubId: Sequelize.INTEGER
  });
  return clubUser;
}; */

module.exports = function(sequelize) {
  var clubUser = sequelize.define("ClubUser");
  return clubUser;
};
