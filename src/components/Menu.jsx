import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Image } from "react-bootstrap";
import Logo from "../assets/logo.png";

function Menu() {
  return (
    <Navbar bg="" expand="lg">
      <Container fluid>
        <Navbar.Brand href="/">
          <Image src={Logo} fluid id="logo"  />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
          ></Nav>
          <Nav className="d-flex">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/themes">Themes</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/form1">
              <Button  type="button" className="btn" href="https://docs.google.com/forms/d/e/1FAIpQLSclXf9HwfY8V53I6CVdT4OpMCpUz-wm3dp7mfg72_c4o6OFNA/viewform">
                login
              </Button>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Menu;
