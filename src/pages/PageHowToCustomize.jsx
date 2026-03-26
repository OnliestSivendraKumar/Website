import { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const PAGE_TITLE = 'How to Customize — Onliest';
const PAGE_DESCRIPTION =
  'Learn how to customize your Onliest saree: measurements, silhouette choices, blouse details, ornamentation, and final approval.';

const CUSTOMIZE_STEPS = [
  {
    title: '1. Share Your Occasion and Style',
    body:
      'Start with your event type, style preference, and comfort expectations. This gives us the design direction before we map any technical details.',
  },
  {
    title: '2. Define Measurements and Fit',
    body:
      'We capture body measurements and movement needs so the drape, blouse structure, and support zones are engineered for your shape.',
  },
  {
    title: '3. Select Design Components',
    body:
      'Choose blouse neckline, sleeve type, back depth, border scale, and pallu behavior. Each choice is guided so aesthetics and function stay balanced.',
  },
  {
    title: '4. Finalize Fabric and Ornamentation',
    body:
      'Confirm weave, finish, motif density, and embellishment placement. This step ensures visual richness without adding unnecessary weight.',
  },
  {
    title: '5. Review and Approve',
    body:
      'You receive a final design summary before production. Once approved, we execute with quality checkpoints and delivery readiness.',
  },
];

export default function PageHowToCustomize() {
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
            <h1 className="rex-page-hero-title rex-page-hero-title--center">How to Customize</h1>
            <div className="rex-page-hero-intro">
              <div className="rex-page-hero-intro-col">
                <p>
                  Customization at Onliest is a structured process, not random editing. We help you personalize every element
                  while preserving silhouette logic and wearable elegance.
                </p>
              </div>
              <div className="rex-page-hero-intro-col">
                <p>
                  From fit architecture to ornamentation intensity, each decision is reviewed through design and engineering so
                  the final saree looks refined and feels right.
                </p>
              </div>
            </div>
          </div>
        </header>

        <section className="rex-page-section rex-page-section--services" aria-labelledby="customize-steps">
          <div className="rex-page-container rex-page-container--wide">
            <h2 id="customize-steps" className="rex-page-section-title rex-page-section-title--center">
              Customization Flow
            </h2>
            <div className="rex-page-services-grid">
              {CUSTOMIZE_STEPS.map((step) => (
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

