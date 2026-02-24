import { useState } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('');

    // EmailJS configuration
    // Replace these with your actual EmailJS credentials
    const serviceID = 'service_6dpkg7n';
    const templateID = 'template_baqvkge';
    const publicKey = 'b4NlXz4ClXlS_-Aq4';

    emailjs.send(serviceID, templateID, {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,
      to_name: 'Tushar Dodamani',
    }, publicKey)
    .then(() => {
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
      alert('Thank you! Your message has been sent successfully. I will get back to you soon.');
    })
    .catch((error) => {
      console.error('EmailJS Error:', error);
      setSubmitStatus('error');
      alert('Oops! Something went wrong. Please try again or email me directly.');
    })
    .finally(() => {
      setIsSubmitting(false);
    });
  };

  const contactInfo = [
    {
      icon: 'fa-envelope',
      title: 'Email',
      value: 'crazytush99@gmail.com',
      link: 'mailto:crazytush99@gmail.com'
    },
    {
      icon: 'fa-phone',
      title: 'Phone',
      value: '+91 7249445752',
      link: 'tel:+91 7249445752'
    },
    {
      icon: 'fa-map-marker-alt',
      title: 'Location',
      value: 'India',
      link: '#'
    }
  ];

  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Get In Touch</h2>
          <div className="title-underline"></div>
          <p className="section-subtitle">
            Have a project in mind? Let's work together!
          </p>
        </div>

        <div className="contact-content">
          <div className="contact-info">
            {contactInfo.map((info, index) => (
              <a key={index} href={info.link} className="info-card">
                <div className="info-icon">
                  <i className={`fas ${info.icon}`}></i>
                </div>
                <div className="info-text">
                  <h4>{info.title}</h4>
                  <p>{info.value}</p>
                </div>
              </a>
            ))}
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <textarea
                name="message"
                placeholder="Your Message"
                rows="6"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button type="submit" className="submit-btn" disabled={isSubmitting}>
              <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
              <i className="fas fa-paper-plane"></i>
            </button>
            {submitStatus === 'success' && (
              <p style={{ color: 'var(--primary)', marginTop: '1rem', textAlign: 'center' }}>
                Message sent successfully! ✓
              </p>
            )}
            {submitStatus === 'error' && (
              <p style={{ color: '#ef4444', marginTop: '1rem', textAlign: 'center' }}>
                Failed to send. Please try again.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
