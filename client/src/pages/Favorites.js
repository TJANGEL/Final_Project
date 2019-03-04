import React from "react";
import ResultsContainer from "../components/ResultsContainer";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";

class Saved extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      favorites: []
    };
  }

  componentWillMount() {
    API.getFavorites()
      .then(response => {
        this.setState({ favorites: response.data });
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    console.log(this.state.favorites);
    return (
      <main>
        <Jumbotron />
        <ResultsContainer
          favorites={this.state.favorites}
          path={this.props.match.path}
        />
      </main>
    );
  }
}

export default Saved;
