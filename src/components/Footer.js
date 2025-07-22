import React from 'react';
import '../App.css';

const Footer = () => {
  return (
    <footer>
      <div className="foot-panel1">Back to top</div>
      <div className="foot-panel2">
        {Array(4).fill().map((_, i) => (
          <ul key={i}>
            <p>Get to Know Us</p>
            <a>Careers</a>
            <a>Blog</a>
            <a>About Amazon</a>
            <a>Amazon Devices</a>
            <a>Amazon Science</a>
          </ul>
        ))}
      </div>
      <div className="foot-panel3">
        <div className="logo"></div>
      </div>
      <div className="foot-panel4">
        <div className="pages">
          <a>Conditions of Use</a> | <a>Privacy Notice</a> | <a>Your Ads Privacy Choices</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
