import { useState } from 'react';

const WRAP_STYLES = [
  { id: 'nivi',       label: 'Nivi' },
  { id: 'bengali',    label: 'Bengali' },
  { id: 'gujarati',   label: 'Gujarati' },
  { id: 'maharashtrian', label: 'Maharashtrian' },
  { id: 'lehenga',    label: 'Lehenga-style' },
];

export default function SceneWrapStyles({ isActive }) {
  const [activeStyle, setActiveStyle] = useState('nivi');
  const selected = WRAP_STYLES.find(s => s.id === activeStyle);

  return (
    <section
      className={`fit-scene${isActive ? ' active' : ''}`}
      data-fit-scene="2"
      aria-label="Wrap Styles"
    >
      <div className="fit-bg fit-bg-2" aria-hidden="true" />

      <aside className="fit-scene-label" aria-hidden="true">
        <span className="fit-scene-num">02</span>
        <span className="fit-scene-lname">Wrap Styles</span>
      </aside>

      <div className="fit-room-layout rex-reveal">

        {/* Left: copy */}
        <div className="fit-preview-col rex-delay-0">
          <div className="fit-preview-info">
            <p className="rex-over">Wrap Styles</p>
            <h2 className="rex-scene-h">
              One saree.<br /><em>Many ways to wear.</em>
            </h2>
            <p className="rex-scene-sub">
              The video shows your mannequin in a saree. Select a drape style
              below — the mannequin updates to that way of wearing so you can
              see how it looks before you choose.
            </p>
            <p className="fit-wrap-hint rex-delay-1">
              Select a style to see it on the mannequin.
            </p>
          </div>
        </div>

        {/* Right: video + style selector */}
        <div className="fit-wrap-right rex-delay-1">
          <div className="fit-preview-card">
            <span className="rex-vc rex-vc-tl" aria-hidden="true" />
            <span className="rex-vc rex-vc-tr" aria-hidden="true" />
            <span className="rex-vc rex-vc-bl" aria-hidden="true" />
            <span className="rex-vc rex-vc-br" aria-hidden="true" />

            <video
              className="fit-preview-video"
              src="hero-model.mp4"
              autoPlay muted loop playsInline
              aria-label="Saree drape style preview"
            />

            <div className="fit-preview-overlay" aria-hidden="true">
              <div className="fit-preview-badge-row">
                <span className="fit-preview-badge">
                  <span className="fit-live-dot" />Live
                </span>
              </div>
              <div className="fit-preview-tags">
                <span className="fit-preview-tag fit-wrap-now">
                  Now showing: {selected?.label}
                </span>
              </div>
            </div>
          </div>

          <div className="fit-wrap-section">
            <p className="fit-custom-label">Drape style</p>
            <div
              className="fit-style-chips"
              role="group"
              aria-label="Wrap style options"
            >
              {WRAP_STYLES.map(s => (
                <button
                  key={s.id}
                  className={`fit-style-chip${activeStyle === s.id ? ' active' : ''}`}
                  aria-pressed={activeStyle === s.id}
                  onClick={() => setActiveStyle(s.id)}
                >
                  {s.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
