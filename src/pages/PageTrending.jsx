import { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const PAGE_TITLE = 'Trending — Education Hub | Onliest';
const PAGE_DESCRIPTION =
  'Explore trending saree and blouse directions: color, fabric behavior, silhouettes, placements, and drape language.';

export default function PageTrending() {
  useEffect(() => {
    document.title = PAGE_TITLE;
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute('content', PAGE_DESCRIPTION);
    return () => {
      document.title = 'Onliest';
    };
  }, []);

  return (
    <>
      <Header hideOnPanels={false} />
      <main className="rex-page-inner rex-fibre-page rex-trend-page" id="main-content" role="main">
        <div className="rex-fibre-shell rex-trend-shell">
          <header className="rex-fibre-header rex-trend-header">
            <p className="rex-page-eyebrow">Education Hub</p>
            <h1 className="rex-fibre-title">Trending</h1>
          </header>

          <section className="rex-trend-board" aria-label="Exclusivity loading intro">
            <h2 className="rex-trend-display">Exclusivity Loading..</h2>
            <figure className="rex-trend-hero-image">
              <img src="/ds-11.png" alt="Editorial models in monochrome saree styling" loading="eager" />
            </figure>
            <div className="rex-trend-meta">
              <span>2026</span>
              <span>Story and Love</span>
              <span>Fashion</span>
            </div>
          </section>

          <section className="rex-trend-section rex-trend-color" aria-label="Color language and visual mood">
            <div className="rex-trend-color-grid">
              {['/ds-1.png', '/ds-2.png', '/ds-3.png', '/ds-4.png', '/ds-5.png', '/ds-7.png', '/ds-8.png', '/ds-9.png', '/edu-color.png'].map((src) => (
                <figure key={src} className="rex-trend-tile">
                  <img src={src} alt="" loading="lazy" />
                </figure>
              ))}
            </div>
            <div className="rex-trend-color-copy">
              <p className="rex-trend-kicker">Color</p>
              <p>
                With intensity and calmness working together, color regains its emotional power. The season leans from
                luminous whites and jewel tones into grounded neutrals, creating room for both statement and subtlety.
              </p>
              <p>
                The relationship between hue and drape defines mood. Strong tones sharpen silhouette, while softened palettes
                reveal texture and movement. Trend direction this year favors expressive color with controlled placement.
              </p>
              <div className="rex-trend-mood-swatch" aria-hidden="true" />
              <h3>Hue as language</h3>
              <p>Speaks your style loud and enhances your identity.</p>
            </div>
          </section>

          <section className="rex-trend-section" aria-label="Signature fabrics">
            <p className="rex-trend-kicker">Signature Fabrics</p>
            <h2 className="rex-trend-title">We Design How Fabrics Behave</h2>
            <p className="rex-trend-intro">
              The shift in sarees is no longer only visual, it is material. Craftsmanship and technology now move together:
              loom precision, yarn quality, and finishing systems build textiles that are expressive yet controlled.
            </p>
            <div className="rex-trend-three">
              <article>
                <img src="/edu-saree.png" alt="Controlled silk saree direction" loading="lazy" />
                <h3>Controlled silk</h3>
              </article>
              <article>
                <img src="/edu-drape.png" alt="Hybrid cotton saree direction" loading="lazy" />
                <h3>Hybrid cotton</h3>
              </article>
              <article>
                <img src="/ds-6fh.png" alt="Future-facing textile movement" loading="lazy" />
                <h3>Future facing textiles</h3>
              </article>
            </div>
          </section>

          <section className="rex-trend-section rex-trend-blouse" aria-label="Blouse silhouettes">
            <p className="rex-trend-kicker">Blouse</p>
            <h2 className="rex-trend-title">Signature Silhouettes, We Design How Fabrics Behave</h2>
            <div className="rex-trend-blouse-layout">
              <div className="rex-trend-blouse-left">
                <img src="/edu-blouse.png" alt="Collared blouse silhouette" loading="lazy" />
                <p>Collared blouse</p>
              </div>
              <div className="rex-trend-blouse-mid">
                <img src="/ds-3.png" alt="Corset blouse silhouette" loading="lazy" />
                <p>Corset blouse</p>
                <img src="/ds-4.png" alt="Structured blouse silhouette" loading="lazy" />
                <p>Structured blouse</p>
              </div>
              <div className="rex-trend-blouse-right">
                <img src="/Saree-Canvas.png" alt="Relaxed blouse silhouette with saree styling" loading="lazy" />
                <p>Relaxed blouse</p>
              </div>
            </div>
          </section>

          <section className="rex-trend-section rex-trend-collage" aria-label="Saree collage and direction">
            <p className="rex-trend-kicker">Sarees</p>
            <div className="rex-trend-collage-wrap">
              <div className="rex-trend-collage-grid">
                {['/ds-1.png', '/ds-2.png', '/ds-3.png', '/ds-4.png', '/ds-5.png', '/ds-7.png', '/ds-8.png', '/ds-9.png'].map((src) => (
                  <img key={src} src={src} alt="" loading="lazy" />
                ))}
              </div>
              <div className="rex-trend-collage-hero">
                <img src="/edu-saree.png" alt="Saree hero trend direction" loading="lazy" />
                <p>
                  Nothing stands alone. Fabric determines the fall, blouse defines the frame, and drape brings it to life.
                  Each element responds to another to create a balance that is both controlled and fluid.
                </p>
              </div>
            </div>
          </section>

          <section className="rex-trend-section rex-trend-modern" aria-label="Modern market styles">
            <div className="rex-trend-modern-grid">
              <img src="/ds-2.png" alt="Modern saree styling 1" loading="lazy" />
              <img src="/ds-3.png" alt="Modern saree styling 2" loading="lazy" />
              <img src="/ds-4.png" alt="Modern saree styling 3" loading="lazy" />
              <img src="/ds-5.png" alt="Modern saree styling 4" loading="lazy" />
              <img src="/ds-6fh.png" alt="Modern saree styling 5" loading="lazy" />
            </div>
            <div className="rex-trend-modern-copy">
              <p className="rex-trend-kicker">A/W 2026</p>
              <h2 className="rex-trend-title">Popular styles in the market place</h2>
              <p>
                Explore the exclusive blouses, designs, patterns, and placements. Current trend volumes combine silhouette,
                fabric response, and ornament intensity to build a personalized fashion language.
              </p>
            </div>
          </section>

          <section className="rex-trend-section rex-trend-drape" aria-label="Drape direction">
            <div className="rex-trend-drape-grid">
              {['/ds-7.png', '/ds-8.png', '/ds-9.png', '/edu-drape.png', '/edu-saree.png', '/edu-blouse.png'].map((src) => (
                <img key={src} src={src} alt="" loading="lazy" />
              ))}
            </div>
            <div className="rex-trend-drape-copy">
              <h2 className="rex-trend-title">Drape</h2>
              <p className="rex-trend-sub">The inspiration from the calmness</p>
              <p>
                Today, individuality shapes drape. It adapts, responds, and transforms with the wearer. A long rectangle of
                fabric is no longer static cloth, it becomes interpreted structure and motion.
              </p>
              <p>
                Tradition now merges with precision. Fold behavior is studied and optimized through material innovation:
                lighter silks, responsive cottons, and blended fabrics that improve control over how a saree moves and settles.
              </p>
            </div>
          </section>

          <nav className="rex-fibre-footer-cta rex-fibre-footer-nav" aria-label="Education module navigation">
            <a href="/education/onliest-world" className="rex-btn rex-btn-edu-nav">← Previous: Onliest World</a>
            <a href="/education/body-compatibility" className="rex-btn rex-btn-edu-nav">Next: Body Compatibility →</a>
          </nav>
        </div>
      </main>
      <Footer />
    </>
  );
}
