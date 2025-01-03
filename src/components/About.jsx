import React from "react";
import "../style/About.css";

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <h2 className="section-title">About Me</h2>
        <div className="description">
          <p className="about-description">
            Hello! I'm <strong>Arif Hidayatulloh</strong>, a passionate web
            developer with extensive experience in creating dynamic,
            user-friendly websites and web applications. I specialize in
            building modern, scalable applications using
            <strong> Laravel</strong>, and I take pride in writing clean,
            efficient, and maintainable code. Over the years, I have worked on a
            variety of projects, from small websites to complex systems, always
            aiming to deliver high-quality solutions. My focus is on crafting
            seamless user experiences and ensuring that the backend is robust
            and efficient.
          </p>
        </div>
        <div className="about-details">
          <div className="about-card">
            <h3>Experience</h3>
            <p>2+ years in web development</p>
          </div>
          <div className="about-card">
            <h3>Expertise</h3>
            <p>Laravel, C#, React, JavaScript</p>
          </div>
          <div className="about-card">
            <h3>Hobbies</h3>
            <p>Coding, Music, Gaming</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
