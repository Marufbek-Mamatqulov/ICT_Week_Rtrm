import { useI18n } from '../i18n';
import { motion } from 'framer-motion';

const logos: { src: string; alt: string }[] = [
  { src: '/Xamkorlar/Vazirlik logo. w.png', alt: 'Vazirlik' },
  { src: '/Xamkorlar/ITEA logo_Eng.w.png', alt: 'ITEA' },
  { src: '/Xamkorlar/IT bilim.png', alt: 'IT Bilim' },
  { src: '/Xamkorlar/prof soyuz.png', alt: 'Prof Soyuz' },
  { src: '/Xamkorlar/Texnoplov logo 1.0.png', alt: 'Texnoplov' },
  { src: '/Xamkorlar/it park capital.png', alt: 'IT Park Capital' },
  { src: '/Xamkorlar/yandex.png', alt: 'Yandex' }
];

export const Partners = () => {
  const { lang } = useI18n();
  const title = lang === 'uz' ? 'Hamkorlarimiz' : lang === 'en' ? 'Our Partners' : 'Наши партнёры';
  return (
    <section className="relative py-20 bg-[#060b19] border-t border-white/5 overflow-hidden" id="partners">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-center text-2xl md:text-3xl font-extrabold tracking-tight mb-12">{title}</h2>
        <div className="relative w-full">
          {/* gradient edges */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#060b19] via-[#060b19]/80 to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#060b19] via-[#060b19]/80 to-transparent" />
          <motion.div
            className="flex gap-16 items-center will-change-transform"
            initial={{ x: 0 }}
            animate={{ x: ['0%', '-50%'] }}
            transition={{ repeat: Infinity, duration: 22, ease: 'linear' }}
          >
            {[...logos, ...logos].map((l, i) => (
              <div key={i} className="shrink-0 flex items-center justify-center h-20">
                <img
                  src={l.src}
                  alt={l.alt}
                  loading="lazy"
                  className="h-12 md:h-14 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity drop-shadow-[0_4px_8px_rgba(0,0,0,0.4)]"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};