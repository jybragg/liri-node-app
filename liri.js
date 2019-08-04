
require("dotenv").config();

var keys = require("./keys.js");

var fs = require("fs");

//add moment
const moment = require("moment");

// omdbapi wrapper, npm install omdbapi
// var omdb = require("omdbapi");
var Spotify = require("node-spotify-api");
var spotify = new Spotify(keys.spotify);

var axios = require("axios");

var search = process.argv[2]

var term = process.argv.slice(3).join(" ");


if (search === "concert-this") {
    console.log("Searching for Concerts");
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
    console.log("Searching for Songs");


    spotify.search({
        type: 'track',
        query: search,
    },
        function (err, data) {
            if (err) {
                return console.log("Error: " + err);

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
            };
        });
    };
//};
//song();

//////////
// else if (apiType == "spotify-this-song") {
//     spotifyAPI.search({ type: "track", 
//query: searchTerm, 
//limit: 20 }, 
//          function (err, data) {
//         if (err) {
//             return console.log('Error occurred: ' + err);
//         }
//         var resultArray = data.tracks.items;

//         for (var i = 0; i < resultArray.length; i++) {
//             var band = resultArray[i].album.artists[0].name;
//             var song = resultArray[i].name;
//             var album = resultArray[i].album.name;
//             var songLink = resultArray[i].external_urls.spotify;

//             var spotifyData = "Song Name: " + song + "\nBand: " + band + "\nAlbum: " + album + "\nSpotify Link: " + songLink;

//                 console.log(spotifyData + "\n");
//               });
//         }
//     });
// } 
/////////////////////////

//spotify-this-song:node liri.js spotify-this-song '<song name here>
//This will show the following information about the song in your terminal/bash window:

//If no song is provided then your program will default to "The Sign" by Ace of Base.
//You will utilize the [node-spotify-api](https://www.npmjs.com/package/node-spotify-api) package 
//in order to retrieve song information from the Spotify API.


//---------------------------------------------------------------------------------------------------------------//

//movie-this:node liri.js movie-this '<movie name here>
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



