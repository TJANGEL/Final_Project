import React from "react";
import Jumbotron from "../components/Jumbotron";
import { ListGroup, Button } from "react-bootstrap";
// import { Card, CardDeck } from "react-bootstrap";
import FlipMove from "react-flip-move";

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
        <ListGroup className="mb-2">
          {/* <FlipMove> */}
          <ListGroup.Item key="a">
            Kiss Kiss Bang Bang
            <Button variant="outline-secondary" className="link" href="#">
              Details
            </Button>
            <Button className="remove-btn" variant="outline-danger">
              &times;
            </Button>
          </ListGroup.Item>
          <ListGroup.Item key="b">
            Avengers
            <Button variant="outline-secondary" className="link" href="#">
              Details
            </Button>
            <Button className="remove-btn" variant="outline-danger">
              &times;
            </Button>
          </ListGroup.Item>
          <ListGroup.Item key="c">
            Wreck it Ralph
            <Button variant="outline-secondary" className="link" href="#">
              Details
            </Button>
            <Button className="remove-btn" variant="outline-danger">
              &times;
            </Button>
          </ListGroup.Item>
          <ListGroup.Item key="d">
            Frozen
            <Button variant="outline-secondary" className="link" href="#">
              Details
            </Button>
            <Button className="remove-btn" variant="outline-danger">
              &times;
            </Button>
          </ListGroup.Item>
          {/* </FlipMove> */}
        </ListGroup>
        {/* <CardDeck>
          <Card>
            <Card.Img variant="top" src="holder.js/100px160" />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
              <Button variant="outline-secondary" className="link" href="#">
                Details
              </Button>
              <Button className="remove-btn" variant="outline-danger">
                &times;
              </Button>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
          </Card>
          <Card>
            <Card.Img variant="top" src="holder.js/100px160" />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This card has even longer content
                than the first to show that equal height action.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
          </Card>
          <Card>
            <Card.Img variant="top" src="holder.js/100px160" />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This card has even longer content
                than the first to show that equal height action.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
          </Card>
        </CardDeck> */}
      </div>
    );
  }
}

export default Favorites;
