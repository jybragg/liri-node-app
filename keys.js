console.log("Keys loaded");

//The keys.js file should only have a reference to that variable for your key


exports.spotify = {
  id: process.env.SPOTIFY_ID,
  secret: process.env.SPOTIFY_SECRET,
};