import React from "react";
import "./Footer.css";

const socials = [
  { icon: "fa-brands fa-linkedin-in", url: "https://www.linkedin.com/in/gupta-shristi/" },
  { icon: "fa-brands fa-github", url: "https://github.com/shristiigupta" }
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
            9205222406
          </span>
          <span>
            <i className="fa-solid fa-envelope"></i>
            shristi.gupta.406@gmail.com
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
        © Copyright 2025 Made by Shristi
      </div>
    </footer>
  );
}
