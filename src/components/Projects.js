import './Projects.css';

const Projects = () => {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce solution with React, .NET Core, and Azure. Features include product management, shopping cart, payment integration, and admin dashboard.',
      tech: ['React', '.NET Core', 'Azure', 'SQL Server'],
      icon: 'fa-shopping-cart',
      gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
    },
    {
      title: 'Analytics Dashboard',
      description: 'Real-time analytics dashboard built with MERN stack. Visualizes complex data with interactive charts and provides actionable insights.',
      tech: ['MongoDB', 'Express', 'React', 'Node.js'],
      icon: 'fa-chart-line',
      gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)'
    },
    {
      title: 'Task Management System',
      description: 'Collaborative task management application with real-time updates. Built with React, Node.js, and MongoDB with Azure deployment.',
      tech: ['React', 'Node.js', 'MongoDB', 'Socket.io'],
      icon: 'fa-tasks',
      gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)'
    },
    {
      title: 'Social Media API',
      description: 'RESTful API for social media platform with authentication, posts, comments, and real-time notifications. Built with .NET and Azure.',
      tech: ['.NET', 'Azure', 'Redis', 'PostgreSQL'],
      icon: 'fa-users',
      gradient: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)'
    },
    {
      title: 'Cloud Storage Service',
      description: 'Secure cloud storage solution with file encryption, sharing capabilities, and Azure Blob Storage integration.',
      tech: ['React', '.NET', 'Azure Blob', 'Redis'],
      icon: 'fa-cloud-upload-alt',
      gradient: 'linear-gradient(135deg, #30cfd0 0%, #330867 100%)'
    },
    {
      title: 'Real-time Chat App',
      description: 'WebSocket-based chat application with group chats, file sharing, and message encryption using MERN stack.',
      tech: ['MongoDB', 'Express', 'React', 'Socket.io'],
      icon: 'fa-comments',
      gradient: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)'
    }
  ];

  return (
    <section id="projects" className="projects">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Featured Projects</h2>
          <div className="title-underline"></div>
          <p className="section-subtitle">
            Some of my recent work that showcases my skills
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-icon" style={{ background: project.gradient }}>
                <i className={`fas ${project.icon}`}></i>
              </div>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="tech-stack">
                {project.tech.map((tech, idx) => (
                  <span key={idx} className="tech-tag">{tech}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
