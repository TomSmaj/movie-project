$(document).ready(function() {
  console.log("index ready");
});

var title = $("#post_title");
var text = $("#post_text");
var discussionId = $("#discussion_id");
var userId = $("#user_id");
var respondingTo = $("#responding_to");

//performs a get request that navigates to the specific club page when the club card is clicked
$("#submit_post").on("click", function(e) {
  e.preventDefault();
  // get jquery references to the post
  let discID = window.location.href; 
  let discArr = discID.split("/")
  console.log("discarr    " + discArr[4])

  var newPost = {
    title: title.val().trim(),
    text: text.val().trim(),
    discussionId: discArr[4],
    userId: userId.val().trim(),
    respondingTo: respondingTo.val().trim()
  };

  submitPost(newPost);
});

function submitPost(Post) {
  $.post("/api/posts/", Post, function(res) {
    console.log(res)
    }).then(window.location.reload)
}
