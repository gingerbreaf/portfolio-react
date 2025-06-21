import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaGithub, FaDownload, FaExternalLinkAlt } from 'react-icons/fa';
import './Projects.css';

// Import project images
import feelingsOverflowImage from '../assets/5864 (1).png';
import tetherImage from '../assets/tether.png';
import jerryImage from '../assets/Jerry.jpeg';

const Projects = () => {
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

  const projects = [
    {
      title: "Feelings Overflow",
      description: "A mobile application built with Flutter and Firebase as part of NUS Orbital Programme 2023. This project has achieved Apollo Level.",
      image: feelingsOverflowImage,
      technologies: ["Flutter", "Firebase", "Mobile Development"],
      links: [
        {
          name: "Download APK",
          url: "https://drive.google.com/uc?export=download&id=1dxaVBaNfbgH5hzA-35RsQhKtyp6sNagt",
          icon: <FaDownload />,
          type: "download"
        },
        {
          name: "Source Code",
          url: "https://github.com/gingerbreaf/Feelings_Overflow.git",
          icon: <FaGithub />,
          type: "external"
        },
        {
          name: "Project Overview",
          url: "/src/assets/Stack_underflow-MS3-README.pdf",
          icon: <FaDownload />,
          type: "download"
        },
        {
          name: "Certificate",
          url: "/src/assets/Oribital Certificate.pdf",
          icon: <FaDownload />,
          type: "download"
        }
      ]
    },
    {
      title: "Tether",
      description: "A desktop application built with JavaFX and Java. It is an Applicant Tracking System (ATS) designed for HR managers.",
      image: tetherImage,
      technologies: ["Java", "JavaFX", "Desktop Application"],
      links: [
        {
          name: "Source Code",
          url: "https://github.com/AY2324S2-CS2103T-F11-3/tp.git",
          icon: <FaGithub />,
          type: "external"
        },
        {
          name: "User Guide",
          url: "https://ay2324s2-cs2103t-f11-3.github.io/tp/UserGuide.html",
          icon: <FaExternalLinkAlt />,
          type: "external"
        },
        {
          name: "Developer Guide",
          url: "https://ay2324s2-cs2103t-f11-3.github.io/tp/DeveloperGuide.html",
          icon: <FaExternalLinkAlt />,
          type: "external"
        }
      ]
    },
    {
      title: "Jerry",
      description: "A chatbot built with Java that helps users keep track of tasks. Integrated with a Graphical User Interface using JavaFX.",
      image: jerryImage,
      technologies: ["Java", "JavaFX", "Chatbot"],
      links: [
        {
          name: "Source Code",
          url: "https://github.com/gingerbreaf/ip.git",
          icon: <FaGithub />,
          type: "external"
        }
      ]
    }
  ];

  return (
    <section id="projects" className="section projects-section">
      <div className="container">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.h2 className="section-title" variants={itemVariants}>
            Featured Projects
          </motion.h2>
          
          <div className="projects-grid">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                className="project-card"
                variants={itemVariants}
                whileHover={{ y: -10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="project-image">
                  <img src={project.image} alt={project.title} />
                </div>
                
                <div className="project-content">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  
                  <div className="project-technologies">
                    {project.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="tech-tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="project-links">
                    {project.links.map((link, linkIndex) => (
                      <motion.a
                        key={linkIndex}
                        href={link.url}
                        className={`project-link ${link.type}`}
                        target={link.type === "external" ? "_blank" : undefined}
                        rel={link.type === "external" ? "noopener noreferrer" : undefined}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        {link.icon} {link.name}
                      </motion.a>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects; 