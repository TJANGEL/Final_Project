import React from "react";
import ResultsContainer from "../components/ResultsContainer";
import Jumbotron from "../components/Jumbotron";
// import API from "../utils/API";

class Favorites extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      favorites: []
    };
  }

  // componentWillMount() {
  //   API.getFavorites()
  //     .then(response => {
  //       this.setState({ favorites: response.data });
  //     })
  //     .catch(err => {
  //       console.log(err);
  //     });
  // }

  render() {
    return (
      <div>
        <Jumbotron>
          <h1>Favorites</h1>
        </Jumbotron>
        <ResultsContainer
          favorites={this.state.favorites}
          path={this.props.match.path}
        />
      </div>
    );
  }
}

export default Favorites;
