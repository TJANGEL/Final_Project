import React, { Component } from "react";
// import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import { Button, Form } from "react-bootstrap";
import Jumbotron from "../components/Jumbotron";

export default class Login extends Component {
  // constructor(props) {
  //   super(props);

  //   this.state = {
  //     email: "",
  //     password: ""
  //   };
  // }

  // validateForm() {
  //   return this.state.email.length > 0 && this.state.password.length > 0;
  // }

  // handleChange = event => {
  //   this.setState({
  //     [event.target.id]: event.target.value
  //   });
  // };

  handleSubmit = event => {
    event.preventDefault();
  };

  render() {
    return (
      <div>
        <Jumbotron>
          <h1 className="jumbotron-name">LOGIN</h1>
        </Jumbotron>
        <div className="Login">
          {/* <Form onSubmit={this.handleSubmit}> */}
          <Form>
            <Form.Group controlId="formBasicEmail" bsSize="large">
              <Form.Label>Email</Form.Label>
              <Form.Control
                autoFocus
                type="email"
                // value={this.state.email}
                // onChange={this.handleChange}
                placeholder="Enter email"
              />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                // value={this.state.password}
                // onChange={this.handleChange}
                type="password"
                placeholder="Enter Password"
              />
            </Form.Group>
            <Button
              variant="primary"
              type="submit"
              block
              bsSize="large"
              // onClick={this.handleSubmit}
              href="/"
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
