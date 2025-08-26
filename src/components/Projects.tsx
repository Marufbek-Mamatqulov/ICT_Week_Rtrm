import { motion } from 'framer-motion';
import { useI18n } from '../i18n';
import { useEffect, useState } from 'react';

interface Project { id: number; title_uz?: string; title_en?: string; description_uz?: string; description_en?: string; title?: string; description?: string; image: string; link?: string; }

// Local placeholder (used until external JSON loads)
const fallback: Project[] = Array.from({ length: 6 }).map((_, i) => ({
  id: i + 1,
  title: `Placeholder Project ${i + 1}`,
  description: 'Waiting for real project data. Update public/projects-data.json with actual items from edu.digital.uz/projects (title, description, image, link).',
  image: `https://picsum.photos/seed/fallback-${i + 1}/500/360`
}));

export const Projects = () => {
  const { t, lang } = useI18n();
  const [projects, setProjects] = useState<Project[]>(fallback);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // Fetch local JSON (you can replace with API if needed)
    fetch('/projects-data.json')
      .then(r => r.ok ? r.json() : [])
      .then((data: Project[]) => {
        if (Array.isArray(data) && data.length) {
          setProjects(data);
          setLoaded(true);
        }
      })
      .catch(() => {/* silent fallback */});
  }, []);

  return (
    <section id="projects" className="relative py-24 md:py-32 bg-[#060b19]">
      <div className="absolute inset-0 bg-gradient-to-tr from-primary-600/10 via-transparent to-accent-600/10 pointer-events-none" aria-hidden="true" />
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-14">
          <div>
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight">{t('projects.title')}</h2>
            <p className="mt-4 text-white/60 max-w-xl">{t('projects.subtitle')}</p>
          </div>
          <div className="glass rounded-xl p-6 max-w-sm self-start md:self-end">
            <p className="text-sm text-white/70 leading-relaxed">{t('projects.helper')}</p>
          </div>
        </div>
        <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((p, i) => {
            const localizedTitle = (lang === 'uz' ? p.title_uz : p.title_en) || p.title || '';
            const localizedDesc = (lang === 'uz' ? p.description_uz : p.description_en) || p.description || '';
            return (
            <motion.article
              key={p.id}
              className="group relative rounded-3xl overflow-hidden bg-white/[0.03] border border-white/10 hover:border-primary-500/40 transition-colors"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ delay: i * 0.05, duration: 0.5 }}
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <motion.img
                  src={p.image}
                  alt={localizedTitle}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.12 }}
                  transition={{ type: 'spring', stiffness: 120, damping: 20 }}
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#060b19] via-[#060b19]/20 to-transparent opacity-80" />
              </div>
              <div className="p-6 flex flex-col gap-3">
                <h3 className="text-lg font-semibold">{localizedTitle}</h3>
                <p className="text-sm text-white/60 leading-relaxed">{localizedDesc}</p>
                <div className="flex items-center gap-2 mt-2">
                  <span className="h-2 w-2 rounded-full bg-neon animate-pulse" />
                  <span className="text-[10px] uppercase tracking-widest text-white/40">{loaded ? 'Real' : 'Placeholder'}</span>
                </div>
                {p.link && (
                  <a
                    href={p.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-1 inline-flex text-xs font-semibold text-primary-300 hover:text-neon transition-colors"
                  >
                    Visit ↗
                  </a>
                )}
              </div>
              <motion.div
                className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-br from-primary-600/20 via-accent-600/10 to-transparent mix-blend-screen"
              />
            </motion.article>
          );})}
        </div>
        {/* Mobile horizontal scroller */}
        <div className="sm:hidden -mx-6 px-6 overflow-x-auto projects-horizontal flex gap-5 snap-x-mandatory pb-2">
          {projects.map((p,i) => {
            const localizedTitle = (lang === 'uz' ? p.title_uz : p.title_en) || p.title || '';
            const localizedDesc = (lang === 'uz' ? p.description_uz : p.description_en) || p.description || '';
            return (
              <motion.article
                key={p.id}
                className="snap-center shrink-0 w-[78%] rounded-3xl bg-white/[0.05] border border-white/10 overflow-hidden flex flex-col"
                initial={{ opacity:0, y:30 }}
                whileInView={{ opacity:1, y:0 }}
                viewport={{ once:true, margin:'-60px' }}
                whileTap={{ scale:0.97 }}
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <motion.img src={p.image} alt={localizedTitle} className="w-full h-full object-cover" whileTap={{ scale:1.1 }} transition={{ type:'spring', stiffness:200, damping:18 }} loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#060b19] via-[#060b19]/30 to-transparent" />
                </div>
                <div className="p-5 flex flex-col gap-3">
                  <h3 className="text-base font-semibold line-clamp-2">{localizedTitle}</h3>
                  <p className="text-[13px] leading-relaxed text-white/60 line-clamp-4">{localizedDesc}</p>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="h-1.5 w-1.5 rounded-full bg-neon animate-pulse" />
                    <span className="text-[9px] uppercase tracking-widest text-white/40">{loaded ? 'Real' : 'Placeholder'}</span>
                  </div>
                  {p.link && <a href={p.link} target="_blank" className="mt-auto inline-flex text-[11px] font-semibold text-primary-300 hover:text-neon">Visit ↗</a>}
                </div>
              </motion.article>
            );
          })}
        </div>
        <p className="mt-10 text-center text-xs text-white/30">Update projects in <code className="px-1 py-0.5 bg-white/5 rounded">public/projects-data.json</code>. Ma'lumotlar edu.digital.uz/projects saytidan qo'lda kiritiladi.</p>
      </div>
    </section>
  );
};
