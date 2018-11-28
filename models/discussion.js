module.exports = function(sequelize, Sequelize) {
  var Discussion = sequelize.define("Discussion", {
    discussionId: {
      // id of the discussion, primary key for discussion table
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    //club_id: Sequelize.INTEGER,            // id of the club the discussion belongs to
    //user_id: Sequelize.INTEGER,             // the id of user that made the discussion
    text: Sequelize.TEXT, // text body of discussion (text at top of discussion providing info about what this discussion is about)
    title: Sequelize.STRING, // the title of the discussion, is visible at the top of each discussion in the list of discussion on the club page as well as the top of that specific's duscussion page
    startDate: Sequelize.DATE, // date that the actual discussion will start, it is at this date/time that the discussion is active and posts can be made
    endDate: Sequelize.DATE, // date at which the discussion ends and posts can no longer be made, the discussion is no longer active
    active: Sequelize.BOOLEAN, // posts can be made in a discussion only when it is active, a discussion is active when the curent date is between the disucssion's start and end date
    movie: Sequelize.STRING, // the movie that this particular discussion is related to
    moviePoster: Sequelize.STRING, // link to the poster for the movie taken from OMDB
    moviePlot: Sequelize.STRING, // short plot synopsis for the movie taken from OMDB
    movieYear: Sequelize.INTEGER // year the movie was released, taken from OMDB
  }); // there is also a 'createdAt' and 'updatedAt' field that is being autocreated by sequelize

  Discussion.associate = function(models) {
    // We're saying that a Discussion should belong to an Club
    // A Discussion can't be created without a Club due to the foreign key constraint
    // A Discussion also belong's to a User
    Discussion.belongsTo(models.Club, {
      foreignKey: {
        allowNull: false
      }
    });

    Discussion.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return Discussion;
};
