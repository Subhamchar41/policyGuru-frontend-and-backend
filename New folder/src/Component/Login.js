import React from 'react';
import './LR.css';
import Header from "./Header";
import Footer from "./Footer";
import { Button, Card, Form } from 'react-bootstrap';
import { BrowserRouter as Router, Link } from "react-router-dom";


function Login() {
    return (
        <div >
        <Header/>
        <div class="row">
    <div class="col-sm-3 col-md-6 col-lg-8">
     <img style={{ width: 900}} src="https://documentation.solarwinds.com/en/Success_Center/loggly/Content/Resources/Images/docs/Screen-Shot-2017-09-28-at-4.13.35-PM.png"></img>
    </div>
    <div class="col-sm-9 col-md-6 col-lg-4">
    <div className="login" >
        <Card style={{ width: '25rem' }} className="life">
            <h1>Log In</h1>
  <Card.Body>
  <Form>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" required />
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" required />
  </Form.Group>
  <Button variant="primary" type="submit">
    Submit
  </Button>
  <Button variant="primary" type="reset">
    Reset
  </Button>
   <br/>
  <Link to = "">Forgot PassWord</Link>
</Form>
      </Card.Body>
     </Card>
     </div>
    </div>
  </div>
        
        <Footer/>
        </div>    
    );
  }
  
  export default Login;