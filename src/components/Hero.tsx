import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { useI18n } from '../i18n';
import { LogoMark } from './LogoMark';

interface HeroProps { onCopyLink: () => void; }

export const Hero = ({ onCopyLink }: HeroProps) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 800], [0, 120]);
  const y2 = useTransform(scrollY, [0, 800], [0, -120]);
  const { t } = useI18n();

  return (
  <section id="hero" ref={ref} className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24">
      {/* Animated gradient background overlays */}
      <div aria-hidden="true" className="absolute inset-0">
        <div className="absolute inset-0 gradient-animate opacity-40" />
        <motion.div style={{ y: y1 }} className="parallax-layer absolute -inset-x-32 -top-1/2 h-[160%] bg-gradient-radial from-primary-600/40 via-transparent to-transparent" />
        <motion.div style={{ y: y2 }} className="parallax-layer absolute -inset-x-32 -bottom-1/2 h-[160%] bg-gradient-conic from-accent-600/40 via-transparent to-transparent" />
        <Noise />
        <Particles />
      </div>

      <div className="relative max-w-5xl mx-auto px-6 w-full flex flex-col items-start md:items-start gap-8">
        {/* Right side animated ICT WEEK logo cluster */}
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-4 hidden xl:flex">
          <motion.div
            initial={{ opacity: 0, x: 120, scale: 0.8, rotate: 8 }}
            animate={{ opacity: 0.18, x: 0, scale: 1, rotate: 0 }}
            transition={{ duration: 1.4, ease: 'easeOut' }}
            style={{ y: y2 }}
            className="relative"
          >
            {/* Glow backplate */}
            <motion.div
              aria-hidden="true"
              className="absolute -inset-10 rounded-[28%] bg-gradient-to-tr from-primary-600/30 via-accent-600/20 to-neon/30 blur-3xl" 
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 40, ease: 'linear' }}
            />
            {/* Pulsing ring */}
            <motion.div
              aria-hidden="true"
              className="absolute -inset-6 rounded-full border border-white/10 [mask:radial-gradient(circle_at_50%_50%,white_40%,transparent_70%)]"
              animate={{ scale: [1, 1.08, 1], opacity: [0.4, 0.7, 0.4] }}
              transition={{ repeat: Infinity, duration: 9, ease: 'easeInOut' }}
            />
            {/* Main SVG asset (use encoded space) */}
            <motion.img
              src="/ict%20week%20logo.svg"
              alt="ICT WEEK Logo"
              className="relative w-[460px] max-w-none drop-shadow-[0_0_22px_rgba(0,255,213,0.35)]"
              initial={{ filter: 'blur(12px)', opacity: 0, rotate: -12 }}
              animate={{ filter: 'blur(0px)', opacity: 1, rotate: 0 }}
              transition={{ duration: 1.6, ease: 'easeOut' }}
              style={{ mixBlendMode: 'screen' }}
            />
            {/* Overlay outline for futuristic feel */}
            <motion.div
              aria-hidden="true"
              className="absolute inset-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 0.4, 0.15, 0.4, 0.15] }}
              transition={{ repeat: Infinity, duration: 18, ease: 'linear' }}
            >
              <div className="w-full h-full backdrop-invert-[10%] mix-blend-overlay" />
            </motion.div>
          </motion.div>
        </div>
        <div className="space-y-8 max-w-3xl">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight"
          >
            {t('hero.title')}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 }}
            className="text-lg md:text-xl text-white/70 max-w-xl"
          >
            {t('hero.tagline')}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-wrap gap-4"
          >
            <a href="#program" className="relative inline-flex items-center px-8 py-4 font-semibold rounded-full overflow-hidden focus-visible:outline-none">
              <span className="absolute inset-0 gradient-animate" />
              <span className="relative z-10">{t('hero.cta.program')}</span>
            </a>
            <a href="#projects" className="inline-flex items-center px-8 py-4 font-semibold rounded-full bg-white/10 hover:bg-white/20 focus-visible:outline-none">
              {t('hero.cta.projects')}
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Noise = () => (
  <div className="pointer-events-none absolute inset-0 opacity-[0.15] mix-blend-overlay" aria-hidden="true" style={{ backgroundImage: 'url("data:image/svg+xml;utf8,<svg xmlns=\'http://www.w3.org/2000/svg\' width=\'400\' height=\'400\' viewBox=\'0 0 400 400\'><filter id=\'n\'><feTurbulence type=\'fractalNoise\' baseFrequency=\'0.8\' numOctaves=\'4\' stitchTiles=\'stitch\'/></filter><rect width=\'400\' height=\'400\' filter=\'url(%23n)\' opacity=\'0.4\'/></svg>")' }} />
);

const Particles = () => {
  const particles = Array.from({ length: 24 });
  return (
    <div aria-hidden="true" className="absolute inset-0 overflow-hidden">
      {particles.map((_, i) => (
        <motion.span
          key={i}
            className="absolute w-1.5 h-1.5 rounded-full bg-neon shadow-[0_0_8px_2px_rgba(78,243,247,0.6)]"
            initial={{ opacity: 0, scale: 0, x: 0, y: 0 }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
              x: [0, (Math.random() - 0.5) * 800],
              y: [0, (Math.random() - 0.5) * 600]
            }}
            transition={{
              duration: 12 + Math.random() * 10,
              repeat: Infinity,
              delay: Math.random() * 6,
              ease: 'easeInOut'
            }}
          />
      ))}
    </div>
  );
};
