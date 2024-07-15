import React from 'react';
import '../App.css';
import { Container, Navbar, Nav } from 'react-bootstrap';
import medkitImage from '../assets/icon.svg'; // Adjust the path accordingly

const NavbarComponent = () => {
  return (
    <Navbar style={{background: "#162032"}} variant="dark" expand="lg" sticky="top">
      <Container>
        <Navbar.Brand href="#home">
          <img
            src={medkitImage}
            width="30"
            height="30"
            className="d-inline-block align-top svg-white"
            alt="MedKit logo"
          />{' '}
          <span style={{color: "#05a66b"}}>MED</span><span style={{color: "#f5eddf"}}>KIT</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;