import React from "react";
import "../style/Header.css";

const Header = () => {
  return (
    <header className="header-container">
      <nav className="navbar">
        <ul className="nav-links">
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#portfolio">Projects</a>
          </li>
          <li>
            <a href="#experience">Experience</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
      <div className="header-content">
        <h1 className="main-title">Arif Hidayatulloh</h1>
        <p className="sub-title">Web Developer</p>
        <a href="#portfolio" className="cta-button">
          View My Work
        </a>
      </div>
    </header>
  );
};

export default Header;
