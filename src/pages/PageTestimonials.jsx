import { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { REVIEWS } from '../data/reviews';
import { TESTIMONIALS_PAGE_CONTENT } from '../data/testimonialsPageContent';

const { seo, hero, stats, sectionTitle, cta } = TESTIMONIALS_PAGE_CONTENT;

function Stars({ rating = 5 }) {
  return (
    <div aria-label={`${rating} star rating`} className="rex-testimonials-stars">
      {Array.from({ length: 5 }, (_, i) => (
        <span key={i} aria-hidden="true">{i < rating ? '★' : '☆'}</span>
      ))}
    </div>
  );
}

export default function PageTestimonials() {
  useEffect(() => {
    const prevTitle = document.title;
    const metaDesc = document.querySelector('meta[name="description"]');
    const prevDesc = metaDesc?.getAttribute('content') || '';
    document.title = seo.title;
    if (metaDesc) metaDesc.setAttribute('content', seo.description);
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
            <p className="rex-page-eyebrow rex-page-eyebrow--center">{hero.eyebrow}</p>
            <h1 className="rex-page-hero-title rex-page-hero-title--center">{hero.title}</h1>
            <div className="rex-page-hero-intro">
              <div className="rex-page-hero-intro-col">
                <p>{hero.introLeft}</p>
              </div>
              <div className="rex-page-hero-intro-col">
                <p>{hero.introRight}</p>
              </div>
            </div>
            <div className="rex-testimonials-stats">
              {stats.map((item) => (
                <div key={item.id} className="rex-testimonials-stat">
                  <strong>{item.value}</strong>
                  <span>{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </header>

        <section className="rex-page-section" aria-labelledby="testimonials-list">
          <div className="rex-page-container rex-page-container--wide">
            <h2 id="testimonials-list" className="rex-page-section-title rex-page-section-title--center">{sectionTitle}</h2>
            <div className="rex-testimonials-grid">
              {REVIEWS.map((item) => (
                <article key={item.id} className="rex-testimonial-card">
                  <div className="rex-testimonial-head">
                    <img src={item.image} alt={item.name} loading="lazy" />
                    <div>
                      <h3>{item.name}</h3>
                      <p>{item.location}</p>
                      <Stars rating={item.rating} />
                    </div>
                  </div>
                  <p className="rex-testimonial-tag">{item.tag}</p>
                  <blockquote>{item.quote}</blockquote>
                </article>
              ))}
            </div>
            <article className="rex-testimonials-cta">
              <h3>{cta.title}</h3>
              <p>{cta.body}</p>
              <a className="rex-testimonials-cta-link" href={cta.actionHref}>
                {cta.actionLabel}
              </a>
            </article>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

