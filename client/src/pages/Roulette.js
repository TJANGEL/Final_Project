import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import RouletteWheel from "../components/RouletteWheel";
import {
  Row,
  Col,
  Container
  // ButtonToolbar,
  // DropdownButton,
  // Dropdown
} from "react-bootstrap";

export class Roulette extends Component {
  render() {
    return (
      <div>
        <Row>
          <Col sm={12}>
            <Jumbotron>
              {/* <h1>IMPATIENT NETFLIXING</h1> */}
              <h1>Spin the Wheel to Decide What You'll Watch Next</h1>
            </Jumbotron>
          </Col>
        </Row>
        <Container>
          <Row>
            <Col sm={6}>
              Filter:
              <RouletteWheel />
              {/* <ButtonToolbar>
                {["Danger"].map(variant => (
                  <DropdownButton
                    title={variant}
                    variant={variant.toLowerCase()}
                    id={`dropdown-variants-${variant}`}
                    key={variant}
                  >
                    <Dropdown.Item eventKey="1">Genre</Dropdown.Item>
                    <Dropdown.Item eventKey="2">another</Dropdown.Item>
                    <Dropdown.Item eventKey="3">another</Dropdown.Item>
                    <Dropdown.Item eventKey="4">another</Dropdown.Item>
                    <Dropdown.Item eventKey="5">another</Dropdown.Item>
                  </DropdownButton>
                ))}
              </ButtonToolbar> */}
            </Col>
            <Col sm={6}>
              Result:
              {/* <RouletteWheel /> */}
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Roulette;
