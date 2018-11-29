function displayMovieInfo() {
  const movie = $("#new_movie").val();
  console.log(movie);
  const date = $("#movie_year").val();
  const discussion = $("#movie-description").val();
  console.log(discussion);
  const start = $("#start-date").val();
  const end = $("#end-date").val();
  var reqString = "http://www.omdbapi.com/?apikey=trilogy&t=" + movie;
  if (date !== "") {
    reqString += "&y=" + date;
  }

  console.log(reqString);

  $.ajax({
    url: reqString,
    method: "GET"
  }).then(function(response) {
    console.log(response);
    var title = response.Title;
    console.log(title);
    var year = response.Year;
    var poster = response.Poster;
    var plot = response.Plot;
    console.log(poster);
    var image = $("<img>").attr("src", poster);
    // TODO: Send this back to the front end
    $("#confirm-movie-title").text(title);
    $("#confirm-movie-year").text(year);
    $("#confirm-movie-plot").text(plot);
    $(".poster").html(image);
    $("#confirm-discussion").text("Discussion focus: " + discussion);
    $("#confirm-start-date").text("Start date: " + start);
    $("#confirm-end-date").text("End date: " + end);
  });
}

$(document).on("click", "#add_movie_btn", displayMovieInfo);
