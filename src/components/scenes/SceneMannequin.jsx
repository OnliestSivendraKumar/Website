
const MEASUREMENTS = [
  { label: 'Height',        value: '165', unit: 'cm', zone: 'full'  },
  { label: 'Shoulder',      value: '40',  unit: 'cm', zone: 'upper' },
  { label: 'Bust',          value: '88',  unit: 'cm', zone: 'upper' },
  { label: 'Waist',         value: '72',  unit: 'cm', zone: 'mid'   },
  { label: 'Hips',          value: '94',  unit: 'cm', zone: 'lower' },
  { label: 'Blouse Length', value: '38',  unit: 'cm', zone: 'upper' },
  { label: 'Saree Drop',    value: '104', unit: 'cm', zone: 'lower' },
  { label: 'Inseam',        value: '74',  unit: 'cm', zone: 'lower' },
];

/* Short, punchy steps — how the Fitting Room flow works (Slide 1: Mannequin) */
const BODY_SCANNER_STEPS = [
  { step: '1', title: 'Upload', line: 'Camera or image → AI builds your 3D double' },
  { step: '2', title: 'Dress', line: 'Saree & blouse on a real woman. No guesswork.' },
  { step: '3', title: 'Measure', line: 'Body + measurements in two columns. Done.' },
];

export default function SceneMannequin({ isActive, onShowHowVideo }) {
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
            Capture.<br /><em>Dress Precisely.</em>
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
              src="/Mannequin.mp4"
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

        {/* Actions — stat chips */}
        <div className="fit-video-actions rex-delay-2">
            <div className="fit-stat-chips">
              <span className="fit-stat-chip">
                <span className="fit-stat-val">97%</span>
                <span className="fit-stat-lbl">Accuracy</span>
              </span>
              <span className="fit-stat-chip">
                <span className="fit-stat-val">8</span>
                <span className="fit-stat-lbl">Points</span>
              </span>
              <span className="fit-stat-chip">
                <span className="fit-stat-val">3D</span>
                <span className="fit-stat-lbl">Model</span>
              </span>
            </div>
          </div>

        {/* ── RIGHT: output card + feature highlights ── */}
        <div className="fit-right-col rex-delay-1">
          <div className="fit-output-card">
            <span className="rex-vc rex-vc-tl" aria-hidden="true" />
            <span className="rex-vc rex-vc-tr" aria-hidden="true" />
            <span className="rex-vc rex-vc-bl" aria-hidden="true" />
            <span className="rex-vc rex-vc-br" aria-hidden="true" />

            <div className="fit-card-header">
              <span className="fit-card-header-label">
                <span aria-hidden="true">&#9671;</span> AI Analysis Complete
              </span>
              <span className="fit-card-accuracy">
                97% <span className="fit-card-accuracy-sub">Scan Accuracy</span>
              </span>
            </div>

            <div className="fit-card-body">
              <div className="fit-body-inner">
                <p className="fit-col-head">3D Mannequin</p>
                <div className="fit-figure-wrap">
                  <img
                    src="/doll.png"
                    alt="3D mannequin with measurement points"
                    className="fit-silhouette fit-silhouette-img"
                  />
                </div>
              </div>

              <div className="fit-card-divider" aria-hidden="true" />

              <div className="fit-measure-inner">
                <p className="fit-col-head">Body Measurements</p>
                <div className="fit-measure-list">
                  {MEASUREMENTS.map((m) => (
                    <div key={m.label} className={`fit-measure-row fit-zone-${m.zone}`}>
                      <span className="fit-measure-dot" aria-hidden="true" />
                      <span className="fit-measure-label">{m.label}</span>
                      <span className="fit-measure-val">
                        {m.value}<span className="fit-measure-unit"> {m.unit}</span>
                      </span>
                    </div>
                  ))}
                </div>
                <p className="fit-measure-ai-tag">&#9671; AI Extracted · 8 Points</p>
              </div>
            </div>
          </div>

          <div className="fit-features-panel">
            <p className="fit-features-head">How it works</p>
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
            {onShowHowVideo && (
              <button
                type="button"
                className="rex-btn rex-btn-primary fit-how-cta"
                onClick={() => onShowHowVideo()}
                aria-label="Watch how it works"
              >
                How it works
              </button>
            )}
          </div>
        </div>

      </div>
    </section>
  );
}
