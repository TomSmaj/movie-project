var request = require("request");

// TODO: Get these movies and date from the front-end
const movie = $("#newMovie");
const date = $("#startDate");
var reqString = "http://www.omdbapi.com/?apikey=trilogy&t=" + movie;
if (date !== null) {
  reqString += "?y=" + date;
}

request(reqString, function(error, response, data) {
  try {
    var response = JSON.parse(data);
    var title = response.Title;
    var year = response.Year;
    var poster = response.Poster;
    // TODO: Send this back to the front end
    console.log(title);
    console.log(year);
    console.log(poster);
  } catch (error) {
    console.log(error);
  }
});
