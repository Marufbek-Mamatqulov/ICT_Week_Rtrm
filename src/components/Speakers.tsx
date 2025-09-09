import { motion } from 'framer-motion';
import { speakers } from '../data/speakers';
import { useI18n } from '../i18n';

export const Speakers = () => {
  const { t } = useI18n();
  const [featured, ...rest] = speakers;

  return (
    <section id="speakers" className="relative py-24">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-10">{t('speakers.title') || 'Speakers'}</h2>

        {/* Featured speaker */}
        <div className="mb-12 flex justify-center">
          <FeaturedCard name={featured.name} role={featured.role} time={featured.time} photo={featured.photo} />
        </div>

        {/* Grid of remaining speakers: 3 per row on md+ */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {rest.map(s => (
            <Card key={s.id} name={s.name} role={s.role} time={s.time} photo={s.photo} />
          ))}
        </div>
      </div>
    </section>
  );
};

function avatar(photo?: string) {
  if (photo) return <img src={photo} alt="" className="w-16 h-16 rounded-full object-cover" />;
  // Default person icon avatar
  return (
    <div className="w-16 h-16 rounded-full bg-white/10 border border-white/15 flex items-center justify-center">
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" className="text-white/70">
        <path d="M12 12c2.761 0 5-2.462 5-5.5S14.761 1 12 1 7 3.462 7 6.5 9.239 12 12 12zm0 2c-4.418 0-8 2.91-8 6.5V22h16v-1.5c0-3.59-3.582-6.5-8-6.5z" fill="currentColor"/>
      </svg>
    </div>
  );
}

const FeaturedCard = ({ name, role, time, photo }: { name: string; role: string; time: string; photo?: string }) => (
  <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="w-full md:w-[720px] rounded-2xl p-6 bg-white/5 border border-white/10 backdrop-blur-xl shadow-[0_8px_32px_-8px_rgba(0,0,0,0.6)]">
    <div className="flex items-center gap-5">
      {avatar(photo)}
      <div>
        <div className="text-xl md:text-2xl font-bold leading-tight">{name}</div>
        <div className="text-white/70">{role}</div>
      </div>
      <div className="ml-auto text-sm px-3 py-1 rounded-full bg-primary-600/30 border border-white/10">{time}</div>
    </div>
  </motion.div>
);

const Card = ({ name, role, time, photo }: { name: string; role: string; time: string; photo?: string }) => (
  <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="rounded-2xl p-5 bg-white/5 border border-white/10 backdrop-blur-xl">
    <div className="flex items-center gap-4 mb-4">
      {avatar(photo)}
      <div className="min-w-0">
        <div className="font-semibold truncate">{name}</div>
        <div className="text-sm text-white/70 truncate">{role}</div>
      </div>
    </div>
    <div className="text-xs text-white/70">{time}</div>
  </motion.div>
);
