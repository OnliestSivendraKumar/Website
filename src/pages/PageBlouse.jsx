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

