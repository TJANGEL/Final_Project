import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";

export class About extends Component {
  render() {
    return (
      <div>
        <Jumbotron>
          <h1 className="jumbotron-name">ABOUT</h1>
        </Jumbotron>
      </div>
    );
  }
}

export default About;
