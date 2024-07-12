import React from 'react';
import { Container, Navbar, Image, Button, Row, Col, Card } from 'react-bootstrap';
import './App.css';

import medkitImage from './assets/icon.svg';
import StockImageCarousel from './components/carousel';
import NavbarComponent from './components/navbar';
import DosagesComponent from './components/medicine_dosages';
import EssentialFeatures from './components/features';
import ContactUs from './components/contact-us';


function Home() {

  return (
    <div className="App" style={{background: "#f5eddf", fontFamily: "Open Sans"}}>

      <NavbarComponent />


        <Container fluid>
          <Row className="align-items-center">
            <Col xs={0} md={3}> </Col>
            <Col xs={12} md={6}>
              <StockImageCarousel />
            </Col>
            <Col xs={0} md={3}>
            </Col>
          </Row>
        </Container>

        <div className='d-flex justify-content-center align-items-center mt-5'>

          <img
            src={medkitImage}
            className="d-inline-block align-top svg-text-color"
            alt="MedKit logo"
            style={{ height: '5rem' }}
          />
          <b><h1 style={{color: "#05a66b", fontSize: '1.5rem'}}>MED</h1></b><b><h1 style={{color: "#162032", fontSize: '1.5rem'}}>KIT</h1></b>

        </div>

        <div className="d-flex justify-content-center mt-4">
          <div className="text-center">
            <span>YOUR HEALTH, YOUR JOURNEY</span>
            <br />
            <span>TRAVEL WITH CONFIDENCE</span>
          </div>
        </div>

      <EssentialFeatures />

      <DosagesComponent />

      <ContactUs />

    </div>
  );
}

export default Home;
