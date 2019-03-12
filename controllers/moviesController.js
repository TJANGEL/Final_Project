const db = require("../models");
const axios = require("axios");
const cheerio = require("cheerio");

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
    let movieObjects = await movieScraper(50);
    console.log("movieObjects size: " + movieObjects.length);
    let sortedMovieObjects = removeDuplicates(movieObjects, "url")
    console.log("sorted movieObjects size: " + sortedMovieObjects.length);
    db.Movies.create(sortedMovieObjects).then(dbModel => {
      console.log("Size of data Saved:" + dbmodel.data.length)
    }).catch(err => { console.log(err) })
    res.json(movieObjects)
  },
  loadLatest: async function (req, res) {
    let movieObjects = await movieScraper(1);
    console.log("movieObjects size: " + movieObjects.length);
    let sortedMovieObjects = removeDuplicates(movieObjects, "url")
    console.log("sorted movieObjects size: " + sortedMovieObjects.length);
    //TODO: Create an upsert statement here
    // db.Movies.create(sortedMovieObjects).then(dbModel => {
    //   console.log("Size of data Saved:" + dbmodel.data.length)
    // }).catch(err => { console.log(err) })
    res.json(movieObjects)
  }
};

async function movieScraper(maxPageNumber) {
  let minRating = 0,
    audio = "en",
    minYear = 1920,
    order = "date";
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
      if (titleLink) {
        let movieObject = {
          title: title,
          image: imageLink,
          url: "https://flixable.com" + titleLink
        };
        movieArray.push(movieObject);
      }
    });
  }
  return movieArray;
};

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