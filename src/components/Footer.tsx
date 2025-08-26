import { useI18n } from '../i18n';

export const Footer = () => {
  const { t } = useI18n();
  return (
    <footer id="footer" className="relative bg-[#0B1422] pt-20 border-t border-white/10">
      <div className="absolute inset-0 bg-gradient-to-t from-primary-600/10 via-transparent to-transparent pointer-events-none" aria-hidden="true" />
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid gap-12 lg:grid-cols-12">
          {/* Map */}
          <div className="lg:col-span-3 order-2 lg:order-1">
            <div className="rounded-xl overflow-hidden ring-1 ring-white/10 shadow-lg shadow-black/30">
              <iframe
                title="Map"
                src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d2606.312162015294!2d69.33719311556806!3d41.341257381546896!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sru!2sus!4v1756215485388!5m2!1sru!2sus"
                width="100%"
                height="200"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-[220px] md:h-[240px] bg-white/5"
              />
            </div>
          </div>
          {/* Org + contact */}
          <div className="lg:col-span-4 space-y-6 order-1 lg:order-2">
            <h3 className="text-sm font-semibold tracking-wider text-white/60">{t('org.name')}</h3>
            <ul className="space-y-3 text-sm text-white/70">
              <li className="flex gap-2"><span className="text-primary-400">📞</span><a href={`tel:${t('contact.phone').replace(/[^+\d]/g,'')}`} className="hover:text-white">{t('contact.phone')}</a></li>
              <li className="flex gap-2"><span className="text-primary-400">✉️</span><a href={`mailto:${t('contact.email')}`} className="hover:text-white">{t('contact.email')}</a></li>
              <li className="flex gap-2"><span className="text-primary-400">📍</span><span>{t('contact.address')}</span></li>
            </ul>
          </div>
          {/* Students */}
          <div className="lg:col-span-2 space-y-5 order-3">
            <h4 className="text-sm font-semibold text-white/80">{t('footer.section.students')}</h4>
            <ul className="space-y-2 text-sm text-white/60">
              <li><a href="https://edu.digital.uz/education" className="hover:text-white">{t('footer.link.courses')}</a></li>
              <li><a href="https://edu.digital.uz/study-centers" className="hover:text-white">{t('footer.link.centers')}</a></li>
              <li><a href="https://edu.digital.uz/about" className="hover:text-white">{t('footer.link.about')}</a></li>
            </ul>
          </div>
          {/* Entrepreneurs */}
          <div className="lg:col-span-2 space-y-5 order-4">
            <h4 className="text-sm font-semibold text-white/80">{t('footer.section.entrepreneurs')}</h4>
            <ul className="space-y-2 text-sm text-white/60">
              <li><a href="https://edu.digital.uz/contact" className="hover:text-white">{t('footer.link.contact')}</a></li>
            </ul>
            <div className="flex gap-4 pt-2">
              {socials.map(s => (
                <a key={s.label} href={s.href} aria-label={s.label} className="text-white/50 hover:text-white transition-colors text-sm">{s.icon}</a>
              ))}
            </div>
          </div>
          {/* CTA / brand */}
          <div className="lg:col-span-1 space-y-4 order-5">
            <p className="text-[11px] text-white/40 leading-relaxed">{t('footer.about')}</p>
            <a href="#register" className="inline-flex items-center px-5 py-2.5 rounded-full font-medium relative overflow-hidden focus-visible:outline-none text-sm">
              <span className="absolute inset-0 gradient-animate" />
              <span className="relative z-10">{t('footer.register')}</span>
            </a>
          </div>
        </div>
        <div className="mt-16 pt-8 border-t border-white/10 text-center text-[11px] text-white/40">&copy; {new Date().getFullYear()} {t('org.name')} • {t('brand.name')}</div>
      </div>
    </footer>
  );
};

const socials = [
  { label: 'Facebook', href: '#', icon: 'f' },
  { label: 'Instagram', href: '#', icon: '◎' },
  { label: 'LinkedIn', href: '#', icon: 'in' }
];
