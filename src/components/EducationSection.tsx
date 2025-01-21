import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Colors from '../constants/colors';

import Timeline from './Timeline';
import EducationData from '../constants/educationInfo';
import SectionWrapper from '../hoc/SectionWrapper';

const EducationSection = () => {
  return (
    <div className="container my-5" style={{color: Colors.primary}}>
      <h2 className="text-center mb-3">EDUCATION</h2>
            
      
      <Timeline timelineData={EducationData}/>
    </div>
  );
};

export default SectionWrapper(EducationSection, "Education_Section");
