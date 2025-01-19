import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import InteractiveCard from './InteractiveCard';
import Colors from '../constants/colors';

const ProjectSection = () => {
  return (
    <div className="container my-5">
      <h2 className="text-center mb-3" style={{color: Colors.primary}}>PROJECTS</h2>
      <div className="d-flex flex-wrap justify-content-center" style={{ gap: '20px' }}>
        <InteractiveCard />
        <InteractiveCard />
        <InteractiveCard />
        <InteractiveCard />
        <InteractiveCard />
      </div>

    </div>
  );
};

export default ProjectSection;
