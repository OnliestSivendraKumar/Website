/* Design Studio scene — left marketing copy + right infinite-scroll image gallery */

const FEATURES = [
  'Saree Body',
  'Blouse Design',
  'Fitting Room',
  'Fabric & Pattern',
  'Color Match',
  'Custom Artwork',
  'Fall Type',
  'Design Preview',
  'Rotate & Scale',
];

/* Items can be images or videos — use type:'video' for mp4 */
const GALLERY_COLS = [
  { dir: 'up',   items: [
    { src: '/ds-1.png' }, { src: '/ds-2.png' }, { src: '/ds-3.png' },
    { src: '/ds-4.png' }, { src: '/ds-5.png' }, { src: '/ds-6.mp4', type: 'video' },
  ]},
  { dir: 'down', items: [
    { src: '/ds-7.png' }, { src: '/ds-8.png' }, { src: '/ds-9.png' },
    { src: '/ds-10.png' }, { src: '/ds-11.png' }, { src: '/ds-12.png' },
  ]},
  { dir: 'up',   items: [
    { src: '/ds-4.png' }, { src: '/ds-5.png' }, { src: '/ds-6.mp4', type: 'video' },
    { src: '/ds-1.png' }, { src: '/ds-2.png' }, { src: '/ds-3.png' },
  ]},
  { dir: 'down', items: [
    { src: '/ds-10.png' }, { src: '/ds-11.png' }, { src: '/ds-12.png' },
    { src: '/ds-7.png' },  { src: '/ds-8.png' },  { src: '/ds-9.png' },
  ]},
];

function GalleryItem({ src, type }) {
  if (type === 'video') {
    return (
      <video
        className="ds-img"
        src={src}
        autoPlay
        loop
        muted
        playsInline
        draggable="false"
      />
    );
  }
  return <img src={src} alt="" className="ds-img" loading="lazy" draggable="false" />;
}

export default function SceneDesignStudio({ isActive, onWatchDemo }) {
  return (
    <section
      className={`ds-scene${isActive ? ' active' : ''}`}
      aria-label="Onliest Design Studio"
    >
      {/* ── Left: marketing copy ── */}
      <div className="ds-copy">
        <span className="ds-badge">Design Studio</span>

        <h2 className="ds-headline">
          Design your perfect<br />
          saree &amp; blouse —<br />
          <em>visually</em>
        </h2>

        <p className="ds-desc">
          Compose your couture from scratch. Pick fabrics, customise blouse neck, sleeves and back patterns, then preview your complete look before you place the order.
        </p>

        <p className="ds-all-label">All you can do in Design Studio</p>

        <div className="ds-features" role="list">
          {FEATURES.map(f => (
            <span key={f} className="ds-chip" role="listitem">{f}</span>
          ))}
        </div>

        <div className="ds-actions">
          <button className="ds-btn ds-btn--primary">Open Design Studio</button>
          <button className="ds-btn ds-btn--ghost" onClick={onWatchDemo}>Watch Demo</button>
        </div>
      </div>

      {/* ── Right: infinite-scroll gallery ── */}
      <div className="ds-gallery" aria-hidden="true">
        {GALLERY_COLS.map((col, colIdx) => (
          <div
            key={colIdx}
            className={`ds-col ds-col--${col.dir}`}
            style={{ '--ds-dur': `${20 + colIdx * 4}s` }}
          >
            {/* Duplicate for seamless loop */}
            {[...col.items, ...col.items].map((item, i) => (
              <div key={i} className="ds-img-wrap">
                <GalleryItem src={item.src} type={item.type} />
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
