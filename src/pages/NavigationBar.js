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
      bg={scrolled ? 'light' : 'light'}
      variant={scrolled ? 'dark' : 'dark'}
      fixed="top"
      className={`transition-all duration-300 ${scrolled ? 'shadow-sm' : ''}`}
    >
      <Container>
        <Navbar.Brand href="#home" className="font-weight-bold text-reset nav-title">
          KANAGARAJ
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav text-dark"
          onClick={() => setExpanded(expanded ? false : 'expanded')}
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link className='text-reset' href="#home" onClick={() => setExpanded(false)}>
              Home
            </Nav.Link>
            <Nav.Link className='text-reset' href="#about" onClick={() => setExpanded(false)}>
              About
            </Nav.Link>
            <Nav.Link className='text-reset' href="#skills" onClick={() => setExpanded(false)}>
              Skills
            </Nav.Link>
            <Nav.Link className='text-reset' href="#experience" onClick={() => setExpanded(false)}>
              Services
            </Nav.Link>
            <Nav.Link className='text-reset' href="#education" onClick={() => setExpanded(false)}>
              Education
            </Nav.Link>
            <Nav.Link className='text-reset' href="#contact" onClick={() => setExpanded(false)}>
              contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
