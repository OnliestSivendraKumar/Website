import { useEffect, useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const MARKETPLACE_ITEMS = [
  {
    id: 'royal-silk-gok',
    title: 'Royal Silk Saree with Gokulam Border',
    designer: 'Ananya Reddy',
    rating: 4.9,
    reviews: 234,
    price: '1250',
    tag: 'Featured',
    tagColor: 'red',
    image: 'https://res.cloudinary.com/djlqifbxp/image/upload/v1774509290/ds-1_ao4fyf.png',
    category: 'sarees',
  },
  {
    id: 'modern-fusion-blouse',
    title: 'Modern Fusion Blouse Design',
    designer: 'Ravi Kumar',
    rating: 4.8,
    reviews: 189,
    price: '350',
    tag: 'New',
    tagColor: 'green',
    image: 'https://res.cloudinary.com/djlqifbxp/image/upload/v1774509290/ds-3_maibel.png',
    category: 'blouses',
  },
  {
    id: 'banarasi-traditional',
    title: 'Traditional Banarasi Saree',
    designer: 'Priya Sharma',
    rating: 5,
    reviews: 156,
    price: '1500',
    tag: 'Premium',
    tagColor: 'blue',
    image: 'https://res.cloudinary.com/djlqifbxp/image/upload/v1774509290/ds-2_n5rdtx.png',
    category: 'sarees',
  },
  {
    id: 'floral-pink-saree',
    title: 'Floral Pink Saree – Summer Collection',
    designer: 'Meera Iyer',
    rating: 4.7,
    reviews: 98,
    price: '890',
    tag: 'Trending',
    tagColor: 'red',
    image: 'https://res.cloudinary.com/djlqifbxp/image/upload/v1774509539/ds-4_gia6xv.png',
    category: 'sarees',
  },
  {
    id: 'elegant-designer-blouse',
    title: 'Elegant Designer Blouse with Mirror Work',
    designer: 'Saanvi Patel',
    rating: 4.9,
    reviews: 167,
    price: '420',
    tag: 'Popular',
    tagColor: 'green',
    image: '/ds-5.png',
    category: 'blouses',
  },
  {
    id: 'contemporary-crop',
    title: 'Contemporary Crop Blouse',
    designer: 'Divya Menon',
    rating: 4.6,
    reviews: 89,
    price: '280',
    tag: 'New',
    tagColor: 'blue',
    image: '/ds-6.png',
    category: 'blouses',
  },
];

const FILTERS = [
  { id: 'all', label: 'All Designs' },
  { id: 'sarees', label: 'Sarees' },
  { id: 'blouses', label: 'Blouses' },
];

const PAGE_SIZE = 9;

function MarketplaceCard({ item }) {
  return (
    <article className="rex-mp-card rex-mp-page-card">
      <div className="rex-mp-card-image-wrap">
        <img src={item.image} alt={item.title} className="rex-mp-card-image" loading="lazy" />
        {item.tag && (
          <span className={`rex-mp-card-tag rex-mp-card-tag--${item.tagColor || 'red'}`}>
            {item.tag}
          </span>
        )}
      </div>
      <div className="rex-mp-card-body">
        <h3 className="rex-mp-card-title">{item.title}</h3>
        <div className="rex-mp-card-meta">
          <span className="rex-mp-card-designer">by {item.designer}</span>
          <span className="rex-mp-card-rating">
            ★ {item.rating.toFixed(1)} ({item.reviews})
          </span>
        </div>
        <div className="rex-mp-card-footer">
          <span className="rex-mp-card-price">${item.price}</span>
          <button type="button" className="rex-btn rex-btn-primary rex-mp-card-cta">
            Buy Now
          </button>
        </div>
      </div>
    </article>
  );
}

export default function PageMarketplace() {
  const [searchParams, setSearchParams] = useSearchParams();
  const qFromUrl = searchParams.get('q') ?? '';
  const [activeFilter, setActiveFilter] = useState('all');
  const [search, setSearch] = useState(qFromUrl);
  const [sort, setSort] = useState('featured');
  const [page, setPage] = useState(1);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    setSearch(qFromUrl);
  }, [qFromUrl]);

  useEffect(() => {
    document.title = 'Marketplace | Onliest';
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute(
        'content',
        'Discover curated sarees and blouse designs from the Onliest community. Filter by category, browse featured looks and shop designs that fit you.',
      );
    }
  }, []);

  useEffect(() => {
    setPage(1);
  }, [activeFilter, search]);

  useEffect(() => {
    setIsAnimating(true);
    const timer = setTimeout(() => setIsAnimating(false), 220);
    return () => clearTimeout(timer);
  }, [activeFilter, search, sort, page]);

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase();
    let items = MARKETPLACE_ITEMS;
    if (activeFilter !== 'all') {
      items = items.filter((it) => it.category === activeFilter);
    }
    if (q) {
      items = items.filter(
        (it) =>
          it.title.toLowerCase().includes(q) ||
          it.designer.toLowerCase().includes(q),
      );
    }
    if (sort === 'price-low') {
      items = [...items].sort(
        (a, b) => Number(a.price.replace(/,/g, '')) - Number(b.price.replace(/,/g, '')),
      );
    } else if (sort === 'price-high') {
      items = [...items].sort(
        (a, b) => Number(b.price.replace(/,/g, '')) - Number(a.price.replace(/,/g, '')),
      );
    } else if (sort === 'rating') {
      items = [...items].sort((a, b) => b.rating - a.rating);
    }
    return items;
  }, [activeFilter, search, sort]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const clampedPage = Math.min(page, totalPages);
  const start = (clampedPage - 1) * PAGE_SIZE;
  const visible = filtered.slice(start, start + PAGE_SIZE);

  return (
    <>
      <Header hideOnPanels={false} />
      <main className="rex-page-inner rex-page-inner--story rex-mp-page" id="main-content" role="main">
        <section className="rex-mp-page-hero" aria-label="Marketplace hero">
          <div className="rex-mp-page-hero-inner">
            <header className="rex-mp-page-hero-copy">
              <h1 className="rex-page-hero-title rex-page-hero-title--center">Marketplace</h1>
              <p className="rex-mp-page-subtitle">
                Discover sarees and blouses from the Onliest community, curated in one simple place.
              </p>
            </header>

            <div className="rex-mp-page-filters">
              <div className="rex-mp-page-tabs" role="tablist" aria-label="Filter by category">
                {FILTERS.map((f) => {
                  const isActive = activeFilter === f.id;
                  return (
                    <button
                      key={f.id}
                      type="button"
                      role="tab"
                      aria-selected={isActive}
                      className={`rex-mp-page-tab${isActive ? ' is-active' : ''}`}
                      onClick={() => setActiveFilter(f.id)}
                    >
                      {f.label}
                    </button>
                  );
                })}
              </div>
              <div className="rex-mp-page-controls">
                <div className="rex-mp-page-search">
                  <input
                    type="search"
                    className="rex-mp-page-search-input"
                    placeholder="Search designs, designers, occasions…"
                    value={search}
                    onChange={(e) => {
                      const v = e.target.value;
                      setSearch(v);
                      setSearchParams((prev) => {
                        const next = new URLSearchParams(prev);
                        if (v.trim()) next.set('q', v); else next.delete('q');
                        return next;
                      });
                    }}
                    aria-label="Search marketplace designs"
                  />
                </div>
                <div className="rex-mp-page-meta-row">
                  <label className="rex-mp-page-sort">
                    <span className="rex-mp-page-sort-label">Sort by</span>
                    <select
                      className="rex-mp-page-sort-select"
                      value={sort}
                      onChange={(e) => setSort(e.target.value)}
                    >
                      <option value="featured">Featured</option>
                      <option value="rating">Rating</option>
                      <option value="price-low">Price: Low to High</option>
                      <option value="price-high">Price: High to Low</option>
                    </select>
                  </label>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="rex-mp-page-section" aria-label="Marketplace designs">
          <div className="rex-mp-page-section-inner">
            <header className="rex-mp-page-section-header rex-mp-page-section-header--row">
              <div>
                <h2 className="rex-mp-page-section-title">
                  {activeFilter === 'all' ? 'Featured Designs' : `${FILTERS.find((f) => f.id === activeFilter)?.label || 'Designs'}`}
                </h2>
                <p className="rex-mp-page-section-subtitle">
                  {activeFilter === 'all'
                    ? 'Handpicked looks from the marketplace.'
                    : `Showing ${FILTERS.find((f) => f.id === activeFilter)?.label?.toLowerCase() || 'designs'} in the marketplace.`}
                </p>
              </div>
              <span className="rex-mp-page-count">
                Showing {visible.length} of {filtered.length} designs
              </span>
            </header>
            <div className={`rex-mp-page-grid${isAnimating ? ' is-animating' : ''}`}>
              {visible.map((item) => (
                <MarketplaceCard key={item.id} item={item} />
              ))}
            </div>
            <div className="rex-mp-page-pagination" aria-label="Marketplace pages">
              <button
                type="button"
                className="rex-mp-page-page-btn"
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
                    className={`rex-mp-page-page-btn rex-mp-page-page-btn--number${
                      isActive ? ' is-active' : ''
                    }`}
                    onClick={() => setPage(idx)}
                    aria-current={isActive ? 'page' : undefined}
                  >
                    {idx}
                  </button>
                );
              })}
              <button
                type="button"
                className="rex-mp-page-page-btn"
                onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                disabled={clampedPage === totalPages}
              >
                Next
              </button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

