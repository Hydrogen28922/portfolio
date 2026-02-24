import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-text">
            <span className="greeting">Hi, I'm</span>
            <h1 className="name">Tushar Dodamani</h1>
            <h2 className="title">Fullstack Developer</h2>
            <p className="description">
              Crafting scalable web applications with .NET, React, and Azure Cloud
            </p>
            <div className="hero-buttons">
              <a href="#projects" className="btn btn-primary">
                View My Work
              </a>
              <a href="#contact" className="btn btn-secondary">
                Get In Touch
              </a>
            </div>
            <div className="social-links">
              <a href="https://github.com/tushar" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-github"></i>
              </a>
              <a href="https://linkedin.com/in/tushar" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="https://twitter.com/tushar" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-twitter"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="hero-image">
          <div className="image-container">
            <div className="profile-pic">
              <img src="/tushar-photo.jpg" alt="Tushar Dodamani" />
            </div>
            <div className="floating-tech">
              <div className="tech-icon tech-1">
                <i className="fab fa-react"></i>
              </div>
              <div className="tech-icon tech-2">
                <i className="fab fa-microsoft"></i>
              </div>
              <div className="tech-icon tech-3">
                <i className="fab fa-js"></i>
              </div>
              <div className="tech-icon tech-4">
                <i className="fab fa-node-js"></i>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="scroll-indicator">
        <div className="mouse"></div>
      </div>
    </section>
  );
};

export default Hero;
