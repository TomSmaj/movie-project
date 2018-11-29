/* eslint-disable camelcase */
$(document).ready(function() {
  console.log("card page ready");
});

//performs a get request that navigates to the specific club page when the club card is clicked
$(".discussion").on("click", function() {
  var discussionId = $(this).attr("discussionId");
  console.log("you just clicked " + discussionId);
  $.get("/discussion/" + discussionId).then(function() {
    console.log("window location href: " + window.location.href);
    window.location.href = "/discussion/" + discussionId;
  });
});

// To create new club forum

var new_club = $("#new_club");
var new_descr = $("#new_club_description");
var new_admin = "none";
if (sessionStorage.getItem("loggedInUser")) {
  new_admin = JSON.parse(sessionStorage.getItem("loggedInUser")).username;
}

$("#add_club_btn").on("click", function(e) {
  e.preventDefault();

  var createClub = {
    name: new_club.val().trim(),
    description: new_descr.val().trim(),
    admin: new_admin
  };

  newClub(createClub);
});

// function newClub(newClubName) {
//   $.post("api/clubs/", newClubName, function(res) {
//     console.log(res);
//   }).then((window.location.href = "localhost:3000"));

function newClub(newClubName) {
  $.ajax({
    type: "POST",
    url: "/api/clubs/",
    data: newClubName,
    success: function() {
      window.location.href = "/";
    }
  });
}
