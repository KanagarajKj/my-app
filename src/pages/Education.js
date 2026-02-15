import { Container } from 'react-bootstrap';
import { GraduationCap, Award, Calendar } from 'lucide-react';

const educationData = [
  {
    school: 'Skill Safari, Coimbatore',
    date: 'Feb 2022 - Oct 2022',
    degree: 'MERN Full Stack Developer',
    grade: 'Certified',
    icon: <Award size={22} />,
    highlight: true,
  },
  {
    school: 'Nadar Saraswathi College of Engineering and Technology, Theni',
    date: 'June 2015 - Mar 2019',
    degree: 'BE - Mechanical Engineering',
    grade: '6.65 CGPA',
    icon: <GraduationCap size={22} />,
  },
  {
    school: 'Nadar Saraswathi Higher Secondary School, Theni',
    date: 'Apr 2014 - Apr 2015',
    degree: '(XII) Science with Computer',
    grade: '69.3%',
    icon: <GraduationCap size={22} />,
  },
];

const Education = () => {
  return (
    <Container
      fluid
      className="py-5 min-vh-100 d-flex flex-column align-items-center justify-content-center"
      id="education"
    >
      <h2 className="edu-heading mb-2">Education</h2>
      <p className="edu-subheading mb-5">My academic background</p>

      <div className="edu-timeline">
        {educationData.map((edu, index) => (
          <div key={index} className="edu-timeline-item">
            <div className="edu-timeline-dot">
              {edu.icon}
            </div>
            <div className={`edu-card ${edu.highlight ? 'edu-card-highlight' : ''}`}>
              <div className="edu-card-date">
                <Calendar size={14} className="me-1" />
                {edu.date}
              </div>
              <h4 className="edu-card-school">{edu.school}</h4>
              <p className="edu-card-degree">{edu.degree}</p>
              <span className="edu-card-grade">{edu.grade}</span>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default Education;
