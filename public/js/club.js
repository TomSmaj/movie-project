$(document).ready(function() {
  console.log("card page ready");
});

// performs a get request that navigates to the specific club page when the club card is clicked
$(".discussion").on("click", function() {
  var discussionId = $(this).attr("discussionId");
  console.log("you just clicked " + discussionId);
  $.get("/discussion/" + discussionId).then(function() {
    console.log("window location href: " + window.location.href);
    window.location.href = "/discussion/" + discussionId;
  });
});

// Add New Discussion within a club - button click routes user to new discussion form
  $("#add_disc_btn").on("click", function() {
      window.location.href = "/add-movie"
    });


// To create new club forum
var new_club = $("#new_club");
var new_descr = $("#new_club_description");
var new_admin = window.localStorage;

$("#add_club_btn").on("click", function(e) {
  e.preventDefault();

  var createClub = {
    name: new_club.val().trim(),
    description: new_descr.val().trim()
    // admin: new_admin
  };

  newClub(createClub);
});

function newClub(newClubName) {
  $.post("api/clubs/", newClubName, function(res) {
    console.log(res);
  }).then((window.location.href = "localhost:3000"));
}
