import React, { useState } from "react";
import "./ExperienceTimeline.css";

const educationData = [
  
  {
    title: "Int. MTech Software Engineering",
    institution: "VIT, Vellore",
    date: "Aug 2023 - Jul 2028",
    description: "CGPA: 9.46"
  },
  {
    title: "Class 12 (CBSE)",
    institution: "",
    date: "Mar 2022 - Jun 2023",
    description: "90.2%"
  },
  {
    title: "Class 10 (CBSE)",
    institution: "",
    date: "Mar 2020 - Apr 2021",
    description: "95.8%"
  }
];

const experienceData = [
  {
    title: "Research & Development Intern",
    institution: "DRDO, New Delhi",
    date: "May 2025 – Jun 2025",
    
  },
  {
    title: "Frontend Developer",
    institution: "The BearBone (Startup VIT, Vellore)",
    date: "Jun 2024 – Sep 2024",
    
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
