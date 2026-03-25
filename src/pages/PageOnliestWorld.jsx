import { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const PAGE_TITLE = 'Onliest World — Education Hub | Onliest';
const PAGE_DESCRIPTION =
  'Explore Onliest World: textile intelligence, silhouette composition, design systems, prototyping, production quality, and longevity.';

export default function PageOnliestWorld() {
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
                <img src="/ds-1.png" alt="" loading="lazy" />
              </figure>
              <figure className="rex-ow-tile rex-ow-tile--b">
                <img src="/ds-2.png" alt="" loading="lazy" />
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
                <img src="/ds-4.png" alt="" loading="lazy" />
              </figure>
              <figure className="rex-ow-tile rex-ow-tile--h">
                <img src="/ds-9.png" alt="" loading="lazy" />
              </figure>
              <figure className="rex-ow-tile rex-ow-tile--i">
                <img src="/edu-fibre.jpg" alt="" loading="lazy" />
              </figure>
            </div>

            <div className="rex-ow-list-wrap" aria-label="Onliest World pillars">
              <ul className="rex-ow-list">
                <li>Textile intelligence</li>
                <li>Composed silhouette</li>
                <li>Design</li>
                <li>3D prototype</li>
                <li>Production and quality check</li>
                <li>Storage and longevity</li>
              </ul>
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

