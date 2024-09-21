import React from 'react';
import { Container, Row, Col, Image, Button } from 'react-bootstrap';
import { ArrowDown } from 'lucide-react';

const AboutSection = () => {
  return (
    <Container fluid className="py-5 min-vh-100 d-flex flex-column" id="about">
      <Row className="align-items-center flex-column-reverse flex-md-row justify-content-center h-100 flex-grow-1 mt-4 mt-md-0">
        <Col xs={12} md={5} lg={4} className="mb-4 mb-md-0 text-center">
          <Image 
            src="/api/placeholder/400/400" 
            roundedCircle 
            fluid 
            alt="Profile Picture" 
            className="shadow-lg mb-4 mb-md-0"
            style={{ maxWidth: '80%', height: 'auto' }}
          />
        </Col>
        <Col xs={12} md={7} lg={6} className="mb-4 mb-md-0">
          <h1 className="fw-bold mb-3 text-center text-md-start">Kanagaraj M</h1>
          <h2 className="fw-bold text-primary mb-4 text-center text-md-start">Full Stack Developer</h2>
          <p className="lead mb-4 text-center text-md-start">
            Passionate about creating elegant, efficient, and user-friendly web applications. 
            With 2 years of experience in both front-end and back-end development, I specialize 
            in bringing ideas to life through code.
          </p>
          <div className="d-flex flex-wrap justify-content-center justify-content-md-start gap-3 mb-4">
            <Button variant="primary" href="/#" download className="px-4 py-2">
              Download Resume
            </Button>
            <Button variant="outline-primary" href="#portfolio" className="px-4 py-2">
              View Portfolio
            </Button>
          </div>
        </Col>
      </Row>
      <Row>
        <Col className="text-center mt-4">
          <Button variant="link" href="#portfolio" className="text-decoration-none">
            <ArrowDown size={32} />
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default AboutSection;