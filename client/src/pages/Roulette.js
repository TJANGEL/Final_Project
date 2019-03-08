import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
// import RouletteWheel from "../components/RouletteWheel";
import { Button } from "react-bootstrap";

import { Row, Col, Container, DropdownButton, Dropdown } from "react-bootstrap";

export class Roulette extends Component {
  render() {
    return (
      <div>
        <Row>
          <Col>
            <Jumbotron>
              <h1>IMPATIENT NETFLIXING</h1>
              <h1>Spin the Wheel to Decide What You'll Watch Next</h1>
            </Jumbotron>
          </Col>
        </Row>
        <Container variant="outline-danger">
          <Row>
            <Col sm={4}>
              <h3>FILTER</h3>
              <br />
              <DropdownButton id="dropdown-item-button" title="Dropdown button">
                <Dropdown.Item as="button">Action</Dropdown.Item>
                <Dropdown.Item as="button">Another action</Dropdown.Item>
                <Dropdown.Item as="button">Something else</Dropdown.Item>
              </DropdownButton>
              <br />
              <DropdownButton id="dropdown-item-button" title="Dropdown button">
                <Dropdown.Item as="button">Action</Dropdown.Item>
                <Dropdown.Item as="button">Another action</Dropdown.Item>
                <Dropdown.Item as="button">Something else</Dropdown.Item>
              </DropdownButton>
              <br />
              <DropdownButton id="dropdown-item-button" title="Dropdown button">
                <Dropdown.Item as="button">Action</Dropdown.Item>
                <Dropdown.Item as="button">Another action</Dropdown.Item>
                <Dropdown.Item as="button">Something else</Dropdown.Item>
              </DropdownButton>
              <br />
              <Button className="spin-btn" variant="outline-success" size="lg">
                SPIN
              </Button>
            </Col>
            <Col sm={8}>
              <h3>RESULTS</h3>
              <br />
              <Button className="link" href="#" variant="outline-info">
                Details
              </Button>{" "}
              <Button className="favorite-btn" variant="outline-warning">
                FAVORITE
              </Button>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Roulette;
