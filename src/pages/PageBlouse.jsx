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
                <img src="/edu-blouse.png" alt="Blouse design focus" loading="eager" />
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
                  <img src={idx % 2 === 0 ? '/ds-2.png' : '/ds-4.png'} alt="" loading="lazy" />
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

