import { useState, useEffect, useRef } from 'react';

const TABS = [
  { id: 'rex',     label: 'Onliest REX'     },
  { id: 'studio',  label: 'Design Studio' },
  { id: 'fitting', label: 'Fitting Room'  },
  { id: 'atelier', label: 'Onliest Atelier' },
  { id: 'halo',    label: 'Onliest HALO'    },
];

export default function NavChrome({
  activeTab, onTabChange,
}) {
  const tabRefs        = useRef({});
  const tabsScrollRef  = useRef(null);
  const [indStyle, setIndStyle] = useState({ left: 0, width: 0 });

  /* Update sliding indicator and scroll active tab into view */
  function updateIndicator() {
    const el = tabRefs.current[activeTab];
    const scrollEl = tabsScrollRef.current;
    if (!el) return;
    const { offsetLeft, offsetWidth } = el;
    const inset = offsetWidth * 0.18;
    setIndStyle({ left: offsetLeft + inset, width: offsetWidth - inset * 2 });

    /* Scroll so first/last tab is fully visible, not clipped */
    if (scrollEl) {
      const tabIndex = TABS.findIndex(t => t.id === activeTab);
      const padding = 16;
      if (tabIndex === 0) {
        scrollEl.scrollTo({ left: 0, behavior: 'smooth' });
      } else if (tabIndex === TABS.length - 1) {
        scrollEl.scrollTo({ left: scrollEl.scrollWidth - scrollEl.clientWidth, behavior: 'smooth' });
      } else {
        const targetLeft = el.offsetLeft - padding;
        scrollEl.scrollTo({ left: Math.max(0, targetLeft), behavior: 'smooth' });
      }
    }
  }

  useEffect(updateIndicator, [activeTab]);

  useEffect(() => {
    window.addEventListener('resize', updateIndicator);
    return () => window.removeEventListener('resize', updateIndicator);
  }, [activeTab]);

  /* Arrow scroll — left goes to start (first tab full), right scrolls forward */
  const scrollTabs = (dir) => {
    const el = tabsScrollRef.current;
    if (!el) return;
    if (dir < 0) {
      el.scrollTo({ left: 0, behavior: 'smooth' });
    } else {
      const step = el.offsetWidth * 0.6;
      el.scrollBy({ left: step, behavior: 'smooth' });
    }
  };

  return (
    <nav className="rex-chrome" role="tablist" aria-label="Onliest sections">

      {/* Tab arrows — visible on mobile */}
      <button
        type="button"
        className="rex-chrome-tab-arrow rex-chrome-tab-arrow--prev"
        aria-label="Previous tabs"
        onClick={() => scrollTabs(-1)}
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 18l-6-6 6-6"/></svg>
      </button>

      {/* Tab buttons — horizontal scroll with arrows on mobile */}
      <div className="rex-chrome-tabs" ref={tabsScrollRef}>
        {TABS.map(tab => (
          <button
            key={tab.id}
            ref={el => { tabRefs.current[tab.id] = el; }}
            className={`rex-tab${activeTab === tab.id ? ' active' : ''}`}
            role="tab"
            id={`tab-${tab.id}`}
            aria-selected={activeTab === tab.id}
            aria-controls={`panel-${tab.id}`}
            data-tab={tab.id}
            onClick={() => onTabChange(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <button
        type="button"
        className="rex-chrome-tab-arrow rex-chrome-tab-arrow--next"
        aria-label="Next tabs"
        onClick={() => scrollTabs(1)}
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18l6-6-6-6"/></svg>
      </button>

      {/* Sliding gold underline indicator */}
      <span
        className="rex-tab-indicator"
        id="rexTabIndicator"
        aria-hidden="true"
        style={{ left: indStyle.left, width: indStyle.width }}
      />
    </nav>
  );
}
