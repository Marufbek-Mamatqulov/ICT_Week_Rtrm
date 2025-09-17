import { useEffect, useState } from 'react';
import { useI18n } from '../i18n';

interface TimeLeft { days: number; hours: number; minutes: number; seconds: number; expired: boolean; }

const targetDate = new Date('2025-09-24T00:00:00+05:00').getTime(); // Tashkent time (UTC+5)

export const Countdown = () => {
  const { t } = useI18n();
  const [time, setTime] = useState<TimeLeft>(calc());

  function calc(): TimeLeft {
    const now = Date.now();
    let diff = Math.max(0, targetDate - now);
    const expired = diff <= 0;
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    diff -= days * 24 * 60 * 60 * 1000;
    const hours = Math.floor(diff / (1000 * 60 * 60));
    diff -= hours * 60 * 60 * 1000;
    const minutes = Math.floor(diff / (1000 * 60));
    diff -= minutes * 60 * 1000;
    const seconds = Math.floor(diff / 1000);
    return { days, hours, minutes, seconds, expired };
  }

  useEffect(() => {
    const id = setInterval(() => setTime(calc()), 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <div
      aria-label={t('countdown.until')}
      role="timer"
      className="flex flex-wrap gap-3 mt-4 justify-center items-center"
      data-expired={time.expired}
    >
      <TimeBox label={t('countdown.days')} value={time.days} />
      <Separator />
      <TimeBox label={t('countdown.hours')} value={time.hours} />
      <Separator />
      <TimeBox label={t('countdown.minutes')} value={time.minutes} />
      <Separator />
      <TimeBox label={t('countdown.seconds')} value={time.seconds} />
    </div>
  );
};

const TimeBox = ({ label, value }: { label: string; value: number }) => (
  <div className="flex flex-col items-center flex-shrink-0">
    <div className="relative group">
      <div className="w-12 h-16 md:w-16 md:h-20 rounded-xl bg-white/5 backdrop-blur-md border border-white/10 flex items-center justify-center text-2xl md:text-3xl font-bold tracking-tight shadow-[0_0_0_1px_rgba(255,255,255,0.05),0_0_20px_-4px_rgba(78,243,247,0.4)]">
        {String(value).padStart(2, '0')}
      </div>
      <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-primary-600/20 via-accent-500/20 to-neon/30 mix-blend-overlay blur-sm" />
    </div>
    <span className="mt-2 text-[10px] md:text-xs uppercase tracking-wide text-white/60">{label}</span>
  </div>
);

const Separator = () => (
  // hide separators on small screens to avoid awkward wrapping; show on md+
  <div className="hidden md:flex items-center">
    <div className="w-1 h-1 rounded-full bg-white/30 mb-4" />
    <div className="w-1 h-1 rounded-full bg-white/30 mt-4" />
  </div>
);
