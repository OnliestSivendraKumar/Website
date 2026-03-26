import { useState, useRef, useEffect } from 'react';

const MEASUREMENTS = [
  { label: 'Height',        value: '165', unit: 'cm', zone: 'full',  max: 200 },
  { label: 'Shoulder',      value: '40',  unit: 'cm', zone: 'upper', max: 55  },
  { label: 'Bust',          value: '88',  unit: 'cm', zone: 'upper', max: 120 },
  { label: 'Waist',         value: '72',  unit: 'cm', zone: 'mid',   max: 100 },
  { label: 'Hips',          value: '94',  unit: 'cm', zone: 'lower', max: 120 },
  { label: 'Blouse Length', value: '38',  unit: 'cm', zone: 'upper', max: 50  },
  { label: 'Saree Drop',    value: '104', unit: 'cm', zone: 'lower', max: 120 },
  { label: 'Inseam',        value: '74',  unit: 'cm', zone: 'lower', max: 90  },
];

/* Short, punchy steps — how the Fitting Room flow works (Slide 1: Mannequin) */
const BODY_SCANNER_STEPS = [
  { step: '1', title: 'Upload', line: 'Capture with camera or upload photos/videos — AI generates your 3D double' },
  { step: '2', title: 'Create', line: 'Your personalized 3D mannequin is ready — use it to try looks and get precise fit.' },
  { step: '3', title: 'Design', line: 'Dress your mannequin in saree & blouse with real 3D models. See how it looks and fits before you choose.' },
];

function cmToFtIn(cm) {
  const totalIn = Number(cm) / 2.54;
  const ft = Math.floor(totalIn / 12);
  const inVal = Math.round(totalIn % 12);
  if (ft === 0) return `${inVal} in`;
  if (inVal === 0) return `${ft} ft`;
  return `${ft} ft ${inVal} in`;
}

const UNIT_OPTIONS = [
  { value: 'metric', label: 'Metric – cm' },
  { value: 'imperial', label: 'Imperial – ft/in' },
];

