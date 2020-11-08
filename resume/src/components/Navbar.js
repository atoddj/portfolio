import React from 'react';
import './Navbar.css';
import photo from '../resources/profile.jpg';

const Navbar = () => {
  return (
    <div className="Navbar">
      <div className="profile">
        <img src={photo} alt="Headshot of Todd Jones" />
        <h1>Todd Jones</h1>
        <div className="social-links">
          <a href="https://twitter.com/toddjones" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a>  
          <a href="https://linkedin.com/in/atoddj" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin-in"></i></a>  
          <a href="https://github.com/atoddj" target="_blank" rel="noopener noreferrer"><i className="fab fa-github-alt"></i></a> 
        </div>
      </div>
    </div>
  )
}

export default Navbar;