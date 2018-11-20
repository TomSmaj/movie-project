module.exports = function(sequelize, DataTypes) {
<<<<<<< HEAD
  var User = sequelize.define("User", {
=======
  const Example = sequelize.define("Example", {
>>>>>>> dd9b6fd51fb8c14ba6a4bba5e65abf3ef3a9f0fb
    text: DataTypes.STRING,
    description: DataTypes.TEXT
  });
  return Example;
};
