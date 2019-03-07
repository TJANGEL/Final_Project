import React from "react";
// import ResultsContainer from "../components/ResultsContainer";
import Jumbotron from "../components/Jumbotron";
import { ListGroup, Link, Button } from "react-bootstrap";
import API from "../utils/API";

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
          <h1>Favorites</h1>
        </Jumbotron>

        {/* {this.state.titles.length ? (
          <ListGroup>
            {this.state.titles.map(title => (
              <ListGroup.Item key={title._id}>
                <Link to={"/title/" + title._id}>
                  {title.title} {title.title}
                </Link>
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

        <ListGroup>
          <ListGroup.Item>
            Kiss Kiss Bang Bang
            <Button className="remove-btn" variant="outline-danger">
              &times;
            </Button>
          </ListGroup.Item>
          <ListGroup.Item>
            Avengers{" "}
            <Button className="remove-btn" variant="outline-danger">
              &times;
            </Button>
          </ListGroup.Item>
          <ListGroup.Item>
            Wreck it Ralph{" "}
            <Button className="remove-btn" variant="outline-danger">
              &times;
            </Button>
          </ListGroup.Item>
          <ListGroup.Item>
            Frozen 2.0{" "}
            <Button className="remove-btn" variant="outline-danger">
              &times;
            </Button>
          </ListGroup.Item>
        </ListGroup>
      </div>
    );
  }
}

export default Favorites;
