import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Colors from '../constants/colors';
import WorkingExperienceInfo from '../constants/workExperience';
import SectionWrapper from '../hoc/SectionWrapper';
import { Work } from '@mui/icons-material';
import { motion } from "framer-motion";
import { slideIn } from "../utils/slideIn";

const ExperienceSection = () => {
  const [selectedProject, setSelectedProject] = useState(0); // Track selected project

  return (
    <div className="container my-5">
      <h2 className="text-center mb-3" style={{ color: Colors.primary }}>
        EXPERIENCES
      </h2>
      <div className="row p-3 gy-5 gap-4">
        {/* Left Side: Buttons */}
        <div className="col col-md-4">
          <div className="d-flex flex-column">
            {WorkingExperienceInfo.map((item, index) => (
              <div
                key={index}
                className={`d-flex align-items-center mb-2 p-2 border ${
                  selectedProject === index ? 'active' : ''
                }`}
                style={{
                  cursor: 'pointer', // Make it look clickable
                  fontWeight: selectedProject === index ? 'bold' : 'normal',
                  backgroundColor: selectedProject === index ? '#2C3B58' : '#0A1D32',
                  color: selectedProject === index ? Colors.textPrimary : Colors.accent,
                  border: `2px solid ${Colors.border}`, // Optional: Add border
                  borderRadius: '8px', // Optional: Rounded corners
                  textAlign: 'left',
                }}
                onClick={() => setSelectedProject(index)}
              >
                {/* Add logo/icon */}
                <img
                  src={item.icon} // Path to logo
                  alt={`${item.title} logo`}
                  style={{
                    width: '20%',
                    height: '20%',
                    marginRight: '10px',
                  }}
                />
                {/* Title/Text */}
                <div className='d-flex flex-column'>
                  <h3>{item.title}</h3> 
                  <span style={{fontSize: '16px'}}>{item.companyName}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side: Project Details */}
        <motion.div
          key={selectedProject}  // Trigger the animation on selection change
          variants={slideIn("none", "spring", 0.2, 1)}
          initial="hidden"
          animate="show"
          className="col" // Restrict width for better alignment
        >
          <div className="col-md-8">
            <div
              className="p-4"
              style={{
                backgroundColor: '#2C3B58',
                borderRadius: '8px',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                textAlign: 'left',
              }}
            >
              <div style={{ color: 'white' }}>
                <h1>
                  {WorkingExperienceInfo[selectedProject]?.title}
                </h1>
                <p style={{color: 'grey'}}>{WorkingExperienceInfo[selectedProject]?.companyName}</p>
                <p>{WorkingExperienceInfo[selectedProject]?.year}</p>
                <div>
                  {WorkingExperienceInfo[selectedProject]?.description
                    .split('.')
                    .filter((sentence) => sentence.trim() !== '') // Remove empty sentences
                    .map((sentence, index) => (
                      <ul key={index} style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
                        <li>{sentence.trim()}.</li>
                      </ul>
                    ))}
                </div>
                <p>
                  <strong>Technologies:</strong>
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default SectionWrapper(ExperienceSection, 'Experience_Section');
