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

import InteractiveCard from './components/InteractiveCard';

function App() {
  return (
    <div className="App" style={{backgroundColor: Colors.background}}>
      <NavBar />
      <div>
        <div className='App-Cover'>
          <InfoSection />
        </div>
        <div className="app-container">
          <ProfileCard />
          <InteractiveCard />

          <ColorPalette />
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
      </div>
    </div>
  );
}

export default App;
