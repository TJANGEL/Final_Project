import React, { Component } from "react";
import { Card, Button } from "react-bootstrap";

export default class MovieCard extends Component {
  render() {
    const { title, url, image, genres, id } = this.props.data;
    // console.log(this.props.data);
    return (
      <div>
        <Card style={{ width: "35rem", height: "35rem" }}>
          <Card.Img
            variant="top"
            src={image}
            style={{ width: "35rem", height: "30rem" }}
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
          </Card.Body>
        </Card>
      </div>
    );
  }
}
