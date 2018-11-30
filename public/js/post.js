$(document).ready(function() {
  console.log("index ready");
});

var title = $("#post_title");
var text = $("#post_text");
var discussionId = $("#discussion_id");
var poster = "none";
if (sessionStorage.getItem("loggedInUser")) {
  poster = JSON.parse(sessionStorage.getItem("loggedInUser")).username;
}

// var respondingTo = $("#responding_to");

let discID = window.location.href;
let discArr = discID.split("/");
let urlId = discArr[4];
//performs a get request that navigates to the specific club page when the club card is clicked
$("#submit_post").on("click", function(e) {
  e.preventDefault();
  // get jquery references to the post
  console.log();

  var newPost = {
    title: title.val().trim(),
    text: text.val().trim(),
    discussionId: urlId,
    poster: poster
    // respondingTo: respondingTo.val().trim()
  };

  submitPost(newPost);
});

function submitPost(Post) {
  $.ajax({
    type: "POST",
    url: "/api/posts/",
    data: Post,
    success: function() {
      location.reload();
    }
  });
}
