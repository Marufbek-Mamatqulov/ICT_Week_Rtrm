import { motion } from 'framer-motion';
import React from 'react';

interface LogoMarkProps {
  className?: string;
  size?: number;
  animated?: boolean;
  showText?: boolean;
}

// Simplified vector inspired by provided logo (abstract figure + open pages).
// Replace paths or swap with your real logo asset (e.g. <img src="/real-logo.svg" />) later.
export const LogoMark: React.FC<LogoMarkProps> = ({ className = '', size = 40, animated = true, showText = false }) => {
  const base = (
    <motion.svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      fill="none"
      className={className}
      initial={animated ? { opacity: 0, scale: 0.8 } : false}
      animate={animated ? { opacity: 1, scale: 1 } : undefined}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      aria-label="ICT Week Logo"
    >
      <motion.circle
        cx="100"
        cy="44"
        r="22"
        fill="url(#grad)"
        initial={animated ? { scale: 0 } : false}
        animate={animated ? { scale: 1 } : undefined}
        transition={{ delay: 0.1, type: 'spring', stiffness: 140, damping: 18 }}
      />
      {/* Left page */}
      <motion.path
        d="M15 70 L90 80 V190 L15 180 Z"
        stroke="url(#grad)"
        strokeWidth={10}
        fill="rgba(255,255,255,0.04)"
        strokeLinecap="round"
        initial={animated ? { pathLength: 0 } : false}
        animate={animated ? { pathLength: 1 } : undefined}
        transition={{ duration: 1.2, ease: 'easeInOut' }}
      />
      {/* Right page */}
      <motion.path
        d="M185 70 L110 80 V190 L185 180 Z"
        stroke="url(#grad)"
        strokeWidth={10}
        fill="rgba(255,255,255,0.04)"
        strokeLinecap="round"
        initial={animated ? { pathLength: 0 } : false}
        animate={animated ? { pathLength: 1 } : undefined}
        transition={{ duration: 1.2, ease: 'easeInOut', delay: 0.15 }}
      />
      {/* Pillar */}
      <motion.rect
        x="90"
        y="70"
        width="20"
        height="120"
        rx={10}
        fill="url(#grad)"
        initial={animated ? { height: 0, y: 190 } : false}
        animate={animated ? { height: 120, y: 70 } : undefined}
        transition={{ duration: 0.9, ease: 'easeOut', delay: 0.3 }}
      />
      <defs>
        <linearGradient id="grad" x1="0" y1="0" x2="200" y2="200" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#2d80ff" />
          <stop offset="50%" stopColor="#7c3aed" />
          <stop offset="100%" stopColor="#4ef3f7" />
        </linearGradient>
      </defs>
    </motion.svg>
  );

  if (!showText) return base;
  return (
    <div className="flex items-center gap-3">
      {base}
      <div className="flex flex-col leading-tight">
        <span className="text-[10px] font-semibold tracking-wider text-white/70">ICT WEEK</span>
        <span className="text-xs font-bold bg-gradient-to-r from-primary-400 via-accent-400 to-neon text-transparent bg-clip-text">2025</span>
      </div>
    </div>
  );
};
