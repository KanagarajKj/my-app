import React from 'react';
import { Container, Row, Col, Image, Button, Card } from 'react-bootstrap';
import { CloudDownload, Briefcase } from 'lucide-react';

const AboutSection = () => {
  return (
    <Container fluid className="py-5 min-vh-100 d-flex flex-column justify-content-center align-items-center" id="about">
      <h2 className="display-5 mb-3">About Me</h2>
      <Row className="flex-column flex-lg-row justify-content-center align-items-center h-100 flex-grow-1 w-100">
        <Col
          xs={12}
          md={5}
          lg={4}
          className="mb-4 mb-lg-0 text-center text-md-start"
        >
          <div className="about-image-container mx-auto">
            <Image
              src="/CartoonBoy.jpeg"
              alt="Profile Picture"
              className="about-profile-image"
            />
          </div>
        </Col>

        <Col xs={12} md={7} lg={6} className="mb-4 mb-md-0">
          <Row className="mb-2 gap-2 gap-md-3 d-flex flex-wrap justify-content-center justify-content-lg-start">
            {[
              { title: 'Experience', text: '2 Years' },
              { title: 'Completed', text: '10+ Projects' },
              { title: 'Support', text: '24/7 Online' },
            ].map((item, index) => (
              <Col key={index} lg={3} md={4} xs={5}>
                <Card className="px-2 about-card mx-auto">
                  <Card.Body className="px-0 py-2">
                    <Card.Text className="p-0 m-0">
                      <Briefcase className="text-primary" />
                    </Card.Text>
                    <Card.Text className="p-0 m-0">{item.title}</Card.Text>
                    <Card.Text>{item.text}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
          <p className="lead mb-4 text-justify px-4 px-md-0 mt-3">
            I'm a passionate MERN Full Stack Developer with a strong foundation
            in designing and building dynamic web applications. With expertise
            in MongoDB, Express js, React js, Node js and Next js, I create seamless,
            responsive applications that deliver excellent user experiences.
            From front-end design to back-end logic, I handle every aspect of
            development. I thrive on challenges, continuously seeking
            opportunities to improve my skills and bring innovative solutions to
            the table. My journey has been fueled by a deep passion for coding
            and an unwavering dedication to learning new technologies.
          </p>

          <div className="d-flex flex-wrap justify-content-start gap-3 mb-4">
            <Button
              variant="outline-success"
              href="#"
              className="px-4 py-2 transition-all duration-300 hover:bg-green-600 hover:text-white"
            >
              Download CV
              <CloudDownload size={34} className="mb-2 px-1" />
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default AboutSection;