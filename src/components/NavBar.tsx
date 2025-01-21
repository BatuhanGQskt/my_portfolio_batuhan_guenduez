import { blue } from '@mui/material/colors';
import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';

import PersonalLogo from '../assests/BG_logo.svg';

function NavBar() {
  return (
    <Navbar expand="lg" sticky='top' className="bg-body-tertiary">
      <Container>
        <img src={PersonalLogo} alt="personal-logo" style={{ width:'48px', height: '48px' }} />
        <Navbar.Brand style={{color:'white'}} href="#">My Portfolio</Navbar.Brand>
        <Navbar.Toggle id="toggle-navbar" aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" >
          <Nav className="ms-auto" >
            <Nav.Link href="#info_section">Info</Nav.Link>
            <Nav.Link href="#Education_Section">Education</Nav.Link>
            <Nav.Link href="#Experience_Section">Experience</Nav.Link>
            <Nav.Link href="#Project_Section">Projects</Nav.Link>
            <Nav.Link href="#Contact_Section">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
