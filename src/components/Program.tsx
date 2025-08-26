import { motion } from 'framer-motion';
import { useI18n } from '../i18n';

export interface Session {
  time: string;
  title: string;
  speaker: string;
  track?: string;
  description?: string;
}

const sessions: Session[] = [
  { time: '09:00', title: 'Opening Keynote: Catalyzing Digital Futures', speaker: 'Dr. A. Visionary' },
  { time: '09:40', title: 'AI Ethics & Responsible Innovation', speaker: 'Leila Chang' },
  { time: '10:20', title: 'Break + Expo Exploration', speaker: '' },
  { time: '10:45', title: 'Quantum Computing: From Theory to Impact', speaker: 'Prof. M. Qubit' },
  { time: '11:25', title: 'Cybersecurity in an Autonomous World', speaker: 'Rafael Ortiz' },
  { time: '12:05', title: 'Networking Lunch', speaker: '' },
  { time: '13:15', title: 'Panel: Scaling Sustainable Infrastructure', speaker: 'Panelists' },
  { time: '14:00', title: 'Edge AI & Real-time Analytics', speaker: 'Dr. Sara Iqbal' },
  { time: '14:40', title: 'Metaverse & Human Experience', speaker: 'Jonas W.' },
  { time: '15:20', title: 'Break + Startup Pitch Prep', speaker: '' },
  { time: '15:40', title: 'Startup Pitch Showcase', speaker: 'Founders' },
  { time: '16:40', title: 'Closing Remarks', speaker: 'Organizing Committee' }
];

export const Program = () => {
  const { t } = useI18n();
  return (
    <section id="program" className="relative py-24 md:py-32 bg-[#060b19]">
      <div className="absolute inset-0 bg-gradient-to-b from-white/5 via-transparent to-white/5 pointer-events-none" aria-hidden="true" />
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-14">
          <div>
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight">{t('program.title')}</h2>
            <p className="mt-4 text-white/60 max-w-xl">{t('program.subtitle')}</p>
          </div>
          <div className="glass rounded-xl p-6 max-w-sm self-start md:self-end">
            <p className="text-sm text-white/70 leading-relaxed">Timings are indicative and subject to refinement. Add multiple tracks by grouping sessions with a track field.</p>
          </div>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sessions.map((s, i) => (
            <motion.article
              key={i}
              className="group relative rounded-2xl p-6 bg-white/[0.04] hover:bg-white/[0.07] transition-colors border border-white/10 hover:border-primary-500/40 flex flex-col gap-3 overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ delay: i * 0.03, duration: 0.45 }}
            >
              <div className="flex items-center justify-between">
                <time className="text-xs font-semibold tracking-wider px-2.5 py-1 rounded-full bg-primary-600/20 text-primary-300">
                  {s.time}
                </time>
                {s.track && (
                  <span className="text-[10px] uppercase tracking-widest bg-accent-600/20 text-accent-400 px-2 py-1 rounded-full">{s.track}</span>
                )}
              </div>
              <h3 className="text-lg font-semibold leading-snug">
                {s.title}
              </h3>
              {s.speaker && <p className="text-sm text-white/60">{s.speaker}</p>}
              {s.description && <p className="text-xs text-white/50">{s.description}</p>}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none bg-gradient-to-br from-primary-600/10 via-accent-600/10 to-transparent" />
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};
