import React, { Component } from "react";
// import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import { Button, Form } from "react-bootstrap";
import Jumbotron from "../components/Jumbotron";
import AuthService from "../components/AuthService";
import API from "../utils/API";

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    };

    this.Auth = new AuthService();
  }

  // validateForm() {
  //   return this.state.email.length > 0 && this.state.password.length > 0;
  // }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();

    // Get a token from api server using the api
    API.login({
      email: this.state.email,
      password: this.state.password
    })
      .then(res => {
        this.Auth.setToken(res.data.token); // Setting the token in localStorage
        this.props.history.replace("/");
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div>
        <Jumbotron>
          <h1 className="jumbotron-name">LOGIN</h1>
        </Jumbotron>
        <div className="Login">
          {/* <Form onSubmit={this.handleSubmit}> */}
          <Form onSubmit={this.handleSubmit}>
            <Form.Group controlId="email" bsSize="large">
              <Form.Label>Email</Form.Label>
              <Form.Control
                autoFocus
                type="email"
                value={this.state.email}
                onChange={this.handleChange}
                placeholder="Enter email"
              />
            </Form.Group>

            <Form.Group controlId="password">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                value={this.state.password}
                onChange={this.handleChange}
                placeholder="Enter password"
              />
            </Form.Group>
            <Button
              variant="primary"
              type="submit"
              block
              bsSize="large"
              // onClick={this.handleSubmit}
              // disabled={!this.validateForm()}
            >
              Login
            </Button>
          </Form>
        </div>
      </div>
    );
  }
}
