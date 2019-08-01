console.log("Keys loaded");

//The keys.js file should only have a reference to that variable for your key



//commands:

//spotify this song "A song"

//concert this Dave Mathews band

//do-what-it-says ----reads a file--- like a song ---


//take screenshots and put it in the read me file for grading

//mark down language for readmes

console.log('this is loaded');

exports.spotify = {
  id: process.env.SPOTIFY_ID,
  secret: process.env.SPOTIFY_SECRET
};