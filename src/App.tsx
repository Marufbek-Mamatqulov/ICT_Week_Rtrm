import { useCallback } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
// Program removed as requested
// Removed Projects and About as requested
import { Footer } from './components/Footer';
import { LoadingScreen } from './components/LoadingScreen';
import { SpecialSession } from './components/SpecialSession';
import { MobileNav } from './components/MobileNav';
import { I18nProvider } from './i18n';

function App() {
  const handleCopyLink = useCallback(() => {
    const eventUrl = window.location.href + '#hero';
    navigator.clipboard.writeText(eventUrl).then(() => {
      // Provide accessible feedback
      const el = document.createElement('div');
      el.role = 'status';
      el.ariaLive = 'polite';
      el.textContent = 'Event link copied to clipboard';
      el.className = 'fixed bottom-4 left-1/2 -translate-x-1/2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-xl text-sm text-white/80 shadow-lg animate-fade-in';
      document.body.appendChild(el);
      setTimeout(() => el.remove(), 2400);
    }).catch(() => {
      alert('Unable to copy. Please copy manually.');
    });
  }, []);

  return (
    <I18nProvider>
      <LoadingScreen />
      <Navbar />
      <main>
        <Hero onCopyLink={handleCopyLink} />
  {/** Program section removed */}
  <SpecialSession />
      </main>
      <Footer />
  {/* Mobile only enhancements (QR removed as requested) */}
  <MobileNav />
    </I18nProvider>
  );
}

export default App;
