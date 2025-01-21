import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Colors from '../constants/colors';

import Timeline from './Timeline';
import EducationInfo from './EducationScreen';
import EducationData from '../constants/educationInfo';
import SectionWrapper from '../hoc/SectionWrapper';
import Media from 'react-media';

const EducationSection = () => {
  return (
    <div className="container my-5" style={{color: Colors.primary}}>
      <h2 className="text-center mb-3">EDUCATION</h2>
      <Media query="(min-width: 400px)">
        {matches => {
          return matches ? <Timeline timelineData={EducationData}/> : <EducationInfo educationData={EducationData}></EducationInfo>
        }}
      </Media>
        
    </div>
  );
};

export default SectionWrapper(EducationSection, "Education_Section");
