import { motion } from 'framer-motion';
import { useI18n } from '../i18n';

export const About = () => {
  const { t } = useI18n();
  return (
    <section id="about" className="relative py-24 md:py-32 bg-[#060b19]">
      <div className="absolute inset-0 bg-gradient-to-b from-white/5 via-transparent to-white/5 pointer-events-none" aria-hidden="true" />
      <div className="max-w-5xl mx-auto px-6">
        <motion.h2
          className="text-3xl md:text-5xl font-extrabold tracking-tight"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          {t('about.title')}
        </motion.h2>
        <motion.div
          className="mt-10 text-lg leading-relaxed text-white/70 space-y-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-120px' }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.15 } }
          }}
        >
          {[t('about.p1'), t('about.p2'), t('about.p3')].map((p, i) => (
            <motion.p key={i} variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}>{p}</motion.p>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

