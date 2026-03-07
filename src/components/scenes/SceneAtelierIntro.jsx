/* Onliest Atelier — Slide 1: Full layout per design */
import { useRef, useCallback, useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { INTRO_FEATURES, ATELIER_FEATURES, FeatureIcon } from './atelierConstants';

const SCROLL_STEP = 320;
/* All tabs in one row: intro (4) then core (6); each has source for click/active */
const ALL_TABS = [
  ...INTRO_FEATURES.map((f) => ({ ...f, source: 'intro' })),
  ...ATELIER_FEATURES.map((f) => ({ ...f, source: 'core' })),
];

const SECURITY_ITEMS = [
  { icon: 'lock', label: 'Encrypted Sessions' },
  { icon: 'check', label: 'Permission-Based Access' },
  { icon: 'eye', label: 'Private Screen Sharing' },
  { icon: 'clock', label: 'Automatic Session Expiry' },
];

function SecurityIcon({ name }) {
  const c = { width: 16, height: 16, fill: 'none', stroke: 'currentColor', strokeWidth: 2, strokeLinecap: 'round', strokeLinejoin: 'round' };
  if (name === 'lock') return <svg {...c} viewBox="0 0 24 24"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>;
  if (name === 'check') return <svg {...c} viewBox="0 0 24 24"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>;
  if (name === 'eye') return <svg {...c} viewBox="0 0 24 24"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>;
  if (name === 'clock') return <svg {...c} viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>;
  return null;
}

export default function SceneAtelierIntro({ isActive, onShowHowVideo, onWatchDemo, selectedIntroId = null, onSelectIntroFeature, selectedId = null, onSelectFeature }) {
  const tabsScrollRef = useRef(null);
  const [tooltip, setTooltip] = useState(null);

  const scrollTabs = useCallback((direction) => {
    const el = tabsScrollRef.current;
    if (!el) return;
    el.scrollBy({ left: direction === 'left' ? -SCROLL_STEP : SCROLL_STEP, behavior: 'smooth' });
  }, []);

  useEffect(() => {
    if (!tooltip) return;
    const el = tabsScrollRef.current;
    if (!el) return;
    const onScroll = () => setTooltip(null);
    el.addEventListener('scroll', onScroll);
    return () => el.removeEventListener('scroll', onScroll);
  }, [tooltip]);

  const showTooltip = useCallback((e, text) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setTooltip({
      text,
      left: rect.left + rect.width / 2,
      top: rect.top,
    });
  }, []);
  const hideTooltip = useCallback(() => setTooltip(null), []);

  return (
    <section
      className={`atelier-scene atelier-intro${isActive ? ' active' : ''}`}
      aria-label="Onliest Atelier"
    >
      <div className="atelier-intro-inner">
        {/* Title at top with black background */}
        <div className="atelier-intro-header">
          <h1 className="atelier-intro-title">Onliest Atelier</h1>
          <p className="atelier-intro-tagline">Real-Time Design Collaboration<br />with Experts and Friends</p>
        </div>

        {/* Lower block: moved down, solid black so image is visible above */}
        <div className="atelier-intro-lower">
        <div className="atelier-intro-tabs-wrap">
          {tooltip && createPortal(
            <div
              className="atelier-intro-tooltip"
              style={{
                left: tooltip.left,
                top: tooltip.top,
              }}
              role="tooltip"
            >
              {tooltip.text}
            </div>,
            document.body
          )}
          <button
            type="button"
            className="atelier-intro-tabs-arrow atelier-intro-tabs-arrow--left"
            aria-label="Scroll tabs left"
            onClick={() => scrollTabs('left')}
          >
            ‹
          </button>
          <div className="atelier-intro-tabs-scroll" ref={tabsScrollRef} role="region" aria-label="Feature tabs">
            <div className="atelier-intro-tabs-row" role="tablist">
              {ALL_TABS.map((f) => {
                const isIntro = f.source === 'intro';
                const isActive = isIntro ? selectedIntroId === f.id : selectedId === f.id;
                return (
                  <button
                    key={`${f.source}-${f.id}`}
                    type="button"
                    className={`atelier-intro-card atelier-intro-card--inline${isActive ? ' active' : ''}`}
                    onClick={() => {
                      if (isIntro) onSelectIntroFeature?.(isActive ? null : f.id);
                      else onSelectFeature?.(isActive ? null : f.id);
                    }}
                    onMouseEnter={(e) => showTooltip(e, f.description)}
                    onMouseLeave={hideTooltip}
                    role="tab"
                    aria-pressed={isActive}
                    aria-selected={isActive}
                    aria-label={`${f.title}. ${f.description}`}
                  >
                    <span className="atelier-intro-card-icon"><FeatureIcon name={f.icon} /></span>
                    <span className="atelier-intro-card-copy">
                      <span className="atelier-intro-card-title">{f.title}</span>
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
          <button
            type="button"
            className="atelier-intro-tabs-arrow atelier-intro-tabs-arrow--right"
            aria-label="Scroll tabs right"
            onClick={() => scrollTabs('right')}
          >
            ›
          </button>
        </div>

        {/* Security footer */}
        <div className="atelier-intro-security">
          {SECURITY_ITEMS.map((item) => (
            <span key={item.label} className="atelier-intro-security-item">
              <SecurityIcon name={item.icon} />
              <span>{item.label}</span>
            </span>
          ))}
        </div>

        {/* How it works + Watch Demo — below Encrypted Sessions bar */}
        <div className="atelier-intro-cta-below">
          {onShowHowVideo && (
            <button
              type="button"
              className="atelier-intro-btn atelier-intro-btn-how rex-btn rex-btn-primary fit-how-cta"
              onClick={onShowHowVideo}
            >
              How it works
            </button>
          )}
          {onWatchDemo && (
            <button
              type="button"
              className="atelier-intro-btn atelier-intro-btn-demo"
              onClick={onWatchDemo}
            >
              Watch Demo <span aria-hidden="true">→</span>
            </button>
          )}
        </div>
        </div>
      </div>
    </section>
  );
}
