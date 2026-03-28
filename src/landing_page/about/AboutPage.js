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
                                strings: ["Shreya"],
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
                        Passionate and dedicated aspiring AI/ML developer with a strong desire
                        to leverage my skills, knowledge, and enthusiasm for technology.
                        Committed to contributing to the company's mission of fostering
                        innovation by developing real-world projects. Seeking to gain valuable
                        real-world experience to further enhance my skills while showcasing
                        communication and presentation abilities.
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
