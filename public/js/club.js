$(document).ready(function() {
  console.log("reached club page");
});

$(".discussion").on("click", function(){
  try{
  var discussionId = $(this).attr("discussionId");
  console.log("you just clicked "+ discussionId);
  $.get("/discussion/" + discussionId).then(function(){
    console.log("window location href: "+ window.location.href)
    window.location.href = "/discussion/" + discussionId;
  });
}
  catch(error) {
    console.log("error" + error);
  }
});
