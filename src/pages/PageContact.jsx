import { useEffect, useMemo, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { FAQ_CATEGORIES } from '../data/faqs';

const PAGE_TITLE = 'Contact Us — Onliest LLC';
const PAGE_DESCRIPTION =
  'Get in touch with Onliest LLC for product questions, demo requests, partnerships, or support. Drop us a line and we will respond shortly.';

export default function PageContact() {
  const [formStatus, setFormStatus] = useState(null);
  const [activeCategoryId, setActiveCategoryId] = useState(FAQ_CATEGORIES[0]?.id || '');
  const [search, setSearch] = useState('');
  const [openId, setOpenId] = useState(null);
  const location = useLocation();

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

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus('Thank you — we’ve received your message.');
  };

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

  useEffect(() => {
    if (!location.hash) return;
    const id = location.hash.replace('#', '');
    const target = document.getElementById(id);
    if (!target) return;

    // Keep section visible below sticky header.
    const headerOffset = 84;
    const targetTop = target.getBoundingClientRect().top + window.scrollY - headerOffset;
    window.scrollTo({ top: Math.max(0, targetTop), behavior: 'smooth' });
  }, [location.hash]);

  return (
    <>
      <Header hideOnPanels={false} />
      <main className="rex-page-inner rex-page-inner--story" id="main-content" role="main">
        {/* Hero: centered title + full-width map */}
        <header className="rex-page-hero rex-page-hero--story" aria-labelledby="contact-heading">
          <div className="rex-page-container rex-page-container--wide">
            <h1 id="contact-heading" className="rex-page-hero-title rex-page-hero-title--center">
              Contact Us
            </h1>
            <div className="rex-page-hero-media">
              <figure>
                <iframe
                  title="Onliest studio location on Google Maps"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3021.813060649456!2d-73.9942936845933!3d40.71596097933143!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a27b4f1c2df%3A0x9d8f8b6ac3e3b0f5!2s27%20Division%20St%2C%20New%20York%2C%20NY%2010002%2C%20USA!5e0!3m2!1sen!2sus!4v1700000000000"
                  width="100%"
                  height="420"
                  style={{ border: 0, width: '100%' }}
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </figure>
            </div>
          </div>
        </header>

        {/* Contact content: info left, form right */}
        <section className="rex-page-section rex-page-section--contact" aria-labelledby="contact-info-heading">
          <div className="rex-page-container rex-page-container--wide">
            <div className="rex-page-contact-grid">
              <div className="rex-page-contact-info">
                <h2 id="contact-info-heading" className="rex-page-section-title">
                  Drop Us a Line
                </h2>
                <p className="rex-page-section-sub">
                  Have a question about Onliest, need help with a demo, or want to talk about partnerships? Reach out
                  and our team will respond as soon as possible.
                </p>

                <div className="rex-page-contact-rows">
                  <div className="rex-page-contact-row">
                    <h3>Email address</h3>
                    <a href="mailto:hello@onliest.com">hello@onliest.com</a>
                  </div>
                  <div className="rex-page-contact-row">
                    <h3>Phone number</h3>
                    <a href="tel:+18002345234">+1 800 234 5234</a>
                  </div>
                  <div className="rex-page-contact-row">
                    <h3>How to find us</h3>
                    <p>
                      27 Division St, New York<br />
                      NY 10002, United States
                    </p>
                  </div>
                  <div className="rex-page-contact-row">
                    <h3>Social</h3>
                    <div className="rex-page-contact-social">
                      <a href="#" aria-label="Visit Onliest on Facebook">
                        <img src="/fb.svg" alt="" className="rex-page-contact-social-icon" />
                      </a>
                      <a href="#" aria-label="Visit Onliest on Instagram">
                        <img src="/insta.svg" alt="" className="rex-page-contact-social-icon" />
                      </a>
                      <a href="#" aria-label="Visit Onliest on LinkedIn">
                        <img src="/in.svg" alt="" className="rex-page-contact-social-icon" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="rex-page-contact-form-card">
                <h2 className="rex-page-section-title">Send a Message</h2>
                <form className="rex-page-contact-form" onSubmit={handleSubmit}>
                  <div className="rex-page-contact-row-inline">
                    <label>
                      <span>Name*</span>
                      <input
                        type="text"
                        name="name"
                        required
                        placeholder="Enter your full name"
                      />
                    </label>
                    <label>
                      <span>E‑mail*</span>
                      <input
                        type="email"
                        name="email"
                        required
                        placeholder="Enter your email address"
                      />
                    </label>
                  </div>
                  <label>
                    <span>Message*</span>
                    <textarea
                      name="message"
                      rows="4"
                      required
                      placeholder="Tell us what you’d like to discuss"
                    />
                  </label>
                  <button type="submit" className="rex-btn rex-btn-primary rex-page-contact-submit">
                    Submit request
                  </button>
                  {formStatus && <p className="rex-page-contact-status" aria-live="polite">{formStatus}</p>}
                </form>
              </div>
            </div>
          </div>
        </section>

        <section className="rex-page-section rex-page-section--contact-faq rex-faq-section" id="faq" aria-labelledby="faq-heading">
          <div className="rex-faq-container">
            <header className="rex-faq-header">
              <h2 id="faq-heading" className="rex-page-hero-title rex-page-hero-title--center">
                Frequently Asked Questions
              </h2>
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
                    Can&apos;t find what you&apos;re looking for? Send us a message above and our team will help quickly.
                  </p>
                  <a href="#contact-heading" className="rex-btn rex-btn-ghost rex-faq-support-cta">
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

