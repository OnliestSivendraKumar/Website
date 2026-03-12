import { useEffect, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const PAGE_TITLE = 'Blog — Onliest LLC Insights';
const PAGE_DESCRIPTION =
  'Explore insights from Onliest LLC on couture technology, AI fitting, design intelligence, and customer experience.';

const POSTS = [
  {
    id: 'ai-fitting-room',
    category: ['AI', 'FITTING ROOM', 'TECHNOLOGY'],
    readingTime: '4 MIN',
    title: 'How AI Fitting Rooms Change Saree Confidence',
    author: 'Onliest Studio',
    date: 'Mar 5, 2026',
    excerpt:
      'Step inside a fitting room that understands your body, not just your size — and see how precision scoring removes the guesswork from custom sarees.',
    image: '/fit-mannequin.png',
  },
  {
    id: 'fabric-intelligence',
    category: ['FABRIC', 'INSIGHTS', 'TEXTILE'],
    readingTime: '3 MIN',
    title: 'Reading Fabric Like a Textile Expert',
    author: 'Onliest Studio',
    date: 'Feb 18, 2026',
    excerpt:
      'GSM, weave, fall and sheen — learn the simple cues we use inside Onliest REX to judge fabric behavior before a single pleat is pinned.',
    image: '/ds-8.png',
  },
  {
    id: 'design-studio-flow',
    category: ['DESIGN STUDIO', 'WORKFLOWS'],
    readingTime: '5 MIN',
    title: 'From Canvas to Couture in the Design Studio',
    author: 'Onliest Studio',
    date: 'Jan 30, 2026',
    excerpt:
      'Follow a saree from blank canvas to finished silhouette using the Design Studio — fabric, blouse, borders and drape all in one flow.',
    image: '/Saree-Canvas.png',
  },
  {
    id: 'halo-experience',
    category: ['EXPERIENCE', 'HALO', 'CUSTOMER'],
    readingTime: '2 MIN',
    title: 'Onliest Halo: Turning Questions into Couture',
    author: 'Onliest Studio',
    date: 'Jan 10, 2026',
    excerpt:
      'See how guided conversations, encrypted sessions and secure co‑browsing turn “I have an idea” into a saree you can actually wear.',
    image: '/at-1.png',
  },
  {
    id: 'atelier-collaboration',
    category: ['ATELIER', 'EXPERIENCE'],
    readingTime: '4 MIN',
    title: 'Designing Together Inside Onliest Atelier',
    author: 'Onliest Studio',
    date: 'Dec 15, 2025',
    excerpt:
      'Walk through a live co‑design session where stylists, friends and family review saree options together inside a single secure canvas.',
    image: '/at-2.png',
  },
  {
    id: 'rex-signals',
    category: ['REX', 'SIGNALS'],
    readingTime: '3 MIN',
    title: 'Understanding Your Preference Signals in REX',
    author: 'Onliest Studio',
    date: 'Dec 1, 2025',
    excerpt:
      'Learn how tiny interactions — scrolls, hovers and saves — are translated into signals that help REX suggest better silhouettes and fabrics.',
    image: '/ds-5.png',
  },
  {
    id: 'saree-wardrobe',
    category: ['WARDROBE', 'GUIDES'],
    readingTime: '5 MIN',
    title: 'Building a Smarter Saree Wardrobe with Fewer Pieces',
    author: 'Onliest Studio',
    date: 'Nov 18, 2025',
    excerpt:
      'From daily wear to statement occasions, discover how to plan a couture wardrobe that stays versatile without feeling repetitive.',
    image: '/ds-3.png',
  },
  {
    id: 'fit-scores',
    category: ['FIT SCORE', 'TECHNOLOGY'],
    readingTime: '2 MIN',
    title: 'What Your Fit Score Really Means',
    author: 'Onliest Studio',
    date: 'Nov 5, 2025',
    excerpt:
      'A quick guide to reading body‑proportion scores so you know when a design is truly working for you — or when to try a smarter alternative.',
    image: '/fit-score.png',
  },
  {
    id: 'halo-privacy',
    category: ['PRIVACY', 'HALO'],
    readingTime: '3 MIN',
    title: 'How Onliest Halo Keeps Every Session Private',
    author: 'Onliest Studio',
    date: 'Oct 22, 2025',
    excerpt:
      'Encrypted sessions, permission‑based access and one‑click revoke controls ensure your fittings and designs stay between you and your expert.',
    image: '/at-3.png',
  },
];

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
  const PAGE_SIZE = 9; // 3 per row × 3 rows
  const totalPages = Math.max(1, Math.ceil(POSTS.length / PAGE_SIZE));

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

  const start = (page - 1) * PAGE_SIZE;
  const visiblePosts = POSTS.slice(start, start + PAGE_SIZE);

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
            <div className="rex-blog-grid">
              {visiblePosts.map((post) => (
                <article key={post.id} className="rex-blog-card">
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
                      <button type="button" className="rex-btn rex-btn-ghost rex-blog-readmore">
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

