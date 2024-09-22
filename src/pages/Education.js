import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const educationData = [
  {
    id: 0,
    school: 'Skill Safari, Coimbatore',
    date: 'Feb 2022 - Oct 2022',
    degree: 'MERN Full Stack Developer',
    grade: 'Certified',
  },
  {
    id: 1,
    school: 'Nadar Saraswathi College of Engineering and Technology, Theni',
    date: 'June 2015 - Mar 2019',
    degree: 'UG - BE(Mechanical Engineering)',
    grade: '6.65 CGPA',
  },
  {
    id: 2,
    school: 'Nadar Saraswathi Higher Secondary School, Theni',
    date: 'Apr 2014 - Apr 2015',
    degree: '(XII) Science with Computer',
    grade: '69.3%',
  },
];

const Education = () => {
  return (
    <Container className="pt-5 timeline p-4" id='education'>
      <h2 className="display-5 mb-3">Education</h2>
      <Row className="timeline-row">
        {educationData.map((edu, index) => (
          <Col
            key={edu.id}
            md={6}
            className={`timeline-item ${
              index % 2 === 0 ? 'timeline-left' : 'timeline-right'
            }`}
          >
            <div className="timeline-content">
              <h4 className="timeline-school">{edu.school}</h4>
              <p className="timeline-degree">{edu.degree}</p>
              <p className="timeline-date">{edu.date}</p>
              <p className="timeline-grade">Grade: {edu.grade}</p>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Education;
