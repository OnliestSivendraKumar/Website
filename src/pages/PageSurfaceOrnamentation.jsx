import { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const PAGE_TITLE = 'Surface Ornamentation — Education Hub | Onliest';
const PAGE_DESCRIPTION =
  'Explore surface ornamentation: embroidery, threads and zari, beads and stones, sequins, appliqué, lace and trims, printing techniques, and design placement for sarees and blouses.';

/* Shared placeholder for repeated section images (hoodie / landscape) */
const IMG_DIVIDER = '/ds-2.png';
const IMG_LANDSCAPE = '/ds-4.png';

export default function PageSurfaceOrnamentation() {
  useEffect(() => {
    document.title = PAGE_TITLE;
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute('content', PAGE_DESCRIPTION);
    return () => { document.title = 'Onliest'; };
  }, []);

  return (
    <>
      <Header hideOnPanels={false} />
      <main className="rex-page-inner rex-fibre-page rex-surface-ornament-page" id="main-content" role="main">
        <div className="rex-fibre-shell">

          <header className="rex-fibre-header rex-surface-hero-header">
            <p className="rex-page-eyebrow">Education Hub · Saree Intelligence</p>
          </header>

          {/* Hero: main title + two-col (content | image) + two images below */}
          <section className="rex-surface-hero-block" id="surface-ornamentation">
            <div className="rex-surface-hero-title-wrap">
              <h1 className="rex-surface-hero-title rex-inner-page-title">
                <span className="rex-surface-hero-line">Surface</span>
                <span className="rex-surface-hero-line">Ornamentation</span>
              </h1>
            </div>
            <div className="rex-surface-hero-content">
              <div className="rex-fibre-split rex-fibre-split--text-left rex-surface-hero-split">
                <div className="rex-fibre-split-text">
                  <p className="rex-surface-hero-p rex-fibre-full-p">
                    Surface ornamentation refers to the decorative techniques applied to the surface of a fabric or garment to enhance its visual character. These techniques add texture, pattern, colour, and dimension through craftsmanship, cultural identity, and embellishments.
                  </p>
                  <h2 className="rex-fibre-section-title">The Role of Decoration in Garments</h2>
                  <p className="rex-surface-hero-p rex-fibre-full-p">
                    Decoration in clothing serves several purposes. It can highlight important areas of a garment, create visual balance, and frame different parts such as necklines, sleeves, borders, and the back panel.
                  </p>
                </div>
                <figure className="rex-surface-hero-figure">
                  <img src="/ds-1.png" alt="Surface ornamentation in fashion" loading="lazy" />
                </figure>
              </div>
              <div className="rex-surface-two-images">
                <figure className="rex-surface-fig"><img src={IMG_LANDSCAPE} alt="" loading="lazy" /></figure>
                <figure className="rex-surface-fig"><img src={IMG_LANDSCAPE} alt="" loading="lazy" /></figure>
              </div>
            </div>
          </section>

          <hr className="rex-fibre-divider" />

          {/* Screenshot 2: EMBROIDERY TECHNIQUES — image left, intro right; then Hand/Machine + image; then stitch list */}
          <section className="rex-fibre-section rex-fibre-full-section" id="embroidery-techniques">
            <h2 className="rex-fibre-section-title">Embroidery Techniques</h2>
            <div className="rex-fibre-split rex-fibre-split--image-left">
              <figure className="rex-fibre-figure rex-fibre-figure--tall">
                <img src="/ds-3.png" alt="Embroidery detail" loading="lazy" />
              </figure>
              <div className="rex-fibre-split-text">
                <p className="rex-fibre-full-p">
                  Embroidery is an ancient textile decoration involving stitching patterns with thread, yarn, or metallic fibres to add texture, dimension, and detail to garments.
                </p>
                <p className="rex-fibre-full-p">
                  Embroidery is a diverse art form across cultures, reflecting materials, craftsmanship, and traditions. It is a key decorative element in garments like sarees and blouses, transforming simple fabrics.
                </p>
              </div>
            </div>
            <div className="rex-fibre-split rex-fibre-split--text-left">
              <div className="rex-fibre-split-text">
                <h3 className="rex-fibre-sub-h">Hand embroidery</h3>
                <p className="rex-fibre-full-p">
                  Hand embroidery is a manual process requiring skill and patience, producing detailed motifs and patterns. Subtle variations reflect the craftsperson&rsquo;s individuality, giving authenticity and depth. It is widely used in traditional garments, ceremonial wear, and handcrafted textiles.
                </p>
                <h3 className="rex-fibre-sub-h">Machine Embroidery</h3>
                <p className="rex-fibre-full-p">
                  Machine embroidery uses specialized sewing machines for precise and consistent decorative patterns. It offers efficiency for faster and larger-quantity production, with uniformity compared to handwork.
                </p>
              </div>
              <figure className="rex-fibre-figure rex-fibre-figure--tall">
                <img src="/ds-5.png" alt="Embroidery in garment" loading="lazy" />
              </figure>
            </div>
            <p className="rex-fibre-full-p">
              Embroidery patterns are created using various stitch types, each producing a distinct visual effect.
            </p>
            <ul className="rex-fibre-list">
              <li><strong>Chain stitch</strong> — forms linked loops resembling a chain</li>
              <li><strong>Satin stitch</strong> — creates smooth, filled areas of thread</li>
              <li><strong>Running stitch</strong> — a simple, evenly spaced stitch often used in outlining</li>
              <li><strong>Stem stitch</strong> — used to create flowing lines and curves</li>
            </ul>
            <p className="rex-fibre-full-p">
              Combining multiple stitches allows artisans to create intricate designs with diverse textures and levels of detail.
            </p>
          </section>

          <hr className="rex-fibre-divider" />

          {/* Screenshot 3: THREADS and ZARI — title left + image right; two col paragraphs; image grid + 3 col */}
          <section className="rex-fibre-section rex-surface-threads" id="threads-zari">
            <div className="rex-surface-threads-hero">
              <h2 className="rex-surface-threads-title">Threads<br />and<br />Zari</h2>
              <figure className="rex-surface-threads-fig">
                <img src="/ds-6fh.png" alt="Threads and zari in textiles" loading="lazy" />
              </figure>
            </div>
            <div className="rex-surface-two-col-p">
              <p className="rex-fibre-full-p">
                Many surface ornamentation techniques rely on specialized threads that are used to create decorative patterns on fabric. These threads may vary in material, thickness, sheen, and strength depending on the type of embroidery or embellishment being applied. Two commonly used decorative thread categories in textile ornamentation are embroidery threads and zari threads. Each contributes a different visual effect to the surface of the garment.
              </p>
              <p className="rex-fibre-full-p">
                Embroidery threads are used to create stitched decorative patterns on fabric. They may be made from a variety of fibres, including cotton, silk, wool, or synthetic materials. Different threads are selected based on the desired appearance and the fabric being decorated. Some threads produce smooth and delicate lines, while others create slightly thicker or more textured stitches.
              </p>
            </div>
            <div className="rex-surface-threads-grid">
              <figure className="rex-surface-threads-grid-a"><img src="/ds-7.png" alt="" loading="lazy" /></figure>
              <figure className="rex-surface-threads-grid-a"><img src="/ds-8.png" alt="" loading="lazy" /></figure>
              <figure className="rex-surface-threads-grid-b"><img src={IMG_DIVIDER} alt="" loading="lazy" /></figure>
            </div>
            <div className="rex-surface-three-col">
              <div className="rex-body-compat-subsection">
                <h3 className="rex-fibre-sub-h">Silk Threads</h3>
                <p className="rex-fibre-full-p">
                  Silk embroidery threads are valued for their natural sheen and smooth texture. When stitched onto fabric, they reflect light softly, producing patterns that appear refined and luminous. Because of their softness and strength, silk threads are often used in detailed embroidery work where fine stitches and elegant finishes are desired.
                </p>
              </div>
              <div className="rex-body-compat-subsection">
                <h3 className="rex-fibre-sub-h">Cotton Threads</h3>
                <p className="rex-fibre-full-p">
                  Cotton embroidery threads are widely used because of their durability and versatility. They produce a matte finish, creating designs that appear slightly softer and more understated compared to silk threads. Cotton threads work well across many types of fabrics and are commonly used in both traditional and contemporary embroidery.
                </p>
              </div>
              <div className="rex-body-compat-subsection">
                <h3 className="rex-fibre-sub-h">Zari Threads</h3>
                <p className="rex-fibre-full-p">
                  Zari refers to decorative metallic threads traditionally used in Indian textiles. These threads are designed to produce a rich metallic shine that adds visual richness to fabrics. Historically, zari threads were made using fine strands of gold or silver wrapped around a silk core.
                </p>
              </div>
            </div>
          </section>

          <hr className="rex-fibre-divider" />

          {/* Zari, Beads and Stones, Bead Embellishment, Stone and Embellishments */}
          <section className="rex-fibre-section rex-fibre-full-section" id="zari-beads-stones">
            <p className="rex-fibre-full-p">
              Zari is commonly used in sarees, ceremonial garments, and festive clothing, where the reflective quality of the thread enhances the visual impact of the textile.
            </p>
            <h2 className="rex-fibre-section-title">Zari in Textile Decoration</h2>
            <p className="rex-fibre-full-p">
              Zari can appear in several forms within textiles. It may be woven directly into the fabric during the weaving process or applied later through embroidery. In surface ornamentation, zari embroidery creates decorative motifs, borders, and patterns that catch the light and add depth to the garment. The metallic quality of the thread often highlights specific areas such as necklines, sleeve edges, and decorative motifs.
            </p>
            <p className="rex-fibre-full-p">
              Threads form the foundation of many decorative techniques, while zari introduces a distinctive metallic brilliance to the textile surface. Together, they expand the possibilities of surface ornamentation, allowing fabrics to carry intricate patterns, textures, and visual richness.
            </p>
            <h2 className="rex-fibre-section-title">Beads and Stones</h2>
            <p className="rex-fibre-full-p">
              Beads and stones are decorative elements applied to the surface of fabric to introduce sparkle, dimension, and visual richness. Unlike embroidery, which is created entirely with thread, bead and stone embellishments add small reflective or sculptural components that sit on top of the textile surface. These embellishments are often used in garments designed for festive or ceremonial occasions, where light, movement, and intricate detail enhance the visual impact of the clothing.
            </p>
            <h2 className="rex-fibre-section-title">Bead Embellishment</h2>
            <p className="rex-fibre-full-p">
              Beads are small decorative objects made from materials such as glass, metal, plastic, or natural substances. When stitched onto fabric, they create raised surfaces that catch light and add texture to the garment.
            </p>
            <p className="rex-fibre-full-p">
              Beads may be arranged to form patterns, outlines, or clusters that complement embroidered motifs. In many designs, beads are combined with thread embroidery to enhance the visual complexity of the decoration. Because beads are applied individually or in small groups, the technique often requires careful placement and precise stitching.
            </p>
            <figure className="rex-surface-divider-fig">
              <img src={IMG_DIVIDER} alt="" loading="lazy" />
            </figure>
            <h2 className="rex-fibre-section-title">Stone and Embellishments</h2>
            <p className="rex-fibre-full-p">
              Decorative stones are used to introduce brilliance and reflective highlights to fabric surfaces. These stones may be clear or colored and are typically cut in shapes that allow them to reflect light effectively. Stones may be attached through stitching, setting, or adhesive techniques depending on the design and the type of fabric being used. When arranged thoughtfully, they can form motifs, borders, or accent details that elevate the visual richness of the garment.
            </p>
            <figure className="rex-surface-divider-fig">
              <img src={IMG_DIVIDER} alt="" loading="lazy" />
            </figure>
          </section>

          {/* Sequins, Decorative Balance, Appliqué, Cutwork */}
          <section className="rex-fibre-section rex-fibre-full-section" id="sequins-applique">
            <h2 className="rex-fibre-section-title">Sequins and Reflective Elements</h2>
            <p className="rex-fibre-full-p">
              Sequins are thin, reflective discs that add shimmer, movement, sparkle, and visual depth to designs, often used with beads or stones.
            </p>
            <figure className="rex-surface-divider-fig">
              <img src={IMG_DIVIDER} alt="" loading="lazy" />
            </figure>
            <h2 className="rex-fibre-section-title">Decorative Balance</h2>
            <p className="rex-fibre-full-p">
              Balance is important when using beads, stones, or sequins; they add weight and visual emphasis. Designers distribute them carefully across garments—neckline, sleeves, motif clusters—to maintain harmony.
            </p>
            <figure className="rex-surface-divider-fig">
              <img src={IMG_DIVIDER} alt="" loading="lazy" />
            </figure>
            <h2 className="rex-fibre-section-title">Appliqué</h2>
            <p className="rex-fibre-full-p">
              Appliqué is a decorative technique where fabric pieces are stitched onto a base to create patterns, motifs, or layered designs. It adds visual interest and dimensional depth to textiles.
            </p>
            <h2 className="rex-fibre-section-title">Cutwork and Reverse Appliqué</h2>
            <p className="rex-fibre-full-p">
              Certain appliqué techniques involve cutting portions of the base fabric to reveal underlying layers, creating decorative openings or layered patterns. Cutwork and reverse appliqué introduce intricate detailing while making the underlying fabric part of the design.
            </p>
            <figure className="rex-surface-divider-fig">
              <img src={IMG_DIVIDER} alt="" loading="lazy" />
            </figure>
          </section>

          {/* Patchwork, Appliqué in Garment Design, Lace and Trims, Lace */}
          <section className="rex-fibre-section rex-fibre-full-section" id="patchwork-lace">
            <h2 className="rex-fibre-section-title">Patchwork and Motif Appliqué</h2>
            <p className="rex-fibre-full-p">
              Appliqué can take the form of patchwork arrangements or individual motif placements. Motif appliqué uses distinct shapes—geometric, floral, or symbolic—based on cultural and artistic influences.
            </p>
            <figure className="rex-surface-divider-fig">
              <img src={IMG_DIVIDER} alt="" loading="lazy" />
            </figure>
            <h2 className="rex-fibre-section-title">Appliqué in Garment Design</h2>
            <p className="rex-fibre-full-p">
              In garment design, appliqué is used to highlight particular sections such as necklines, sleeves, borders, or back panels. The technique involves additional layers of fabric, requiring careful placement to maintain balance and complement the garment&rsquo;s structure.
            </p>
            <figure className="rex-surface-divider-fig">
              <img src={IMG_DIVIDER} alt="" loading="lazy" />
            </figure>
            <h2 className="rex-fibre-section-title">Lace and Trims</h2>
            <p className="rex-fibre-full-p">
              Lace and trims are decorative elements applied along edges or specific sections to enhance visual detail. Unlike embroidery or appliqué, they are often added as separate materials stitched during construction or finishing, helping define boundaries and adding refinement, texture, and visual interest.
            </p>
            <h2 className="rex-fibre-section-title">Lace</h2>
            <p className="rex-fibre-full-p">
              Lace is a delicate decorative fabric with open patterns formed by loops, twists, and interconnections. It has an intricate structure, light and airy appearance, and decorative richness. Lace can be used as a complete panel or applied along edges such as necklines, sleeves, or hems to introduce softness and elegance.
            </p>
          </section>

          {/* Decorative Trims, Borders and Edging, Functional and Decorative */}
          <section className="rex-fibre-section rex-fibre-full-section" id="trims">
            <figure className="rex-surface-divider-fig">
              <img src={IMG_DIVIDER} alt="" loading="lazy" />
            </figure>
            <h2 className="rex-fibre-section-title">Decorative Trims</h2>
            <p className="rex-fibre-full-p">
              Trims refer to narrow decorative materials that are attached to garments to highlight edges or design lines. These trims may be made from fabric, thread, beads, or braided materials. Common trim styles include borders, ribbons, cords, and embroidered bands. When applied thoughtfully, trims can emphasize the structure of a garment by outlining important areas such as sleeve edges, necklines, or waist hems.
            </p>
            <figure className="rex-surface-divider-fig">
              <img src={IMG_DIVIDER} alt="" loading="lazy" />
            </figure>
            <h2 className="rex-fibre-section-title">Borders and Edging</h2>
            <p className="rex-fibre-full-p">
              Borders and edging trims are frequently used to frame garments and create visual continuity with other elements of the design. In saree and blouse styling, trims may echo the border of the saree, allowing the blouse decoration to harmonize with the larger garment. This careful coordination helps maintain balance between the blouse and the saree, ensuring that both pieces complement one another visually.
            </p>
            <figure className="rex-surface-divider-fig">
              <img src={IMG_DIVIDER} alt="" loading="lazy" />
            </figure>
            <h2 className="rex-fibre-section-title">Functional and Decorative Roles</h2>
            <p className="rex-fibre-full-p">
              While lace and trims are primarily decorative, they can also serve practical purposes. In some cases, trims reinforce edges or seams while simultaneously adding ornamentation. The combination of functional and decorative qualities allows trims to enhance both the appearance and durability of the garment.
            </p>
          </section>

          {/* Printing Technique */}
          <section className="rex-fibre-section rex-fibre-full-section" id="printing">
            <h2 className="rex-fibre-section-title">Printing Technique</h2>
            <p className="rex-fibre-full-p">
              Printing is a surface decoration technique in which colour, patterns, or images are applied directly onto fabric. Unlike embroidery or appliqué, printing does not add physical layers to the fabric surface. Instead, it changes the appearance of the textile by introducing colour and design through dyes or pigments.
            </p>
            <p className="rex-fibre-full-p">
              Printed designs can range from simple repeating patterns to complex artistic compositions.
            </p>
            <h2 className="rex-fibre-section-title">Fabric Printing Methods</h2>
            <p className="rex-fibre-full-p">
              Fabric printing can be carried out through several techniques, each producing a different visual effect. Some methods involve manually applying the design, while others use mechanical or digital processes for greater precision and consistency.
            </p>
            <p className="rex-fibre-full-p">
              Common printing techniques include block printing, screen printing, roller printing, and digital printing. Each method influences the sharpness, texture, and repetition of the printed design.
            </p>
            <figure className="rex-surface-divider-fig">
              <img src={IMG_DIVIDER} alt="" loading="lazy" />
            </figure>
            <h2 className="rex-fibre-section-title">Block Printing</h2>
            <p className="rex-fibre-full-p">
              Block printing is a traditional technique in which carved wooden blocks are used to stamp patterns onto fabric. The block is dipped in dye or pigment and pressed onto the fabric surface to transfer the design.
            </p>
            <p className="rex-fibre-full-p">
              Because each impression is applied by hand, block printing often carries slight variations that give the fabric a handcrafted character.
            </p>
            <figure className="rex-surface-divider-fig">
              <img src={IMG_DIVIDER} alt="" loading="lazy" />
            </figure>
          </section>

          {/* Screen Printing, Digital Printing, Printed Motifs */}
          <section className="rex-fibre-section rex-fibre-full-section" id="screen-digital-printing">
            <h2 className="rex-fibre-section-title">Screen Printing</h2>
            <p className="rex-fibre-full-p">
              Screen printing uses a fine mesh screen through which dye or pigment is pushed onto the fabric in specific areas. Each colour in the design typically requires a separate screen. This method allows for clear and consistent patterns, making it suitable for both traditional motifs and contemporary graphic designs.
            </p>
            <figure className="rex-surface-divider-fig">
              <img src={IMG_DIVIDER} alt="" loading="lazy" />
            </figure>
            <h2 className="rex-fibre-section-title">Digital Printing</h2>
            <p className="rex-fibre-full-p">
              Digital printing is a modern method where designs are printed directly onto fabric using specialized printers. This technology allows for highly detailed images, gradients, and complex colour variations. Because digital printing does not require physical blocks or screens, it offers greater flexibility in design and faster production.
            </p>
            <figure className="rex-surface-divider-fig">
              <img src={IMG_DIVIDER} alt="" loading="lazy" />
            </figure>
            <h2 className="rex-fibre-section-title">Printed Motifs in Garments</h2>
            <p className="rex-fibre-full-p">
              In garments such as blouses, printed designs may appear as repeating patterns, borders, or central motifs. The scale and placement of the print influence how the design interacts with the garment&rsquo;s shape and structure. Designers often coordinate printed blouses with saree patterns or colours to create visual harmony between the two pieces.
            </p>
          </section>

          {/* Design Placement */}
          <section className="rex-fibre-section rex-fibre-full-section" id="design-placement">
            <figure className="rex-surface-hero-fig">
              <img src={IMG_DIVIDER} alt="" loading="lazy" />
            </figure>
            <h2 className="rex-fibre-section-title">Design Placement</h2>
            <p className="rex-fibre-full-p">
              Motif placement refers to the intentional positioning of decorative elements on a garment. A motif may be created through embroidery, printing, appliqué, beadwork, or other ornamentation techniques. The way these motifs are arranged on the fabric strongly influences the visual balance and overall appearance of the garment.
            </p>
            <p className="rex-fibre-full-p">
              Thoughtful placement ensures that decoration enhances the garment&rsquo;s structure rather than overwhelming it.
            </p>
          </section>

          {/* Central Motifs, Border Placement, Scattered Motifs */}
          <section className="rex-fibre-section rex-fibre-full-section" id="motif-types">
            <figure className="rex-body-compat-banner" aria-hidden="true">
              <div className="rex-body-compat-banner-inner" />
            </figure>
            <h2 className="rex-fibre-section-title">Central Motifs</h2>
            <p className="rex-fibre-full-p">
              Central motifs are positioned at the main focal point of the garment. In blouses, this is often seen on the back panel, neckline area, or center front. Because these motifs attract immediate attention, they are often larger or more detailed than other decorative elements.
            </p>
            <figure className="rex-body-compat-banner" aria-hidden="true">
              <div className="rex-body-compat-banner-inner" />
            </figure>
            <h2 className="rex-fibre-section-title">Border Placement</h2>
            <p className="rex-fibre-full-p">
              Borders involve placing motifs or decorative patterns along the edges of the garment. Common areas include necklines, sleeve edges, and hemlines. Border motifs help frame the garment and create visual continuity between different sections of the design.
            </p>
            <figure className="rex-body-compat-banner" aria-hidden="true">
              <div className="rex-body-compat-banner-inner" />
            </figure>
            <h2 className="rex-fibre-section-title">Scattered Motifs</h2>
            <p className="rex-fibre-full-p">
              Scattered motifs are smaller decorative elements distributed across the surface of the fabric. Instead of forming a continuous pattern, these motifs appear at intervals to create a light decorative rhythm. This technique adds interest without concentrating all decoration in one area.
            </p>
          </section>

          {/* Symmetrical and Asymmetrical Placement */}
          <section className="rex-fibre-section rex-fibre-full-section" id="symmetry">
            <h2 className="rex-fibre-section-title">Symmetrical Placement</h2>
            <figure className="rex-body-compat-banner" aria-hidden="true">
              <div className="rex-body-compat-banner-inner" />
            </figure>
            <p className="rex-fibre-full-p">
              In symmetrical placement, motifs are arranged evenly across both sides of the garment. This creates a balanced and harmonious appearance. Symmetry is commonly used in formal or traditional designs where visual order and structure are emphasized.
            </p>
            <h2 className="rex-fibre-section-title">Asymmetrical Placement</h2>
            <figure className="rex-body-compat-banner" aria-hidden="true">
              <div className="rex-body-compat-banner-inner" />
            </figure>
            <p className="rex-fibre-full-p">
              Asymmetrical placement involves arranging motifs in an intentionally uneven or off-center way. This creates a more modern and dynamic visual effect. Designers use asymmetry to introduce movement and artistic expression within the garment.
            </p>
          </section>

          <nav className="rex-fibre-footer-cta rex-fibre-footer-nav" aria-label="Education module navigation">
            <a href="/#journey" className="rex-btn rex-btn-edu-nav">← Previous: Education Hub</a>
            <a href="/education/body-compatibility" className="rex-btn rex-btn-edu-nav">Next: Body and Compatibility →</a>
          </nav>

        </div>
      </main>
      <Footer />
    </>
  );
}
