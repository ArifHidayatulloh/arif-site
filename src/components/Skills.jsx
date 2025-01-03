import React from "react";
import "../style/Skills.css";

const Skills = () => {
  return (
    <section id="skills" className="skills-section">
      <div className="skills-container">
        <h2 className="section-title">Skills</h2>
        <p className="skills-description">
          Below are some of the technologies and tools I have expertise in:
        </p>
        <div className="skill-list">
          <div className="skills-grid">
            <div className="skill-card">
              <i className="fab fa-laravel"></i>
              <h3>Laravel</h3>
            </div>
            <div className="skill-card">
              <i className="fab fa-js"></i>
              <h3>JavaScript</h3>
            </div>
            <div className="skill-card">
              <i className="fab fa-react"></i>
              <h3>React</h3>
            </div>
            <div className="skill-card">
              <i className="fab fa-bootstrap"></i>
              <h3>Bootstrap</h3>
            </div>
            <div className="skill-card">
              <i className="fab fa-git-alt"></i>
              <h3>Git</h3>
            </div>
            <div className="skill-card">
              <i className="fab fa-html5"></i>
              <h3>HTML5</h3>
            </div>
            <div className="skill-card">
              <i className="fab fa-css3-alt"></i>
              <h3>CSS3</h3>
            </div>
            <div className="skill-card">
              <i class="bx bxl-tailwind-css"></i>
              <h3>Tailwind</h3>
            </div>
            <div className="skill-card">
              <i className="fab fa-microsoft"></i>              
              <h3>C#</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
