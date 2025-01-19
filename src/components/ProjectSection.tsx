import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import InteractiveCard from './InteractiveCard';

const ProjectSection = () => {
  return (
    <div className="container my-5">
      <h2 className="text-center mb-3">PROJECTS</h2>
      <div className="d-flex flex-wrap justify-content-start" style={{ gap: '20px' }}>
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
