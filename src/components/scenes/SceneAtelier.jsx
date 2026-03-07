/* OASIS Atelier — Layout: Left = CORE FEATURES + branding. Right = image card. */
import { ATELIER_FEATURES, FeatureIcon } from './atelierConstants';

const FALLBACK_IMAGE = '/a-1.png';

export default function SceneAtelier({ isActive, selectedFeatureId, onSelectFeature, onShowHowVideo }) {
  const featureId = selectedFeatureId;
  const selectedFeature = featureId
    ? (ATELIER_FEATURES.find((f) => f.id === featureId) || ATELIER_FEATURES[0])
    : null;
  const featureImage = !featureId
    ? '/a-1.png'
    : featureId === 'video'
      ? '/a-2.png'
      : (selectedFeature?.image || FALLBACK_IMAGE);
  const featureVideo = selectedFeature?.video;
  const showVideo = featureImage && featureVideo;

  return (
    <section className={`atelier-scene atelier-exact${isActive ? ' active' : ''}`} aria-label="OASIS Atelier">
      <div className="atelier-exact-layout">
        {/* Left: headline + tagline first, then CORE FEATURES */}
        <div className="atelier-exact-left">
          <div className="atelier-exact-branding fit-scanner-copy">
            <p className="rex-over">Luxury Collaboration</p>
            <h2 className="rex-scene-h">
              Design. Connect. Create. <em>Instantly.</em>
            </h2>
          </div>
          <div className="atelier-exact-features">
            <h3 className="atelier-exact-features-head">Core Features</h3>
            <div className="atelier-exact-grid" role="list">
              {ATELIER_FEATURES.map((f) => (
                <button
                  key={f.id}
                  type="button"
                  className={`atelier-exact-card${selectedFeatureId === f.id ? ' active' : ''}`}
                  onClick={() => onSelectFeature?.(f.id)}
                  role="listitem"
                  aria-pressed={selectedFeatureId === f.id}
                >
                  <span className="atelier-exact-icon"><FeatureIcon name={f.icon} /></span>
                  <span className="atelier-exact-title">{f.title}</span>
                  <span className="atelier-exact-desc">{f.description}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
        {/* Right: image card (a-1.png) + How it works button below image */}
        <div className="atelier-exact-right-wrap">
          <div className="atelier-exact-right">
            <div className="atelier-exact-img-wrap">
              {showVideo ? (
                <video
                  src={featureVideo}
                  className="atelier-exact-img atelier-exact-video"
                  autoPlay
                  loop
                  muted
                  playsInline
                  aria-label={`OASIS Atelier — ${selectedFeature?.title || 'Collaboration'}`}
                  key={`${featureId}-video`}
                />
              ) : (
                <img
                  src={featureImage}
                  alt={`OASIS Atelier — ${selectedFeature?.title || 'Collaboration'}`}
                  className="atelier-exact-img"
                  key={`${featureId ?? 'default'}-${featureImage}`}
                  onError={(e) => { e.target.onerror = null; e.target.src = FALLBACK_IMAGE; }}
                />
              )}
            </div>
            {onShowHowVideo && (
              <button
                type="button"
                className="atelier-how-btn rex-btn rex-btn-primary fit-how-cta"
                onClick={onShowHowVideo}
                aria-label="Watch how it works"
              >
                How it works
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
