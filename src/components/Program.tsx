import { motion, AnimatePresence } from 'framer-motion';
import { useI18n } from '../i18n';
import { programSessions } from '../data/program';
import { useState } from 'react';

export const Program = () => {
  const { t } = useI18n();
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <section id="program" className="relative py-24 md:py-32 bg-[#060b19]">
      <div className="absolute inset-0 bg-gradient-to-b from-white/5 via-transparent to-white/5 pointer-events-none" aria-hidden="true" />
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-10 mb-14">
          <div className="space-y-6">
            <div>
              <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight">{t('program.title')}</h2>
              <p className="mt-4 text-white/60 max-w-2xl text-sm md:text-base">{t('special.note')}</p>
            </div>
            {/* Meta grid merged from former SpecialSession component */}
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 text-[11px] md:text-xs font-medium uppercase tracking-wider">
              {/* Values localized manually for now; could be moved into dedicated translation keys if needed */}
              <Meta label={t('special.meta.date')} value={t('special.meta.dateValue') || (t('lang.toggle') === 'EN' ? '24-September' : '24-sentyabr')} />
              <Meta label={t('special.meta.time')} value={t('special.meta.timeValue') || '09:00'} />
              <Meta label={t('special.meta.location')} value={t('special.meta.locationValue') || 'CAEx, Main Hall'} />
              <Meta label={t('special.meta.language')} value={t('special.meta.languagesValue')} />
              <Meta label={t('special.meta.participants')} value={t('special.meta.participantsValue')} />
            </div>
          </div>
          <div className="glass rounded-2xl p-6 md:p-8 max-w-sm self-start md:self-end text-sm text-white/60">
            <p>{t('program.disclaimer') || 'Schedule is indicative and may change.'}</p>
          </div>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {programSessions.map((s, i) => {
            const expanded = openId === s.id;
            const hasDetails = !!s.detailsKey && t(s.detailsKey) !== '';
            return (
              <motion.article
                key={s.id}
                className={`group relative rounded-2xl p-6 bg-white/[0.04] transition-colors border border-white/10 flex flex-col gap-3 overflow-hidden ${expanded ? 'bg-white/[0.07] border-primary-500/40' : 'hover:bg-white/[0.07] hover:border-primary-500/40'}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ delay: i * 0.03, duration: 0.45 }}
              >
                <div className="flex items-center justify-between gap-4">
                  <time className="text-[10px] font-semibold tracking-wider px-2.5 py-1 rounded-full bg-primary-600/20 text-primary-300">
                    {s.time}
                  </time>
                  {hasDetails && (
                    <button
                      type="button"
                      onClick={() => setOpenId(expanded ? null : s.id)}
                      className="ml-auto text-[10px] uppercase tracking-wider px-2 py-1 rounded-md bg-white/5 border border-white/10 hover:border-primary-400/40 hover:text-primary-200 transition-colors flex items-center gap-1"
                    >
                      <span>{expanded ? t('program.less') || 'Less' : t('program.more') || 'More'}</span>
                      <motion.span animate={{ rotate: expanded ? 90 : 0 }} className="inline-block text-xs" aria-hidden>
                        ▶
                      </motion.span>
                    </button>
                  )}
                </div>
                <h3 className="leading-snug text-lg font-semibold">{t(s.titleKey)}</h3>
                {s.speakerKey && <p className="text-sm text-white/60">{t(s.speakerKey)}</p>}
                <AnimatePresence initial={false}>
                  {expanded && s.detailsKey && (
                    <motion.div
                      key="details"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="text-xs text-white/55 leading-relaxed pr-1"
                    >
                      {t(s.detailsKey)}
                    </motion.div>
                  )}
                </AnimatePresence>
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none bg-gradient-to-br from-primary-600/10 via-accent-600/10 to-transparent" />
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

// Reusable meta badge component
const Meta = ({ label, value }: { label: string; value: string }) => (
  <div className="glass rounded-lg px-3 py-2 flex flex-col gap-1 items-start">
    <span className="text-[9px] tracking-widest text-white/40 font-semibold">{label}</span>
    <span className="text-[11px] md:text-xs font-medium text-white/80">{value}</span>
  </div>
);
