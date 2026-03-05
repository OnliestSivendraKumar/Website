import { useState, useEffect, useRef } from 'react';

/* Videos from public folder */
const WRAP_CAROUSEL_VIDEOS = [
  { src: '/fitting.mp4', label: 'Fitting' },
  { src: '/wrap.mp4', label: 'Wrap Styles' },
];

const WRAP_STYLES = [
  { id: 'nivi',       label: 'Nivi' },
  { id: 'bengali',    label: 'Bengali' },
  { id: 'gujarati',   label: 'Gujarati' },
  { id: 'maharashtrian', label: 'Maharashtrian' },
  { id: 'lehenga',    label: 'Lehenga-style' },
];

const WRAP_CAROUSEL_DELAY = 7000;

export default function SceneWrapStyles({ isActive }) {
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
                          Now Showing: {v.label}
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
