import { useEffect, useMemo, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { FAQ_CATEGORIES } from '../data/faqs';

const PAGE_TITLE = 'FAQ — Onliest';
const PAGE_DESCRIPTION = 'Frequently asked questions about the Onliest experiences.';

export default function PageFaq() {
  const [activeCategoryId, setActiveCategoryId] = useState(FAQ_CATEGORIES[0]?.id || '');
  const [search, setSearch] = useState('');
  const [openId, setOpenId] = useState(null);

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

  const activeCategory = useMemo(
    () => FAQ_CATEGORIES.find((c) => c.id === activeCategoryId) || FAQ_CATEGORIES[0],
    [activeCategoryId],
  );

  const visibleItems = useMemo(() => {
    const items = activeCategory?.items || [];
    if (!search.trim()) return items;
    const q = search.toLowerCase();
    return items.filter(
      (it) =>
        it.question.toLowerCase().includes(q) ||
        it.answer.toLowerCase().includes(q),
    );
  }, [activeCategory, search]);

  return (
    <>
      <Header hideOnPanels={false} />
      <main className="rex-page-inner rex-page-inner--story" id="main-content" role="main">
        <section className="rex-faq-section" aria-labelledby="faq-heading">
          <div className="rex-faq-container">
            <header className="rex-faq-header">
              <h1 id="faq-heading" className="rex-page-hero-title rex-page-hero-title--center">
                Frequently Asked Questions
              </h1>
            </header>

            <div className="rex-faq-layout">
              <aside className="rex-faq-sidebar" aria-label="FAQ categories">
                <p className="rex-faq-sidebar-title">Browse by category</p>
                <ul className="rex-faq-category-list">
                  {FAQ_CATEGORIES.map((cat) => (
                    <li key={cat.id}>
                      <button
                        type="button"
                        className={`rex-faq-category-btn${activeCategoryId === cat.id ? ' is-active' : ''}`}
                        onClick={() => {
                          setActiveCategoryId(cat.id);
                          setOpenId(null);
                          setSearch('');
                        }}
                      >
                        <span className="rex-faq-category-name">{cat.title}</span>
                        <span className="rex-faq-category-count">{cat.count} articles</span>
                      </button>
                    </li>
                  ))}
                </ul>
                <div className="rex-faq-support-card">
                  <p className="rex-faq-support-title">Still have questions?</p>
                  <p className="rex-faq-support-text">
                    Can&apos;t find what you&apos;re looking for? Our team is happy to help.
                  </p>
                  <a href="/contact" className="rex-btn rex-btn-ghost rex-faq-support-cta">
                    Contact support
                  </a>
                </div>
              </aside>

              <section className="rex-faq-main" aria-label="Questions and answers">
                <div className="rex-faq-search-wrap">
                  <input
                    type="search"
                    className="rex-faq-search-input"
                    placeholder="Search questions..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    aria-label="Search FAQs"
                  />
                </div>

                <div className="rex-faq-accordion">
                  {visibleItems.length === 0 && (
                    <p className="rex-faq-empty">
                      No questions match this search. Try a different word or clear the filter.
                    </p>
                  )}
                  {visibleItems.map((item) => {
                    const isOpen = openId === item.id;
                    return (
                      <article key={item.id} className={`rex-faq-item${isOpen ? ' is-open' : ''}`}>
                        <button
                          type="button"
                          className="rex-faq-item-header"
                          onClick={() => setOpenId((id) => (id === item.id ? null : item.id))}
                          aria-expanded={isOpen}
                        >
                          <span className="rex-faq-item-question">{item.question}</span>
                          <span className="rex-faq-item-icon" aria-hidden="true">
                            {isOpen ? '−' : '+'}
                          </span>
                        </button>
                        {isOpen && (
                          <div className="rex-faq-item-body">
                            <p>{item.answer}</p>
                          </div>
                        )}
                      </article>
                    );
                  })}
                </div>
              </section>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

