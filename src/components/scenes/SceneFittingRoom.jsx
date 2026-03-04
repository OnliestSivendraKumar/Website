import { useState } from 'react';

const SAREE_COLORS = [
  { id: 'crimson',  label: 'Crimson',    hex: '#8B1A3A' },
  { id: 'royal',    label: 'Royal Blue', hex: '#1A3A8B' },
  { id: 'forest',   label: 'Forest',     hex: '#1A5C2A' },
  { id: 'amber',    label: 'Amber Gold', hex: '#C6821A' },
  { id: 'ivory',    label: 'Ivory',      hex: '#D4C5A9' },
  { id: 'onyx',     label: 'Onyx',       hex: '#1A1A2E' },
];

const BLOUSE_STYLES = [
  { id: 'bishop',   label: 'Classic Bishop' },
  { id: 'halter',   label: 'Halter Neck'    },
  { id: 'boat',     label: 'Boat Neck'      },
  { id: 'backless', label: 'Backless'       },
  { id: 'cape',     label: 'Cape Sleeve'    },
  { id: 'jacket',   label: 'Jacket'         },
];

const BORDERS = [
  { id: 'gold-zari',  label: 'Gold Zari'     },
  { id: 'silver',     label: 'Silver Thread' },
  { id: 'contrast',   label: 'Contrast Silk' },
  { id: 'plain',      label: 'Minimal Plain' },
];

export default function SceneFittingRoom({ isActive, onGotoTab }) {
  const [activeColor,  setActiveColor]  = useState('crimson');
  const [activeBlouse, setActiveBlouse] = useState('bishop');
  const [activeBorder, setActiveBorder] = useState('gold-zari');

  const selectedColor  = SAREE_COLORS.find(c => c.id === activeColor);
  const selectedBlouse = BLOUSE_STYLES.find(b => b.id === activeBlouse);

  return (
    <section
      className={`fit-scene${isActive ? ' active' : ''}`}
      data-fit-scene="2"
      aria-label="Fitting Room"
    >
      <div className="fit-bg fit-bg-2" aria-hidden="true" />

      <aside className="fit-scene-label" aria-hidden="true">
        <span className="fit-scene-num">02</span>
        <span className="fit-scene-lname">Fitting Room</span>
      </aside>

      <div className="fit-room-layout rex-reveal">

        {/* ── Left: mannequin live preview ── */}
        <div className="fit-preview-col rex-delay-0">

          <div className="fit-preview-card">
            <span className="rex-vc rex-vc-tl" aria-hidden="true" />
            <span className="rex-vc rex-vc-tr" aria-hidden="true" />
            <span className="rex-vc rex-vc-bl" aria-hidden="true" />
            <span className="rex-vc rex-vc-br" aria-hidden="true" />

            <video
              className="fit-preview-video"
              src="hero-model.mp4"
              autoPlay muted loop playsInline
              aria-label="Mannequin live preview"
            />

            {/* Colour tint overlay — changes with selected saree colour */}
            <div
              className="fit-preview-tint"
              style={{ '--tint': selectedColor.hex }}
              aria-hidden="true"
            />

            <div className="fit-preview-overlay" aria-hidden="true">
              <div className="fit-preview-badge-row">
                <span className="fit-preview-badge">
                  <span className="fit-live-dot" />Live Preview
                </span>
              </div>
              <div className="fit-preview-tags">
                <span className="fit-preview-tag">{selectedColor.label}</span>
                <span className="fit-preview-tag">{selectedBlouse?.label}</span>
              </div>
            </div>
          </div>

          <div className="fit-preview-info rex-delay-1">
            <p className="rex-over">Fitting Room</p>
            <h2 className="rex-scene-h">
              Wear it<br /><em>before you own it.</em>
            </h2>
            <p className="rex-scene-sub">
              Your AI mannequin is fully editable. Explore saree colours,
              blouse silhouettes, and border details — then secure your piece.
            </p>
          </div>
        </div>

        {/* ── Right: customiser ── */}
        <div className="fit-customizer rex-delay-1">

          {/* Saree Colour */}
          <div className="fit-custom-section">
            <div className="fit-custom-header">
              <p className="fit-custom-label">Saree Colour</p>
              <span className="fit-custom-selected">{selectedColor.label}</span>
            </div>
            <div
              className="fit-color-swatches"
              role="group"
              aria-label="Saree colour options"
            >
              {SAREE_COLORS.map(c => (
                <button
                  key={c.id}
                  className={`fit-color-swatch${activeColor === c.id ? ' active' : ''}`}
                  style={{ background: c.hex }}
                  aria-label={c.label}
                  aria-pressed={activeColor === c.id}
                  onClick={() => setActiveColor(c.id)}
                />
              ))}
            </div>
          </div>

          {/* Blouse Style */}
          <div className="fit-custom-section">
            <div className="fit-custom-header">
              <p className="fit-custom-label">Blouse Style</p>
            </div>
            <div
              className="fit-style-chips"
              role="group"
              aria-label="Blouse style options"
            >
              {BLOUSE_STYLES.map(b => (
                <button
                  key={b.id}
                  className={`fit-style-chip${activeBlouse === b.id ? ' active' : ''}`}
                  aria-pressed={activeBlouse === b.id}
                  onClick={() => setActiveBlouse(b.id)}
                >
                  {b.label}
                </button>
              ))}
            </div>
          </div>

          {/* Border Detail */}
          <div className="fit-custom-section">
            <div className="fit-custom-header">
              <p className="fit-custom-label">Border Detail</p>
            </div>
            <div
              className="fit-style-chips"
              role="group"
              aria-label="Border detail options"
            >
              {BORDERS.map(b => (
                <button
                  key={b.id}
                  className={`fit-style-chip${activeBorder === b.id ? ' active' : ''}`}
                  aria-pressed={activeBorder === b.id}
                  onClick={() => setActiveBorder(b.id)}
                >
                  {b.label}
                </button>
              ))}
            </div>
          </div>

          {/* Fitment confirmation */}
          <div className="fit-size-confirm rex-glass rex-delay-2">
            <div className="fit-size-row">
              <span className="fit-size-icon" aria-hidden="true">&#9671;</span>
              <div className="fit-size-text">
                <p className="fit-size-label">Fitment Confirmed</p>
                <p className="fit-size-sub">Blouse 38 · Petticoat 36 · Saree 5.5 m</p>
              </div>
              <span className="fit-size-score">94%</span>
            </div>
          </div>

          {/* CTAs */}
          <div className="fit-cta-group rex-delay-3">
            <button type="button" className="rex-btn rex-btn-primary fit-reserve-btn">
              Reserve This Look
            </button>
            <button
              type="button"
              className="rex-btn rex-btn-ghost"
              onClick={() => onGotoTab?.('studio')}
            >
              Refine in Studio
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
