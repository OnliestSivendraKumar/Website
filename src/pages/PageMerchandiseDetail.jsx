import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { MERCH_PRODUCTS } from '../data/merchandise';

function HeartIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
    </svg>
  );
}
function CompareIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <path d="M18 3L6 21M6 3l12 18" />
    </svg>
  );
}

export default function PageMerchandiseDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('description');

  const product = MERCH_PRODUCTS.find((p) => p.id === id);
  const productIndex = product ? MERCH_PRODUCTS.findIndex((p) => p.id === product.id) : -1;
  const prevProduct = productIndex > 0 ? MERCH_PRODUCTS[productIndex - 1] : null;
  const nextProduct = productIndex >= 0 && productIndex < MERCH_PRODUCTS.length - 1 ? MERCH_PRODUCTS[productIndex + 1] : null;

  useEffect(() => {
    if (!product) return;
    document.title = `${product.name} — Merchandise | Onliest`;
    const meta = document.querySelector('meta[name="description"]');
    const prev = meta?.getAttribute('content') || '';
    if (meta) meta.setAttribute('content', product.description || prev);
    return () => {
      document.title = 'Onliest';
      const d = document.querySelector('meta[name="description"]');
      if (d) d.setAttribute('content', prev);
    };
  }, [product]);

  if (!product) {
    return (
      <>
        <Header hideOnPanels={false} />
        <main className="rex-page-inner rex-page-inner--story rex-merch-page" id="main-content" role="main">
          <section className="rex-page-section rex-merch-section" aria-label="Merchandise item not found">
            <div className="rex-page-container rex-page-container--wide">
              <p className="rex-merch-empty">This item is no longer available. Please browse other merchandise.</p>
              <button
                type="button"
                className="rex-btn rex-btn-primary"
                onClick={() => navigate('/merchandise')}
              >
                Back to merchandise
              </button>
            </div>
          </section>
        </main>
        <Footer />
      </>
    );
  }

  const related = MERCH_PRODUCTS.filter(
    (p) => p.category === product.category && p.id !== product.id,
  ).slice(0, 4);

  const categoryLabel =
    { 'gift-cards': 'Gift Cards', 'saree-clips': 'Saree Clips', 'hair-bands': 'Hair Bands', 'coffee-mugs': 'Coffee Mugs', caps: "Women's Caps", belts: "Women's Belts" }[
      product.category
    ] || 'Merchandise';

  return (
    <>
      <Header hideOnPanels={false} />
      <main className="rex-page-inner rex-page-inner--story rex-merch-page" id="main-content" role="main">
        <header className="rex-page-hero rex-page-hero--story" aria-labelledby="merch-detail-heading">
          <div className="rex-page-container rex-page-container--wide rex-merch-detail-hero">
            <div className="rex-merch-detail-top-row">
              <nav className="rex-merch-breadcrumb" aria-label="Breadcrumb">
                <a href="/">Home</a>
                <span className="rex-merch-breadcrumb-sep" aria-hidden="true">›</span>
                <a href="/merchandise">Merchandise</a>
                <span className="rex-merch-breadcrumb-sep" aria-hidden="true">›</span>
                <span aria-current="page">{product.name}</span>
              </nav>
              <div className="rex-merch-detail-nav-arrows">
                {prevProduct && (
                  <button
                    type="button"
                    className="rex-merch-detail-arrow"
                    aria-label="Previous product"
                    onClick={() => navigate(`/merchandise/${prevProduct.id}`)}
                  >
                    ‹
                  </button>
                )}
                {nextProduct && (
                  <button
                    type="button"
                    className="rex-merch-detail-arrow"
                    aria-label="Next product"
                    onClick={() => navigate(`/merchandise/${nextProduct.id}`)}
                  >
                    ›
                  </button>
                )}
              </div>
            </div>
            <div className="rex-merch-detail-layout">
              <div className="rex-merch-detail-media">
                <img src={product.image} alt={product.name} loading="lazy" />
              </div>
              <div className="rex-merch-detail-body">
                <p className="rex-merch-detail-category">{categoryLabel}</p>
                <h1 id="merch-detail-heading" className="rex-merch-detail-title">
                  {product.name}
                </h1>
                <div className="rex-merch-detail-rating">
                  <span className="rex-merch-detail-stars" aria-hidden="true">★★★★☆</span>
                  <span className="rex-merch-detail-review-count">(0 customer reviews)</span>
                </div>
                {product.price && (
                  <div className="rex-merch-detail-price-wrap">
                    <span className="rex-merch-detail-price">{product.price}</span>
                  </div>
                )}
                {product.description && (
                  <p className="rex-merch-detail-excerpt">{product.description}</p>
                )}
                <div className="rex-merch-detail-actions">
                  <label className="rex-merch-detail-qty">
                    <span className="rex-merch-detail-qty-label">Quantity</span>
                    <input
                      type="number"
                      min={1}
                      max={99}
                      value={quantity}
                      onChange={(e) => setQuantity(Math.max(1, Math.min(99, Number(e.target.value) || 1)))}
                      className="rex-merch-detail-qty-input"
                      aria-label="Quantity"
                    />
                  </label>
                  <button type="button" className="rex-btn rex-btn-primary rex-merch-detail-cta">
                    Add to cart
                  </button>
                </div>
                <div className="rex-merch-detail-secondary-actions">
                  <button type="button" className="rex-merch-detail-wishlist">
                    <HeartIcon />
                    <span>Browse Wishlist</span>
                  </button>
                  <button type="button" className="rex-merch-detail-compare">
                    <CompareIcon />
                    <span>Add to compare</span>
                  </button>
                </div>
                <div className="rex-merch-detail-meta">
                  <p><strong>Categories:</strong> Merchandise, {categoryLabel}</p>
                  <p><strong>Tag:</strong> {product.category}</p>
                </div>
                <div className="rex-merch-detail-share">
                  <span className="rex-merch-detail-share-label">Share:</span>
                  <a href="#" aria-label="Share on Facebook" className="rex-merch-detail-share-icon">
                    <img src="/fb.svg" alt="" className="rex-footer-social-icon" />
                  </a>
                  <a href="#" aria-label="Share on Instagram" className="rex-merch-detail-share-icon">
                    <img src="/insta.svg" alt="" className="rex-footer-social-icon" />
                  </a>
                  <a href="#" aria-label="Share on LinkedIn" className="rex-merch-detail-share-icon">
                    <img src="/in.svg" alt="" className="rex-footer-social-icon" />
                  </a>
                </div>
              </div>
            </div>

            <div className="rex-merch-detail-tabs">
              <div className="rex-merch-detail-tab-list" role="tablist">
                <button
                  type="button"
                  role="tab"
                  aria-selected={activeTab === 'description'}
                  className={`rex-merch-detail-tab${activeTab === 'description' ? ' is-active' : ''}`}
                  onClick={() => setActiveTab('description')}
                >
                  Description
                </button>
                <button
                  type="button"
                  role="tab"
                  aria-selected={activeTab === 'reviews'}
                  className={`rex-merch-detail-tab${activeTab === 'reviews' ? ' is-active' : ''}`}
                  onClick={() => setActiveTab('reviews')}
                >
                  Reviews (0)
                </button>
              </div>
              <div className="rex-merch-detail-tab-panels">
                {activeTab === 'description' && (
                  <div className="rex-merch-detail-tab-panel" role="tabpanel">
                    {product.description && (
                      <p className="rex-merch-detail-description">{product.description}</p>
                    )}
                    {product.details && product.details.length > 0 && (
                      <ul className="rex-merch-detail-list">
                        {product.details.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                )}
                {activeTab === 'reviews' && (
                  <div className="rex-merch-detail-tab-panel" role="tabpanel">
                    <p className="rex-merch-detail-no-reviews">No reviews yet. Be the first to review this product.</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </header>

        {related.length > 0 && (
          <section className="rex-page-section rex-merch-related" aria-label="Related products">
            <div className="rex-page-container rex-page-container--wide">
              <h2 className="rex-merch-related-title">Related products</h2>
              <div className="rex-merch-grid">
                {related.map((item) => (
                  <article
                    key={item.id}
                    className="rex-merch-card rex-merch-related-card"
                    onClick={() => navigate(`/merchandise/${item.id}`)}
                  >
                    <div className="rex-merch-card-media">
                      <img src={item.image} alt={item.name} loading="lazy" />
                    </div>
                    <div className="rex-merch-card-body">
                      <div className="rex-merch-card-inline rex-merch-related-card-top">
                        <span className="rex-merch-related-card-cat">{categoryLabel}</span>
                        <span className="rex-merch-related-card-stars" aria-hidden="true">★★★★☆</span>
                      </div>
                      <div className="rex-merch-card-inline">
                        <span className="rex-merch-card-title">{item.name}</span>
                        {item.subtitle && (
                          <>
                            <span className="rex-merch-card-sep" aria-hidden="true"> · </span>
                            <span className="rex-merch-card-subtitle">{item.subtitle}</span>
                          </>
                        )}
                        {item.price && (
                          <>
                            <span className="rex-merch-card-sep" aria-hidden="true"> · </span>
                            <span className="rex-merch-card-price">{item.price}</span>
                          </>
                        )}
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
      <Footer />
    </>
  );
}

