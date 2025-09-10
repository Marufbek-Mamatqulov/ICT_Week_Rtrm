import { useI18n } from '../i18n';

export const Footer = () => {
  const { t } = useI18n();
  return (
    <footer id="footer" className="relative bg-[#0B1422] pt-20 border-t border-white/10">
      <div className="absolute inset-0 bg-gradient-to-t from-primary-600/10 via-transparent to-transparent pointer-events-none" aria-hidden="true" />
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col items-center gap-6">
          <p className="text-[12px] text-white/50 leading-relaxed text-center max-w-xl">{t('footer.about')}</p>
        </div>
        <div className="mt-12 pt-6 border-t border-white/10 text-center text-[11px] text-white/40">&copy; {new Date().getFullYear()} {t('org.name')} • {t('brand.name')}</div>
      </div>
    </footer>
  );
};

