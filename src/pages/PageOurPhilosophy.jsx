import { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const PAGE_TITLE = 'Our Philosophy — Onliest';
const PAGE_DESCRIPTION =
  'Discover the Onliest philosophy: design with intention, structural elegance, cultural continuity, and lasting value.';

const PILLARS = [
  {
    title: 'Design With Intention',
    body:
      'We do not treat design as decoration alone. Every neckline, border, motif, and proportion is selected to serve both expression and structure.',
  },
  {
    title: 'Beauty With Engineering',
    body:
      'A garment should move well, sit well, and endure well. We combine silhouette logic, fit calibration, and material behavior to make beauty dependable.',
  },
  {
    title: 'Tradition With Relevance',
    body:
      'Heritage techniques are not preserved as nostalgia; they are translated for modern life. We respect craft while adapting it to contemporary needs.',
  },
  {
    title: 'Transparency With Trust',
    body:
      'From fibre choice to finishing protocol, we believe in clear standards. Clients should know how a garment is made and why each decision matters.',
  },
  {
    title: 'Longevity Over Excess',
    body:
      'We value garments that remain meaningful over time. Durability, care guidance, and structural discipline are part of the design from day one.',
  },
];

export default function PageOurPhilosophy() {
  useEffect(() => {
    const prevTitle = document.title;
    const metaDesc = document.querySelector('meta[name="description"]');
    const prevDesc = metaDesc?.getAttribute('content') || '';
    document.title = PAGE_TITLE;
    if (metaDesc) metaDesc.setAttribute('content', PAGE_DESCRIPTION);
    return () => {
      document.title = prevTitle;
      if (metaDesc) metaDesc.setAttribute('content', prevDesc);
    };
  }, []);

  return (
    <>
      <Header hideOnPanels={false} />
      <main className="rex-page-inner rex-page-inner--story" id="main-content" role="main">
        <header className="rex-page-hero rex-page-hero--story">
          <div className="rex-page-container">
            <h1 className="rex-page-hero-title rex-page-hero-title--center">Our Philosophy</h1>
            <div className="rex-page-hero-intro">
              <div className="rex-page-hero-intro-col">
                <p>
                  At Onliest, philosophy is practical. We believe elegance should be intentional, measurable, and
                  deeply personal to the wearer.
                </p>
              </div>
              <div className="rex-page-hero-intro-col">
                <p>
                  Every collection reflects a balance between artistry and engineering, heritage and innovation,
                  individuality and structure.
                </p>
              </div>
            </div>
          </div>
        </header>

        <section className="rex-page-section rex-page-section--services" aria-labelledby="philosophy-pillars">
          <div className="rex-page-container rex-page-container--wide">
            <h2 id="philosophy-pillars" className="rex-page-section-title rex-page-section-title--center">
              Core Principles
            </h2>
            <div className="rex-page-services-grid">
              {PILLARS.map((pillar) => (
                <article key={pillar.title} className="rex-page-services-cell rex-page-service-card rex-page-service-card--dark">
                  <h3 className="rex-page-service-card-title">{pillar.title}</h3>
                  <p>{pillar.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

