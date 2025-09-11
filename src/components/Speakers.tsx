import { motion } from 'framer-motion';
import { speakers } from '../data/speakers';
import { useI18n } from '../i18n';

export const Speakers = () => {
  const { t, lang } = useI18n();

  return (
    <section id="speakers" className="relative py-24">
      <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[900px] bg-primary-600/10 rounded-full blur-[140px]" />
      </div>
      <div className="max-w-7xl mx-auto px-6 relative">
        <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-14 text-center">
          {t('speakers.title') || 'Speakers'}
        </h2>
        {speakers.length > 0 && (
          <div className="mb-14">
            <div className="flex justify-center">
              <SpeakerCard
                name={speakers[0].name[lang]}
                role={speakers[0].role[lang]}
                photo={speakers[0].photo}
                featured
              />
            </div>
          </div>
        )}
        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
          {speakers.slice(1).map((sp: any) => (
            <SpeakerCard key={sp.id} name={sp.name[lang]} role={sp.role[lang]} photo={sp.photo} />
          ))}
        </div>
      </div>
    </section>
  );
};

function Avatar({ photo, name }: { photo?: string; name: string }) {
  const initials = name.split(' ').filter(Boolean).slice(0, 2).map(n => n[0]?.toUpperCase()).join('');
  let withBust: string | undefined;
  if (photo) {
    const isBrowser = typeof window !== 'undefined';
    const bust = isBrowser ? ((window as any).__IMG_BUST ||= Date.now()) : Date.now();
    withBust = `${photo}?v=${bust}`;
  }
  return (
    <div className="relative mx-auto w-32 h-32 mb-6">
      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-accent-500 to-primary-600 opacity-90" />
      <div className="relative w-full h-full rounded-full p-[4px] bg-[#061127]">
        <div className="w-full h-full rounded-full bg-[#0d1d33] border-2 border-neon/80 overflow-hidden flex items-center justify-center">
          {withBust ? (
            <img
              src={withBust}
              alt={name}
              loading="lazy"
              decoding="async"
              onError={(e) => { (e.currentTarget.style.display = 'none'); }}
              className="w-full h-full object-cover"
            />
          ) : (
            <span className="text-white/80 text-2xl font-bold tracking-wide">{initials || 'AI'}</span>
          )}
        </div>
      </div>
    </div>
  );
}

const SpeakerCard = ({ name, role, photo, featured }: { name: string; role: string; photo?: string; featured?: boolean }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    whileHover={{ y: -6 }}
    transition={{ duration: 0.4, ease: 'easeOut' }}
  className={`group relative flex flex-col items-center text-center rounded-[28px] px-6 pt-10 pb-8 bg-gradient-to-b from-[#0d1d33] to-[#0a1627] border border-white/10 shadow-[0_4px_18px_-4px_rgba(0,0,0,0.6)] hover:shadow-[0_8px_28px_-6px_rgba(0,0,0,0.65)] overflow-hidden ${featured ? 'md:w-[340px]' : ''}`}
  >
    <div className="absolute inset-0 rounded-[28px] bg-[radial-gradient(circle_at_50%_0%,rgba(78,243,247,0.12),transparent_60%)] opacity-0 group-hover:opacity-100 transition-opacity" />
    <Avatar photo={photo} name={name} />
  <h3 className="relative z-10 font-extrabold text-lg md:text-xl leading-tight text-white mb-3 px-2">
      {name}
    </h3>
  <p className="relative z-10 text-[13px] md:text-sm leading-relaxed text-white/75 whitespace-pre-line mb-4">
      {role}
    </p>
  {/* time removed as requested */}
    <div className="pointer-events-none absolute -bottom-20 left-1/2 -translate-x-1/2 w-72 h-72 bg-accent-500/10 blur-3xl group-hover:bg-accent-500/20 transition-colors" />
  </motion.div>
);
