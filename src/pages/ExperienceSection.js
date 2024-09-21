import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Bitcoin, ShoppingCart, Ambulance, Calculator } from 'lucide-react';

const ExperienceSection = () => {
  const companies = [
    {
      name: 'ABC Company Pvt Ltd',
      role: 'MERN Full Stack Developer',
      period: 'October 2023 - Present',
      project: {
        name: 'Crypto Exchange',
        icon: <Bitcoin size={24} />,
        description: [
          'Developed a secure and user-friendly cryptocurrency trading platform',
          'Implemented real-time price updates and order book functionality',
          'Integrated multiple blockchain networks for diverse crypto options',
        ],
      },
      technologies: ['React', 'Node.js', 'MongoDB', 'Bootstrap', 'CSS'],
    },
    {
      name: 'NOC Company',
      role: 'Frontend Developer',
      period: 'Previous Employment',
      project: {
        name: 'E-commerce Web App',
        icon: <ShoppingCart size={24} />,
        description: [
          'Built a responsive and intuitive e-commerce platform',
          'Implemented advanced search and filtering capabilities',
          'Integrated secure payment gateways and user authentication',
        ],
      },
      technologies: ['Next.js', 'SCSS', 'Redux'],
    },
    {
      name: 'MOC Company',
      role: 'Full Stack Developer',
      period: 'Previous Employment',
      projects: [
        {
          name: 'Ambulance Booking App',
          icon: <Ambulance size={24} />,
          description: [
            'Developed a real-time ambulance booking and tracking system',
            'Implemented geolocation services for accurate dispatching',
            'Created a priority-based queuing system for emergency calls',
          ],
        },
        {
          name: 'Loan Application App',
          icon: <Calculator size={24} />,
          description: [
            'Built a streamlined loan application processing system',
            'Implemented credit score integration and automated decision-making',
            'Developed a user-friendly dashboard for loan status tracking',
          ],
        },
      ],
      technologies: ['Next.js', 'Tailwind CSS', 'Node.js', 'PostgreSQL'],
    },
  ];

  return (
    <Container className="py-5" id="experience">
      <Row className="justify-content-center mb-5">
        <Col lg={8} className="text-center">
          <h2 className="display-4 mb-3">Experience</h2>
        </Col>
      </Row>
      {companies.map((company, index) => (
        <Row key={index} className="mb-5">
          <Col lg={6} className='mx-auto'>
            <div className="company-card">
              <h3 className="company-name">{company.name}</h3>
              <p className="company-role">{company.role}</p>
              <p className="company-period">{company.period}</p>
              <p className="company-tech">{company.technologies.join(', ')}</p>
              {company.project ? (
                <div className="project-section">
                  <h4 className="project-name">
                    <span className="project-icon">{company.project.icon}</span>
                    {company.project.name}
                  </h4>
                  <ul className="project-description">
                    {company.project.description.map((point, pointIndex) => (
                      <li key={pointIndex}>{point}</li>
                    ))}
                  </ul>
                </div>
              ) : (
                company.projects.map((project, projectIndex) => (
                  <div key={projectIndex} className="project-section">
                    <h4 className="project-name">
                      <span className="project-icon">{project.icon}</span>
                      {project.name}
                    </h4>
                    <ul className="project-description">
                      {project.description.map((point, pointIndex) => (
                        <li key={pointIndex}>{point}</li>
                      ))}
                    </ul>
                  </div>
                ))
              )}
            </div>
          </Col>
        </Row>
      ))}
      <style jsx>{`
        .company-card {
          background: #f8f9fa;
          border-radius: 8px;
          padding: 2rem;
          transition: all 0.3s ease;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }
        .company-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
        }
        .company-name {
          font-size: 1.8rem;
          font-weight: bold;
          margin-bottom: 0.5rem;
        }
        .company-role {
          font-size: 1.2rem;
          color: #007bff;
          margin-bottom: 0.5rem;
        }
        .company-period,
        .company-tech {
          font-size: 1rem;
          margin-bottom: 0.5rem;
        }
        .project-section {
          margin-top: 1rem;
        }
        .project-name {
          font-size: 1.3rem;
          font-weight: bold;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          margin-bottom: 0.5rem;
        }
        .project-icon {
          color: #007bff;
          display: flex;
          align-items: center;
        }
        .project-description {
          padding-left: 1.5rem;
          list-style-position: outside;
          text-align: left
        }
        .project-description li {
          margin-bottom: 0.5rem;
          padding-left: 0.5rem;
        }
      `}</style>
    </Container>
  );
};

export default ExperienceSection;