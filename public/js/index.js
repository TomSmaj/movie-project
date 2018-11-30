$(document).ready(function() {
  console.log("index ready");

  // grabbing username from session storage and putting it in navbar
  if (sessionStorage.getItem("loggedInUser")) {
    poster = JSON.parse(sessionStorage.getItem("loggedInUser")).username;
    $(".logged-in-nav").text(opster);
   }

  // post request to send back image link to render on the template
  $(".modal").modal();
});

//performs a get request that navigates to the specific club page when the club card is clicked
$(".club").on("click", function() {
  var clubid = $(this).attr("clubId");
  console.log("clubId: " + clubid + " has been clicked.");
  $.get("/club/" + clubid).then(function() {
    window.location.href = "/club/" + clubid;
  });
});

document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.datepicker');
  var instances = M.Datepicker.init(elems, String);
});

