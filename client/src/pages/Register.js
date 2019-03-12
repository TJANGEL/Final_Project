import React, { Component } from "react";
// import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import { Button, Form } from "react-bootstrap";
import Jumbotron from "../components/Jumbotron";

export default class Register extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    };
  }

  validateForm() {
    return this.state.email.length > 0 && this.state.password.length > 0;
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
  };

  //   render() {
  //     return (
  //       <div className="Register">
  //         <form onSubmit={this.handleSubmit}>
  //           <FormGroup controlId="email" bsSize="large">
  //             <ControlLabel>Email</ControlLabel>
  //             <FormControl
  //               autoFocus
  //               type="email"
  //               value={this.state.email}
  //               onChange={this.handleChange}
  //             />
  //           </FormGroup>
  //           <FormGroup controlId="password" bsSize="large">
  //             <ControlLabel>Password</ControlLabel>
  //             <FormControl
  //               value={this.state.password}
  //               onChange={this.handleChange}
  //               type="password"
  //             />
  //           </FormGroup>
  //           <Button
  //             block
  //             bsSize="large"
  //             disabled={!this.validateForm()}
  //             type="submit"
  //           >
  //             Login
  //           </Button>
  //         </form>
  //       </div>
  //     );
  //   }
  // }

  render() {
    return (
      <div>
        <Jumbotron>
          <h1 className="jumbotron-name">REGISTER</h1>
        </Jumbotron>
        <div className="Register">
          <Form onSubmit={this.handleSubmit}>
            <Form.Group controlId="formBasicEmail" bsSize="large">
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

            <Form.Group controlId="formBasicPassword" bsSize="large">
              <Form.Label>Password</Form.Label>
              <Form.Control
                value={this.state.password}
                onChange={this.handleChange}
                type="password"
                placeholder="Password"
              />
            </Form.Group>
            {/* <Form.Group controlId="formBasicChecbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group> */}
            <Button
              variant="primary"
              type="submit"
              block
              bsSize="large"
              disabled={!this.validateForm()}
            >
              Register
            </Button>
            <br />
            <Form.Group>
              <Form.Text className="text-center">Already Registered?</Form.Text>
              <Button
                variant="primary"
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
