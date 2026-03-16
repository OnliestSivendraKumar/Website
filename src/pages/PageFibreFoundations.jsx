import Header from '../components/Header';
import Footer from '../components/Footer';

const PAGE_TITLE = 'Fibre Foundations — Education Hub | Onliest';
const PAGE_DESCRIPTION =
  'Learn how fibres become fabrics, and why fibre foundations matter for comfort, drape, and durability in sarees and blouses.';

export default function PageFibreFoundations() {
  if (typeof document !== 'undefined') {
    const prevTitle = document.title;
    const metaDesc = document.querySelector('meta[name=\"description\"]');
    const prevDesc = metaDesc?.getAttribute('content') || '';
    if (document.title !== PAGE_TITLE) document.title = PAGE_TITLE;
    if (metaDesc && metaDesc.getAttribute('content') !== PAGE_DESCRIPTION) {
      metaDesc.setAttribute('content', PAGE_DESCRIPTION);
    }
    // Restore on unmount (React will remount App on navigation)
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
      <main className="rex-page-inner rex-fibre-page" id="main-content" role="main">
        <section className="rex-fibre-hero" aria-label="Fibre foundations">
          <div className="rex-fibre-shell">
            <header className="rex-fibre-header">
              <p className="rex-page-eyebrow">Education Hub</p>
              <h1 className="rex-page-hero-title rex-page-hero-title--left">Fibre Foundations</h1>
              <p className="rex-fibre-intro">
                Before a saree or blouse becomes a garment, it begins as fibre. This guide explains how those fibres
                shape comfort, drape, and durability.
              </p>
            </header>

            <figure className="rex-fibre-hero-media">
              <img src="/edu-fibre.jpg" alt="Abstract fibre and fabric texture" loading="lazy" />
            </figure>

            <article className="rex-fibre-body">
              <h2>Fibre foundations</h2>
              <p>
                Every fabric begins long before it becomes a saree or a blouse. At the very origin of textile creation
                lies the fibre&mdash;the smallest building block from which yarns are spun and fabrics are eventually
                woven or knitted. Understanding fibres is often the first step toward understanding fabric itself,
                because the nature of a fibre quietly shapes how a textile feels, drapes, and behaves when worn.
              </p>
              <p>
                From the softness of cotton to the luminous smoothness of silk, each fibre carries its own character.
                These natural qualities influence everything from comfort and breathability to structure and durability.
              </p>
              <p>
                A fibre is a fine, hair-like strand that can be spun into yarn and later transformed into fabric. When
                many fibres are twisted together, they form yarns strong enough to be woven or knitted into textiles.
                Though fibres may appear delicate, their properties determine much of a fabric&rsquo;s performance. The
                softness of a cotton saree, the crispness of organza, or the fluid fall of silk all begin with the
                nature of the fibre itself.
              </p>
              <p>
                In garment design, understanding the fibre behind the fabric allows designers to anticipate how the
                material will respond when cut, stitched, and worn.
              </p>

              <h2>Natural fibres</h2>
              <p>
                Natural fibres are derived from sources found in nature&mdash;plants, animals, or minerals. These fibres
                have been used in textile traditions for centuries and remain central to many saree and blouse fabrics
                today.
              </p>
              <p>
                Plant-based fibres such as cotton are valued for their breathability and comfort, making them suitable
                for everyday wear and warm climates. Animal-derived fibres such as silk are known for their smooth
                texture, natural sheen, and graceful drape, often associated with ceremonial and festive garments.
              </p>
              <p>
                Because natural fibres originate from organic sources, they often carry subtle variations in texture and
                appearance, adding character to the finished textile.
              </p>

              <h2>Blended fibres</h2>
              <p>
                Blended fabrics combine two or more types of fibres within the same textile. The purpose of blending is
                often to balance the qualities of different materials.
              </p>
              <p>
                For example, a natural fibre may be combined with a synthetic one to improve durability while
                maintaining comfort. Blends allow fabrics to achieve a combination of softness, strength, and ease of
                care.
              </p>
              <p>
                In many garments, these blended fibres offer a practical balance between tradition and modern textile
                technology.
              </p>
            </article>

            <div className="rex-fibre-footer-cta">
              <a href="/#journey" className="rex-btn rex-btn-ghost">
                Back to Education Hub
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

