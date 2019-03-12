import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import RouletteWheel from "../components/RouletteWheel";
import { Row, Col, Container } from "react-bootstrap";
import ResultsContainer from "../components/resultsContainer";

const handleOnComplete = value => {
  console.log(value);
};

// function genGenres(charA, charZ) {
//   var a = [],
//     i = charA.charCodeAt(0),
//     j = charZ.charCodeAt(0);
//   for (; i <= j; ++i) {
//     a.push(String.fromCharCode(i));
//   }
//   return a;
// }

// const options = genGenres("a", "z");

const movieGenres = [
  "Action & Adventure",
  "Anime Features",
  "Children & Family Movies",
  "Classic Movies",
  "Comedies",
  "Cult Movies",
  "Documentaries",
  "Dramas",
  "Faith & Spirtuality",
  "Horror Movies",
  "Independent Movies",
  "International Movies",
  "LGBTQ Movies",
  "Music & Musicals",
  "Romantic Movies",
  "Sci-Fi & Fantasy",
  "Sports Movies",
  "Stand-Up Comedy",
  "Thrillers"
];

const movies = [];

export class Roulette extends Component {
  loadOptions() {
    // Shuffle array
    const shuffled = movieGenres.sort(() => 0.5 - Math.random());

    // Get sub-array of first 6 elements after shuffled
    let selected = shuffled.slice(0, 6);
    return selected;
  }

  // randomly select movie from db
  randomMovie = movies => {
    let randomIndex = Math.floor(Math.random() * movies.length);
    return movies[randomIndex];
  };

  render() {
    return (
      <div>
        <Row>
          <Col>
            <Jumbotron>
              <h1 className="jumbotron-name">IMPATIENT NETFLIXING</h1>
              <h2 className="instructions">
                Spin the Wheel to Decide What to Watch
              </h2>
            </Jumbotron>
          </Col>
        </Row>
        <Container className="container">
          <Row>
            <Col sm={4}>
              <h3>Genre:</h3>
              <br />
              <RouletteWheel
                options={this.loadOptions()}
                baseSize={280}
                onComplete={handleOnComplete}
              />
            </Col>
            <Col sm={4} />
            <Col className="result" sm={4}>
              <h3>Results:</h3>
              <br />
              {/* <ResultsContainer /> */}
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Roulette;
