import React, { useEffect, useRef, useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import { motion, useInView } from "framer-motion";
import "./Home.css";

const Home = () => {
  const containerRef = useRef(null);
  const [showScrollBtn, setShowScrollBtn] = useState(false);
  const isInView = useInView(containerRef, { once: false, amount: 0.5 });

  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Animasi variants
  const titleVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 10
      }
    }
  };

  const subtitleVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 10,
        delay: 0.3
      }
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowScrollBtn(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="home-container" id="home" ref={containerRef}>
      <div className="home-content">
        <motion.h1 
          className="home-title"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={titleVariants}
        >
          HI, I AM GERENT
        </motion.h1>
        
        <motion.h2 
          className="home-subtitle"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={subtitleVariants}
        >
          Software Engineer
        </motion.h2>
      </div>
      
      <button 
        className="scroll-down-btn" 
        onClick={scrollToAbout}
        style={{
          opacity: showScrollBtn ? 1 : 0,
          pointerEvents: showScrollBtn ? 'auto' : 'none',
          transition: 'opacity 0.3s ease-out'
        }}
      >
        <FaChevronDown className="scroll-icon" />
      </button>
    </div>
  );
};

export default Home;