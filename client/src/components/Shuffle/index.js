import React, { Component, PropTypes } from "react";
import moment from "moment";
import shuffle from "lodash/shuffle";
import throttle from "lodash/throttle";
import { ListGroup, Button, Image } from "react-bootstrap";

import movies from "../../data/movies";
// import ResultsContainer from "../ResultsContainer";

import FlipMove from "react-flip-move";
import Toggle from "../Toggle";
import "./style.css";

class ListItem extends Component {
  render() {
    const listClass = `list-item card ${this.props.view}`;
    const style = { zIndex: 100 - this.props.index };

    return (
      <li id={this.props.id} className={listClass} style={style}>
        <h3>{this.props.name}</h3>
        <Image className="poster" src={this.props.img} />
        <h5>{moment(this.props.timestamp).format("MMM Do, YYYY")}</h5>
        <Button variant="outline-secondary" className="link" href="#">
          Details
        </Button>
        <Button
          className="remove-btn"
          variant="outline-danger"
          onClick={this.props.clickHandler}
        >
          &times;
        </Button>
      </li>
    );
  }
}

class Shuffle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      removedMovies: [],
      view: "list",
      order: "asc",
      sortingMethod: "chronological",
      enterLeaveAnimation: "accordianVertical",
      movies
    };

    this.toggleList = this.toggleList.bind(this);
    this.toggleGrid = this.toggleGrid.bind(this);
    this.toggleSort = this.toggleSort.bind(this);
    this.sortRotate = this.sortRotate.bind(this);
    this.sortShuffle = this.sortShuffle.bind(this);
  }

  toggleList() {
    this.setState({
      view: "list",
      enterLeaveAnimation: "accordianVertical"
    });
  }

  toggleGrid() {
    this.setState({
      view: "grid",
      enterLeaveAnimation: "accordianHorizontal"
    });
  }

  toggleSort() {
    const sortAsc = (a, b) => a.timestamp - b.timestamp;
    const sortDesc = (a, b) => b.timestamp - a.timestamp;

    this.setState({
      order: this.state.order === "asc" ? "desc" : "asc",
      sortingMethod: "chronological",
      movies: this.state.movies.sort(
        this.state.order === "asc" ? sortDesc : sortAsc
      )
    });
  }

  sortShuffle() {
    this.setState({
      sortingMethod: "shuffle",
      movies: shuffle(this.state.movies)
    });
  }

  moveArticle(source, dest, id) {
    const sourceMovies = this.state[source].slice();
    let destMovies = this.state[dest].slice();

    if (!sourceMovies.length) return;

    // Find the index of the movie clicked.
    // If no ID is provided, the index is 0
    const i = id ? sourceMovies.findIndex(movie => movie.id === id) : 0;

    // If the movie is already removed, do nothing.
    if (i === -1) return;

    destMovies = [].concat(sourceMovies.splice(i, 1), destMovies);

    this.setState({
      [source]: sourceMovies,
      [dest]: destMovies
    });
  }

  sortRotate() {
    const movies = this.state.movies.slice();
    movies.unshift(movies.pop());

    this.setState({
      sortingMethod: "rotate",
      movies
    });
  }

  renderMovies() {
    return this.state.movies.map((movie, i) => {
      return (
        <ListItem
          key={movie.id}
          view={this.state.view}
          index={i}
          clickHandler={throttle(
            () => this.moveArticle("movies", "removedMovies", movie.id),
            800
          )}
          {...movie}
        />
      );
    });
  }

  render() {
    return (
      <div id="shuffle" className={this.state.view}>
        <header>
          <div className="abs-right m-2">
            <Toggle
              clickHandler={this.toggleSort}
              text={this.state.order === "asc" ? "Ascending" : "Descending"}
              icon={this.state.order === "asc" ? "angle-up" : "angle-down"}
              active={this.state.sortingMethod === "chronological"}
            />
            <Toggle
              clickHandler={this.sortShuffle}
              text="Shuffle"
              icon="random"
              active={this.state.sortingMethod === "shuffle"}
            />
            <Toggle
              clickHandler={this.sortRotate}
              text="Rotate"
              icon="fas fa-sync-alt"
              active={this.state.sortingMethod === "rotate"}
            />
          </div>
        </header>
        <div>
          <FlipMove
            staggerDurationBy="30"
            duration={500}
            enterAnimation={this.state.enterLeaveAnimation}
            leaveAnimation={this.state.enterLeaveAnimation}
            typeName="ul"
          >
            {this.renderMovies()}
            <footer key="foot">
              <div className="abs-right">
                {/* <Toggle
                  clickHandler={() =>
                    this.moveArticle("articles", "removedArticles")
                  }
                  text="Remove Item"
                  icon="trash"
                  active={this.state.articles.length > 0}
                /> */}
              </div>
            </footer>
          </FlipMove>
        </div>
      </div>
    );
  }
}

export default Shuffle;
