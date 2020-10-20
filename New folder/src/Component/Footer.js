import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function Footer() {
    return (
      <div className="App">
       <Navbar bg="light" expand="lg">
  <Navbar.Brand href="#home">LOgo </Navbar.Brand> 
  <p> Policy Guru <br/> 
  At Poncho, we're taking the road less travelled by <br/> 
  giving insurance a fresh make-over. <br/>
  Backed by Australia's largest general insurance Group, <br/> 
  we make insurance work so well for people, <br/> 
  that they'd want to tell a mate about it.</p>
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
        <li>
     <h3>Explore</h3>
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#link">About</Nav.Link>
      <Nav.Link href="#home">Contact</Nav.Link>
      <Nav.Link href="#link">Insurence</Nav.Link>
      <Nav.Link href="#home">Project Guide</Nav.Link>
      </li>
      <p>DISCLAIMER <br/>
      Insurance Australia Limited (IAL) <br/>
      ABN 11 000 016 722 AFSL 227 681 is part of <br/>
      Insurance Australia Group (IAG). Insurance <br/>
      is issued by IAL, trading as Poncho Insurance. <br/>
      Any advice provided is of a general nature only <br/>
      and does not take into consideration your objectives, <br/>
      financial situation or needs. Before using this advice <br/>
       to decide whether to purchase the insurance policy, <br/>
       you should consider your personal circumstances and <br/>
       the applicable Product Disclosure Statement available <br/>
       on our website. </p>
      
    </Nav>
  </Navbar.Collapse>
</Navbar>
	
      </div>
    );
  }
  
  export default Footer;