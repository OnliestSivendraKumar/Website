import { useState, useEffect, useRef, useCallback } from 'react';
import { getLangCopy } from '../../i18n';
import useCardParticles from '../../hooks/useCardParticles';

const clamp = (v, lo, hi) => Math.min(hi, Math.max(lo, v));

const CHIP_GROUPS = [
  {
    id: 'profession',
    label: 'Profession',
    chips: [
      { value: 'creative',     label: 'Creative'     },
      { value: 'entrepreneur', label: 'Entrepreneur', defaultActive: true },
      { value: 'executive',    label: 'Executive'    },
      { value: 'curator',      label: 'Curator'      },
    ],
  },
  {
    id: 'occasion',
    label: 'Occasion',
    chips: [
      { value: 'wedding',   label: 'Wedding'   },
      { value: 'festive',   label: 'Festive'   },
      { value: 'editorial', label: 'Editorial', defaultActive: true },
      { value: 'casual',    label: 'Casual'    },
      { value: 'corporate', label: 'Corporate' },
    ],
  },
  {
    id: 'palette',
    label: 'Color Memory',
    isSwatches: true,
    chips: [
      { value: 'burgundy', color: '#5A0B34', title: 'Burgundy'  },
      { value: 'gold',     color: '#C6A75E', title: 'Soft Gold', defaultActive: true },
      { value: 'midnight', color: '#1E1625', title: 'Midnight'  },
      { value: 'ivory',    color: '#F5EDD9', title: 'Ivory'     },
    ],
  },
  {
    id: 'silhouette',
    label: 'Silhouette',
    chips: [
      { value: 'draped',     label: 'Draped',     defaultActive: true },
      { value: 'fitted',     label: 'Fitted'     },
      { value: 'structured', label: 'Structured' },
    ],
  },
  {
    id: 'tone',
    label: 'Personality Tone',
    chips: [
      { value: 'poised',          label: 'Poised'    },
      { value: 'editorial-dark',  label: 'Editorial', defaultActive: true },
      { value: 'romantic',        label: 'Romantic'  },
      { value: 'minimal',         label: 'Minimal'   },
    ],
  },
  {
    id: 'fabric',
    label: 'Fabric',
    chips: [
      { value: 'silk',       label: 'Silk',       defaultActive: true },
      { value: 'kanjivaram', label: 'Kanjivaram' },
      { value: 'chiffon',    label: 'Chiffon'    },
      { value: 'organza',    label: 'Organza'    },
    ],
  },
  {
    id: 'ai_style',
    label: 'AI Recommendation Style',
    chips: [
      { value: 'curated',    label: 'Curated Picks', defaultActive: true },
      { value: 'surprise',   label: 'Surprise Me'   },
      { value: 'refine',     label: 'Refine Gradually' },
    ],
  },
  {
    id: 'design_intensity',
    label: 'Design Intensity',
    chips: [
      { value: 'subtle',     label: 'Subtle',     defaultActive: true },
      { value: 'statement',  label: 'Statement'   },
      { value: 'bold',       label: 'Bold'       },
    ],
  },
  {
    id: 'fit_priority',
    label: 'Fit Priority',
    chips: [
      { value: 'comfort',    label: 'Comfort First', defaultActive: true },
      { value: 'form',       label: 'Form-Fitting' },
      { value: 'draped',     label: 'Draped Ease'  },
    ],
  },
];

/* Build default active-chip map */
const defaultChips = CHIP_GROUPS.reduce((acc, g) => {
  const def = g.chips.find(c => c.defaultActive);
  acc[g.id] = def ? def.value : null;
  return acc;
}, {});

