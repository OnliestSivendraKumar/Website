import { useState, useEffect, useRef } from 'react';
import { getLangCopy } from '../../i18n';

const STAT_CARDS = [
  { name: 'Preference Intelligence Engine', label: 'Preference Intelligence', image: 'tech.admin_onliest_fashion_technology_visualization_showing_A_fc80bc37-89bc-4184-83a9-ae871176ce8c_2.png', alt: 'Couture preference intelligence', objectPosition: '50% 50%' },
  { name: 'AI Fabric Suggestion System', label: 'AI Fabric Suggestion', image: 'tech.admin_onliest_fashion_technology_concept_showing_AI_fabr_d7f74d94-5c03-4642-adcf-9362cf3ae0f9_3.png', alt: 'AI fabric suggestions', objectPosition: '50% 50%' },
  { name: 'Body-Proportion Fitment Scoring', label: 'Body-Proportion Fitment', image: 'body-proportion-fitment.png', alt: 'Body proportion fitment with measurement overlays', objectPosition: '50% 50%' },
  { name: 'Blouse Precision Mapping', label: 'Blouse Precision Mapping', image: 'blouse-precision-mapping.png', alt: 'Blouse precision mapping with digital grid overlay', objectPosition: '50% 50%' },
  { name: 'AR 3D Mannequin Try-On', label: 'AR 3D Mannequin Try-On', image: 'tech.admin_onliest_3D_fashion_mannequin_standing_in_neutral_p_373c752a-2f0a-488d-952f-9b5bc0cee731_1.png', alt: 'AR 3D mannequin try-on', objectPosition: '50% 50%' },
  { name: 'Self-Learning Style Memory', label: 'Self-Learning Style', image: 'tech.admin_onliest_fashion_technology_visualization_showing_s_23e06dca-a6e0-4bf2-b58c-0f501f5745f0_2.png', alt: 'Self-learning style memory', objectPosition: '50% 50%' },
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
  else if (abs === 1) { tx = dir * 155;  tz = -70;  ry = -dir * 18;  sc = 0.9;  op = 0.78; }
  else if (abs === 2) { tx = dir * 295;  tz = -150; ry = -dir * 32;  sc = 0.76; op = 0.42; }
  else                { tx = dir * 425;  tz = -220; ry = -dir * 46;  sc = 0.58; op = 0;    }

  return {
    transform:     `translateX(${tx}px) translateZ(${tz}px) rotateY(${ry}deg) scale(${sc})`,
    opacity:       op,
    zIndex:        10 - abs,
    pointerEvents: off === 0 ? 'auto' : 'none',
  };
}

export default function SceneResolution({ isActive, activeLang, onGotoTab, onShowHowVideo }) {
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
              {STAT_CARDS.map((card, i) => (
                <div
                  key={card.name}
                  className={`rex-statcard rex-glass${statIdx === i ? ' is-active' : ''}`}
                  style={getCardStyle(i, statIdx)}
                >
                  <div className="rex-statcard-pictorial" aria-hidden="true">
                    <img
                      src={card.image}
                      alt={card.alt}
                      className="rex-statcard-img"
                      style={{ objectPosition: card.objectPosition || '50% 50%' }}
                      onError={(e) => { e.target.onerror = null; e.target.src = 'resolution-editorial.jpg'; }}
                    />
                  </div>
                  <p className="rex-statcard-name" title={card.name}>{card.label}</p>
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

        {/* Two CTAs: How it works (left) | Design Studio (right) */}
        <div className="rex-cta-group rex-cta-split rex-cta-resolution rex-delay-4">
          <div className="rex-cta-row rex-delay-5">
            <button
              type="button"
              className="rex-btn rex-btn-primary"
              onClick={() => onShowHowVideo?.()}
              aria-label="Watch how it works"
            >
              {copy.cta_explore_rex}
            </button>
            <button
              type="button"
              className="rex-btn rex-btn-ghost rex-btn-goto"
              onClick={() => onGotoTab('studio')}
              aria-label="Go to Design Studio"
            >
              {copy.cta_next}
              <svg className="rex-btn-arrow" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
