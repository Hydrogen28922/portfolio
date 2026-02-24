import './Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      icon: 'fa-laptop-code',
      skills: [
        { name: 'React', icon: 'fa-react', color: '#61dafb' },
        { name: 'JavaScript', icon: 'fa-js', color: '#f7df1e' },
        { name: 'HTML5', icon: 'fa-html5', color: '#e34f26' },
        { name: 'CSS3', icon: 'fa-css3-alt', color: '#1572b6' },
        { name: 'Next.js', icon: 'fa-react', color: '#000000' }
      ]
    },
    {
      title: 'Backend',
      icon: 'fa-server',
      skills: [
        { name: '.NET', icon: 'fa-microsoft', color: '#512bd4' },
        { name: 'Node.js', icon: 'fa-node-js', color: '#68a063' },
        { name: 'Express.js', icon: 'fa-node', color: '#000000' },
        { name: 'C#', icon: 'fa-code', color: '#239120' }
      ]
    },
    {
      title: 'Cloud & DevOps',
      icon: 'fa-cloud',
      skills: [
        { name: 'Azure', icon: 'fa-microsoft', color: '#0078d4' },
        { name: 'Docker', icon: 'fa-docker', color: '#2496ed' },
        { name: 'Git', icon: 'fa-git-alt', color: '#f05032' },
        { name: 'CI/CD', icon: 'fa-code-branch', color: '#6366f1' }
      ]
    },
    {
      title: 'Database',
      icon: 'fa-database',
      skills: [
        { name: 'MongoDB', icon: 'fa-leaf', color: '#47a248' },
        { name: 'SQL Server', icon: 'fa-database', color: '#cc2927' },
        { name: 'PostgreSQL', icon: 'fa-database', color: '#336791' },
        { name: 'Redis', icon: 'fa-database', color: '#dc382d' }
      ]
    }
  ];

  return (
    <section id="skills" className="skills">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Skills & Technologies</h2>
          <div className="title-underline"></div>
          <p className="section-subtitle">
            Technologies I work with to bring ideas to life
          </p>
        </div>

        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-category">
              <div className="category-header">
                <i className={`fas ${category.icon}`}></i>
                <h3>{category.title}</h3>
              </div>
              <div className="skills-list">
                {category.skills.map((skill, idx) => (
                  <div key={idx} className="skill-item">
                    <i className={`fab ${skill.icon}`} style={{ color: skill.color }}></i>
                    <span>{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
