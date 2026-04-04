import React, { useState } from "react";
import "./ProjectsPage.css";

const projects = [

  {
    icon: "fa-car",
    title: "Autonomous Vehicle Simulation (DRDO)",
    desc: `Developed an autonomous vehicle simulation in CARLA using Python with dynamic weather, traffic, and obstacle avoidance.
Engineered realistic traffic behavior and environmental variability for diverse scenario evaluation.
Analyzed vehicle performance under varying conditions to assess robustness and reliability.`,
  },
  {
    icon: "fa-chart-line",
    title: "Zerodha Clone",
    desc: `Developed a full-stack trading platform using MongoDB, Express.js, React.js, and Node.js, replicating real-world stock trading functionalities.
Implemented JWT-based authentication for secure user login and session management.
Integrated Chart.js/D3.js for dynamic stock visualization and Redux Toolkit for efficient state management.`,
    link: "https://zerodha-clonee.netlify.app/"
  },
  {
    icon: "fa-leaf",
    title: "Plant Disease Detection",
    desc: `Built a CNN model trained on approximately 87,000 images to classify plant diseases across multiple species.
Achieved 95% classification accuracy using preprocessing, augmentation, and model optimization techniques.
Visualized training metrics and evaluated performance for improved reliability and generalization.`,
  }
];

export default function ProjectsPage() {
  const [current, setCurrent] = useState(0);

  const goLeft = () =>
    setCurrent((idx) => (idx === 0 ? projects.length - 1 : idx - 1));
  const goRight = () =>
    setCurrent((idx) => (idx === projects.length - 1 ? 0 : idx + 1));

  return (
    <section className="projects-section" id="projects">
      <h1 className="projects-title">My Projects</h1>
      <div className="project-carousel-wrapper">
        <button className="carousel-arrow left" onClick={goLeft} aria-label="Previous">
          <svg width="31" height="31"><path d="M18 4l-8 11 8 11" stroke="url(#leftProj)" strokeWidth="3.4" strokeLinecap="round" strokeLinejoin="round"/><defs><linearGradient id="leftProj" x1="0" y1="0" x2="27" y2="27" gradientUnits="userSpaceOnUse"><stop stopColor="#3A8DFF"/><stop offset="1" stopColor="#9259F8"/></linearGradient></defs></svg>
        </button>
        <div className="project-glass-box">
          <div className="project-glass-content">
            <div className="project-glass-icon">
              <i className={`fa-solid ${projects[current].icon}`}></i>
            </div>
            <div className="project-glass-details">
              <h2>{projects[current].title}</h2>
              <p>{projects[current].desc}</p>
              {projects[current].link && (
                <a 
                  href={projects[current].link}
                  className="glass-btn"
                  target="_blank"
                  rel="noopener noreferrer"
                >Learn more</a>
              )}
            </div>
          </div>
        </div>
        <button className="carousel-arrow right" onClick={goRight} aria-label="Next">
          <svg width="31" height="31"><path d="M13 4l8 11-8 11" stroke="url(#rightProj)" strokeWidth="3.4" strokeLinecap="round" strokeLinejoin="round"/><defs><linearGradient id="rightProj" x1="0" y1="0" x2="31" y2="31" gradientUnits="userSpaceOnUse"><stop stopColor="#3A8DFF"/><stop offset="1" stopColor="#9259F8"/></linearGradient></defs></svg>
        </button>
      </div>
      <div className="carousel-dots">
        {projects.map((_, i) => (
          <span
            key={i}
            className={`carousel-dot${i === current ? ' active' : ''}`}
            onClick={() => setCurrent(i)}
          />
        ))}
      </div>
    </section>
  );
}
