import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Preloader.css';

const Preloader = ({ onComplete }) => {
  const [currentPhase, setCurrentPhase] = useState(0);
  const phrases = [
    "Hi, I'm Gerent",
    "Welcome to my Website"
  ];

  // Animasi teks
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    },
    exit: { 
      opacity: 0, 
      y: -20,
      transition: { duration: 0.6, ease: "easeIn" }
    }
  };

  // Cursor Animation
  const cursorVariants = {
    blink: {
      opacity: [0, 1, 0],
      transition: {
        duration: 0.8,
        repeat: Infinity
      }
    }
  };

  useEffect(() => {
    const sequence = [
      // Display first text
      () => new Promise(resolve => setTimeout(resolve, 2500)),
      // Change to second text
      () => setCurrentPhase(1),
      // Display second text
      () => new Promise(resolve => setTimeout(resolve, 3000)),
      // End
      () => {
        setCurrentPhase(2);
        onComplete?.();
      }
    ];

    const runSequence = async () => {
      for (const step of sequence) {
        await step();
      }
    };

    runSequence();

    return () => {
      // Cleanup
    };
  }, [onComplete]);

  return (
    <motion.div 
      className="preloader"
      initial={{ opacity: 1 }}
      animate={{ opacity: currentPhase === 2 ? 0 : 1 }}
      transition={{ duration: 0.8 }}
    >
      <AnimatePresence mode="wait">
        {currentPhase < 2 && (
          <motion.div
            key={`text-${currentPhase}`}
            className="text-container"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={textVariants}
          >
            <motion.span className="animated-text">
              {phrases[currentPhase]}
            </motion.span>
            <motion.span
              className="cursor"
              variants={cursorVariants}
              animate="blink"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Preloader;