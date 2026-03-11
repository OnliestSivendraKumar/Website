import { useState, useEffect, useRef } from 'react';
import Header       from './components/Header';
import NavChrome    from './components/NavChrome';
import HeroSlide    from './components/HeroSlide';
import PanelRex     from './components/PanelRex';
import PanelStudio  from './components/PanelStudio';
import PanelFitting from './components/PanelFitting';
import PanelAtelier from './components/PanelAtelier';
import PanelHalo     from './components/PanelHalo';
import SectionMarketplace from './components/SectionMarketplace';
import SectionCallout from './components/SectionCallout';
import SectionReviews from './components/SectionReviews';
import Footer        from './components/Footer';
import useConstellationParticles from './hooks/useConstellationParticles';

export default function App() {
  /* ── Theme ── */
  const [theme, setTheme] = useState(() => {
    try { return localStorage.getItem('rexTheme') || 'dark'; } catch { return 'dark'; }
  });

  /* ── Language ── */
  const [activeLang, setActiveLang] = useState(() => {
    try { return localStorage.getItem('rexLang') || 'en'; } catch { return 'en'; }
  });

  /* ── Active tab ── */
  const [activeTab, setActiveTab] = useState('rex');

  /* ── Particle colour (mutated live — no re-render needed) ── */
  const particleColorRef = useRef({ r: 198, g: 167, b: 94 });

  /* ── Constellation canvas ── */
  const canvasRef = useRef(null);
  useConstellationParticles(canvasRef, particleColorRef);

  /* ── Hide header completely when in tabs section; keep hidden until clearly past section ── */
  const tabsSectionRef = useRef(null);
  const [hideHeaderOnPanels, setHideHeaderOnPanels] = useState(false);
  const TRIGGER_PX = 100;       // hide when section top is within this of viewport top
  const LEAVE_BUFFER_PX = -20;  // show header only when section bottom is above viewport by this much (avoids flicker)

  useEffect(() => {
    const handleScroll = () => {
      const el = tabsSectionRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const entered = rect.top <= TRIGGER_PX;
      const notPast = rect.bottom > LEAVE_BUFFER_PX;
      setHideHeaderOnPanels(entered && notPast);
    };
    const raf = () => requestAnimationFrame(handleScroll);
    raf();
    window.addEventListener('scroll', raf, { passive: true });
    document.addEventListener('scroll', raf, { passive: true });
    window.addEventListener('resize', raf);
    const t = setTimeout(handleScroll, 150);
    return () => {
      clearTimeout(t);
      window.removeEventListener('scroll', raf);
      document.removeEventListener('scroll', raf);
      window.removeEventListener('resize', raf);
    };
  }, []);

  /* ── Apply theme to <body> + swap particle colour ── */
  useEffect(() => {
    document.body.setAttribute('data-theme', theme);
    const col = theme === 'light'
      ? { r: 120, g: 82, b: 28 }
      : { r: 198, g: 167, b: 94 };
    Object.assign(particleColorRef.current, col);
    try { localStorage.setItem('rexTheme', theme); } catch {}
  }, [theme]);

  /* ── Persist language ── */
  useEffect(() => {
    try { localStorage.setItem('rexLang', activeLang); } catch {}
  }, [activeLang]);

  const toggleTheme = () => setTheme(t => t === 'dark' ? 'light' : 'dark');

  return (
    <>
      {/* Constellation canvas — truly fixed, always behind everything */}
      <canvas
        ref={canvasRef}
        id="rexCanvas"
        className="rex-canvas"
        aria-hidden="true"
      />

      {/* Sticky header: logo, nav, CTA */}
      <Header hideOnPanels={hideHeaderOnPanels} />

      {/* First section — standalone (like footer is a separate section) */}
      <HeroSlide />

      {/* Tabs section: glass bar matches header, merges with hero — one ref for hide detection */}
      <div ref={tabsSectionRef} className="rex-tabs-section">
        <div className="rex-chrome-wrap">
        <NavChrome
          activeTab={activeTab}
          onTabChange={setActiveTab}
        />
        </div>
        <div className="rex-panels">
        <PanelRex
          isActive={activeTab === 'rex'}
          activeLang={activeLang}
          onTabChange={setActiveTab}
        />

        <PanelStudio isActive={activeTab === 'studio'} />

        <PanelFitting
          isActive={activeTab === 'fitting'}
          onTabChange={setActiveTab}
        />

        <PanelAtelier isActive={activeTab === 'atelier'} />

        <PanelHalo isActive={activeTab === 'halo'} />
        </div>
      </div>

      {/* Post-tabs marketing section — reusable layout, just pass content */}
      <SectionCallout
        id="book-trainer"
        eyebrow="Customer Experience"
        title="Book a Trainer"
        subtitle="Learn, discover, and connect with our comprehensive customer experience."
        bullets={[
          { label: 'Live Video Sessions', body: 'Interactive demos via video call.' },
          { label: 'Expert Trainers', body: 'Certified fashion professionals.' },
          { label: 'Flexible Scheduling', body: 'Choose your convenient time.' },
        ]}
        cta={{ label: 'Book Your Free Demo', href: '#book-trainer' }}
        stats={[
          { value: '500+', label: 'Sessions Done' },
          { value: '4.9★', label: 'Average Rating' },
          { value: '30min', label: 'Free Session' },
        ]}
        image={{
          src: '/ds-1.png',
          alt: 'Fashion trainer working with fabrics in a studio.',
          overlay: {
            eyebrow: 'Schedule Now',
            title: 'Available Mon – Sat',
            body: '9 AM – 6 PM IST',
          },
        }}
      />

      {/* Market Place: Curated Collections + Featured Designers */}
      <SectionMarketplace />

      {/* Social proof / reviews section */}
      <SectionReviews />

      <Footer />
    </>
  );
}
