import { useEffect, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { POSTS } from '../data/blogPosts';

const PAGE_TITLE = 'Blog — Onliest LLC Insights';
const PAGE_DESCRIPTION =
  'Explore insights from Onliest LLC on couture technology, AI fitting, design intelligence, and customer experience.';

const PAGE_SIZE = 9; // 3 per row × 3 rows

const BLOG_FILTERS = [
  { id: 'all', label: 'All' },
  { id: 'trending', label: 'Trending' },
  { id: 'saree-types', label: 'Saree Types' },
  { id: 'drape-styles', label: 'Drape Styles' },
  { id: 'blouse-designs', label: 'Blouse Designs' },
  { id: 'marriages', label: 'Marriages' },
];

const TRENDING_IDS = ['ai-fitting-room', 'saree-wardrobe', 'fit-scores'];

function ArrowRightIcon() {
  return (
    <svg
      width="10"
      height="10"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M9 6l6 6-6 6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function PageBlog() {
  const [page, setPage] = useState(1);
  const [activeFilter, setActiveFilter] = useState('all');
  const navigate = useNavigate();

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

  useEffect(() => {
    setPage(1);
  }, [activeFilter]);

  useEffect(() => {
    const grid = document.querySelector('.rex-blog-grid');
    if (!grid) return;
    grid.classList.add('is-animating');
    const timer = setTimeout(() => {
      grid.classList.remove('is-animating');
    }, 220);
    return () => clearTimeout(timer);
  }, [activeFilter, page]);

  const filteredPosts = useMemo(() => {
    let items = POSTS;

    if (activeFilter === 'trending') {
      items = POSTS.filter((post) => TRENDING_IDS.includes(post.id));
    } else if (activeFilter === 'saree-types') {
      items = POSTS.filter(
        (post) =>
          /saree/i.test(post.title) ||
          /saree/i.test(post.excerpt) ||
          post.category.some((tag) => /saree|fabric|wardrobe/i.test(tag)),
      );
    } else if (activeFilter === 'drape-styles') {
      items = POSTS.filter(
        (post) =>
          /drape/i.test(post.title) ||
          /drape/i.test(post.excerpt) ||
          post.category.some((tag) => /design studio|fit score|fitting room/i.test(tag)),
      );
    } else if (activeFilter === 'blouse-designs') {
      items = POSTS.filter(
        (post) =>
          /blouse/i.test(post.title) ||
          /blouse/i.test(post.excerpt) ||
          post.category.some((tag) => /atelier|design studio/i.test(tag)),
      );
    } else if (activeFilter === 'marriages') {
      items = POSTS.filter(
        (post) =>
          /wedding|marriage|occasion/i.test(post.title) ||
          /wedding|marriage|occasion/i.test(post.excerpt),
      );
    }

    // If a filter currently has no specific matches, fall back to all posts
    if (!items.length) return POSTS;
    return items;
  }, [activeFilter]);

  const totalPages = Math.max(1, Math.ceil(filteredPosts.length / PAGE_SIZE));
  const start = (page - 1) * PAGE_SIZE;
  const visiblePosts = filteredPosts.slice(start, start + PAGE_SIZE);

  return (
    <>
      <Header hideOnPanels={false} />
      <main className="rex-page-inner rex-page-inner--story" id="main-content" role="main">
        <header className="rex-page-hero rex-page-hero--story" aria-labelledby="blog-heading">
          <div className="rex-page-container rex-page-container--narrow">
            <h1 id="blog-heading" className="rex-page-hero-title rex-page-hero-title--center">
              Onliest Journal
            </h1>
          </div>
        </header>

        <section className="rex-page-section rex-page-section--blog" aria-label="Latest articles">
          <div className="rex-page-container rex-page-container--wide">
            <div className="rex-blog-filter-bar">
              <div className="rex-blog-filter-tabs" role="tablist" aria-label="Filter blog articles">
                {BLOG_FILTERS.map((filter) => {
                  const isActive = activeFilter === filter.id;
                  return (
                    <button
                      key={filter.id}
                      type="button"
                      role="tab"
                      aria-selected={isActive}
                      className={`rex-blog-filter-tab${isActive ? ' is-active' : ''}`}
                      onClick={() => setActiveFilter(filter.id)}
                    >
                      {filter.label}
                    </button>
                  );
                })}
              </div>
            </div>
            <div className="rex-blog-grid">
              {visiblePosts.map((post) => (
                <article
                  key={post.id}
                  className="rex-blog-card"
                  onClick={() => navigate(`/blog/${post.id}`)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      navigate(`/blog/${post.id}`);
                    }
                  }}
                >
                  <figure className="rex-blog-media">
                    <img src={post.image} alt={post.title} loading="lazy" />
                    <div className="rex-blog-tags">
                      {post.category.map((tag) => (
                        <span key={tag} className="rex-blog-tag">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <span className="rex-blog-time">{post.readingTime}</span>
                  </figure>
                  <div className="rex-blog-body">
                    <h2 className="rex-blog-title">{post.title}</h2>
                    <p className="rex-blog-meta">
                      {post.author} on {post.date}
                    </p>
                    <p className="rex-blog-excerpt">{post.excerpt}</p>
                    <div className="rex-blog-footer">
                      <button
                        type="button"
                        className="rex-btn rex-btn-ghost rex-blog-readmore"
                        onClick={(e) => {
                          e.stopPropagation();
                          navigate(`/blog/${post.id}`);
                        }}
                      >
                        Read more
                      </button>
                      <button type="button" className="rex-blog-share" aria-label="Share article">
                        <span>↗</span>
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
            {/* Pagination — always last below the blog list */}
            <nav className="rex-blog-pagination" aria-label="Blog pagination">
              <div className="rex-blog-page-dots">
                {Array.from({ length: totalPages }).map((_, idx) => {
                  const num = idx + 1;
                  return (
                    <button
                      key={num}
                      type="button"
                      className={`rex-blog-page-dot${num === page ? ' is-active' : ''}`}
                      onClick={() => setPage(num)}
                      aria-label={`Go to page ${num}`}
                      aria-pressed={num === page}
                    >
                      {num}
                    </button>
                  );
                })}
              </div>
              <button
                type="button"
                className="rex-blog-page-btn"
                onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                disabled={page === totalPages}
                aria-label="Next page"
              >
                <ArrowRightIcon />
              </button>
            </nav>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

