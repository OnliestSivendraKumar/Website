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
      'Create perfectly fitted sarees and blouses designed around your body, your style, and your imagination — using intelligent design technology built for the future of couture fashion.',
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
      'For centuries, fashion followed standard sizes and fixed designs.',
      'But people are not standard.',
      'And true elegance was never meant to be mass-produced.',
    ],
  },
  {
    id: 'section-2-awakening',
    badge: 'ONLIEST JOURNEY · SECTION 2',
    sectionLabel: 'The Awakening',
    headline: 'You Were Always Meant to Create',
    subhead: null,
    body: [
      'What if fashion didn’t limit your choices?',
      'What if you could design something no one else in the world owns?',
      'Onliest unlocks something deeper: your creativity, your confidence, your individuality.',
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
      'Every saree and blouse becomes a creation designed exclusively for you — not chosen from a rack, but created by you.',
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
      'And when you wear it, it doesn’t just look beautiful — it becomes the design others admire, the design others wish they had created.',
    ],
  },
  {
    id: 'section-7-emotion',
    badge: 'ONLIEST JOURNEY · SECTION 7',
    sectionLabel: 'The Emotion',
    headline: 'Because the Most Beautiful Saree in the World…',
    subhead: null,
    body: [
      '…should be the one designed by you.',
      'Not mass fashion. Not template designs. Not ordinary clothing.',
      'Onliest represents the beginning of a new era where technology meets timeless craftsmanship, allowing every woman to experience true personalized couture.',
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
                {slide.body?.map((paragraph) => (
                  <p key={paragraph} className="rex-hero-desc">
                    {paragraph}
                  </p>
                ))}
                {(slide.primaryCta || slide.secondaryCta) && (
                  <div className="rex-cta-row rex-hero-cta-row">
                    {slide.primaryCta && (
                      <a href={slide.primaryCta.href} className="rex-btn rex-btn-primary">
                        {slide.primaryCta.label}
                      </a>
                    )}
                    {slide.secondaryCta && (
                      <a href={slide.secondaryCta.href} className="rex-btn rex-btn-ghost">
                        {slide.secondaryCta.label}
                      </a>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="rex-hero-carousel-nav" aria-label="Hero story navigation">
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
