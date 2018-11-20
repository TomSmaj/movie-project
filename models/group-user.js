module.exports = function(sequelize, Sequelize) {
    var Group_User = sequelize.define("Group_User", {
        user_id: Sequelize.INTEGER,             // this table relates users to a particular group they are part of
        group_id: Sequelize.INTEGER
    });
    return Group_User;                            
  };
  