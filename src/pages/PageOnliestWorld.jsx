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
      <main className="rex-page-inner rex-fibre-page" id="main-content" role="main">
        <div className="rex-fibre-shell">
          <header className="rex-fibre-header">
            <p className="rex-page-eyebrow">Education Hub</p>
            <h1 className="rex-fibre-title">Onliest World</h1>
          </header>

          <section className="rex-fibre-section rex-fibre-full-section" aria-label="Onliest world overview">
            <p className="rex-fibre-full-p">
              Textiles and garments begin their journey at the level of fibre, where raw materials are transformed into
              yarns and then fabrics through weaving and construction techniques. Fabric develops character through
              texture, structure, and drape, while surface methods such as embroidery, zari, prints, applique, and
              beads add visual richness.
            </p>
            <p className="rex-fibre-full-p">
              Onliest World brings traditional textile knowledge and modern technology together. It helps study fabric
              behavior, design structures, silhouette composition, prototyping workflows, production quality checks, and
              storage longevity in one continuous system.
            </p>
          </section>

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

