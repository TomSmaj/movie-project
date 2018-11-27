$(document).ready(function() {
  console.log("reached club page");
});

$(".discussion").on("click", function(){
  try{
  var discussionId = $(this).attr("discussionId");
  console.log("you just clicked "+ discussionId);
<<<<<<< HEAD
  $.get("/discussion/" + discussionId).then(function(){
    console.log("window location href: "+ window.location.href)
    window.location.href = "/discussion/" + discussionId;
  });
}
  catch(error) {
    console.log("error" + error);
  }
});
=======
  $.get("/discussion/"+discussionId).then(function(){
    window.location.href = "/discussion/"+discussionId;
  })
})

>>>>>>> ecc00e78f9b5748144c9ed3f2420c208245b0e27
