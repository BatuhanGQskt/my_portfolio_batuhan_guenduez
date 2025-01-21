import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import LinkedInIcon from '../assests/icons8-linkedin.svg';
import GithubIcon from '../assests/icons8-github.svg';
import ProfilePicture from '../assests/1660486674590.jpg';

import Colors from '../constants/colors';
import SectionWrapper from '../hoc/SectionWrapper';
import DownloadGIF from '../assests/icons8-download.gif';


const ProfileCard = () => {

  const handleCVDownload = () => {
    // Provide the relative path from the public folder
    const link = document.createElement('a');
    link.href = '/CV.pdf';  // This assumes your CV is in the public folder
    link.download = 'Batuhan_Gunduz_CV.pdf';  // The name you want for the downloaded file
    link.click();
  };

  return (
    <div className="profile-card mx-auto my-3 p-4">
      <div
        className="card text-center p-4 shadow-sm"
        style={{
          maxWidth: '350px',
          backgroundColor: "#1A264A",
          borderRadius: '10px',
        }}
      >
        {/* Profile Picture */}
        <div className="mx-auto mb-3">
          <img
            src={ProfilePicture}
            alt="Profile"
            className="rounded-circle border"
            style={{ width: '150px', height: '150px', objectFit: 'cover' }}
          />
        </div>

        {/* Name */}
        <h4 style={{ color: Colors.textPrimary }}>Batuhan Gündüz</h4>
        <p style={{ color: Colors.textSecondary }}>
          Hi! I'm a passionate <strong>Computer Engineer</strong> with a focus on developing high-performance applications, 
          building intuitive user interfaces, and solving complex problems with efficient and scalable code.  
          Currently, I'm working on Compiler Design and LLMs.
        </p>

        {/* Social Buttons */}
        <div className="d-flex justify-content-around">
          <a
            href="https://www.linkedin.com/in/batuhanguenduez/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary btn-sm rounded-circle p-0"
            style={{
              width: '40px',
              height: '40px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <img
              src={LinkedInIcon}
              alt="LinkedIn"
              style={{
                width: '70%',
                height: '70%',
              }}
            />
          </a>
          <a
            href="https://github.com/BatuhanGQskt"
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
            }}
          >
            <img
              src={GithubIcon}
              alt="Github"
              style={{
                width: '100%',
                height: '100%',
              }}
            />
          </a>

          {/* CV Download Button */}
          <button onClick={handleCVDownload} className="btn btn-sm btn-success" style={{backgroundColor: Colors.background, padding: '10px 20px', borderRadius: '10px'}}>
            <div className='d-flex align-items-center justify-content-center'>
              <p style={{textAlign: 'center', marginRight: '10px', marginBottom: 0, color: Colors.textPrimary}}>Download CV</p>
              <img src={DownloadGIF} alt="downloadGif" style={{width: '20px', height: '20px'}} />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SectionWrapper(ProfileCard, "profile_card");
