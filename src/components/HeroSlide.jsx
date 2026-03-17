import { useEffect, useState } from 'react';

const GALLERY_COL_1 = ['/ds-1.png', '/ds-4.png', '/ds-7.png', '/ds-10.png'];
const GALLERY_COL_2 = ['/ds-2.png', '/ds-9.png', '/ds-8.png', '/ds-11.png'];
const GALLERY_COL_3 = ['/ds-3.png', '/ds-6.gif', '/ds-9.png', '/ds-12.png'];

// Motion GIFs — one per column, inserted at a random position on load
const MOTION_GIFS = ['/mot-1.gif', '/mot-2.gif', '/mot-3.gif'];

function buildColWithGif(col, gifSrc) {
  const arr = [...col];
  const insertAt = Math.floor(Math.random() * (arr.length + 1));
  arr.splice(insertAt, 0, gifSrc);
  return arr;
}

const GALLERY_COLS_WITH_GIFS = [
  buildColWithGif(GALLERY_COL_1, MOTION_GIFS[0]),
  buildColWithGif(GALLERY_COL_2, MOTION_GIFS[1]),
  buildColWithGif(GALLERY_COL_3, MOTION_GIFS[2]),
];

const STORY_SLIDES = [
  {
    id: 'section-0-origin',
    badge: 'ONLIEST JOURNEY · SECTION 0',
    sectionLabel: 'Welcome to Onliest',
    headline: (
      <>
        <em>Onliest</em> the World
        <br />
        Has Never Seen.
      </>
    ),
    subhead: 'Powered by AI. Inspired by Heritage. Crafted for You.',
    body: [
      'Create sarees and blouses shaped around your body, your style, and your imagination.',
      'Intelligent design technology built for the future of couture fashion.',
      'Every piece feels like it was made only... More',
    ],
    primaryCta: { label: 'Start Designing', href: '#design' },
    secondaryCta: { label: 'Explore the Experience', href: '#experience' },
  },
  {
    id: 'section-1-problem',
    badge: 'ONLIEST JOURNEY · SECTION 1',
    sectionLabel: 'The Problem',
    headline: 'Fashion Was Never Meant to Be Standardized',
    subhead: null,
    body: [
      'For centuries, fashion has relied on standard sizes and fixed designs.',
      'Bodies and tastes are not standard — they are singular.',
      'True elegance was never meant to be mass-produced; it belongs in the hands of the one who wears it... More',
    ],
  },
  {
    id: 'section-2-awakening',
    badge: 'ONLIEST JOURNEY · SECTION 2',
    sectionLabel: 'The Awakening',
    headline: 'You Were Always Meant to Create',
    subhead: null,
    body: [
      'What if fashion didn’t limit your choices but expanded them?',
      'What if you could design something no one else in the world owns?',
      'Onliest unlocks something deeper: your creativity, your confidence, and a garment that carries your name... More',
    ],
  },
  {
    id: 'section-3-vision',
    badge: 'ONLIEST JOURNEY',
    sectionLabel: null,
    headline: 'Couture Reimagined Through Intelligence',
    subhead: null,
    body: [
      'Onliest reimagines couture through artificial intelligence and precision design.',
      'Every saree and blouse is mapped to your body, your preferences, and your story.',
      'Nothing is pulled from a rack — each piece begins as a blank canvas created by you... More',
    ],
  },
  {
    id: 'section-5-self-discovery',
    badge: 'ONLIEST JOURNEY · SECTION 5',
    sectionLabel: 'The Self-Discovery Layer',
    headline: 'Fashion That Reveals Who You Are',
    subhead: null,
    body: [
      'The moment you create something uniquely yours, you discover something more than design.',
      'You discover your taste, your confidence, and your creative identity.',
      'And when you wear it, it doesn’t just look beautiful — it becomes the design others admire, the design others wish they had created... More',
    ],
  },
  {
    id: 'section-7-emotion',
    badge: 'ONLIEST JOURNEY · SECTION 7',
    sectionLabel: 'The Emotion',
    headline: 'The Most Beautiful Saree in the World',
    subhead: null,
    body: [
      '…should be the one designed by you, for you.',
      'Not mass fashion. Not template designs. Not ordinary clothing.',
      'Onliest is the start of a new era where technology meets craftsmanship, so every woman can wear something that is truly and only hers... More',
    ],
    primaryCta: { label: 'Design Now', href: '#design' },
    secondaryCta: { label: 'Request a Demo', href: '#demo' },
  },
];

