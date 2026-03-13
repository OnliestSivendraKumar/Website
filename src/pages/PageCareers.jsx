import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const PAGE_TITLE = 'Careers — Onliest LLC';
const PAGE_DESCRIPTION =
  'Join Onliest — inspire and get inspired by professional experts. Explore open roles in design, technology, and operations.';

const JOBS = [
  {
    id: 'it-operations',
    title: 'IT Operations Specialist',
    type: 'Full time',
    image: '/ds-6.png',
    description:
      'We are currently seeking a highly motivated individual to fill an I.T. role. This position will provide remote and onsite hands-on support to staff, vendors, and customers as well as proactively identify issues.',
  },
  {
    id: 'it-desktop',
    title: 'IT Desktop Support',
    type: 'Full time',
    image: '/ds-2.png',
    description:
      'The Onliest IT team believes in full transparency, being flexible, reliable and great team players. We are problem solvers, always ready to help and support each other and the organization.',
  },
  {
    id: 'summer-intern',
    title: 'IT Summer Intern',
    type: 'Full time',
    image: '/ds-4.png',
    description:
      'Onliest is looking for a summer intern to work in the Information & Technology Services area. This position is part of a team which supports Microsoft Server Operating Systems, storage systems, and client device technologies.',
  },
  {
    id: 'software-engineer',
    title: 'Software Engineer',
    type: 'Full time',
    image: '/ds-5.png',
    description:
      'In partnership with others on the team, you will create enhancements and/or new services and solutions based on data acquisition and analytics. You will analyze, design, program, debug and modify software interfaces for our system.',
  },
];

const GALLERY_ITEMS = [
  { id: 'g1', image: '/ds-1.png', alt: 'Collaborative team at Onliest' },
  { id: 'g2', image: '/ds-2.png', alt: 'Our workspace' },
  { id: 'g3', image: '/ds-3.png', alt: 'Focus and technology' },
  { id: 'g4', image: '/ds-4.png', alt: 'Design and innovation' },
];

function CloseIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M18 6L6 18M6 6l12 12" />
    </svg>
  );
}

function MagnifierIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.35-4.35" />
    </svg>
  );
}

export default function PageCareers() {
  const [galleryPopup, setGalleryPopup] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    document.title = PAGE_TITLE;
    const meta = document.querySelector('meta[name="description"]');
    const prev = meta?.getAttribute('content') || '';
    if (meta) meta.setAttribute('content', PAGE_DESCRIPTION);
    return () => {
      document.title = 'Onliest';
      const d = document.querySelector('meta[name="description"]');
      if (d) d.setAttribute('content', prev);
    };
  }, []);

  useEffect(() => {
    if (galleryPopup !== null) {
      document.body.style.overflow = 'hidden';
      const onEscape = (e) => e.key === 'Escape' && setGalleryPopup(null);
      document.addEventListener('keydown', onEscape);
      return () => {
        document.body.style.overflow = '';
        document.removeEventListener('keydown', onEscape);
      };
    }
  }, [galleryPopup]);

  const handleApply = (jobId) => {
    navigate('/contact', { state: { applyFor: jobId } });
  };

  return (
    <>
      <Header hideOnPanels={false} />
      <main className="rex-page-inner rex-page-inner--story rex-careers-page" id="main-content" role="main">
        <header className="rex-page-hero rex-page-hero--story" aria-labelledby="careers-heading">
          <div className="rex-page-container rex-page-container--narrow">
            <h1 id="careers-heading" className="rex-page-hero-title rex-page-hero-title--center">
              Careers
            </h1>
            <p className="rex-careers-hero-subtitle">
              Become a part of our big family to inspire and get inspired by{' '}
              <span className="rex-careers-hero-highlight">professional experts</span>.
            </p>
            <div className="rex-page-hero-media rex-careers-hero-media">
              <figure>
                <img
                  src="/resolution-editorial.jpg"
                  alt="Onliest studio team and space."
                  loading="lazy"
                  width="960"
                  height="420"
                />
              </figure>
            </div>
          </div>
        </header>

        <section className="rex-page-section rex-careers-jobs" aria-label="Open positions">
          <div className="rex-page-container rex-page-container--wide">
            <div className="rex-careers-jobs-list">
              {JOBS.map((job, index) => (
                <article
                  key={job.id}
                  className={`rex-careers-job-row${index % 2 === 1 ? ' rex-careers-job-row--alt' : ''}`}
                >
                  {job.image && (
                    <div className="rex-careers-job-media" aria-hidden="true">
                      <img src={job.image} alt="" loading="lazy" />
                    </div>
                  )}
                  <div className="rex-careers-job-main">
                    <div className="rex-careers-job-head">
                      <h2 className="rex-careers-job-title">{job.title}</h2>
                      <span className="rex-careers-job-type">{job.type}</span>
                    </div>
                    <p className="rex-careers-job-desc">{job.description}</p>
                  </div>
                  <div className="rex-careers-job-cta">
                    <button
                      type="button"
                      className="rex-btn rex-btn-primary rex-careers-job-btn"
                      onClick={() => handleApply(job.id)}
                    >
                      Apply now
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="rex-page-section rex-careers-visit" aria-label="Visit us">
          <div className="rex-page-container rex-page-container--narrow">
            <h2 className="rex-careers-visit-title">Pay a visit & have some coffee!</h2>
            <a href="/about" className="rex-careers-visit-link">
              Learn more about us →
            </a>
            <div className="rex-careers-gallery">
              {GALLERY_ITEMS.map((item, index) => (
                <button
                  key={item.id}
                  type="button"
                  className="rex-careers-gallery-item"
                  onClick={() => setGalleryPopup(index)}
                  aria-label={`View ${item.alt}`}
                >
                  <img src={item.image} alt={item.alt} loading="lazy" />
                  <span className="rex-careers-gallery-overlay">
                    <MagnifierIcon />
                  </span>
                </button>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />

      {galleryPopup !== null && (
        <div
          className="rex-careers-popup"
          role="dialog"
          aria-modal="true"
          aria-label="Image gallery"
          onClick={() => setGalleryPopup(null)}
        >
          <button
            type="button"
            className="rex-careers-popup-close"
            aria-label="Close"
            onClick={() => setGalleryPopup(null)}
          >
            <CloseIcon />
          </button>
          <div className="rex-careers-popup-inner" onClick={(e) => e.stopPropagation()}>
            <img
              src={GALLERY_ITEMS[galleryPopup].image}
              alt={GALLERY_ITEMS[galleryPopup].alt}
              className="rex-careers-popup-img"
            />
          </div>
        </div>
      )}
    </>
  );
}
