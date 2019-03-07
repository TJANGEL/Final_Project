import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Roulette from "./pages/Roulette";
import Favorites from "./pages/Favorites";
import Login from "./pages/Login";
import Register from "./pages/Register";
import About from "./pages/About";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { inherits } from "util";
import cheerio from "cheerio";
import axios from "axios";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mediaList: [{}]
    };
  }

  async movieScraper(maxPageNumber) {
    let minRating = 0,
      audio = "en",
      minYear = 1920,
      order = "date";
    let movieArray = [];
    let maxYear = new Date().getFullYear;
    const URL = `https://flixable.com/?min-rating=${minRating}&audio=${audio}&min-year=${minYear}&max-year=${maxYear}&order=${order}&page=`;

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
  }

  async componentWillMount() {
    try {
      let movieArray;
      // let response = await axios.get("https://flixable.com")
      // let $ = cheerio.load(response.data);
      // let pageNumbersArray = []
      // $("li").each((i, element) => {
      // let pageNumbers = $(element).children('a').attr('href')
      // pageNumbersArray.push(pageNumbers)
      // })

      // let maxpageLink = pageNumbersArray[pageNumbersArray.length - 2]
      // let index = maxpageLink.indexOf("page=")
      // if (index > -1) {
      //   let start = new Date().getTime();
      //   // TODO: pass this as the parameter to the function movieScraper to scrape all the pages maxpageLink.slice(index + 5)
      //   movieArray = await movieScraper(15)
      //   let end = new Date().getTime();
      //   console.log('Execution time (hr): %d ms', (end - start))
      //   this.setState({ mediaList: movieArray })
      //   console.log(movieArray.length)
      // }
      movieArray = await this.movieScraper(15);
      this.setState({ mediaList: movieArray });
      console.log(movieArray.length);
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Navbar fixed="top" />
            {/* <Jumbotron /> */}
            <Switch>
              <Route exact path="/" component={Roulette} />
              <Route path="/login" component={Login} />
              <Route path="/register" component={Register} />
              <Route path="/about" component={About} />
              <Route path="/favorites" component={Favorites} />
            </Switch>
            <Footer />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
