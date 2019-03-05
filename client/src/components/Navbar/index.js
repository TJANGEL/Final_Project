import React from "react";
// import { Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";

// react-bootstrap navbar
function Navi() {
  //   // Depending on the current path, this component sets the "active" class on the appropriate navigation link item
  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="/">IMPATIENT NETFLIXING</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href="/about">About</Nav.Link>
        <Nav.Link href="/register">Register</Nav.Link>
        <Nav.Link href="/login">Login</Nav.Link>
        <Nav.Link href="/roulette">Roulette</Nav.Link>
        <Nav.Link href="/favorites">Favorites</Nav.Link>
      </Nav>
    </Navbar>
  );
}

export default Navi;
