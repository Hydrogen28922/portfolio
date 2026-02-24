import './About.css';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">About Me</h2>
          <div className="title-underline"></div>
        </div>
        
        <div className="about-content">
          <div className="about-text">
            <p className="lead">
              I'm a passionate Fullstack Developer with 4 years of experience building 
              robust and scalable web applications.
            </p>
            <p>
              My expertise lies in creating end-to-end solutions using modern technologies 
              like .NET, React, and Azure Cloud. I specialize in the MERN stack (MongoDB, 
              Express.js, React, Node.js) and have a strong foundation in cloud architecture.
            </p>
            <p>
              I believe in writing clean, maintainable code and following best practices. 
              My goal is to create applications that not only meet business requirements 
              but also provide exceptional user experiences.
            </p>
            
            <div className="about-stats">
              <div className="stat">
                <h3>4+</h3>
                <p>Years Experience</p>
              </div>
              <div className="stat">
                <h3>15+</h3>
                <p>Projects Completed</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
