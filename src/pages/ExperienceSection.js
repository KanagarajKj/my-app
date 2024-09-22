import React, { useState } from 'react';
import { Container, Row, Col, Modal } from 'react-bootstrap';
import { Bitcoin, ShoppingCart, Ambulance, Calculator } from 'lucide-react';

const ExperienceSection = () => {
  const [hoveredProject, setHoveredProject] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handleMouseLeave = () => {
    setShowModal(false);
  };

  const handleShowModal = (project) => {
    setHoveredProject(project);
    setShowModal(true);
  };

  const companies = [
    {
      name: 'Blaze Web Services Pvt Ltd',
      role: 'Full Stack Developer',
      period: 'Aug 2023 - Present',
      project: {
        name: 'Crypto Exchange',
        icon: <Bitcoin size={24} />,
        description: [
          'Developed a secure and user-friendly cryptocurrency trading platform',
          'Implemented real-time price updates and order book functionality',
          'Integrated multiple blockchain networks for diverse crypto options',
        ],
      },
      technologies: ['React', 'Node.js', 'Next js', 'SQL', 'Redux Toolkit', 'React Query', 'Bootstrap'],
    },
    {
      name: 'CyberSapient Technologies Pvt Ltd',
      role: 'Software Engineer',
      period: 'May 2023 - Aug 2023',
      project: {
        name: 'E-commerce Web App',
        icon: <ShoppingCart size={24} />,
        description: [
          'Built a responsive and intuitive e-commerce platform',
          'Implemented advanced search and filtering capabilities',
          'Integrated secure payment gateways and user authentication',
        ],
      },
      technologies: ['Next.js', 'Redux Toolkit', 'sass'],
    },
    {
      name: 'Innovation Incubator Advisory Pvt. Ltd.',
      role: 'Software Engineer',
      period: 'Oct 2022 - Apr 2023',
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
      technologies: ['React', 'Node.js', 'Next js', 'Redux Toolkit', 'MongoDB', 'Tailwind'],
    },
  ];

  return (
    <Container className="pt-5" id="experience">
      <Row className="justify-content-center">
        <Col lg={8} className="text-center">
          <h2 className="display-5 mb-3">Experience</h2>
        </Col>
      </Row>
      <Row className="mb-5 d-flex flex-wrap gy-3">
        {companies.map((company, index) => (
          <Col key={index} lg={5} className="mx-auto">
            <div
              className="company-card"
              onClick={()=> handleShowModal(company.project || company.projects)}
            >
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
                </div>
              ) : (
                company.projects.map((project, projectIndex) => (
                  <div key={projectIndex} className="project-section">
                    <h4 className="project-name">
                      <span className="project-icon">{project.icon}</span>
                      {project.name}
                    </h4>
                  </div>
                ))
              )}
            </div>
          </Col>
        ))}
      </Row>

      {/* Modal to show the project description */}
      <Modal show={showModal} onHide={handleMouseLeave} centered>
        <Modal.Header closeButton>
          <Modal.Title>{hoveredProject?.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ul>
            {Array.isArray(hoveredProject)
              ? hoveredProject.map((project, index) => (
                  <li key={index}>
                    <strong>{project.name}</strong>: 
                    <ul>
                      {project.description.map((point, pointIndex) => (
                        <li key={pointIndex}>{point}</li>
                      ))}
                    </ul>
                  </li>
                ))
              : hoveredProject?.description.map((point, index) => (
                  <li key={index}>{point}</li>
                ))}
          </ul>
        </Modal.Body>
      </Modal>
    </Container>
  );
};

export default ExperienceSection;
