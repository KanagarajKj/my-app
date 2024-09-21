import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavigationBar() {
  const [expanded, setExpanded] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Navbar
      expand="lg"
      expanded={expanded}
      bg={scrolled ? 'light' : 'primary'}
      variant={scrolled ? 'light' : 'dark'}
      fixed="top"
      className={`transition-all duration-300 ${scrolled ? 'shadow-sm' : ''}`}
    >
      <Container>
        <Navbar.Brand href="#home" className="font-weight-bold">
          Your Brand
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          onClick={() => setExpanded(expanded ? false : 'expanded')}
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home" onClick={() => setExpanded(false)}>
              Home
            </Nav.Link>
            <Nav.Link href="#features" onClick={() => setExpanded(false)}>
              Features
            </Nav.Link>
            <Nav.Link href="#pricing" onClick={() => setExpanded(false)}>
              Pricing
            </Nav.Link>
            <Nav.Link href="#contact" onClick={() => setExpanded(false)}>
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
