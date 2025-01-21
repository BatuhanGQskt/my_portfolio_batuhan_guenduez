import React from 'react';
import Colors from '../constants/colors';

interface EducationEvent {
  title: string;
  year: string;
  description: string;
  icon: string; // Expecting a string path to the icon (e.g., an SVG)
}

interface EducationProps {
  educationData: EducationEvent[]; // Accepts timeline data as input
}

function EducationScreen({ educationData }: EducationProps) {
  return (
    <div>
      {educationData.map((item, index) => (
        <div key={index} style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
          {/* Logo */}
          <img
            src={item.icon}
            alt={item.title}
            style={{
              width: '50px',
              height: '50px',
              borderRadius: '50%',
              border: '2px solid black',
              objectFit: 'scale-down',
              backgroundColor: 'white',
              marginRight: '15px',
            }}
          />
          
          {/* Content */}
          <div style={{ textAlign:'left'}}>
            {/* Title (name) */}
            <h3 style={{ margin: 0, fontSize: '20px', color: Colors.primary }}>{item.title}</h3>
            
            {/* Year */}
            <p style={{ color: Colors.textSecondary }}>
              {item.year}
            </p>
            
            {/* Description */}
            <p style={{ marginTop: '10px', fontSize: '16px', color: Colors.textPrimary }}>
              {item.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default EducationScreen;
