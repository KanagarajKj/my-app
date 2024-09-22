import React from 'react';
import NavigationBar from '../pages/NavigationBar';
import AboutSection from '../pages/About';
import ExperienceSection from '../pages/ExperienceSection';
import HomeSection from '../pages/Home';
import Skills from '../pages/Skills';
import Education from '../pages/Education';
import Contact from '../pages/Contact';

const Index = () => {
  return (
    <div>
      <NavigationBar />
      <HomeSection />
      <AboutSection />
      <Skills />
      <ExperienceSection />
      <Education />
      <Contact />
    </div>
  );
};

export default Index;
