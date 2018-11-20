module.exports = function(sequelize, Sequelize) {
  var groupUser = sequelize.define("Group_User", {
    userId: Sequelize.INTEGER, // this table relates users to a particular group they are part of
    groupId: Sequelize.INTEGER
  });
  return groupUser;
};
