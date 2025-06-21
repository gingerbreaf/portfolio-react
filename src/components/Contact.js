import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const contactInfo = [
    {
      icon: <FaEnvelope />,
      label: "Email",
      value: "boweij@u.nus.edu",
      link: "mailto:boweij@u.nus.edu",
      type: "email"
    }
  ];

  const socialLinks = [
    {
      icon: <FaLinkedin />,
      label: "LinkedIn",
      url: "https://www.linkedin.com/in/bowei-jiang-b8b02622b",
      color: "#0077b5"
    },
    {
      icon: <FaGithub />,
      label: "GitHub",
      url: "https://github.com/gingerbreaf",
      color: "#333"
    }
  ];

  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.h2 className="section-title" variants={itemVariants}>
            Get In Touch
          </motion.h2>
          
          <div className="contact-content">
            <motion.div className="contact-info" variants={itemVariants}>
              <h3>Let's Connect!</h3>
              <p>
                I'm always open to discussing new opportunities, interesting projects, 
                or just having a chat about technology and software development.
              </p>
              
              <div className="contact-details">
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={index}
                    href={info.link}
                    className="contact-item"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <div className="contact-icon">
                      {info.icon}
                    </div>
                    <div className="contact-text">
                      <span className="contact-label">{info.label}</span>
                      <span className="contact-value">{info.value}</span>
                    </div>
                  </motion.a>
                ))}
              </div>
            </motion.div>
            
            <motion.div className="social-links" variants={itemVariants}>
              <h3>Follow Me</h3>
              <div className="social-grid">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    className="social-item"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ 
                      scale: 1.1,
                      y: -5
                    }}
                    whileTap={{ scale: 0.95 }}
                    style={{ '--social-color': social.color }}
                  >
                    <div className="social-icon">
                      {social.icon}
                    </div>
                    <span className="social-label">{social.label}</span>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>
          
          <motion.div className="contact-footer" variants={itemVariants}>
            <p>
              Looking forward to hearing from you! 🚀
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact; 