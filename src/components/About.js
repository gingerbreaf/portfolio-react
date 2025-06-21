import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './About.css';

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
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

  return (
    <section id="about" className="section about-section">
      <div className="container">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.h2 className="section-title" variants={itemVariants}>
            About Me
          </motion.h2>
          
          <div className="about-content">
            <motion.div className="about-text" variants={itemVariants}>
              <p>
                Welcome to my website! I'm a student at the{' '}
                <span className="highlight">National University of Singapore</span>, 
                majoring in Computer Science, and I'm planning to specialise in{' '}
                <span className="highlight">Artificial Intelligence and Machine Learning</span>.
              </p>
              <p>
                I am actively seeking opportunities to gain more experience in{' '}
                <span className="highlight">software engineering</span> and 
                contribute to innovative projects that make a difference.
              </p>
              <p>
                When I'm not studying or working, you'll mostly find me playing video games :)
              </p>
            </motion.div>
            
            <motion.div className="about-stats" variants={itemVariants}>
              <div className="stat-item">
                <h3>4.21</h3>
                <p>GPA</p>
              </div>
              <div className="stat-item">
                <h3>3+</h3>
                <p>Projects</p>
              </div>
              <div className="stat-item">
                <h3>2+</h3>
                <p>Years Experience</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About; 