import React from 'react';
import { Container, Card } from 'react-bootstrap';

const SkillItem = ({ skill }) => (
  <li className={`skill-item ${skill.color}`}>
    <span className="skill-name">{skill.name}</span>
  </li>
);

const Skills = () => {
  const allSkills = [
    { name: 'HTML5', color: 'html' },
    { name: 'CSS & SASS', color: 'css' },
    { name: 'JavaScript', color: 'js' },
    { name: 'React JS', color: 'react' },
    { name: 'Next JS', color: 'next' },
    { name: 'TypeScript', color: 'typescript' },
    // { name: 'SASS', color: 'sass' },
    { name: 'Node JS', color: 'node' },
    { name: 'Express JS', color: 'express' },
    { name: 'SQL', color: 'sql' },
    { name: 'MongoDB', color: 'mongodb' },
    { name: 'Git & GitHub', color: 'git' },
    { name: 'VS Code', color: 'vscode' },
    // { name: 'GitHub', color: 'github' },
  ];

  return (
    <Container fluid className="pt-5 skills-showcase min-vh-80 d-flex flex-column align-items-center justify-content-center" id="skills">
      <h2 className="display-5 mb-3">My Skills</h2>
      <Card className="border-0">
        <Card.Body className="skill-card">
          <ul className="skills-grid">
            {allSkills.map((skill, index) => (
              <SkillItem key={index} skill={skill} />
            ))}
          </ul>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Skills;
