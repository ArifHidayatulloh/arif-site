import React from "react";
import "../style/Experience.css";

const Experience = () => {
  return (    
    <section id="experience" className="experience-section">
      <div className="experience-container">
        <h2 className="section-title">Experience</h2>
        <div className="timeline">
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <h3>Full-stack Developer</h3>
              <span className="timeline-date">Jul 2024 - Present | Bogor, West Java, Indonesia</span>
              <p>
                Develop and maintain company software based on business needs while managing company data efficiently.
              </p>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <h3>IT Support Technician</h3>
              <span className="timeline-date">Jul 2024 - Present | Bogor, West Java, Indonesia</span>
              <p>
                Provide troubleshooting support for hardware, networking, and software issues within the organization.
              </p>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <h3>Freelance Web Developer</h3>
              <span className="timeline-date">Nov 2023 - Present | Remote</span>
              <p>
                Design and develop websites tailored to client needs, ensuring functionality and user-friendly features.
              </p>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <h3>Website Developer (Internship)</h3>
              <span className="timeline-date">Jul 2023 - Oct 2023 | Depok, West Java, Indonesia</span>
              <p>
                Built and developed websites integrated with APIs for seamless data communication.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
