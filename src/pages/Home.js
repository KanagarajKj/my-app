import React from 'react';
import { Container, Row, Col, Image, Button } from 'react-bootstrap';
import { GithubIcon, Linkedin, Mouse, Hand } from 'lucide-react';

const HomeSection = () => {
  const scrollToPortfolio = () => {
    const portfolioSection = document.getElementById('about');
    if (portfolioSection) {
      portfolioSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Container fluid className="py-5 min-vh-100 d-flex flex-column" id="home">
      <Row className="align-items-center flex-column-reverse flex-md-row justify-content-center h-100 flex-grow-1 mt-4 mt-md-0">
        <Col xs={12} md={3} lg={2} className="mb-4 mb-md-0 text-center">
          <div className="d-flex flex-row flex-md-column justify-content-center gap-4">
            <a
              href="https://github.com/KanagarajKj"
              target="_blank"
              rel="noopener noreferrer"
              className="text-dark"
            >
              <GithubIcon size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/kanagaraj-kj-m/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary"
            >
              <Linkedin size={24} />
            </a>
            {/* <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="text-success"
            >
              <MessageCircle size={24} />
            </a> */}
          </div>
        </Col>

        <Col
          xs={12}
          md={5}
          lg={4}
          className="mb-4 mb-md-0 text-center text-md-start mt-md-4 mt-0 mt-lg-0"
        >
          <div className="image-container mx-auto mx-md-0">
            <Image
              src="/CartoonBoy.jpeg"
              alt="Profile Picture"
              className="profile-image"
            />
          </div>
        </Col>

        <Col xs={12} md={7} lg={6} className="mb-4 mb-md-0">
          <h1 className="fw-bold mb-3 text-center text-md-start d-flex align-items-center justify-content-center justify-content-md-start">
            Kanagaraj M{' '}
            <Hand className="ms-2 text-primary wave-animation" size={32} />
          </h1>
          <p className="fw-bold text-primary mb-4 text-center text-md-start position-relative">
            <span
              className="me-2 position-absolute start-0 top-50 translate-middle-y d-none d-md-inline"
              style={{
                width: '30px',
                height: '2px',
                background: 'currentColor',
              }}
            ></span>
            <span className="ms-0 ms-md-5">Full Stack Developer</span>
          </p>
          <p className="lead mb-4 text-center text-md-start">
            I'm passionate about creating elegant, efficient, and user-friendly
            web applications, and I'm highly dedicated to my work.
          </p>
          <div className="d-flex flex-wrap justify-content-center justify-content-md-start gap-3 mb-4">
            <Button variant="outline-primary" href="#" className="px-4 py-2">
              Say Hello
            </Button>
          </div>
        </Col>
      </Row>
      <Row className="mx-auto">
        <Col className="text-center mt-4">
          <Button
            variant="link"
            onClick={() => scrollToPortfolio()}
            className="text-decoration-none d-flex flex-column align-items-center"
          >
            <Mouse size={24} className="mb-2" /> Scroll Down
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default HomeSection;