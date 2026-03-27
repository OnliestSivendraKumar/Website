import { useEffect, useState, useRef, useLayoutEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const PAGE_TITLE = 'About Us — Onliest LLC | Custom Sarees & Fashion';
const PAGE_DESCRIPTION = 'Welcome to Onliest LLC. We specialize in custom fashion wear and sarees. Design your unique saree with our user-friendly platform, premium fabrics, and expert craftsmanship.';

const HERO_STATS = [
  { value: '500+', label: 'Custom Sarees Designed' },
  { value: '10+', label: 'Years of Craftsmanship' },
];

const FEATURE_CARDS = [
  {
    title: 'Design & Customize',
    variant: 'accent',
    bullets: ['Wide range of fabrics & colors', 'Patterns & embellishments', 'One-of-a-kind sarees', 'Size charts & fit'],
  },
  {
    title: 'Premium Quality',
    variant: 'dark',
    bullets: ['High-quality fabrics only', 'Skilled artisans', 'Precision & attention to detail', 'Every saree tells a story'],
  },
  {
    title: 'Consulting & Support',
    variant: 'light',
    bullets: ['User-friendly interface', '24/7 support', 'Seamless ordering', 'Exceed your expectations'],
  },
];

const FOUNDERS = [
  { name: 'Vijay K Penmetsa', role: 'CEO', image: 'https://res.cloudinary.com/djlqifbxp/image/upload/v1774509290/ds-1_ao4fyf.png' },
  { name: 'SnehaDeep Goli', role: 'CTO', image: 'https://res.cloudinary.com/djlqifbxp/image/upload/v1774509290/ds-3_maibel.png' },
  { name: 'Kiran Kumar Balla', role: 'COO', image: 'https://res.cloudinary.com/djlqifbxp/image/upload/v1774511608/resolution-editorial_sra5o3.jpg' },
  { name: 'Bhargav Goli', role: 'Architect', image: 'https://res.cloudinary.com/djlqifbxp/image/upload/v1774516937/at-1_mjmni4.png' },
  { name: 'Ramakrishna', role: 'Program Specialist', image: 'https://res.cloudinary.com/djlqifbxp/image/upload/v1774516974/at-2_g4jqln.png' },
  { name: 'Snigdha Penmetsa', role: 'Manager Operations', image: 'https://res.cloudinary.com/djlqifbxp/image/upload/v1774517007/at-3_x4pm6t.png' },
];

const TESTIMONIAL = {
  quote: 'An experience where creativity and craftsmanship intersect — my dream saree came to life.',
  name: 'Kate Chaven',
  role: 'Client',
  image: 'https://res.cloudinary.com/djlqifbxp/image/upload/v1774527088/chatfemale_gmvjtu.png',
};

function IconDesign() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 3l2 4 4 .5-3 3.5.5 4-3.5-2-3.5 2 .5-4-3-3.5 4-.5L12 3z" />
    </svg>
  );
}
function IconQuality() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 2l3 3h4v4l3 3-3 3v4h-4l-3 3-3-3H5v-4l-3-3 3-3V5h4l3-3z" />
      <path d="M8.2 12.2l2.4 2.4L16.2 9" strokeWidth="2" />
    </svg>
  );
}
function IconSupport() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="10" />
      <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
      <path d="M12 17h.01" />
    </svg>
  );
}

const CARD_ICONS = [IconDesign, IconQuality, IconSupport];
const SupportIcon = CARD_ICONS[2];

const MQ_MOBILE = '(max-width: 640px)';
const MQ_TABLET = '(min-width: 641px) and (max-width: 1024px)';

