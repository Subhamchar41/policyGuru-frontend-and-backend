import React from 'react';
import { Button, Nav, NavDropdown, Navbar, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


function Header() {
    return (
        
      <div className="App">
        <Navbar bg="light" expand="lg">
  <Navbar.Brand href="#home">Policy Guru <br/> Insurence</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="/">Home</Nav.Link>
      <NavDropdown title="Insurence" id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Car Insurence</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Two Wheeler Insurence</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Commercial Vechile Insurence</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.4">Taxi Insurence</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.4">Third Party Insurence</NavDropdown.Item>
      </NavDropdown>
      <Nav.Link href="/footer">Product Guide</Nav.Link>
      <Nav.Link href="/homepage">Roadmap</Nav.Link>
      <Nav.Link href="/header">Blog</Nav.Link>
      <Nav.Link href="#link">About</Nav.Link>
      <Nav.Link href="#link">Contact</Nav.Link>
    </Nav>
    <Form inline>
    <Nav.Link href ="/login">Log In</Nav.Link>
    <Nav.Link href="/register">Register</Nav.Link>
      <Button variant="outline-success">Get a quote</Button>
    </Form>
  </Navbar.Collapse>
</Navbar>
      </div>
     
    );
  }
  
  export default Header;