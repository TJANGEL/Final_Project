import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";

export class Roulette extends Component {
  render() {
    return (
      <div>
        <row>
          <col size="md-12">
            <Jumbotron>
              <h1>IMPATIENT NETFLIXING</h1>
              <h3>Roll to Decide what you'll watch next</h3>
            </Jumbotron>
          </col>
        </row>
      </div>
    );
  }
}

export default Roulette;
