import { useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { getDesignerById } from '../data/designers';

function ArrowRightIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  );
}

export default function PageDesignerDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const designer = id ? getDesignerById(id) : null;

  useEffect(() => {
    const prevTitle = document.title;
    const metaDesc = document.querySelector('meta[name="description"]');
    const prevDesc = metaDesc?.getAttribute('content') || '';

    if (designer) {
      document.title = `${designer.name} — Designer | Onliest`;
      if (metaDesc && designer.bio) {
        metaDesc.setAttribute('content', designer.bio.slice(0, 160));
      }
    }

    return () => {
      document.title = prevTitle;
      const d = document.querySelector('meta[name="description"]');
      if (d) d.setAttribute('content', prevDesc);
    };
  }, [designer]);

  if (!designer) {
    return (
      <>
        <Header hideOnPanels={false} />
        <main className="rex-page-inner rex-designer-detail-page" id="main-content" role="main">
          <section className="rex-designer-detail-not-found">
            <div className="rex-designer-detail-shell">
              <h1 className="rex-page-hero-title">Designer not found</h1>
              <p className="rex-designer-detail-sub">
                The designer you are looking for is not available or may have been removed.
              </p>
              <button type="button" className="rex-btn rex-btn-primary" onClick={() => navigate('/designers')}>
                Back to all designers
              </button>
            </div>
          </section>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header hideOnPanels={false} />
      <main className="rex-page-inner rex-designer-detail-page" id="main-content" role="main">
        <div className="rex-designer-detail-shell">
          <nav className="rex-designer-detail-breadcrumb" aria-label="Breadcrumb">
            <Link to="/designers">Designers</Link>
            <span className="rex-designer-detail-breadcrumb-sep" aria-hidden="true">/</span>
            <span>{designer.name}</span>
          </nav>

          <header className="rex-designer-detail-hero">
            <div className="rex-designer-detail-hero-media">
              <img
                src={designer.image}
                alt={designer.imageAlt || designer.name}
                className="rex-designer-detail-hero-image"
              />
            </div>
            <div className="rex-designer-detail-hero-copy">
              <h1 className="rex-page-hero-title rex-designer-detail-name">{designer.name}</h1>
              <p className="rex-designer-detail-specialty">{designer.specialty}</p>
              {designer.location && (
                <p className="rex-designer-detail-location">{designer.location}</p>
              )}
              <div className="rex-designer-detail-meta">
                <span className="rex-designer-detail-rating">★ {designer.rating.toFixed(1)}</span>
                <span className="rex-designer-detail-reviews">{designer.reviewCount} reviews</span>
                <span className="rex-designer-detail-collections">{designer.collections} collections</span>
              </div>
              {designer.bio && <p className="rex-designer-detail-bio">{designer.bio}</p>}
              <div className="rex-designer-detail-cta">
                <Link to="/marketplace" className="rex-btn rex-btn-primary">
                  View all designs
                  <ArrowRightIcon />
                </Link>
                <a href="/contact" className="rex-btn rex-btn-ghost rex-designer-detail-book">
                  Book Now
                </a>
              </div>
            </div>
          </header>

          <section className="rex-designer-detail-section" aria-label="More from this designer">
            <h2 className="rex-designer-detail-section-title">Shop on Marketplace</h2>
            <p className="rex-designer-detail-section-sub">
              Browse sarees and blouses by {designer.name} in the Marketplace.
            </p>
            <Link to="/marketplace" className="rex-btn rex-btn-ghost rex-designer-detail-marketplace-link">
              Go to Marketplace
              <ArrowRightIcon />
            </Link>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
