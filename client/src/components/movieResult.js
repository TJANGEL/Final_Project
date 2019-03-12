import React from "react";
import API from "../utils/API";
import { BrowserRouter as Router } from "react-router-dom";

class MovieResult extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      saved: false,
      deleted: false
    };
    this.handleSaveClick = this.handleSaveClick.bind(this);
    this.handleDeleteClick = this.handleDeleteClick.bind(this);
  }

  handleSaveClick = function(e) {
    this.setState({ saved: true });
    const movieData = {
      title: this.props.title,
      url: this.props.url,
      image: this.props.image
    };
    e.preventDefault();
    API.addMovieToDB(movieData)
      .then(response => {
        console.log(response);
      })
      .catch(err => {
        console.log(err);
      });
  };

  handleDeleteClick(e) {
    this.setState({ deleted: true });
    e.preventDefault();
    API.deleteMovie(this.props.id)
      .then(response => {
        console.log(response);
        Router.dispatch(this.props.location, null);
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return (
      <div
        className="movieResult"
        id={this.props.id ? this.props.id : null}
        style={{ display: this.state.deleted ? "none" : "block" }}
      >
        <div className="row">
          <div className="aboutMovie">
            <h4>{this.props.title}</h4>
          </div>
          <div className="btnDiv">
            {// if link to movie exists include View button else do not
            this.props.url ? (
              <a
                href={this.props.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <button type="button" name="view">
                  View
                </button>
              </a>
            ) : null}
            {// if this.props.path is "/" display save button else display Delete button
            this.props.path === "/" ? (
              <button
                type="button"
                name="save"
                onClick={this.handleSaveClick}
                disabled={this.state.saved}
              >
                {this.state.saved ? "Saved" : "Save"}
              </button>
            ) : (
              <button
                type="button"
                name="Delete"
                onClick={this.handleDeleteClick}
                disabled={this.state.deleted}
              >
                Delete
              </button>
            )}
          </div>
        </div>
        <div className="row">
          {this.props.image ? (
            <img
              src={
                // if smallthubmail exists on this.props.image use that else if thumbnail exists on this.props.image use that else leave src empty
                this.props.image.smallThumbnail
                  ? this.props.image.smallThumbnail
                  : this.props.image.thumbnail
                  ? this.props.image.thumbnail
                  : ""
              }
              alt="Movie Poster"
            />
          ) : null}
        </div>
      </div>
    );
  }
}

export default MovieResult;
