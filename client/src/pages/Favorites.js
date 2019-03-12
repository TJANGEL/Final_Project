import React from "react";
import Jumbotron from "../components/Jumbotron";
import { ListGroup, Button } from "react-bootstrap";
import Shuffle from "../components/Shuffle";
// import { Card, CardDeck } from "react-bootstrap";
// import FlipMove from "react-flip-move";

// import API from "../utils/API";

class Favorites extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      favorites: [],
      imageLink: "",
      title: "",
      titlelink: ""
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

  // deleteTitle = id => {
  //   API.deleteTitle(id)
  //     .then(res => this.loadTitle())
  //     .catch(err => console.log(err));
  // };

  render() {
    return (
      <div>
        <Jumbotron>
          <h1 className="jumbotron-name">MY FAVORITES</h1>
        </Jumbotron>
        {/* {this.state.titles.length ? (
          <ListGroup>
            {this.state.titles.map(title => (
              <ListGroup.Item key={title._id}>
                <Link to={"/title/" + title._id}>
                  {title.title} {title.title}
                </Link>
                <Button variant="outline-secondary" className="link" href="#">
              Details
            </Button>
                <Button
                      className="remove-btn"
                      color="danger"
                      size="sm"
                      onClick={this.onDeleteClick.bind(this, _id)}
                    >
                      &times;
                    </Button>
              </ListGroup.Item>
            ))}
          </ListGroup>
        ) : (
          <h2>No Favorites Saved</h2>
        )} */}
        <div>
          <Shuffle />
        </div>
      </div>
    );
  }
}

export default Favorites;
