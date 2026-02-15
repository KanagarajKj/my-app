import { Container, Row, Col, Card } from 'react-bootstrap';
import { Briefcase, FolderCheck, Headset } from 'lucide-react';

const stats = [
  { icon: Briefcase, title: 'Experience', text: '3+ Years' },
  { icon: FolderCheck, title: 'Completed', text: '20+ Projects' },
  { icon: Headset, title: 'Support', text: '24/7 Online' },
];

const AboutSection = () => {
  return (
    <Container
      fluid
      className="py-5 min-vh-100 d-flex flex-column justify-content-center align-items-center"
      id="about"
    >
      <h2 className="about-heading mb-2">About Me</h2>
      <p className="about-subheading mb-5">Get to know me</p>

      <Row className="justify-content-center w-100" style={{ maxWidth: 900 }}>
        <Col xs={12}>
          <Row className="mb-4 g-3 justify-content-center">
            {stats.map((item, index) => {
              const Icon = item.icon;
              return (
                <Col key={index} lg={3} md={4} xs={6}>
                  <Card className="about-card text-center border-0">
                    <Card.Body className="py-3 px-2">
                      <div className="about-card-icon mb-2">
                        <Icon size={24} />
                      </div>
                      <Card.Text className="about-card-title mb-1">{item.title}</Card.Text>
                      <Card.Text className="about-card-value">{item.text}</Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              );
            })}
          </Row>

          <p className="about-description mt-3">
            I'm a passionate MERN Full Stack Developer with a strong foundation
            in designing and building dynamic web applications. With expertise
            in MongoDB, Express js, React js, Node js and Next js, I create seamless,
            responsive applications that deliver excellent user experiences.
            From front-end design to back-end logic, I handle every aspect of
            development. I thrive on challenges, continuously seeking
            opportunities to improve my skills and bring innovative solutions to
            the table.
          </p>

        </Col>
      </Row>
    </Container>
  );
};

export default AboutSection;
