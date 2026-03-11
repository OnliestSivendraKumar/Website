import { useState, useRef, useEffect } from 'react';

const REVIEWS = [
  { quote: '"The 3D mannequin feature is revolutionary. I finally found a saree that fits perfectly without any alterations."', name: 'Priya Sharma', location: 'Mumbai, India', tag: 'Wedding Collection', image: '/ds-1.png' },
  { quote: '"As someone living abroad, finding authentic Indian sarees was always difficult. The virtual fitting room made it effortless."', name: 'Sarah Johnson', location: 'New York, USA', tag: 'Festive Fusion', image: '/ds-2.png' },
  { quote: '"The AI draping video feature blew my mind. I could see exactly how the saree would look before ordering."', name: 'Aisha Patel', location: 'London, UK', tag: 'Executive Collection', image: '/ds-3.png' },
  { quote: '"Incredible quality and the try-before-you-buy feature saved me so much time. Will definitely order again."', name: 'Meera Iyer', location: 'Chennai, India', tag: 'Silk Collection', image: '/ds-4.png' },
  { quote: '"Finally a platform that understands traditional wear. The styling tips and designer stories are a nice touch."', name: 'James Wilson', location: 'Sydney, Australia', tag: 'Festive Fusion', image: '/ds-5.png' },
  { quote: '"From browsing to delivery, everything was smooth. The AI recommendations were spot-on for my occasion."', name: 'Kavitha Nair', location: 'Dubai, UAE', tag: 'Wedding Collection', image: '/ds-6.png' },
];

const REVIEWS_PER_PAGE = 3;
const REVIEW_PAGES = Math.ceil(REVIEWS.length / REVIEWS_PER_PAGE);

export default function SectionReviews() {
  const [reviewPage, setReviewPage] = useState(0);
  const trackRef = useRef(null);

  const goPrev = () => setReviewPage((p) => Math.max(0, p - 1));
  const goNext = () => setReviewPage((p) => Math.min(REVIEW_PAGES - 1, p + 1));

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    const percentPerPage = 100 / REVIEW_PAGES;
    el.style.transform = `translateX(-${reviewPage * percentPerPage}%)`;
  }, [reviewPage]);

  return (
    <section className="rex-reviews">
      <div className="rex-reviews-inner">
        <header className="rex-reviews-header">
          <p className="rex-reviews-eyebrow">Community Stories</p>
          <h2 className="rex-reviews-title">Trusted by Fashion Lovers Worldwide</h2>
          <p className="rex-reviews-subtitle">
            Real stories from real customers across 150+ countries.
          </p>
        </header>

        <div className="rex-reviews-carousel">
          <button
            type="button"
            className="rex-reviews-nav rex-reviews-nav--prev"
            aria-label="Previous reviews"
            onClick={goPrev}
            disabled={reviewPage === 0}
          >
            <svg width="11" height="19" viewBox="0 0 11 19" fill="none" aria-hidden="true">
              <path d="M9.5 1.5L1.5 9.5L9.5 17.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <div className="rex-reviews-cards">
            <div className="rex-reviews-cards-track" ref={trackRef}>
              {REVIEWS.map((r) => (
                <article key={`${r.name}-${r.location}`} className="rex-review-card">
                  <div className="rex-review-avatar">
                    <img src={r.image} alt="" />
                  </div>
                  <div className="rex-review-stars" aria-hidden="true">
                    ★★★★★
                  </div>
                  <p className="rex-review-quote">{r.quote}</p>
                  <div className="rex-review-footer">
                    <div className="rex-review-meta">
                      <span className="rex-review-name">{r.name}</span>
                      <span className="rex-review-location">{r.location}</span>
                    </div>
                    <span className="rex-review-tag">{r.tag}</span>
                  </div>
                </article>
              ))}
            </div>
          </div>
          <button
            type="button"
            className="rex-reviews-nav rex-reviews-nav--next"
            aria-label="Next reviews"
            onClick={goNext}
            disabled={reviewPage === REVIEW_PAGES - 1}
          >
            <svg width="11" height="19" viewBox="0 0 11 19" fill="none" aria-hidden="true">
              <path d="M1.5 1.5L9.5 9.5L1.5 17.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <div className="rex-reviews-dots" role="tablist">
            {Array.from({ length: REVIEW_PAGES }, (_, i) => (
              <button
                key={i}
                type="button"
                role="tab"
                aria-selected={i === reviewPage}
                aria-label={`Page ${i + 1}`}
                className={`rex-reviews-dot${i === reviewPage ? ' is-active' : ''}`}
                onClick={() => setReviewPage(i)}
              />
            ))}
          </div>
        </div>

        <div className="rex-reviews-cta-row">
          <button type="button" className="rex-btn rex-btn-primary">
            Share Your Story
          </button>
          <button type="button" className="rex-btn rex-btn-ghost">
            Read All Reviews
          </button>
        </div>
      </div>
    </section>
  );
}
