import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import './Experience.css';
import { dbs, bangkitacademy, atmajaya, uig } from '../../assets';

const experiences = [
  {
    id: 1,
    company: "Coding Camp by DBS Foundation",
    role: "Full Stack Developer",
    period: "Feb 2025 - Jul 2025",
    logo: dbs,
    highlights: [
      "Obtained 6 certifications namely: Web Programming, JavaScript Programming, Build Front-End Web Application, Front-End Web Development Fundamental, Intermediate Web Development, Back-End JavaScript",
      "Designed and built RESTful APIs using Node.js, Express, and PostgreSQL to enable seamless interaction between frontend application for the capstone project",
      "Implemented MVC architecture on capstone project to separate concerns cleanly, improving code maintainability and scalability"
    ],
    frameColor: "#9AA6B2"
  },
  {
    id: 2,
    company: "Bangkit Academy by Google, GoTo, Tokopedia, Traveloka",
    role: "Cloud Computing",
    period: "Aug 2024 - Jan 2025",
    logo: bangkitacademy,
    highlights: [
      "Gained hands-on experience in cloud computing, focusing on Google Cloud Platform (GCP)",
      "Worked on backend development in capstone project, enhancing skills in server-side technologies",
      "Developed a REST APIs using Express.js and MySQL for the capstone project",
      "Applied cloud infrastructure knowledge in capstone project to create scalable and secure applications"
    ],
    frameColor: "#9AA6B2"
  },
  {
    id: 3,
    company: "Atma Jaya Catholic University of Indonesia",
    role: "Student Exchange",
    period: "Feb 2024 - Jul 2024",
    logo: atmajaya,
    highlights: [
      "Take 7 courses with a total of 21 credits",
      "Build an Android Application using Java as the final project of Mobile Programming course",
      "Build a Machine Learning model using ANN Algorithm as the final project of Artificial Intelligence course",
      "Participating in Social Contributions in North Jakarta to improve adaptation, communication, and knowledge of culture"
    ],
    frameColor: "#9AA6B2"
  },
  {
    id: 4,
    company: "Universitas Ichsan Gorontalo",
    role: "Bachelor Degree in Computer Science",
    period: "Sep 2022 - Apr 2026 (Expected)",
    logo: uig,
    highlights: [
      "GPA: 3.92/4.00",
      "Relevant Courses: Logic and Programming, Database System, Algorithms and Data Structure, Object-Oriented Programming, Structured Programming, Database Management System, Web Programming, Mobile Programming, Artificial Intelligence, Software Project Management, Framework Programming."
    ],
    frameColor: "#9AA6B2"
  }
];

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });

  return (
    <section id="experience" className="experience-section" ref={ref}>
      <motion.div 
        className="header"
        initial={{ y: -50, opacity: 0 }}
        animate={isInView ? { y: 0, opacity: 1 } : {}}
        transition={{ type: "spring", stiffness: 120 }}
      >
        <h5>What I've Done So Far</h5>
        <h2>My Experience.</h2>
      </motion.div>

      <div className="experience-container">
        {experiences.map((exp) => (
          <motion.div
            key={exp.id}
            className="experience-card"
            initial={{ y: 50, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : {}}
            transition={{ 
              type: "spring",
              stiffness: 100,
              damping: 10,
              delay: exp.id * 0.1 
            }}
            whileHover={{ y: -10 }}
          >
            <div className="logo-frame" style={{ borderColor: exp.frameColor }}>
              <div className="logo-container">
                <img 
                  src={exp.logo} 
                  alt={exp.company} 
                  className="company-logo"
                />
              </div>
            </div>
            <div className="content">
              <h3>{exp.company}</h3>
              <p className="role">{exp.role}</p>
              <p className="period">{exp.period}</p>
              <ul>
                {exp.highlights.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;