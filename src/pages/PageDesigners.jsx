import { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { DESIGNERS } from '../data/designers';

const PAGE_TITLE = 'Designers | Onliest';
const PAGE_DESCRIPTION =
  'Meet the designers behind Onliest. Browse profiles, specialties, and collections of saree and blouse designers.';

const PAGE_SIZE = 9;

function DesignerCard({ designer }) {
  return (
    <article className="rex-designers-card">
      <Link to={`/designers/${designer.id}`} className="rex-designers-card-link">
        <div className="rex-designers-card-image-wrap">
          <img
            src={designer.image}
            alt={designer.imageAlt || designer.name}
            className="rex-designers-card-image"
            loading="lazy"
          />
        </div>
        <div className="rex-designers-card-body">
          <h3 className="rex-designers-card-name">{designer.name}</h3>
          <p className="rex-designers-card-specialty">{designer.specialty}</p>
          <div className="rex-designers-card-meta">
            <span className="rex-designers-card-rating">★ {designer.rating.toFixed(1)}</span>
            <span className="rex-designers-card-collections">{designer.collections} collections</span>
          </div>
        </div>
      </Link>
      <div className="rex-designers-card-actions">
        <a href="/contact" className="rex-btn rex-btn-primary rex-designers-card-book">
          Book Now
        </a>
      </div>
    </article>
  );
}

export default function PageDesigners() {
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    document.title = PAGE_TITLE;
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute('content', PAGE_DESCRIPTION);
  }, []);

  useEffect(() => {
    setPage(1);
  }, [search]);

  useEffect(() => {
    setIsAnimating(true);
    const t = setTimeout(() => setIsAnimating(false), 220);
    return () => clearTimeout(t);
  }, [search, page]);

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase();
    if (!q) return DESIGNERS;
    return DESIGNERS.filter(
      (d) =>
        d.name.toLowerCase().includes(q) ||
        d.specialty.toLowerCase().includes(q) ||
        (d.location && d.location.toLowerCase().includes(q)),
    );
  }, [search]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const clampedPage = Math.min(page, totalPages);
  const start = (clampedPage - 1) * PAGE_SIZE;
  const visible = filtered.slice(start, start + PAGE_SIZE);

  return (
    <>
      <Header hideOnPanels={false} />
      <main className="rex-page-inner rex-designers-page" id="main-content" role="main">
        <section className="rex-designers-hero" aria-label="Designers hero">
          <div className="rex-designers-hero-inner">
            <header className="rex-designers-hero-copy">
              <h1 className="rex-page-hero-title rex-page-hero-title--center">Designers</h1>
              <p className="rex-designers-hero-subtitle">
                Meet the talent behind our saree and blouse collections. Explore profiles and shop their designs.
              </p>
            </header>
            <div className="rex-designers-search-wrap">
              <input
                type="search"
                className="rex-designers-search-input"
                placeholder="Search by name, specialty, location…"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                aria-label="Search designers"
              />
            </div>
          </div>
        </section>

        <section className="rex-designers-section" aria-label="All designers">
          <div className="rex-designers-section-inner">
            <header className="rex-designers-section-header">
              <h2 className="rex-designers-section-title">All Designers</h2>
              <p className="rex-designers-section-subtitle">
                {filtered.length} designer{filtered.length !== 1 ? 's' : ''} found
              </p>
            </header>
            <div className={`rex-designers-grid${isAnimating ? ' is-animating' : ''}`}>
              {visible.map((designer) => (
                <DesignerCard key={designer.id} designer={designer} />
              ))}
            </div>
            {totalPages > 1 && (
              <nav className="rex-designers-pagination" aria-label="Designers pages">
                <button
                  type="button"
                  className="rex-designers-page-btn"
                  onClick={() => setPage((p) => Math.max(1, p - 1))}
                  disabled={clampedPage === 1}
                >
                  Previous
                </button>
                {Array.from({ length: totalPages }).map((_, i) => {
                  const idx = i + 1;
                  const isActive = idx === clampedPage;
                  return (
                    <button
                      key={idx}
                      type="button"
                      className={`rex-designers-page-btn rex-designers-page-btn--num${isActive ? ' is-active' : ''}`}
                      onClick={() => setPage(idx)}
                      aria-current={isActive ? 'page' : undefined}
                    >
                      {idx}
                    </button>
                  );
                })}
                <button
                  type="button"
                  className="rex-designers-page-btn"
                  onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                  disabled={clampedPage === totalPages}
                >
                  Next
                </button>
              </nav>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
