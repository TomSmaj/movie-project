module.exports = function(sequelize, Sequelize) {
  var Post = sequelize.define("Post", {
    postId: {
      //id of the post, primary key for post table
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    text: Sequelize.TEXT, //text body of the post
    title: Sequelize.STRING, //(intended for a later phase) the top-leve post (of a chain of posts within a discussion) will have a title asociated with it
    respondingTo: Sequelize.INTEGER, //(intended for a later phase) the id of the post that this post is in response to
    poster: Sequelize.STRING // username of the user who made the post
  }); //there is also a 'createdAt' field that is being autocreated by sequelize

  return Post;
};
