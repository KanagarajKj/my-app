import { Container } from 'react-bootstrap';
import { Monitor, Server, Database, Wrench, Cloud } from 'lucide-react';

const skillCategories = [
  {
    title: 'Frontend',
    subtitle: 'Building beautiful user interfaces',
    icon: Monitor,
    accent: '#007bff',
    skills: [
      { name: 'HTML5', color: '#E34F26' },
      { name: 'CSS3', color: '#1572B6' },
      { name: 'JavaScript', color: '#F7DF1E' },
      { name: 'TypeScript', color: '#3178C6' },
      { name: 'React JS', color: '#61DAFB' },
      { name: 'Next JS', color: '#000000' },
      { name: 'Electron JS', color: '#47848F' },
    ],
  },
  {
    title: 'Backend',
    subtitle: 'Creating robust server solutions',
    icon: Server,
    accent: '#10b981',
    skills: [
      { name: 'Node JS', color: '#339933' },
      { name: 'Express JS', color: '#000000' },
    ],
  },
  {
    title: 'Database',
    subtitle: 'Managing data efficiently',
    icon: Database,
    accent: '#8b5cf6',
    skills: [
      { name: 'MongoDB', color: '#47A248' },
      { name: 'PostgreSQL', color: '#4169E1' },
      { name: 'MySQL', color: '#4479A1' },
    ],
  },
  {
    title: 'Tools & DevOps',
    subtitle: 'Essential development tools',
    icon: Wrench,
    accent: '#f59e0b',
    skills: [
      { name: 'Git', color: '#F05032' },
      { name: 'GitHub', color: '#181717' },
      { name: 'Postman', color: '#FF6C37' },
      { name: 'Swagger', color: '#85EA2D' },
      { name: 'REST API', color: '#007bff' },
      { name: 'VS Code', color: '#007ACC' },
    ],
  },
  {
    title: 'Cloud Services',
    subtitle: 'Cloud platforms & authentication',
    icon: Cloud,
    accent: '#ef4444',
    skills: [
      { name: 'Firebase', color: '#FFCA28' },
      { name: 'Auth0', color: '#EB5424' },
      { name: 'AWS', color: '#FF9900' },
    ],
  },
];

const Skills = () => {
  return (
    <Container
      fluid
      className="py-5 min-vh-100 d-flex flex-column align-items-center justify-content-center"
      id="skills"
    >
      <h2 className="skills-heading mb-2">Skills & Technologies</h2>
      <p className="skills-subheading mb-5">The tools and technologies I use to bring ideas to life</p>

      <div className="skills-grid-layout">
        {skillCategories.map((category, idx) => {
          const Icon = category.icon;
          return (
            <div
              key={idx}
              className="skill-category-card"
              style={{ '--card-accent': category.accent }}
            >
              <div className="skill-card-icon-wrapper">
                <Icon size={24} />
              </div>
              <h5 className="skill-category-title">{category.title}</h5>
              <p className="skill-category-subtitle">{category.subtitle}</p>
              <div className="skill-chips-grid">
                {category.skills.map((skill, i) => (
                  <div
                    key={i}
                    className="skill-chip"
                    style={{ '--skill-color': skill.color }}
                  >
                    <span className="skill-chip-dot" />
                    <span className="skill-chip-name">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </Container>
  );
};

export default Skills;
