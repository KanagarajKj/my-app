import { useState } from 'react';
import { Container, Modal } from 'react-bootstrap';
import {
  Bitcoin,
  ShoppingCart,
  Ambulance,
  Calculator,
  Trophy,
  CreditCard,
  Briefcase,
  MapPin,
  Calendar,
} from 'lucide-react';

const companies = [
  {
    name: 'Blaze Web Services Pvt Ltd',
    role: 'Full Stack Developer',
    period: 'Aug 2023 - Present',
    location: 'Madurai',
    projects: [
      {
        name: 'The Crypto Exchange',
        icon: <Bitcoin size={20} />,
        description: [
          'Developed a robust cryptocurrency exchange platform using React, Node.js, Express, and MySQL.',
          'Integrated Cybrid API for real-time cryptocurrency data and trading functionality.',
          'Implemented KYC verification using Persona, enhancing platform security and compliance.',
          'Integrated Plaid for secure connection of external bank accounts.',
          'Engineered a scalable backend architecture capable of handling high-frequency trading requests.',
          'Developed a responsive UI using React, reducing bounce rate by 30%.',
          'Implemented robust error handling, reducing failed transactions by 60%.',
        ],
      },
      {
        name: 'Five Star Fans',
        icon: <Trophy size={20} />,
        description: [
          'Engineered a dynamic college sports fan engagement platform using React, Next.js, and PostgreSQL.',
          'Integrated Sport Radar API for real-time game data.',
          'Implemented Socket.IO for live chat, increasing user engagement by 40%.',
          'Optimized Next.js with SSR and SSG, improving page load times by 50%.',
          'Developed authentication system using Auth0 for secure access.',
          'Utilized React Query for optimized data fetching, reducing server load by 25%.',
        ],
      },
    ],
    technologies: ['React.js', 'Node.js',  'Express.js', 'Next.js', 'SQL', 'Redux Toolkit', 'React Query', 'Bootstrap', 'Socket.IO', 'PostgreSQL', 'MySQL'],
  },
  {
    name: 'CyberSapient Technologies Pvt Ltd',
    role: 'Software Engineer',
    period: 'May 2023 - Aug 2023',
    location: 'Kerala',
    projects: [
      {
        name: 'Jujubi E-Commerce App',
        icon: <ShoppingCart size={20} />,
        description: [
          'Developed a comprehensive e-commerce platform using Next.js, Bootstrap, and MongoDB.',
          'Implemented responsive design, increasing mobile conversions by 35%.',
          'Integrated Google Maps API for location-based services, enhancing delivery accuracy by 60%.',
          'Utilized Socket.IO for real-time inventory updates, decreasing overselling by 80%.',
          'Implemented advanced search and filtering, increasing product discoverability by 45%.',
          'Developed seamless checkout, reducing cart abandonment by 30%.',
        ],
      },
      {
        name: 'Chickly',
        icon: <CreditCard size={20} />,
        description: [
          'Engineered a responsive web application using Next.js 12 with server-side rendering.',
          'Utilized TypeScript for enhanced code quality and reduced runtime errors.',
          'Integrated react-hook-form with Yup, reducing submission errors by 40%.',
          'Implemented PWA functionality using next-pwa for offline access.',
          'Integrated Mixpanel for user behavior analytics.',
          'Developed scalable backend with Node.js and Express framework.',
        ],
      },
    ],
    technologies: ['Next.js', 'Redux Toolkit', 'Tailwind', 'Node.js', 'Express.js'],
  },
  {
    name: 'Innovation Incubator Advisory Pvt. Ltd.',
    role: 'Software Engineer',
    period: 'Oct 2022 - Apr 2023',
    location: 'Kerala',
    projects: [
      {
        name: 'Medrabbits',
        icon: <Ambulance size={20} />,
        description: [
          'Developed a healthcare application using MERN stack, increasing service accessibility by 40%.',
          'Engineered robust backend with Express.js, reducing API response times by 30%.',
          'Integrated Google Maps API for location-based services, enhancing booking accuracy by 50%.',
          'Implemented RESTful APIs for seamless front-end and back-end communication.',
          'Adhered to UI/UX best practices, resulting in a 95% user satisfaction rate.',
        ],
      },
      {
        name: 'Fincto',
        icon: <Calculator size={20} />,
        description: [
          'Automated GST form filling, reducing process time by 60%.',
          'Built intuitive UI with Next.js and Tailwind CSS, decreasing onboarding time by 50%.',
          'Implemented advanced form validation using Redux Toolkit, reducing input errors by 75%.',
          'Designed RESTful APIs with Node.js, improving data synchronization by 80%.',
          'Optimized MongoDB queries, enhancing data processing speed by 45%.',
        ],
      },
    ],
    technologies: ['React', 'Next.js', 'Node.js', 'MongoDB', 'Redux Toolkit', 'Tailwind'],
  },
];

const ExperienceSection = () => {
  const [selectedCompany, setSelectedCompany] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handleCardClick = (company) => {
    setSelectedCompany(company);
    setShowModal(true);
  };

  return (
    <Container
      fluid
      className="py-5 min-vh-100 d-flex flex-column align-items-center justify-content-center"
      id="experience"
    >
      <h2 className="exp-heading mb-2">Experience</h2>
      <p className="exp-subheading mb-5">My professional journey</p>

      <div className="exp-timeline">
        {companies.map((company, index) => (
          <div key={index} className="exp-timeline-item">
            <div className="exp-timeline-dot" />
            <div
              className="exp-card"
              onClick={() => handleCardClick(company)}
            >
              <div className="exp-card-header">
                <div>
                  <h3 className="exp-company-name">{company.name}</h3>
                  <p className="exp-role">
                    <Briefcase size={16} className="me-1" />
                    {company.role}
                  </p>
                </div>
              </div>

              <div className="exp-meta">
                <span className="exp-meta-item">
                  <Calendar size={14} className="me-1" />
                  {company.period}
                </span>
                <span className="exp-meta-item">
                  <MapPin size={14} className="me-1" />
                  {company.location}
                </span>
              </div>

              <div className="exp-projects">
                {company.projects.map((project, i) => (
                  <div key={i} className="exp-project-tag">
                    <span className="exp-project-icon">{project.icon}</span>
                    {project.name}
                  </div>
                ))}
              </div>

              <div className="exp-tech-list">
                {company.technologies.map((tech, i) => (
                  <span key={i} className="exp-tech-chip">{tech}</span>
                ))}
              </div>

              <div className="exp-card-hint">Click to view details</div>
            </div>
          </div>
        ))}
      </div>

      <Modal
        show={showModal}
        onHide={() => setShowModal(false)}
        centered
        size="lg"
        className="exp-modal"
      >
        <Modal.Header closeButton className="exp-modal-header">
          <div>
            <Modal.Title className="exp-modal-title">
              {selectedCompany?.name}
            </Modal.Title>
            <p className="exp-modal-role mb-0">
              {selectedCompany?.role} &middot; {selectedCompany?.period}
            </p>
          </div>
        </Modal.Header>
        <Modal.Body className="exp-modal-body">
          {selectedCompany?.projects.map((project, index) => (
            <div key={index} className="exp-modal-project">
              <h5 className="exp-modal-project-name">
                <span className="exp-project-icon">{project.icon}</span>
                {project.name}
              </h5>
              <ul className="exp-modal-list">
                {project.description.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </Modal.Body>
      </Modal>
    </Container>
  );
};

export default ExperienceSection;
