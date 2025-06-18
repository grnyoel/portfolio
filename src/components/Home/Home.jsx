import React, { useEffect, useRef, useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import "./Home.css";

const Home = () => {
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const [showScrollBtn, setShowScrollBtn] = useState(false);

  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    // Text Animation
    setTimeout(() => {
      if (titleRef.current) {
        titleRef.current.style.opacity = "1";
        titleRef.current.style.transform = "translateY(0)";
      }
    }, 200);

    setTimeout(() => {
      if (subtitleRef.current) {
        subtitleRef.current.style.opacity = "1";
        subtitleRef.current.style.transform = "translateY(0)";
      }
    }, 500);

    const timer = setTimeout(() => {
      setShowScrollBtn(true);
    }, 800);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <div className="home-container" id="home">
      <div className="home-content">
        <h1 
          ref={titleRef}
          className="home-title"
          style={{
            opacity: 0,
            transform: "translateY(-50px)",
            transition: "all 0.8s cubic-bezier(0.68, -0.55, 0.265, 1.55)"
          }}
        >
          HI, I AM GERENT
        </h1>
        <h2 
          ref={subtitleRef}
          className="home-subtitle"
          style={{
            opacity: 0,
            transform: "translateY(30px)",
            transition: "all 0.8s ease-out"
          }}
        >
          Software Engineer
        </h2>
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