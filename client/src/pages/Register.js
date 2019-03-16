import React, { Component } from "react";
import { Button, Form } from "react-bootstrap";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";

export default class Register extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      name: "",
      password: ""
    };
  };

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
    API.register({
      email: this.state.email,
      name: this.state.name,
      password: this.state.password
    }).then(res => this.props.history.replace("/login"));
  };

  render() {
    return (
      <div>
        <Jumbotron>
          <h1 className="jumbotron-name">REGISTER</h1>
        </Jumbotron>
        <div className="Register">
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
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group controlId="name" bsSize="large">
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="text"
                value={this.state.name}
                onChange={this.handleChange}
                placeholder="Enter username"
              />
            </Form.Group>

            <Form.Group controlId="password" bsSize="large">
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
              // disabled={!this.validateForm()}
            >
              Register
            </Button>
            <br />
            <Form.Group>
              <Form.Text className="text-center">Already Registered?</Form.Text>
              <Button
                variant="success"
                type="submit"
                block
                bsSize="large"
                // disabled={!this.validateForm()}
                href="/login"
              >
                Login
              </Button>
            </Form.Group>
          </Form>
        </div>
      </div>
    );
  }
}
