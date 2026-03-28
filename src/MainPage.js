import React, { useRef } from "react";
import Navbar from "./landing_page/Navbar";
import HomePage from "./landing_page/home/HomePage";
import AboutPage from "./landing_page/about/AboutPage";
import ProjectsPage from "./landing_page/projects/ProjectsPage";
import AchievementsPage from "./landing_page/achievements/AchievementsPage";
import Footer from "./landing_page/Footer";

// Each section will have a ref for scrolling
export default function MainPage() {
  // You can use one ref object or an object of refs
  const refs = {
    home: useRef(null),
    about: useRef(null),
    projects: useRef(null),
    achievements: useRef(null),
    contact: useRef(null),
  };

  return (
    <>
      <Navbar refs={refs} />
      <div ref={refs.home} id="home"><HomePage /></div>
      <div ref={refs.about} id="about"><AboutPage /></div>
      <div ref={refs.projects} id="projects"><ProjectsPage /></div>
      <div ref={refs.achievements} id="achievements"><AchievementsPage /></div>
      {/* If you have a Contact section/component, include here */}
      <div ref={refs.contact} id="contact"><Footer /></div>
    </>
  );
}
