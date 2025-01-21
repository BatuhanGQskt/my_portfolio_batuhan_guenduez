import React, { useState } from 'react';
import './Interactivecard.css';

interface InteractiveCardProps {
  projectLink: string;
  projectImage: string;
  projectName: string;
  projectDescription: string;
  projectTools: string;
}

const InteractiveCard: React.FC<InteractiveCardProps> = ({
  projectLink,
  projectImage,
  projectName,
  projectDescription,
  projectTools,
}) => {
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
      style={{ ...style, display: "flex", flexDirection: "column", height: "600px" }} // Set a fixed height for the card
    >
      <div className="card-body d-flex flex-column justify-content-between">
        {/* Image Section */}
        <div className="text-center flex-shrink-0">
          <img
            src={projectImage}
            alt={`${projectName} image`}
            style={{
              width: "100%",
              maxHeight: "250px", // Limit image height
              objectFit: "contain", // Maintain aspect ratio
            }}
          />
        </div>

        {/* Text Section */}
        <div
          className="text-center overflow-auto mt-3"
          style={{ maxHeight: "calc(100% - 240px)", overflowY: "auto" }} // Adjusted for more space
        >
          <h5 className="card-title">{projectName}</h5>
          <p className="card-text">{projectDescription}</p>
        </div>

        {/* Tools Section */}
        <div
          className="text-center mt-2"
          style={{
            borderTop: "1px solid #ddd", // Optional divider for visual separation
            paddingTop: "10px",
          }}
        >
          <p className="text-muted"><strong>Tools: </strong>{projectTools}</p>
        </div>

        {/* Button Section */}
        <div className="d-flex justify-content-end flex-shrink-0 mt-2">
          <a
            href={projectLink} // Use the dynamic project link
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
