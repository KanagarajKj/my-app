import { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const sections = ['home', 'about', 'skills', 'experience', 'education', 'contact'];

const navLabels = {
  home: 'Home',
  about: 'About',
  skills: 'Skills',
  experience: 'Experience',
  education: 'Education',
  // contact: 'Contact',
};

function NavigationBar() {
  const [expanded, setExpanded] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Determine active section based on scroll position
      const offset = 120; // navbar height + buffer
      let current = 'home';

      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const top = el.getBoundingClientRect().top;
          if (top <= offset) {
            current = id;
          }
        }
      }

      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // run once on mount
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, sectionId) => {
    e.preventDefault();
    setExpanded(false);
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Navbar
      expand="lg"
      expanded={expanded}
      fixed="top"
      className={`custom-navbar ${scrolled ? 'navbar-scrolled' : ''}`}
    >
      <Container>
        <Navbar.Brand
          href="#home"
          className="nav-title"
          onClick={(e) => handleNavClick(e, 'home')}
        >
          KANAGARAJ
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          className="custom-toggler"
          onClick={() => setExpanded(expanded ? false : 'expanded')}
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto nav-links">
            {sections.map((id) => (
              <Nav.Link
                key={id}
                href={`#${id}`}
                className={`nav-link-item ${activeSection === id ? 'active-link' : ''}`}
                onClick={(e) => handleNavClick(e, id)}
              >
                {navLabels[id]}
              </Nav.Link>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
