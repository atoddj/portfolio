import React from 'react';
import './Education.css';

const EducationObj = [
  {
    major: "Software Development",
    institute: "FreeCodeCamp.org",
    year: "2016 — Present",
    description: "Sit amet, consectetur adipiscing elit. Sed porttitor orci ut sapien scelerisque viverra. Sed trist ique justo nec mauris efficitur, ut lacinia elit dapibus. In egestas elit in dap ibus laoreet. Duis magna libero, fermentum ut facilisis id, pulvinar eget tortor. Vestibulum pelle ntesque tincidunt lorem, vitae euismod felis porttitor sed. "
  },
  {
    major: "Business Administration specializing in Computer Science",
    institute: "Bluefield State College",
    year: "2011",
    description: "Sit amet, consectetur adipiscing elit. Sed porttitor orci ut sapien scelerisque viverra. Sed trist ique justo nec mauris efficitur, ut lacinia elit dapibus. In egestas elit in dap ibus laoreet. Duis magna libero, fermentum ut facilisis id, pulvinar eget tortor. Vestibulum pelle ntesque tincidunt lorem, vitae euismod felis porttitor sed. "
  }
]

const Education = () => {

  const educationList = EducationObj.map(i => (
    <li>
      <h3>{i.year}</h3>
      <h4>{i.institute}</h4>
      <h5>{i.major}</h5>
      <p>{i.description}</p>
    </li>
  ));

  return (
    <div className="Education">
      <h2>Education</h2>
      <ul>
        {educationList}
      </ul>
    </div>
  )
}

export default Education;