import { useEffect, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { MERCH_PRODUCTS } from '../data/merchandise';

const PAGE_TITLE = 'Merchandise — Onliest';
const PAGE_DESCRIPTION =
  'Shop Onliest merchandise: gift cards, saree clips, hair bands, mugs, caps, and belts. Take a piece of the brand home.';

const CATEGORIES = [
  { id: 'all', label: 'All' },
  { id: 'gift-cards', label: 'Gift Cards' },
  { id: 'saree-clips', label: 'Saree Clips' },
  { id: 'hair-bands', label: 'Hair Bands' },
  { id: 'coffee-mugs', label: 'Coffee Mugs' },
  { id: 'caps', label: "Women's Caps" },
  { id: 'belts', label: "Women's Belts" },
];

export default function PageMerchandise() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [isAnimating, setIsAnimating] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    document.title = PAGE_TITLE;
    const meta = document.querySelector('meta[name="description"]');
    const prev = meta?.getAttribute('content') || '';
    if (meta) meta.setAttribute('content', PAGE_DESCRIPTION);
    return () => {
      document.title = 'Onliest';
      const d = document.querySelector('meta[name="description"]');
      if (d) d.setAttribute('content', prev);
    };
  }, []);

  useEffect(() => {
    setIsAnimating(true);
    const t = setTimeout(() => setIsAnimating(false), 220);
    return () => clearTimeout(t);
  }, [activeCategory]);

  const filtered = useMemo(() => {
    if (activeCategory === 'all') return MERCH_PRODUCTS;
    return MERCH_PRODUCTS.filter((p) => p.category === activeCategory);
  }, [activeCategory]);

  return (
    <>
      <Header hideOnPanels={false} />
      <main className="rex-page-inner rex-page-inner--story rex-merch-page" id="main-content" role="main">
        <header className="rex-page-hero rex-page-hero--story" aria-labelledby="merch-heading">
          <div className="rex-page-container rex-page-container--narrow">
            <h1 id="merch-heading" className="rex-page-hero-title rex-page-hero-title--center">
              Merchandise
            </h1>
            <p className="rex-merch-hero-subtitle">
              Take a piece of Onliest home — gift cards, accessories, and curated brand essentials.
            </p>
          </div>
        </header>

        <section className="rex-page-section rex-merch-section" aria-label="Merchandise catalog">
          <div className="rex-page-container rex-page-container--wide">
            <div className="rex-merch-tabs-wrap">
              <div className="rex-merch-tabs" role="tablist" aria-label="Filter by category">
                {CATEGORIES.map((cat) => {
                  const isActive = activeCategory === cat.id;
                  return (
                    <button
                      key={cat.id}
                      type="button"
                      role="tab"
                      aria-selected={isActive}
                      className={`rex-merch-tab${isActive ? ' is-active' : ''}`}
                      onClick={() => setActiveCategory(cat.id)}
                    >
                      {cat.label}
                    </button>
                  );
                })}
              </div>
            </div>

            <div className={`rex-merch-grid${isAnimating ? ' is-animating' : ''}`}>
              {filtered.map((product) => (
                <article
                  key={product.id}
                  className="rex-merch-card"
                  onClick={() => navigate(`/merchandise/${product.id}`)}
                >
                  <div className="rex-merch-card-media">
                    <img src={product.image} alt={product.name} loading="lazy" />
                  </div>
                    <div className="rex-merch-card-body">
                      <h3 className="rex-merch-card-title">{product.name}</h3>
                      <div className="rex-merch-card-row">
                        {product.subtitle && (
                          <span className="rex-merch-card-subtitle rex-merch-card-subtitle--truncate">
                            {product.subtitle}
                          </span>
                        )}
                        {product.price && (
                          <span className="rex-merch-card-price">{product.price}</span>
                        )}
                      </div>
                    <button
                      type="button"
                      className="rex-btn rex-btn-primary rex-merch-card-cta"
                      onClick={(e) => {
                        e.stopPropagation();
                        navigate(`/merchandise/${product.id}`);
                      }}
                    >
                      View details
                    </button>
                  </div>
                </article>
              ))}
            </div>

            {filtered.length === 0 && (
              <p className="rex-merch-empty">No products in this category yet. Check back soon.</p>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
