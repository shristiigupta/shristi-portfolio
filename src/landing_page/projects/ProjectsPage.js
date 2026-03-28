import React, { useState } from "react";
import "./ProjectsPage.css";

const projects = [
  {
    icon: "fa-person",
    title: "LexiGuess",
    desc: "Decision tree classifier model developed using Python to play the game of Hangman.",
    link: "https://github.com/SHREYA-1103/LexiGuess/tree/main"
  },
  {
    icon: "fa-brain",
    title: "Brain Tumor Classification Model (in pipeline)",
    desc: "Four class brain tumor classification (pituitary, glioma, meningioma and notumor) models developed using VGG16, VGG19, DenseNet120 and MobileNetV2 architectures."
  },
  {
    icon: "fa-film",
    title: "CineFlix",
    desc: "TMDB API-based movie recommender using Scikit-learn, PyTorch, SciPy, Pickle, etc.",
    link: "https://github.com/SHREYA-1103/Movie-Recommender-System/tree/main"
  },
  {
    icon: "fa-whatsapp",
    title: "ChatSense",
    desc: "Statistical analysis & visualization tool for WhatsApp chats using NumPy, Pandas, PyTorch, etc.",
    link: "https://github.com/SHREYA-1103/WhatsApp-Chat-Analyzer"
  },
  {
    icon: "fa-python",
    title: "VisionVortex",
    desc: "YOLO-based Python app using OpenCV, Scikit-image & Pillow for object detection with validations.",
    link: "https://github.com/SHREYA-1103/object-detection"
  },
  {
    icon: "fa-cake-candles",
    title: "EventMailer",
    desc: "SMTP-based app to send birthday invites from CSV data.",
    link: "https://github.com/SHREYA-1103/birthday-manager"
  },
  {
    icon: "fa-virus",
    title: "SDPV",
    desc: `Idea: Self-Destructing Phage Vaccination (SDPV) for treating viral diseases.\n🏆 2nd place @ BIOGEN Ideation Challenge, IIT Madras`,
    link: "https://drive.google.com/file/d/10s8hL7lIAaeEE1Ct92IP0tCxryNDe9GV/view"
  },
  {
    icon: "fa-cake-candles",
    title: "UNIFSTER",
    desc: `Device to treat healthcare metallic waste, alternative to incinerators.\n🏆 1st place @ BHOOMI Hackathon, VIT (sponsored by Cambrionics Life Sciences)`,
    link: "https://drive.google.com/file/d/1WjOcC8JSXssnxl6hHCXJrOxyww5PNPXg/view"
  },
  {
    icon: "fa-r",
    title: "InsightfulX",
    desc: "R language code for statistical data analysis using regression, hypothesis testing, etc.",
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
