import { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import SceneDesignStudio from './scenes/SceneDesignStudio';

export default function PanelStudio({ isActive }) {
  const [showDemo, setShowDemo] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    const el = videoRef.current;
    if (!el) return;
    if (showDemo) { el.play().catch(() => {}); }
    else { el.pause(); el.currentTime = 0; }
  }, [showDemo]);

  useEffect(() => {
    if (!showDemo) return;
    const onKey = (e) => { if (e.key === 'Escape') setShowDemo(false); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [showDemo]);

  return (
    <div
      className={`rex-panel rex-panel-studio${isActive ? ' active' : ''}`}
      id="panel-studio"
      role="tabpanel"
      aria-labelledby="tab-studio"
      aria-hidden={!isActive}
    >
      <main className="rex-main studio-main">
        <SceneDesignStudio isActive={isActive} onWatchDemo={() => setShowDemo(true)} />
      </main>

      {showDemo && createPortal(
        <div
          className="rex-how-modal-backdrop"
          onClick={() => setShowDemo(false)}
        >
          <div
            className="rex-how-modal"
            role="dialog"
            aria-modal="true"
            aria-label="Design Studio demo"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              className="rex-how-modal-close"
              onClick={() => setShowDemo(false)}
              aria-label="Close demo"
            />
            <video
              ref={videoRef}
              className="rex-how-modal-video"
              src="/ds-6.mp4"
              controls
              playsInline
              aria-label="Onliest Design Studio demo"
            />
            <p className="rex-how-modal-caption">Onliest Design Studio — demo</p>
          </div>
        </div>,
        document.body
      )}
    </div>
  );
}
