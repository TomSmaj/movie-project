function displayMovieInfo() {
  const movie = $("#new_movie").val();
  console.log(movie);
  const date = $("#movie_year").val();
  console.log(date);
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
    console.log(poster);
    var image = $("<img>").attr("src", poster);
    // TODO: Send this back to the front end
    $("#confirm-movie-title").text(title);
    $("#confirm-movie-year").text(year);
    $(".poster").html(image);
  });
}

$(document).on("click", "#add_movie_btn", displayMovieInfo);
