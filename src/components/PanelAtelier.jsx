import { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import SceneAtelierIntro from './scenes/SceneAtelierIntro';
import SceneAtelier from './scenes/SceneAtelier';
import { INTRO_FEATURES } from './scenes/atelierConstants';

const TOTAL_SLIDES = 2;
const INTRO_DEFAULT_IMAGE = '/at-1.png';
const SLIDE_DELAY = 7000;
const FEATURE_ORDER = ['video', 'chat', 'screenshare', 'whiteboard', 'participants', 'layout'];
const AUTO_ADVANCE_MS = 6000;
const clamp = (v, lo, hi) => Math.min(hi, Math.max(lo, v));

export default function PanelAtelier({ isActive }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const currentRef = useRef(0);
  const pausedRef = useRef(false);
  const timerRef = useRef(null);
  const autobarRef = useRef(null);
  const [selectedFeatureId, setSelectedFeatureId] = useState(null);
  const [introBgId, setIntroBgId] = useState(null);
  const [showHowVideo, setShowHowVideo] = useState(false);
  const introBgImage = introBgId
    ? (INTRO_FEATURES.find((f) => f.id === introBgId)?.image ?? INTRO_DEFAULT_IMAGE)
    : INTRO_DEFAULT_IMAGE;
  const howVideoRef = useRef(null);

  function goTo(index, resetTimer = true) {
    const next = clamp(index, 0, TOTAL_SLIDES - 1);
    currentRef.current = next;
    setCurrentSlide(next);
    if (resetTimer) {
      clearTimeout(timerRef.current);
      if (autobarRef.current) {
        autobarRef.current.classList.remove('running');
        void autobarRef.current.offsetWidth;
        autobarRef.current.classList.add('running');
      }
      if (!pausedRef.current) scheduleNext();
    }
  }

  function scheduleNext() {
    clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => {
      if (!pausedRef.current) {
        const cur = currentRef.current;
        const next = cur < TOTAL_SLIDES - 1 ? cur + 1 : 0;
        goTo(next);
      }
    }, SLIDE_DELAY);
  }

  useEffect(() => {
    if (isActive) {
      pausedRef.current = false;
      if (autobarRef.current) {
        autobarRef.current.classList.remove('running');
        void autobarRef.current.offsetWidth;
        autobarRef.current.classList.add('running');
      }
      scheduleNext();
    } else {
      pausedRef.current = true;
      clearTimeout(timerRef.current);
      if (autobarRef.current) autobarRef.current.classList.remove('running');
    }
    return () => clearTimeout(timerRef.current);
  }, [isActive]);

  function onMouseEnter() {
    pausedRef.current = true;
    clearTimeout(timerRef.current);
    if (autobarRef.current) autobarRef.current.classList.remove('running');
  }
  function onMouseLeave() {
    pausedRef.current = false;
    if (autobarRef.current) {
      autobarRef.current.classList.remove('running');
      void autobarRef.current.offsetWidth;
      autobarRef.current.classList.add('running');
    }
    scheduleNext();
  }

  /* Feature auto-advance: only on slide 2 */
  useEffect(() => {
    if (!isActive || currentSlide !== 1) return;
    const id = setInterval(() => {
      setSelectedFeatureId((prev) => {
        const idx = FEATURE_ORDER.indexOf(prev ?? FEATURE_ORDER[0]);
        const nextIdx = (idx + 1) % FEATURE_ORDER.length;
        return FEATURE_ORDER[nextIdx];
      });
    }, AUTO_ADVANCE_MS);
    return () => clearInterval(id);
  }, [isActive, currentSlide]);

  useEffect(() => {
    const el = howVideoRef.current;
    if (!el) return;
    if (showHowVideo) {
      el.play().catch(() => {});
    } else {
      el.pause();
      el.currentTime = 0;
    }
  }, [showHowVideo]);

  useEffect(() => {
    if (!showHowVideo) return;
    function onKey(e) {
      if (e.key === 'Escape') setShowHowVideo(false);
    }
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [showHowVideo]);

  return (
    <div
      className={`rex-panel rex-panel-atelier${isActive ? ' active' : ''}`}
      id="panel-atelier"
      role="tabpanel"
      aria-labelledby="tab-atelier"
      aria-hidden={!isActive}
    >
      {currentSlide > 0 && (
        <button
          className="rex-arrow rex-arrow-prev"
          aria-label="Previous slide"
          onClick={() => goTo(currentRef.current - 1)}
        >
          &#8592;
        </button>
      )}
      {currentSlide < TOTAL_SLIDES - 1 && (
        <button
          className="rex-arrow rex-arrow-next"
          aria-label="Next slide"
          onClick={() => goTo(currentRef.current + 1)}
        >
          &#8594;
        </button>
      )}

      <div className="rex-autobar" aria-hidden="true">
        <div className="rex-autobar-fill" ref={autobarRef} />
      </div>

      <main
        className="rex-main atelier-main"
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        {/* Full panel background for slide 0 only — full width & height, not container-level */}
        {isActive && currentSlide === 0 && (
          <div className="atelier-intro-bg-panel" aria-hidden="true">
            <img src={introBgImage} alt="" key={introBgImage} />
          </div>
        )}
        <div
          className="rex-slider atelier-slider"
          style={{ transform: `translateX(${-currentSlide * (100 / TOTAL_SLIDES)}%)` }}
        >
          <SceneAtelierIntro
            isActive={isActive && currentSlide === 0}
            selectedId={introBgId}
            onSelectFeature={setIntroBgId}
            onShowHowVideo={() => setShowHowVideo(true)}
            onWatchDemo={() => goTo(1)}
          />
          <SceneAtelier
            isActive={isActive && currentSlide === 1}
            selectedFeatureId={selectedFeatureId}
            onSelectFeature={setSelectedFeatureId}
            onShowHowVideo={() => setShowHowVideo(true)}
          />
        </div>
      </main>

      {/* How it works — video modal (reused from OASIS REX / Fitting Room) */}
      {showHowVideo && createPortal(
        <div
          className="rex-how-modal-backdrop"
          onClick={() => setShowHowVideo(false)}
          aria-hidden="false"
        >
          <div
            className="rex-how-modal"
            role="dialog"
            aria-modal="true"
            aria-label="How it works video"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              className="rex-how-modal-close"
              onClick={() => setShowHowVideo(false)}
              aria-label="Close video"
            />
            <video
              ref={howVideoRef}
              className="rex-how-modal-video"
              src="/slide1-live-movements.mp4"
              controls
              playsInline
              aria-label="How OASIS Atelier works"
            />
            <p className="rex-how-modal-caption">How OASIS Atelier works</p>
          </div>
        </div>,
        document.body
      )}
    </div>
  );
}