export default function SceneMannequin({ isActive, onShowHowVideo, onShowPrivacyPlan }) {
  const [unitSystem, setUnitSystem] = useState('metric');
  const [unitDropdownOpen, setUnitDropdownOpen] = useState(false);
  const unitDropdownRef = useRef(null);

  useEffect(() => {
    if (!unitDropdownOpen) return;
    function handleClickOutside(e) {
      if (unitDropdownRef.current && !unitDropdownRef.current.contains(e.target)) {
        setUnitDropdownOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [unitDropdownOpen]);

  const currentUnitLabel = UNIT_OPTIONS.find((o) => o.value === unitSystem)?.label ?? 'Metric – cm';

  return (
    <section
      className={`fit-scene${isActive ? ' active' : ''}`}
      data-fit-scene="1"
      aria-label="3D Body Scanner"
    >
      <div className="fit-bg fit-bg-1" aria-hidden="true" />

      <aside className="fit-scene-label" aria-hidden="true">
        <span className="fit-scene-num">01</span>
        <span className="fit-scene-lname">Body Scanner</span>
      </aside>

      <div className="fit-mannequin-layout rex-reveal">

        {/* ── LEFT: copy, video, actions (grid rows 1–3) ── */}
        <div className="fit-scanner-copy rex-delay-0">
          <p className="rex-over">AI Body Intelligence</p>
          <h2 className="rex-scene-h">
            Capture Your Mannequin <em>Precisely</em>
          </h2>
        </div>

        {/* Video — row 2, same height as card */}
        <div className="fit-video-frame rex-delay-1">
            <span className="rex-vc rex-vc-tl" aria-hidden="true" />
            <span className="rex-vc rex-vc-tr" aria-hidden="true" />
            <span className="rex-vc rex-vc-bl" aria-hidden="true" />
            <span className="rex-vc rex-vc-br" aria-hidden="true" />

            <video
              className="fit-video"
              src="https://res.cloudinary.com/djlqifbxp/video/upload/v1774516523/Mannequin_yom4zc.mp4"
              autoPlay muted loop playsInline
              aria-label="3D body scanning demonstration"
            />

            <div className="fit-scan-sweep" aria-hidden="true" />

            <div className="fit-video-overlay" aria-hidden="true">
              <span className="fit-video-badge">3D Scan</span>
              <span className="fit-video-live">
                <span className="fit-live-dot" />AI Live
              </span>
            </div>
        </div>

        {/* Actions — How it works (replaces stat chips) */}
        <div className="fit-video-actions rex-delay-2">
            {onShowHowVideo && (
              <button
                type="button"
                className="rex-btn rex-btn-primary rex-how-it-works-btn fit-how-cta"
                onClick={() => onShowHowVideo()}
                aria-label="Watch how it works"
              >
                How it works
              </button>
            )}
            {onShowPrivacyPlan && (
              <button
                type="button"
                className="fit-privacy-link"
                onClick={() => onShowPrivacyPlan()}
                aria-label="Privacy and data plan"
              >
                <span className="fit-privacy-icon" aria-hidden="true">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
                </span>
                Privacy & data
              </button>
            )}
          </div>

        {/* ── RIGHT: AI Analysis Complete card + How it works below ── */}
        <div className="fit-right-col rex-delay-1">
          <div className="fit-output-card">
            <div className="fit-card-body">
              <div className="fit-body-inner">
                <div className="fit-figure-wrap">
                  <img
                    src="https://res.cloudinary.com/djlqifbxp/image/upload/v1774516578/doll_czzc6q.png"
                    alt="3D mannequin with measurement points"
                    className="fit-silhouette fit-silhouette-img"
                  />
                </div>
              </div>

              <div className="fit-card-divider" aria-hidden="true" />

              <div className="fit-measure-inner">
                <div className="fit-measure-head-row">
                  <p className="fit-col-head">Body Measurements</p>
                  <div className="fit-measure-unit-dropdown" ref={unitDropdownRef}>
                    <button
                      type="button"
                      className="fit-measure-unit-trigger"
                      onClick={() => setUnitDropdownOpen((o) => !o)}
                      aria-haspopup="listbox"
                      aria-expanded={unitDropdownOpen}
                      aria-label="Unit system"
                    >
                      <span>{currentUnitLabel}</span>
                      <span className="fit-measure-unit-chevron" aria-hidden="true">▼</span>
                    </button>
                    {unitDropdownOpen && (
                      <ul
                        className="fit-measure-unit-menu"
                        role="listbox"
                        aria-label="Unit system"
                      >
                        {UNIT_OPTIONS.map((opt) => (
                          <li
                            key={opt.value}
                            role="option"
                            aria-selected={unitSystem === opt.value}
                            className={`fit-measure-unit-option${unitSystem === opt.value ? ' selected' : ''}`}
                            onClick={() => {
                              setUnitSystem(opt.value);
                              setUnitDropdownOpen(false);
                            }}
                          >
                            {opt.label}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
                <div className="fit-measure-list">
                  {MEASUREMENTS.map((m) => {
                    const numVal = Number(m.value);
                    const pct = Math.min(100, Math.round((numVal / (m.max || 100)) * 100));
                    return (
                      <div key={m.label} className={`fit-measure-row fit-zone-${m.zone}`}>
                        <span className="fit-measure-dot" aria-hidden="true" />
                        <span className="fit-measure-label">{m.label}</span>
                        <div className="fit-measure-bar" role="presentation" aria-hidden="true">
                          <div className="fit-measure-bar-fill" style={{ width: `${pct}%` }} />
                        </div>
                        <span className="fit-measure-val">
                          {unitSystem === 'metric'
                            ? `${m.value}`
                            : cmToFtIn(m.value)}
                          <span className="fit-measure-unit">
                            {unitSystem === 'metric' ? ' cm' : ''}
                          </span>
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          {/* How it works — below AI Analysis Complete */}
          <div className="fit-features-panel fit-how-below-card">
            <p className="fit-features-head">Steps</p>
            <div className="fit-features-steps" role="list" aria-label="Body scanner steps">
              {BODY_SCANNER_STEPS.map((s, i) => (
                <div key={i} className="fit-step-chip" role="listitem">
                  <span className="fit-step-num" aria-hidden="true">{s.step}</span>
                  <div className="fit-step-content">
                    <span className="fit-step-title">{s.title}</span>
                    <span className="fit-step-line">{s.line}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
