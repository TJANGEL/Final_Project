const db = require("../models");
const axios = require("axios");
const cheerio = require("cheerio");

const moviesGenres = ["Action & Adventure", "Anime Features", "Children & Family Movies", "Classic Movies", "Comedies", "Cult Movies", "Documentaries", "Dramas", "Faith & Spirtuality", "Horror Movies",
  "Independent Movies", "International Movies", "LGBTQ Movies", "Music & Musicals", "Romantic Movies", "Sci-Fi & Fantasy", "Sports Movies", "Stand-Up Comedy", "Thrillers"];

const tvGenres = ["Anime Series", "British TV Shows", "Classic & Cult TV", "Crime TV Shows", "Docuseries", "International TV Shows", "Kids' TV", "Korean TV Shows",
  "Reality TV", "Romantic TV Shows", "Science & Nature TV", "Spanish-Language TV Shows", "Stand-Up Comedy & Talk Shows", "Teen TV Shows", "TV Action & Adventure",
  "TV Comedies", "TV Dramas", "TV Horror", "TV Mysteries", "TV Sci-Fi & Fantasy", "TV Thrillers"];

// Defining methods for the MoviessController
module.exports = {
  findAll: function (req, res) {
    db.Movies.find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function (req, res) {
    db.Movies.findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function (req, res) {
    db.Movies.create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function (req, res) {
    db.Movies.findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function (req, res) {
    db.Movies.findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  loadAllMovies: async function (req, res) {
    let maxPageNumber = await getMaxPageNumber();
    // console.log(maxPageNumber)
    let movieObjects = await movieScraper(maxPageNumber);
    // console.log("movieObjects size: " + movieObjects.length);
    let sortedMovieObjects = removeDuplicates(movieObjects, "url")
    // console.log("sorted movieObjects size: " + sortedMovieObjects.length);
    db.Movies.create(sortedMovieObjects).then(dbModel => {
      console.log("Size of data Saved:" + dbModel)
      res.json(sortedMovieObjects)
    }).catch(err => {
      // console.log(err) 
      if (err.name === 'MongoError' && err.code === 11000) {
        // ! Nothing to be done if duplicate key is encountered
      } else {
        console.log(err)
      }
    })
  },
  loadLatest: async function (req, res) {
    let movieObjects = await movieScraper(1);
    // console.log("movieObjects size: " + movieObjects.length);
    let sortedMovieObjects = removeDuplicates(movieObjects, "url")
    // console.log("sorted movieObjects size: " + sortedMovieObjects.length);
    sortedMovieObjects.forEach(movie => {
      db.Movies.findOneAndUpdate({ url: movie.url },
        movie,
        { upsert: true, new: true, runValidators: true },
        function (err, doc) {
          if (err) {
            if (err.name === 'MongoError' && err.code === 11000) {
              // ! Nothing to be done if duplicate key is encountered
            } else {
              console.log(err)
            }
          } else {
            //Success
            // console.log("Updated title: " + movie.title)
          }
        })
    })
    // db.Movies.create(sortedMovieObjects).then(dbModel => {
    //   console.log("Size of data Saved:" + dbmodel.data.length)
    // }).catch(err => { console.log(err) })
    res.json(movieObjects)
  }
};

async function movieScraper(maxPageNumber, minRating = 0, audio = 'en', minYear = 1920, order = 'date') {
  let movieArray = [];
  let maxYear = new Date().getFullYear();
  const URL = `https://www.flixable.com/?min-rating=${minRating}&audio=${audio}&min-year=${minYear}&max-year=${maxYear}&order=${order}&page=`;

  for (let start = 0; start <= maxPageNumber; start++) {
    // console.log("scraping Page: " + start)
    let response = await axios.get(URL + start);
    let $ = cheerio.load(response.data);
    $(".poster-container").each((i, element) => {
      let imageLink = $(element)
        .children("a")
        .children("img")
        .attr("src");
      let title = $(element)
        .children("a")
        .children("img")
        .attr("alt");
      // console.log(title);
      let titleLink = $(element)
        .children("a")
        .attr("href");
      //Get Genres
      let overlayLink = $(element).children('a').children('div').children('span').text();
      let genres = getGenresFromOverlay(overlayLink);
      if (titleLink) {
        let movieObject = {
          title: title,
          image: imageLink,
          url: "https://flixable.com" + titleLink,
          genres: genres
        };
        movieArray.push(movieObject);
      }
    });
  }
  return movieArray;
};

async function getMaxPageNumber() {
  let response = await axios.get("https://flixable.com")
  let $ = cheerio.load(response.data);
  let pageNumbersArray = []
  $("li").each((i, element) => {
    let pageNumbers = $(element).children('a').attr('href')
    pageNumbersArray.push(pageNumbers)
  })

  let maxpageLink = pageNumbersArray[pageNumbersArray.length - 2]

  let index = maxpageLink.indexOf("page=")
  if (index > -1) {
    return maxpageLink.slice(index + 5);
  }
  return 50;
}

function removeDuplicates(originalArray, prop) {
  var newArray = [];
  var lookupObject = {};

  for (var i in originalArray) {
    lookupObject[originalArray[i][prop]] = originalArray[i];
  }

  for (i in lookupObject) {
    newArray.push(lookupObject[i]);
  }
  return newArray;
}

function getGenresFromOverlay(overlayLink) {
  let genres = [];
  //Strip off Rating
  let genresOnly = overlayLink.substring(6);
  tvGenres.forEach(tvGenre => {
    if (genresOnly.includes(tvGenre)) {
      genres.push(tvGenre)
      genresOnly = genresOnly.replace(tvGenre, "")
    }
  })
  moviesGenres.forEach(movieGenre => {
    if (genresOnly.includes(movieGenre)) {
      genres.push(movieGenre)
    }
  })
  // console.log(genres)
  return genres;
}