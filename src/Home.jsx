
import React from 'react'
import "./home.css"

const Home = () => {
  return (
    <div className="home">

      
      <nav className="navbar">
        <h2 className="logo">Nithin<span>.</span></h2>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

     
      <section className="hero" id="home">

        <div className="hero-content">
          <p className="small-text">HELLO, I'M</p>

          <h1>
            Nithin <span>M</span>
          </h1>

          <h2>Frontend Developer</h2>

          <p className="description">
            I create modern, responsive and user-friendly websites
            using HTML, CSS, JavaScript and React.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="btn primary-btn">
              View My Work
            </a>

            <a href="#contact" className="btn secondary-btn">
              Contact Me
            </a>
          </div>
        </div>

        <div className="hero-image">
          <div className="image-circle">
            <div className="code-icon">&lt;/&gt;</div>
          </div>
        </div>

      </section>

      
      <section className="about" id="about">
        <p className="section-title">ABOUT ME</p>
        <h2>Turning ideas into <span>web experiences.</span></h2>

        <p>
          I'm a Computer Engineering graduate and aspiring frontend
          developer who enjoys building clean and interactive websites.
          I'm currently improving my skills in React and modern web
          development.
        </p>
      </section>

      
      <section className="skills" id="skills">
        <p className="section-title">MY SKILLS</p>
        <h2>Technologies I <span>work with</span></h2>

        <div className="skill-container">
          <div className="skill-card">HTML</div>
          <div className="skill-card">CSS</div>
          <div className="skill-card">JavaScript</div>
          <div className="skill-card">React</div>
          <div className="skill-card">Bootstrap</div>
          <div className="skill-card">Git</div>
        </div>
      </section>

      
      <section className="projects" id="projects">
        <p className="section-title">MY WORK</p>
        <h2>Recent <span>Projects</span></h2>

        <div className="project-container">

          <div className="project-card">
            <div className="project-number">01</div>
            <h3>Movie Finder</h3>
            <p>
              A movie search website built using JavaScript and API
              integration.
            </p>
            <a href="#">View Project →</a>
          </div>

          <div className="project-card">
            <div className="project-number">02</div>
            <h3>Product Store</h3>
            <p>
              A responsive product website using JavaScript,
              Bootstrap and API data.
            </p>
            <a href="#">View Project →</a>
          </div>

          <div className="project-card">
            <div className="project-number">03</div>
            <h3>React Portfolio</h3>
            <p>
              A modern portfolio website created using React and CSS.
            </p>
            <a href="#">View Project →</a>
          </div>

        </div>
      </section>

 
      <section className="contact" id="contact">
        <p className="section-title">CONTACT</p>
        <h2>Let's work <span>together.</span></h2>

        <p>
          Have a project or opportunity? Feel free to get in touch.
        </p>

        <a href="mailto:yourmail@gmail.com" className="contact-btn">
          Get In Touch
        </a>
      </section>

      
      <footer>
        <p>© 2026 Nithin M. All Rights Reserved.</p>
      </footer>

    </div>
  )
}

export default Home
