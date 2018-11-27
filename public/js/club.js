$(document).ready(function() {
  console.log("reached club page");
});

$(".discussion").on("click", function(){
  var discussionId = $(this).attr("discussionId");
  console.log("you just clicked "+ discussionId);
  $.get("/discussion/" + discussionId).then(function(){
    console.log("window location href: "+ window.location.href)
    window.location.href = "/discussion/" + discussionId;
  });
});

// submit post
$("#submit_post").on("click", function(){
  $.ajax({
    type: "POST",
    url: url,
    data: data,
    dataType: dataType
  }).then(
    // get req to get all discussions and reload window
  ).fail()
});