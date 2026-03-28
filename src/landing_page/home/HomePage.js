import React from "react";
import "./HomePage.css";
import profilePic from "./logo192.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import AboutPage from "../about/AboutPage";
import ProjectsPage from "../projects/ProjectsPage";

function HomePage() {
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="text">
          <h1>Shristi<br/>Full Stack MERN Developer</h1>
          <p>
            I'm a dedicated aspiring Full Stack MERN developer with a strong desire to leverage my skills, knowledge, and enthusiasm for technology.
          </p>
          <div className="social-icons">
            <a
              href="https://github.com/shristiigupta"
              target="_blank"
              rel="noopener noreferrer"
              className="icon"
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a
              href="https://www.linkedin.com/in/gupta-shristi/"
              target="_blank"
              rel="noopener noreferrer"
              className="icon"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>            
          </div>
          <div className="download-container">
              <a href="/docs/cv_shristi.pdf" download className="download-btn">
                    Download CV
            </a>
          </div>
        </div>

        <div className="image">
          <img src={profilePic} alt="Shristi" />
        </div>

        
      </div>

      <AboutPage />
      <ProjectsPage />
      
    </section>
  );
}

export default HomePage;
