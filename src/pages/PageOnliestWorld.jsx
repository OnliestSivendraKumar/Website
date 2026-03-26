import { useEffect, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const PAGE_TITLE = 'Onliest World — Education Hub | Onliest';
const PAGE_DESCRIPTION =
  'Explore Onliest World: textile intelligence, silhouette composition, design systems, prototyping, production quality, and longevity.';

export default function PageOnliestWorld() {
  const TABS = [
    { id: 'textile-intelligence', label: 'Textile intelligence' },
    { id: 'composed-silhouette', label: 'Composed silhouette' },
    { id: 'design', label: 'Design' },
    { id: 'prototype-3d', label: '3D prototype' },
    { id: 'production-quality', label: 'Production and quality check' },
    { id: 'storage-longevity', label: 'Storage and longevity' },
  ];
  const [activeTab, setActiveTab] = useState(TABS[0].id);
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

          <section className="rex-ow-tabs-block" aria-label="Onliest World topics">
            <div className="rex-ow-tabs" role="tablist" aria-label="Onliest World tabs">
              {TABS.map((tab) => (
                <button
                  key={tab.id}
                  type="button"
                  role="tab"
                  aria-selected={activeTab === tab.id}
                  className={`rex-ow-tab${activeTab === tab.id ? ' is-active' : ''}`}
                  onClick={() => setActiveTab(tab.id)}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            <div className="rex-ow-tab-panel" role="tabpanel">
              <h2 className="rex-fibre-section-title">
                {TABS.find((t) => t.id === activeTab)?.label}
              </h2>

              {activeTab === 'textile-intelligence' ? (
                <div className="rex-ow-tab-article">
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
                </div>
              ) : activeTab === 'composed-silhouette' ? (
                <div className="rex-ow-tab-article rex-ow-cs-article">
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
                </div>
              ) : (
                <p className="rex-fibre-full-p">
                  Content placeholder for this tab is ready. Share the content for this topic and I will add it here.
                </p>
              )}
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