export default function PageWelcome() {
  const [avatarErrors, setAvatarErrors] = useState({});
  const [testimonialAvatarError, setTestimonialAvatarError] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [founderPage, setFounderPage] = useState(0);
  const foundersTrackRef = useRef(null);

  const founderPageSize = isMobile ? 1 : isTablet ? 2 : 3;
  const founderTotalPages = Math.ceil(FOUNDERS.length / founderPageSize);

  useLayoutEffect(() => {
    const mqMobile = window.matchMedia(MQ_MOBILE);
    const mqTablet = window.matchMedia(MQ_TABLET);
    const update = () => {
      setIsMobile(mqMobile.matches);
      setIsTablet(mqTablet.matches);
      setFounderPage(0);
    };
    update();
    mqMobile.addEventListener('change', update);
    mqTablet.addEventListener('change', update);
    return () => {
      mqMobile.removeEventListener('change', update);
      mqTablet.removeEventListener('change', update);
    };
  }, []);

  useLayoutEffect(() => {
    const el = foundersTrackRef.current;
    if (!el) return;
    if (isMobile) {
      const containerW = el.parentElement?.offsetWidth || 280;
      el.style.width = `${FOUNDERS.length * containerW}px`;
      el.style.gap = '0px';
      el.style.transform = `translateX(-${founderPage * containerW}px)`;
      Array.from(el.children).forEach((card) => {
        card.style.flex = `0 0 ${containerW}px`;
        card.style.maxWidth = `${containerW}px`;
      });
    } else {
      const safetyRem = founderPageSize === 2 ? 0.4 : 0.2;
      const gapRem = 1.25 * (founderPageSize - 1) / founderPageSize + safetyRem;
      const cardPct = 100 / founderTotalPages / founderPageSize;
      el.style.width = `${founderTotalPages * 100}%`;
      el.style.gap = '1.25rem';
      el.style.transform = `translateX(-${founderPage * (100 / founderTotalPages)}%)`;
      Array.from(el.children).forEach((card) => {
        card.style.flex = `0 0 calc(${cardPct}% - ${gapRem}rem)`;
        card.style.maxWidth = '';
      });
    }
  }, [founderPage, isMobile, founderTotalPages, founderPageSize]);

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

  return (
    <>
      <Header hideOnPanels={false} />
      <main className="rex-page-inner rex-page-inner--story" id="main-content" role="main">
        {/* Hero: centered title + image + metric blocks + intro (reference layout) */}
        <header className="rex-page-hero rex-page-hero--story" aria-labelledby="welcome-heading">
          <div className="rex-page-container">
            <h1 id="welcome-heading" className="rex-page-hero-title rex-page-hero-title--center">
              The Story Behind Onliest
            </h1>

            <div className="rex-page-hero-row">
              <div className="rex-page-hero-media">
                <figure>
                  <img
                    src="https://res.cloudinary.com/djlqifbxp/image/upload/v1774509290/ds-1_ao4fyf.png"
                    alt="Onliest design studio — custom saree creation."
                    width="640"
                    height="400"
                    fetchPriority="high"
                  />
                </figure>
              </div>
              <div className="rex-page-hero-metrics">
                <div className="rex-page-metric rex-page-metric--dark">
                  <span className="rex-page-metric-value">{HERO_STATS[0].value}</span>
                  <span className="rex-page-metric-label">{HERO_STATS[0].label}</span>
                </div>
                <div className="rex-page-metric rex-page-metric--accent">
                  <span className="rex-page-metric-value">{HERO_STATS[1].value}</span>
                  <span className="rex-page-metric-label">{HERO_STATS[1].label}</span>
                </div>
              </div>
            </div>

            <div className="rex-page-hero-intro">
              <div className="rex-page-hero-intro-col">
                <p>
                  Welcome to Onliest LLC, an ecommerce platform that specializes in custom fashion wear tailored to your unique style. We are a team of passionate designers and entrepreneurs dedicated to the best experience in designing and ordering sarees online.
                </p>
              </div>
              <div className="rex-page-hero-intro-col">
                <p>
                  Our mission is to make it easy and affordable to create custom sarees that are unique and personalized to your taste — whether a traditional saree for a special occasion or a modern, trendy piece for work.
                </p>
              </div>
            </div>
          </div>
        </header>

        {/* Features / Services: asymmetric grid — image, accent card, dark card, image, light card */}
        <section className="rex-page-section rex-page-section--services" aria-labelledby="features-heading">
          <div className="rex-page-container rex-page-container--wide">
            <h2 id="features-heading" className="rex-page-section-title rex-page-section-title--center">
              What We Offer
            </h2>
            <div className="rex-page-services-grid">
              <div className="rex-page-services-cell rex-page-services-cell--img">
                <figure>
                  <img src="https://res.cloudinary.com/djlqifbxp/image/upload/v1774511608/resolution-editorial_sra5o3.jpg" alt="Elegant saree design and craftsmanship." width="480" height="320" loading="lazy" />
                </figure>
              </div>
              {FEATURE_CARDS.slice(0, 2).map((card, i) => {
                const Icon = CARD_ICONS[i];
                return (
                  <div key={card.title} className={`rex-page-services-cell rex-page-service-card rex-page-service-card--${card.variant}`}>
                    <div className="rex-page-service-card-icon" aria-hidden="true">{Icon && <Icon />}</div>
                    <h3 className="rex-page-service-card-title">{card.title}</h3>
                    <ul className="rex-page-service-card-list">
                      {card.bullets.map((b) => (
                        <li key={b}>{b}</li>
                      ))}
                    </ul>
                  </div>
                );
              })}
              <div className="rex-page-services-cell rex-page-services-cell--img">
                <figure>
                  <img src="https://res.cloudinary.com/djlqifbxp/image/upload/v1774509290/ds-3_maibel.png" alt="Custom saree design interface and fabric selection." width="480" height="320" loading="lazy" />
                </figure>
              </div>
              <div className="rex-page-services-cell rex-page-service-card rex-page-service-card--light">
                <div className="rex-page-service-card-icon" aria-hidden="true"><SupportIcon /></div>
                <h3 className="rex-page-service-card-title">{FEATURE_CARDS[2].title}</h3>
                <ul className="rex-page-service-card-list">
                  {FEATURE_CARDS[2].bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonial — 2-column: image left, testimonial card right */}
        <section className="rex-page-section rex-page-section--testimonial" aria-labelledby="testimonial-heading">
          <div className="rex-page-container rex-page-container--wide">
            <h2 id="testimonial-heading" className="rex-visually-hidden">What our clients say</h2>
            <div className="rex-page-testimonial-grid">
              <div className="rex-page-testimonial-media">
                <figure>
                  <img src="https://res.cloudinary.com/djlqifbxp/image/upload/v1774511608/resolution-editorial_sra5o3.jpg" alt="Onliest team and craftsmanship." width="640" height="400" loading="lazy" />
                </figure>
              </div>
              <div className="rex-page-testimonial-card">
                <blockquote className="rex-page-testimonial">
                  <span className="rex-page-testimonial-quote-mark" aria-hidden="true">&ldquo;</span>
                  <p className="rex-page-testimonial-text">{TESTIMONIAL.quote}</p>
                  <footer className="rex-page-testimonial-author">
                    <div className="rex-page-testimonial-avatar" aria-hidden="true">
                      {TESTIMONIAL.image && !testimonialAvatarError ? (
                        <img src={TESTIMONIAL.image} alt="" onError={() => setTestimonialAvatarError(true)} />
                      ) : (
                        <span className="rex-page-testimonial-avatar-initials">KC</span>
                      )}
                    </div>
                    <div>
                      <cite className="rex-page-testimonial-name">{TESTIMONIAL.name}</cite>
                      <span className="rex-page-testimonial-role">{TESTIMONIAL.role}</span>
                    </div>
                  </footer>
                  <div className="rex-page-testimonial-dots" aria-hidden="true">
                    <span className="rex-page-testimonial-dot rex-page-testimonial-dot--active" />
                    <span className="rex-page-testimonial-dot" />
                    <span className="rex-page-testimonial-dot" />
                  </div>
                </blockquote>
              </div>
            </div>
          </div>
        </section>

        {/* Our Professionals / Founders */}
        <section className="rex-page-section rex-page-section--founders" aria-labelledby="founders-heading">
          <div className="rex-page-founders-bg" aria-hidden="true" />
          <div className="rex-page-container rex-page-container--founders">
            <h2 id="founders-heading" className="rex-page-section-title rex-page-section-title--center">
              Our Professionals
            </h2>
            <p className="rex-page-section-sub rex-page-section-sub--center rex-page-founders-sub">
              The people behind Onliest — designers, technologists, and operations — dedicated to your custom saree experience.
            </p>
            <div className="rex-page-founders-carousel">
              <button
                type="button"
                className="rex-page-founders-nav rex-page-founders-nav--prev"
                aria-label="Previous professionals"
                onClick={() => setFounderPage((p) => Math.max(0, p - 1))}
                disabled={founderPage === 0}
              >
                <svg width="11" height="19" viewBox="0 0 11 19" fill="none" aria-hidden="true">
                  <path d="M9.5 1.5L1.5 9.5L9.5 17.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              <div className="rex-page-founders-cards">
                <ul className="rex-page-founders rex-page-founders--row rex-page-founders-track" role="list" ref={foundersTrackRef}>
                  {FOUNDERS.map((person, index) => (
                    <li key={person.name} className="rex-page-founder-card">
                      <div className="rex-page-founder-avatar" aria-hidden="true">
                        {person.image && !avatarErrors[index] ? (
                          <img
                            src={person.image}
                            alt=""
                            onError={() => setAvatarErrors((prev) => ({ ...prev, [index]: true }))}
                          />
                        ) : (
                          <span className="rex-page-founder-initials">
                            {person.name.split(/\s+/).map((n) => n[0]).join('').slice(0, 2)}
                          </span>
                        )}
                      </div>
                      <div className="rex-page-founder-info">
                        <span className="rex-page-founder-name">{person.name}</span>
                        <span className="rex-page-founder-role">{person.role}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              <button
                type="button"
                className="rex-page-founders-nav rex-page-founders-nav--next"
                aria-label="Next professionals"
                onClick={() => setFounderPage((p) => Math.min(founderTotalPages - 1, p + 1))}
                disabled={founderPage === founderTotalPages - 1}
              >
                <svg width="11" height="19" viewBox="0 0 11 19" fill="none" aria-hidden="true">
                  <path d="M1.5 1.5L9.5 9.5L1.5 17.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>
            <div className="rex-page-founders-dots" role="tablist" aria-label="Carousel pages">
              {Array.from({ length: founderTotalPages }, (_, i) => (
                <button
                  key={i}
                  type="button"
                  role="tab"
                  aria-selected={founderPage === i}
                  aria-label={`Page ${i + 1}`}
                  className={`rex-page-founders-dot${founderPage === i ? ' is-active' : ''}`}
                  onClick={() => setFounderPage(i)}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Get In Touch — full-width CTA strip */}
        <section className="rex-page-cta-strip" aria-labelledby="get-in-touch-heading">
          <div className="rex-page-cta-strip-bg" aria-hidden="true">
            <img src="https://res.cloudinary.com/djlqifbxp/image/upload/v1774509290/ds-1_ao4fyf.png" alt="" />
          </div>
          <div className="rex-page-cta-strip-content">
            <h2 id="get-in-touch-heading" className="rex-page-cta-strip-title">Get In Touch</h2>
            <p className="rex-page-cta-strip-text">Thank you for choosing Onliest. We look forward to helping you create your dream saree.</p>
            <a href="/" className="rex-btn rex-btn-primary rex-page-cta-strip-btn">Let&apos;s Talk</a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
