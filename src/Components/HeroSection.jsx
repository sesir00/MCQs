import React from 'react';
import './HeroSection.css';
import heroImage from '../assets/hero1.jpg';

const HeroSection = () => {
  return (
    <div className="hero">
      {/* <img src={{heroImage}} alt="Hero" className="hero-image" /> */}
      <div className="hero-content">
        <h1>Welcome to MCQ Generator Site</h1>
        <p>"Empowering Learning, One Question at a Time."</p>
      </div>
    </div>
  );
};

export default HeroSection;
