import { useState } from 'react';

const DESIGNS = [
  { id: 'design-a', label: 'Design A' },
  { id: 'design-b', label: 'Design B' },
  { id: 'design-c', label: 'Design C' },
  { id: 'design-d', label: 'Design D' },
];

export default function SceneCompareDesign({ isActive, onGotoTab }) {
  const [designA, setDesignA] = useState('design-a');
  const [designB, setDesignB] = useState('design-b');

  const selectedA = DESIGNS.find(d => d.id === designA);
  const selectedB = DESIGNS.find(d => d.id === designB);

  return (
    <section
      className={`fit-scene${isActive ? ' active' : ''}`}
      data-fit-scene="3"
      aria-label="Compare Design"
    >
      <div className="fit-bg fit-bg-2" aria-hidden="true" />

      <aside className="fit-scene-label" aria-hidden="true">
        <span className="fit-scene-num">03</span>
        <span className="fit-scene-lname">Compare Design</span>
      </aside>

      <div className="fit-room-layout rex-reveal">

        {/* Left: copy */}
        <div className="fit-preview-col rex-delay-0">
          <div className="fit-preview-info">
            <p className="rex-over">Compare Design</p>
            <h2 className="rex-scene-h">
              Side by side.<br /><em>Choose with confidence.</em>
            </h2>
            <p className="rex-scene-sub">
              Multiple saree designs on a full human — select two to compare.
              Once selected, the view shows the compared designs so you can
              decide before you buy.
            </p>
          </div>
        </div>

        {/* Right: comparison UI — two selectors + video */}
        <div className="fit-compare-right rex-delay-1">
          <div className="fit-compare-selectors">
            <div className="fit-compare-group">
              <p className="fit-custom-label">Compare</p>
              <div className="fit-style-chips" role="group" aria-label="First design">
                {DESIGNS.map(d => (
                  <button
                    key={d.id}
                    className={`fit-style-chip${designA === d.id ? ' active' : ''}`}
                    aria-pressed={designA === d.id}
                    onClick={() => setDesignA(d.id)}
                  >
                    {d.label}
                  </button>
                ))}
              </div>
            </div>
            <span className="fit-compare-vs" aria-hidden="true">vs</span>
            <div className="fit-compare-group">
              <p className="fit-custom-label">With</p>
              <div className="fit-style-chips" role="group" aria-label="Second design">
                {DESIGNS.map(d => (
                  <button
                    key={d.id}
                    className={`fit-style-chip${designB === d.id ? ' active' : ''}`}
                    aria-pressed={designB === d.id}
                    onClick={() => setDesignB(d.id)}
                  >
                    {d.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="fit-preview-card fit-compare-card">
            <span className="rex-vc rex-vc-tl" aria-hidden="true" />
            <span className="rex-vc rex-vc-tr" aria-hidden="true" />
            <span className="rex-vc rex-vc-bl" aria-hidden="true" />
            <span className="rex-vc rex-vc-br" aria-hidden="true" />

            <video
              className="fit-preview-video"
              src="/hero-model.mp4"
              autoPlay muted loop playsInline
              aria-label="Compared design preview"
            />

            <div className="fit-preview-overlay" aria-hidden="true">
              <div className="fit-preview-badge-row">
                <span className="fit-preview-badge">
                  <span className="fit-live-dot" />Compare
                </span>
              </div>
              <div className="fit-preview-tags fit-compare-tags">
                <span className="fit-preview-tag">{selectedA?.label}</span>
                <span className="fit-preview-tag fit-compare-sep">vs</span>
                <span className="fit-preview-tag">{selectedB?.label}</span>
              </div>
            </div>
          </div>

          <div className="fit-cta-group rex-delay-2">
            <button
              type="button"
              className="rex-btn rex-btn-primary"
              onClick={() => onGotoTab?.('studio')}
            >
              Enter the Atelier
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
