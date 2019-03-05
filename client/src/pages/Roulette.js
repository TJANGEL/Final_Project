import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import { Row, Col, Container } from "react-bootstrap";

export class Roulette extends Component {
  render() {
    return (
      <div>
        <Row>
          <Col sm={12}>
            <Jumbotron>
              <h1>IMPATIENT NETFLIXING</h1>
              <h3>Roll to Decide what you'll watch next</h3>
            </Jumbotron>
          </Col>
        </Row>
        <Container>
          <Row>
            <Col sm={8}>Parameters</Col>
            <Col sm={4}>Result:</Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Roulette;
