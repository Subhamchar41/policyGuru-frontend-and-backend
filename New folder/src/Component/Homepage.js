import React from 'react';
import { Button, Card, Nav, Navbar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import './animate.css';




function Homepage() {
    return (
      <div className="App">

		  < BrowserRouter>
          <Header/>
		<div class="hero hero-slider">
				<ul class="slides">
					<li data-bg-image="slide-1">
						<div class="container">
							<div class="slide-content">
								<h2 class="slide-title">Get your <strong>Life Insurance</strong></h2>
								<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus quos cumque odio soluta harum error sequi laudantium, est nam perspiciatis eveniet maxime, esse possimus architecto sunt natus reprehenderit debitis fugit.</p>
								<a href="#" class="button">Get a quote</a>
							</div>
						</div>
					</li>
					<li data-bg-image="dummy/slide-2.jpg">
						<div class="container">
							<div class="slide-content">
								<h2 class="slide-title">Get your <strong>Life Insurance</strong></h2>
								<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus quos cumque odio soluta harum error sequi laudantium, est nam perspiciatis eveniet maxime, esse possimus architecto sunt natus reprehenderit debitis fugit.</p>
								<a href="#" class="button">Get a quote</a>
							</div>
						</div>
					</li>
					<li data-bg-image="dummy/slide-3.jpg">
						<div class="container">
							<div class="slide-content">
								<h2 class="slide-title">Get your <strong>Life Insurance</strong></h2>
								<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus quos cumque odio soluta harum error sequi laudantium, est nam perspiciatis eveniet maxime, esse possimus architecto sunt natus reprehenderit debitis fugit.</p>
								<a href="#" class="button">Get a quote</a>
							</div>
						</div>
					</li>
				</ul>
			</div> 
<div className="char4">
<div className="container">
<h2 style={{ color: "black" }}>India's largest online insurance aggregator</h2>
	<div class="card-columns char4">
<Card style={{ width: '10rem' }}>
  <Card.Body>
    <Card.Title>Title</Card.Title>
	<Card.Img variant="top" src="holder.js/100px180" />
  </Card.Body>
  <p>Car Insurence</p>
</Card>

<Card style={{ width: '10rem' }}>
  <Card.Body>
    <Card.Title> Title</Card.Title>
	<Card.Img variant="top" src="holder.js/100px180" />
  </Card.Body>
  <p>Texi Insurence</p>
</Card>

<Card style={{ width: '10rem' }}>
  <Card.Body>
    <Card.Title>Title</Card.Title>
	<Card.Img variant="top" src="holder.js/100px180" />
  </Card.Body>
  <p>Bike Insurence</p>
</Card>
</div>
</div>
</div>


<div className="life">	
<div class="card-columns">     
<p>11 Million+ people trust us<br/>
as their insurance partner</p>
<p>11 Million+ people trust us<br/>
as their insurance partner</p>
<p>11 Million+ people trust us<br/>
as their insurance partner</p>
</div>
</div>


<div className="lol">
	<div>
		<h2 class="text-justify" style={{ color: "black" }}><b>Policybazaar #AapKiSideHai</b></h2>
		<h3 class="text-justify">When you buy insurance from us, you get more than just financial safety. You also get: <br/> 
		our promise of simplifying complex insurance terms and conditions, quick <br/>
		stress-free claims, instant quotes from top insurers and being present for you <br/> 
		in the toughest of times.</h3>
	</div>
</div>



			<Navbar bg="light" expand="lg">
  <Navbar.Collapse id="basic-navbar-nav" >
    <Nav >
	<Card style={{ width: '15rem' }}>
  <Card.Img variant="top" src="holder.js/100px180" />
  <Card.Body>
    <Card.Title>Lowest Price</Card.Title>
    <Card.Text>
	Guaranteed
    </Card.Text>
  </Card.Body>
</Card>

<Card style={{ width: '15rem' }}>
  <Card.Img variant="top" src="holder.js/100px180" />
  <Card.Body>
    <Card.Title>Unbiased Advice</Card.Title>
    <Card.Text>
	Keeping customers first
    </Card.Text>
  </Card.Body>
</Card>

<Card style={{ width: '15rem' }} >
  <Card.Img variant="top" src="holder.js/100px180" />
  <Card.Body>
    <Card.Title>100% Reliable</Card.Title>
    <Card.Text>
	Regulated by IRDAI
    </Card.Text>
  </Card.Body>
</Card>
<Card style={{ width: '15rem' }} >
  <Card.Img variant="top" src="holder.js/100px180" />
  <Card.Body>
    <Card.Title>Claims Support</Card.Title>
    <Card.Text>
	Made stress-free
    </Card.Text>
  </Card.Body>
</Card>
<Card style={{ width: '15rem' }} >
  <Card.Img variant="top" src="holder.js/100px180" />
  <Card.Body>
    <Card.Title>Happy to Help</Card.Title>
    <Card.Text>
	Every day of the week
    </Card.Text>
  </Card.Body>
</Card>
    </Nav>
  </Navbar.Collapse>
</Navbar>




<div className="lol">
<img class="rounded float-right" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSfgFREcDKTaZQXEn9EdqjoxEdUsz9VDIo7UA&usqp=CAU" alt=""></img>
	<div>
		<h2 class="text-justify" style={{ color: "black" }}>Get the Policybazaar app</h2>
		<h3 class="text-justify" style={{ color: "black" }}>Get control of all your insurance needs anywhere, anytime</h3>
		<ul>
			<ol class="text-justify">Compare different insurance policies</ol>
			<ol class="text-justify">Buy, store and share all your policies online</ol>
			<ol class="text-justify">Track your policy status on the go</ol>
			<ol class="text-justify">Download your policy with a single tap</ol>
		</ul>
	</div>
</div>

<div className="lol">
	<div>
		<h2 class="text-justify" style={{ color: "black" }}><b>What Our Customers</b><br/>
         Are Saying</h2>
	</div>
</div>

<div className="lol2">
	<div className="container">
		<div className="card-columns">
<Card style={{ width: '20rem' }}>
  <Card.Body>
    <Card.Title>Name</Card.Title>
	<p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </Card.Body>
</Card>

<Card style={{ width: '20rem' }}>
  <Card.Body>
    <Card.Title>Name</Card.Title>
	<p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </Card.Body>
</Card>

<Card style={{ width: '20rem' }}>
  <Card.Body>
    <Card.Title>Name</Card.Title>
	<p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </Card.Body>
</Card>
</div>
	</div>
</div>


			<main class="main-content">
				<div class="fullwidth-block greet-section">
					<div class="container">
						

						<div class="row">
							<div class="col-md-3">
								<div class="feature">
									<i class="icon-phone-24"></i>
									<h3 class="feature-title">24 hours Service</h3>
									<p>Lorem ipsum dolor amet consectetur adipiscing elit do eiusmod tempor incididunt labore dolore magna aliqua.</p>
								</div>
							</div>
							<div class="col-md-3">
								<div class="feature">
									<i class="icon-hotel"></i>
									<h3 class="feature-title">Hospitality</h3>
									<p>Lorem ipsum dolor amet consectetur adipiscing elit do eiusmod tempor incididunt labore dolore magna aliqua.</p>
								</div>
							</div>
							<div class="col-md-3">
								<div class="feature">
									<i class="icon-luggage"></i>
									<h3 class="feature-title">Praesent pellentesque </h3>
									<p>Lorem ipsum dolor amet consectetur adipiscing elit do eiusmod tempor incididunt labore dolore magna aliqua.</p>
								</div>
							</div>
							<div class="col-md-3">
								<div class="feature">
									<i class="icon-credit-card-hand"></i>
									<h3 class="feature-title">Consectetur interdum</h3>
									<p>Lorem ipsum dolor amet consectetur adipiscing elit do eiusmod tempor incididunt labore dolore magna aliqua.</p>
								</div>
							</div>
						</div> 

						
					</div> 
				</div> 

			

				<div class="fullwidth-block">
					<div class="container">
						<h2 class="section-title" style={{ color: "black" }}>Our partners</h2>

						<div class="partners">
							<a href="#"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSOyVa68-gAYxYJGlz5zhlcUVIBpRW2ENi9jw&usqp=CAU" alt=""></img></a>
							<a href="#"><img src="https://risepeople.com/wp-content/uploads/small-business-quotes-1.jpg" alt=""></img></a>
							<a href="#"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS0dAQ7ZEHMbLsZAme373Tv2LMvByVSfGsctw&usqp=CAU" alt=""></img></a>
							<a href="#"><img src="https://3.bp.blogspot.com/-jSvjl2IO7DQ/WvrFtD93VVI/AAAAAAAAAxE/ytIg-rCz7XIAbEmgyHKv9ZFdolWTEwgTgCLcBGAs/s1600/Big-Small.png" alt=""></img></a>
							<a href="#"><img src="https://comps.canstockphoto.com/hand-with-small-tiny-umbrella-stock-photograph_csp84412599.jpg" alt=""></img></a>
						</div> 
					</div> 
				</div> 

			<div className="lol">
				<h2 class="text-justify" style={{ color: "black" }}>Investers</h2>
				<img src="data:image/png;base64,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"></img>
			</div>
			</main>
			
			<div className="lol">
<img class="rounded float-right" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSfgFREcDKTaZQXEn9EdqjoxEdUsz9VDIo7UA&usqp=CAU" alt=""></img>
	<div>
		<h2 class="text-justify" style={{ color: "black" }}>Have a question? <br/>
               Here to help.</h2>
		<p class="text-justify">Our friendly customer support team is your <br/>
			extended family. Speak your heart out. <br/>
			They listen with undivided attention to resolve your <br/>
			concerns. Give us a call, request a callback or <br/>
			drop us an email, we’re here to help.</p>	   
	</div>
</div>

        <div class="border">
		  <h2 class="text-justify">General Enquries</h2>
		  <h2 class="text-justify">char@gmail.com</h2>	
		  <h2 class="text-justify">Customer Care no</h2>
		  <h2 class="text-justify">04356772653</h2>
		</div>	

	<Footer/>
	</BrowserRouter>
      </div>
    );
  }
  
  export default Homepage;