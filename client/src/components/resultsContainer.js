import React from "react";
import MovieResult from "./movieResult";
import { Col } from "react-bootstrap";
import FlipMove from "react-flip-move";

function ResultsContainer(props) {
  if (props.path === "/") {
    return (
      <Col id="resultsContainer">
        {props.movieData.map(movie => {
          const movieInfo = movie.volumeInfo;
          return (
            <MovieResult
              title={movieInfo.title}
              url={movieInfo.url}
              image={movieInfo.url}
              path={props.path}
              key={movie.id}
            />
          );
        })}
      </Col>
    );
  } else if (props.path === "/saved") {
    if (props.savedMovies.length > 0) {
      return (
        <FlipMove>
          <div id="resultsContainer">
            {props.savedMovies.map(movie => {
              return (
                <MovieResult
                  title={movie.title}
                  url={movie.url}
                  image={movie.image}
                  id={movie._id}
                  path={props.path}
                  key={movie._id}
                />
              );
            })}
          </div>
        </FlipMove>
      );
    } else {
      return <div id="resultsContainer" />;
    }
  }
}

export default ResultsContainer;
