import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";

export class About extends Component {
  render() {
    return (
      <div>
        <Jumbotron>
          <h1 className="jumbotron-name">ABOUT</h1>
        </Jumbotron>
        <img alt="netflix and chill" src="..src/img/netflix-and-chill.jpg"/>
        <p>Are you overcome with choice paralysis every time you try to Netflix and chill? If so, you like hundreds of other people will benefit from this app. Taking the guess work out of choosing a movie or show we give you a selection of genres and then suggest a movie/show for your viewing pleasure. Give the wheel a spin and see what Lady Luck has in store for you! If you love the suggested show go ahead and add it to your favorites page, you’ll just need to create an account. Want to try this out without saving your suggestions, no problem, the wheel spins for you even if you are not logged in. Go ahead, take a chance, test your luck and see what is in-store for your viewing pleasure!</p>
        
      </div>
    );
  }
}

export default About;
