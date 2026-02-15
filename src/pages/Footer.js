import { Container, Row, Col } from 'react-bootstrap';
import { Github, Linkedin, Instagram, Mail, MapPin } from 'lucide-react';

const quickLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Education', href: '#education' },
];

const socials = [
  { icon: <Github size={18} />, href: 'https://github.com/KanagarajKj', label: 'GitHub' },
  { icon: <Linkedin size={18} />, href: 'https://www.linkedin.com/in/kanagaraj-kj-m/', label: 'LinkedIn' },
  // { icon: <Instagram size={18} />, href: '#', label: 'Instagram' },
  { icon: <Mail size={18} />, href: 'mailto:kanagarajkj98@gmail.com', label: 'Email' },
];

const handleNavClick = (e, href) => {
  e.preventDefault();
  const el = document.querySelector(href);
  if (el) el.scrollIntoView({ behavior: 'smooth' });
};

const Footer = () => {
  return (
    <footer className="site-footer">
      <Container>
        <Row className="gy-4 justify-content-center">
          <Col lg={4} md={4} className="footer-col">
            <h4 className="footer-brand">KANAGARAJ</h4>
            <p className="footer-role">Full Stack Developer</p>
            <p className="footer-location">
              <MapPin size={15} className="me-1" />
              India
            </p>
          </Col>

          <Col lg={4} md={4} className="footer-col">
            <h6 className="footer-heading">QUICK LINKS</h6>
            <ul className="footer-links">
              {quickLinks.map((link, i) => (
                <li key={i}>
                  <a href={link.href} onClick={(e) => handleNavClick(e, link.href)}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </Col>

          <Col lg={4} md={4} className="footer-col">
            <h6 className="footer-heading">CONNECT</h6>
            <div className="footer-socials">
              {socials.map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-social-icon"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
            <p className="footer-email">kanagarajkj98@gmail.com</p>
          </Col>
        </Row>

        <hr className="footer-divider" />

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Kanagaraj. All rights reserved.</p>
          <p>Made with React & Bootstrap</p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
