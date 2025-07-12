import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './Skills.css';

// Import all skill logos
import javaLogo from '../assets/logos/java.png';
import pythonLogo from '../assets/logos/python.jpeg';
import dartLogo from '../assets/logos/dart.jpeg';
import jsLogo from '../assets/logos/js.png';
import swiftLogo from '../assets/logos/swift.png';
import flutterLogo from '../assets/logos/flutter.png';
import swiftuiLogo from '../assets/logos/swiftui.png';
import uikitLogo from '../assets/logos/uikit.png';
import html5Logo from '../assets/logos/html5.png';
import cssLogo from '../assets/logos/css.png';
import firebaseLogo from '../assets/logos/firebase.png';
import postgresqlLogo from '../assets/logos/postgresql.png';
import awsLogo from '../assets/logos/aws.png';
import dynamodbLogo from '../assets/logos/dynamodb.png';
import scikitlearnLogo from '../assets/logos/scikitlearn.png';
import numpyLogo from '../assets/logos/numpy.png';
import pandasLogo from '../assets/logos/pandas.png';
import tensorflowLogo from '../assets/logos/tensorflow.png';
import pytorchLogo from '../assets/logos/pytorch.png';
import reactLogo from '../assets/logos/react.png';
import dockerLogo from '../assets/logos/docker.png';
import gitLogo from '../assets/logos/git.png';
import golangLogo from '../assets/logos/golang.png';

const Skills = () => {
  const [activeTab, setActiveTab] = useState('languages');
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
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

  const skillCategories = {
    languages: {
      title: "Languages",
      skills: [
        { name: "Java", icon: javaLogo },
        { name: "Python", icon: pythonLogo },
        { name: "Dart", icon: dartLogo },
        { name: "Javascript", icon: jsLogo },
        { name: "Swift", icon: swiftLogo },
        { name: "Git", icon: gitLogo },
        { name: "Go", icon: golangLogo }
      ]
    },
    frontend: {
      title: "Frontend",
      skills: [
        { name: "Flutter", icon: flutterLogo },
        { name: "SwiftUI", icon: swiftuiLogo },
        { name: "UIKit", icon: uikitLogo },
        { name: "React", icon: reactLogo },
        { name: "HTML5", icon: html5Logo },
        { name: "CSS", icon: cssLogo }
      ]
    },
    backend: {
      title: "Backend",
      skills: [
        { name: "Firebase", icon: firebaseLogo },
        { name: "PostgreSQL", icon: postgresqlLogo },
        { name: "AWS", icon: awsLogo },
        { name: "DynamoDB", icon: dynamodbLogo },
        { name: "Docker", icon: dockerLogo }
      ]
    },
    dataScience: {
      title: "Data Science & ML",
      skills: [
        { name: "Scikit-learn", icon: scikitlearnLogo },
        { name: "NumPy", icon: numpyLogo },
        { name: "Pandas", icon: pandasLogo },
        { name: "TensorFlow", icon: tensorflowLogo },
        { name: "PyTorch", icon: pytorchLogo }
      ]
    }
  };

  const tabs = [
    { id: 'languages', label: 'Languages' },
    { id: 'frontend', label: 'Frontend' },
    { id: 'backend', label: 'Backend' },
    { id: 'dataScience', label: 'Data Science & ML' }
  ];

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  return (
    <section id="skills" className="section skills-section">
      <div className="container">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.h2 className="section-title" variants={itemVariants}>
            My Skills
          </motion.h2>
          
          <div className="skills-container">
            {/* Tab Navigation */}
            <motion.div className="skills-tabs" variants={itemVariants}>
              {tabs.map((tab) => (
                <motion.button
                  key={tab.id}
                  className={`skill-tab ${activeTab === tab.id ? 'active' : ''}`}
                  onClick={() => handleTabClick(tab.id)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <span>{tab.label}</span>
                </motion.button>
              ))}
            </motion.div>

            {/* Skills Grid */}
            <div className="skills-content">
              <div className="skills-grid">
                {skillCategories[activeTab].skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    className="skill-item"
                    whileHover={{ 
                      scale: 1.05,
                      rotateY: 5,
                      boxShadow: "0 20px 40px rgba(0, 0, 0, 0.15)"
                    }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ 
                      type: "spring", 
                      stiffness: 300 
                    }}
                  >
                    <div className="skill-icon">
                      <img src={skill.icon} alt={skill.name} />
                    </div>
                    <p className="skill-name">{skill.name}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills; 