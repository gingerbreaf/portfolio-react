import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './Education.css';

// Import institution logos
import nusLogo from '../assets/logos/nus.png';
import njcLogo from '../assets/logos/njc.png';

const Education = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 }
    }
  };

  const educationData = [
    {
      institution: "National University of Singapore",
      degree: "Bachelor of Computing in Computer Science (Honours)",
      period: "Aug 2022 - May 2026",
      gpa: "GPA: 4.21/5.00",
      logo: nusLogo,
      achievements: []
    },
    {
      institution: "National Junior College",
      degree: "Singapore-Cambridge General Certificate of Education Advanced Level",
      period: "Jan 2018 - Nov 2019",
      logo: njcLogo,
      achievements: [
        "Physics (A), Chemistry (A), Mathematics (A), Economics (A), General Paper (B)"
      ]
    }
  ];

  return (
    <section id="education" className="section education-section">
      <div className="container">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.h2 className="section-title" variants={itemVariants}>
            Education
          </motion.h2>
          
          <div className="education-grid">
            {educationData.map((education, index) => (
              <motion.div
                key={index}
                className="education-card"
                variants={itemVariants}
                whileHover={{ y: -10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="education-header">
                  <div className="institution-logo">
                    <img src={education.logo} alt={education.institution} />
                  </div>
                  <div className="education-info">
                    <h3 className="institution-name">{education.institution}</h3>
                    <h4 className="degree">{education.degree}</h4>
                    <p className="period">{education.period}</p>
                    {education.gpa && (
                      <p className="gpa">{education.gpa}</p>
                    )}
                  </div>
                </div>
                
                {education.achievements.length > 0 && (
                  <div className="education-achievements">
                    <ul>
                      {education.achievements.map((achievement, achievementIndex) => (
                        <li key={achievementIndex}>{achievement}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education; 