import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: 'fa-github', url: '#', label: 'GitHub' },
    { icon: 'fa-linkedin', url: '#', label: 'LinkedIn' },
    { icon: 'fa-twitter', url: '#', label: 'Twitter' },
    { icon: 'fa-envelope', url: 'mailto:crazytush99@gmail.com', label: 'Email' }
  ];

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3 className="footer-logo">Tushar Dodamani<span className="dot">.</span></h3>
            <p className="footer-description">
              Fullstack Developer passionate about creating amazing web experiences 
              with modern technologies.
            </p>
            <div className="footer-social">
              {socialLinks.map((link, index) => (
                <a 
                  key={index}
                  href={link.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label={link.label}
                >
                  <i className={`fab ${link.icon}`}></i>
                </a>
              ))}
            </div>
          </div>

          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul className="footer-links">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href}>{link.name}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-section">
            <h4>Get In Touch</h4>
            <ul className="footer-contact">
              <li>
                <i className="fas fa-envelope"></i>
                <a href="mailto:crazytush99@gmail.com">crazytush99@gmail.com</a>
              </li>
              <li>
                <i className="fas fa-phone"></i>
                <span>+917249445752</span>
              </li>
              <li>
                <i className="fas fa-map-marker-alt"></i>
                <span>India</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} Tushar Dodamani. All rights reserved.</p>
          <p>Built with <i className="fas fa-heart"></i> using React</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
