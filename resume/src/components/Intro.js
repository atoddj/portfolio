import React from 'react';
import './Intro.css';
import photo from '../resources/profile.jpg';

const Intro = () => (
  <div className="Intro">
    <div className="Intro-item">
      <h1>Todd Jones</h1>
      <p>I'm a web developer with 5 years professional experience. I'm driven to make the Internet a more accessible place.</p>
    </div>
    <div className="Intro-item">
      <img src={photo} className="Photo" alt="Head shot of Todd Jones"/>
    </div>
  </div>
)

export default Intro;