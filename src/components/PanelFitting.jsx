import { useState, useEffect, useRef } from 'react';
import SceneMannequin     from './scenes/SceneMannequin';
import SceneWrapStyles    from './scenes/SceneWrapStyles';
import SceneCompareDesign from './scenes/SceneCompareDesign';

const TOTAL = 3;
const DELAY = 8000;

const SLIDE_LABELS = ['Body Scanner', 'Wrap Styles', 'Compare Design'];

export default function PanelFitting({ isActive, onTabChange }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const currentRef  = useRef(0);
  const pausedRef   = useRef(false);
  const timerRef    = useRef(null);
  const autobarRef  = useRef(null);

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
      <button
        className="rex-arrow rex-arrow-prev"
        aria-label={currentSlide > 0 ? SLIDE_LABELS[currentSlide - 1] : 'Previous'}
        disabled={currentSlide === 0}
        onClick={() => goTo(currentRef.current - 1)}
      >
        &#8592;
      </button>
      <button
        className="rex-arrow rex-arrow-next"
        aria-label={currentSlide < TOTAL - 1 ? SLIDE_LABELS[currentSlide + 1] : 'Next'}
        disabled={currentSlide === TOTAL - 1}
        onClick={() => goTo(currentRef.current + 1)}
      >
        &#8594;
      </button>

      {/* Slide indicator dots */}
      <div className="fit-dots" aria-hidden="true">
        {Array.from({ length: TOTAL }).map((_, i) => (
          <button
            key={i}
            className={`fit-dot${currentSlide === i ? ' active' : ''}`}
            onClick={() => goTo(i)}
            aria-label={SLIDE_LABELS[i]}
          />
        ))}
      </div>

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
          style={{ transform: `translateX(${-currentSlide * (100 / 3)}%)` }}
        >
          <SceneMannequin
            isActive={currentSlide === 0}
          />
          <SceneWrapStyles
            isActive={currentSlide === 1}
          />
          <SceneCompareDesign
            isActive={currentSlide === 2}
            onGotoTab={onTabChange}
          />
        </div>
      </main>
    </div>
  );
}
