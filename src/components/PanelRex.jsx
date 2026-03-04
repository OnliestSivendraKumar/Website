import { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { getLangCopy } from '../i18n';
import SceneAIReadsYou from './scenes/SceneAIReadsYou';
import SceneResolution from './scenes/SceneResolution';

const TOTAL = 2;
const DELAY = 7000;
const clamp = (v, lo, hi) => Math.min(hi, Math.max(lo, v));

export default function PanelRex({ isActive, activeLang, onTabChange }) {
  const copy = getLangCopy(activeLang);

  /* Slideshow state — also kept in ref to avoid stale closures in timers */
  const [currentSlide, setCurrentSlide] = useState(0);
  const currentRef  = useRef(0);
  const pausedRef   = useRef(false);
  const timerRef    = useRef(null);
  const autobarRef  = useRef(null);
  const enteredRef  = useRef({});

  /* How it works — video modal (shared by both scenes) */
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

  /* Greeting tier (updated by chip interactions in Scene 1) */
  const [tier, setTier] = useState(() => {
    try { const t = localStorage.getItem('rexTier'); return t ? clamp(parseInt(t, 10), 0, 3) : 0; }
    catch { return 0; }
  });

  function handleTierChange(t) {
    setTier(t);
    try { localStorage.setItem('rexTier', String(t)); } catch {}
  }

  /* Greeting text — derived from tier + activeLang */
  const greetingMsgs = [
    copy.greeting_tier_0,
    copy.greeting_tier_1,
    copy.greeting_tier_2,
    copy.greeting_tier_3,
  ];
  const greetingText = greetingMsgs[clamp(tier, 0, 3)];

  /* ── Auto-advance bar ── */
  function restartAutobar() {
    const el = autobarRef.current;
    if (!el) return;
    el.classList.remove('running');
    void el.offsetWidth;           // force reflow → CSS animation restarts
    el.classList.add('running');
  }

  /* ── Schedule next auto-advance ── */
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

  /* ── Scene entry hooks (run once per scene) ── */
  function onSceneEnter(idx) {
    if (enteredRef.current[idx]) return;
    enteredRef.current[idx] = true;
    // Accuracy bar is animated inside SceneAIReadsYou via isActive prop
  }

  /* ── Core navigation ── */
  function goTo(index, resetTimer = true) {
    const next = clamp(index, 0, TOTAL - 1);
    currentRef.current = next;
    setCurrentSlide(next);

    if (resetTimer) {
      clearTimeout(timerRef.current);
      restartAutobar();
      if (!pausedRef.current) scheduleNext();
    }
    onSceneEnter(next);
  }

  /* ── Pause / resume based on whether the REX panel is the active tab ── */
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

  /* ── Keyboard navigation (← →) ── */
  useEffect(() => {
    function handleKey(e) {
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown') goTo(currentRef.current + 1);
      if (e.key === 'ArrowLeft'  || e.key === 'ArrowUp')   goTo(currentRef.current - 1);
    }
    document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, []);

  /* ── Hover pause ── */
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
  function onFocusIn() {
    pausedRef.current = true;
    clearTimeout(timerRef.current);
    if (autobarRef.current) autobarRef.current.classList.remove('running');
  }
  function onFocusOut(e) {
    if (!e.currentTarget.contains(e.relatedTarget)) {
      pausedRef.current = false;
      restartAutobar();
      scheduleNext();
    }
  }

  return (
    <div
      className={`rex-panel${isActive ? ' active' : ''}`}
      id="panel-rex"
      role="tabpanel"
      aria-labelledby="tab-rex"
      aria-hidden={!isActive}
    >
      {/* Prev / Next arrows */}
      <button
        className="rex-arrow rex-arrow-prev"
        id="rexPrev"
        aria-label="Previous scene"
        disabled={currentSlide === 0}
        onClick={() => goTo(currentRef.current - 1)}
      >
        &#8592;
      </button>
      <button
        className="rex-arrow rex-arrow-next"
        id="rexNext"
        aria-label="Next scene"
        disabled={currentSlide === TOTAL - 1}
        onClick={() => goTo(currentRef.current + 1)}
      >
        &#8594;
      </button>

      {/* Auto-advance gold bar (bottom) */}
      <div className="rex-autobar" aria-hidden="true">
        <div className="rex-autobar-fill" ref={autobarRef} id="rexAutobar" />
      </div>

      <main
        className="rex-main"
        id="rexMain"
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        onFocus={onFocusIn}
        onBlur={onFocusOut}
      >
        <div
          className="rex-slider"
          id="rexSlider"
          style={{ transform: `translateX(${-currentSlide * (100 / TOTAL)}%)` }}
        >
          <SceneAIReadsYou
            isActive={currentSlide === 0}
            activeLang={activeLang}
            onTierChange={handleTierChange}
            greetingText={greetingText}
            onShowHowVideo={() => setShowHowVideo(true)}
          />
          <SceneResolution
            isActive={currentSlide === 1}
            activeLang={activeLang}
            onGotoTab={onTabChange}
            onShowHowVideo={() => setShowHowVideo(true)}
          />
        </div>
      </main>

      {/* How it works — video modal (shared by both scenes) */}
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
              src="slide1-live-movements.mp4"
              controls
              playsInline
              aria-label="How OASIS REX works"
            />
            <p className="rex-how-modal-caption">How OASIS REX reads you</p>
          </div>
        </div>,
        document.body
      )}
    </div>
  );
}
