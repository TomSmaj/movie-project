module.exports = function(sequelize, Sequelize) {
  var User = sequelize.define("User", {
    userId: {
      // user_id, primary key for user table
      type: Sequelize.INTEGER, // this user_id may end up being the id you get from the gogle auth
      autoIncrement: true,
      primaryKey: true
    },
    username: Sequelize.STRING,
    password: Sequelize.STRING
  });

  return User;
};
