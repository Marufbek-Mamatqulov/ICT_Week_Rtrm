import { useI18n } from '../i18n';
import { motion } from 'framer-motion';
import { specialSession } from '../data/specialSession';

export const SpecialSession = () => {
  const { lang, t } = useI18n();
  return (
    <section id="program" className="relative py-24 md:py-32 bg-[#060b19]">
      <div className="absolute inset-0 bg-gradient-to-b from-primary-600/10 via-transparent to-accent-600/10" aria-hidden="true" />
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-10 mb-14">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight">{t('program.title')}</h2>
            <p className="text-white/60 max-w-2xl text-sm md:text-base">{t('special.note')}</p>
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 text-[11px] md:text-xs font-medium uppercase tracking-wider">
              <Meta label={t('special.meta.date')} value="24-September" />
              <Meta label={t('special.meta.time')} value="09:30" />
              <Meta label={t('special.meta.location')} value="CAEx Main Hall" />
              <Meta label={t('special.meta.language')} value={t('special.meta.languagesValue')} />
              <Meta label={t('special.meta.participants')} value={t('special.meta.participantsValue')} />
            </div>
          </div>
          <div className="glass rounded-2xl p-6 md:p-8 max-w-sm self-start md:self-end text-sm text-white/60">
            <p>{lang === 'uz' ? 'Sessiya taʼlimda AI integratsiyasi, tezkor ko‘nikmalar va global tendensiyalarni yoritadi.' : 'The session highlights AI integration in education, accelerated skills and global trends.'}</p>
          </div>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {specialSession.map((s, i) => (
            <motion.article
              key={i}
              className="group relative rounded-2xl p-6 bg-white/[0.04] hover:bg-white/[0.07] transition-colors border border-white/10 hover:border-neon/40 flex flex-col gap-3 overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ delay: i * 0.04, duration: 0.45 }}
            >
              <div className="flex items-center justify-between">
                <time className="text-[10px] font-semibold tracking-wider px-2 py-1 rounded-full bg-accent-600/20 text-accent-300">{s.time}</time>
              </div>
              <h3 className="text-sm md:text-base font-semibold leading-snug">{lang === 'uz' ? s.titleUz : s.titleEn}</h3>
              {(s.speakerUz || s.speakerEn) && (
                <p className="text-[11px] text-white/60">{lang === 'uz' ? s.speakerUz : s.speakerEn}</p>
              )}
              {(s.detailsUz || s.detailsEn) && (
                <p className="text-[11px] text-white/50 leading-relaxed">{lang === 'uz' ? s.detailsUz : s.detailsEn}</p>
              )}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none bg-gradient-to-br from-accent-600/10 via-neon/10 to-transparent" />
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

const Meta = ({ label, value }: { label: string; value: string }) => (
  <div className="glass rounded-lg px-3 py-2 flex flex-col gap-1 items-start">
    <span className="text-[9px] tracking-widest text-white/40 font-semibold">{label}</span>
    <span className="text-[11px] md:text-xs font-medium text-white/80">{value}</span>
  </div>
);
