import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

interface LoadingScreenProps {
  minimumMs?: number;
}

export const LoadingScreen = ({ minimumMs = 1200 }: LoadingScreenProps) => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const start = Date.now();
    const handle = () => {
      const elapsed = Date.now() - start;
      const remaining = Math.max(0, minimumMs - elapsed);
      setTimeout(() => setShow(false), remaining);
    };
    if (document.readyState === 'complete') handle();
    else window.addEventListener('load', handle);
    return () => window.removeEventListener('load', handle);
  }, [minimumMs]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-[999] flex flex-col items-center justify-center bg-[#060b19]"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
          aria-label="Loading"
        >
          <motion.div
            className="w-24 h-24 rounded-full gradient-animate relative overflow-hidden"
            initial={{ scale: 0 }}
            animate={{ scale: 1, rotate: 360 }}
            transition={{ duration: 1.2, ease: 'easeInOut' }}
          >
            <motion.div
              className="absolute inset-0 bg-[#060b19] m-2 rounded-full"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            />
          </motion.div>
          <motion.p className="mt-8 tracking-wide text-sm text-white/70" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            Initializing experience...
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