export default function SceneAIReadsYou({
  isActive,
  activeLang,
  onTierChange,
  onShowHowVideo,
}) {
  const copy = getLangCopy(activeLang);

  /* Chip selection state */
  const [chips, setChips]         = useState(defaultChips);
  const selectCountRef            = useRef(0);

  /* S2 carousel */
  const [s2Idx, setS2Idx]         = useState(0);
  const s2IdxRef                  = useRef(0);
  const s2TimerRef                = useRef(null);
  const s2PausedRef               = useRef(false);

  /* Card particles canvas */
  const cardParticlesRef          = useRef(null);
  useCardParticles(cardParticlesRef);

  /* Interactive fitting score bar */
  const [fittingScore, setFittingScore] = useState(94);
  const scoreTrackRef             = useRef(null);
  const isDraggingRef             = useRef(false);

  function getScoreFromY(clientY) {
    const el = scoreTrackRef.current;
    if (!el) return 94;
    const rect = el.getBoundingClientRect();
    const y = clientY - rect.top;
    const pct = Math.round(100 - (y / rect.height) * 100);
    return clamp(pct, 0, 100);
  }
  function handleScorePointerDown(e) {
    if (s2Idx !== 4) return;
    isDraggingRef.current = true;
    setFittingScore(getScoreFromY(e.clientY ?? e.touches?.[0]?.clientY));
    const onMove = (ev) => setFittingScore(getScoreFromY(ev.clientY ?? ev.touches?.[0]?.clientY));
    const onUp = () => {
      isDraggingRef.current = false;
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseup', onUp);
      window.removeEventListener('touchmove', onMove);
      window.removeEventListener('touchend', onUp);
    };
    window.addEventListener('mousemove', onMove);
    window.addEventListener('mouseup', onUp);
    window.addEventListener('touchmove', onMove, { passive: true });
    window.addEventListener('touchend', onUp);
  }

  const scoreBadge = fittingScore >= 90 ? "Perfect" : fittingScore >= 75 ? "Excellent — you're here" : fittingScore >= 60 ? "Great" : fittingScore >= 40 ? "Moderate" : "Fair";

  /* S2 carousel — 5 slides */
  const S2_TOTAL = 5;
  const s2GoTo = useCallback((idx) => {
    const next = ((idx % S2_TOTAL) + S2_TOTAL) % S2_TOTAL;
    s2IdxRef.current = next;
    setS2Idx(next);
  }, []);

  function startS2Auto() {
    if (!isActive) return;
    if (s2PausedRef.current) return;
    clearInterval(s2TimerRef.current);
    s2TimerRef.current = setInterval(() => s2GoTo(s2IdxRef.current + 1), 4000);
  }
  const s2Dots = Array.from({ length: S2_TOTAL }, (_, i) => i);
  function stopS2Auto() { clearInterval(s2TimerRef.current); }

  useEffect(() => {
    // Only run auto when this scene is active
    if (isActive) startS2Auto();
    else stopS2Auto();
    return stopS2Auto;
  }, [isActive]);

  function onS2PointerEnter() {
    s2PausedRef.current = true;
    stopS2Auto();
  }
  function onS2PointerLeave() {
    s2PausedRef.current = false;
    startS2Auto();
  }
  function onS2FocusIn() {
    s2PausedRef.current = true;
    stopS2Auto();
  }
  function onS2FocusOut(e) {
    if (!e.currentTarget.contains(e.relatedTarget)) {
      s2PausedRef.current = false;
      startS2Auto();
    }
  }

  /* Chip click handler */
  function handleChip(groupId, value) {
    const wasActive = chips[groupId] === value;
    setChips(prev => ({ ...prev, [groupId]: wasActive ? null : value }));
    if (!wasActive) {
      selectCountRef.current++;
      const tier = clamp(Math.floor(selectCountRef.current / 2), 0, 3);
      onTierChange(tier);
    }
  }

  return (
    <section
      className={`rex-scene${isActive ? ' active' : ''}`}
      data-scene="1"
      aria-label="AI Reads You"
    >
      <div className="rex-bg rex-bg-5" aria-hidden="true" />

      <aside className="rex-scene-label" aria-hidden="true">
        <span className="rex-scene-num">01</span>
        <span className="rex-scene-lname">AI Reads You</span>
      </aside>

      <div className="rex-scene-layout rex-layout-split rex-reveal">

        {/* ── Left: editorial copy (slide 1 Onliest REX tab) ── */}
        <div className="rex-split-text rex-delay-0">
          <p className="rex-over">{copy.subheadline}</p>
          <h2 className="rex-scene-h">{copy.rex_headline}</h2>
          <p className="rex-scene-sub">{copy.rex_intro}</p>
          <p className="rex-signal-text rex-delay-2">{copy.rex_tagline}</p>
          <p className="rex-rex-closing rex-delay-3">{copy.rex_closing}</p>
          <div className="rex-cta-group rex-cta-split rex-delay-4">
            <div className="rex-cta-row">
              <button
                type="button"
                className="rex-btn rex-btn-primary"
                onClick={() => onShowHowVideo?.()}
                aria-label="Watch how it works"
              >
                {copy.cta_how_it_works}
              </button>
            </div>
          </div>
        </div>

        {/* ── Right: 5-slide carousel (1 video, 2 couture video, 3 blouse, 4–5 TBD) ── */}
        <div
          className="rex-s2-carousel rex-delay-1"
          id="rexS2Carousel"
          onPointerEnter={onS2PointerEnter}
          onPointerLeave={onS2PointerLeave}
          onFocus={onS2FocusIn}
          onBlur={onS2FocusOut}
        >
          <div
            className="rex-s2-track"
            id="rexS2Track"
            style={{ transform: `translateX(${-s2Idx * 100}%)` }}
          >

              {/* Slide 1 — Video (place your file in public/ as slide1-live-movements.mp4) */}
            <div className="rex-glass rex-s2-video-card rex-s2-card">
              <video
                className="rex-s2-card-video"
                src="https://res.cloudinary.com/djlqifbxp/video/upload/v1774510655/slide1-live-movements_fa8nkr.mp4"
                autoPlay
                muted
                loop
                playsInline
                aria-label="Onliest REX editorial"
              />
              <div className="rex-s2-video-card-overlay">
                <p className="rex-blouse-card-label">Design Studio</p>
                <p className="rex-blouse-card-sub">Your journey begins</p>
              </div>
            </div>

            {/* Slide 2 — Background (couture) video */}
            <div className="rex-glass rex-s2-video-card rex-s2-card">
              <video
                className="rex-s2-card-video rex-s2-card-video-couture"
                src="https://res.cloudinary.com/djlqifbxp/video/upload/v1774510729/couture-bg_hyq70k.mp4"
                autoPlay
                muted
                loop
                playsInline
                aria-label="Couture atmosphere"
              />
              <div className="rex-s2-video-card-overlay">
                <p className="rex-blouse-card-label">Couture Composes</p>
                <p className="rex-blouse-card-sub">Ambient · Interpretive</p>
              </div>
            </div>

            {/* Slide 3 — Blouse Intelligence */}
            <div
              className="rex-glass rex-blouse-card rex-s2-card"
              id="rexS2BlouseCard"
            >
              <img
                src="https://res.cloudinary.com/djlqifbxp/image/upload/v1774512202/blouse-bg_pbgbqd.gif"
                alt="Holographic blouse — precision mapping"
                className="rex-blouse-card-img"
              />
              <canvas
                className="rex-card-particles"
                ref={cardParticlesRef}
                aria-hidden="true"
              />
              <div className="rex-blouse-card-overlay">
                <p className="rex-blouse-card-label">Blouse Intelligence</p>
                <p className="rex-blouse-card-sub">Precision mapping · Gold-seam rendering</p>
              </div>
            </div>

            {/* Slide 4 — Chips & Occasion (preferences) */}
            <div className="rex-glass rex-prefs-glass rex-s2-card rex-s2-card-prefs">
              <div className="rex-prefs-grid">
                {CHIP_GROUPS.map(group => (
                  <div key={group.id}>
                    <p className="rex-prefs-label">{group.label}</p>
                    <div
                      className={`rex-chips${group.isSwatches ? ' rex-swatches' : ''}`}
                      role="group"
                      aria-label={group.label}
                    >
                      {group.chips.map(chip =>
                      group.isSwatches ? (
                        <button
                          key={chip.value}
                          type="button"
                          className={`rex-chip rex-swatch${chips[group.id] === chip.value ? ' active' : ''}`}
                          data-color={chip.value}
                          style={{ '--sw': chip.color }}
                          title={chip.title}
                          aria-label={chip.title}
                          aria-pressed={chips[group.id] === chip.value}
                          onClick={() => handleChip(group.id, chip.value)}
                        />
                      ) : (
                        <button
                          key={chip.value}
                          type="button"
                          className={`rex-chip${chips[group.id] === chip.value ? ' active' : ''}`}
                          data-value={chip.value}
                          aria-pressed={chips[group.id] === chip.value}
                          onClick={() => handleChip(group.id, chip.value)}
                        >
                          {chip.label}
                        </button>
                      )
                    )}
                    </div>
                  </div>
                ))}
              </div>
              <p className="rex-s2-prefs-footer">
                Your preferences shape your Onliest REX experience.
              </p>
            </div>

            {/* Slide 5 — Fitting Score: UX clarity — user understands at a glance */}
            <section
              className={`rex-glass rex-s2-card rex-s2-score-card${s2Idx === 4 ? ' visible' : ''}`}
              aria-labelledby="rex-fitting-score-title"
              aria-describedby="rex-fitting-score-desc"
            >
              <h2 id="rex-fitting-score-title" className="rex-s2-score-card-over">
                Your Fitting Score
              </h2>
              <div className="rex-s2-score-card-row">
                {/* Left 50%: score + bar */}
                <div className="rex-s2-score-left">
                  <div className="rex-s2-score-center" id="rex-fitting-score-desc">
                    <p className="rex-s2-score-card-number" aria-label={`${fittingScore} percent`}>
                      <span className="rex-s2-score-card-num" aria-hidden="true">{fittingScore}</span>
                      <span className="rex-s2-score-card-pct" aria-hidden="true">%</span>
                    </p>
                    <p className="rex-s2-score-card-indication">
                      <span className="rex-s2-score-badge">Personal Style Match</span>
                    </p>
                    <p className="rex-s2-score-card-hint">
                      Score represents how harmoniously a design matches your unique style identity.
                    </p>
                  </div>
                  <div
                    className="rex-s2-score-vertical-wrap rex-s2-score-interactive"
                    role="slider"
                    aria-valuemin={0}
                    aria-valuemax={100}
                    aria-valuenow={fittingScore}
                    aria-label="Fitting score. Drag or use arrow keys to adjust."
                    tabIndex={s2Idx === 4 ? 0 : -1}
                    onKeyDown={(e) => {
                      if (s2Idx !== 4) return;
                      if (e.key === 'ArrowUp' || e.key === 'ArrowRight') {
                        e.preventDefault();
                        setFittingScore((v) => clamp(v + 5, 0, 100));
                      } else if (e.key === 'ArrowDown' || e.key === 'ArrowLeft') {
                        e.preventDefault();
                        setFittingScore((v) => clamp(v - 5, 0, 100));
                      }
                    }}
                  >
                    <div
                      ref={scoreTrackRef}
                      className="rex-s2-score-vertical-track"
                      onMouseDown={handleScorePointerDown}
                      onTouchStart={handleScorePointerDown}
                      role="presentation"
                    >
                      <div className="rex-s2-score-track-inner">
                        <div className={`rex-s2-score-segment rex-s2-seg-green${fittingScore >= 90 ? ' rex-s2-seg-current' : ''}`} aria-hidden="true" />
                        <div className={`rex-s2-score-segment rex-s2-seg-yellow${fittingScore >= 75 && fittingScore < 90 ? ' rex-s2-seg-current' : ''}`} aria-hidden="true" />
                        <div className={`rex-s2-score-segment rex-s2-seg-orange${fittingScore >= 60 && fittingScore < 75 ? ' rex-s2-seg-current' : ''}`} aria-hidden="true" />
                        <div className={`rex-s2-score-segment rex-s2-seg-moderate${fittingScore >= 40 && fittingScore < 60 ? ' rex-s2-seg-current' : ''}`} aria-hidden="true" />
                        <div className={`rex-s2-score-segment rex-s2-seg-red${fittingScore < 40 ? ' rex-s2-seg-current' : ''}`} aria-hidden="true" />
                      </div>
                      <div
                        className="rex-s2-score-marker rex-s2-score-marker-tooltip"
                        aria-hidden="true"
                        data-tooltip={`${fittingScore}% — ${scoreBadge}`}
                        style={{ bottom: `${fittingScore}%` }}
                      />
                    </div>
                    <div className="rex-s2-score-vertical-legends" aria-hidden="true">
                      <span className="rex-s2-score-legend rex-s2-legend-green" data-tooltip={'Perfect (Design strongly aligns with your preferences,\nbody profile, and style identity)'}>
                        <span className="rex-s2-legend-label">EXCELLENT</span>
                        <span className="rex-s2-legend-range">(90–100)</span>
                      </span>
                      <span className="rex-s2-score-legend rex-s2-legend-yellow" data-tooltip={'Excellent (Highly compatible design\nwith strong aesthetic harmony)'}>
                        <span className="rex-s2-legend-label">GREAT</span>
                        <span className="rex-s2-legend-range">(75–89)</span>
                      </span>
                      <span className="rex-s2-score-legend rex-s2-legend-orange" data-tooltip={'Good (A well-suited design\nwith minor style deviations)'}>
                        <span className="rex-s2-legend-label">GOOD</span>
                        <span className="rex-s2-legend-range">(60–74)</span>
                      </span>
                      <span className="rex-s2-score-legend rex-s2-legend-moderate" data-tooltip={'Moderate (Some alignment with your preferences).'}>
                        <span className="rex-s2-legend-label">MODERATE</span>
                        <span className="rex-s2-legend-range">(40–59)</span>
                      </span>
                      <span className="rex-s2-score-legend rex-s2-legend-red" data-tooltip={'Low (Limited compatibility with your style profile).'}>
                        <span className="rex-s2-legend-label">FAIR</span>
                        <span className="rex-s2-legend-range">(0–39)</span>
                      </span>
                    </div>
                  </div>
                </div>
                {/* Right 50%: stunning full-height image */}
                <figure className="rex-s2-score-figure" aria-hidden="true">
                  <img
                    src="https://res.cloudinary.com/djlqifbxp/image/upload/v1774511549/fit_rlztbs.png"
                    alt={`Your look at ${fittingScore}% fit — editorial`}
                    className="rex-s2-score-figure-img"
                  />
                </figure>
              </div>
            </section>

          </div>{/* /rex-s2-track */}

          {/* 5 dots */}
          <div className="rex-s2-dots" aria-hidden="true">
            {s2Dots.map(i => (
              <span
                key={i}
                className={`rex-s2-dot${s2Idx === i ? ' active' : ''}`}
                onClick={() => { s2GoTo(i); startS2Auto(); }}
              />
            ))}
          </div>
        </div>{/* /rex-s2-carousel */}

      </div>
    </section>
  );
}
