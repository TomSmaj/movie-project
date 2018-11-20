module.exports = function(sequelize, Sequelize) {
    var Group = sequelize.define("Group", {
        group_id: {                                  // id of the group, primary key for group table
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        //user_id: Sequelize.INTEGER,             // the id of user that made the group
        name: Sequelize.STRING,                 // Name of the group
        description: Sequelize.TEXT,            // description of group that is displayed somewhere (perhaps at the top or in the sidebar) of the group page, basically a 'mission statement' about the group, or guidelines suggesting what discussion should be about
    });                                         // there is also a 'createdAt' and 'updatedAt' field that is being autocreated by sequelize
    
    Group.associate = function(models) {
        // We're saying that a Group should belong to a User
        // A Group can't be created without a User due to the foreign key constraint
        Group.belongsTo(models.User, {
          foreignKey: {
            allowNull: false
          }
        });

        Group.belongsToMany(models.User, {
            through: 'Group_User',
            foriegnKey: 'user_id'
        });
      };
    
    return Group;                                

  };
  