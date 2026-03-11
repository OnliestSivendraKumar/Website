import { useState, useRef, useEffect } from 'react';

const PRODUCTS = [
  { id: 1, title: 'Mysore Silk Saree', designer: 'Ananya Reddy', rating: 4.9, reviews: 234, price: '18,500', tag: 'Trending', tagColor: 'red', image: '/ds-1.png' },
  { id: 2, title: 'Banarasi Heritage', designer: 'Ravi Kumar', rating: 5, reviews: 189, price: '24,000', tag: 'New', tagColor: 'green', image: '/ds-2.png' },
  { id: 3, title: 'Kanjivaram Gold', designer: 'Priya Sharma', rating: 4.8, reviews: 156, price: '32,500', tag: 'Featured', tagColor: 'blue', image: '/ds-3.png' },
  { id: 4, title: 'Tussar Silk Classic', designer: 'Meera Iyer', rating: 4.7, reviews: 98, price: '14,200', tag: 'New', tagColor: 'green', image: '/ds-4.png' },
  { id: 5, title: 'Chiffon Elegance', designer: 'Ananya Reddy', rating: 4.9, reviews: 167, price: '9,800', tag: 'Trending', tagColor: 'red', image: '/ds-5.png' },
  { id: 6, title: 'Cotton Weave', designer: 'Ravi Kumar', rating: 4.6, reviews: 89, price: '6,500', tag: 'Featured', tagColor: 'blue', image: '/ds-6.png' },
];

const PRODUCTS_PAGE_SIZE = 3;
const PRODUCT_PAGES = Math.ceil(PRODUCTS.length / PRODUCTS_PAGE_SIZE);

const FEATURED_DESIGNERS = [
  { name: 'Ananya Reddy', specialty: 'Traditional Silk', collections: 24, rating: 4.9, image: '/ds-1.png' },
  { name: 'Ravi Kumar', specialty: 'Banarasi Weaves', collections: 18, rating: 5, image: '/ds-2.png' },
  { name: 'Priya Sharma', specialty: 'Kanjivaram Art', collections: 31, rating: 4.8, image: '/ds-3.png' },
];

function HeartIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
    </svg>
  );
}

export default function SectionMarketplace() {
  const [productPage, setProductPage] = useState(0);
  const [designerIndex, setDesignerIndex] = useState(0);
  const cardsTrackRef = useRef(null);

  const goPrev = () => setProductPage((p) => Math.max(0, p - 1));
  const goNext = () => setProductPage((p) => Math.min(PRODUCT_PAGES - 1, p + 1));

  useEffect(() => {
    const el = cardsTrackRef.current;
    if (!el) return;
    const percentPerPage = 100 / PRODUCT_PAGES;
    el.style.transform = `translateX(-${productPage * percentPerPage}%)`;
  }, [productPage]);

  const currentDesigner = FEATURED_DESIGNERS[designerIndex];

  return (
    <section className="rex-marketplace" aria-label="Market Place">
      <div className="rex-marketplace-inner">
        <div className="rex-marketplace-header">
          <p className="rex-marketplace-eyebrow">Market Place</p>
          <h2 className="rex-marketplace-title">Curated Collections</h2>
          <p className="rex-marketplace-subtitle">
            Discover handpicked designs from India&apos;s finest artisans.
          </p>
        </div>

        <div className="rex-marketplace-body">
          <div className="rex-marketplace-collections">
            <button
              type="button"
              className="rex-marketplace-nav rex-marketplace-nav--prev"
              aria-label="Previous products"
              onClick={goPrev}
              disabled={productPage === 0}
            >
              <svg width="11" height="19" viewBox="0 0 11 19" fill="none" aria-hidden="true">
                <path d="M9.5 1.5L1.5 9.5L9.5 17.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <div className="rex-marketplace-cards">
              <div className="rex-marketplace-cards-track" ref={cardsTrackRef}>
                {PRODUCTS.map((p) => (
                  <article key={p.id} className="rex-mp-card">
                    <div className="rex-mp-card-image-wrap">
                      <img src={p.image} alt="" className="rex-mp-card-image" />
                      <span className={`rex-mp-card-tag rex-mp-card-tag--${p.tagColor}`}>{p.tag}</span>
                      <button type="button" className="rex-mp-card-heart" aria-label="Add to favorites">
                        <HeartIcon />
                      </button>
                    </div>
                    <div className="rex-mp-card-body">
                      <h3 className="rex-mp-card-title">{p.title}</h3>
                      <div className="rex-mp-card-meta">
                        <span className="rex-mp-card-designer">by {p.designer}</span>
                        <span className="rex-mp-card-rating">★ {p.rating} ({p.reviews})</span>
                      </div>
                      <div className="rex-mp-card-footer">
                        <span className="rex-mp-card-price">${p.price}</span>
                        <a href="#marketplace" className="rex-btn rex-btn-primary rex-mp-card-cta">Buy Now</a>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
            <button
              type="button"
              className="rex-marketplace-nav rex-marketplace-nav--next"
              aria-label="Next products"
              onClick={goNext}
              disabled={productPage === PRODUCT_PAGES - 1}
            >
              <svg width="11" height="19" viewBox="0 0 11 19" fill="none" aria-hidden="true">
                <path d="M1.5 1.5L9.5 9.5L1.5 17.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <div className="rex-marketplace-dots" role="tablist">
              {Array.from({ length: PRODUCT_PAGES }, (_, i) => (
                <button
                  key={i}
                  type="button"
                  role="tab"
                  aria-selected={i === productPage}
                  aria-label={`Page ${i + 1}`}
                  className={`rex-marketplace-dot${i === productPage ? ' is-active' : ''}`}
                  onClick={() => setProductPage(i)}
                />
              ))}
            </div>
          </div>

          <aside className="rex-marketplace-designers">
            <h3 className="rex-marketplace-designers-title">Featured Designers</h3>
            <div className="rex-mp-designer-card">
              <div className="rex-mp-designer-avatar-wrap">
                <img src={currentDesigner.image} alt="" className="rex-mp-designer-avatar" />
                <span className="rex-mp-designer-badge" aria-hidden="true">✓</span>
              </div>
              <p className="rex-mp-designer-name">{currentDesigner.name}</p>
              <p className="rex-mp-designer-specialty">{currentDesigner.specialty}</p>
              <div className="rex-mp-designer-stats">
                <span><em>Collections</em> {currentDesigner.collections}</span>
                <span><em>Rating</em> ★ {currentDesigner.rating}</span>
              </div>
              <a href="#designers" className="rex-btn rex-btn-primary rex-mp-designer-cta">Book Now</a>
              <div className="rex-mp-designer-nav">
                <button type="button" aria-label="Previous designer" onClick={() => setDesignerIndex((i) => (i - 1 + FEATURED_DESIGNERS.length) % FEATURED_DESIGNERS.length)}>‹</button>
                <span className="rex-mp-designer-dots">
                  {FEATURED_DESIGNERS.map((_, i) => (
                    <button key={i} type="button" className={i === designerIndex ? 'is-active' : ''} aria-label={`Designer ${i + 1}`} onClick={() => setDesignerIndex(i)} />
                  ))}
                </span>
                <button type="button" aria-label="Next designer" onClick={() => setDesignerIndex((i) => (i + 1) % FEATURED_DESIGNERS.length)}>›</button>
              </div>
              <a href="#all-designers" className="rex-btn rex-btn-ghost rex-mp-view-all">View All Designers</a>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
