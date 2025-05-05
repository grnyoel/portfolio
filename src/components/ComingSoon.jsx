import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './ComingSoon.css';

const ComingSoon = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500); // Durasi loading lebih pendek

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="coming-soon-container">
      <AnimatePresence>
        {isLoading ? (
          <motion.div
            key="loader"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="loader"
          >
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ 
                y: 0,
                opacity: 1
              }}
              transition={{
                duration: 0.8,
                ease: [0.16, 0.77, 0.47, 0.97] // Kurva ease-out yang lebih dramatis
              }}
              className="loader-text"
            >
              Loading...
            </motion.div>
          </motion.div>
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0, y: 20 }}
            animate={{ 
              opacity: 1,
              y: 0
            }}
            transition={{ 
              duration: 0.8,
              ease: [0.16, 0.77, 0.47, 0.97]
            }}
            className="content-wrapper"
          >
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ 
                opacity: 1, 
                y: 0,
                textShadow: [
                  '0 0 0px rgba(0,0,0,0)',
                  '0 0 12px rgba(0,0,0,0.08)',
                  '0 0 0px rgba(0,0,0,0)'
                ]
              }}
              transition={{ 
                duration: 1.2,
                ease: "easeInOut",
                repeat: Infinity,
                repeatType: "reverse",
                delay: 0.3
              }}
              className="coming-soon-text"
            >
              Coming Soon
            </motion.h1>
            
            <motion.div 
              className="loading-dots"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                delay: 0.5, 
                duration: 0.6,
                ease: [0.16, 0.77, 0.47, 0.97]
              }}
            >
              {[...Array(3)].map((_, i) => (
                <motion.span
                  key={i}
                  animate={{ 
                    y: [0, -10, 0],
                    opacity: [0.7, 1, 0.7]
                  }}
                  transition={{ 
                    duration: 1.4,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: i * 0.15
                  }}
                >•</motion.span>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ComingSoon;