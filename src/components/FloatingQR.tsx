import { motion } from 'framer-motion';
import { haptic } from '../utils/haptics';

interface FloatingQRProps { onCopy: () => void; }

export const FloatingQR = ({ onCopy }: FloatingQRProps) => {
  return (
    <motion.button
      onClick={() => { onCopy(); haptic(); }}
      className="lg:hidden fixed top-20 right-4 z-40 w-20 h-20 rounded-full bg-[#0b1422]/70 backdrop-blur-xl border border-white/15 shadow-[0_0_0_1px_rgba(255,255,255,0.08),0_8px_28px_-4px_rgba(0,0,0,0.6)] flex items-center justify-center overflow-hidden"
      initial={{ scale:0, opacity:0 }}
      animate={{ scale:1, opacity:1 }}
      transition={{ type:'spring', stiffness:220, damping:18 }}
      whileTap={{ scale:0.9 }}
    >
      <motion.div
        className="absolute inset-0 rounded-full border border-neon/40"
        animate={{ rotate:360 }}
        transition={{ repeat:Infinity, duration:14, ease:'linear' }}
      />
      <motion.div className="absolute inset-1 rounded-full bg-gradient-to-br from-primary-600/30 via-accent-600/20 to-transparent animate-pulse" />
      <img src="/qr-placeholder.png" alt="QR" className="relative w-10 h-10 object-contain" />
    </motion.button>
  );
};
