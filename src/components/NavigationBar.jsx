import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, NavLink } from "react-router-dom";

export default function NavigationBar() {
  const linkStyle = {
    textDecoration: "none",
    fontSize: "20px",
    color: "white",
    borderRight: "1px solid white",
    padding: "15px",
    marginLeft: "100px",
  };
  return (
    <Navbar bg="dark" data-bs-theme="dark">
      <Container>
        <Nav>
          <Nav.Link>
            <Link to="/" style={{ ...linkStyle, marginLeft: "100px" }}>
              {" "}
              Home{" "}
            </Link>
          </Nav.Link>
          <Nav.Link>
            <Link to="/about" style={linkStyle}>
              {" "}
              About{" "}
            </Link>
          </Nav.Link>
          <Nav.Link>
            <NavLink
              to="/products"
              style={({ isActive }) => {
                return {
                  ...linkStyle,
                  fontWeight: isActive ? "bold" : "",
                  FontSize: isActive ? "25px" : "20px",
                };
              }}
            >
              Products
            </NavLink>
          </Nav.Link>
          <Nav.Link>
            <Link to="/customers" style={linkStyle}>
              Customers
            </Link>
          </Nav.Link>
          <Nav.Link>
            <Link
              to="/signUp"
              style={{
                ...linkStyle,
                borderRight: "none",
                border: "3px solid grey",
                borderRadius: "10px",
                marginLeft: "190px",
                padding: "8px",
              }}
            >
              SignUp/In
            </Link>
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}
