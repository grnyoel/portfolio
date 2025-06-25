import React, { useEffect, useRef } from 'react';
import { Linkedin, Github, Instagram, Mail } from 'lucide-react';
import { motion, useAnimation, useInView } from 'framer-motion';
import './About.css';
import Gerent from '../../assets/images/gerent.png';

const About = () => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.15 });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [isInView, controls]);

  const socialLinks = [
    {
      icon: Linkedin,
      href: 'https://linkedin.com/in/grnyoel',
      label: 'LinkedIn'
    },
    {
      icon: Github,
      href: 'https://github.com/grnyoel',
      label: 'GitHub'
    },
    {
      icon: Instagram,
      href: 'https://instagram.com/grnyoel',
      label: 'Instagram'
    },
    {
      icon: Mail,
      href: 'mailto:gerentyoel02@gmail.com',
      label: 'Email'
    }
  ];

  // Animation configurations
  const containerVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        when: "beforeChildren"
      }
    }
  };

  const itemVariants = {
    hidden: { 
      y: 40,
      opacity: 0,
      transition: { duration: 0.3 }
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
        mass: 0.5
      }
    }
  };

  const photoVariants = {
    hidden: { 
      x: -60,
      opacity: 0,
      rotate: -3
    },
    visible: {
      x: 0,
      opacity: 1,
      rotate: 0,
      transition: {
        type: "spring",
        damping: 15,
        stiffness: 100,
        mass: 0.7
      }
    }
  };

  const lineVariants = {
    hidden: { scaleY: 0 },
    visible: {
      scaleY: 1,
      transition: {
        duration: 1,
        ease: [0.22, 1, 0.36, 1],
        delay: 0.2
      }
    }
  };

  return (
    <motion.div 
      className="about-container"
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={containerVariants}
      id="about"
    >
      <motion.div 
        className="about-line"
        variants={lineVariants}
      />
      
      <div className="about-content-wrapper">
        <div className="about-grid">
          {/* Photo Section */}
          <motion.div 
            className="about-photo-container"
            variants={photoVariants}
          >
            <motion.div 
              className="about-photo-frame"
              whileHover={{ 
                y: -5,
                transition: { type: "spring", stiffness: 300 }
              }}
            >
              <div className="about-photo-aspect">
                <motion.img
                  src={Gerent}
                  alt="Gerent's Photo"
                  className="about-photo"
                  whileHover={{ 
                    scale: 1.04,
                    transition: { type: "spring", stiffness: 400 }
                  }}
                />
                <motion.div 
                  className="about-photo-overlay"
                  initial={{ opacity: 0.3 }}
                  whileHover={{ opacity: 0.1 }}
                />
              </div>
            </motion.div>
          </motion.div>

          {/* Content Section */}
          <motion.div 
            className="about-text-container"
            variants={containerVariants}
          >
            <motion.div variants={itemVariants}>
              <motion.h1 
                className="about-title"
                whileHover={{ 
                  x: 5,
                  transition: { type: "spring", stiffness: 300 }
                }}
              >
                About Me
              </motion.h1>
              
              <motion.div className="about-description">
                <motion.p 
                  className="about-paragraph"
                  variants={itemVariants}
                >
                  Hi! My name is <strong>Gerent Yoel Mamahani</strong>, a 6th-semester Computer Science student. I’m passionate about <strong>Software Engineering</strong>, especially in the Backend Development field.
                </motion.p>
                <motion.p 
                  className="about-paragraph"
                  variants={itemVariants}
                >
                  Experienced with <strong>Node.js, SQL & NoSQL, Google Cloud Platform (GCP), and Docker</strong>. I enjoy building scalable, efficient, and well-structured backend systems using modern tools and best practices.
                </motion.p>
                <motion.p 
                  className="about-paragraph"
                  variants={itemVariants}
                >
                  I'm always eager to learn new technologies and continuously improve both my technical and problem-solving skills. I'd like to grow as a Software Engineer by contributing to impactful projects and collaborating with forward-thinking teams and talented people out there.
                </motion.p>
                <motion.p 
                  className="about-paragraph"
                  variants={itemVariants}
                >
                  Let’s connect and build something great together!
                </motion.p>
              </motion.div>
            </motion.div>

            {/* Social Links */}
            <motion.div 
              className="about-social-links"
              variants={itemVariants}
            >
              <motion.div 
                className="about-social-container"
                whileHover={{
                  transition: { staggerChildren: 0.1 }
                }}
              >
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="about-social-link"
                    aria-label={social.label}
                    variants={itemVariants}
                    whileHover={{ 
                      y: -5,
                      scale: 1.1,
                      backgroundColor: 'rgba(243,244,246,0.8)'
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <social.icon size={32} className="about-social-icon" />
                  </motion.a>
                ))}
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default About;