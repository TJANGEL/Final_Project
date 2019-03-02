import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Roulette from "./pages/Roulette";
import Favorites from "./pages/Favorites";
import Login from "./pages/Login";
import About from "./pages/About";
import Nav from "./components/Nav";
import Jumbotron from "./components/Jumbotron";
import Footer from "./components/Footer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Nav />
            <Jumbotron />
            <Switch>
              <Route exact path="/" component={Roulette} />
              <Route path="/login" component={Login} />
              <Route path="/about" component={About} />
              <Route path="/favorites" component={Favorites} />
            </Switch>
            <Footer />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
