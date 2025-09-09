import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { useI18n } from '../i18n';
import { haptic } from '../utils/haptics';
import { useDarkMode } from '../hooks/useDarkMode';

const links: { id: string; icon: string; labelKey: string }[] = [
  { id: 'hero', icon: '⌂', labelKey: 'nav.home' },
  { id: 'program', icon: '🗓', labelKey: 'nav.program' },
];

export const MobileNav = () => {
  const { t, switchLang } = useI18n();
  const { dark, toggle } = useDarkMode();
  const [active, setActive] = useState('hero');

  const handleNav = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      setActive(id);
      haptic(8);
    }
  };

  return (
    <div className="lg:hidden">
      <nav className="fixed bottom-3 left-1/2 -translate-x-1/2 z-[80] w-[min(100%-1rem,460px)] rounded-2xl bg-[#0b1422]/85 backdrop-blur-xl border border-white/10 shadow-[0_8px_32px_-8px_rgba(0,0,0,0.6)] px-3 py-2 flex items-stretch gap-1">
        {links.map(l => (
          <button
            key={l.id}
            onClick={() => handleNav(l.id)}
            className={`relative flex-1 flex flex-col items-center justify-center text-[11px] font-medium gap-0.5 py-1 rounded-xl transition-colors ${active===l.id ? 'text-neon' : 'text-white/50'}`}
          >
            <span className="text-base leading-none">{l.icon}</span>
            <span className="leading-tight">{t(l.labelKey)}</span>
            {active===l.id && (
              <motion.span layoutId="nav-pill" className="absolute inset-0 -z-10 rounded-xl bg-white/5 border border-white/10" />
            )}
          </button>
        ))}
        <div className="flex flex-col justify-between ml-1">
          <button onClick={() => { toggle(); haptic(); }} aria-label="Theme" className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/70">
            {dark ? '🌙' : '☀️'}
          </button>
          <button onClick={() => { switchLang(); haptic(); }} aria-label="Lang" className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[11px] font-semibold text-white/70">
            {/** toggle label inside provider already swaps */}
            {/** show other language code */}
            {/** We'll rely on t('lang.toggle') */}
            {/** Might add animation */}
            <AnimatePresence mode="popLayout">
              <motion.span key={t('lang.toggle')} initial={{ opacity:0, y:4 }} animate={{ opacity:1, y:0 }} exit={{ opacity:0, y:-4 }} transition={{ duration:0.2 }}>{t('lang.toggle')}</motion.span>
            </AnimatePresence>
          </button>
        </div>
      </nav>
      <style>{`@media(min-width:1024px){nav[data-mobile]{display:none}}`}</style>
    </div>
  );
};
