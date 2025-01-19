import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import LinkedInIcon from '../assests/icons8-linkedin.svg';
import GithubIcon from '../assests/icons8-github.svg';
import ProfilePicture from '../assests/1660486674590.jpg';

import Colors from '../constants/colors';

const ProfileCard = () => {
  return (
    <div className="p-2 d-flex">
      <div className="card text-center p-4 shadow-sm" style={{ width: '300px', backgroundColor: Colors.primary}}>
        {/* Profile Picture */}
        <div className="mx-auto mb-3">
          <img
            src={ProfilePicture} // Replace with your profile image URL
            alt="Profile"
            className="rounded-circle border"
            style={{ width: '150px', height: '150px', objectFit: 'cover' }}
          />
        </div>

        {/* Name */}
        <h4 style={ {color: Colors.textPrimary}}>Batuhan Gündüz</h4>
        <p className="text-muted" style={{color: Colors.textSecondary}}>Computer Engineer | Plugin Developer</p>

        {/* Social Buttons */}
        <div className="d-flex justify-content-around">
          <a
            href="https://www.linkedin.com/in/batuhanguenduez/" // Replace with your LinkedIn URL
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary btn-sm"
            style={{
              width: '40px',
              height: '40px',
              overflow: 'hidden',  // Hides any overflow if the image is larger
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',

            }}>
            <img src={LinkedInIcon} alt="LinkedIn" style={{
                width: '100%',   // Fill the <a> width
                height: '100%',  // Fill the <a> height
              }}/>

          </a>
          <a
            href="https://github.com/BatuhanGQskt" // Replace with your GitHub URL
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline-dark btn-sm rounded-circle p-0"
            style={{
              width: '40px',
              height: '40px',
              overflow: 'hidden',  // Hides any overflow if the image is larger
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',

            }}>
              <img src={GithubIcon} alt="Github" style={{
                width: '100%',   // Fill the <a> width
                height: '100%',  // Fill the <a> height
              }}/>

          </a>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
