import React from "react";
import { Link } from "react-router-dom";
import { Container, Navbar } from "react-bootstrap";

const Header = () => {
  return (
    <>
      <Navbar bg="info" expand="lg">
        <Container>
          <Link to="/" style={{ color: "white" }}>
            Home
          </Link>
          <Link to="/addPost" style={{ color: "white" }}>
            Add Post
          </Link>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
