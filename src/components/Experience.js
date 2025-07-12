import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './Experience.css';

// Import company logos
import spGroupLogo from '../assets/logos/SPGroup.jpeg';
import nusLogo from '../assets/logos/NUS SOC.png';

// Import tech logos
import swiftLogo from '../assets/logos/swift.png';
import swiftuiLogo from '../assets/logos/swiftui.png';
import uikitLogo from '../assets/logos/uikit.png';
import gitLogo from '../assets/logos/git.png';
import firebaseLogo from '../assets/logos/firebase.png';
import dockerLogo from '../assets/logos/docker.png';
import golangLogo from '../assets/logos/golang.png';
import javaLogo from '../assets/logos/java.png';

const Experience = () => {
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
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8 }
    }
  };

  const experiences = [
    {
      title: "Software Engineer Intern",
      company: "SP Group",
      period: "January 2025 - June 2025",
      logo: spGroupLogo,
      techUsed: [
        { name: "Swift", logo: swiftLogo },
        { name: "SwiftUI", logo: swiftuiLogo },
        { name: "UIKit", logo: uikitLogo },
        { name: "Git", logo: gitLogo },
        { name: "Firebase", logo: firebaseLogo },
        { name: "Docker", logo: dockerLogo },
        { name: "Golang", logo: golangLogo }
      ],
      responsibilities: [
        "Interned primarily as an iOS developer, worked on the SP app (4.6/5 stars, 10k ratings on the iOS App Store)",
        "Contributed to numerous features that are deployed to production, delivered my work with reasonable speed and quality",
        "Developed new screens using both UIKit and SwiftUI, as well as new business logic in the project",
        "Started my own iOS Project, aiming to publish in August 2025 (Stay tuned!)",
        "Also approached the backend team to learn backend development and understand system design"
      ]
    },
    {
      title: "Teaching Assistant",
      company: "National University of Singapore",
      period: "January 2024 - April 2024",
      logo: nusLogo,
      techUsed: [
        { name: "Java", logo: javaLogo }
      ],
      responsibilities: [
        "CS2030S, Programming Methodology II (NUS Module)",
        "Taught Java and Object-Oriented Programming",
        "Graded and gave feedback on student's code"
      ]
    }
  ];

  return (
    <section id="experiences" className="section experience-section">
      <div className="container">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.h2 className="section-title" variants={itemVariants}>
            Work Experience
          </motion.h2>
          
          <div className="experience-timeline">
            {experiences.map((experience, index) => (
              <motion.div
                key={index}
                className="experience-item"
                variants={itemVariants}
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="experience-header">
                  <div className="company-logo">
                    <img src={experience.logo} alt={experience.company} />
                  </div>
                  <div className="experience-info">
                    <h3 className="job-title">{experience.title}</h3>
                    <h4 className="company-name">{experience.company}</h4>
                    <p className="period">{experience.period}</p>
                  </div>
                </div>
                
                <div className="experience-content">
                  <ul className="responsibilities">
                    {experience.responsibilities.map((responsibility, respIndex) => (
                      <li key={respIndex}>{responsibility}</li>
                    ))}
                  </ul>
                  
                  {experience.techUsed && (
                    <div className="tech-used-section">
                      <div className="tech-used-grid">
                        {experience.techUsed.map((tech, techIndex) => (
                          <div key={techIndex} className="tech-logo-container" title={tech.name}>
                            <img src={tech.logo} alt={tech.name} className="tech-logo" />
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience; 