import { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const PAGE_TITLE = 'How We Work — Onliest';
const PAGE_DESCRIPTION =
  'Learn how Onliest works: discovery, design architecture, prototyping, quality checks, and delivery.';

const STEPS = [
  {
    title: '1. Discovery',
    body:
      'We start by understanding your style intent, occasion, fit preferences, and silhouette goals. This creates a clear creative and technical brief.',
  },
  {
    title: '2. Design Architecture',
    body:
      'Our team maps colour logic, border proportions, blouse support, and ornamentation balance so the garment is visually refined and structurally stable.',
  },
  {
    title: '3. Prototype and Fit Logic',
    body:
      'We calibrate measurements, movement needs, and drape behaviour with technical checkpoints. Every adjustment is made to preserve comfort and elegance.',
  },
  {
    title: '4. Production and Quality',
    body:
      'Fabric, weave consistency, finish quality, and support detailing are inspected stage by stage. Only verified pieces move to final release.',
  },
  {
    title: '5. Delivery and Care Guidance',
    body:
      'Your saree is prepared for long-term durability with handling and storage recommendations, so it maintains structure, sheen, and value over time.',
  },
];

export default function PageHowWeWork() {
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
            <h1 className="rex-page-hero-title rex-page-hero-title--center">How We Work</h1>
            <div className="rex-page-hero-intro">
              <div className="rex-page-hero-intro-col">
                <p>
                  At Onliest, every saree is built through a guided system that combines aesthetics with engineering.
                  We treat design decisions as technical decisions too — so beauty is wearable, stable, and enduring.
                </p>
              </div>
              <div className="rex-page-hero-intro-col">
                <p>
                  From first brief to final quality checks, our process is transparent and measurable. You get clarity
                  at each stage and a garment that is crafted with intention.
                </p>
              </div>
            </div>
          </div>
        </header>

        <section className="rex-page-section rex-page-section--services" aria-labelledby="how-work-steps">
          <div className="rex-page-container rex-page-container--wide">
            <h2 id="how-work-steps" className="rex-page-section-title rex-page-section-title--center">
              Process Overview
            </h2>
            <div className="rex-page-services-grid">
              {STEPS.map((step) => (
                <article key={step.title} className="rex-page-services-cell rex-page-service-card rex-page-service-card--dark">
                  <h3 className="rex-page-service-card-title">{step.title}</h3>
                  <p>{step.body}</p>
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

