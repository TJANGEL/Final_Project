import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import RouletteWheel from "../components/RouletteWheel";
import { Row, Col, Container } from "react-bootstrap";
import ResultsContainer from "../components/ResultsContainer";

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

const options = [
  "Drama",
  "Thrillers",
  "Comedies",
  "Action & Adventure",
  "Cult Movies",
  "Anime Features"
];

export class Roulette extends Component {
  render() {
    return (
      <div>
        <Row>
          <Col>
            <Jumbotron>
              <h1 className="brand-name">IMPATIENT NETFLIXING</h1>
              <br />
              <h2>Spin the Wheel to Decide What to Watch</h2>
            </Jumbotron>
          </Col>
        </Row>
        <Container>
          <Row>
            <Col sm={4}>
              <h3>Genre:</h3>
              <br />
              <RouletteWheel
                options={options}
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
