import React from 'react';
import logo from './logo.svg';
import './App.css';

import Colors from './constants/colors';


import NavBar from './components/NavBar';
import ProfileCard from './components/ProfileCard';
import ColorPalette from './components/ColorPalette';
import InfoSection from './components/InfoSection';
import EducationSection from './components/EducationSection'
import ExperienceSection from './components/ExperienceSection';
import ProjectSection from './components/ProjectSection';
import ContactForm from './components/ContactForm';
import ProfileInfo from './components/ProfileInfo';

import InteractiveCard from './components/InteractiveCard';

function App() {
  return (
    <div className="App" style={{backgroundColor: Colors.background}}>
      <NavBar />
      <div>
        <div>
          <InfoSection />
        </div>
        <div className="app-container">
          <ProfileCard />
          <ProfileInfo />
        </div>

        <div>
          <EducationSection />
        </div>

        
        <div>
          <ExperienceSection />
        </div>

        <div>
          <ProjectSection />
        </div>

        <div>
          <ContactForm />
        </div>
      </div>
    </div>
  );
}

export default App;
