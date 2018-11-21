module.exports = function(sequelize, Sequelize) {
  var Club = sequelize.define("Club", {
    clubId: {
      // id of the club, primary key for club table
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    //user_id: Sequelize.INTEGER,             // the id of user that made the club
    name: Sequelize.STRING, // Name of the club
    description: Sequelize.TEXT, // description of Club that is displayed somewhere (perhaps at the top or in the sidebar) of the club page, basically a 'mission statement' about the club, or guidelines suggesting what discussion should be about
    admin: Sequelize.STRING // username of user who made club
  }); // there is also a 'createdAt' and 'updatedAt' field that is being autocreated by sequelize

  Club.associate = function(models) {
    // We're saying that a Club should belong to a User
    // A Club can't be created without a User due to the foreign key constraint

    Club.belongsToMany(models.User, {
      through: "ClubUser",
      foreignKey: {
        allowNull: false
      }
    });
  };

  return Club;
};
