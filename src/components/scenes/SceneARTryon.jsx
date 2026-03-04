export default function SceneARTryon({ isActive }) {
  return (
    <section
      className={`rex-scene${isActive ? ' active' : ''}`}
      data-scene="3"
      aria-label="AR Try-On"
    >
      <div className="rex-bg rex-bg-4" aria-hidden="true" />

      <aside className="rex-scene-label" aria-hidden="true">
        <span className="rex-scene-num">02</span>
        <span className="rex-scene-lname">AR Try-On</span>
      </aside>

      <div className="rex-scene-layout rex-layout-split rex-reveal">

        {/* ── Left: AR video widget ── */}
        <div className="rex-video-stage rex-delay-0">
          <div className="rex-video-frame">
            <span className="rex-vc rex-vc-tl" aria-hidden="true" />
            <span className="rex-vc rex-vc-tr" aria-hidden="true" />
            <span className="rex-vc rex-vc-bl" aria-hidden="true" />
            <span className="rex-vc rex-vc-br" aria-hidden="true" />

            <video
              className="rex-video"
              src="ar-tryon.mp4"
              autoPlay muted loop playsInline
              aria-label="AR Try-On — cloth simulation"
            />

            <div className="rex-video-overlay" aria-hidden="true">
              <span className="rex-video-badge">AR Try-On</span>
              <span className="rex-video-live">
                <span className="rex-live-dot" />Live
              </span>
            </div>
          </div>
          <div className="rex-video-scan" aria-hidden="true" />
        </div>

        {/* ── Right: copy ── */}
        <div className="rex-split-text rex-delay-1">
          <p className="rex-over">AR Try-On</p>
          <h2 className="rex-scene-h">
            Museum-grade<br /><em>neutral form</em>
          </h2>
          <p className="rex-scene-sub">
            Sculptural. Editorial.<br />Cloth simulation — naturally wrapped.
          </p>

          <div className="rex-glass rex-tryon-glass rex-delay-2">
            <p className="rex-tryon-accuracy">Neckline Mapping Accuracy</p>
            <p className="rex-tryon-pct">98%</p>
            <p className="rex-tryon-tagline">See yourself before it exists.</p>
          </div>

          <div className="rex-orbital-badge rex-delay-3" aria-hidden="true">
            <span className="rex-orbital-ring" />
            <span className="rex-orbital-label">5° orbital drift · 10s loop</span>
          </div>
        </div>

      </div>
    </section>
  );
}