export default function HeroSlide() {
  const [activeIdx, setActiveIdx] = useState(0);
  const totalSlides = STORY_SLIDES.length;
  useEffect(() => {
    if (!totalSlides) return;

    const timer = setInterval(() => {
      setActiveIdx((prev) => (prev + 1) % totalSlides);
    }, 8000);

    return () => clearInterval(timer);
  }, [totalSlides]);

  return (
    <section className="rex-hero-slide" aria-label="Hero — Cinematic Storytelling">
      <div className="rex-hero-inner">
        {/* Left: cinematic story carousel with crossfade */}
        <div className="rex-hero-copy">
          <div className="rex-hero-copy-panels">
            {STORY_SLIDES.map((slide, index) => (
              <div
                key={slide.id}
                className={`rex-hero-copy-panel${index === activeIdx ? ' is-active' : ''}`}
                aria-hidden={index !== activeIdx}
                role="tabpanel"
                id={`hero-panel-${slide.id}`}
              >
                {(slide.sectionLabel || slide.badge) && (
                  <span className="rex-hero-badge">{slide.sectionLabel || slide.badge}</span>
                )}
                <h2 className="rex-hero-headline">{slide.headline}</h2>
                {slide.subhead && <p className="rex-hero-subhead">{slide.subhead}</p>}
                {slide.body?.map((paragraph, idx) => {
                  const isLast = idx === slide.body.length - 1;
                  const endsWithMore = isLast && paragraph.endsWith('... More');
                  const text = endsWithMore ? paragraph.slice(0, -7).trim() : paragraph; // remove "... More"
                  return (
                    <p key={`${slide.id}-${idx}`} className="rex-hero-desc">
                      {text}
                      {endsWithMore && (
                        <>
                          ...{' '}
                          <a
                            href={slide.moreHref || '#journey'}
                            className="rex-hero-more-link"
                            aria-label={`Read more about ${slide.sectionLabel || slide.headline}`}
                          >
                            More
                          </a>
                        </>
                      )}
                    </p>
                  );
                })}
              </div>
            ))}
          </div>

          <div className="rex-hero-carousel-nav" aria-label="Hero story navigation">
            <div className="rex-hero-cta-inline">
              <a href="#design" className="rex-btn rex-btn-primary">
                Design Now
              </a>
              <a href="#demo" className="rex-btn rex-btn-ghost">
                Request a Demo
              </a>
            </div>

            <div className="rex-hero-carousel-controls">
              <button
                type="button"
                className="rex-hero-carousel-arrow rex-hero-carousel-prev"
                aria-label="Previous slide"
                onClick={() => setActiveIdx((i) => (i === 0 ? totalSlides - 1 : i - 1))}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M15 18l-6-6 6-6" />
                </svg>
              </button>
              <p className="rex-hero-carousel-count">
                {String(activeIdx + 1).padStart(2, '0')} / {String(totalSlides).padStart(2, '0')}
              </p>
              <div className="rex-hero-carousel-dots" role="tablist">
                {STORY_SLIDES.map((slide, index) => (
                  <button
                    key={slide.id}
                    type="button"
                    className={`rex-hero-carousel-dot${index === activeIdx ? ' is-active' : ''}`}
                    onClick={() => setActiveIdx(index)}
                    aria-label={slide.sectionLabel || `Go to story ${index + 1}`}
                    aria-pressed={index === activeIdx}
                  />
                ))}
              </div>
              <button
                type="button"
                className="rex-hero-carousel-arrow rex-hero-carousel-next"
                aria-label="Next slide"
                onClick={() => setActiveIdx((i) => (i + 1) % totalSlides)}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M9 18l6-6-6-6" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Right: 3-column scrolling gallery */}
        <div className="rex-hero-gallery-wrap">
          <div className="rex-hero-gallery">
            {GALLERY_COLS_WITH_GIFS.map((col, colIdx) => (
              <div
                key={colIdx}
                className={`rex-hero-gallery-col${colIdx === 1 ? ' rex-hero-gallery-col--reverse' : ''}`}
              >
                {col.map((src, i) => (
                  <div key={`${colIdx}-${i}`} className="rex-hero-gallery-card">
                    <img
                      src={src}
                      alt="Design studio look"
                      className="rex-hero-gallery-img"
                      loading={i === 0 ? 'eager' : 'lazy'}
                      draggable="false"
                    />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
