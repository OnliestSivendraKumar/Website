import { useState, useEffect, useRef } from 'react';

/* Videos from public folder — first: Compare your designs, second: Try Out Different Draping Styles */
const WRAP_CAROUSEL_VIDEOS = [
  { src: '/fitting.mp4', label: 'Fitting', tag: 'Compare your designs' },
  { src: '/wrap.mp4', label: 'Wrap Styles', tag: 'Try Out Different Draping Styles' },
];

const WRAP_STYLES = [
  { id: 'nivi',       label: 'Nivi' },
  { id: 'bengali',    label: 'Bengali' },
  { id: 'gujarati',   label: 'Gujarati' },
  { id: 'maharashtrian', label: 'Maharashtrian' },
  { id: 'lehenga',    label: 'Lehenga-style' },
];

const WRAP_CAROUSEL_DELAY = 7000;

/* Left-column copy per carousel slide: Fitting (0) and Wrap Styles (1) */
const CAROUSEL_COPY = [
  {
    over: 'Compare Designs',
    headline: 'See your fit.',
    headlineEm: 'Live.',
    sub: 'Your mannequin and measurements in one place. Try different looks and drape styles when you switch to Wrap Styles.',
    // hint: 'Use the dots below to switch between Fitting and Wrap Styles.',
  },
  {
    over: 'Wrap Styles',
    headline: 'One saree.',
    headlineEm: 'Many ways to wear.',
    sub: 'The video shows your mannequin in a saree. Select a drape style below — the mannequin updates to that way of wearing so you can see how it looks before you choose.',
    // hint: 'Select a style to see it on the mannequin.',
  },
];

export default function SceneWrapStyles({ isActive, onGotoTab, onGoToSlide }) {
  const [activeStyle, setActiveStyle] = useState('nivi');
  const [wrapIdx, setWrapIdx] = useState(0);
  const wrapTimerRef = useRef(null);
  const wrapIdxRef = useRef(0);
  wrapIdxRef.current = wrapIdx;

  function goToWrapSlide(index) {
    const next = Math.max(0, Math.min(index, WRAP_CAROUSEL_VIDEOS.length - 1));
    setWrapIdx(next);
  }

  function scheduleWrapNext() {
    clearTimeout(wrapTimerRef.current);
    wrapTimerRef.current = setTimeout(() => {
      const cur = wrapIdxRef.current;
      const next = (cur + 1) % WRAP_CAROUSEL_VIDEOS.length;
      setWrapIdx(next);
      wrapIdxRef.current = next;
      scheduleWrapNext();
    }, WRAP_CAROUSEL_DELAY);
  }

  useEffect(() => {
    if (!isActive) return;
    scheduleWrapNext();
    return () => clearTimeout(wrapTimerRef.current);
  }, [isActive]);

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

        {/* Left: copy — updates with carousel slide, fade effect; Drape style in content when Wrap Styles */}
        <div className="fit-preview-col rex-delay-0">
          <div className="fit-preview-info fit-preview-info-fade">
            <div key={wrapIdx} className="fit-preview-copy-block">
              <p className="rex-over">{CAROUSEL_COPY[wrapIdx].over}</p>
              <h2 className="rex-scene-h">
                {CAROUSEL_COPY[wrapIdx].headline}<br /><em>{CAROUSEL_COPY[wrapIdx].headlineEm}</em>
              </h2>
              <p className="rex-scene-sub">
                {CAROUSEL_COPY[wrapIdx].sub}
              </p>
              <p className="fit-wrap-hint rex-delay-1">
                {CAROUSEL_COPY[wrapIdx].hint}
              </p>
              {/* Drape style — only in left content when Wrap Styles slide (2nd screen) */}
              {wrapIdx === 1 && (
                <div className="fit-wrap-section fit-wrap-section-enter">
                  <p className="fit-custom-label">Drape style</p>
                  <div
                    className="fit-style-chips"
                    role="group"
                    aria-label="Wrap style options"
                  >
                    {WRAP_STYLES.map(s => (
                      <button
                        key={s.id}
                        type="button"
                        className={`fit-style-chip${activeStyle === s.id ? ' active' : ''}`}
                        aria-pressed={activeStyle === s.id}
                        onClick={() => setActiveStyle(s.id)}
                      >
                        {s.label}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Right: video carousel + style selector */}
        <div className="fit-wrap-right rex-delay-1">
          <div
            className="fit-wrap-carousel"
            onMouseEnter={() => clearTimeout(wrapTimerRef.current)}
            onMouseLeave={() => scheduleWrapNext()}
            aria-label="Wrap style video carousel"
          >
            <div
              className="fit-wrap-track"
              style={{ transform: `translateX(${-wrapIdx * 100}%)` }}
            >
              {WRAP_CAROUSEL_VIDEOS.map((v, i) => (
                <div key={i} className="fit-wrap-card">
                  <div className="fit-wrap-card-inner">
                    <span className="rex-vc rex-vc-tl" aria-hidden="true" />
                    <span className="rex-vc rex-vc-tr" aria-hidden="true" />
                    <span className="rex-vc rex-vc-bl" aria-hidden="true" />
                    <span className="rex-vc rex-vc-br" aria-hidden="true" />
                    <video
                      className="fit-preview-video"
                      src={v.src}
                      autoPlay
                      muted
                      loop
                      playsInline
                      aria-label={v.label}
                    />
                    <div className="fit-preview-overlay" aria-hidden="true">
                      <div className="fit-preview-badge-row">
                        <span className="fit-preview-badge">
                          <span className="fit-live-dot" />Live
                        </span>
                      </div>
                      <div className="fit-preview-tags">
                        <span className="fit-preview-tag fit-wrap-now">
                          {v.tag}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {WRAP_CAROUSEL_VIDEOS.length > 1 && (
              <div className="fit-wrap-dots" aria-hidden="true">
                {WRAP_CAROUSEL_VIDEOS.map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    className={`fit-wrap-dot${wrapIdx === i ? ' active' : ''}`}
                    aria-label={`Go to slide ${i + 1}`}
                    onClick={() => { goToWrapSlide(i); scheduleWrapNext(); }}
                  />
                ))}
              </div>
            )}
          </div>

          {/* Explore Fitting Room | Next — Explore has background; Next small with right space */}
          <div className="fit-cta-wrap rex-cta-resolution">
            <div className="rex-cta-row">
              <button
                type="button"
                className="rex-btn rex-btn-primary fit-cta-explore"
                onClick={() => {
                  onGotoTab?.('fitting');
                  onGoToSlide?.();
                }}
                aria-label="Explore Fitting Room"
              >
                Explore Fitting Room
              </button>
              <button
                type="button"
                className="rex-btn rex-btn-ghost rex-btn-goto fit-cta-next"
                onClick={() => {
                  if (onGotoTab) onGotoTab('atelier');
                }}
                aria-label="Go to Onliest Atelier"
              >
                Next
                <svg className="rex-btn-arrow" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
