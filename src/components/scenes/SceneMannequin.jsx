
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

export default function SceneMannequin({ isActive }) {
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
              src="blouse-3d.mp4"
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

        {/* ── RIGHT: output card — same row as video, matches video box height ── */}
        <div className="fit-output-card rex-delay-1">
          <span className="rex-vc rex-vc-tl" aria-hidden="true" />
          <span className="rex-vc rex-vc-tr" aria-hidden="true" />
          <span className="rex-vc rex-vc-bl" aria-hidden="true" />
          <span className="rex-vc rex-vc-br" aria-hidden="true" />

          {/* Card header */}
          <div className="fit-card-header">
            <span className="fit-card-header-label">
              <span aria-hidden="true">&#9671;</span> AI Analysis Complete
            </span>
            <span className="fit-card-accuracy">
              97% <span className="fit-card-accuracy-sub">Scan Accuracy</span>
            </span>
          </div>

          {/* Card body: silhouette | divider | measurements */}
          <div className="fit-card-body">

            <div className="fit-body-inner">
              <p className="fit-col-head">3D Mannequin</p>
              <div className="fit-figure-wrap">
                <svg
                  className="fit-silhouette"
                  viewBox="0 0 110 290"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-label="Body silhouette with measurement points"
                >
                  <ellipse cx="55" cy="18" rx="14" ry="16"
                    fill="rgba(198,167,94,0.08)" stroke="rgba(198,167,94,0.58)" strokeWidth="0.9" />
                  <path d="M50 33 L49 43 M60 33 L61 43"
                    stroke="rgba(198,167,94,0.45)" strokeWidth="0.9" />
                  <path d="M49 43 Q34 46 22 56"
                    stroke="rgba(198,167,94,0.52)" strokeWidth="0.9" fill="none" />
                  <path d="M61 43 Q76 46 88 56"
                    stroke="rgba(198,167,94,0.52)" strokeWidth="0.9" fill="none" />
                  <path d="M22 56 Q14 80 16 112 Q16 120 18 126"
                    stroke="rgba(198,167,94,0.38)" strokeWidth="0.85" fill="none" />
                  <path d="M88 56 Q96 80 94 112 Q94 120 92 126"
                    stroke="rgba(198,167,94,0.38)" strokeWidth="0.85" fill="none" />
                  <ellipse cx="17" cy="130" rx="5" ry="6"
                    fill="rgba(198,167,94,0.06)" stroke="rgba(198,167,94,0.32)" strokeWidth="0.8" />
                  <ellipse cx="93" cy="130" rx="5" ry="6"
                    fill="rgba(198,167,94,0.06)" stroke="rgba(198,167,94,0.32)" strokeWidth="0.8" />
                  <path d="M30 46 C24 58 20 76 22 100 C22 112 24 120 26 128 Q38 134 55 134 Q72 134 84 128 C86 120 88 112 88 100 C90 76 86 58 80 46 C72 42 64 40 55 40 C46 40 38 42 30 46 Z"
                    fill="rgba(198,167,94,0.07)" stroke="rgba(198,167,94,0.54)" strokeWidth="0.9" />
                  <path d="M24 104 Q38 99 55 100 Q72 99 86 104"
                    stroke="rgba(198,167,94,0.28)" strokeWidth="0.7" strokeDasharray="2.5 3" fill="none" />
                  <path d="M26 128 C20 144 16 160 18 172 C20 182 34 188 55 188 C76 188 90 182 92 172 C94 160 90 144 84 128"
                    fill="rgba(198,167,94,0.07)" stroke="rgba(198,167,94,0.54)" strokeWidth="0.9" />
                  <path d="M18 168 Q36 163 55 164 Q74 163 92 168"
                    stroke="rgba(198,167,94,0.28)" strokeWidth="0.7" strokeDasharray="2.5 3" fill="none" />
                  <path d="M24 186 C22 206 22 230 24 258 L24 286 L38 286 L40 258 C42 230 44 206 46 188"
                    fill="rgba(198,167,94,0.05)" stroke="rgba(198,167,94,0.42)" strokeWidth="0.85" />
                  <path d="M86 186 C88 206 88 230 86 258 L86 286 L72 286 L70 258 C68 230 66 206 64 188"
                    fill="rgba(198,167,94,0.05)" stroke="rgba(198,167,94,0.42)" strokeWidth="0.85" />
                  <line x1="6" y1="52"  x2="104" y2="52"  stroke="rgba(198,167,94,0.13)" strokeWidth="0.5" strokeDasharray="2 5" />
                  <line x1="6" y1="82"  x2="104" y2="82"  stroke="rgba(198,167,94,0.13)" strokeWidth="0.5" strokeDasharray="2 5" />
                  <line x1="6" y1="103" x2="104" y2="103" stroke="rgba(198,167,94,0.13)" strokeWidth="0.5" strokeDasharray="2 5" />
                  <line x1="6" y1="168" x2="104" y2="168" stroke="rgba(198,167,94,0.13)" strokeWidth="0.5" strokeDasharray="2 5" />
                  <circle cx="55" cy="52"  r="2.8" fill="var(--gold)" opacity="0.92" />
                  <circle cx="55" cy="82"  r="2.8" fill="var(--gold)" opacity="0.92" />
                  <circle cx="55" cy="103" r="2.8" fill="var(--gold)" opacity="0.92" />
                  <circle cx="55" cy="168" r="2.8" fill="var(--gold)" opacity="0.92" />
                  <circle cx="55" cy="286" r="2.8" fill="var(--gold)" opacity="0.88" />
                </svg>
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

      </div>
    </section>
  );
}
