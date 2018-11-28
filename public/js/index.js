$(document).ready(function() {
  console.log("index ready");
  // post request to send back image link to render on the template
});

//performs a get request that navigates to the specific club page when the club card is clicked
$(".club").on("click", function() {
  var clubid = $(this).attr("clubId");
  console.log("clubId: " + clubid + " has been clicked.");
  $.get("/club/" + clubid).then(function() {
    window.location.href = "/club/" + clubid;
  });
});
