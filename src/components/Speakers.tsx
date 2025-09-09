import { motion } from 'framer-motion';
import { speakers } from '../data/speakers';
import { useI18n } from '../i18n';

export const Speakers = () => {
  const { t, lang } = useI18n();
  const [featured, ...rest] = speakers;

  return (
    <section id="speakers" className="relative py-24">
      {/* Soft background accents */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 left-1/3 w-72 h-72 bg-primary-600/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-24 right-1/4 w-80 h-80 bg-accent-600/20 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative">
        <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-10">
          {t('speakers.title') || 'Speakers'}
        </h2>

        {/* Featured speaker */}
        <div className="mb-12 flex justify-center">
          <FeaturedCard name={featured.name[lang]} role={featured.role[lang]} time={featured.time} photo={featured.photo} />
        </div>

        {/* Grid of remaining speakers: 3 per row on md+ */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {rest.map((s) => (
            <Card key={s.id} name={s.name[lang]} role={s.role[lang]} time={s.time} photo={s.photo} />
          ))}
        </div>
      </div>
    </section>
  );
};

function Avatar({ photo, name }: { photo?: string; name: string }) {
  const initials = name
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((n) => n[0]?.toUpperCase())
    .join('');

  return (
    <div className="relative">
      {/* Outer neon ring */}
      <span className="absolute inset-0 rounded-full bg-gradient-to-br from-neon via-accent-500 to-primary-500 blur-[2px] opacity-80" aria-hidden />
      <div className="relative w-20 h-20 rounded-full p-[3px] bg-gradient-to-br from-neon via-accent-500 to-primary-500">
        <div className="w-full h-full rounded-full bg-[#0b1422] border border-white/10 overflow-hidden flex items-center justify-center">
          {photo ? (
            <img src={photo} alt={name} className="w-full h-full object-cover" />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-white/80 text-xl font-bold">
              {initials || (
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" className="text-white/70">
                  <path d="M12 12c2.761 0 5-2.462 5-5.5S14.761 1 12 1 7 3.462 7 6.5 9.239 12 12 12zm0 2c-4.418 0-8 2.91-8 6.5V22h16v-1.5c0-3.59-3.582-6.5-8-6.5z" fill="currentColor" />
                </svg>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

const FeaturedCard = ({ name, role, time, photo }: { name: string; role: string; time: string; photo?: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 16 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    whileHover={{ y: -2 }}
    className="w-full md:w-[820px] rounded-3xl p-6 md:p-8 relative overflow-hidden"
  >
    {/* Card background */}
    <div className="absolute inset-0 rounded-3xl bg-gradient-to-b from-white/6 to-white/4" />
    <div className="absolute inset-0 rounded-3xl border border-white/10" />
    <div className="relative flex items-center gap-6">
      <Avatar photo={photo} name={name} />
      <div className="min-w-0">
        <div className="text-2xl md:text-[28px] font-extrabold leading-tight drop-shadow">{name}</div>
        <div className="text-white/75 text-base md:text-lg leading-snug">{role}</div>
      </div>
      <div className="ml-auto text-xs md:text-sm px-3 py-1.5 rounded-full bg-gradient-to-r from-primary-600/50 to-accent-600/50 border border-white/10 shadow-inner">
        {time}
      </div>
    </div>
  </motion.div>
);

const Card = ({ name, role, time, photo }: { name: string; role: string; time: string; photo?: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 16 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    whileHover={{ y: -3 }}
    className="relative rounded-3xl p-6 overflow-hidden"
  >
    {/* Background layers */}
    <div className="absolute inset-0 rounded-3xl bg-[#0b1422]/70" />
    <div className="absolute inset-0 rounded-3xl border border-white/10" />
    <div className="absolute -inset-0.5 rounded-[28px] opacity-0 hover:opacity-100 transition-opacity bg-gradient-to-br from-primary-600/20 via-accent-500/20 to-neon/30" />

    <div className="relative flex items-center gap-4 mb-4">
      <Avatar photo={photo} name={name} />
      <div className="min-w-0">
        <div className="font-extrabold text-[18px] leading-tight text-white truncate">{name}</div>
        <div className="text-sm text-white/75 leading-snug line-clamp-2">{role}</div>
      </div>
    </div>
    <div className="relative text-xs text-white/70">{time}</div>
  </motion.div>
);
