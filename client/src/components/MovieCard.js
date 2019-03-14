import React, { Component } from "react";
import { Card, Button } from "react-bootstrap";

export default class MovieCard extends Component {
  render() {
    const { title, url, image, genres, id } = this.props.data;
    // console.log(this.props.data);
    return (
      <div>
        <Card style={{ width: "40rem", height: "40rem" }}>
          <Card.Img
            className="movie-name"
            variant="top"
            src={image}
            style={{ width: "40rem", height: "35rem" }}
          />
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>{genres}</Card.Text>
            <Button className="mr-2" href={url} target="_blank" variant="info">
              Details
            </Button>
            <Button href="/favorites" variant="success">
              Favorite
            </Button>

            {/* <Button
              name="Favorite"
              href="/favorites"
              variant="success"
              onClick={this.handleSaveClick}
              disabled={this.state.saved}
            >
              {this.state.saved ? "Saved" : "Save"}
            </Button> */}
          </Card.Body>
        </Card>
      </div>
    );
  }
}
