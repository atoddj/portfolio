import React from 'react';
import './Social.css';

const Social = () => (
  <div className="Social">
    <div className="icons">
      <Icon classList="fab fa-github-square" url="https://github.com/atoddj" />
      <Icon classList="fab fa-twitter-square" url="https://twitter.com/toddjones" />
      <Icon classList="fab fa-linkedin" url="https://linkedin.com/in/atoddj" />
    </div>
    <p>My Social Profiles</p>
  </div>
)

const Icon = ({classList, url}) => (
  <a href={url} target="_blank">
    <i className={classList}></i>
  </a>
)

export default Social;