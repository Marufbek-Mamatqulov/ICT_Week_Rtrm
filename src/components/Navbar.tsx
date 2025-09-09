import { useEffect, useState, useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { useI18n } from '../i18n';

// NOTE: Replaced animated LogoMark with provided static organization logo image

const sections = [
  { id: 'hero', labelKey: 'Home', fallback: 'Home' },
  { id: 'program', labelKey: 'program.title', fallback: 'Program' },
];

export const Navbar = () => {
  const [active, setActive] = useState('hero');
  const { t, switchLang } = useI18n();
  const { scrollYProgress } = useScroll();
  const progressX = useSpring(scrollYProgress, { stiffness: 160, damping: 30, mass: 0.3 });
  const navRef = useRef<HTMLElement | null>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => {
      setScrolled(window.scrollY > 20);
      const scrollPos = window.scrollY + window.innerHeight / 3;
      for (const s of sections) {
        const el = document.getElementById(s.id);
        if (!el) continue;
        const top = el.offsetTop;
        const bottom = top + el.offsetHeight;
        if (scrollPos >= top && scrollPos < bottom) {
          setActive(s.id);
          break;
        }
      }
    };
    window.addEventListener('scroll', handler, { passive: true });
    handler();
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return (
    <nav ref={navRef} className={`fixed top-0 inset-x-0 z-50 transition-all ${scrolled ? 'backdrop-blur-xl bg-[#061127]/70 shadow-[0_8px_32px_-8px_rgba(0,0,0,0.6)]' : 'bg-transparent'} border-b border-white/5`}>     
      {/* Scroll progress bar */}
      <motion.div aria-hidden="true" className="absolute left-0 top-0 h-[2px] origin-left bg-gradient-to-r from-primary-500 via-accent-500 to-neon" style={{ scaleX: progressX }} />
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16 gap-6">
        <a href="#hero" className="flex items-center gap-3 focus-visible:outline-none relative group">
          {/* Navbar logo (logo talim.png) */}
          <img
            src="/logo%20talim.png"
            alt={t('brand.name') || 'Logo'}
            className="h-8 md:h-10 w-auto drop-shadow-[0_2px_8px_rgba(0,255,213,0.35)] transition-all group-hover:scale-[1.05] group-hover:drop-shadow-[0_4px_14px_rgba(0,255,213,0.55)]"
            loading="eager"
            decoding="async"
            draggable={false}
          />
          <span className="absolute -inset-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-r from-primary-600/20 to-accent-600/20 blur" aria-hidden="true" />
        </a>
        <div className="hidden md:flex relative">
          <div className="flex items-center gap-1 px-2 py-2 rounded-full bg-white/5 backdrop-blur-xl border border-white/10 shadow-inner shadow-black/50 relative overflow-hidden">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.08),transparent_60%)]" />
            {sections.map(s => (
              <a key={s.id} href={`#${s.id}`} className="relative px-4 py-1.5 rounded-full text-xs font-medium tracking-wide text-white/65 hover:text-white focus-visible:outline-none group" >
                {active === s.id && (
                  <motion.span layoutId="navActive" className="absolute inset-0 rounded-full bg-gradient-to-r from-primary-600 via-accent-600 to-primary-500 opacity-80" style={{ mixBlendMode: 'screen' }} transition={{ type: 'spring', stiffness: 340, damping: 30 }} />
                )}
                <span className="relative z-10 whitespace-nowrap select-none">
                  {truncate(t(s.labelKey) || s.fallback, 18)}
                </span>
              </a>
            ))}
          </div>
        </div>
        <div className="flex items-center gap-3">
          <button onClick={switchLang} aria-label="Toggle language" className="relative text-[11px] font-semibold px-3 py-1.5 rounded-full bg-gradient-to-r from-primary-600/70 to-accent-600/70 hover:from-primary-500 hover:to-accent-500 focus-visible:outline-none shadow shadow-black/40">
            <span className="relative z-10 drop-shadow">{t('lang.toggle')}</span>
          </button>
          <DecorativeSpark />
        </div>
      </div>
      {/* Floating gradient accents */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute -top-10 left-1/4 w-40 h-40 bg-primary-600/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-16 right-1/4 w-52 h-52 bg-accent-600/20 rounded-full blur-3xl animate-[float_12s_ease-in-out_infinite]" />
      </div>
    </nav>
  );
};

// Utility to truncate strings elegantly
function truncate(str: string, max: number) {
  if (str.length <= max) return str;
  return str.slice(0, max - 1) + '…';
}

const DecorativeSpark = () => (
  <motion.span
    className="relative w-6 h-6 rounded-full bg-gradient-to-tr from-primary-500 to-neon shadow-[0_0_0_2px_rgba(255,255,255,0.1)]"
    initial={{ rotate: 0 }}
    animate={{ rotate: 360 }}
    transition={{ repeat: Infinity, duration: 14, ease: 'linear' }}
  >
    <span className="absolute inset-0 rounded-full bg-white/20 blur-sm" />
  </motion.span>
);
