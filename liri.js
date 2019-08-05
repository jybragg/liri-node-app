
require("dotenv").config();

var keys = require("./keys.js");

var fs = require("fs");

//add moment
const moment = require("moment");

// omdbapi wrapper, npm install omdbapi
var omdb = require("omdb");

var Spotify = require('node-spotify-api');
var spotify = new Spotify(keys.spotify);

var axios = require("axios");

var search = process.argv[2]
var term = process.argv.slice(3).join(" ");


if (search === "concert-this") {
    console.log("Searching for Concerts...");
    axios.get("https://rest.bandsintown.com/artists/" + term + "/events?app_id=codingbootcamp")
        .then(function (response) {
            // console.log(response) - for testing
            //looping through response.data
            for (var i = 0; i < response.data.length; i++) {

                // var date = response.data[i].datetime;
                // var eventDate = moment(date, "MM-DD-YYYY"),

                var showData = [
                    "Artist: " + response.data[i].lineup[i],
                    "Name of the venue: " + response.data[i].venue.name,
                    "Venue location: " + response.data[i].venue.city,
                    "Date of the Event: " + response.data[i].datetime,

                ].join("\n\n");
                console.log(showData);

            }
        });
}

//---------------------------------------------------------------------------------------------------------------//
// spotify-this-song function
else if (search === "spotify-this-song") {
    console.log("Searching for Songs...");

    spotify.search({ type: 'track', query: term, limit: 3, }, function (err, data) {
        if (err) {
            return console.log('Error: ' + err);
        } else {
            var results = data.tracks.items
            for (i = 0; i < results.length; i++) {
                var songData = [
                    "Artist: " + results[i].artists[0].name,
                    "Song name: " + results[i].name,
                    "Album: " + results[i].album.name,
                    "Link to Spotify: " + results[i].external_urls.spotify,

                ].join("\n\n");
                console.log(songData);

            };
            //console.log(data); -- for testing
        };
    });
}

//---------------------------------------------------------------------------------------------------------------//

//movie-this function
else if (search === "movie-this") {
    console.log("Searching for Movies...");
    // if (err) {
    //     return console.log('Error occurred: ' + err);
    // } else {
        axios.get("http://www.omdbapi.com/?t=" + term + "&apikey=6a0f9933")
            .then(function (response) {
                //console.log(response); -- for testing
                //no for loop needed here
                    var movieData = [
                        "Title: " + response.data.Title,
                        "Release Year: " + response.data.Year,
                        "IMDB Rating: " + response.data.imdbRating,
                        "Produced in: " + response.data.Country,
                        "Language: " + response.data.Language,
                        "Plot: " + response.data.Plot,
                        "Cast: " + response.data.Actors,
                        "Rotten Tomatoes Rating: " + response.data.Ratings[1].Value,
                    ].join("\n\n");
                    console.log(movieData);
            });
    }

//---------------------------------------------------------------------------------------------------------------//

//do-what-it-says function

//It should run `spotify-this-song` for "I Want it That Way," as follows the text in `random.txt`.

else if(search === "do-what-it-says") {
    console.log("..........");
    fs.readFile("random.txt", "utf8", function (err, data) {
        if (err) {
            return console.log(err);
        }
        var dataTxt = data.split(",");
        console.log(dataTxt);

        dataTxt = [term, search];
    });
}


