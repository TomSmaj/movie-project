module.exports = function(sequelize, Sequelize) {
  var User = sequelize.define("User", {
    userId: {
      // user_id, primary key for user table
      type: Sequelize.STRING // this user_id may end up being the id you get from the gogle auth
    },
    username: Sequelize.STRING,
    password: Sequelize.STRING,
    primeKey: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true
    }
  });

  // User.associate = function(models) {
  //   User.belongsToMany(models.Club, { through: "ClubUser" });
  // };

  return User;
};
