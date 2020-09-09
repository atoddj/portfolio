import React from 'react';
import './Intro.css';
import photo from '../resources/profile.jpg';

const Intro = () => (
  <div className="Intro">
    <div className="Intro-item">
      <h1>Todd Jones</h1>
      <p>I'm a web developer with 5 years professional experience, driven to make the Internet a more accessible place.</p>
      <h2>Info</h2>
      <p>
        Princeton, West Virginia <br/>
        atoddj@gmail.com <br/>
        Born in 88
      </p>
    </div>
    <div className="Intro-item">
      <img src={photo} className="Photo" alt="Head shot of Todd Jones"/>
    </div>
  </div>
)

export default Intro;