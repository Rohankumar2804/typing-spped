import React from 'react';
import './Landing.css';
import flash from '../../assets/hero.png';
import Typewriter from 'typewriter-effect';
const Landing = () => {
  return (
    <div className="landing-container">
      <div className="landing-left" data-aos="fade-right">
        <h1 className="landing-header">CAN YOU TYPE</h1>
        <div className="typewriter-container">
          <Typewriter
            options={{
              strings: ['FAST?', 'CORRECT?', 'QUICK?'],
              autoStart: true,
              loop: true,
            }}
          />
        </div>
      </div>
      <div className="landing-right" data-aos="fade-left">
        <img src={flash} alt="hero" className="flash-image" />
      </div>
    </div>
  );
};
export default Landing;
