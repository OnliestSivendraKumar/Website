import { useState, useEffect, useRef } from 'react';
import Header       from '../components/Header';
import NavChrome    from '../components/NavChrome';
import HeroSlide    from '../components/HeroSlide';
import PanelRex     from '../components/PanelRex';
import PanelStudio  from '../components/PanelStudio';
import PanelFitting from '../components/PanelFitting';
import PanelAtelier from '../components/PanelAtelier';
import PanelHalo    from '../components/PanelHalo';
import SectionMarketplace from '../components/SectionMarketplace';
import SectionMagazineTabs from '../components/SectionMagazineTabs';
import SectionCallout from '../components/SectionCallout';
import SectionReviews from '../components/SectionReviews';
import Footer        from '../components/Footer';

export default function HomePage({ activeLang, onTabChange }) {
  const [activeTab, setActiveTab] = useState('rex');
  const tabsSectionRef = useRef(null);
  const [hideHeaderOnPanels, setHideHeaderOnPanels] = useState(false);
  const TRIGGER_PX = 100;
  const LEAVE_BUFFER_PX = -20;

  useEffect(() => {
    const handleScroll = () => {
      const el = tabsSectionRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      setHideHeaderOnPanels(rect.top <= TRIGGER_PX && rect.bottom > LEAVE_BUFFER_PX);
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

  const setTab = (tab) => {
    setActiveTab(tab);
    onTabChange?.(tab);
  };

  return (
    <>
      <Header hideOnPanels={hideHeaderOnPanels} />
      <HeroSlide />
      <div ref={tabsSectionRef} className="rex-tabs-section">
        <div className="rex-chrome-wrap">
          <NavChrome activeTab={activeTab} onTabChange={setTab} />
        </div>
        <div className="rex-panels">
          <PanelRex isActive={activeTab === 'rex'} activeLang={activeLang} onTabChange={setTab} />
          <PanelStudio isActive={activeTab === 'studio'} />
          <PanelFitting isActive={activeTab === 'fitting'} onTabChange={setTab} />
          <PanelAtelier isActive={activeTab === 'atelier'} />
          <PanelHalo isActive={activeTab === 'halo'} />
        </div>
      </div>
      <SectionMagazineTabs />
      <SectionCallout
        id="book-trainer"
        eyebrow="Live Experience"
        title="Book a Trainer or Designer"
        subtitle="Learn, discover, and connect with our comprehensive customer experience — choose a live product demo or a 1:1 styling session with a fashion designer."
        bullets={[
          { label: 'Live Video Sessions', body: 'Interactive demos via video call.' },
          { label: 'Expert Trainers & Designers', body: 'Certified fashion professionals and couture specialists.' },
          { label: 'Flexible Scheduling', body: 'Choose your convenient time.' },
        ]}
        cta={{ label: 'Book Your Free Demo', href: '/contact' }}
        secondaryCta={{ label: 'Book a Fashion Designer', href: '/about#designers' }}
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
      <SectionMarketplace />
      <SectionReviews />
      <Footer />
    </>
  );
}
