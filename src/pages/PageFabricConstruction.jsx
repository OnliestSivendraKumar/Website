import Header from '../components/Header';
import Footer from '../components/Footer';

const PAGE_TITLE = 'Fabric Construction — Education Hub | Onliest';
const PAGE_DESCRIPTION =
  'Learn how fabrics are built from yarns: woven and knit construction, and how they influence drape, structure, and suitability for sarees and blouses.';

export default function PageFabricConstruction() {
  if (typeof document !== 'undefined') {
    const prevTitle = document.title;
    const metaDesc = document.querySelector('meta[name="description"]');
    const prevDesc = metaDesc?.getAttribute('content') || '';
    if (document.title !== PAGE_TITLE) document.title = PAGE_TITLE;
    if (metaDesc && metaDesc.getAttribute('content') !== PAGE_DESCRIPTION) {
      metaDesc.setAttribute('content', PAGE_DESCRIPTION);
    }
    window.addEventListener(
      'beforeunload',
      () => {
        document.title = prevTitle;
        if (metaDesc) metaDesc.setAttribute('content', prevDesc);
      },
      { once: true },
    );
  }

  return (
    <>
      <Header hideOnPanels={false} />
      <main className="rex-page-inner rex-fibre-page rex-fabric-page" id="main-content" role="main">
        <div className="rex-fibre-shell">

          <header className="rex-fibre-header">
            <p className="rex-page-eyebrow">Education Hub</p>
            <h1 className="rex-fibre-title">Fabric Construction</h1>
          </header>

          {/* Hero image — full width */}
          <figure className="rex-fabric-hero">
            <img src="/edu-fibre.jpg" alt="Textile detail: fibres and construction" loading="eager" />
          </figure>

          {/* Section 1: FABRIC CONSTRUCTION — image left, text right */}
          <section className="rex-fibre-section">
            <div className="rex-fibre-float">
              <figure className="rex-fibre-figure rex-fibre-figure--sm">
                <img src="/ds-1.png" alt="Model in draped textile" loading="lazy" />
              </figure>
              <div className="rex-fibre-float-text">
                <h2 className="rex-fibre-section-title">Fabric Construction</h2>
                <p>
                  Once fibres are spun into yarns, the way those yarns are arranged determines the fabric. Fabric
                  construction is the process of turning yarn into a textile—whether by weaving, knitting, or other
                  methods—and it strongly influences a material&rsquo;s behaviour, strength, breathability, and response
                  to tailoring. Even fabrics made from the same fibre can have very different personalities depending
                  on how they are constructed.
                </p>
              </div>
            </div>
          </section>

          <hr className="rex-fibre-divider" />

          {/* Section 2: WOVEN FABRICS — text left, image right */}
          <section className="rex-fibre-section">
            <div className="rex-fibre-split rex-fibre-split--text-left">
              <div className="rex-fibre-split-text">
                <h2 className="rex-fibre-section-title">Woven Fabrics</h2>
                <p>
                  Woven fabrics are created when two sets of yarns—warp and weft—are interlaced at right angles. This
                  structure produces a stable, structured textile that holds its shape well and is widely used in
                  traditional sarees, from silk to cotton weaves.
                </p>
                <p>
                  Woven fabrics are well suited to tailoring and structured blouse designs. Their appearance and
                  hand vary with yarn type, density, and weave pattern, offering a broad range of looks and
                  performance for both sarees and blouses.
                </p>
              </div>
              <figure className="rex-fibre-figure rex-fibre-figure--tall">
                <img src="/ds-9.png" alt="Model in woven fabric garment" loading="lazy" />
              </figure>
            </div>
          </section>

          <hr className="rex-fibre-divider" />

          {/* Section 3: KNIT FABRICS — image left, text right */}
          <section className="rex-fibre-section">
            <div className="rex-fibre-split rex-fibre-split--image-left">
              <figure className="rex-fibre-figure rex-fibre-figure--tall">
                <img src="/ds-5.png" alt="Model in knit fabric" loading="lazy" />
              </figure>
              <div className="rex-fibre-split-text">
                <h2 className="rex-fibre-section-title">Knit Fabrics</h2>
                <p>
                  Knit fabrics are formed by looping yarns in a continuous series of interconnected stitches. This
                  structure allows for stretch and free movement, making knits flexible, soft, and adaptable to the
                  body.
                </p>
                <p>
                  While less common in traditional saree fabrics, knits are often used in contemporary blouse designs
                  where comfort and stretch are desired. They bring a distinctive softness and fluidity that contrasts
                  with the crispness of many woven textiles.
                </p>
              </div>
            </div>
          </section>

          <nav className="rex-fibre-footer-cta rex-fibre-footer-nav" aria-label="Education module navigation">
            <a href="/education/fibre-foundations" className="rex-btn rex-btn-edu-nav">
              ← Previous: Fibre &amp; Fabric
            </a>
            <a href="/#journey" className="rex-btn rex-btn-edu-nav">
              Next: Education Hub →
            </a>
          </nav>

        </div>
      </main>
      <Footer />
    </>
  );
}
