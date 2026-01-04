import { Link } from "react-router-dom";
import { useState } from "react";
import "/src/AppNav.css";
import Container from "react-bootstrap/Container";
import Badge from "react-bootstrap/Badge";
import Nav from "react-bootstrap/Nav";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "react-bootstrap/Navbar";
import { useSelector } from "react-redux";
import NavDropdown from "react-bootstrap/NavDropdown";

function NavBar() {
  const useSt = useSelector((state) => state.Cart);
  const [count, setCount] = useState(0);
  function cow() {
    setCount((count) => count + 1);
  }
  return (
    <Navbar fixed="top" expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/">ReactApp</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link className="Link" to="/">
              Home
            </Link>
            <Link className="Link" to="/cart">
              Cart <Badge bg="secondary">{useSt.length}</Badge>
            </Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
export default NavBar;
