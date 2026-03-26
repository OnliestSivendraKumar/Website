import Header from '../components/Header';
import Footer from '../components/Footer';

const PAGE_TITLE = 'Fibre & Fabric — Education Hub | Onliest';
const PAGE_DESCRIPTION =
  'Explore fibre foundations, fabric construction, weave types, thread count, silk and cotton types, fabric behaviour, and texture — the complete Onliest fabric intelligence guide.';

export default function PageFibreFoundations() {
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
      <main className="rex-page-inner rex-fibre-page" id="main-content" role="main">
        <div className="rex-fibre-shell">

          {/* ── Page header ── */}
          <header className="rex-fibre-header">
            <p className="rex-page-eyebrow">Education Hub</p>
            <h1 className="rex-fibre-title">Fibre &amp; Fabric</h1>
            {/* <p className="rex-fibre-intro">
              Fibre and fabric form the fundamental base of any textile or garment. This module covers everything
              from raw fibres to finished fabric construction, weave structures, thread count, silk and cotton
              varieties, and how fabric behaves on the body.
            </p> */}
          </header>

          {/* ════════════════ SCREENSHOT 1 ════════════════ */}

          {/* 1. FIBRE FOUNDATIONS */}
          <section className="rex-fibre-section" id="fibre-foundation">
            <div className="rex-fibre-float">
              <figure className="rex-fibre-figure rex-fibre-figure--sm">
                <img src="https://res.cloudinary.com/djlqifbxp/image/upload/v1774509290/ds-1_ao4fyf.png" alt="Model in draped textile" loading="eager" />
              </figure>
              <div className="rex-fibre-float-text">
                <p>
                  Every fabric begins long before it becomes a saree or a blouse. At the very origin of textile
                  creation lies the fibre&mdash;the smallest building block from which yarns are spun and fabrics
                  are eventually woven or knitted. Understanding fibres is often the first step toward
                  understanding fabric itself, because the nature of a fibre quietly shapes how a textile feels,
                  drapes, and behaves when worn.
                </p>
                <p>
                  From the softness of cotton to the luminous smoothness of silk, each fibre carries its own
                  character. These natural qualities influence everything from comfort and breathability to
                  structure and durability.
                </p>
              </div>
            </div>
            <p className="rex-fibre-full-p">
              A fibre is a fine, hair-like strand that can be spun into yarn and later transformed into fabric.
              When many fibres are twisted together, they form yarns strong enough to be woven or knitted into
              textiles. Though fibres may appear delicate, their properties determine much of a
              fabric&rsquo;s performance. The softness of a cotton saree, the crispness of organza, or the
              fluid fall of silk all begin with the nature of the fibre itself.
            </p>
            <p className="rex-fibre-full-p">
              In garment design, understanding the fibre behind the fabric allows designers to anticipate how
              the material will respond when cut, stitched, and worn.
            </p>
          </section>

          <hr className="rex-fibre-divider" />

          {/* 2. NATURAL FIBRES — text left, tall image right */}
          <section className="rex-fibre-section" id="natural-fibres">
            <div className="rex-fibre-split rex-fibre-split--text-left">
              <div className="rex-fibre-split-text">
                <h2 className="rex-fibre-section-title">Natural Fibres</h2>
                <p>
                  Natural fibres are derived from sources found in nature&mdash;plants, animals, or minerals.
                  These fibres have been used in textile traditions for centuries and remain central to many
                  saree and blouse fabrics today.
                </p>
                <p>
                  Plant-based fibres such as cotton are valued for their breathability and comfort, making them
                  suitable for everyday wear and warm climates. Animal-derived fibres such as silk are known for
                  their smooth texture and natural sheen, often associated with ceremonial and festive garments.
                </p>
                <p>
                  Because natural fibres originate from organic sources, they often carry subtle variations in
                  texture and appearance, adding character to the finished textile.
                </p>
              </div>
              <figure className="rex-fibre-figure rex-fibre-figure--tall">
                <img src="https://res.cloudinary.com/djlqifbxp/image/upload/v1774509647/ds-9_wyiqi2.png" alt="Model in natural fibre saree" loading="lazy" />
              </figure>
            </div>
          </section>

          <hr className="rex-fibre-divider" />

          {/* 3. BLENDED FIBRES — tall image left, text right */}
          <section className="rex-fibre-section" id="blended-fibres">
            <div className="rex-fibre-split rex-fibre-split--image-left">
              <figure className="rex-fibre-figure rex-fibre-figure--tall">
                <img src="/ds-5.png" alt="Designer in layered blended fabric garment" loading="lazy" />
              </figure>
              <div className="rex-fibre-split-text">
                <h2 className="rex-fibre-section-title">Blended Fibres</h2>
                <p>
                  Blended fabrics combine two or more types of fibres within the same textile. The purpose of
                  blending is often to balance the qualities of different materials.
                </p>
                <p>
                  For example, a natural fibre may be combined with a synthetic one to improve durability while
                  maintaining comfort. Blends allow fabrics to achieve a combination of softness, strength, and
                  ease of care.
                </p>
                <p>
                  In many garments, these blended fibres offer a practical balance between tradition and modern
                  textile technology.
                </p>
              </div>
            </div>
          </section>

          {/* ════════════════ SCREENSHOT 2 ════════════════ */}

          {/* Hero break — botanical/texture */}
          <figure className="rex-fabric-hero">
            <img src="https://res.cloudinary.com/djlqifbxp/image/upload/v1774517844/edu-fibre_ffsidq.jpg" alt="Textile detail — fabric structure" loading="lazy" />
          </figure>

          {/* 4. FABRIC CONSTRUCTION — image left, text right (no gap between paragraphs) */}
          <section className="rex-fibre-section" id="fabric-construction">
            <h2 className="rex-fibre-section-title" style={{ marginBottom: '1rem' }}>Fabric Construction</h2>
            <div className="rex-fibre-float">
              <figure className="rex-fibre-figure rex-fibre-figure--sm">
                <img src="https://res.cloudinary.com/djlqifbxp/image/upload/v1774509290/ds-3_maibel.png" alt="Model in structured garment" loading="lazy" />
              </figure>
              <div className="rex-fibre-float-text">
                <p>
                  Once fibres are spun into yarn, the next stage in textile creation begins&mdash;the
                  construction of fabric itself. This is where individual threads are brought together in
                  deliberate patterns and structures, transforming loose yarns into a stable textile.
                </p>
                <p>
                  Fabric construction determines much of how a material behaves. It influences the strength of
                  the fabric, the way it moves, how breathable it feels, and how it responds when tailored into
                  garments such as blouses or draped as sarees. Even when two fabrics are made from the same
                  fibre, differences in construction can give them entirely different personalities.
                </p>
              </div>
            </div>
          </section>

          <hr className="rex-fibre-divider" />

          {/* 5. WOVEN FABRICS — text left, tall image right */}
          <section className="rex-fibre-section" id="woven-fabrics">
            <div className="rex-fibre-split rex-fibre-split--text-left">
              <div className="rex-fibre-split-text">
                <h2 className="rex-fibre-section-title">Woven Fabrics</h2>
                <p>
                  Woven fabrics are created by interlacing two sets of yarns at right angles. One set runs
                  lengthwise along the fabric, while the other passes across it, forming a stable and structured
                  textile.
                </p>
                <p>
                  This construction produces fabrics that tend to hold their shape well. Many traditional sarees
                  including silk and cotton weaves are created using woven structures. Because of their
                  stability, woven fabrics often respond well to tailoring and structured blouse designs. The
                  texture, weight, and appearance of a woven fabric can vary widely depending on how the yarns
                  are arranged.
                </p>
              </div>
              <figure className="rex-fibre-figure rex-fibre-figure--tall">
                <img src="https://res.cloudinary.com/djlqifbxp/image/upload/v1774509647/ds-9_wyiqi2.png" alt="Model in woven fabric garment" loading="lazy" />
              </figure>
            </div>
          </section>

          {/* 6. KNIT FABRICS — tall image left, text right */}
          <section className="rex-fibre-section" id="knit-fabrics">
            <div className="rex-fibre-split rex-fibre-split--image-left">
              <figure className="rex-fibre-figure rex-fibre-figure--tall">
                <img src="/ds-5.png" alt="Model in knit fabric" loading="lazy" />
              </figure>
              <div className="rex-fibre-split-text">
                <h2 className="rex-fibre-section-title">Knit Fabrics</h2>
                <p>
                  Knit fabrics are formed by looping yarns together in a continuous series of interconnected
                  stitches. Unlike woven textiles, this looped structure allows the fabric to stretch and move
                  more freely.
                </p>
                <p>
                  Because of this flexibility, knit fabrics often feel softer and more adaptable to the
                  body&rsquo;s movement. While knits are commonly used in many garments, they appear less
                  frequently in traditional saree fabrics but are sometimes used in contemporary blouse designs
                  where comfort and stretch are desired. The looped construction gives knit fabrics a distinctive
                  softness and fluidity.
                </p>
              </div>
            </div>
          </section>

          {/* ════════════════ SCREENSHOT 3 ════════════════ */}

          {/* 7. NON-WOVEN FABRICS — text left, tall image right */}
          <section className="rex-fibre-section" id="non-woven-fabrics">
            <div className="rex-fibre-split rex-fibre-split--text-left">
              <div className="rex-fibre-split-text">
                <h2 className="rex-fibre-section-title">Non-Woven Fabrics</h2>
                <p>
                  Non-woven fabrics are created without weaving or knitting yarns together. Instead, fibres are
                  bonded through mechanical, chemical, or heat processes to form a sheet-like material.
                </p>
                <p>
                  These textiles are often designed for specific functional purposes and are less commonly used
                  in traditional saree and blouse fabrics. However, they play an important role in certain
                  garment components such as interlinings or structural supports within clothing.
                </p>
                <p>
                  Their construction focuses more on performance and stability rather than traditional textile
                  aesthetics.
                </p>
              </div>
              <figure className="rex-fibre-figure rex-fibre-figure--tall">
                <img src="https://res.cloudinary.com/djlqifbxp/image/upload/v1774509290/ds-2_n5rdtx.png" alt="Structural fabric detail" loading="lazy" />
              </figure>
            </div>
          </section>

          <hr className="rex-fibre-divider" />

          {/* 8. WEAVE TYPES — full width + sub-headings + 3-col grid */}
          <section className="rex-fibre-section rex-fibre-full-section" id="weave-types">
            <h2 className="rex-fibre-section-title">Weave Types</h2>
            <p className="rex-fibre-full-p">
              Within woven fabrics, different weave patterns create variations in texture, strength, and visual
              appearance. Three of the most fundamental weave structures form the basis for many textile
              traditions.
            </p>
            <h3 className="rex-fibre-sub-h">Plain Weave</h3>
            <p className="rex-fibre-full-p">
              This is the simplest and most balanced structure, where yarns pass over and under each other in
              an alternating pattern. Fabrics created with plain weave tend to be durable and evenly textured.
            </p>
            <h3 className="rex-fibre-sub-h">Twill Weave</h3>
            <p className="rex-fibre-full-p">
              Twill weaves create a diagonal pattern across the fabric surface. This structure allows the
              fabric to drape more fluidly while remaining strong and resilient.
            </p>
            <h3 className="rex-fibre-sub-h">Satin Weave</h3>
            <p className="rex-fibre-full-p">
              Satin weaves allow yarns to float across the surface of the fabric, producing a smooth and
              lustrous appearance. This structure is often associated with fabrics that display softness and
              subtle sheen.
            </p>
            <div className="rex-fibre-grid-3" aria-label="Weave type examples">
              <div className="rex-fibre-grid-img"><img src="https://res.cloudinary.com/djlqifbxp/image/upload/v1774517844/edu-fibre_ffsidq.jpg" alt="Plain weave" loading="lazy" /></div>
              <div className="rex-fibre-grid-img"><img src="https://res.cloudinary.com/djlqifbxp/image/upload/v1774517844/edu-fibre_ffsidq.jpg" alt="Twill weave" loading="lazy" /></div>
              <div className="rex-fibre-grid-img"><img src="https://res.cloudinary.com/djlqifbxp/image/upload/v1774517844/edu-fibre_ffsidq.jpg" alt="Satin weave" loading="lazy" /></div>
            </div>
          </section>

          {/* ════════════════ SCREENSHOT 4 ════════════════ */}

          <hr className="rex-fibre-divider" />

          {/* 9. THREAD COUNT — text left, small image right */}
          <section className="rex-fibre-section" id="thread-count">
            <div className="rex-fibre-split rex-fibre-split--text-left img-height">
              <div className="rex-fibre-split-text">
                <h2 className="rex-fibre-section-title">Thread Count</h2>
                <p>
                  Thread count refers to the number of threads woven into a square inch of fabric. It includes
                  both the lengthwise threads and the crosswise threads that intersect within the weave.
                </p>
                <p>
                  A higher thread count generally indicates that the fabric has a denser construction, often
                  resulting in a smoother and more refined surface. Lower thread counts may create fabrics that
                  feel lighter or more breathable.
                </p>
                <p>
                  In saree and blouse fabrics, thread count can influence the softness, durability, and overall
                  texture of the textile. While it is only one factor among many, it provides a useful way to
                  understand how tightly a fabric has been constructed.
                </p>
              </div>
              <figure className="rex-fibre-figure rex-fibre-figure--sq">
                <img src="https://res.cloudinary.com/djlqifbxp/image/upload/v1774517844/edu-fibre_ffsidq.jpg" alt="Thread count detail" loading="lazy" />
              </figure>
            </div>
          </section>

          {/* 10. FABRIC MEASUREMENTS — full width */}
          <section className="rex-fibre-section rex-fibre-full-section" id="fabric-measurements">
            <h2 className="rex-fibre-section-title">Fabric Measurements</h2>
            <p className="rex-fibre-full-p">
              Not all fabrics are understood by touch alone. Beyond texture and appearance, textiles are also
              described through measurable qualities that help define their density, weight, and structure.
              These measurements allow designers, weavers, and garment makers to evaluate how a fabric might
              behave before it is transformed into clothing.
            </p>
          </section>

          {/* 11. GSM — full width */}
          <section className="rex-fibre-section rex-fibre-full-section" id="gsm">
            <h2 className="rex-fibre-section-title">GSM (Grams Per Square Meter)</h2>
            <p className="rex-fibre-full-p">
              GSM is a measurement that indicates the weight of a fabric. It represents how many grams a square
              meter of the fabric weighs. Fabrics with lower GSM values tend to be lighter and more delicate,
              often draping easily and feeling airy on the body. Higher GSM fabrics carry more weight and may
              appear thicker or more structured.
            </p>
            <p className="rex-fibre-full-p">
              This measurement helps designers determine whether a fabric is suitable for a flowing saree, a
              structured blouse, or garments that require additional stability.
            </p>
          </section>

          {/* 12. YARN DENSITY — full width */}
          <section className="rex-fibre-section rex-fibre-full-section" id="yarn-density">
            <h2 className="rex-fibre-section-title">Yarn Density</h2>
            <p className="rex-fibre-full-p">
              Yarn density refers to how closely yarns are packed within the fabric structure. While thread
              count measures the number of threads, density focuses on how tightly those threads are arranged.
            </p>
            <p className="rex-fibre-full-p">
              Fabrics with higher yarn density often feel smoother and more compact, while those with lower
              density may appear more open or breathable. This characteristic influences both the texture and
              the durability of the textile.
            </p>
          </section>

          {/* 13. FABRIC WEIGHT CATEGORIES — full width + bullets */}
          <section className="rex-fibre-section rex-fibre-full-section" id="fabric-weight">
            <h2 className="rex-fibre-section-title">Fabric Weight Categories</h2>
            <p className="rex-fibre-full-p">
              When considered together, measurements such as thread count and GSM help classify fabrics into
              general weight categories.
            </p>
            <ul className="rex-fibre-list">
              <li>Lightweight fabrics tend to feel airy and fluid, often draping softly around the body.</li>
              <li>Medium-weight fabrics offer balance between structure and movement, making them suitable for many types of garments.</li>
              <li>Heavyweight fabrics provide stronger structure and stability, often used when a garment requires shape or presence.</li>
            </ul>
          </section>

          {/* ════════════════ SCREENSHOT 5 ════════════════ */}

          {/* 14. FABRIC PROPERTIES
               Structure: 2-column layout
               LEFT col : hero image on top → text below (flush)
               RIGHT col: starts with padding-top ~half the hero height
                          so portrait begins at the hero's midpoint and
                          extends past it into the text area → thumbs below
          */}
          <section className="rex-fibre-section" id="fabric-properties">
            <div className="rex-fibre-props-mosaic">

              {/* LEFT column: hero + text stacked */}
              <div className="rex-fibre-props-left">
                <figure className="rex-fibre-props-hero-img">
                  <img src="/ds-8.png" alt="Model in warm-toned fabric setting" loading="lazy" />
                </figure>
                <div className="rex-fibre-props-text">
                  <h2 className="rex-fibre-section-title">Fabric Properties</h2>
                  <p>
                    Beyond fibres, construction, and measurements lies another essential aspect of
                    textiles&mdash;how the fabric actually behaves. Fabric properties describe the way a
                    material feels, moves, and performs when worn. These qualities influence not only comfort
                    but also how a garment drapes, holds its shape, and interacts with the body.
                  </p>
                  <h3 className="rex-fibre-sub-h">Drape Behavior</h3>
                  <p>
                    Drape refers to the way a fabric falls and flows under its own weight. Some textiles move
                    softly and fluidly, forming gentle folds that follow the body&rsquo;s movement. Others
                    hold their shape more firmly, creating sharper lines and a more structured appearance.
                    Fabrics with fluid drape create elegant pleats and flowing pallus, while stiffer textiles
                    produce more defined silhouettes.
                  </p>
                </div>
              </div>

              {/* RIGHT column: offset down by ~half hero height
                              portrait extends into text area, thumbs below */}
              <div className="rex-fibre-props-right">
                <figure className="rex-fibre-props-portrait">
                  <img src="https://res.cloudinary.com/djlqifbxp/image/upload/v1774509290/ds-2_n5rdtx.png" alt="Fashion model in draping fabric" loading="lazy" />
                </figure>
                <div className="rex-fibre-props-thumb-row">
                  <figure className="rex-fibre-props-thumb">
                    <img src="https://res.cloudinary.com/djlqifbxp/image/upload/v1774509539/ds-4_gia6xv.png" alt="Fabric detail" loading="lazy" />
                  </figure>
                  <figure className="rex-fibre-props-thumb">
                    <img src="/ds-7.png" alt="Fabric in motion" loading="lazy" />
                  </figure>
                </div>
              </div>

            </div>
          </section>

          {/* ════════════════ SCREENSHOT 6 ════════════════ */}

          {/* Continuation paragraph */}
          <p className="rex-fibre-full-p">
            Fabric properties describe how a textile behaves beyond its visual appearance. Qualities such as
            breathability, softness (hand feel), structure, and durability influence both comfort and
            performance. Breathable fabrics allow better airflow and feel cooler in warm climates, while softer
            fabrics enhance comfort against the skin. Some textiles naturally hold structure, creating sculpted
            silhouettes, whereas others remain flexible and fluid. Durability ensures that fabrics withstand
            repeated wear and care, helping garments maintain their form and appearance over time. Together,
            these properties guide designers in selecting fabrics that balance aesthetics, comfort, and
            longevity.
          </p>

          <hr className="rex-fibre-divider" />

          {/* 15. SILK TYPES — full intro */}
          <section className="rex-fibre-section rex-fibre-full-section" id="silk-types">
            <h2 className="rex-fibre-section-title">Silk Types</h2>
            <p className="rex-fibre-full-p">
              Silk holds a special place in textile history. Known for its natural sheen, smooth texture, and
              graceful drape, it has been associated with craftsmanship, ceremony, and cultural identity for
              centuries. In Indian clothing especially, silk plays a central role in sarees and the blouses
              that accompany them.
            </p>
            <p className="rex-fibre-full-p">
              Different regions and weaving traditions have produced distinct varieties of silk, each with its
              own texture, weight, and visual character. Understanding these variations helps designers choose
              the right silk for the intended garment and occasion.
            </p>
          </section>

          {/* Silk sub-types: text left, small image right */}
          <div className="rex-fibre-section">
            <div className="rex-fibre-silk-item">
              <div className="rex-fibre-split-text">
                <h3 className="rex-fibre-cotton-title">Mulberry Silk</h3>
                <p>
                  Mulberry silk is the most widely produced type of silk in the world. It is created from
                  silkworms that feed exclusively on mulberry leaves, resulting in fibres that are smooth,
                  uniform, and naturally lustrous. Fabrics made from mulberry silk tend to feel soft against the
                  skin and drape elegantly. Because of its refined appearance and durability, it is often used
                  in sarees and blouses intended for formal or ceremonial wear.
                </p>
              </div>
              <figure className="rex-fibre-figure rex-fibre-figure--sq">
                <img src="https://res.cloudinary.com/djlqifbxp/image/upload/v1774517844/edu-fibre_ffsidq.jpg" alt="Mulberry silk texture" loading="lazy" />
              </figure>
            </div>

            <div className="rex-fibre-silk-item">
              <div className="rex-fibre-split-text">
                <h3 className="rex-fibre-cotton-title">Tussar Silk</h3>
                <p>
                  Tussar silk, sometimes referred to as wild silk, is produced by silkworms that feed on forest
                  trees rather than cultivated mulberry plants. This gives the fibre a more textured and
                  slightly irregular character. Tussar fabrics often carry a natural golden tone and a slightly
                  matte surface. The texture adds depth to the fabric, making it popular in traditional sarees
                  and artisanal textiles.
                </p>
              </div>
              <figure className="rex-fibre-figure rex-fibre-figure--sq">
                <img src="https://res.cloudinary.com/djlqifbxp/image/upload/v1774517844/edu-fibre_ffsidq.jpg" alt="Tussar silk texture" loading="lazy" />
              </figure>
            </div>

            <div className="rex-fibre-silk-item">
              <div className="rex-fibre-split-text">
                <h3 className="rex-fibre-cotton-title">Eri Silk</h3>
                <p>
                  Eri silk is valued for its softness and warmth. Unlike many other silk varieties, the fibres
                  have a slightly wool-like feel, creating fabrics that appear more matte than glossy. One of
                  the unique characteristics of Eri silk is its comfort against the skin. The fabric tends to
                  be breathable and gentle, making it suitable for garments that prioritize comfort while still
                  carrying the elegance associated with silk.
                </p>
              </div>
              <figure className="rex-fibre-figure rex-fibre-figure--sq">
                <img src="https://res.cloudinary.com/djlqifbxp/image/upload/v1774517844/edu-fibre_ffsidq.jpg" alt="Eri silk texture" loading="lazy" />
              </figure>
            </div>

            <div className="rex-fibre-silk-item">
              <div className="rex-fibre-split-text">
                <h3 className="rex-fibre-cotton-title">Muga Silk</h3>
                <p>
                  Muga silk is a rare variety traditionally produced in the northeastern regions of India. It
                  is known for its distinctive natural golden color and remarkable strength. Unlike many fabrics
                  that fade with age, Muga silk often becomes richer in tone over time. Its durability and
                  unique appearance have made it highly valued in traditional weaving practices.
                </p>
              </div>
              <figure className="rex-fibre-figure rex-fibre-figure--sq">
                <img src="https://res.cloudinary.com/djlqifbxp/image/upload/v1774517844/edu-fibre_ffsidq.jpg" alt="Muga silk texture" loading="lazy" />
              </figure>
            </div>
          </div>

          {/* ════════════════ SCREENSHOT 7 ════════════════ */}

          <hr className="rex-fibre-divider" />

          {/* 16. SILK BLENDS — text left, small image right */}
          <section className="rex-fibre-section" id="silk-blends">
            <div className="rex-fibre-split rex-fibre-split--text-left">
              <div className="rex-fibre-split-text">
                <h2 className="rex-fibre-section-title">Silk Blends</h2>
                <p>
                  Silk is also commonly blended with other fibres such as cotton, polyester, or viscose. These
                  blends can modify the fabric&rsquo;s properties, influencing factors like weight, durability,
                  and cost.
                </p>
                <p>
                  Blended fabrics may retain some of silk&rsquo;s natural sheen while offering greater
                  resilience or easier maintenance. In blouse design, such blends are often used when a balance
                  between elegance and practicality is desired.
                </p>
              </div>
              <figure className="rex-fibre-figure rex-fibre-figure--sq">
                <img src="https://res.cloudinary.com/djlqifbxp/image/upload/v1774517844/edu-fibre_ffsidq.jpg" alt="Silk blend fabric" loading="lazy" />
              </figure>
            </div>
          </section>

          <hr className="rex-fibre-divider" />

          {/* 17. COTTON TYPES — full intro */}
          <section className="rex-fibre-section rex-fibre-full-section" id="cotton-types">
            <h2 className="rex-fibre-section-title">Cotton Types</h2>
            <p className="rex-fibre-full-p">
              Cotton has long been one of the most widely used fibres in clothing. Known for its softness,
              breathability, and comfort, it has been deeply woven into everyday garments across many cultures.
              In Indian textiles, cotton plays an especially important role in sarees and blouses designed for
              daily wear, warm climates, and long hours of comfort.
            </p>
            <p className="rex-fibre-full-p">
              Different varieties of cotton exist depending on the region where the fibre is grown, the length
              of the cotton staple, and the traditional weaving techniques used to create the fabric. These
              variations influence how the fabric feels, how it drapes, and how it performs when worn.
            </p>
          </section>

          {/* Cotton sub-types: small image left, text right */}
          <div className="rex-fibre-section">
            <div className="rex-fibre-cotton-item">
              <figure className="rex-fibre-figure rex-fibre-figure--sq">
                <img src="https://res.cloudinary.com/djlqifbxp/image/upload/v1774517844/edu-fibre_ffsidq.jpg" alt="Short staple cotton" loading="lazy" />
              </figure>
              <div className="rex-fibre-split-text">
                <h3 className="rex-fibre-cotton-title">Short Staple Cotton</h3>
                <p>
                  Short-staple cotton consists of shorter fibres, which are more common in many traditional
                  cotton-growing regions. Fabrics made from this type of cotton often feel slightly coarser but
                  remain breathable and practical.
                </p>
                <p>
                  Because of its accessibility and durability, short-staple cotton is frequently used in
                  everyday textiles, casual sarees, and garments meant for frequent use.
                </p>
              </div>
            </div>

            <div className="rex-fibre-cotton-item">
              <figure className="rex-fibre-figure rex-fibre-figure--sq">
                <img src="https://res.cloudinary.com/djlqifbxp/image/upload/v1774517844/edu-fibre_ffsidq.jpg" alt="Long staple cotton" loading="lazy" />
              </figure>
              <div className="rex-fibre-split-text">
                <h3 className="rex-fibre-cotton-title">Long Staple Cotton</h3>
                <p>
                  Long-staple cotton contains fibres that are longer and finer. When woven into fabric, these
                  fibres create textiles that feel smoother and stronger.
                </p>
                <p>
                  The longer fibres allow the yarn to be spun more tightly, producing fabrics with a softer
                  surface and improved durability. These qualities make long-staple cotton desirable for
                  higher-quality garments and finer cotton sarees.
                </p>
              </div>
            </div>

            <div className="rex-fibre-cotton-item">
              <figure className="rex-fibre-figure rex-fibre-figure--sq">
                <img src="https://res.cloudinary.com/djlqifbxp/image/upload/v1774517844/edu-fibre_ffsidq.jpg" alt="Egyptian cotton" loading="lazy" />
              </figure>
              <div className="rex-fibre-split-text">
                <h3 className="rex-fibre-cotton-title">Egyptian Cotton</h3>
                <p>
                  Egyptian cotton is often associated with long, silky fibres that produce very smooth and soft
                  fabrics. Because of its fibre length, it can be woven into textiles that feel both refined
                  and durable.
                </p>
                <p>
                  Although more commonly discussed in bedding and premium fabrics, the qualities of Egyptian
                  cotton illustrate how fibre length influences softness and strength in cotton textiles.
                </p>
              </div>
            </div>

            <div className="rex-fibre-cotton-item">
              <figure className="rex-fibre-figure rex-fibre-figure--sq">
                <img src="https://res.cloudinary.com/djlqifbxp/image/upload/v1774517844/edu-fibre_ffsidq.jpg" alt="Organic cotton" loading="lazy" />
              </figure>
              <div className="rex-fibre-split-text">
                <h3 className="rex-fibre-cotton-title">Organic Cotton</h3>
                <p>
                  Organic cotton is cultivated without the use of synthetic chemicals or pesticides. The fibre
                  itself remains similar to conventional cotton, but the cultivation process focuses on
                  environmental sustainability.
                </p>
                <p>
                  For garments worn close to the skin, organic cotton is often appreciated for its natural feel
                  and gentle comfort.
                </p>
              </div>
            </div>
          </div>

          {/* ════════════════ SCREENSHOT 8 ════════════════ */}

          <hr className="rex-fibre-divider" />

          {/* 18. FABRIC FINISHING — intro */}
          <section className="rex-fibre-section rex-fibre-full-section" id="fabric-finishing">
            <h2 className="rex-fibre-section-title">Fabric Finishing</h2>
            <p className="rex-fibre-full-p">
              Once a fabric has been woven or knitted, it often undergoes additional processes known as
              finishing. Fabric finishing refers to the treatments applied after construction to enhance the
              fabric&rsquo;s appearance, texture, performance, or durability.
            </p>
            <p className="rex-fibre-full-p">
              These finishing techniques can subtly transform how a fabric feels, how it drapes, and how it
              behaves when worn. In saree and blouse textiles, finishing plays an important role in refining
              the final look of the material before it becomes a garment.
            </p>
          </section>

          <figure className="rex-fabric-hero" style={{ margin: '0 0 1.75rem' }}>
            <img src="/ds-8.png" alt="Detail of finished fabric" loading="lazy" />
          </figure>

          <section className="rex-fibre-section rex-fibre-full-section">
            <h3 className="rex-fibre-sub-h" style={{ fontSize: '1.1rem' }}>Softening Finishes</h3>
            <p className="rex-fibre-full-p">
              Softening treatments are used to make fabrics feel smoother and more comfortable against the
              skin. Certain natural fibres may initially feel crisp or slightly firm after weaving, and
              softening finishes help relax the fibres to create a gentler texture. This type of finishing is
              particularly valuable for blouse fabrics, where comfort against the body is an important
              consideration.
            </p>
            <h3 className="rex-fibre-sub-h" style={{ fontSize: '1.1rem' }}>Lustre and Polishing Finishes</h3>
            <p className="rex-fibre-full-p">
              Some finishing processes are designed to enhance the natural shine of a fabric. Techniques such
              as polishing or surface smoothing allow fibres to reflect light more evenly, producing a subtle
              sheen. These finishes are often applied to fabrics intended for ceremonial or festive garments,
              where visual richness and elegance are desired.
            </p>
            <h3 className="rex-fibre-sub-h" style={{ fontSize: '1.1rem' }}>Structural Finishes</h3>
            <p className="rex-fibre-full-p">
              Structural finishes are applied when a fabric needs additional stability or shape. Certain
              treatments help fabrics maintain crisp folds, sharper silhouettes, or a slightly firmer body. In
              blouse fabrics, these finishes can help maintain structure in garments that rely on defined seams,
              sculpted sleeves, or architectural silhouettes.
            </p>
            <h3 className="rex-fibre-sub-h" style={{ fontSize: '1.1rem' }}>Protective Finishes</h3>
            <p className="rex-fibre-full-p">
              Some finishing processes are designed to improve the durability and practicality of a fabric.
              These treatments may help fabrics resist wrinkles, improve color retention, or enhance resistance
              to everyday wear. Such finishes help garments maintain their appearance over time, especially
              when they are worn frequently.
            </p>
            <h3 className="rex-fibre-sub-h" style={{ fontSize: '1.1rem' }}>Traditional Finishing Techniques</h3>
            <p className="rex-fibre-full-p">
              In many handwoven textiles, finishing is also influenced by traditional craft practices. Washing,
              sun drying, starching, and pressing are often used to prepare the fabric before it reaches the
              wearer. These techniques contribute to the characteristic texture and appearance of many
              traditional saree fabrics.
            </p>
          </section>

          {/* ════════════════ SCREENSHOT 9 ════════════════ */}

          <hr className="rex-fibre-divider" />

          {/* 19. FABRIC BEHAVIOR ON THE BODY — full + hero + sub-sections */}
          <section className="rex-fibre-section rex-fibre-full-section" id="fabric-behaviour">
            <h2 className="rex-fibre-section-title">Fabric Behavior on the Body</h2>
            <p className="rex-fibre-full-p">
              A fabric does not exist in isolation. Once it becomes a garment, it begins to interact with the
              human body, responding to movement, shape, posture, and gravity. This interaction is known as
              fabric behavior on the body, and it plays a significant role in how clothing ultimately looks and
              feels when worn.
            </p>
            <p className="rex-fibre-full-p">
              Even fabrics that appear similar when laid flat can behave very differently once they are draped,
              stitched, or fitted around the body.
            </p>
          </section>

          <figure className="rex-fabric-hero" style={{ margin: '0 0 1.75rem' }}>
            <img src="/ds-8.png" alt="Fabric in motion on the body" loading="lazy" />
          </figure>

          <section className="rex-fibre-section rex-fibre-full-section">
            <h3 className="rex-fibre-sub-h" style={{ fontSize: '1.1rem' }}>Flow and Movement</h3>
            <p className="rex-fibre-full-p">
              Some fabrics move easily with the body, creating fluid lines that follow natural motion. These
              materials tend to produce soft folds and gentle drapes that shift gracefully as the wearer walks
              or turns. Such fabrics are often favored in garments where movement and elegance are important,
              as they create a sense of lightness and continuity. Other fabrics move less freely and instead
              maintain a more controlled shape, creating garments that appear structured and defined.
            </p>
            <h3 className="rex-fibre-sub-h" style={{ fontSize: '1.1rem' }}>Contouring the Body</h3>
            <p className="rex-fibre-full-p">
              Certain fabrics naturally adapt to the curves and contours of the body. Their flexibility allows
              them to settle smoothly across areas such as the shoulders, bust, or waist, creating a close and
              comfortable fit. Fabrics with this quality often contribute to silhouettes that appear natural
              and harmonious with the wearer&rsquo;s shape. In contrast, fabrics with more rigidity may stand
              slightly away from the body, producing silhouettes that feel more architectural or sculpted.
            </p>
            <h3 className="rex-fibre-sub-h" style={{ fontSize: '1.1rem' }}>Interaction with Body Heat</h3>
            <p className="rex-fibre-full-p">
              Fabrics also respond to the warmth of the body. Some materials soften slightly as they absorb
              heat, allowing them to mold more comfortably to the wearer over time. Others retain their
              firmness regardless of temperature, maintaining a crisp and structured appearance throughout
              wear.
            </p>
            <h3 className="rex-fibre-sub-h" style={{ fontSize: '1.1rem' }}>Comfort and Wearability</h3>
            <p className="rex-fibre-full-p">
              Ultimately, fabric behavior determines how comfortable a garment feels during extended wear. The
              balance between softness, breathability, movement, and structure contributes to whether a garment
              feels natural on the body. A textile that behaves well on the body allows the wearer to move
              freely while maintaining the intended silhouette of the garment.
            </p>
          </section>

          {/* ════════════════ SCREENSHOTS 10 & 11 ════════════════ */}

          <hr className="rex-fibre-divider" />

          {/* 20. PRODUCTION METHODS intro — full width */}
          <section className="rex-fibre-section rex-fibre-full-section" id="production-methods">
            <p className="rex-fibre-full-p">
              Beyond fibres, construction, and finishing techniques, another important aspect of textiles lies
              in how the fabric is produced. The method used to weave a fabric can influence its texture,
              character, and visual identity. Two of the most widely recognized production methods are
              handloom weaving and powerloom weaving.
            </p>
            <p className="rex-fibre-full-p">
              Both techniques create woven fabrics, but they differ in the tools used, the speed of production,
              and the subtle qualities that appear in the final textile.
            </p>
          </section>

          {/* 21. HANDLOOM */}
          <section className="rex-fibre-section rex-fibre-full-section" id="handloom">
            <h2 className="rex-fibre-section-title">Handloom</h2>
            <p className="rex-fibre-full-p">
              Handloom weaving emphasizes craftsmanship and tradition, often involving skilled artisans who
              specialize in particular regional styles. The slower pace of production allows for intricate
              designs and cultural storytelling within the fabric.
            </p>
          </section>

          <figure className="rex-fabric-hero" style={{ margin: '0 0 1.75rem' }}>
            <img src="/ds-8.png" alt="Handloom weaving" loading="lazy" />
          </figure>

          <section className="rex-fibre-section rex-fibre-full-section">
            <p className="rex-fibre-full-p">
              Handloom fabrics are created on looms that are operated manually by a weaver. The weaving process
              is guided entirely by human skill, rhythm, and control. Each movement of the loom interlaces the
              threads gradually, allowing the fabric to develop through a slower and more deliberate process.
            </p>
            <p className="rex-fibre-full-p">
              Because of this manual craftsmanship, handloom fabrics often display small variations in texture
              and weave density. These natural irregularities are not flaws; rather, they reflect the
              individuality of the weaving process. Handloom textiles are deeply connected to regional craft
              traditions and often carry distinctive cultural patterns, borders, and motifs. Many traditional
              sarees are produced using handloom techniques, preserving weaving knowledge that has been passed
              down across generations.
            </p>
          </section>

          {/* ════════════════ SCREENSHOT 11 ════════════════ */}

          {/* 22. POWERLOOM */}
          <section className="rex-fibre-section rex-fibre-full-section" id="powerloom">
            <h2 className="rex-fibre-section-title">Powerloom</h2>
            <p className="rex-fibre-full-p">
              Powerloom weaving focuses on efficiency and scalability, enabling large volumes of fabric to be
              produced quickly to meet modern demand.
            </p>
          </section>

          <figure className="rex-fabric-hero" style={{ margin: '0 0 1.75rem' }}>
            <img src="/ds-8.png" alt="Powerloom weaving" loading="lazy" />
          </figure>

          <section className="rex-fibre-section rex-fibre-full-section">
            <p className="rex-fibre-full-p">
              Powerloom fabrics are produced using mechanized looms that operate with electrical power. These
              machines automate the weaving process, allowing fabrics to be produced at a much faster speed and
              in larger quantities.
            </p>
            <p className="rex-fibre-full-p">
              Because the weaving movements are controlled mechanically, powerloom fabrics tend to display
              greater uniformity. The threads are interlaced in highly consistent patterns, resulting in fabrics
              that appear smooth and regular across the entire length of the textile. Powerloom production makes
              fabrics more widely accessible and allows manufacturers to replicate patterns efficiently for
              large scale distribution.
            </p>
            <p className="rex-fibre-full-p">
              Both handloom and powerloom textiles play important roles in the world of fabrics. Handloom
              represents the continuity of traditional craft, while powerloom reflects the capabilities of
              modern textile production. Understanding the distinction between the two helps designers and
              garment makers appreciate the origins and character of the fabrics they work with.
            </p>
          </section>

          {/* ════════════════ SCREENSHOTS 11 & 12 ════════════════ */}

          <hr className="rex-fibre-divider" />

          {/* 23. FABRIC TEXTURE — full + 4-col grid + sub-types */}
          <section className="rex-fibre-section rex-fibre-full-section" id="fabric-texture">
            <h2 className="rex-fibre-section-title">Fabric Texture</h2>
            <p className="rex-fibre-full-p">
              Texture refers to the surface quality of a fabric&mdash;how it looks and how it feels when
              touched. It is one of the most immediate characteristics people notice in a textile. Texture can
              appear smooth, crisp, soft, rough, raised, or richly patterned depending on the fibres used, the
              weave structure, and the finishing processes applied to the fabric.
            </p>
          </section>

          <div className="rex-fibre-grid-4" aria-label="Fabric texture examples">
            <div className="rex-fibre-grid-img"><img src="https://res.cloudinary.com/djlqifbxp/image/upload/v1774517844/edu-fibre_ffsidq.jpg" alt="Smooth texture" loading="lazy" /></div>
            <div className="rex-fibre-grid-img"><img src="https://res.cloudinary.com/djlqifbxp/image/upload/v1774517844/edu-fibre_ffsidq.jpg" alt="Crisp texture" loading="lazy" /></div>
            <div className="rex-fibre-grid-img"><img src="https://res.cloudinary.com/djlqifbxp/image/upload/v1774517844/edu-fibre_ffsidq.jpg" alt="Soft texture" loading="lazy" /></div>
            <div className="rex-fibre-grid-img"><img src="https://res.cloudinary.com/djlqifbxp/image/upload/v1774517844/edu-fibre_ffsidq.jpg" alt="Raised texture" loading="lazy" /></div>
          </div>

          <section className="rex-fibre-section rex-fibre-full-section">
            <h3 className="rex-fibre-sub-h">Smooth Textures</h3>
            <p className="rex-fibre-full-p">
              Smooth textures are characterized by an even, refined surface where the threads lie closely
              together. Fabrics with smooth textures often reflect light gently, giving them a clean and
              polished appearance. These textiles tend to feel soft and fluid against the skin, making them
              suitable for garments that emphasize elegance and simplicity. Smooth textures are often chosen
              when the goal is to create garments that appear sleek and refined.
            </p>
            <h3 className="rex-fibre-sub-h">Crisp Textures</h3>
            <p className="rex-fibre-full-p">
              Crisp fabrics have a slightly firm surface and maintain their shape more clearly. The texture
              feels structured rather than soft, allowing the fabric to hold folds and pleats effectively.
              Garments made from crisp textiles often appear more defined and architectural. This type of
              texture can support structured silhouettes and create garments that feel stable and composed.
            </p>
            <h3 className="rex-fibre-sub-h">Soft and Plush Textures</h3>
            <p className="rex-fibre-full-p">
              Some fabrics have a surface that feels particularly soft, cushioned, or plush. These textures are
              often created by fibres that trap small amounts of air or by finishing processes that lift the
              surface of the fabric slightly. Soft textures contribute to a sense of comfort and warmth, making
              them pleasant to wear for extended periods.
            </p>
            <h3 className="rex-fibre-sub-h">Textured and Raised Surfaces</h3>
            <p className="rex-fibre-full-p">
              Certain fabrics display visible texture created by the weaving pattern, yarn thickness, or
              decorative techniques. These surfaces may include raised motifs, ridges, or patterned structures
              that add depth to the fabric. Textured fabrics create visual interest and can enhance the
              richness of a garment. When light falls across the surface, the raised areas produce subtle
              shadows that highlight the design of the textile.
            </p>
          </section>

          {/* Previous / Next nav — outline-style buttons left and right */}
          <nav className="rex-fibre-footer-cta rex-fibre-footer-nav" aria-label="Education module navigation">
            <a href="/#journey" className="rex-btn rex-btn-edu-nav">
              ← Previous: Education Hub
            </a>
            <a href="/education/fabric-construction" className="rex-btn rex-btn-edu-nav">
              Next: Fabric Construction →
            </a>
          </nav>

        </div>
      </main>
      <Footer />
    </>
  );
}
