$(document).ready(function() {
  console.log("index ready");
});

$(".club").on("click", function() {
  var clubid = $(this).attr("clubId");
  console.log("clubId: " + clubid + " has been clicked.");
  $.get("/club/" + clubid).then(function() {
    window.location.href = "/club/" + clubid;
  });
});
