$(document).ready(function() {
  console.log("card page ready");
});

//performs a get request that navigates to the specific club page when the club card is clicked
$(".discussion").on("click", function() {
  var discussionid = $(this).attr("discussionId");
  console.log("discussionId: " + discussionid + " has been clicked.");
  $.get("/discussion/" + discussionid).then(function() {
    window.location.href = "/discussion/" + discussionid;
  });
});
