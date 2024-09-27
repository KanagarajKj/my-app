import React, { useState } from 'react';
import { Container, Row, Col, Modal } from 'react-bootstrap';
import {
  Bitcoin,
  ShoppingCart,
  Ambulance,
  Calculator,
  Trophy,
  CreditCard,
} from 'lucide-react';

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
      projects: [
        {
          name: 'The Crypto Exchange',
          icon: <Bitcoin size={24} />,
          description: [
            'Developed a robust cryptocurrency exchange platform using React, Node.js, Express, and MySQL, leveraging React Redux Toolkit for efficient state management.',
            'Integrated Cybrid API for real-time cryptocurrency data and trading functionality, ensuring accurate and up-to-date market information.',
            'Implemented KYC verification using Persona, enhancing platform security and compliance with regulatory requirements.',
            'Integrated Plaid for secure connection of external bank accounts, streamlining the deposit and withdrawal processes for users.',
            'Engineered a scalable backend architecture with Node.js and Express, capable of handling high-frequency trading requests with low latency.',
            'Developed a responsive and intuitive user interface using React, improving user engagement and reducing bounce rate by 30%.',
            'Implemented robust error handling and transaction monitoring, reducing failed transactions by 60%.',
            'Utilized MySQL for efficient data management, optimizing query performance and ensuring data integrity in high-volume trading scenarios.',
          ],
        },
        {
          name: 'Five Star Fans',
          icon: <Trophy size={24} />,
          description: [
            'Engineered a dynamic college sports fan engagement platform using React, Next.js with Pages Router, and PostgreSQL, employing React Query for efficient data fetching and caching.',
            'Integrated Sport Radar API to provide real-time game data, enhancing user experience with up-to-the-minute sports information.',
            'Implemented Socket.IO for live chat functionality during games, increasing user engagement and time spent on the platform by 40%.',
            'Optimized Next.js performance using server-side rendering and static site generation, improving page load times by 50%.',
            'Developed a robust user authentication and authorization system using Auth0, ensuring secure access to platform features and user data.',
            'Implemented responsive design principles, ensuring seamless user experience across desktop and mobile devices, resulting in a 35% increase in mobile user engagement.',
            'Utilized React Query to optimize data fetching and caching strategies, reducing server load by 25% and improving application responsiveness.',
          ],
        },
      ],
      technologies: [
        'React',
        'Node.js',
        'Next js',
        'SQL',
        'Redux Toolkit',
        'React Query',
        'Bootstrap',
      ],
    },
    {
      name: 'CyberSapient Technologies Pvt Ltd',
      role: 'Software Engineer',
      period: 'May 2023 - Aug 2023',
      projects: [
        {
          name: 'Jujubi E-Commerce App',
          icon: <ShoppingCart size={24} />,
          description: [
            'Developed a comprehensive e-commerce platform using Next.js, Bootstrap, and MongoDB, featuring distinct sections for Fresh Market and Supermarket products.',
            'Implemented responsive design with Bootstrap, ensuring seamless user experience across various devices and increasing mobile conversions by 35%.',
            'Engineered a robust backend with MongoDB, optimizing data storage and retrieval for large product catalogs, resulting in a 40% improvement in page load times.',
            'Integrated Google Maps API for precise location-based services, enhancing delivery accuracy by 60% and reducing failed deliveries by 25%.',
            'Utilized Socket.IO for real-time inventory updates in the Fresh Market section, decreasing overselling incidents by 80% and improving customer satisfaction.',
            'Implemented advanced search and filtering capabilities, increasing product discoverability by 45% and average order value by 20%.',
            'Developed a seamless checkout process, resulting in a 30% reduction in cart abandonment rates.',
            'Integrated secure payment gateways, ensuring PCI compliance and increasing customer trust, leading to a 25% increase in completed transactions.',
            'Implemented performance optimization techniques, including lazy loading and code splitting, improving overall site speed by 40%.',
          ],
        },
        {
          name: 'Chickly',
          icon: <CreditCard size={24} />,
          description: [
            'Engineered a robust and responsive web application using Next.js 12, leveraging its server-side rendering capabilities to optimize performance and SEO.',
            'Utilized TypeScript for enhanced code quality, improved developer experience, and reduced runtime errors.',
            'Integrated react-hook-form with Yup for efficient form handling and validation, improving user input accuracy and reducing submission errors by 40%.',
            "Utilized SWR (Stale-While-Revalidate) for data fetching, significantly improving the application's perceived performance and reducing load times by 30%.",
            'Implemented Progressive Web App (PWA) functionality using next-pwa, allowing users to install the app on their devices and access it offline.',
            'Integrated Mixpanel for user behavior analytics, providing valuable insights for future feature development and user experience improvements.',
            'Developed a scalable backend infrastructure using Node.js with the Express framework, ensuring high performance and efficient request handling.',
            'Implemented RESTful API endpoints to facilitate seamless communication between the frontend and backend.',
            'Implemented ESLint for code quality assurance, maintaining consistent coding standards across the development team.',
          ],
        },
      ],
      technologies: ['Next.js', 'Redux Toolkit', 'Tailwind', 'Express js'],
    },
    {
      name: 'Innovation Incubator Advisory Pvt. Ltd.',
      role: 'Software Engineer',
      period: 'Oct 2022 - Apr 2023',
      projects: [
        {
          name: 'Home Nurse and Ambulance Booking App',
          icon: <Ambulance size={24} />,
          description: [
            'Developed a user-friendly healthcare application using MERN stack (MongoDB, Express.js, React, Node.js), increasing service accessibility by 40%, app load time by 25% and ensuring cross-browser compatibility.',
            'Engineered robust back-end using Node.js with Express.js, reducing API response times by 30%.',
            'Utilized React Redux Toolkit for state management, decreasing code complexity by 20%.',
            'Integrated Google Maps API for precise location-based services, enhancing booking accuracy by 50% and reducing dispatch times by 20%.',
            'Implemented RESTful APIs and Web Services using JSON and XML for seamless communication between front-end and back-end.',
            'Adhered to UI/UX best practices and responsive web standards, resulting in a 95% user satisfaction rate.',
            'Utilized Webpack and NPM for efficient module bundling and package management, optimizing build processes by 30%.',
            'Implemented data structures and algorithms to optimize application performance, reducing data processing time by 40%.',
            'Employed version control best practices using Git, facilitating collaborative development and reducing merge conflicts by 60%.',
            'Collaborated with cross-functional teams to understand and implement both functional and non-functional requirements, ensuring 100% project specification compliance.',
          ],
        },
        {
          name: 'GST Form Filling App',
          icon: <Calculator size={24} />,
          description: [
            'Created a specialized application that automated GST form filling, reducing process time by 60%.',
            'Built intuitive UI with Next.js and Tailwind CSS, decreasing user onboarding time by 50%.',
            'Developed custom React functional components and hooks, improving code reusability by 40%.',
            'Implemented advanced form validation using React Redux Toolkit, reducing input errors by 75%.',
            'Designed RESTful APIs with Node.js and Express.js, improving data synchronization by 80%.',
            'Optimized MongoDB queries and implemented indexing strategies, enhancing data processing speed by 45% for large-scale submissions.',
          ],
        },
      ],
      technologies: [
        'React',
        'Next js',
        'Node.js',
        'MongoDB',
        'Redux Toolkit',
        'Tailwind',
      ],
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
              onClick={() => handleShowModal(company)}
            >
              <h3 className="company-name">{company.name}</h3>
              <p className="company-role">{company.role}</p>
              <p className="company-period">{company.period}</p>
              <p className="company-tech">{company.technologies.join(', ')}</p>
              {company.projects.map((project, projectIndex) => (
                <div key={projectIndex} className="project-section">
                  <h4 className="project-name">
                    <span className="project-icon">{project.icon}</span>
                    {project.name}
                  </h4>
                </div>
              ))}
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
            {Array.isArray(hoveredProject?.projects)
              ? hoveredProject?.projects.map((project, index) => (
                  <li key={index}>
                    <strong className="fs-4">{project.name}</strong>:
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
