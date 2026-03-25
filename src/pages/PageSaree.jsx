import { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const PAGE_TITLE = 'Saree — Education Hub | Onliest';
const PAGE_DESCRIPTION =
  'Explore the saree as luxury textile: weaving fundamentals, loom types, pattern techniques, and resist-dye traditions.';

const IMG = {
  heroVisual: '/ds-3.png',
  weavingIntro: '/edu-fibre.jpg',
  loomHand: '/ds-4.png',
  loomPower: '/ds-5.png',
  patternHero: '/ds-9.png',
  resistHero: '/ds-7.png',
};
const SILK_TYPES = [
  { label: 'Tissue', slug: 'tissue' },
  { label: 'Uppada', slug: 'uppada' },
  { label: 'Velvet', slug: 'velvet' },
  { label: 'Venkatagiri', slug: 'venkatagiri' },
  { label: 'Mysore Silk', slug: 'mysore-silk' },
  { label: 'Organza', slug: 'organza' },
  { label: 'Patola', slug: 'patola' },
  { label: 'Pochampally Ikat', slug: 'pochampally-ikat' },
  { label: 'Banaras', slug: 'banaras' },
  { label: 'Chanderi', slug: 'chanderi' },
  { label: 'Dharmavaram', slug: 'dharmavaram' },
  { label: 'Kanjeevaram', slug: 'kanjeevaram' },
];

export default function PageSaree() {
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
      <main className="rex-page-inner rex-fibre-page rex-saree-page" id="main-content" role="main">
        <div className="rex-fibre-shell rex-saree-shell">
          <header className="rex-fibre-header">
            <p className="rex-page-eyebrow">Education Hub</p>
            <h1 className="rex-fibre-title">Saree</h1>
          </header>

          {/* Hero — editorial split: visual + luxury copy panel */}
          <section className="rex-saree-hero" aria-label="Saree introduction">
            <div className="rex-saree-hero-visual">
              <img
                src={IMG.heroVisual}
                alt="Editorial floral and textile visual for the saree module"
                loading="eager"
              />
            </div>
            <div className="rex-saree-hero-panel">
              <h2 className="rex-saree-hero-kicker">Saree</h2>
              <p className="rex-saree-hero-tag">The ultimate luxury</p>
              <p className="rex-saree-hero-body">
                The saree is a traditional garment made from a long piece of fabric that is draped around the body in
                various styles. It is one of the most recognizable forms of clothing in Indian culture and has been worn
                for generations across different regions. Sarees are created using a wide range of fabrics, weaving
                techniques, and decorative elements. Through variations in texture, color, and design, each saree
                reflects the craftsmanship and cultural heritage of the textile tradition it belongs to.
              </p>
            </div>
          </section>

          {/* Weaving fundamentals */}
          <section className="rex-saree-block" id="weaving" aria-label="Weaving fundamentals">
            <figure className="rex-saree-lead-fig">
              <img src={IMG.weavingIntro} alt="Textile and natural materials still life" loading="lazy" />
            </figure>
            <div className="rex-saree-prose">
              <p>
                Weaving is one of the most fundamental processes in textile creation. It involves interlacing two sets of
                yarns to form a fabric. The vertical yarns are known as the warp, while the horizontal yarns are called
                the weft. The way these two yarn systems intersect determines the structure, strength, texture, and
                visual character of the fabric. In traditional saree production, weaving takes place on looms where the
                warp threads are stretched tightly across the frame and the weft yarn is passed across them repeatedly.
                The density of the yarns, the tension maintained during weaving, and the pattern in which the yarns
                intersect all influence the final appearance and drape of the saree. Understanding this interaction
                between warp and weft helps explain how different weaving traditions produce distinctive fabrics and
                motifs.
              </p>
              <p>
                The loom is the primary tool used in the weaving process. Different types of looms influence how fabric
                is produced, affecting both the speed of production and the level of detail that can be achieved in the
                woven design.
              </p>
            </div>
          </section>

          {/* Loom types — vertical rail + stacked articles */}
          <section className="rex-saree-looms" id="loom-types" aria-label="Loom types">
            <div className="rex-saree-looms-inner">
              <h2 className="rex-saree-looms-rail">Loom types</h2>
              <div className="rex-saree-looms-stack">
                <article className="rex-saree-loom-item">
                  <h3 className="rex-saree-loom-h">Handloom</h3>
                  <figure className="rex-saree-loom-fig">
                    <img src={IMG.loomHand} alt="Handloom weaving reference" loading="lazy" />
                  </figure>
                  <p>
                    Handlooms are manually operated looms traditionally used by artisans. In this method, the weaver
                    controls the movement of the warp and weft by hand, allowing for careful attention to detail and the
                    creation of intricate patterns. Because handloom weaving depends on human skill and rhythm, the
                    resulting fabric often carries subtle variations that reflect the craftsmanship of the weaver. These
                    small irregularities are considered a mark of authenticity in many traditional textiles and sarees.
                  </p>
                </article>
                <article className="rex-saree-loom-item">
                  <h3 className="rex-saree-loom-h">Powerloom</h3>
                  <figure className="rex-saree-loom-fig">
                    <img src={IMG.loomPower} alt="Powerloom textile production reference" loading="lazy" />
                  </figure>
                  <p>
                    Powerlooms are mechanized looms that operate using electrical power. They enable faster fabric
                    production and maintain a high level of consistency across large quantities of material. Powerlooms
                    are widely used in modern textile manufacturing where efficiency and uniformity are required. While
                    they make large-scale production possible, the fabrics produced may lack some of the nuanced texture
                    that characterizes handwoven textiles.
                  </p>
                </article>
              </div>
            </div>
          </section>

          {/* Pattern weaving techniques */}
          <section className="rex-saree-patterns" id="pattern-weaving" aria-label="Pattern weaving techniques">
            <header className="rex-saree-section-head">
              <h2 className="rex-saree-section-title">Pattern weaving techniques</h2>
              <p className="rex-saree-section-lead">
                Beyond the basic structure of warp and weft, certain weaving techniques are used to introduce decorative
                patterns directly into the fabric. These techniques allow motifs to become part of the textile structure
                rather than being added afterward through printing or embroidery.
              </p>
            </header>
            <figure className="rex-saree-pattern-hero">
              <img src={IMG.patternHero} alt="Woven fabric and drape editorial" loading="lazy" />
            </figure>
            <div className="rex-saree-pattern-cols">
              <article>
                <h3 className="rex-saree-col-title">Brocade weaving</h3>
                <p>
                  Brocade weaving incorporates additional decorative threads into the fabric to create raised patterns.
                  These threads are woven into the structure of the fabric during the weaving process, often producing
                  rich and elaborate designs. In many traditional textiles, metallic threads are used in brocade weaving,
                  adding depth and visual richness to the fabric.
                </p>
              </article>
              <article>
                <h3 className="rex-saree-col-title">Jamdani weaving</h3>
                <p>
                  Jamdani is a highly detailed weaving technique in which motifs are inserted into the fabric by hand
                  using supplementary weft threads. Each motif is individually added during the weaving process. This
                  method creates delicate floating patterns that appear almost embroidered onto the fabric, giving the
                  textile a light and intricate decorative quality.
                </p>
              </article>
              <article>
                <h3 className="rex-saree-col-title">Jacquard weaving</h3>
                <p>
                  Jacquard weaving uses a specialized mechanism that controls individual warp threads independently. This
                  allows complex patterns to be woven into the fabric with high precision. Through this system, intricate
                  motifs such as florals, paisleys, and geometric designs can be created directly within the textile.
                </p>
              </article>
            </div>
          </section>

          {/* Resist and dye */}
          <section className="rex-saree-resist" id="resist-dye" aria-label="Resist and dye weaving techniques">
            <header className="rex-saree-section-head">
              <h2 className="rex-saree-section-title">Resist and dye weaving techniques</h2>
              <p className="rex-saree-section-lead">
                In some weaving traditions, yarn is prepared and dyed in specific sections before the weaving process
                begins. Resist methods bind or mask parts of the threads so colour appears only where intended; when the
                cloth is woven, those dyed segments align into motifs that are integral to the structure of the fabric.
              </p>
            </header>
            <figure className="rex-saree-resist-hero">
              <img src={IMG.resistHero} alt="Dyed textile and resist-dye reference" loading="lazy" />
            </figure>
            <div className="rex-saree-resist-cols">
              <article>
                <h3 className="rex-saree-col-title">Ikat dyeing</h3>
                <p>
                  In ikat, sections of yarn are tied or bound and then dyed before weaving. When the threads are wound on
                  the loom and woven, the reserved and dyed areas meet in repeating patterns. The motif edges are often
                  slightly soft or feathered—an unmistakable signature of yarn that was patterned before it became cloth.
                </p>
              </article>
              <article>
                <h3 className="rex-saree-col-title">Double ikat</h3>
                <p>
                  Double ikat is a more demanding variation in which both warp and weft yarns are resist-dyed before
                  weaving. The weaver must align the pre-dyed segments with exceptional precision so that the design
                  registers clearly at every intersection. Textiles made this way—such as certain patola traditions—are
                  among the most technically refined in hand weaving.
                </p>
              </article>
            </div>
          </section>

          <section className="rex-saree-silk-gallery" aria-label="12 silk saree types">
            <h2 className="rex-saree-h2">12 Silk Saree Types</h2>
            <ul className="rex-saree-gallery">
              {SILK_TYPES.map((item, idx) => (
                <li key={item.slug} className="rex-saree-gallery-item">
                  <a href={`/education/saree/silk/${item.slug}`} className="rex-saree-gallery-link">
                    <figure className="rex-saree-gallery-fig">
                      <img
                        src={`/ds-${(idx % 9) + 1}.png`}
                        alt={`${item.label} saree type`}
                        loading="lazy"
                      />
                      <div className="rex-saree-gallery-overlay" aria-hidden="true">
                        <svg
                          className="rex-saree-gallery-pdficon"
                          width="28"
                          height="28"
                          viewBox="0 0 24 24"
                          fill="none"
                          aria-hidden="true"
                        >
                          <path
                            d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"
                            stroke="currentColor"
                            strokeWidth="1.8"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M14 2v6h6"
                            stroke="currentColor"
                            strokeWidth="1.8"
                            strokeLinejoin="round"
                          />
                        </svg>
                        <span className="rex-saree-gallery-overlay-text">View PDF</span>
                      </div>
                    </figure>
                    <p className="rex-saree-gallery-caption">{item.label}</p>
                  </a>
                </li>
              ))}
            </ul>
          </section>

          <nav className="rex-fibre-footer-cta rex-fibre-footer-nav" aria-label="Education module navigation">
            <a href="/#journey" className="rex-btn rex-btn-edu-nav">← Previous: Education Hub</a>
            <a href="/education/saree-draping" className="rex-btn rex-btn-edu-nav">Next: Saree Draping →</a>
          </nav>
        </div>
      </main>
      <Footer />
    </>
  );
}
