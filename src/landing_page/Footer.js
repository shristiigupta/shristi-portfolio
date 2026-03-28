import React from "react";
import "./Footer.css";

const socials = [
  { icon: "fa-brands fa-linkedin-in", url: "https://www.linkedin.com/in/shreya-gupta-7a641b235/" },
  { icon: "fa-brands fa-github", url: "https://github.com/SHREYA-1103" }
];

export default function Footer() {
  return (
    <footer className="glass-footer">
      <div className="footer-social">
        <span className="footer-follow">Follow me at :</span>
        <div className="social-icons">
          {socials.map((item, idx) => (
            <a key={idx} href={item.url} target="_blank" rel="noopener noreferrer">
              <i className={item.icon}></i>
            </a>
          ))}
        </div>
      </div>
      <div className="footer-center">
        <div className="footer-contact">
          <span>
            <i className="fa-solid fa-phone"></i>
            9871800624
          </span>
          <span>
            <i className="fa-solid fa-envelope"></i>
            shreya.gupta.0624@gmail.com
          </span>
        </div>
      </div>

      <a href="https://leetcode.com/shristi-gupta" target="_blank" rel="noopener noreferrer">
        Leetcode
      </a>

      <a href="https://www.hackerrank.com/shristi-gupta" target="_blank" rel="noopener noreferrer">
        HackerRank
      </a>

      <div className="footer-copyright">
        © Copyright 2025 Made by Shreya
      </div>
    </footer>
  );
}
