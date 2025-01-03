import React from "react";
import "../style/Portfolio.css";

const Portfolio = () => {
  const projectList = [
    {
      title: "Catalog Website",
      description:
        "A catalog website for a fashion store, allowing admins to manage and organize the products being sold.",
      image: "/images/ollnais.png",
      link: "https://github.com/ArifHidayatulloh/WebOllnais",
    },    
    {
      title: "Simpin Website",
      description:
        "A simulation website for a cooperative savings and loan organization, allowing users to calculate loan details.",
      image: "/images/simulasi.png",
      link: "https://todo.kkisyariah.com/simulasi_pinjaman",
    },
    {
      title: "Pawon Website",
      description:
        "A comprehensive website for a cooperative, featuring detailed tracking of income and expense transactions.",
      image: "/images/pawon.png",
      link: "https://github.com/saka-C/koperasi",
    },    
    {
      title: "Operational Website",
      description:
        "An operational website for Kopkar Indocement, featuring a variety of menus and tools to support daily operational activities.",
      image: "/images/kki.png",
      link: "https://operasional.kkisyariah.com/",
    },
  ];

  return (
    <section id="portfolio" className="projects-section">
      <div className="projects-container">
        <h2 className="section-title">Projects</h2>
        <p className="projects-description">
          Here are some of the projects I’ve worked on recently:
        </p>
        <div className="projects-grid">
          {projectList.map((project, index) => (
            <div className="project-card" key={index}>              
              <img
                src={project.image}
                alt={project.title}
                className="project-image"
                />                
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <a href={project.link} className="project-link" target="_blank">
                  View Project
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
