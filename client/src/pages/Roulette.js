import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import RouletteWheel from "../components/RouletteWheel";
import { Row, Col, Container } from "react-bootstrap";

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
  "Cult Movies"
];

export class Roulette extends Component {
  render() {
    return (
      <div>
        <Row>
          <Col sm={12}>
            <Jumbotron>
              <h1>IMPATIENT NETFLIXING</h1>
              <h1>Spin the Wheel to Decide What You'll Watch Next</h1>
            </Jumbotron>
          </Col>
        </Row>
        <Container>
          <Row>
            <Col sm={6}>
              Filter:
              <RouletteWheel
                options={options}
                baseSize={250}
                onComplete={handleOnComplete}
              />
            </Col>
            <Col className="result" sm={6}>
              Result:
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Roulette;
