// This part calls the OMDB API and populates the modal
var clubId = "";

function displayMovieInfo() {
  const movie = $("#new_movie").val();
  const date = $("#movie_year").val();
  const discussion = $("#movie-description").val();
  const discTitle = $("#discussion-title").val();
  const start = $("#start-date").val();
  const end = $("#end-date").val();
  var reqString = "https://www.omdbapi.com/?apikey=trilogy&t=" + movie;
  if (date !== "") {
    reqString += "&y=" + date;
  }

  if (
    movie === "" ||
    discussion === "" ||
    discTitle === "" ||
    start === "" ||
    end === ""
  ) {
    $("#modal1").modal();
    console.log("hello");
    $("#invalidAlert").removeClass("hide");
  }
  console.log(reqString);

  $.ajax({
    url: reqString,
    method: "GET"
  }).then(function(response) {
    var title = response.Title;
    var year = response.Year;
    var poster = response.Poster;
    var plot = response.Plot;
    var image = $("<img>")
      .attr("src", poster)
      .addClass("movie-poster");

    $("#confirm-movie-title").text(title);
    $("#confirm-movie-year").text(year);
    $("#confirm-movie-plot").text(plot);
    $(".poster").html(image);
    $("#confirm-discussion-title").text(discTitle);
    $("#confirm-discussion").text("Discussion focus: " + discussion);
    $("#confirm-start-date").text("Start date: " + start);
    $("#confirm-end-date").text("End date: " + end);
  });
}

$(document).on("click", "#add_movie_btn", displayMovieInfo);

// This part saves the discussion
$("#add_discussion_btn").on("click", function(e) {
  e.preventDefault();
  var title = $("#confirm-movie-title").text();
  console.log(title);
  var year = $("#confirm-movie-year")
    .text()
    .trim();
  var plot = $("#confirm-movie-plot")
    .text()
    .trim();
  var poster = $(".movie-poster").prop("src");
  console.log(poster);
  var text = $("#confirm-discussion")
    .text()
    .replace("Discussion focus: ", "");
  var startDate = $("#confirm-start-date")
    .text()
    .replace("Start date: ", "");
  var endDate = $("#confirm-end-date")
    .text()
    .replace("End date: ", "");
  var discTitle = $("#confirm-discussion-title")
    .text()
    .trim();
  clubId = JSON.parse(sessionStorage.getItem("clubId"));
  sessionStorage.removeItem("clubId");

  var createDiscussion = {
    text: text,
    startDate: startDate,
    endDate: endDate,
    movie: title,
    moviePoster: poster,
    moviePlot: plot,
    movieYear: year,
    clubId: clubId,
    title: discTitle
  };

  newDiscussion(createDiscussion);
});

function newDiscussion(Disc) {
  $.ajax({
    type: "POST",
    url: "/api/discussions/",
    data: Disc,
    success: function() {
      window.location.href = "/club/" + clubId;
    }
  });
}
