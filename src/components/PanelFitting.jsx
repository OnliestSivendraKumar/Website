import { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import SceneMannequin  from './scenes/SceneMannequin';
import SceneWrapStyles from './scenes/SceneWrapStyles';

const TOTAL = 2;
const DELAY = 8000;

const SLIDE_LABELS = ['Body Scanner', 'Wrap Styles'];

export default function PanelFitting({ isActive, onTabChange }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const currentRef  = useRef(0);
  const pausedRef   = useRef(false);
  const timerRef    = useRef(null);
  const autobarRef  = useRef(null);

  /* How it works — video modal (same as OASIS REX tab) */
  const [showHowVideo, setShowHowVideo] = useState(false);
  const howVideoRef = useRef(null);

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

  function restartAutobar() {
    const el = autobarRef.current;
    if (!el) return;
    el.classList.remove('running');
    void el.offsetWidth;
    el.classList.add('running');
  }

  function scheduleNext() {
    clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => {
      if (!pausedRef.current) {
        const cur  = currentRef.current;
        const next = cur < TOTAL - 1 ? cur + 1 : 0;
        goTo(next);
      }
    }, DELAY);
  }

  function goTo(index) {
    const next = Math.min(TOTAL - 1, Math.max(0, index));
    currentRef.current = next;
    setCurrentSlide(next);
    clearTimeout(timerRef.current);
    restartAutobar();
    if (!pausedRef.current) scheduleNext();
  }

  useEffect(() => {
    if (isActive) {
      pausedRef.current = false;
      restartAutobar();
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
    restartAutobar();
    scheduleNext();
  }

  return (
    <div
      className={`rex-panel${isActive ? ' active' : ''}`}
      id="panel-fitting"
      role="tabpanel"
      aria-labelledby="tab-fitting"
      aria-hidden={!isActive}
    >
      {/* Slide arrows */}
      {currentSlide > 0 && (
        <button
          className="rex-arrow rex-arrow-prev"
          aria-label={SLIDE_LABELS[currentSlide - 1]}
          onClick={() => goTo(currentRef.current - 1)}
        >
          &#8592;
        </button>
      )}
      {currentSlide < TOTAL - 1 && (
        <button
          className="rex-arrow rex-arrow-next"
          aria-label={SLIDE_LABELS[currentSlide + 1]}
          onClick={() => goTo(currentRef.current + 1)}
        >
          &#8594;
        </button>
      )}

      {/* Auto-advance bar */}
      <div className="rex-autobar fit-autobar" aria-hidden="true">
        <div className="rex-autobar-fill fit-autobar-fill" ref={autobarRef} />
      </div>

      <main
        className="rex-main"
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        <div
          className="fit-slider"
          style={{ transform: `translateX(${-currentSlide * (100 / TOTAL)}%)` }}
        >
          <SceneMannequin
            isActive={currentSlide === 0}
            onShowHowVideo={() => setShowHowVideo(true)}
          />
          <SceneWrapStyles
            isActive={currentSlide === 1}
          />
        </div>
      </main>

      {/* How it works — video modal (same as OASIS REX) */}
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
              aria-label="How OASIS REX works"
            />
            <p className="rex-how-modal-caption">How OASIS REX understands you</p>
          </div>
        </div>,
        document.body
      )}
    </div>
  );
}
