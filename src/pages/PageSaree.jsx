import Header from '../components/Header';
import Footer from '../components/Footer';

const PAGE_TITLE = 'Saree — Education Hub | Onliest';
const PAGE_DESCRIPTION =
  'The ultimate luxury. Explore the saree: traditional drape, weaving, loom types, pattern techniques, resist and dye methods, and silk saree types.';

/* 12 silk saree types for gallery (screenshot 6) */
const SILK_SAREE_TYPES = [
  { name: 'Banarasi', slug: 'banarasi' },
  { name: 'Kanjeevaram', slug: 'kanjeevaram' },
  { name: 'Tussar', slug: 'tussar' },
  { name: 'Chanderi', slug: 'chanderi' },
  { name: 'Patola', slug: 'patola' },
  { name: 'Mysore Silk', slug: 'mysore-silk' },
  { name: 'Dharmavaram', slug: 'dharmavaram' },
  { name: 'Chiffon Silk', slug: 'chiffon-silk' },
  { name: 'Organza', slug: 'organza' },
  { name: 'Georgette Silk', slug: 'georgette-silk' },
  { name: 'Silk Cotton', slug: 'silk-cotton' },
  { name: 'Kota Doria', slug: 'kota-doria' },
];

export default function PageSaree() {
  if (typeof document !== 'undefined') {
    const prevTitle = document.title;
    const metaDesc = document.querySelector('meta[name="description"]');
    const prevDesc = metaDesc?.getAttribute('content') || '';
    if (document.title !== PAGE_TITLE) document.title = PAGE_TITLE;
    if (metaDesc && metaDesc.getAttribute('content') !== PAGE_DESCRIPTION)
      metaDesc.setAttribute('content', PAGE_DESCRIPTION);
    window.addEventListener('beforeunload', () => {
      document.title = prevTitle;
      if (metaDesc) metaDesc.setAttribute('content', prevDesc);
    }, { once: true });
  }

  return (
    <>
      <Header hideOnPanels={false} />
      <main className="rex-page-inner rex-saree-page" id="main-content" role="main">
        <div className="rex-saree-shell">

          <p className="rex-page-eyebrow rex-saree-eyebrow">Education Hub</p>

          {/* ═══ Screenshot 1: Hero — image top, then centered title + subtitle + 2 paras (white section) ═══ */}
          <section className="rex-saree-hero" id="saree-intro">
            <figure className="rex-saree-hero-img">
              <img src="/ds-1.png" alt="Floral and textile detail" loading="eager" />
            </figure>
            <div className="rex-saree-hero-text">
              <h1 className="rex-saree-hero-title">Saree</h1>
              <p className="rex-saree-hero-subtitle">The Ultimate Luxury</p>
              <p className="rex-saree-hero-p">
                The saree is a traditional garment made from a long piece of fabric that is draped around the body in various styles. It is one of the most recognizable forms of clothing in Indian culture and has been worn for generations across different regions.
              </p>
              <p className="rex-saree-hero-p">
                Sarees are created using a wide range of fabrics, weaving techniques, and decorative elements. Through variations in texture, color, and design, each saree reflects the craftsmanship and cultural heritage of the textile tradition it belongs to.
              </p>
            </div>
          </section>

          {/* ═══ Screenshot 2: Weaving intro — large image, then 2 left-aligned paragraphs ═══ */}
          <section className="rex-saree-section rex-saree-weaving" id="weaving">
            <figure className="rex-saree-section-img rex-saree-section-img--wide">
              <img src="/ds-3.png" alt="Driftwood and flowers still life" loading="lazy" />
            </figure>
            <div className="rex-saree-section-body">
              <p className="rex-saree-p">
                Beyond the basic structure of warp and weft, the way these threads intersect determines the fabric&rsquo;s character—its structure, strength, texture, and visual identity. In traditional saree production, the loom holds the warp threads under tension while the weaver passes the weft yarns through. The density of the yarns, the tension of the weave, and the pattern chosen all influence how the finished saree will look and drape. Understanding how warp and weft interact is essential to creating distinctive fabrics and motifs.
              </p>
              <p className="rex-saree-p">
                The loom is the primary tool in weaving. Different types of looms influence both the speed of fabric production and the level of detail that can be achieved in the woven design.
              </p>
            </div>
          </section>

          {/* ═══ Screenshot 3: Loom Types — vertical title on right, left column: Handloom + Powerloom (heading, image, text) ═══ */}
          <section className="rex-saree-loom-types" id="loom-types">
            <div className="rex-saree-loom-content">
              <div className="rex-saree-loom-block">
                <h2 className="rex-saree-h2">Handloom</h2>
                <figure className="rex-saree-loom-fig">
                  <img src="/edu-fibre.jpg" alt="Handloom textile detail" loading="lazy" />
                </figure>
                <p className="rex-saree-p">
                  Handlooms are manually operated looms traditionally used by artisans. In this method, the weaver controls the movement of the warp and weft by hand, allowing for careful attention to detail and the creation of intricate patterns. Because handloom weaving depends on human skill and rhythm, the resulting fabric often carries subtle variations that reflect the craftsmanship of the weaver. These small irregularities are considered a mark of authenticity in many traditional textiles and sarees.
                </p>
              </div>
              <div className="rex-saree-loom-block">
                <h2 className="rex-saree-h2">Powerloom</h2>
                <figure className="rex-saree-loom-fig">
                  <img src="/edu-fibre.jpg" alt="Powerloom textile detail" loading="lazy" />
                </figure>
                <p className="rex-saree-p">
                  Powerlooms are mechanized looms that operate using electrical power. They enable faster fabric production and maintain a high level of consistency across large quantities of material. Powerlooms are widely used in modern textile manufacturing where efficiency and uniformity are required. While they make large-scale production possible, the fabrics produced may lack some of the nuanced texture that characterizes handwoven textiles.
                </p>
              </div>
            </div>
            <h2 className="rex-saree-vertical-title" aria-hidden="true">Loom Types</h2>
          </section>

          {/* ═══ Screenshot 4: Pattern Weaving Techniques — heading + intro, large image, 3 columns ═══ */}
          <section className="rex-saree-section rex-saree-pattern" id="pattern-weaving">
            <h2 className="rex-saree-h2">Pattern Weaving Techniques</h2>
            <p className="rex-saree-intro-p">
              Beyond the basic structure of warp and weft, certain weaving techniques are used to introduce decorative patterns directly into the fabric. These techniques allow motifs to become part of the textile structure rather than being added afterward through printing or embroidery.
            </p>
            <figure className="rex-saree-section-img rex-saree-section-img--wide">
              <img src="/ds-5.png" alt="Textile and floral detail" loading="lazy" />
            </figure>
            <div className="rex-saree-three-col">
              <div className="rex-saree-col">
                <h3 className="rex-saree-h3">Brocade Weaving</h3>
                <p className="rex-saree-p">
                  Brocade weaving incorporates additional decorative threads into the fabric to create raised patterns. Metallic or contrasting threads are often used to add depth and richness, making the design an integral part of the weave rather than a surface application.
                </p>
              </div>
              <div className="rex-saree-col">
                <h3 className="rex-saree-h3">Jamdani Weaving</h3>
                <p className="rex-saree-p">
                  Jamdani is a detailed hand-weaving technique where individual motifs are added during the weaving process. The result is a delicate, embroidered-like pattern that is woven into the cloth itself, often seen in fine cotton and silk sarees.
                </p>
              </div>
              <div className="rex-saree-col">
                <h3 className="rex-saree-h3">Jacquard Weaving</h3>
                <p className="rex-saree-p">
                  Jacquard weaving uses a specialized mechanism to control individual warp threads, allowing for complex, high-precision patterns. Florals, paisleys, and geometric designs can be woven with great detail, making it a key technique in many premium sarees.
                </p>
              </div>
            </div>
          </section>

          {/* ═══ Screenshot 5: Resist and Dye — heading + intro, large image, 2 columns (Ikat, Double Ikat) ═══ */}
          <section className="rex-saree-section rex-saree-resist-dye" id="resist-dye">
            <h2 className="rex-saree-h2">Resist and Dye Weaving Techniques</h2>
            <p className="rex-saree-intro-p">
              Some weaving traditions involve preparing the yarn before it is woven. In these techniques, yarns are tied and dyed in specific sections so that patterns appear once the weaving process is complete.
            </p>
            <figure className="rex-saree-section-img rex-saree-section-img--wide">
              <img src="/ds-4.png" alt="Textile and floral detail" loading="lazy" />
            </figure>
            <div className="rex-saree-two-col">
              <div className="rex-saree-col">
                <h3 className="rex-saree-h3">Ikat Dyeing</h3>
                <p className="rex-saree-p">
                  Ikat is created by tying and dyeing sections of yarn before weaving begins. When the dyed yarns are woven together, the patterns emerge across the fabric surface. Because the dyed sections do not always align perfectly during weaving, ikat designs often have soft, slightly blurred edges that give the textile a distinctive visual character.
                </p>
              </div>
              <div className="rex-saree-col">
                <h3 className="rex-saree-h3">Double Ikat</h3>
                <p className="rex-saree-p">
                  Double ikat is a more complex variation in which both the warp and weft yarns are resist-dyed before weaving. The dyed sections must align precisely during weaving to produce clear motifs. This technique requires exceptional skill and planning, making double ikat one of the most intricate weaving traditions in textile production.
                </p>
              </div>
            </div>
          </section>

          {/* ═══ Screenshot 6: 12 Silk Saree Types — gallery ═══ */}
          <section className="rex-saree-section rex-saree-silk-gallery" id="silk-saree-types">
            <h2 className="rex-saree-h2">12 Silk Saree Types</h2>
            <div className="rex-saree-gallery" role="list">
              {SILK_SAREE_TYPES.map((item) => (
                <article key={item.slug} className="rex-saree-gallery-item" role="listitem">
                  <figure className="rex-saree-gallery-fig">
                    <img src="/edu-saree.png" alt={item.name} loading="lazy" />
                  </figure>
                  <p className="rex-saree-gallery-caption">{item.name}</p>
                </article>
              ))}
            </div>
          </section>

          <nav className="rex-fibre-footer-cta rex-fibre-footer-nav" aria-label="Education module navigation">
            <a href="/#journey" className="rex-btn rex-btn-edu-nav">
              ← Previous: Education Hub
            </a>
            <a href="/education/fibre-foundations" className="rex-btn rex-btn-edu-nav">
              Next: Fibre &amp; Fabric →
            </a>
          </nav>

        </div>
      </main>
      <Footer />
    </>
  );
}
