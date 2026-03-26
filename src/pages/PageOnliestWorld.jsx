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
                      <h3 className="rex-fibre-sub-h">Plain Weave</h3>
                      <p className="rex-fibre-full-p">
                        The plain weave is a study in perfect balance. By alternating the thread in a simple over-under sequence, the artisan creates a textile of integrity and breathability.
                      </p>
                    </article>

                    <article className="rex-ow-ti-weave-card">
                      <figure className="rex-ow-ti-mini-fig">
                        <img src="https://res.cloudinary.com/djlqifbxp/image/upload/v1774509647/ds-9_wyiqi2.png" alt="Twill weave rhythm" loading="lazy" />
                      </figure>
                      <h3 className="rex-fibre-sub-h">Twill Weave</h3>
                      <p className="rex-fibre-full-p">
                        A twill weave introduces a subtle diagonal rhythm. By offsetting interlacing points, the weaver creates a stronger but more fluid fabric that follows the body with instinctive ease.
                      </p>
                    </article>
                  </section>

                  <article className="rex-ow-tab-block">
                    <figure className="rex-ow-tab-figure">
                      <img src="https://res.cloudinary.com/djlqifbxp/image/upload/v1774517844/edu-fibre_ffsidq.jpg" alt="Satin and jacquard weave references" loading="lazy" />
                    </figure>
                    <h3 className="rex-fibre-sub-h">Satin Weave and the Programmed Masterpiece</h3>
                    <p className="rex-fibre-full-p">
                      In the pursuit of luminous finish, satin weave uses long floating yarn paths that minimize interruption of light and create liquid-like sheen. In jacquard, motifs are woven directly into the cloth through controlled thread programming, producing dimensional forms with structural authority.
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
                    <h3 className="rex-fibre-sub-h">The Physics of Pigment and Light</h3>
                    <p className="rex-fibre-full-p">
                      Color behavior is dictated by the textile surface. Deep tones on high-sheen satin create reflective depth, while matte cotton and hand-spun textures absorb light and produce intellectual softness.
                    </p>
                    <ul className="rex-fibre-list">
                      <li><strong>Luminous Jewel Tones:</strong> Engineered for high-intensity lighting where emeralds, rubies, and sapphires retain depth.</li>
                      <li><strong>Matte Neutrals and Earth Tones:</strong> Calibrated for daylight and outdoor settings, harmonizing with natural shadows.</li>
                      <li><strong>Cultural Interface:</strong> Floral, geometric, and symbolic motifs act as visual scripts rooted in heritage and occasion.</li>
                    </ul>
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

