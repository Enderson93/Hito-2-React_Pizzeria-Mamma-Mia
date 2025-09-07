import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";

export default function NavbarComponent() {
  const total = 25000;
  const token = false;

  return (
    <Navbar expand="lg" className="bg-body-tertiary dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="#home">¡Pizzeria Mamma Mia!</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto gap-2">
            <Button className="home" variant="outline-light">
              🍕 Home
            </Button>
            {token ? (
              <>
                <Button className="profile" variant="outline-light">
                  🔓 Profile
                </Button>
                <Button className="logout" variant="outline-light">
                  🔒 Logout
                </Button>
              </>
            ) : (
              <>
                <Button className="loginButton" variant="outline-light">
                  🔐 Login
                </Button>
                <Button className="registerButton" variant="outline-light">
                  🔐 Register
                </Button>
              </>
            )}
          </Nav>
          <Nav className="me-1">
            <Button variant="outline-light">
              🛒 Total: {total.toLocaleString("es-CL")}
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
