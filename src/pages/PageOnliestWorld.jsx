import { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const PAGE_TITLE = 'Onliest World — Education Hub | Onliest';
const PAGE_DESCRIPTION =
  'Explore Onliest World: textile intelligence, silhouette composition, design systems, prototyping, production quality, and longevity.';

export default function PageOnliestWorld() {
  const textileContent = {
    intro:
      'Through varying methods of construction, the artisan decides whether a saree will whisper with the lightness of air or command the room with the gravity of stone. Textile intelligence is the bridge between the raw potential of fibre and the final silhouette of the drape.',
  };
  const composedContent = {
    lead: 'Luxury is defined by permanence.',
    intro: [
      'In an era defined by acceleration, fashion is quietly returning to something slower, wiser, and more intentional. The modern consumer is no longer searching for excess; she is searching for meaning.',
      'Across ateliers and design studios, a new classicism is emerging. Thoughtful textiles are preferred over synthetic spectacle. Garments are being designed not just to impress, but to endure.',
      'And perhaps that is the most modern idea of all.',
    ],
    architecture:
      'When you pick out a saree, you are not just choosing a piece of cloth; you are choosing how you want to feel and move.',
  };
  const designContent = {
    introTop: 'We will summarise your measurements and influence the size and design architecture curated just for you.',
    introBody: [
      'The silhouette begins as a quiet study of bodily architecture: shoulder angle, bust placement, torso length, and the natural rhythm of movement. From this understanding, proportion becomes a language — lines are refined, balance is restored, and the frame is elevated.',
      'We develop structured design formats that allow the wearer to customize within an engineered framework. Every decision is guided by silhouette balance, weight distribution, and proportion logic.',
    ],
  };
  const prototypeContent = {
    lead: 'The Advanced Engineering System is built on one principle: balance through precision.',
  };
  const qualityContent = {
    lead:
      'The handloom teaches us proportion, restraint, symbolism, and the emotional weight a textile can carry. Its artistry is not replicated; it is respected, studied, and understood at a structural level.',
  };
  const longevityContent = {
    lead: 'Longevity is defined by how well something endures.',
  };

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
      <main className="rex-page-inner rex-fibre-page rex-ow-page" id="main-content" role="main">
        <div className="rex-fibre-shell rex-ow-shell">
          <header className="rex-fibre-header">
            <p className="rex-page-eyebrow">Education Hub</p>
            <h1 className="rex-fibre-title">Onliest World</h1>
          </header>

          <section className="rex-ow-board" aria-label="Onliest World editorial layout">
            <div className="rex-ow-mosaic" aria-hidden="true">
              <figure className="rex-ow-tile rex-ow-tile--a">
                <img src="https://res.cloudinary.com/djlqifbxp/image/upload/v1774509290/ds-1_ao4fyf.png" alt="" loading="lazy" />
              </figure>
              <figure className="rex-ow-tile rex-ow-tile--b">
                <img src="https://res.cloudinary.com/djlqifbxp/image/upload/v1774509290/ds-3_maibel.png" alt="" loading="lazy" />
              </figure>
              <figure className="rex-ow-tile rex-ow-tile--c">
                <img src="/ds-7.png" alt="" loading="lazy" />
              </figure>
              <figure className="rex-ow-tile rex-ow-tile--d">
                <img src="/ds-8.png" alt="" loading="lazy" />
              </figure>
              <figure className="rex-ow-tile rex-ow-tile--e rex-ow-tile--center">
                <div className="rex-ow-center-card">ONLIEST</div>
              </figure>
              <figure className="rex-ow-tile rex-ow-tile--f">
                <img src="/ds-5.png" alt="" loading="lazy" />
              </figure>
              <figure className="rex-ow-tile rex-ow-tile--g">
                <img src="https://res.cloudinary.com/djlqifbxp/image/upload/v1774509539/ds-4_gia6xv.png" alt="" loading="lazy" />
              </figure>
              <figure className="rex-ow-tile rex-ow-tile--h">
                <img src="https://res.cloudinary.com/djlqifbxp/image/upload/v1774509647/ds-9_wyiqi2.png" alt="" loading="lazy" />
              </figure>
              <figure className="rex-ow-tile rex-ow-tile--i">
                <img src="https://res.cloudinary.com/djlqifbxp/image/upload/v1774517844/edu-fibre_ffsidq.jpg" alt="" loading="lazy" />
              </figure>
              <figure className="rex-ow-tile rex-ow-tile--j">
                <img src="https://res.cloudinary.com/djlqifbxp/image/upload/v1774509290/ds-2_n5rdtx.png" alt="" loading="lazy" />
              </figure>
              <figure className="rex-ow-tile rex-ow-tile--k">
                <img src="/ds-6fh.png" alt="" loading="lazy" />
              </figure>
            </div>
          </section>

          <section className="rex-ow-tabs-block rex-ow-sequence-block" aria-label="Onliest World topics">
            <div className="rex-ow-tab-panel rex-ow-sequence-panel">
              <article className="rex-ow-tab-article">
                <h2 className="rex-fibre-section-title">Textile intelligence</h2>
                  <p className="rex-fibre-full-p">{textileContent.intro}</p>

                  <section className="rex-ow-ti-weaves">
                    <article className="rex-ow-ti-weave-card">
                      <figure className="rex-ow-ti-mini-fig">
                        <img src="https://res.cloudinary.com/djlqifbxp/image/upload/v1774509539/ds-4_gia6xv.png" alt="Plain weave diagram" loading="lazy" />
                      </figure>
                      <h3 className="rex-fibre-sub-h">PLAIN WEAVE</h3>
                      <p className="rex-fibre-full-p">
                        The plain weave is a study in perfect balance. By alternating the thread in a simple over-under sequence, the artisan creates a textile of integrity and breathability.
                      </p>
                    </article>

                    <article className="rex-ow-ti-weave-card">
                      <figure className="rex-ow-ti-mini-fig">
                        <img src="https://res.cloudinary.com/djlqifbxp/image/upload/v1774509647/ds-9_wyiqi2.png" alt="Twill weave rhythm" loading="lazy" />
                      </figure>
                      <h3 className="rex-fibre-sub-h">TWILL WEAVE</h3>
                      <p className="rex-fibre-full-p">
                        A twill weave introduces a subtle diagonal rhythm. By offsetting interlacing points, the weaver creates a stronger but more fluid fabric that follows the body with instinctive ease.
                      </p>
                    </article>
                  </section>

                  <article className="rex-ow-tab-block">
                    <figure className="rex-ow-tab-figure">
                      <img src="https://res.cloudinary.com/djlqifbxp/image/upload/v1774517844/edu-fibre_ffsidq.jpg" alt="Satin and jacquard weave references" loading="lazy" />
                    </figure>
                    <h3 className="rex-fibre-sub-h">SATIN WEAVE</h3>
                    <p className="rex-fibre-full-p">
                      In the pursuit of luminous finish, the satin weave employs a float technique where yarn travels across multiple threads before interlacing. This minimizes interruption of light and creates long, uninterrupted surface sheen.
                    </p>
                    <h3 className="rex-fibre-sub-h">JACQUARD WEAVE</h3>
                    <p className="rex-fibre-full-p">
                      A jacquard weave embeds motifs directly into the cloth rather than printing them on top. The loom is programmed to lift specific threads independently, allowing complex, dimensional forms to be woven into the fabric structure.
                    </p>
                  </article>

                  <article className="rex-ow-ti-split">
                    <figure className="rex-ow-tab-figure rex-ow-tab-figure--left">
                      <img src="/ds-6fh.png" alt="Decorative textile architecture" loading="lazy" />
                    </figure>
                    <div>
                      <p className="rex-fibre-full-p">
                        In masterworks such as Banarasi sarees, metallic yarns are interlaced to increase density and anchor drape. In contrast, Kanchipuram traditions rely on tightly controlled interlocked construction to create architectural stability.
                      </p>
                      <p className="rex-fibre-full-p">
                        Surface embellishments are treated as structural loads; placement is mapped against pleat zones and pressure points to ensure visual poetry never compromises balance.
                      </p>
                    </div>
                  </article>

                  <article className="rex-ow-tab-block">
                    <h3 className="rex-fibre-sub-h">THE PHYSICS OF PIGMENT AND LIGHT</h3>
                    <p className="rex-fibre-full-p">
                      Color behavior is dictated by the textile surface. Deep tones on high-sheen satin create reflective depth, while matte cotton and hand-spun textures absorb light and produce intellectual softness.
                    </p>
                    <ul className="rex-fibre-list">
                      <li><strong>Luminous Jewel Tones:</strong> Engineered for high-intensity lighting where emeralds, rubies, and sapphires retain depth.</li>
                      <li><strong>Matte Neutrals and Earth Tones:</strong> Calibrated for daylight and outdoor settings, harmonizing with natural shadows.</li>
                    </ul>
                    <h3 className="rex-fibre-sub-h">THE CULTURAL INTERFACE</h3>
                    <p className="rex-fibre-full-p">
                      Every motif, from geometric rhythm to floral detailing, acts as cultural symbolism. These are not decorative additions alone; they are visual scripts of heritage, occasion, and identity translated through textile language.
                    </p>
                  </article>
              </article>

              <article className="rex-ow-tab-article rex-ow-cs-article">
                  <h2 className="rex-fibre-section-title">Composed silhouette</h2>
                  <p className="rex-fibre-sub-h rex-ow-cs-kicker">COMPOSED SILHOUETTE</p>
                  <h3 className="rex-ow-cs-lead">{composedContent.lead}</h3>
                  {composedContent.intro.map((p) => (
                    <p key={p} className="rex-fibre-full-p">{p}</p>
                  ))}

                  <article className="rex-ow-cs-drape">
                    <h3 className="rex-fibre-sub-h">DRAPE</h3>
                    <p className="rex-fibre-full-p">
                      A composed silhouette is structural engineering that responds to the cadence of the body. In a saree, to understand beauty is to read its core components: body, border, pallu, and blouse.
                    </p>
                    <div className="rex-ow-cs-split">
                      <figure className="rex-ow-tab-figure">
                        <img src="/ds-1.png" alt="Composed saree drape study" loading="lazy" />
                      </figure>
                      <p className="rex-fibre-full-p">
                        True elegance is never accidental. Full saree composition is a measured harmony of surface, grounding, and support. What appears effortless is disciplined construction.
                      </p>
                    </div>
                  </article>

                  <article className="rex-ow-cs-diagram-block">
                    <h3 className="rex-fibre-sub-h">THE ARCHITECTURE OF ELEGANCE</h3>
                    <p className="rex-fibre-full-p">{composedContent.architecture}</p>
                    <figure className="rex-ow-cs-diagram" aria-label="Saree composition diagram">
                      <div className="rex-ow-cs-diagram-top">Top Border</div>
                      <div className="rex-ow-cs-diagram-left">Blouse Cloth</div>
                      <div className="rex-ow-cs-diagram-body">Saree Body</div>
                      <div className="rex-ow-cs-diagram-pallu">Pallu</div>
                      <div className="rex-ow-cs-diagram-bottom">Lower Border</div>
                    </figure>
                    <p className="rex-fibre-full-p rex-ow-cs-caption">A simple breakdown of the architecture behind silhouette.</p>
                  </article>

                  <article className="rex-ow-tab-block">
                    <h3 className="rex-fibre-sub-h">FIT ANALYSIS: FALL REQUIREMENT AND STRUCTURAL LOGIC</h3>
                    <p className="rex-fibre-full-p">
                      In a saree, fit begins with fall behavior. Certain sarees demand reinforcement at the hem to guide descent and provide weighted anchor. Heavier sarees benefit from firm borders and stronger pallu balance; lighter weaves need subtle stabilization so pleats remain disciplined.
                    </p>
                    <p className="rex-fibre-full-p">
                      Dense brocades carry inherent structure, while open weaves may require strategic underlining to preserve integrity through the day. The objective is not stiffness, but controlled movement.
                    </p>
                  </article>

                  <article className="rex-ow-cs-split">
                    <figure className="rex-ow-tab-figure">
                      <img src="/ds-5.png" alt="Color and border relationship in saree composition" loading="lazy" />
                    </figure>
                    <div>
                      <h3 className="rex-fibre-sub-h">COLOR LOGIC</h3>
                      <p className="rex-fibre-full-p">
                        Within saree composition, color is governed by hierarchy, not preference. Body establishes dominance, pallu controls motion emphasis, and borders calibrate proportional discipline.
                      </p>
                      <p className="rex-fibre-full-p">
                        Color does not decorate the saree; it orchestrates it.
                      </p>
                    </div>
                  </article>

                  <article className="rex-ow-tab-block">
                    <h3 className="rex-fibre-sub-h">THE DECORATIVE END PIECE</h3>
                    <p className="rex-fibre-full-p">
                      Pallu is a study in weight logic. Its density must synchronize with shoulder strength and occasion. If too heavy, it drags; if too light, it loses authority. The ideal pallu offers presence without becoming a burden.
                    </p>
                    <figure className="rex-ow-tab-figure">
                      <img src="/ds-7.png" alt="Pallu and border composition sample" loading="lazy" />
                    </figure>
                    <p className="rex-fibre-full-p">
                      Every saree carries an inherent temperament. Heavier drapes with firm borders suit ceremonies; lighter compositions with softer contrast suit contemporary movement and social settings.
                    </p>
                    <p className="rex-fibre-full-p rex-ow-cs-final">
                      Ultimately, total garment weight is assessed as a unified system — to honor the body through balance.
                    </p>
                  </article>
              </article>

              <article className="rex-ow-tab-article rex-ow-design-article">
                  <h2 className="rex-fibre-section-title">Design</h2>
                  <p className="rex-fibre-sub-h">DESIGN</p>
                  <p className="rex-fibre-full-p">{designContent.introTop}</p>
                  {designContent.introBody.map((p) => (
                    <p key={p} className="rex-fibre-full-p">{p}</p>
                  ))}

                  <article className="rex-ow-tab-block rex-ow-design-center">
                    <h3 className="rex-fibre-sub-h">MEASUREMENT-DRIVEN ENGINEERING</h3>
                    <p className="rex-fibre-full-p">
                      Every fashion system is formatted around three primary inputs:
                    </p>
                    <ul className="rex-fibre-list">
                      <li>Body measurements</li>
                      <li>Movement patterns</li>
                      <li>Occasion requirements</li>
                    </ul>
                    <p className="rex-fibre-full-p">
                      Customization is never guesswork. It is calibrated through measurable logic.
                    </p>
                  </article>

                  <article className="rex-ow-tab-block">
                    <h3 className="rex-fibre-sub-h">SIZE ARCHITECTURE</h3>
                    <p className="rex-fibre-full-p">
                      In our system, sizing is not about enlarging or reducing a pattern uniformly; it is proportional recalibration. Bodies do not grow in equal increments, so each size is restructured to preserve balance, silhouette clarity, and structural integrity.
                    </p>
                    <p className="rex-fibre-full-p">
                      We analyze bust-waist-hip relationships as a connected framework. Shoulder width and slope are recalibrated carefully, and armhole depth follows volume and mobility needs so comfort and clean lines coexist.
                    </p>
                    <figure className="rex-ow-tab-figure">
                      <img src="/ds-3.png" alt="Body type reference and proportional planning" loading="lazy" />
                    </figure>
                    <p className="rex-fibre-full-p">
                      Instead of increasing all measurements uniformly, we adjust according to body distribution. This prevents gaping, pulling, slipping, and visual imbalance.
                    </p>
                  </article>

                  <article className="rex-ow-tab-block">
                    <h3 className="rex-fibre-sub-h">DESIGN & PATTERN CUSTOMIZATION WITHIN ENGINEERED FRAMEWORK</h3>
                    <p className="rex-fibre-full-p">
                      For those who want to be part of the design process, we provide refined, ready-to-use digital blouse patterns with seam allowances, balance markings, and structural guides already built in.
                    </p>
                    <p className="rex-fibre-full-p">
                      Customization is guided, never overwhelming. If a neckline changes, bust support is rebalanced. If sleeves shift, armhole curve is corrected. If embellishments are added, reinforcements are repositioned so creativity never compromises fit.
                    </p>
                  </article>

                  <article className="rex-ow-tab-block">
                    <h3 className="rex-fibre-sub-h">ARCHITECTURE OF SUPPORT</h3>
                    <p className="rex-fibre-full-p">
                      Beneath elegance lies deliberate structural support. Underwires, interfacings, stabilizers, seam reinforcements, and closures are selected according to morphology and movement requirements, distributing stress evenly across the garment.
                    </p>
                    <figure className="rex-ow-design-blue" aria-hidden="true" />
                    <p className="rex-fibre-full-p">
                      The support system from cups and underwires to interfacings and closures continues to align with measurements and movement needs, regardless of how the design is personalized.
                    </p>
                    <p className="rex-fibre-full-p rex-ow-cs-final">
                      Customization becomes intelligent.
                    </p>
                  </article>
              </article>

              <article className="rex-ow-tab-article rex-ow-proto-article">
                  <h2 className="rex-fibre-section-title">3D prototype</h2>
                  <p className="rex-fibre-sub-h">3D PROTOTYPE</p>
                  <p className="rex-fibre-full-p">{prototypeContent.lead}</p>

                  <figure className="rex-ow-tab-figure">
                    <img src="/ds-6fh.png" alt="3D prototype cutting and pattern engineering" loading="lazy" />
                  </figure>

                  <p className="rex-fibre-full-p">
                    Every saree and blouse begins with proportional analysis: not just measurements, but how body architecture interacts with fabric, structure, and movement. Neckline engineering is calibrated through bust projection, shoulder width and slope, torso length, and occasion context.
                  </p>
                  <p className="rex-fibre-full-p">
                    At the core lies the blouse as a precision support system. Neckline and sleeve compatibility are engineered according to bust fullness, spacing, and arm mobility, while reinforcements are strategically placed to manage tension from saree weight.
                  </p>

                  <article className="rex-ow-ti-split">
                    <figure className="rex-ow-tab-figure rex-ow-tab-figure--left">
                      <img src="/ds-4.png" alt="Surface ornamentation and texture mapping" loading="lazy" />
                    </figure>
                    <div>
                      <h3 className="rex-fibre-sub-h">SURFACE ORNAMENTATION</h3>
                      <p className="rex-fibre-full-p">
                        Surface ornamentation is approached as structural placement, not mere embellishment. Motif density, thread highlights, zari placement, and pleat-zone detailing are mapped to preserve fluidity and reduce bulk.
                      </p>
                    </div>
                  </article>

                  <article className="rex-ow-tab-block">
                    <h3 className="rex-fibre-sub-h">STRUCTURAL &amp; COLOR INTELLIGENCE INTEGRATION</h3>
                    <p className="rex-fibre-full-p">
                      The advanced engineering system is a complete calibration process where proportion, structure, movement, and color are designed together rather than treated as separate decisions.
                    </p>
                    <p className="rex-fibre-full-p">
                      Undertone analysis filters color families for clarity and luminosity: warm undertones align with earthy reds, maroons, turmeric yellows, and olive greens; cool undertones resonate with jewel blues, emeralds, wine tones, and rose-based palettes.
                    </p>
                  </article>

                  <article className="rex-ow-tab-block">
                    <h3 className="rex-fibre-sub-h">DRAPING DEMONSTRATION</h3>
                    <p className="rex-fibre-full-p">
                      Through a personalized 3D avatar built to mirror proportions and posture, curated saree structures are tested in motion before being worn. Pleat behavior, pallu anchoring, shoulder symmetry, and movement response are observed from multiple angles.
                    </p>
                    <div className="rex-ow-proto-wrap-grid">
                      <div className="rex-ow-proto-wrap-card">3D Gujarati Wrap</div>
                      <div className="rex-ow-proto-wrap-card">3D Nauvari Wrap</div>
                    </div>
                    <p className="rex-fibre-full-p">
                      This layered simulation turns draping from a technical step into informed visual dialogue, finalizing silhouette with clarity, confidence, and alignment to design intent.
                    </p>
                    <p className="rex-fibre-full-p rex-ow-cs-final">
                      Expressive without distortion, impressive without compromise.
                    </p>
                  </article>
              </article>

              <article className="rex-ow-tab-article rex-ow-quality-article">
                  <h2 className="rex-fibre-section-title">Production and quality check</h2>
                  <p className="rex-fibre-sub-h">PRODUCTION AND QUALITY</p>
                  <figure className="rex-ow-proto-video">
                    <div className="rex-ow-proto-video-play" aria-hidden="true">▶</div>
                  </figure>
                  <p className="rex-fibre-full-p rex-ow-quality-lead">{qualityContent.lead}</p>

                  <p className="rex-fibre-full-p">
                    Rooted in admiration for traditional handlooms, we draw inspiration from heritage rhythm, artisan patience, and cultural intelligence embedded in weaving. The intention is to bridge heritage meaning with engineered reliability for contemporary life.
                  </p>

                  <figure className="rex-ow-tab-figure">
                    <img src="/ds-9.png" alt="Handloom warp and weft preparation" loading="lazy" />
                  </figure>

                  <article className="rex-ow-tab-block">
                    <h3 className="rex-fibre-sub-h">THREAD COUNT</h3>
                    <p className="rex-fibre-full-p">
                      Thread count is a structural decision, not decorative vocabulary. It defines the number of warp and weft threads interlaced within a square inch and directly influences breathability, texture, and stability.
                    </p>
                    <p className="rex-fibre-full-p">
                      Lightweight cotton sarees may operate around 80–120 threads per inch for airflow and ease. Standard silk sarees move into the 150–300 range, while denser ceremonial constructions can extend further for compact, refined structure.
                    </p>
                  </article>

                  <article className="rex-ow-tab-block">
                    <h3 className="rex-fibre-sub-h">THE INTRICATE LOGIC OF OUR PROGRAM</h3>
                    <p className="rex-fibre-full-p"><em>Precision begins at fibre level.</em></p>
                    <figure className="rex-ow-tab-figure">
                      <img src="/edu-fibre.jpg" alt="Engineered jacquard and motif architecture" loading="lazy" />
                    </figure>
                    <p className="rex-fibre-full-p">
                      Superior fibre selection ensures consistency in weaving and predictable yarn behavior under tension. Through Jacquard programming, thread movement is pre-calculated so motif architecture is embedded into the fabric structure, not applied on top.
                    </p>
                    <p className="rex-fibre-full-p">
                      Shrinkage is anticipated early by evaluating how each fabric responds to moisture, steam, heat, and pressure before cutting begins.
                    </p>
                  </article>

                  <article className="rex-ow-tab-block">
                    <h3 className="rex-fibre-sub-h">FINISHING PROTOCOL</h3>
                    <p className="rex-fibre-full-p">
                      Every saree included in our production listing undergoes structured quality evaluation before release. Aesthetic beauty is validated through technical integrity.
                    </p>
                    <p className="rex-fibre-full-p">
                      Fibre verification, weave accuracy, tension balance, metallic adhesion, wrapping tightness, and oxidation resistance are checked across all critical zones.
                    </p>
                    <ul className="rex-fibre-list">
                      <li>Even polishing or calendaring</li>
                      <li>Color consistency under varied lighting</li>
                      <li>Clean selvedges and finishing seams</li>
                      <li>No residual starch stiffness unless intentionally specified</li>
                    </ul>
                    <p className="rex-fibre-full-p rex-ow-cs-final">
                      Quality is engineered, verified, and documented.
                    </p>
                  </article>
              </article>

              <article className="rex-ow-tab-article rex-ow-longevity-article">
                  <h2 className="rex-fibre-section-title">Storage and longevity</h2>
                  <p className="rex-fibre-sub-h">VALUE</p>
                  <p className="rex-fibre-full-p">{longevityContent.lead}</p>

                  <article className="rex-ow-tab-block">
                    <h3 className="rex-fibre-sub-h">TRANSPARENCY &amp; EXCLUSIVITY</h3>
                    <p className="rex-fibre-full-p">
                      Every saree we create is evaluated through a defined structural and production framework before it becomes part of our collection. We assess fibre authenticity, weave density, zari construction, ornamentation load, and finishing stability to ensure the textile meets both aesthetic and durability standards.
                    </p>
                    <ul className="rex-fibre-list">
                      <li>Fabric selection logic</li>
                      <li>Color contrast logic</li>
                      <li>Zari construction and aging behavior</li>
                      <li>Design logic and customisation</li>
                      <li>Ornamentation and structural support</li>
                      <li>Blouse support architecture</li>
                      <li>3D avatar fit demonstration</li>
                    </ul>
                    <figure className="rex-ow-tab-figure">
                      <img src="/ds-1.png" alt="Saree preservation and documented craftsmanship" loading="lazy" />
                    </figure>
                    <p className="rex-fibre-full-p rex-ow-cs-final">
                      When you invest in our saree, you are investing in documented craftsmanship.
                    </p>
                  </article>

                  <article className="rex-ow-tab-block">
                    <h3 className="rex-fibre-sub-h">STORAGE SCIENCE</h3>
                    <p className="rex-fibre-full-p">
                      Textiles respond to environment. Humidity weakens fibres. Sunlight fades color. Pressure creates permanent stress lines. Metallic zari can oxidize with moisture and chemicals. Correct storage protects structure and sheen.
                    </p>
                    <ol className="rex-fibre-list rex-ow-list-numbered">
                      <li><strong>Always store in breathable fabric.</strong> Use unbleached cotton or muslin cloth; avoid plastic covers.</li>
                      <li><strong>Refold periodically.</strong> Change fold lines every 3–6 months to prevent permanent creasing.</li>
                      <li><strong>Separate heavy and lightweight sarees.</strong> Do not stack dense Kanjeevarams over delicate weaves.</li>
                      <li><strong>Protect zari sections.</strong> Wrap zari borders and pallus in soft cotton to reduce friction and oxidation.</li>
                      <li><strong>Maintain dry storage conditions.</strong> Store in cool, low-humidity environments.</li>
                      <li><strong>Air occasionally.</strong> Air sarees in shade once or twice a year to release trapped moisture.</li>
                      <li><strong>Avoid long-term hanging.</strong> Prolonged hanging can distort weave and border alignment.</li>
                      <li><strong>Dry clean only when necessary.</strong> Frequent chemical processing may weaken fibres.</li>
                      <li><strong>Address stains immediately.</strong> Spot-treat before storage.</li>
                      <li><strong>Use natural repellents carefully.</strong> Neem or cedar nearby, but never touching fabric directly.</li>
                    </ol>
                  </article>

                  <article className="rex-ow-tab-block">
                    <h3 className="rex-fibre-sub-h">HOW TO PRESERVE ZARI</h3>
                    <p className="rex-fibre-full-p">Zari is metallic yarn and requires special care.</p>
                    <ul className="rex-fibre-list">
                      <li>Avoid perfume or direct moisture contact</li>
                      <li>Keep away from damp environments</li>
                      <li>Wrap in soft cotton when storing</li>
                      <li>Do not iron directly over zari; use protective layering</li>
              </ul>
                    <p className="rex-fibre-full-p">
                      Metallic threads can tarnish with humidity and chemical exposure. Prevention is better than restoration.
                    </p>
                  </article>

                  <article className="rex-ow-tab-block">
                    <h3 className="rex-fibre-sub-h">WHEN TO DRY CLEAN</h3>
                    <p className="rex-fibre-full-p">
                      Dry cleaning is not required after every wear. It is recommended after heavy perspiration, dust exposure, pollution, or before long-term storage. For light wear, airing in shade or gentle spot cleaning is often sufficient.
                    </p>
                    <p className="rex-fibre-full-p">
                      When stored correctly, refolded periodically, and cleaned responsibly, a saree maintains structure, sheen, and emotional value for decades.
                    </p>
                  </article>

                  <article className="rex-ow-tab-block rex-ow-design-center">
                    <p className="rex-fibre-full-p">We design for durability.<br />We guide for preservation.</p>
                    <p className="rex-fibre-full-p">Refined at every stage before it reaches you.</p>
                    <p className="rex-fibre-full-p rex-ow-cs-final">
                      What emerges is not just attire, but a precisely structured creation that feels considered, rare, and worth anticipating.
                    </p>
                  </article>
              </article>
            </div>
          </section>

          {/* Optional overview copy removed to match the new inner-page layout */}

          <nav className="rex-fibre-footer-cta rex-fibre-footer-nav" aria-label="Education module navigation">
            <a href="/#journey" className="rex-btn rex-btn-edu-nav">← Previous: Education Hub</a>
            <a href="/education/body-compatibility" className="rex-btn rex-btn-edu-nav">Next: Body Compatibility →</a>
          </nav>
        </div>
      </main>
      <Footer />
    </>
  );
}

