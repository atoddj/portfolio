import React from 'react';
import './App.css';
import {useState} from 'react';

import Navbar from './Navbar';
import Intro from './Intro';
import Education from './Education';
import Experience from './Experience';
import Projects from './Projects';

const App = () => {
  const navLinks = [
    {name: 'Summary', content: <Intro />}, 
    {name: 'Education', content: <Education />}, 
    {name: 'Experience', content: <Experience />},
    {name: 'Projects', content: <Projects />}
  ];
  const [activeLink, setActiveLink] = useState('Summary');
  const content = navLinks.filter(item => (item.name === activeLink))[0].content;

  return (
    <div className="App">
      <nav>
        <Navbar links={navLinks} setActiveLink={setActiveLink} />
      </nav>
      <main>
        {content}
      </main>
    </div>
  )
}

export default App;
