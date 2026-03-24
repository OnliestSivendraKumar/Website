import { useEffect, useMemo, useRef, useState } from 'react';

const DEFAULT_TABS = [
  {
    id: 'onliest-world',
    title: 'ONLIEST WORLD',
    eyebrow: 'Saree Intelligence',
    tabImage: '/edu-world.png',
    items: [
      'Textile intelligence',
      'Composed silhouette',
      'Design',
      '3D prototype',
      'Production and quality check',
      'Storage and longevity',
    ],
    hero: {
      kicker: 'Onliest World Intelligence',
      headline: 'ONLIEST WORLD',
      cta: { label: 'Learn Onliest World', href: '#journey' },
      image: '/edu-world.png',
      imageAlt: 'Onliest world preview',
    },
    detail:
      'Textiles and garments begin their journey at the level of fibre, where raw materials are transformed into yarns and then into fabrics through weaving and other construction techniques. These fabrics develop their character through texture, structure, and drape, shaped by both traditional craftsmanship such as handloom weaving and modern production technologies like powerlooms. As the fabric takes form, decorative techniques such as embroidery, zari, prints, appliqué, beads, and fabric manipulation add layers of texture and visual richness. Colour further influences how these elements interact with the garment and the body, helping create balance and harmony in design. Through this platform, traditional textile knowledge is explored alongside modern technology. Digital tools and garment simulation systems make it possible to study fabrics, design structures, and garment construction in a more visual and accessible way. Together, material, craftsmanship, decoration, and technology come together to transform fibre into fabric and fabric into thoughtfully designed garments.',
  },
  {
    id: 'trending',
    title: 'TRENDING',
    eyebrow: 'Saree Intelligence',
    subtitle: 'What’s hot right now — silhouettes, colors, and styling cues.',
    tabImage: '/ds-9.png',
    items: [
      'Trending saree palettes',
      'Popular blouse necklines',
      'Border & pallu preferences',
      'Surface work intensity',
      'Occasion-first styling',
      'Designer-led picks',
    ],
    hero: {
      kicker: 'Trend Intelligence',
      headline: 'Now',
      cta: { label: 'Learn Trends', href: '#marketplace' },
      image: '/ds-9.png',
      imageAlt: 'Trending preview',
    },
    detail:
      'Trends help you buy confidently without guessing. This module breaks down what’s currently trending in saree colors, border widths, pallu styles, and blouse necklines—plus how to adapt those trends to your body type and occasion. You’ll learn “safe trend” formulas (a trending color + classic silhouette), how to avoid short-lived gimmicks, and how to style one trending saree multiple ways with blouse and jewelry changes. We also include quick checks for trend-versus-timeless so your wardrobe stays premium and wearable.',
  },
  {
    id: 'body-compatability',
    title: 'BODY COMPATABILITY',
    eyebrow: 'Saree Intelligence',
    tabImage: '/edu-body.png',
    items: [
      'Body shapes',
      'Body proportion analysis',
      'Shoulder types',
      'Bust types',
      'Neck types',
      'Back types',
      'Face shape identification',
      'Face shapes & neckline compatibility',
      'Sleeve compatibility',
      'Visual lengthening & narrowing guide',
      'Saree dimension & proportion guide',
    ],
    hero: {
      kicker: 'Body Compatibility',
      headline: 'BodyCompatibility',
      cta: { label: 'Learn Body Compatibility', href: '/education/body-compatibility' },
      image: '/edu-body.png',
      imageAlt: 'Body compatibility illustration',
    },
    detail:
      'You’ve probably experienced it before without realising it: a neckline that instantly feels right, a sleeve length that suddenly makes your arms look longer, or a garment that seems to sit perfectly on your shoulders while another—almost identical—never quite looks balanced. Body compatibility is not about fitting into rigid categories or chasing a single “ideal” body type. Instead, it’s about recognising the natural structure of your body and learning how clothing elements work with it. When elements like neckline, sleeve, shoulder line, saree length, and border placement support your proportions, garments feel more harmonious, flattering, and comfortable. This section helps you identify body structure, proportions, and key features, and understand how design details interact with them to create balance, proportion, and visual harmony.',
  },
  {
    id: 'color',
    title: 'COLOR',
    eyebrow: 'Saree Intelligence',
    tabImage: '/edu-color.png',
    items: [
      'Color theory',
      'Warm and cool tones',
      'Identifying skin undertones',
      'Color pairing',
      'Occasion and color',
      'Cultural meanings of color',
      'Regional color tradition in India',
      'Color and body proportions',
    ],
    hero: {
      kicker: 'Color Intelligence',
      headline: 'Color',
      cta: { label: 'Learn Color', href: '/education/color-theory' },
      image: '/edu-color.png',
      imageAlt: 'Abstract color illustration',
    },
    detail:
      'Color plays a central role in how garments are perceived. Beyond simply adding visual appeal, color influences how a garment interacts with the wearer’s body, the surrounding fabrics, and the decorative elements used within the design. Different colors naturally affect visual perception. Darker shades often create a sense of depth and subtlety, while lighter or brighter colors tend to attract attention. Because of this, designers frequently use color intentionally to guide the viewer’s eye toward particular areas of the garment. The way color is distributed across a garment can also influence how body proportions appear. Balanced color placement helps maintain harmony within the design, while contrast can emphasise certain features such as necklines, sleeves, or borders. For this reason, color is not simply a decorative choice. It becomes an important design tool that shapes the visual character of a garment while supporting balance, expression, and aesthetic harmony.',
  },
  {
    id: 'fabric',
    title: 'FIBRE & FABRIC',
    eyebrow: 'Saree Intelligence',
    tabImage: '/edu-fibre.jpg',
    items: [
      'Fibre foundation',
      'Fabric construction',
      'Weave types',
      'Thread count',
      'Silk types',
      'Cotton types',
      'Fabric behaviour on body',
      'Fabric texture',
    ],
    hero: {
      kicker: 'Fabric Intelligence',
      headline: 'Fibre and Fabric',
      cta: { label: 'Learn Fabric', href: '/education/fibre-foundations' },
      image: '/edu-fibre.jpg',
      imageAlt: 'Fabric texture and fibre illustration',
    },
    detail:
      'Fibre and fabric form the fundamental base of any textile or garment. Fibres are the smallest structural units that are spun into yarns, which are then woven or knitted to create fabrics. The choice of fibre influences the fabric’s strength, texture, breathability, and overall performance. Fabrics can be produced from natural fibres such as cotton and silk or from manufactured fibres such as polyester and viscose. Each fibre type contributes distinct characteristics that affect how the fabric feels, behaves, and drapes when worn. Different fabrics are therefore selected based on the purpose of the garment — lighter fabrics may be chosen for comfort and movement, while heavier or more structured fabrics may be used to create form and durability. Understanding fibre and fabric helps designers make informed material choices, allowing them to balance aesthetics, comfort, and functionality when developing garments.',
  },
  {
    id: 'saree',
    title: 'SAREE',
    eyebrow: 'Saree Intelligence',
    tabImage: '/edu-saree.png',
    items: [
      'Saree weaving',
      'Loom types',
      'Pattern weaving techniques',
      'Silk saree',
    ],
    hero: {
      kicker: 'Saree Intelligence',
      headline: 'Saree',
      cta: { label: 'Learn Saree', href: '/education/saree' },
      image: '/edu-saree.png',
      imageAlt: 'Saree weaving and drape illustration',
    },
    detail:
      'The saree is one of the most enduring garments in the Indian textile tradition. It consists of a long piece of fabric that is draped around the body in various styles, creating a garment that is both structured and fluid. Unlike stitched clothing, the saree relies on draping techniques to shape the fabric around the wearer. The identity of a saree is strongly influenced by the materials and techniques used in its creation. Fibres, weaving methods, dyeing processes, and surface ornamentation all contribute to the texture, weight, and decorative character of the textile. Across different regions, sarees reflect diverse weaving traditions, cultural influences, and artistic expressions. Variations in fabric, pattern, and draping style give each saree its unique identity while maintaining the fundamental structure of the garment.',
  },
  {
    id: 'surface-ornamentation',
    title: 'SURFACE ORNAMENTATION',
    eyebrow: 'Saree Intelligence',
    tabImage: '/edu-orienmentation.png',
    items: [
      'Embroidery techniques',
      'Threads and zari',
      'Beads and stones',
      'Sequins',
      'Appliqué',
      'Lace and trims',
      'Borders and edging',
      'Printing techniques',
      'Design placement',
    ],
    hero: {
      kicker: 'Surface Ornamentation',
      headline: 'Surface Ornamentation',
      cta: { label: 'Learn Surface Ornamentation', href: '/education/surface-ornamentation' },
      image: '/edu-orienmentation.png',
      imageAlt: 'Surface ornamentation illustration',
    },
    detail:
      'Surface ornamentation refers to decorative techniques applied to the surface of fabric to enhance its visual and textural qualities. These techniques transform a plain textile into a richly detailed material by introducing patterns, colour, texture, or dimensional elements. Surface ornamentation may be applied through stitching, printing, weaving, layering, or attaching decorative components. The choice of technique depends on the fabric, the design concept, and the intended use of the garment. In garment design, ornamentation is often placed strategically on areas such as necklines, sleeves, borders, or central panels to highlight key features of the garment. Thoughtful placement ensures that decoration complements the structure and maintains visual balance. Through these techniques, surface ornamentation adds richness, cultural expression, and artistic identity to textiles and garments.',
  },
  {
    id: 'blouse',
    title: 'BLOUSE',
    eyebrow: 'Saree Intelligence',
    tabImage: '/edu-blouse.png',
    items: [
      'Blouse silhouette',
      'Underlining',
      'Body and fit',
      'Structural design elements',
      'Necklines',
      'Sleeve designs',
      'Back designs',
      'Pattern architecture',
      'Blouse and saree compatibility',
      'Design placement and ornamentation',
    ],
    hero: {
      kicker: 'Blouse Intelligence',
      headline: 'Blouse',
      cta: { label: 'Learn Blouse', href: '/education/blouse' },
      image: '/edu-blouse.png',
      imageAlt: 'Blouse design illustration',
    },
    detail:
      'The blouse forms the structured upper component of the saree ensemble. While the saree creates movement and drape around the body, the blouse provides shape, support, and definition to the overall silhouette. Designing a blouse involves several interconnected elements. Fabric selection, garment fit, neckline shapes, sleeve styles, and decorative techniques all contribute to the character of the final garment. Each of these aspects influences how the blouse appears and how comfortably it functions when worn with a saree. A well-designed blouse also considers the proportions of the wearer’s body. Careful attention to fit, seam placement, and garment construction ensures that the blouse supports the saree drape while maintaining visual balance and comfort.',
  },
  {
    id: 'draping',
    title: 'SAREE DRAPING',
    eyebrow: 'Saree Intelligence',
    tabImage: '/edu-drape.png',
    items: [
      'Draping styles',
      'How to drape',
    ],
    hero: {
      kicker: 'Draping Intelligence',
      headline: 'Saree Draping',
      cta: { label: 'Learn Saree Draping', href: '/education/saree' },
      image: '/edu-drape.png',
      imageAlt: 'Draping preview',
    },
    detail:
      'Saree draping is the method of wrapping and arranging the saree fabric around the body to create a complete garment. Unlike stitched clothing, the saree relies on draping techniques to form its shape, allowing the fabric to flow naturally while being secured at key points such as the waist and shoulder. Different draping styles exist across regions, each reflecting local traditions and cultural influences. While the basic structure usually involves tucking the fabric at the waist, forming pleats in the front, and placing the pallu over the shoulder, variations in these steps create distinctive regional styles. The way a saree is draped influences the silhouette, movement, and overall appearance of the garment. Through different pleating methods, pallu arrangements, and fabric handling techniques, saree draping transforms a single length of fabric into a structured and expressive form of dress.',
  },
];

