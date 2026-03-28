import React from "react";
import Typewriter from "typewriter-effect";
import "./AboutPage.css";
import SkillsGlassBoxes from "./SkillsGlassBoxes";
import ExperienceTimeline from "./ExperienceTimeline";

function AboutPage() {

    return (
        <div className="about-container">
            <h1>About Me</h1>
            <div className="terminal">
                <div className="input-bar">
                    <span className="sparkle">✨</span>
                    <span className="typed-text">
                        <Typewriter
                            options={{
                                strings: ["Shristi Gupta"],
                                autoStart: true,
                                loop: true,
                                delay: 100,
                                deleteSpeed: 50,
                                pauseFor: 1500,
                            }}
                        />
                    </span>
                </div>
                <div className="output-box">
                    <p>
                        Passionate full-stack MERN developer and aspiring AI/ML engineer with a strong drive to apply my technical skills and problem-solving abilities to real-world challenges. Committed to building scalable web applications and intelligent systems that foster innovation and create impact. Eager to gain hands-on industry experience, continuously enhance my knowledge, and effectively showcase my communication and presentation skills while contributing to organizational growth.

                    </p>
                </div>

            </div>
            <h2 className="skills-section-title">Skills</h2>
            <SkillsGlassBoxes />
            <ExperienceTimeline />

        </div>
    );
}

export default AboutPage;
