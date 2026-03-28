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
          <h1>Shreya<br />AI/ML Engineer</h1>
          <p>
            I'm a dedicated aspiring AI/ML developer with a strong desire to leverage my skills, knowledge, and enthusiasm for technology.
          </p>
          <div className="social-icons">
            <a
              href="https://github.com/SHREYA-1103"
              target="_blank"
              rel="noopener noreferrer"
              className="icon"
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a
              href="https://www.linkedin.com/in/shreya-gupta-7a641b235/"
              target="_blank"
              rel="noopener noreferrer"
              className="icon"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>            
          </div>
          <div className="download-container">
              <a href="/docs/shreya_cv.pdf" download className="download-btn">
                    Download CV
            </a>
          </div>
        </div>

        <div className="image">
          <img src={profilePic} alt="Shreya" />
        </div>

        
      </div>

      <AboutPage />
      <ProjectsPage />
      
    </section>
  );
}

export default HomePage;
