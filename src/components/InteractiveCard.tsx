import React, { useState } from 'react';
import './Interactivecard.css';
import ProjectIMG from '../assests/project_img_holder.png';

const InteractiveCard = () => {
  const [style, setStyle] = useState({});

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const card = e.currentTarget; // Correctly typed
    const rect = card.getBoundingClientRect();
  
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
  
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
  
    const rotateX = ((y - centerY) / centerY) * 25;
    const rotateY = ((x - centerX) / centerX) * -25;
  
    setStyle({
      transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`,
      transition: 'transform 0.1s ease',
    });
  };
  

  const handleMouseLeave = () => {
    setStyle({
      transform: 'rotateX(0deg) rotateY(0deg) scale(1)',
      transition: 'transform 0.5s ease',
    });
  };

  return (
    <div
      className="interactive-card card shadow-sm p-3 mb-5 bg-white rounded"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={style}
    >
      <div className="card-body d-flex flex-column justify-content-between">
        <img src={ProjectIMG} alt="Project Image" 
            style={{ width: '150px', height: '150px', alignContent: 'center' }}/>

        <div className="text-center">
            <h5 className="card-title">Project Name</h5>
            <p className="card-text">
                Hi! I'm a passionate <strong>Computer Engineer</strong> with a focus on developing high-performance applications, 
                building intuitive user interfaces, and solving complex problems with efficient and scalable code.  
                Currently, I'm working on React Native apps and plugin development for JetBrains IDEs.
            </p>
        </div>

        <div className="d-flex justify-content-end">
          <a
            href="https://github.com/your-project-url" // Replace with your project link
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary btn-sm"
          >
            Checkout Project
          </a>
        </div>
      </div>
    </div>
  );
};

export default InteractiveCard;
