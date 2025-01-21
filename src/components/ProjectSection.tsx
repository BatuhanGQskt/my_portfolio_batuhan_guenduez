import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import InteractiveCard from './InteractiveCard';
import Colors from '../constants/colors';

import ProjectInfo from '../constants/ProjectInfo';
import SectionWrapper from '../hoc/SectionWrapper';

const projectData = ProjectInfo;

const ProjectSection = () => {
  return (
    <div className="container my-5">
      <h2 className="text-center mb-3" style={{color: Colors.primary}}>PROJECTS</h2>
      <div className="d-flex flex-wrap justify-content-center" style={{ gap: '20px' }}>
        {ProjectInfo.map((projectData, index) => (
          <InteractiveCard
            projectLink={projectData.projectLink}
            projectImage={projectData.projectImage}
            projectName={projectData.projectName}
            projectDescription={projectData.projectDescription}
            projectTools={projectData.projectTools}
          />
        ))}
      </div>

    </div>
  );
};

export default SectionWrapper(ProjectSection, "Project_Section");
