import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Preloader from './components/Preloader';
import './App.css';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading ? (
          <Preloader onComplete={() => setIsLoading(false)} />
        ) : (
          <motion.main
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
              <h1>Coming Soon</h1>
              <h4>Kalo nda malas awikwok</h4>
          </motion.main>
        )}
      </AnimatePresence>
    </>
  );
}

export default App;