/* OASIS Atelier — Slide 1: Full layout per design */
import { INTRO_FEATURES, FeatureIcon } from './atelierConstants';

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

export default function SceneAtelierIntro({ isActive, onShowHowVideo, onWatchDemo, selectedId = null, onSelectFeature }) {
  return (
    <section
      className={`atelier-scene atelier-intro${isActive ? ' active' : ''}`}
      aria-label="OASIS Atelier"
    >
      <div className="atelier-intro-inner">
        {/* Title at top with black background */}
        <div className="atelier-intro-header">
          <h1 className="atelier-intro-title">OASIS Atelier</h1>
          <p className="atelier-intro-tagline">Design. Connect. Create. Instantly.</p>
        </div>

        {/* Lower block: moved down, solid black so image is visible above */}
        <div className="atelier-intro-lower">
        {/* Feature cards — click to change entire slide background image */}
        <div className="atelier-intro-features" role="tablist" aria-label="Feature highlights">
          {INTRO_FEATURES.map((f) => (
            <button
              key={f.id}
              type="button"
              className={`atelier-intro-card${selectedId === f.id ? ' active' : ''}`}
              onClick={() => onSelectFeature?.(selectedId === f.id ? null : f.id)}
              role="tab"
              aria-pressed={selectedId === f.id}
              aria-selected={selectedId === f.id}
              data-tooltip={f.description}
              title={f.description}
              aria-label={`${f.title}. ${f.description}`}
            >
              <span className="atelier-intro-card-icon"><FeatureIcon name={f.icon} /></span>
              <span className="atelier-intro-card-copy">
                <span className="atelier-intro-card-title">{f.title}</span>
                <span className="atelier-intro-card-desc">{f.description}</span>
              </span>
            </button>
          ))}
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
