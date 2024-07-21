import React from 'react';
import { FaWhatsapp, FaInstagram, FaLinkedin, FaCopy } from 'react-icons/fa';
import { CopyToClipboard } from 'react-copy-to-clipboard';

function About() {
  // Dummy URLs for now
  const websiteURL = "https://www.yourwebsite.com";
  const whatsappShareURL = `https://api.whatsapp.com/send?text=Check%20out%20this%20awesome%20resume%20builder%20website%20${encodeURIComponent(websiteURL)}`;
  const instagramShareURL = `https://www.instagram.com/?url=${encodeURIComponent(websiteURL)}`;
  const linkedInShareURL = `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(websiteURL)}&title=Resume%20Builder&summary=Check%20out%20this%20awesome%20resume%20builder%20website`;

  const handleCopy = () => {
    alert('URL copied to clipboard!');
  };

  return (
    <div>
      <h1 className="h_1" style={{ marginTop: '90px', }}>Resume Builder</h1>
      <p style={{ fontSize: '19px', textAlign: 'center', wordSpacing:'2px' }}>
    Welcome to our innovative and user-friendly resume builder website, where crafting the perfect resume has never been easier. Our platform is designed to empower individuals in their career journey by providing a seamless and intuitive experience for building professional resumes. Whether you are a seasoned professional or just starting your career, our website offers a range of customizable templates, dynamic editing tools, and expert guidance to help you showcase your skills and achievements effectively. With a commitment to simplicity and style, our resume builder ensures that you can create a visually appealing and impactful resume that stands out to potential employers. Elevate your job search and career prospects with our resume builder – your gateway to a compelling and polished professional profile.
</p>


      <div style={{ marginTop: '20px', textAlign:'center'}}>
        <h2 style={{color:'solid black', paddingTop:'25px' }}>share with your friends</h2>
        <a href={whatsappShareURL} target="_blank" rel="noopener noreferrer">
          <FaWhatsapp style={{ fontSize: '24px', marginRight: '15px' }} />
        </a>
        <a href={instagramShareURL} target="_blank" rel="noopener noreferrer">
          <FaInstagram style={{ fontSize: '24px', marginRight: '15px' }} />
        </a>
        <a href={linkedInShareURL} target="_blank" rel="noopener noreferrer">
          <FaLinkedin style={{ fontSize: '24px', marginRight: '15px' }} />
        </a>
        <CopyToClipboard text={websiteURL} onCopy={handleCopy}>
          <span style={{ cursor: 'pointer', fontSize: '24px', marginRight: '15px' }}>
            <FaCopy />
          </span>
        </CopyToClipboard>
      </div>
    </div>
  );
}

export default About;
