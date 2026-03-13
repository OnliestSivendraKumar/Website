import { useEffect, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SectionReviews from '../components/SectionReviews';
import { REVIEWS } from '../data/reviews';

const PAGE_TITLE = 'Reviews — Onliest Journal';
const PAGE_DESCRIPTION = 'Customer reviews and community stories from Onliest.';

export default function PageReviews() {
  useEffect(() => {
    const prevTitle = document.title;
    document.title = PAGE_TITLE;
    const metaDesc = document.querySelector('meta[name="description"]');
    const prevDesc = metaDesc?.getAttribute('content') || '';
    if (metaDesc) metaDesc.setAttribute('content', PAGE_DESCRIPTION);
    return () => {
      document.title = prevTitle;
      const d = document.querySelector('meta[name="description"]');
      if (d) d.setAttribute('content', prevDesc);
    };
  }, []);

  const total = REVIEWS.length;
  const counts = [5, 4, 3, 2, 1].map((star) =>
    REVIEWS.filter((r) => r.rating === star).length || 0,
  );
  const sum = REVIEWS.reduce((acc, r) => acc + (r.rating || 0), 0);
  const average = total ? (sum / total) : 0;
  const [rating, setRating] = useState(0);

  return (
    <>
      <Header hideOnPanels={false} />
      <main className="rex-page-inner rex-page-inner--story" id="main-content" role="main">
        <section className="rex-reviews-page-section" aria-label="Customer reviews">
          <div className="rex-reviews-page-container">
            <h1 className="rex-page-hero-title rex-page-hero-title--center">
              Customer Reviews
            </h1>
          </div>
        </section>

        <section className="rex-reviews-page-section" aria-label="Customer feedback and form">
          <div className="rex-reviews-page-container rex-reviews-layout">
            <div className="rex-reviews-list">
              <h2 className="rex-reviews-list-title">Recent feedback</h2>
              <div className="rex-reviews-list-cards">
                {REVIEWS.map((r) => (
                  <article key={r.id} className="rex-reviews-full-card">
                    <div className="rex-reviews-full-avatar">
                      <img src={r.image} alt={r.name} />
                    </div>
                    <div className="rex-reviews-full-main">
                      <div className="rex-reviews-full-head">
                        <div>
                          <p className="rex-reviews-full-name">{r.name}</p>
                          <p className="rex-reviews-full-location">{r.location}</p>
                        </div>
                        <div className="rex-reviews-full-stars" aria-hidden="true">
                          {'★'.repeat(r.rating || 5)}
                        </div>
                      </div>
                      <p className="rex-reviews-full-quote">{r.quote}</p>
                      <span className="rex-reviews-full-tag">{r.tag}</span>
                    </div>
                  </article>
                ))}
              </div>
            </div>

            <div className="rex-reviews-form-wrap">
              <h2 className="rex-reviews-form-title">Add a review</h2>
              <form
                className="rex-reviews-form"
                onSubmit={(e) => {
                  e.preventDefault();
                }}
              >
                <label className="rex-reviews-form-field">
                  <span className="rex-reviews-form-label">Your rating</span>
                  <div className="rex-reviews-form-stars" aria-label="Select a rating from 1 to 5 stars">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <button
                        key={i}
                        type="button"
                        className={`rex-reviews-form-star${rating >= i + 1 ? ' is-active' : ''}`}
                        onClick={() => setRating(i + 1)}
                        aria-pressed={rating >= i + 1}
                      >
                        ★
                      </button>
                    ))}
                  </div>
                </label>

                <label className="rex-reviews-form-field">
                  <span className="rex-reviews-form-label">Name</span>
                  <input
                    type="text"
                    className="rex-reviews-form-input"
                    placeholder="Enter your name"
                  />
                </label>

                <label className="rex-reviews-form-field">
                  <span className="rex-reviews-form-label">Email</span>
                  <input
                    type="email"
                    className="rex-reviews-form-input"
                    placeholder="Enter your email"
                  />
                </label>

                <label className="rex-reviews-form-field">
                  <span className="rex-reviews-form-label">Your review</span>
                  <textarea
                    rows={4}
                    className="rex-reviews-form-textarea"
                    placeholder="Share a short note about your experience"
                  />
                </label>

                <button type="submit" className="rex-btn rex-btn-primary rex-reviews-form-submit">
                  Submit review
                </button>
                <p className="rex-reviews-form-note">
                  This form is for demo only. For real feedback, please use the contact page.
                </p>
              </form>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

