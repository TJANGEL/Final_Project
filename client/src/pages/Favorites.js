import React from "react";
import Jumbotron from "../components/Jumbotron";
import { ListGroup, Button } from "react-bootstrap";

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
          <h1>My Favorites</h1>
        </Jumbotron>

        {/* {this.state.titles.length ? (
          <ListGroup>
            {this.state.titles.map(title => (
              <ListGroup.Item key={title._id}>
                <Link to={"/title/" + title._id}>
                  {title.title} {title.title}
                </Link>
                <Button href="#">Link</Button>
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

        <ListGroup className="mb-2">
          <ListGroup.Item>
            Kiss Kiss Bang Bang
            <Button className="link" href="#" variant="outline-info">
              Details
            </Button>
            <Button className="remove-btn" variant="outline-danger">
              &times;
            </Button>
          </ListGroup.Item>
          <ListGroup.Item>
            Avengers
            <Button className="link" href="#" variant="outline-info">
              Details
            </Button>
            <Button className="remove-btn" variant="outline-danger">
              &times;
            </Button>
          </ListGroup.Item>
          <ListGroup.Item>
            Wreck it Ralph
            <Button className="link" href="#" variant="outline-info">
              Details
            </Button>
            <Button className="remove-btn" variant="outline-danger">
              &times;
            </Button>
          </ListGroup.Item>
          <ListGroup.Item>
            Frozen
            <Button className="link" href="#" variant="outline-info">
              Details
            </Button>
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
