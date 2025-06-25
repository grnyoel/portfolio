import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import './Certificate.css';
import {
  bangkit2024,
  mbkmuaj,
  dicodingBBAGC,
  dicodingBDPJS,
  dicodingBDPW,
  dicodingBFFWD,
  dicodingBPJS,
  dicodingDAI,
  dicodingGCE,
  dicodingGit,
  dicodingMLGC,
  dicodingPWI
} from '../../assets';

const certificates = [
  {
    id: 1,
    title: "Bangkit Academy 2024 H2",
    issuer: "Bangkit Academy",
    date: "January 2025",
    image: bangkit2024,
    url: "https://drive.google.com/file/d/1NJJry8_CnggzfJDuj3SYiQ678D-ayuuK/view?usp=sharing"
  },
  {
    id: 2,
    title: "Student Exchange UAJ",
    issuer: "Atma Jaya Catholic University of Indonesia",
    date: "July 2024",
    image: mbkmuaj,
    url: "https://drive.google.com/file/d/1Pkf4furOcquhICtpk3X-2BTY0_-a0Scn/view?usp=sharing"
  },
  {
    id: 3,
    title: "Implement Machine Learning with Google Cloud",
    issuer: "Dicoding",
    date: "December 2024",
    image: dicodingMLGC,
    url: "https://www.dicoding.com/certificates/KEXLY6M9YZG2"
  },
  {
    id: 4,
    title: "Become a Google Cloud Engineer",
    issuer: "Dicoding",
    date: "November 2024",
    image: dicodingGCE,
    url: "https://www.dicoding.com/certificates/JMZV4JQDOXN9"
  },
  {
    id: 5,
    title: "Intermediate Web Development",
    issuer: "Dicoding",
    date: "June 2025",
    image: dicodingPWI,
    url: "https://www.dicoding.com/certificates/53XEDVLNKPRN"
  },
  {
    id: 6,
    title: "Build Back-End App with Google Cloud",
    issuer: "Dicoding",
    date: "November 2024",
    image: dicodingBBAGC,
    url: "https://www.dicoding.com/certificates/EYX4JQ4Y6ZDL"
  },
  {
    id: 7,
    title: "Back-End JavaScript",
    issuer: "Dicoding",
    date: "February 2025",
    image: dicodingBPJS,
    url: "https://www.dicoding.com/certificates/QLZ936MM7Z5D"
  },
  {
    id: 8,
    title: "JavaScript Programming",
    issuer: "Dicoding",
    date: "February 2025",
    image: dicodingBDPJS,
    url: "https://www.dicoding.com/certificates/1RXYEE2OMZVM"
  },
  {
    id: 9,
    title: "Web Programming",
    issuer: "Dicoding",
    date: "February 2025",
    image: dicodingBDPW,
    url: "https://www.dicoding.com/certificates/1RXYE2EE1ZVM"
  },
  {
    id: 10,
    title: "Front-End Development Fundamental",
    issuer: "Dicoding",
    date: "April 2025",
    image: dicodingBFFWD,
    url: "https://www.dicoding.com/certificates/72ZD5WKL9ZYW"
  },
  {
    id: 11,
    title: "AI Fundamental",
    issuer: "Dicoding",
    date: "September 2024",
    image: dicodingDAI,
    url: "https://www.dicoding.com/certificates/2VX3RGD24ZYQ"
  },
  {
    id: 12,
    title: "Git and GitHub",
    issuer: "Dicoding",
    date: "February 2025",
    image: dicodingGit,
    url: "https://www.dicoding.com/certificates/EYX4GV965ZDL"
  }
];

const Certificate = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.1 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        when: "beforeChildren"
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    }
  };

  return (
    <section id="certificate" className="certificate-section" ref={ref}>
      <motion.div 
        className="header"
        initial={{ y: -50, opacity: 0 }}
        animate={isInView ? { y: 0, opacity: 1 } : {}}
        transition={{ type: "spring", stiffness: 120 }}
      >
        <h5>My Achievements</h5>
        <h2>Certificates</h2>
      </motion.div>

      <motion.div 
        className="certificate-container"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {certificates.map((cert) => (
          <motion.div
            key={cert.id}
            className="certificate-card"
            variants={itemVariants}
            whileHover={{ y: -10 }}
          >
            <a 
              href={cert.url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="certificate-link"
            >
              <div className="certificate-image-container">
                <img 
                  src={cert.image} 
                  alt={cert.title} 
                  className="certificate-image"
                />
                <div className="certificate-overlay">
                  <span>View Certificate</span>
                </div>
              </div>
              <div className="certificate-details">
                <h3>{cert.title}</h3>
                <p className="issuer">{cert.issuer}</p>
                <p className="date">{cert.date}</p>
              </div>
            </a>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Certificate;