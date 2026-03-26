import { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const PAGE_TITLE = 'Blouse — Education Hub | Onliest';
const PAGE_DESCRIPTION =
  'Explore blouse fundamentals: structure, fit, necklines, sleeves, back designs, pattern architecture, and blouse-saree compatibility.';

export default function PageBlouse() {
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
      <main className="rex-page-inner rex-fibre-page rex-blouse-page" id="main-content" role="main">
        <div className="rex-fibre-shell">
          <header className="rex-fibre-header">
            <p className="rex-page-eyebrow">Education Hub</p>
            <h1 className="rex-fibre-title">Blouse</h1>
          </header>

          <section className="rex-blouse-hero" aria-label="Blouse introduction">
            <div className="rex-blouse-hero-card">
              <figure className="rex-blouse-hero-fig">
                <img src="https://res.cloudinary.com/djlqifbxp/image/upload/v1774517968/edu-blouse_hh6olh.png" alt="Blouse design focus" loading="eager" />
              </figure>
              <div className="rex-blouse-hero-copy">
                <h2 className="rex-blouse-hero-title">BLOUSE</h2>
                <p className="rex-blouse-hero-p">
                  In the world of saree dressing, the blouse is not simply an accompanying piece. It is the element that
                  defines balance, proportion, and silhouette. While the saree flows and drapes freely, the blouse
                  provides structure holding the form, framing the shoulders, and anchoring the entire look.
                </p>
                <p className="rex-blouse-hero-p">
                  Before a blouse becomes a canvas for embroidery, color, and ornamentation, it begins as structure.
                  Much like the quiet framework beneath a piece of architecture, the blouse is built through thoughtful
                  construction panels, seams, supports, and closures that work together to shape the garment around the
                  body.
                </p>
              </div>
            </div>
          </section>

          <section className="rex-blouse-structure" aria-label="Blouse structure and silhouette">
            <div className="rex-blouse-structure-card">
              <div className="rex-blouse-structure-top">
                <article className="rex-blouse-structure-col">
                  <h2 className="rex-blouse-structure-h">Blouse Structure</h2>
                  <p className="rex-blouse-structure-p">
                    Every blouse is formed through a careful balance of seams, shaping lines, and construction techniques.
                    These elements guide how the garment sits across the shoulders, curves around the bust, and settles
                    comfortably along the torso.
                  </p>
                </article>
                <article className="rex-blouse-structure-col">
                  <h2 className="rex-blouse-structure-h">Silhouette</h2>
                  <p className="rex-blouse-structure-p">
                    The silhouette of a blouse defines the outline it creates when worn. Though often subtle, this outline
                    influences the overall character of the saree ensemble. Through silhouette alone, the blouse can appear
                    traditional, contemporary, structured, or relaxed quietly shaping the identity of the garment.
                  </p>
                </article>
              </div>
              <figure className="rex-blouse-structure-fig">
                <img src="/ds-6fh.png" alt="Blouse silhouette editorial visual" loading="lazy" />
              </figure>
            </div>
          </section>

          <section className="rex-blouse-details" aria-label="Panel and underlinings">
            <div className="rex-blouse-details-card">
              <h2 className="rex-blouse-details-h">Panel</h2>
              <p className="rex-blouse-details-p">
                A blouse may appear seamless when worn, yet it is carefully assembled from multiple fabric pieces known
                as panels. These panels are individually shaped before they are joined together. When stitched, they
                transform from flat fabric into a garment that follows the natural curves of the body.
              </p>
              <p className="rex-blouse-details-p">
                Typical panel arrangements may include front bodice sections, back bodice sections, side shaping panels,
                and sleeve panels. Their placement determines how the blouse contours the body and where adjustments can
                be made to refine the fit.
              </p>

              <h2 className="rex-blouse-details-h">Underlinings</h2>
              <p className="rex-blouse-details-p">
                Hidden beneath the outer fabric lies a layer of support that ensures the blouse maintains both comfort
                and structure throughout the day.
              </p>
              <p className="rex-blouse-details-p">
                <strong>Lining</strong>, a secondary fabric placed inside the garment. Lining strengthens delicate
                materials, smooths the interior surface, and helps the blouse retain its intended silhouette. In more
                structured designs, additional inner foundations may be introduced to shape and support the bust area.
                These elements remain invisible from the outside, yet they play an essential role in the way the blouse
                fits and feels.
              </p>
              <p className="rex-blouse-details-p">
                <strong>Bust Pads</strong><br />
                Soft inserts that provide gentle contour and subtle volume, helping create a smooth and balanced
                silhouette beneath the outer fabric.
              </p>
              <p className="rex-blouse-details-p">
                <strong>Foam or Molded Cups</strong><br />
                Pre-shaped cups that offer consistent shaping and allow certain blouse designs to be worn comfortably
                without additional innerwear.
              </p>
              <p className="rex-blouse-details-p">
                <strong>Underwires</strong><br />
                Curved support elements placed beneath the bust to provide lift and stability, often used in structured
                or bridal blouses.
              </p>
              <p className="rex-blouse-details-p">
                <strong>Boning</strong><br />
                Slim supportive strips inserted vertically within the garment. Boning helps maintain form and prevents
                the blouse from collapsing or shifting, particularly in corset-inspired or heavily embellished designs.
              </p>
              <p className="rex-blouse-details-p">
                <strong>Bust Tapes and Stabilizing Tapes</strong><br />
                Reinforcement tapes placed along areas such as the neckline, shoulder seam, or bust edge. These tapes
                help maintain clean lines, prevent stretching, and ensure the blouse remains securely positioned during
                movement.
              </p>
              <p className="rex-blouse-details-p">
                <strong>Interfacing and Reinforcement Layers</strong><br />
                Hidden support fabrics inserted between layers to strengthen areas that experience stress, such as
                necklines, closures, and embroidered panels.
              </p>
              <p className="rex-blouse-details-p">
                <strong>Shoulder Padding</strong><br />
                Shoulder padding subtly influences the frame of the blouse. By reinforcing the shoulder line, it can
                enhance balance and create a more structured silhouette.
              </p>
              <p className="rex-blouse-details-p">
                <strong>Light Structure Padding</strong><br />
                Adds gentle reinforcement to the shoulder area, helping the garment maintain its shape.
              </p>
              <p className="rex-blouse-details-p">
                <strong>Lifted Structure Padding</strong><br />
                Introduces stronger definition to the shoulder line, often used in contemporary or fashion-forward
                silhouettes.
              </p>
              <p className="rex-blouse-details-p">
                <strong>Additional Reinforcement</strong><br />
                Beyond visible shaping elements, certain blouses include extra internal reinforcement to strengthen the
                garment&apos;s structure.
              </p>
              <p className="rex-blouse-details-p">
                <strong>Standard Construction</strong><br />
                The blouse relies on its natural seams, lining, and shaping techniques for stability.
              </p>
              <p className="rex-blouse-details-p">
                <strong>Extra Structure</strong><br />
                Additional reinforcement layers are incorporated to support heavy fabrics, detailed embroidery, or more
                sculpted silhouettes.
              </p>
              <p className="rex-blouse-details-p">
                Together, these internal components form the hidden engineering of the blouse. Though largely unseen,
                they determine how the garment holds its shape, supports the body, and maintains its elegance through
                hours of wear.
              </p>
            </div>
          </section>

          <section className="rex-blouse-fit" aria-label="Body and fit">
            <div className="rex-blouse-fit-mosaic">
              {Array.from({ length: 8 }).map((_, idx) => (
                <figure key={idx} className="rex-blouse-fit-tile">
                  <img src={idx % 2 === 0 ? 'https://res.cloudinary.com/djlqifbxp/image/upload/v1774509290/ds-3_maibel.png' : 'https://res.cloudinary.com/djlqifbxp/image/upload/v1774509539/ds-4_gia6xv.png'} alt="" loading="lazy" />
                </figure>
              ))}
            </div>
            <div className="rex-blouse-fit-copy">
              <h2 className="rex-blouse-details-h">Body and Fit</h2>
              <p className="rex-blouse-details-p">
                A blouse is not merely placed upon the body it is shaped around it. Every curve, angle, and proportion
                of the upper body influences how the garment settles, moves, and ultimately feels when worn.
              </p>
              <p className="rex-blouse-details-p">
                True blouse design begins with understanding this interaction. The relationship between fabric and form
                determines whether a blouse feels restrictive or effortless, structured or relaxed. Through thoughtful
                adjustments in fit, shaping, and construction, the blouse adapts to the individuality of the wearer.
              </p>
              <p className="rex-blouse-details-p">
                This section explores the elements that guide this relationship how the blouse responds to the natural
                architecture of the body.
              </p>

              <h2 className="rex-blouse-details-h">Blouse Fit</h2>
              <p className="rex-blouse-details-p">
                Fit determines how closely the blouse follows the body&apos;s contours. It affects comfort, movement, and
                the visual balance between blouse and saree.
              </p>
              <p className="rex-blouse-details-p">
                A close or fitted blouse sits snugly against the torso, emphasizing structure and definition. This type
                of fit is often used in traditional and occasion blouses where the saree drape becomes the primary
                flowing element.
              </p>
              <p className="rex-blouse-details-p">
                A regular fit blouse maintains gentle shaping while allowing a little breathing space between the fabric
                and the body. It offers balance-structured enough to hold its form, yet relaxed enough for everyday
                wear.
              </p>
              <p className="rex-blouse-details-p">
                A relaxed fit blouse introduces additional ease, creating a softer silhouette that prioritizes comfort
                and fluidity. This fit is often seen in contemporary interpretations of saree styling.
              </p>
              <p className="rex-blouse-details-p">
                Through these variations, the blouse can shift from sharply tailored to softly structured, depending on
                the intended aesthetic.
              </p>
            </div>
          </section>

          <section className="rex-blouse-compat" aria-label="Blouse structure compatibility">
            <div className="rex-blouse-editorial-artboard">
              <h2 className="rex-ed-head rex-ed-bust-head">BUST STRUCTURE COMPATABILITY</h2>
              <p className="rex-ed-body rex-ed-bust-body">
                The bust area defines how a blouse sits, supports, and shapes the upper frame. Through calibrated seam
                angles, dart intake, and panel transitions, the garment contours smoothly without tension. Curved seams,
                molded support options, and controlled ease maintain structure while preserving comfort through movement.
                A well-balanced bust build allows secure placement and a refined silhouette that never feels rigid.
              </p>

              <figure className="rex-ed-fig rex-ed-lighthouse-top">
                <img src="https://res.cloudinary.com/djlqifbxp/image/upload/v1774509290/ds-3_maibel.png" alt="Lighthouse detail" loading="lazy" />
              </figure>

              <h2 className="rex-ed-head rex-ed-shoulder-head">SHOULDER TYPES</h2>
              <p className="rex-ed-body rex-ed-shoulder-body">
                Shoulders act as the natural frame of blouse engineering. Their slope, width, and posture determine how
                cleanly necklines and sleeves settle across the body. Softer shoulders often require gentler seam pitch,
                while broad or structured shoulders benefit from firmer alignment and corrected sleeve balance. Accurate
                shoulder mapping prevents drag lines, slipping, and neckline distortion, helping the garment rest in a
                stable and natural position.
              </p>

              <figure className="rex-ed-fig rex-ed-mirror">
                <img src="/ds-6fh.png" alt="Mirror feet detail" loading="lazy" />
              </figure>
              <figure className="rex-ed-fig rex-ed-lighthouse-small">
                <img src="https://res.cloudinary.com/djlqifbxp/image/upload/v1774509290/ds-3_maibel.png" alt="Small lighthouse detail" loading="lazy" />
              </figure>
              <figure className="rex-ed-fig rex-ed-phone">
                <img src="https://res.cloudinary.com/djlqifbxp/image/upload/v1774509539/ds-4_gia6xv.png" alt="Portrait phone detail" loading="lazy" />
              </figure>

              <h2 className="rex-ed-head rex-ed-armhole-head">ARMHOLE VARIATIONS</h2>
              <p className="rex-ed-body rex-ed-armhole-body">
                Armhole depth and shape control mobility, visual sharpness, and everyday comfort. Higher armholes deliver
                tailored precision and move closely with the torso. Deeper armholes add ease and flexibility for relaxed
                wear. The construction goal is to preserve range of motion without losing structural integrity across side
                seams, sleeve head, and bust-to-arm transition.
              </p>

              <figure className="rex-ed-fig rex-ed-chair">
                <img src="/ds-6fh.png" alt="Chair and wall detail" loading="lazy" />
              </figure>
              <figure className="rex-ed-fig rex-ed-diagonal">
                <img src="https://res.cloudinary.com/djlqifbxp/image/upload/v1774509290/ds-3_maibel.png" alt="Diagonal architectural detail" loading="lazy" />
              </figure>
              <figure className="rex-ed-fig rex-ed-building">
                <img src="https://res.cloudinary.com/djlqifbxp/image/upload/v1774509539/ds-4_gia6xv.png" alt="Building facade detail" loading="lazy" />
              </figure>
              <figure className="rex-ed-fig rex-ed-bottle">
                <img src="/ds-6fh.png" alt="Bottle detail" loading="lazy" />
              </figure>
              <figure className="rex-ed-fig rex-ed-stair-1">
                <img src="https://res.cloudinary.com/djlqifbxp/image/upload/v1774509290/ds-3_maibel.png" alt="Stair detail one" loading="lazy" />
              </figure>
              <figure className="rex-ed-fig rex-ed-stair-2">
                <img src="https://res.cloudinary.com/djlqifbxp/image/upload/v1774509290/ds-3_maibel.png" alt="Stair detail two" loading="lazy" />
              </figure>

              <h2 className="rex-ed-head rex-ed-ease-head">EASE AND GARMENT BALANCE</h2>
              <p className="rex-ed-body rex-ed-ease-body">
                Ease is the measured allowance that lets the blouse move with the wearer, not against the wearer. Even
                sculpted fits require calibrated breathing room for sitting, reaching, and daily motion without strain.
                Balance ensures equal behavior across front and back lengths, shoulder pitch, and side seam fall. When
                both are tuned together, drape remains clean, lines stay stable, and the blouse keeps its composed shape
                through long wear.
              </p>
            </div>
          </section>

          <section className="rex-blouse-elements" aria-label="Structural design elements">
            <h2 className="rex-blouse-elements-title">Structural Design Elements</h2>
            <p className="rex-blouse-elements-intro">
              The most defining elements include blouse length, neckline depth, sleeve proportion, and back-line balance.
            </p>

            <div className="rex-blouse-elements-grid">
              <article className="rex-blouse-elements-card">
                <h3 className="rex-blouse-elements-h">Blouse Length</h3>
                <p className="rex-blouse-elements-p">
                  Length calibration controls how the blouse anchors against the saree drape. A shorter length creates a
                  sharper and contemporary line, while a longer body offers traditional coverage and structural calm.
                  Precision at hem level prevents riding, distortion, and imbalance through movement.
                </p>
                <figure className="rex-blouse-elements-fig">
                  <img src="https://res.cloudinary.com/djlqifbxp/image/upload/v1774509290/ds-3_maibel.png" alt="Blouse length editorial visual" loading="lazy" />
                </figure>
              </article>

              <article className="rex-blouse-elements-card">
                <h3 className="rex-blouse-elements-h">Neck Line Depth</h3>
                <p className="rex-blouse-elements-p">
                  Neck depth changes the visual focus of the upper body and affects comfort at front and back edges.
                  Controlled depth planning with clean facings and reinforcement keeps the neckline stable while framing
                  the collarbone elegantly across fitted and relaxed silhouettes.
                </p>
                <figure className="rex-blouse-elements-fig">
                  <img src="/ds-6fh.png" alt="Neckline depth editorial visual" loading="lazy" />
                </figure>
              </article>

              <article className="rex-blouse-elements-card">
                <h3 className="rex-blouse-elements-h">Sleeve Length</h3>
                <p className="rex-blouse-elements-p">
                  Sleeve length influences proportion, mobility, and the final tone of the blouse. From cap to elbow to
                  full sleeve, each variation shifts line flow and arm balance. Correct sleeve pitch and opening control
                  preserve comfort while maintaining a crisp garment profile.
                </p>
                <figure className="rex-blouse-elements-fig">
                  <img src="https://res.cloudinary.com/djlqifbxp/image/upload/v1774509539/ds-4_gia6xv.png" alt="Sleeve length editorial visual" loading="lazy" />
                </figure>
              </article>
            </div>

            <div className="rex-blouse-necklines">
              <h3 className="rex-blouse-elements-h rex-blouse-necklines-h">Necklines</h3>
              <p className="rex-blouse-elements-p rex-blouse-necklines-p">
                The neckline is one of the most visually prominent elements of a blouse. It frames the neck, collarbone,
                and upper chest area, influencing the balance of the upper body. Each neckline changes the visual focus of
                the blouse and can complement different body proportions, jewelry choices, and saree styles.
              </p>
              <figure className="rex-blouse-necklines-fig">
                <img src="https://res.cloudinary.com/djlqifbxp/image/upload/v1774517968/edu-blouse_hh6olh.png" alt="Neckline perspective editorial visual" loading="lazy" />
              </figure>
            </div>

            <div className="rex-blouse-sleeve-back">
              <h3 className="rex-blouse-elements-h rex-blouse-sleeve-back-h">Sleeve Designs</h3>
              <p className="rex-blouse-elements-p rex-blouse-sleeve-back-p">
                Sleeves affect both the structure and the visual rhythm of the blouse. They influence arm mobility while
                also contributing to the overall design aesthetic. Each sleeve style affects the visual proportion between
                the shoulders, arms, and torso.
              </p>
              <figure className="rex-blouse-sleeve-back-fig">
                <img src="https://res.cloudinary.com/djlqifbxp/image/upload/v1774517968/edu-blouse_hh6olh.png" alt="Sleeve design editorial visual" loading="lazy" />
              </figure>

              <h3 className="rex-blouse-elements-h rex-blouse-sleeve-back-h">Back Designs</h3>
              <p className="rex-blouse-elements-p rex-blouse-sleeve-back-p">
                The back design of a blouse often becomes a focal point of the garment, particularly in saree styling
                where the back remains visible during movement and draping. The back opening may also incorporate hooks,
                buttons, zippers, or decorative ties depending on the design and construction. Back design not only
                affects aesthetics but also determines how the blouse is worn and secured.
              </p>
              <figure className="rex-blouse-sleeve-back-fig">
                <img src="https://res.cloudinary.com/djlqifbxp/image/upload/v1774517968/edu-blouse_hh6olh.png" alt="Back design editorial visual" loading="lazy" />
              </figure>
            </div>
          </section>

          <section className="rex-blouse-pattern" aria-label="Pattern architecture and construction">
            <h2 className="rex-blouse-elements-title">Pattern Architecture</h2>
            <p className="rex-blouse-elements-p rex-blouse-pattern-intro">
              Behind every well-fitted blouse lies a carefully developed pattern. Pattern architecture refers to the way a
              blouse is divided into pattern pieces and how those pieces are shaped and assembled to create a
              three-dimensional garment from flat fabric. Understanding pattern architecture helps reveal how a blouse is
              engineered to follow the natural contours of the upper body.
            </p>

            <div className="rex-blouse-pattern-grid">
              <div className="rex-blouse-pattern-copy">
                <h3 className="rex-blouse-elements-h">Panel Construction</h3>
                <p className="rex-blouse-elements-p">
                  A blouse is rarely made from a single piece of fabric. Instead, it is constructed from multiple panels
                  that are cut, shaped, and stitched together.
                </p>
                <p className="rex-blouse-elements-p">
                  Common panels include:
                  <br />- Front bodice panels
                  <br />- Back bodice panels
                  <br />- Side panels
                  <br />- Sleeve panels
                </p>
                <p className="rex-blouse-elements-p">
                  Each panel is shaped according to the body measurements it must accommodate. When joined together, these
                  pieces allow the blouse to transform from flat fabric into a garment that wraps smoothly around the
                  torso.
                </p>

                <h3 className="rex-blouse-elements-h">Dart Placement and Shaping</h3>
                <p className="rex-blouse-elements-p">
                  Darts are one of the most important shaping tools in blouse construction. They allow flat fabric to
                  contour around curved areas of the body, particularly the bust. A dart works by removing excess fabric
                  and redirecting it toward a specific point of shaping.
                </p>

                <h3 className="rex-blouse-elements-h">Armhole and Sleeve Relationship</h3>
                <p className="rex-blouse-elements-p">
                  The armhole and sleeve must work together as a coordinated system. The shape and depth of the armhole
                  determine how the sleeve attaches and how freely the arm can move.
                </p>
                <p className="rex-blouse-elements-p">
                  In pattern construction, the sleeve head is carefully shaped to match the armhole curve so that both
                  pieces join smoothly and maintain the garment&apos;s balance.
                </p>

                <h3 className="rex-blouse-elements-h">Structural Reinforcement</h3>
                <p className="rex-blouse-elements-p">
                  Certain areas of a blouse experience more stress during wear. These areas often require additional
                  reinforcement to maintain durability and shape.
                </p>
                <p className="rex-blouse-elements-p">
                  Common reinforcement areas include:
                  <br />- Necklines
                  <br />- Armholes
                  <br />- Fastener areas
                  <br />- Heavily embroidered panels
                </p>
              </div>

              <div className="rex-blouse-pattern-media">
                <figure className="rex-blouse-pattern-fig rex-blouse-pattern-fig--top">
                  <img src="https://res.cloudinary.com/djlqifbxp/image/upload/v1774509290/ds-3_maibel.png" alt="Pattern architecture visual one" loading="lazy" />
                </figure>
                <figure className="rex-blouse-pattern-fig rex-blouse-pattern-fig--bottom">
                  <img src="https://res.cloudinary.com/djlqifbxp/image/upload/v1774509290/ds-3_maibel.png" alt="Pattern architecture visual two" loading="lazy" />
                </figure>
              </div>
            </div>
          </section>

          <section className="rex-blouse-compatibility" aria-label="Blouse and saree compatibility">
            <h2 className="rex-blouse-elements-title">Blouse and Saree Compatibility</h2>
            <p className="rex-blouse-elements-p rex-blouse-compatibility-p">
              A blouse does not exist in isolation, it is designed to complement the saree it accompanies. The fabric of
              the saree, its weight, texture, and drape all influence how the blouse should be constructed.
            </p>
            <p className="rex-blouse-elements-p rex-blouse-compatibility-p">
              Understanding fabric compatibility ensures that the blouse and saree work together as a balanced ensemble
              rather than competing elements. When the blouse structure aligns with the saree fabric, the entire garment
              combination appears more cohesive and comfortable to wear.
            </p>

            <h3 className="rex-blouse-elements-h rex-blouse-compatibility-h">Blouse for Different Saree Fabrics</h3>
            <p className="rex-blouse-elements-p rex-blouse-compatibility-p">
              Different saree fabrics behave differently when draped. Some are heavy and structured, while others are soft
              and fluid. The blouse must be designed to support these characteristics.
            </p>

            <p className="rex-blouse-elements-p rex-blouse-compatibility-p">
              <strong>Silk Sarees</strong>
              <br />
              Silk sarees often have a rich texture and moderate weight. Blouses paired with silk typically use structured
              fabrics such as silk, brocade, or raw silk to maintain balance with the saree&apos;s richness.
            </p>
            <p className="rex-blouse-elements-p rex-blouse-compatibility-p">
              <strong>Cotton Sarees</strong>
              <br />
              Cotton sarees are breathable and lightweight, making them suitable for everyday wear. Blouses paired with
              cotton sarees usually use cotton fabrics or cotton blends that maintain comfort and allow airflow.
            </p>
            <p className="rex-blouse-elements-p rex-blouse-compatibility-p">
              <strong>Chiffon and Georgette Sarees</strong>
              <br />
              These fabrics are lightweight and flow easily. Blouses designed for them are often lighter and more fitted
              so that the blouse does not overpower the delicate drape of the saree.
            </p>
            <p className="rex-blouse-elements-p rex-blouse-compatibility-p">
              <strong>Organza and Tissue Sarees</strong>
              <br />
              These sarees have a crisp texture and light stiffness. Blouses for these fabrics are often structured to
              maintain visual balance.
            </p>

            <h3 className="rex-blouse-elements-h rex-blouse-compatibility-h">Fabric Weight Compatibility</h3>
            <p className="rex-blouse-elements-p rex-blouse-compatibility-p">
              The weight of the blouse fabric should complement the weight of the saree.
              <br />- Heavy sarees pair well with structured blouse fabrics that provide stability.
              <br />- Lightweight sarees pair best with lighter blouse fabrics that maintain proportion.
              <br />
              Balancing fabric weight ensures that the blouse and saree move harmoniously.
            </p>

            <div className="rex-blouse-compatibility-gallery">
              <figure className="rex-blouse-compatibility-fig">
                <img src="https://res.cloudinary.com/djlqifbxp/image/upload/v1774509290/ds-3_maibel.png" alt="Saree fabric compatibility visual one" loading="lazy" />
              </figure>
              <figure className="rex-blouse-compatibility-fig">
                <img src="https://res.cloudinary.com/djlqifbxp/image/upload/v1774509290/ds-3_maibel.png" alt="Saree fabric compatibility visual two" loading="lazy" />
              </figure>
              <figure className="rex-blouse-compatibility-fig">
                <img src="https://res.cloudinary.com/djlqifbxp/image/upload/v1774509290/ds-3_maibel.png" alt="Saree fabric compatibility visual three" loading="lazy" />
              </figure>
            </div>
          </section>

          <section className="rex-blouse-ornamentation" aria-label="Texture and ornamentation details">
            <div className="rex-blouse-texture-grid">
              <div className="rex-blouse-texture-copy">
                <h3 className="rex-blouse-elements-h">Texture and Visual Balance</h3>
                <p className="rex-blouse-elements-p">
                  Texture also plays a role in blouse and saree pairing. Blouses may either:
                  <br />- Match the saree texture, creating a unified appearance
                  <br />- Contrast the texture, creating visual interest
                  <br />
                  For example:
                  <br />- A silk saree may pair with a silk blouse for consistency.
                  <br />- A plain cotton saree may be paired with a textured or embroidered blouse for contrast.
                </p>
                <p className="rex-blouse-elements-p">
                  The goal is to maintain visual balance so that both garments complement each other without overwhelming
                  the overall look.
                </p>
              </div>
              <figure className="rex-blouse-texture-fig">
                <img src="https://res.cloudinary.com/djlqifbxp/image/upload/v1774509290/ds-3_maibel.png" alt="Texture balance visual" loading="lazy" />
              </figure>
            </div>

            <h3 className="rex-blouse-elements-h rex-blouse-ornamentation-h">Design Placement and Ornamentation</h3>
            <p className="rex-blouse-elements-p rex-blouse-ornamentation-p">
              Once the blouse structure, fit, and fabric compatibility are established, design elements can be introduced
              to enhance the garment&apos;s visual appeal. Design placement refers to the strategic positioning of decorative
              elements so that they complement the blouse structure and maintain visual balance.
            </p>
            <p className="rex-blouse-elements-p rex-blouse-ornamentation-p">
              Ornamentation can include embroidery, prints, borders, embellishments, and surface textures. When placed
              thoughtfully, these elements highlight key areas of the blouse while maintaining harmony with the saree.
            </p>

            <div className="rex-blouse-ornamentation-row">
              <figure className="rex-blouse-ornamentation-fig">
                <img src="https://res.cloudinary.com/djlqifbxp/image/upload/v1774509290/ds-3_maibel.png" alt="Embroidery placement visual" loading="lazy" />
              </figure>
              <div className="rex-blouse-ornamentation-copy">
                <h3 className="rex-blouse-elements-h">Embroidery Placement</h3>
                <p className="rex-blouse-elements-p">
                  Embroidery is one of the most commonly used decorative techniques in blouse design. Its placement can
                  emphasize certain areas of the garment and influence the overall visual focus.
                </p>
                <p className="rex-blouse-elements-p">
                  Common embroidery zones include:
                  <br />- Neckline area to frame the face and collarbone
                  <br />- Sleeve hems to highlight the arms
                  <br />- Back panel often used as a focal design feature
                  <br />- Bust panel used carefully to enhance structure without adding excessive bulk
                </p>
              </div>
            </div>

            <div className="rex-blouse-ornamentation-row">
              <figure className="rex-blouse-ornamentation-fig">
                <img src="https://res.cloudinary.com/djlqifbxp/image/upload/v1774509290/ds-3_maibel.png" alt="Borders and edge detailing visual" loading="lazy" />
              </figure>
              <div className="rex-blouse-ornamentation-copy">
                <h3 className="rex-blouse-elements-h">Borders and Edge Detailing</h3>
                <p className="rex-blouse-elements-p">
                  Borders are decorative trims applied along the edges of the blouse. They help define the garment&apos;s
                  shape and create a connection between the blouse and the saree.
                </p>
                <p className="rex-blouse-elements-p">
                  Common border placements include:
                  <br />- Sleeve hems
                  <br />- Neckline edges
                  <br />- Back openings
                  <br />- Waist hem of the blouse
                  <br />
                  Borders are often designed to match or complement the border of the saree, creating visual continuity
                  between the two garments.
                </p>
              </div>
            </div>
          </section>

          <section className="rex-blouse-back-surface" aria-label="Back design ornamentation and surface techniques">
            <h3 className="rex-blouse-elements-h rex-blouse-back-surface-h">Back Design Ornamentation</h3>
            <p className="rex-blouse-elements-p rex-blouse-back-surface-p">
              The back of the blouse often serves as a key design area, especially in saree styling where the back remains
              visible.
            </p>
            <p className="rex-blouse-elements-p rex-blouse-back-surface-p">
              Decorative elements may include:
              <br />- Embroidered motifs
              <br />- Tassels or decorative ties (dori)
              <br />- Button arrangements
              <br />- Cutwork or patterned openings
            </p>

            <h3 className="rex-blouse-elements-h rex-blouse-back-surface-h">Borders and Edge Detailing</h3>
            <p className="rex-blouse-elements-p rex-blouse-back-surface-p">
              Borders are decorative trims applied along the edges of the blouse. They help define the garment&apos;s shape
              and create a connection between the blouse and the saree.
            </p>
            <p className="rex-blouse-elements-p rex-blouse-back-surface-p">
              Common border placements include:
              <br />- Sleeve hems
              <br />- Neckline edges
              <br />- Back openings
              <br />- Waist hem of the blouse
              <br />
              Borders are often designed to match or complement the border of the saree, creating visual continuity
              between the two garments.
            </p>

            <figure className="rex-blouse-back-surface-hero-fig">
              <img src="https://res.cloudinary.com/djlqifbxp/image/upload/v1774509290/ds-3_maibel.png" alt="Back design ornamentation panorama visual" loading="lazy" />
            </figure>

            <h3 className="rex-blouse-elements-h rex-blouse-back-surface-h">Surface Techniques</h3>
            <p className="rex-blouse-elements-p rex-blouse-back-surface-p">
              Surface ornamentation techniques may vary depending on the fabric and the overall design concept.
            </p>
            <p className="rex-blouse-elements-p rex-blouse-back-surface-p">
              Common techniques include:
              <br />- Thread embroidery
              <br />- Zari work
              <br />- Sequins and bead embellishments
              <br />- Printed motifs
              <br />- Fabric applique
              <br />
              The choice of technique should consider fabric compatibility, durability, and the intended aesthetic.
            </p>
          </section>

          <section className="rex-blouse-occasion-pairing" aria-label="Blouse and saree pairing for different occasions">
            <h2 className="rex-blouse-elements-title">Blouse and Saree Pairing for Different Occasion</h2>
            <p className="rex-blouse-elements-p rex-blouse-occasion-p">
              A blouse is never chosen in isolation. It comes alive beside the saree it accompanies, shaping the mood of
              the ensemble and reflecting the moment it is meant for. From everyday elegance to the grandeur of
              celebrations, the blouse adapts quietly supporting the saree while adding its own character.
            </p>

            <h3 className="rex-blouse-elements-h rex-blouse-occasion-h">Everyday Blouses</h3>
            <p className="rex-blouse-elements-p rex-blouse-occasion-p">
              Blouses intended for daily or regular wear are usually designed with comfort and practicality in mind.
              These blouses often feature breathable fabrics such as cotton or cotton blends and are constructed with
              minimal structural reinforcement. Necklines tend to be moderate, sleeves are practical, and ornamentation
              is usually limited or subtle. The focus is on ease of movement, durability, and simplicity while still
              maintaining a neat and refined appearance.
            </p>

            <h3 className="rex-blouse-elements-h rex-blouse-occasion-h">Festive Blouses</h3>
            <p className="rex-blouse-elements-p rex-blouse-occasion-p">
              Festive occasions allow for more decorative design elements. Blouses for festivals often incorporate richer
              fabrics such as silk, brocade, or textured weaves. Embroidery, borders, decorative sleeves, or detailed
              back designs may be included to complement the celebratory nature of the saree. While structure and fit
              remain important, these blouses often emphasize visual richness and surface detailing.
            </p>

            <h3 className="rex-blouse-elements-h rex-blouse-occasion-h">Wedding and Formal Occasion Blouses</h3>
            <p className="rex-blouse-elements-p rex-blouse-occasion-p">
              Blouses worn for weddings and formal ceremonies often feature the most elaborate construction. These designs
              may include heavier fabrics, detailed embroidery, structured bust areas, reinforced panels, and decorative
              fastenings. Back designs and sleeve treatments are frequently used as focal design elements. The blouse
              works together with the saree to create a more formal and visually impactful ensemble.
            </p>

            <h3 className="rex-blouse-elements-h rex-blouse-occasion-h">Matching Blouse Pairing</h3>
            <p className="rex-blouse-elements-p rex-blouse-occasion-p">
              In many traditional ensembles, the blouse fabric matches the saree fabric or color. This creates a unified
              appearance where the blouse blends seamlessly with the saree. Matching blouses are commonly used with silk
              sarees, traditional sarees, and formal garments where continuity is preferred.
            </p>

            <h3 className="rex-blouse-elements-h rex-blouse-occasion-h">Contrast Blouse Pairing</h3>
            <p className="rex-blouse-elements-p rex-blouse-occasion-p">
              A contrasting blouse introduces a different color or fabric to create visual interest. The contrast may come
              from color, texture, or surface ornamentation. This approach allows the blouse to stand out slightly while
              still complementing the saree. Contrast pairing is widely used in contemporary saree styling.
            </p>

            <h3 className="rex-blouse-elements-h rex-blouse-occasion-h">Statement Blouse Pairing</h3>
            <p className="rex-blouse-elements-p rex-blouse-occasion-p">
              In some ensembles, the blouse itself becomes a design highlight. This may occur when the blouse includes
              heavy embroidery, intricate back designs, unique sleeve structures, or distinctive fabrics. In these cases,
              the blouse adds character to the saree while maintaining overall balance.
            </p>
          </section>

          <nav className="rex-fibre-footer-cta rex-fibre-footer-nav" aria-label="Education module navigation">
            <a href="/#journey" className="rex-btn rex-btn-edu-nav">← Previous: Education Hub</a>
            <a href="/education/surface-ornamentation" className="rex-btn rex-btn-edu-nav">Next: Surface Ornamentation →</a>
          </nav>
        </div>
      </main>
      <Footer />
    </>
  );
}

