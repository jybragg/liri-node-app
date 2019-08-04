
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
//}

//node liri.js movie-this '<movie name here>
//This will output the following information to your terminal/bash window

// * Title of the movie.
// * Year the movie came out.
// * IMDB Rating of the movie.
// * Rotten Tomatoes Rating of the movie.
// * Country where the movie was produced.
// * Language of the movie.
// * Plot of the movie.
// * Actors in the movie.
// ```
// If the user doesn't type a movie in, the program will output data for the movie 'Mr. Nobody.'
//If you haven't watched "Mr. Nobody," then you should: <http://www.imdb.com/title/tt0485947/>
//It's on Netflix!
//You'll use the `axios` package to retrieve data from the OMDB API. Like all of the in-class activities, 
//the OMDB API requires an API key. You may use `trilogy`.

//---------------------------------------------------------------------------------------------------------------//


//do-what-it-says:node liri.js do-what-it-says
//Using the `fs` Node package, LIRI will take the text inside of random.txt and then use it to call one of 
//LIRI's commands.
//It should run `spotify-this-song` for "I Want it That Way," as follows the text in `random.txt`.
//Edit the text in random.txt to test out the feature for movie-this and concert-this.



