import React from 'react';
import './Experience.css';

const ExperienceObj = [
  {
    title: "Web Developer",
    company: "CGI Federal",
    startDate: "February 2016",
    endDate: "August 2019",
    description: "Sit amet, consectetur adipiscing elit. Sed porttitor orci ut sapien scelerisque viverra. Sed trist ique justo nec mauris efficitur, ut lacinia elit dapibus. In egestas elit in dap ibus laoreet. Duis magna libero, fermentum ut facilisis id, pulvinar eget tortor. Vestibulum pelle ntesque tincidunt lorem, vitae euismod felis porttitor sed. "
  },
  {
    title: "Systems Administrator",
    company: "Specialists on Call",
    startDate: "July 2015",
    endDate: "February 2016",
    description: "Sit amet, consectetur adipiscing elit. Sed porttitor orci ut sapien scelerisque viverra. Sed trist ique justo nec mauris efficitur, ut lacinia elit dapibus. In egestas elit in dap ibus laoreet. Duis magna libero, fermentum ut facilisis id, pulvinar eget tortor. Vestibulum pelle ntesque tincidunt lorem, vitae euismod felis porttitor sed. "
  },
  {
    title: "Quality Analyst",
    company: "CGI Federal",
    startDate: "September 2012",
    endDate: "July 2015",
    description: "Sit amet, consectetur adipiscing elit. Sed porttitor orci ut sapien scelerisque viverra. Sed trist ique justo nec mauris efficitur, ut lacinia elit dapibus. In egestas elit in dap ibus laoreet. Duis magna libero, fermentum ut facilisis id, pulvinar eget tortor. Vestibulum pelle ntesque tincidunt lorem, vitae euismod felis porttitor sed. "
  }
]

const Experience = () => {

  const experienceList = ExperienceObj.map(i => (
    <li>
      <h3>{i.startDate} — {i.endDate}</h3>
      <h4>{i.title}</h4>
      <h5>{i.company}</h5>
      <p>{i.description}</p>
    </li>
  ));

  return (
    <div className="Experience">
      <h2>Experience</h2>
      <ul>
        {experienceList}
      </ul>
    </div>
  )
}

export default Experience;