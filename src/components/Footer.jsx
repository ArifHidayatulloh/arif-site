import React from "react";
import "../style/Footer.css";

const Footer = () => {
  return (    
    <footer className="footer-section">
      <div className="footer-container">
        <p className="footer-text">© {new Date().getFullYear()} Arif Hidayatulloh. All Rights Reserved.</p>
        <div className="footer-socials">
          <a href="https://github.com/ArifHidayatulloh/" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github"></i>
          </a>
          <a href="https://www.linkedin.com/in/arif-hidayatulloh-251834301/" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="https://www.instagram.com/arifhidayat_05/" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
