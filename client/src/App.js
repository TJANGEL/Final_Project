import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Roulette from "./pages/Roulette";
import Favorites from "./pages/Favorites";
import Login from "./pages/Login";
import Register from "./pages/Register";
import About from "./pages/About";
import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";
// import { inherits } from "util";
import API from "./utils/API";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mediaList: [{}]
    };
  }

  loadAllMovies() {
    let movieArray;
    API.loadAllMovies().then(resp => {
      movieArray = resp.data
      console.log("size of movie array before setting state:" + movieArray);
      this.setState({ mediaList: movieArray });
    })
  }

  async componentWillMount() {
    try {
      API.getMovies().then(resp => {
        // console.log("Size of Movies DB:" + resp.data.length)
        if (resp.data.length === 0) {
          this.loadAllMovies();
        }
        else {
          API.loadLatestMovies().then(resp => {
            this.loadAllMovies();
          })
        }
      })
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Navbar fixed="top" />
            <Switch>
              <Route exact path="/" component={Roulette} />
              <Route path="/login" component={Login} />
              <Route path="/register" component={Register} />
              <Route path="/about" component={About} />
              <Route path="/favorites" component={Favorites} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