export default function SectionMagazineTabs({ id = 'journey', tabs = DEFAULT_TABS }) {
  const safeTabs = useMemo(() => (Array.isArray(tabs) && tabs.length ? tabs : DEFAULT_TABS), [tabs]);
  const [active, setActive] = useState(safeTabs[0]?.id || DEFAULT_TABS[0].id);
  const sectionRef = useRef(null);
  const tabsListRef = useRef(null);
  const [canScrollTabsLeft, setCanScrollTabsLeft] = useState(false);
  const [canScrollTabsRight, setCanScrollTabsRight] = useState(false);
  /** Ignore scroll-driven active updates until this time (avoids flicker on nav click or content click). */
  const ignoreScrollActiveUntilRef = useRef(0);
  const lastScrollYRef = useRef(typeof window !== 'undefined' ? window.scrollY : 0);
  const scrollDirectionRef = useRef('down');

  const activeIdx = Math.max(0, safeTabs.findIndex((t) => t.id === active));
  const current = safeTabs[activeIdx] || safeTabs[0];

  function onNavClick(tabId) {
    const idx = Math.max(0, safeTabs.findIndex((t) => t.id === tabId));
    const el = sectionRef.current;
    if (!el) return;

    setActive(tabId);
    ignoreScrollActiveUntilRef.current = Date.now() + 900;

    const rect = el.getBoundingClientRect();
    const sectionTop = window.scrollY + rect.top;
    const total = el.offsetHeight - window.innerHeight;
    const t = safeTabs.length <= 1 ? 0 : idx / (safeTabs.length - 1);
    window.scrollTo({ top: sectionTop + Math.max(0, total) * t, behavior: 'smooth' });
  }

  function onSummaryPointerDown() {
    ignoreScrollActiveUntilRef.current = Date.now() + 400;
  }

  function onSkipNextSection() {
    const journey = sectionRef.current;
    const trainer = document.querySelector('#book-trainer');
    if (!journey || !trainer) return;

    const offset = 80;
    const journeyRect = journey.getBoundingClientRect();
    const trainerRect = trainer.getBoundingClientRect();
    const journeyTop = window.scrollY + journeyRect.top - offset;
    const trainerTop = window.scrollY + trainerRect.top - offset;

    const dir = scrollDirectionRef.current;
    // Debug logs to understand skip behaviour
    // eslint-disable-next-line no-console
    console.log('[SkipNext] dir=', dir, 'scrollY=', window.scrollY, {
      journeyTop,
      trainerTop,
    });

    const target = dir === 'up' ? journeyTop : trainerTop;
    // eslint-disable-next-line no-console
    console.log('[SkipNext] scrolling to', target);
    window.scrollTo({ top: target });
  }

  useEffect(() => {
    let raf = 0;
    const onScroll = () => {
      if (raf) return;
      raf = window.requestAnimationFrame(() => {
        raf = 0;
        if (Date.now() < ignoreScrollActiveUntilRef.current) return;

        const el = sectionRef.current;
        if (!el) return;

        const y = window.scrollY;
        const prevY = lastScrollYRef.current;
        if (y > prevY) scrollDirectionRef.current = 'down';
        else if (y < prevY) scrollDirectionRef.current = 'up';
        lastScrollYRef.current = y;

        // Debug current scroll direction while inside Saree Intelligence section
        // eslint-disable-next-line no-console
        console.log('[Scroll] y=', y, 'prevY=', prevY, 'dir=', scrollDirectionRef.current);

        const rect = el.getBoundingClientRect();
        const sectionTop = window.scrollY + rect.top;
        const total = el.offsetHeight - window.innerHeight;
        if (total <= 0) return;

        const within = y >= sectionTop && y <= sectionTop + total;
        if (!within) return;

        const t = (y - sectionTop) / total; // 0..1
        const idx = Math.max(0, Math.min(safeTabs.length - 1, Math.floor(t * safeTabs.length)));
        const tabId = safeTabs[idx]?.id;
        if (tabId) setActive((prev) => (prev === tabId ? prev : tabId));
      });
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => {
      window.removeEventListener('scroll', onScroll);
      if (raf) window.cancelAnimationFrame(raf);
    };
  }, [safeTabs]);

  useEffect(() => {
    const el = tabsListRef.current;
    if (!el) return;

    let raf = 0;
    const update = () => {
      if (raf) return;
      raf = window.requestAnimationFrame(() => {
        raf = 0;
        const max = el.scrollWidth - el.clientWidth;
        setCanScrollTabsLeft(el.scrollLeft > 2);
        setCanScrollTabsRight(max - el.scrollLeft > 2);
      });
    };

    update();
    el.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    return () => {
      el.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
      if (raf) window.cancelAnimationFrame(raf);
    };
  }, [safeTabs.length]);

  function scrollTabsBy(dir) {
    const el = tabsListRef.current;
    if (!el) return;
    const amount = Math.max(220, Math.floor(el.clientWidth * 0.8));
    el.scrollBy({ left: dir * amount, behavior: 'smooth' });
  }

  return (
    <section
      id={id}
      className="rex-magazine rex-magazine--pinned"
      ref={sectionRef}
      style={{ '--steps': safeTabs.length }}
    >
      <div className="rex-magazine-pin">
        <div className="rex-magazine-inner">
        <header className="rex-magazine-header">
          <p className="rex-magazine-eyebrow">Education Hub</p>
          <h2 className="rex-magazine-title">Saree Intelligence</h2>
          {/* <p className="rex-magazine-subtitle">
            Learn fabric, saree structure, blouse design, draping, and styling — scroll the modules and the navigation will follow.
          </p> */}
        </header>

        <aside className="rex-magazine-tabs" aria-label="Journey tabs">
          <button
            type="button"
            className="rex-magazine-tab-arrow rex-magazine-tab-arrow--prev"
            aria-label="Scroll tabs left"
            onClick={() => scrollTabsBy(-1)}
            disabled={!canScrollTabsLeft}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <div className="rex-magazine-tabs-list" role="tablist" ref={tabsListRef}>
            {safeTabs.map((t) => (
              <button
                key={t.id}
                type="button"
                role="tab"
                aria-selected={t.id === active}
                className={`rex-magazine-tab${t.id === active ? ' is-active' : ''}`}
                onClick={() => onNavClick(t.id)}
              >
                <span className="rex-magazine-tab-img" aria-hidden="true">
                  <img src={t.tabImage} alt="" />
                </span>
                <span className="rex-magazine-tab-text">
                  <span className="rex-magazine-tab-title">{t.title}</span>
                </span>
              </button>
            ))}
          </div>
          <button
            type="button"
            className="rex-magazine-tab-arrow rex-magazine-tab-arrow--next"
            aria-label="Scroll tabs right"
            onClick={() => scrollTabsBy(1)}
            disabled={!canScrollTabsRight}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </aside>

        <div className="rex-magazine-main" aria-label="Journey content" onPointerDown={onSummaryPointerDown}>
          <div className="rex-magazine-layout">
            <div className="rex-magazine-hero">
              <div className="rex-magazine-hero-image">
                <img src={current.hero?.image} alt={current.hero?.imageAlt || ''} />
              </div>
              <div className="rex-magazine-hero-copy">
                <p className="rex-magazine-hero-kicker">Onliest Article</p>
                <h3 className="rex-magazine-hero-headline">{current.hero?.headline || current.title}</h3>
                <div className="rex-magazine-hero-tags" role="list">
                  {(current.items || []).map((it) => {
                    const label = typeof it === 'string' ? it : it.label;
                    const href = typeof it === 'object' && it.href ? it.href : `#${label.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '')}`;
                    return (
                      <a
                        key={label}
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rex-magazine-hero-tag"
                        role="listitem"
                      >
                        <span className="rex-magazine-hero-tag-text">{label}</span>
                        <span className="rex-magazine-hero-tag-icon" aria-hidden="true">
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                            <polyline points="15 3 21 3 21 9" />
                            <line x1="10" y1="14" x2="21" y2="3" />
                          </svg>
                        </span>
                      </a>
                    );
                  })}
                </div>
              </div>
              {current.detail && <p className="rex-magazine-hero-detail">{current.detail}</p>}
              {current.hero?.cta?.label && (
                <div className="rex-magazine-hero-cta-row">
                  <a href={current.hero?.cta?.href || '#'} className="rex-btn rex-btn-primary rex-magazine-hero-cta">
                    {current.hero?.cta?.label}
                  </a>
                  <button
                    type="button"
                    className="rex-btn rex-btn-ghost rex-magazine-skip-next"
                    onClick={onSkipNextSection}
                  >
                    Skip to next section
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
        </div>
      </div>
    </section>
  );
}

