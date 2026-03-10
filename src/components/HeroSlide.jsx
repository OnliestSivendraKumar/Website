const FEATURE_ROW_1 = [
  'Saree Details', 'Blouse Details', 'Borders', 'End Knots',
  'Signature Logo', 'Blouse Back Design', 'Sleeve Style', 'Color Match',
];
const FEATURE_ROW_2 = [
  'Favorites', 'Design Preview', 'Designing Cloth', 'Saree Details',
  'Pattern Type', 'Artwork', 'Blouse Options', 'Custom Artwork',
];

const GALLERY_COL_1 = ['/ds-1.png', '/ds-4.png', '/ds-7.png', '/ds-10.png'];
const GALLERY_COL_2 = ['/ds-2.png', '/ds-5.png', '/ds-8.png', '/ds-11.png'];
const GALLERY_COL_3 = ['/ds-3.png', '/ds-6.png', '/ds-9.png', '/ds-12.png'];

export default function HeroSlide() {
  return (
    <section className="rex-hero-slide" aria-label="Hero — Design your perfect saree & blouse">
      <div className="rex-hero-inner">
        {/* Left: copy */}
        <div className="rex-hero-copy">
          <span className="rex-hero-badge">Design Studio</span>
          <h2 className="rex-hero-headline">
            Design your perfect<br />saree &amp; blouse<br /><em>visually</em>
          </h2>
          <p className="rex-hero-desc">
            Compose your couture from scratch. Pick fabrics, customise blouse neck, sleeves and back patterns, then preview your complete look before you place the order.
          </p>
          <p className="rex-hero-all-label">All you can do in Design Studio</p>
          <div className="rex-hero-marquee-wrap" aria-hidden="true">
            <div className="rex-hero-marquee-track rex-hero-marquee--left">
              {[...FEATURE_ROW_1, ...FEATURE_ROW_1].map((f, i) => (
                <span key={`r1-${i}`} className="rex-hero-chip">{f}</span>
              ))}
            </div>
            <div className="rex-hero-marquee-track rex-hero-marquee--right">
              {[...FEATURE_ROW_2, ...FEATURE_ROW_2].map((f, i) => (
                <span key={`r2-${i}`} className="rex-hero-chip">{f}</span>
              ))}
            </div>
          </div>
        </div>

        {/* Right: 3-column scrolling gallery */}
        <div className="rex-hero-gallery-wrap">
          <div className="rex-hero-gallery">
            {[GALLERY_COL_1, GALLERY_COL_2, GALLERY_COL_3].map((col, colIdx) => (
              <div
                key={colIdx}
                className={`rex-hero-gallery-col${colIdx === 1 ? ' rex-hero-gallery-col--reverse' : ''}`}
              >
                {col.map((src, i) => (
                  <div key={`${colIdx}-${i}`} className="rex-hero-gallery-card">
                    <img
                      src={src}
                      alt="Design studio look"
                      className="rex-hero-gallery-img"
                      loading={i === 0 ? 'eager' : 'lazy'}
                      draggable="false"
                    />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
