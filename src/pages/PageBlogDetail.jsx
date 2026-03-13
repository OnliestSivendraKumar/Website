import { useEffect, useRef, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { POSTS } from '../data/blogPosts';

export default function PageBlogDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const post = POSTS.find((p) => p.id === id);
  const relatedPosts = POSTS.filter((p) => p.id !== id);
  const articleRef = useRef(null);
  const relatedTrackRef = useRef(null);
  const [readProgress, setReadProgress] = useState(0);

  useEffect(() => {
    const prevTitle = document.title;
    const metaDesc = document.querySelector('meta[name="description"]');
    const prevDesc = metaDesc ? metaDesc.getAttribute('content') || '' : '';

    if (post) {
      document.title = `${post.title} - Onliest Journal`;
      if (metaDesc && post.excerpt) {
        metaDesc.setAttribute('content', post.excerpt);
      }
    }

    return () => {
      document.title = prevTitle;
      const d = document.querySelector('meta[name="description"]');
      if (d) d.setAttribute('content', prevDesc);
    };
  }, [post]);

  useEffect(() => {
    const onScroll = () => {
      const el = articleRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const viewportH = window.innerHeight || document.documentElement.clientHeight || 0;
      const start = viewportH * 0.15;
      const total = rect.height + rect.top - start;
      const visible = viewportH - rect.top;
      const raw = total > 0 ? visible / total : 0;
      const clamped = Math.max(0, Math.min(1, raw));
      setReadProgress(clamped);
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  if (!post) {
    return (
      <>
        <Header hideOnPanels={false} />
        <main className="rex-blog-detail-page" id="main-content" role="main">
          <section className="rex-blog-detail-not-found" aria-label="Article not found">
            <div className="rex-blog-detail-shell">
              <h1 className="rex-page-hero-title">Article not found</h1>
              <p className="rex-page-section-sub">
                The article you are looking for is not available or may have been moved.
              </p>
              <button
                type="button"
                className="rex-btn rex-btn-primary"
                onClick={() => navigate('/blog')}
              >
                Back to all articles
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
      <main className="rex-blog-detail-page" id="main-content" role="main">
        <div className="rex-blog-detail-shell">
          <header className="rex-blog-detail-header">
            <p className="rex-page-eyebrow">
              {post.category.join(' / ')} · {post.readingTime}
            </p>
            <h1 className="rex-page-hero-title rex-page-hero-title--left">
              {post.title}
            </h1>
          </header>

          {post.image && (
            <figure className="rex-blog-detail-hero">
              <img src={post.image} alt={post.title} loading="lazy" />
            </figure>
          )}

          <div className="rex-blog-detail-layout">
            <div className="rex-blog-detail-rail" aria-label="Article tools">
              <div className="rex-blog-detail-rail-inner">
                <div className="rex-blog-detail-readtime">
                  <svg
                    className="rex-blog-detail-readtime-svg"
                    viewBox="0 0 36 36"
                    aria-hidden="true"
                  >
                    <circle
                      className="rex-blog-detail-readtime-track"
                      cx="18"
                      cy="18"
                      r="15.5"
                    />
                    <circle
                      className="rex-blog-detail-readtime-progress"
                      cx="18"
                      cy="18"
                      r="15.5"
                      strokeDasharray="100 100"
                      strokeDashoffset={100 - Math.max(0.02, readProgress || 0) * 100}
                    />
                  </svg>
                  <div className="rex-blog-detail-readtime-text">
                    <span className="rex-blog-detail-readtime-value">{post.readingTime}</span>
                    <span className="rex-blog-detail-readtime-unit">read</span>
                  </div>
                </div>
                <div className="rex-blog-detail-rail-divider" />
                <button type="button" className="rex-blog-detail-rail-icon" aria-label="Share on Facebook">
                  <img src="/fb.svg" alt="" />
                </button>
                <button type="button" className="rex-blog-detail-rail-icon" aria-label="Share on Instagram">
                  <img src="/insta.svg" alt="" />
                </button>
                <button type="button" className="rex-blog-detail-rail-icon" aria-label="Share on LinkedIn">
                  <img src="/in.svg" alt="" />
                </button>
                <button
                  type="button"
                  className="rex-blog-detail-rail-icon"
                  aria-label="Copy link"
                  onClick={() => {
                    try {
                      navigator.clipboard?.writeText?.(window.location.href);
                    } catch {
                      // ignore
                    }
                  }}
                >
                  ↗
                </button>
              </div>
            </div>

            <article className="rex-blog-detail-body" ref={articleRef}>
              <p>{post.excerpt}</p>

              <p>
                In this guide we unpack the ideas behind this experience and how it fits inside the wider Onliest
                platform. The goal is to give you enough detail so that the feature feels practical, not abstract.
              </p>

              <h2>What this experience is designed to solve</h2>
              <p>
                Every saree journey has a few repeating questions. Will this fall work on my body type? Does the
                blouse silhouette match the occasion? How do I know if the fabric will stay comfortable for a full day
                of movement, travel or events? This article walks through how the product answers each of those
                questions in a simple, visual way.
              </p>

              <h2>How it feels when you are using it</h2>
              <p>
                Think of the screen as a guided studio session. You are shown a small number of focused options, not an
                endless feed. Each change you make updates the mannequin, the scores and the notes in real time so you
                can understand why a particular choice is working for you.
              </p>

              <ol>
                <li>Start with a clear goal, like wedding reception, office rotation or travel friendly wardrobe.</li>
                <li>Adjust key controls one by one instead of trying to change everything at once.</li>
                <li>Use the scores and small notes as a safety net so that final picks stay balanced and comfortable.</li>
              </ol>

              <h2>Where this fits inside Onliest</h2>
              <p>
                This experience is one chapter inside a larger journey that covers fabric, blouse structure, draping,
                body compatibility and wardrobe planning. You can read it on its own or together with the other guides
                in the Onliest Journal to get a complete picture of how the platform works end to end.
              </p>
            </article>

            <aside className="rex-blog-detail-aside" aria-label="Article summary">
              <div className="rex-blog-detail-aside-inner">
                <div className="rex-blog-detail-aside-card">
                  <p className="rex-blog-detail-aside-title">About this article</p>
                  <p className="rex-blog-detail-meta">
                    {post.author}
                    <br />
                    {post.date}
                  </p>
                  <p className="rex-blog-detail-aside-text">
                    Written for Onliest customers who want a clear, practical view of how this part of the platform works in real life.
                  </p>
                </div>
                {relatedPosts[0] && (
                  <div className="rex-blog-detail-aside-card rex-blog-detail-aside-feature">
                    <p className="rex-blog-detail-aside-title">Featured next</p>
                    <figure className="rex-blog-detail-aside-media">
                      <img src={relatedPosts[0].image} alt={relatedPosts[0].title} loading="lazy" />
                    </figure>
                    <button
                      type="button"
                      className="rex-blog-detail-aside-link"
                      onClick={() => navigate(`/blog/${relatedPosts[0].id}`)}
                    >
                      <span className="rex-blog-detail-aside-link-eyebrow">
                        {relatedPosts[0].category[0]} · {relatedPosts[0].readingTime}
                      </span>
                      <span className="rex-blog-detail-aside-link-title">{relatedPosts[0].title}</span>
                    </button>
                  </div>
                )}
              </div>
            </aside>
          </div>

          <section className="rex-blog-detail-related" aria-label="Related articles">
            <div className="rex-blog-detail-related-top">
              <h2 className="rex-blog-detail-related-title">Read next</h2>
              <div className="rex-blog-detail-related-nav">
                <button
                  type="button"
                  className="rex-blog-detail-related-arrow"
                  aria-label="Previous article"
                  onClick={() => {
                    const el = relatedTrackRef.current;
                    if (!el) return;
                    const amount = el.clientWidth * 0.9;
                    el.scrollBy({ left: -amount, behavior: 'smooth' });
                  }}
                >
                  ‹
                </button>
                <button
                  type="button"
                  className="rex-blog-detail-related-arrow"
                  aria-label="Next article"
                  onClick={() => {
                    const el = relatedTrackRef.current;
                    if (!el) return;
                    const amount = el.clientWidth * 0.9;
                    el.scrollBy({ left: amount, behavior: 'smooth' });
                  }}
                >
                  ›
                </button>
              </div>
            </div>
            <div className="rex-blog-detail-related-viewport">
              <div className="rex-blog-detail-related-track" ref={relatedTrackRef}>
                {relatedPosts.map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    className="rex-blog-detail-related-card"
                    onClick={() => navigate(`/blog/${item.id}`)}
                  >
                    {item.image && (
                      <div className="rex-blog-detail-related-media">
                        <img src={item.image} alt={item.title} loading="lazy" />
                      </div>
                    )}
                    <div className="rex-blog-detail-related-copy">
                      <p className="rex-blog-detail-related-eyebrow">
                        {item.category[0]} · {item.readingTime}
                      </p>
                      <p className="rex-blog-detail-related-heading">{item.title}</p>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </section>

          <section className="rex-blog-detail-subscribe" aria-label="Subscribe to newsletter">
            <div className="rex-blog-detail-subscribe-inner">
              <div className="rex-blog-detail-subscribe-copy">
                <p className="rex-blog-detail-subscribe-eyebrow">Onliest Journal</p>
                <h2 className="rex-blog-detail-subscribe-title">Stay updated on new guides</h2>
                <p className="rex-blog-detail-subscribe-text">
                  Get short, practical notes when we publish new education pieces on sarees, blouses, fitting and wardrobe planning.
                </p>
              </div>
              <form
                className="rex-blog-detail-subscribe-form"
                onSubmit={(e) => {
                  e.preventDefault();
                }}
              >
                <label className="rex-blog-detail-subscribe-label">
                  <span className="rex-blog-detail-subscribe-label-text">Email address</span>
                  <input
                    type="email"
                    required
                    placeholder="you@example.com"
                    className="rex-blog-detail-subscribe-input"
                  />
                </label>
                <button type="submit" className="rex-btn rex-btn-primary rex-blog-detail-subscribe-btn">
                  Subscribe
                </button>
              </form>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}

