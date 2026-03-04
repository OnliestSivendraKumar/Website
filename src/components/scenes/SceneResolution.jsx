import { useState, useEffect, useRef } from 'react';
import { getLangCopy } from '../../i18n';

const STAT_CARDS = [
  'Preference Intelligence Engine',
  'AI Fabric Suggestion System',
  'Body-Proportion Fitment Scoring',
  'Blouse Precision Mapping',
  'AR 3D Mannequin Try-On',
  'Self-Learning Style Memory',
];

const N = STAT_CARDS.length;

function getCardStyle(i, current) {
  let off = i - current;
  if (off >  N / 2) off -= N;
  if (off < -N / 2) off += N;

  const dir = off >= 0 ? 1 : -1;
  const abs = Math.abs(off);
  let tx, tz, ry, sc, op;

  if (abs === 0)      { tx = 0;         tz = 0;    ry = 0;          sc = 1;    op = 1;    }
  else if (abs === 1) { tx = dir * 230;  tz = -90;  ry = -dir * 22;  sc = 0.82; op = 0.58; }
  else if (abs === 2) { tx = dir * 410;  tz = -190; ry = -dir * 40;  sc = 0.63; op = 0.26; }
  else                { tx = dir * 580;  tz = -280; ry = -dir * 56;  sc = 0.46; op = 0;    }

  return {
    transform:     `translateX(${tx}px) translateZ(${tz}px) rotateY(${ry}deg) scale(${sc})`,
    opacity:       op,
    zIndex:        10 - abs,
    pointerEvents: off === 0 ? 'auto' : 'none',
  };
}

export default function SceneResolution({ isActive, activeLang, onGotoTab }) {
  const copy          = getLangCopy(activeLang);
  const [statIdx, setStatIdx] = useState(0);
  const statIdxRef    = useRef(0);
  const autoTimerRef  = useRef(null);
  const touchXRef     = useRef(null);

  const resLines = copy.headline_resolution.split('\n');

  function statGoTo(idx) {
    const next = ((idx % N) + N) % N;
    statIdxRef.current = next;
    setStatIdx(next);
  }
  function startStatAuto() {
    clearInterval(autoTimerRef.current);
    autoTimerRef.current = setInterval(() => statGoTo(statIdxRef.current + 1), 3200);
  }
  function stopStatAuto() { clearInterval(autoTimerRef.current); }

  useEffect(() => {
    startStatAuto();
    return stopStatAuto;
  }, []);

  return (
    <section
      className={`rex-scene${isActive ? ' active' : ''}`}
      data-scene="2"
      aria-label="Emotional Resolution"
    >
      <div className="rex-bg rex-bg-5" aria-hidden="true" />

      <aside className="rex-scene-label" aria-hidden="true">
        <span className="rex-scene-num">02</span>
        <span className="rex-scene-lname">Resolution</span>
      </aside>

      {/* Full-bleed editorial image (left column) */}
      <div className="rex-res-image-col" aria-hidden="true">
        <img
          className="rex-res-editorial-img"
          src="resolution-editorial.jpg"
          alt="Editorial couture model in golden saree"
        />
        <div className="rex-res-img-veil" aria-hidden="true" />
      </div>

      {/* Right content column */}
      <div className="rex-resolution rex-reveal">

        <div className="rex-resolution-top rex-delay-0">
          <div className="rex-brand-mark" aria-hidden="true">&#9671;</div>
          <p className="rex-over rex-delay-1">An invitation</p>
          <h2 className="rex-resolution-h rex-delay-2">
            {resLines[0]}<br />
            {resLines[1] && <em>{resLines[1]}</em>}
          </h2>
        </div>

        {/* 3D Coverflow stat-cards carousel */}
        <div
          className="rex-carousel-outer rex-delay-3"
          aria-label="Platform capabilities"
          onMouseEnter={stopStatAuto}
          onMouseLeave={startStatAuto}
        >
          <button
            className="rex-carousel-btn rex-carousel-prev"
            aria-label="Previous capability"
            onClick={() => { statGoTo(statIdxRef.current - 1); startStatAuto(); }}
          >
            <svg width="11" height="19" viewBox="0 0 11 19" fill="none" aria-hidden="true">
              <path d="M9.5 1.5L1.5 9.5L9.5 17.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          <div
            className="rex-statcards-wrap"
            onTouchStart={e => { touchXRef.current = e.touches[0].clientX; stopStatAuto(); }}
            onTouchEnd={e => {
              if (touchXRef.current === null) return;
              const dx = e.changedTouches[0].clientX - touchXRef.current;
              if (Math.abs(dx) > 40) statGoTo(dx < 0 ? statIdxRef.current + 1 : statIdxRef.current - 1);
              touchXRef.current = null;
              startStatAuto();
            }}
          >
            <div className="rex-statcards" id="rexStatCards">
              {STAT_CARDS.map((name, i) => (
                <div
                  key={name}
                  className={`rex-statcard rex-glass${statIdx === i ? ' is-active' : ''}`}
                  style={getCardStyle(i, statIdx)}
                >
                  <span className="rex-statcard-mark" aria-hidden="true">&#9671;</span>
                  <p className="rex-statcard-name">{name}</p>
                </div>
              ))}
            </div>
          </div>

          <button
            className="rex-carousel-btn rex-carousel-next"
            aria-label="Next capability"
            onClick={() => { statGoTo(statIdxRef.current + 1); startStatAuto(); }}
          >
            <svg width="11" height="19" viewBox="0 0 11 19" fill="none" aria-hidden="true">
              <path d="M1.5 1.5L9.5 9.5L1.5 17.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>

        {/* CTAs + scarcity */}
        <div className="rex-cta-group rex-delay-4">
          <div className="rex-scarcity" id="rexScarcity" aria-label="Limited edition drop">
            <span className="rex-scarcity-pulse" aria-hidden="true" />
            <p className="rex-scarcity-text">{copy.scarcity_badge}</p>
            <p className="rex-scarcity-sub">Released in limited editions.</p>
          </div>

          <div className="rex-cta-row rex-delay-5">
            <button
              type="button"
              className="rex-btn rex-btn-primary"
              onClick={() => onGotoTab('studio')}
            >
              {copy.cta_primary}
            </button>
            <button type="button" className="rex-btn rex-btn-ghost">
              {copy.cta_secondary}
            </button>
          </div>
        </div>

        <nav className="rex-footer-nav rex-delay-5" aria-label="Platform links">
          <a href="index.html" className="rex-footer-link">Learn</a>
          <span className="rex-footer-sep" aria-hidden="true">&#9671;</span>
          <button
            type="button"
            className="rex-footer-link rex-footer-btn"
            onClick={() => onGotoTab('studio')}
          >
            Design Studio
          </button>
          <span className="rex-footer-sep" aria-hidden="true">&#9671;</span>
          <button
            type="button"
            className="rex-footer-link rex-footer-btn"
            onClick={() => onGotoTab('fitting')}
          >
            Fitting Room
          </button>
        </nav>

        <p className="rex-footer-brand rex-delay-5">
          OASIS REX by Onliest&nbsp;·&nbsp;Ultra Couture Elite Edition
        </p>
      </div>
    </section>
  );
}
