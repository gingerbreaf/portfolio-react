import React from 'react';
import { motion } from 'framer-motion';
import { FaDownload } from 'react-icons/fa';
import './Hero.css';

const Hero = () => {
  const textVariants = {
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

  const letterVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section id="home" className="hero" style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('/profile-pic.jpeg')` }}>
      <div className="hero-overlay"></div>
      <div className="container">
        <motion.div
          className="hero-content"
          variants={textVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1
            className="hero-title"
            variants={textVariants}
          >
            {"Hey, I'm Bowei".split('').map((letter, index) => (
              <motion.span
                key={index}
                variants={letterVariants}
                className="hero-letter"
              >
                {letter === ' ' ? '\u00A0' : letter}
              </motion.span>
            ))}
          </motion.h1>
          
          <motion.h2
            className="hero-subtitle"
            variants={textVariants}
          >
            Computer Science Undergraduate
          </motion.h2>
          
          <motion.p
            className="hero-description"
            variants={textVariants}
          >
            Passionate about Software Engineering
          </motion.p>
          
          <motion.div
            className="hero-buttons"
            variants={textVariants}
          >
            <motion.a
              href="https://drive.google.com/file/d/1_DTL0DyXOVW7Xek5dCdH9HHFbwYw_ODz/view?usp=drive_link"
              className="btn btn-primary"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaDownload /> Download Resume
            </motion.a>
            
            <motion.a
              href="#projects"
              className="btn btn-secondary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View My Work
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
      
      <motion.div
        className="scroll-indicator"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="scroll-arrow"></div>
      </motion.div>
    </section>
  );
};

export default Hero; 