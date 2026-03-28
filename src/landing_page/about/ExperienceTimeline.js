import React, { useState } from "react";
import "./ExperienceTimeline.css";

const educationData = [
  {
    title: "M.Tech CSE",
    institution: "IIIT, Bangalore",
    date: "July 2025 - Jul 2027"
  },
  {
    title: "B.Tech CSE",
    institution: "VIT, Vellore",
    date: "Sep 2021 - Jul 2025",
    description: "CGPA: 9.73"
  },
  {
    title: "Class 12 (CBSE)",
    institution: "",
    date: "Mar 2020 - Jun 2021",
    description: "97.6%"
  },
  {
    title: "Class 10 (CBSE)",
    institution: "",
    date: "Mar 2018 - Apr 2019",
    description: "97.8%"
  }
];

const experienceData = [
  {
    title: "Analyst Intern",
    institution: "Bain & Company, Bangalore, Karnataka",
    date: "Jan 2025 – July 2025",
    
  },
  {
    title: "Research Intern",
    institution: "DRDO, New Delhi",
    date: "June 2024 – Aug 2024",
    
  },
  {
    title: "Student Research Intern (PRISM)",
    institution: "Samsung R&D Institute India, Bangalore",
    date: "Dec 2023 – Apr. 2024",
    
  },
  {
    title: "Computer Vision Intern",
    institution: "Immertivity (Stealth Start-up), Bangalore",
    date: "Sep. 2023 – Nov. 2023",
  }
];

export default function ExperienceTimeline() {
  const [activeTab, setActiveTab] = useState("experience");
  const data = activeTab === "education" ? educationData : experienceData;

  return (
    <section className="timeline-section">
      <h2 className="timeline-title">Experience & Education</h2>
      <div className="timeline-tabs">
        <button
          className={`timeline-tab ${activeTab === "experience" ? "active" : ""}`}
          onClick={() => setActiveTab("experience")}
        >
          <span className="timeline-tab-label" style={{ color: "#fff" }}>
            Experience
          </span>
        </button>
        <button
          className={`timeline-tab ${activeTab === "education" ? "active" : ""}`}
          onClick={() => setActiveTab("education")}
        >
          <span className="timeline-tab-label" style={{ color: "#fff" }}>
            Education
          </span>
        </button>
      </div>
      <div className="timeline-container">
        <div className="timeline-line" />
        {data.map((item, idx) => (
          <div className={`timeline-item ${idx % 2 === 0 ? "timeline-item-left" : "timeline-item-right"}`} key={idx}>
            <div className="timeline-dot" />
            <div className="timeline-card">
              <h4>
                <span className="timeline-degree">{item.title}</span>
              </h4>
              {item.institution && <div className="timeline-institution">{item.institution}</div>}
              <div className="timeline-date">
                <i className="fa-regular fa-calendar"></i> {item.date}
              </div>
              {item.description && <div className="timeline-desc">{item.description}</div>}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
