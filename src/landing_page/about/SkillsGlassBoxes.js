import React , { useState } from "react";
import "./SkillsGlassBoxes.css";

const skillsGroups = [
  {
    label: "Course Work",
    icons: [
      "/icons/dsa.png", "/icons/dbms.png", "/icons/oop.png", "/icons/security.jpg"
    ]
  },
  {
    label: "Programming Languages",
    icons: [
      "/icons/python.png", "/icons/java.png", "/icons/r.png", "/icons/cpp.png", "/icons/c.png", "/icons/matlab.jpeg"
    ]
  },
  {
    label: "Data Structures and Object-Oriented Programming",
    icons: [
      "/icons/java.png", "/icons/cpp.png"
    ]
  },
  {
    label: "Machine Learning Frameworks",
    icons: [
      "/icons/tf.png", "/icons/pytorch.webp", "/icons/scikit.png", "/icons/keras.png", "/icons/scipy.png", "/icons/pickle.png"
    ]
  },
  {
    label: "Convolutional Neural Network (CNN) Models",
    icons: [
      "/icons/vgg.avif", "/icons/densenet.svg", "/icons/mobilenet.svg"
    ]
  },
  {
    label: "Image Processing",
    icons: [
      "/icons/pillow.png", "/icons/opencv.svg", "/icons/scikit.png", "/icons/scipy.png", "/icons/simpleitk.png"
    ]
  },
  {
    label: "Object Detection Models",
    icons: [
      "/icons/yolo.png"
    ]
  },
  {
    label: "Data Analysis and visualization",
    icons: [
      "/icons/pandas.png", "/icons/numpy.png", "/icons/matplotlib.Png", "/icons/seaborn.svg", "/icons/r.png"
    ]
  },
  {
    label: "Full Stack Web Dev",
    icons: [
      "/icons/HTML5.png", "/icons/css3.png", "/icons/Bootstrap.jpeg", "/icons/django.png", "/icons/flask.png", "/icons/streamlit.png", "/icons/mysql.png"
    ]
  },
  {
    label: "Databases",
    icons: [
      "/icons/sql.png", "/icons/mysql.png"
    ]
  },
  {
    label: "Development Tools",
    icons: [
      "/icons/vscode.png", "/icons/jupyternb.png"
    ]
  },
  
  {
    label: "Networking and Security tools",
    icons: [
      "/icons/cpt.png", "/icons/wireshark.png", "/icons/johntheripper.png", "/icons/ngrok.png", "/icons/steghide.png"
    ]
  }
];

export default function SkillsGlassCarousel() {
  const [current, setCurrent] = useState(0);
  const total = skillsGroups.length;
  const [isSliding, setIsSliding] = useState(false);

  const goLeft = () => { 
    if (isSliding) return;
    setIsSliding(true);
    setTimeout(() => setIsSliding(false), 360);
    setCurrent(c => (c - 1 + total) % total);
  };
  const goRight = () => {
    if (isSliding) return;
    setIsSliding(true);
    setTimeout(() => setIsSliding(false), 360);
    setCurrent(c => (c + 1) % total);
  };

  return (
    <div className="skills-glass-carousel-root">
      <button
        className="glass-carousel-arrow left"
        onClick={goLeft}
        aria-label="Previous"
      >

        <svg width="28" height="28" fill="none"><path d="M18 4l-8 10 8 10" stroke="url(#leftArrow)" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round"/><defs><linearGradient id="leftArrow" x1="0" y1="0" x2="27" y2="27" gradientUnits="userSpaceOnUse"><stop stopColor="#3A8DFF"/><stop offset="1" stopColor="#9259F8"/></linearGradient></defs></svg>
      </button>
      <div className="glass-carousel-track">
        <div className={`glass-box carousel-box carousel-animated${isSliding ? " sliding" : ""}`}>
          <div className="glass-box-title">{skillsGroups[current].label}</div>
          <div className="icon-row">
            {skillsGroups[current].icons.map((icon, j) => (
              <img
                key={j}
                src={icon}
                alt=""
                className="skill-icon"
                draggable={false}
              />
            ))}
          </div>
        </div>
        <div className="carousel-dots">
          {skillsGroups.map((_, i) => (
            <span
              key={i}
              className={`carousel-dot${i === current ? " active" : ""}`}
              onClick={() => {if(!isSliding) setCurrent(i);}}
              style={{
                background: i === current 
                  ? 'linear-gradient(93deg, #3A8DFF 40%, #9259F8 99%)'
                  : undefined,
                boxShadow: i === current 
                  ? '0 0 14px 1px #3A8DFF33, 0 3px 16px #3519f820'
                  : undefined
              }}
            ></span>
          ))}
        </div>
      </div>
      <button
        className="glass-carousel-arrow right"
        onClick={goRight}
        aria-label="Next"
      >
        {/* SVG arrow for custom look */}
        <svg width="28" height="28" fill="none"><path d="M10 4l8 10-8 10" stroke="url(#rightArrow)" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round"/><defs><linearGradient id="rightArrow" x1="0" y1="0" x2="28" y2="28" gradientUnits="userSpaceOnUse"><stop stopColor="#3A8DFF"/><stop offset="1" stopColor="#9259F8"/></linearGradient></defs></svg>
      </button>
    </div>
  );
}