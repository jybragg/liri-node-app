# liri-node-app

## Description
LIRI is a _Language_ Interpretation and Recognition Interface. This app is a command line node app that takes in parameters and gives you back data. liri-node-app will search Spotify for songs, Bands in Town for concerts, and OMDB for movies.

### Concert-this
1. The app searchs the Bands in Town Artist Events API from https://rest.bandsintown.com for an artist and renders the Name of the venue, Name of the venue, Venue location, and the Date of the Event using moment.js  about each event to the terminal:

     * Below is the search results rendered in the terminal for a Jennifer Lopez concert:
     
![Image of Concert-this](/images/concert-this.png)

### Spotify-that-song

2. The app searchs the Spotify API to render a Song's name, Artist(s), A link to preview the song on Spotify, and The album that the song is from.

     * Below are the search results for "Stand By Me" rendered in the terminal:

![Image of Concert-this](/images/spotify.png)

### Movie-this

3. The app searchs the www.imdb.com API for:
  
       * Title of the movie.
       * Year the movie came out.
       * IMDB Rating of the movie.
       * Rotten Tomatoes Rating of the movie.
       * Country where the movie was produced.
       * Language of the movie.
       * Plot of the movie.
       * Actors in the movie.

     * Below are the search results for "Cinderella": 

![Image of Concert-this](/images/moviethis.png)

### do-what-it-says

4. The app will take the text inside of random.txt and then use it to call one of LIRI's commands.

     * Below is the result rendered in the terminal of the text in random.txt 

![Image of Concert-this](/images/dowhatitsays.png)

