import { useEffect, useMemo, useRef, useState } from 'react';

const DEFAULT_TABS = [
  {
    id: 'onliest-world',
    title: 'ONLIEST WORLD',
    eyebrow: 'Saree & Blouse Intelligence',
    tabImage: '/ds-5.png',
    items: [
      'Textile intelligence',
      'Silhouette architecture',
      'Design',
      '3D technology',
      'Production and quality',
      'Storage and longevity values',
    ],
    hero: {
      kicker: 'Onliest World Intelligence',
      headline: 'Architecture',
      cta: { label: 'Explore Modules', href: '#journey' },
      image: '/ds-10.png',
      imageAlt: 'Onliest world preview',
    },
    detail:
      'Build a strong foundation before you buy. Understand textiles, silhouette logic, and design language so you can read quality at a glance. Learn how 3D technology supports better fit decisions, what “production quality” really means (finishing, stitching, consistency), and how to store sarees for long-term longevity without losing sheen or drape. You’ll also learn quick checks for fabric authenticity, how to spot imbalance in motifs/borders, and how to build a wardrobe that covers daily wear, festive wear, and statement occasions with fewer, smarter pieces. Finally, we break down common buying traps (overpaying for surface shine, ignoring edge finishing) and give you a simple checklist you can reuse before every purchase.',
  },
  {
    id: 'trending',
    title: 'TRENDING',
    eyebrow: 'Saree & Blouse Intelligence',
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
      cta: { label: 'Explore Trends', href: '#marketplace' },
      image: '/ds-9.png',
      imageAlt: 'Trending preview',
    },
    detail:
      'Trends help you buy confidently without guessing. This module breaks down what’s currently trending in saree colors, border widths, pallu styles, and blouse necklines—plus how to adapt those trends to your body type and occasion. You’ll learn “safe trend” formulas (a trending color + classic silhouette), how to avoid short-lived gimmicks, and how to style one trending saree multiple ways with blouse and jewelry changes. We also include quick checks for trend-versus-timeless so your wardrobe stays premium and wearable.',
  },
  {
    id: 'fabric',
    title: 'FABRIC',
    eyebrow: 'Saree & Blouse Intelligence',
    tabImage: '/ds-2.png',
    items: [
      'Fibre types',
      'Weave types',
      'Thread count',
      'GSM',
      'Drape behavior',
    ],
    hero: {
      kicker: 'Fabric Intelligence',
      headline: 'Textile Intelligence',
      cta: { label: 'Learn Fabric', href: '#journey' },
      image: '/ds-8.png',
      imageAlt: 'Fabric preview',
    },
    detail:
      'Fabric determines fall, comfort, and finish. Learn how fibre, weave, thread count, and GSM change weight, opacity, shine, and breathability. Understand drape behavior (how it moves, where it clings, how it pleats) so you can predict how a saree will sit on your body—and how a blouse will keep structure across necklines and sleeves. We also cover practical buying cues: when a fabric needs lining, how to avoid static/creasing issues, and how to choose fabrics that photograph well under indoor lighting. Plus, you’ll get quick “what to pick” guidance for summer heat, monsoon humidity, office wear, and long wedding functions.',
  },
  {
    id: 'saree',
    title: 'SAREE',
    eyebrow: 'Saree & Blouse Intelligence',
    tabImage: '/ds-3.png',
    items: [
      'Saree components',
      'Silk sarees',
      'Cotton sarees',
    ],
    hero: {
      kicker: 'Saree Intelligence',
      headline: 'Components',
      cta: { label: 'Explore Sarees', href: '#marketplace' },
      image: '/ds-12.png',
      imageAlt: 'Saree preview',
    },
    detail:
      'A saree is a system of parts—body, border, pallu, and detailing—and each part changes the final look. Compare silk vs cotton by sheen, weight, pleat behavior, and comfort in heat/humidity. Use this module to choose the right category for occasions, seasons, and styling goals (statement pallu, minimal border, heavy festive detailing, or everyday ease). You’ll also learn how border width affects height/proportion, how pallu length impacts styling options, and how to choose components that pair effortlessly with multiple blouse styles. We also share “safe combinations” for first-time buyers and how to build a versatile rotation from 2–3 sarees that cover many events.',
  },
  {
    id: 'blouse',
    title: 'BLOUSE',
    eyebrow: 'Saree & Blouse Intelligence',
    tabImage: '/ds-4.png',
    items: [
      'Blouse structure',
      'Silhouettes',
      'Necklines',
      'Sleeves',
      'Lining',
      'Fasteners',
      'Design placement',
      'Blouses for different occasions',
    ],
    hero: {
      kicker: 'Blouse Intelligence',
      headline: 'Fit & Design',
      cta: { label: 'Explore Blouses', href: '#marketplace' },
      image: '/ds-7.png',
      imageAlt: 'Blouse preview',
    },
    detail:
      'Blouse structure decides comfort and silhouette. Learn how necklines, sleeves, lining, and fasteners affect support, movement, and finishing. Understand design placement (front/back focus, sleeve detailing, borders) and how to balance it with your saree. Then choose silhouettes that work for your body type, bust shape, shoulder line, and the occasion—from minimal classics to statement backs. We also include fit tips (armhole comfort, strap placement, bust darts), fabric choices for blouses, and how to make one blouse work across multiple sarees with smart color and detail placement. You’ll also get a tailoring checklist (measurements, ease, seam allowance) so the final blouse feels premium and comfortable, not restrictive.',
  },
  {
    id: 'surface-ornamentation',
    title: 'SURFACE ORNAMENTATION',
    eyebrow: 'Saree & Blouse Intelligence',
    tabImage: '/ds-6.png',
    items: [
      'Embroidery',
      'Beads & Stones',
      'Appliqué',
      'Lace & Trims',
      'Prints',
      'Fabric Manipulation',
      'Zari',
      'Motif Placement',
    ],
    hero: {
      kicker: 'Surface Ornamentation',
      headline: 'Ornamentation',
      cta: { label: 'Explore Craft', href: '#journey' },
      image: '/ds-6.png',
      imageAlt: 'Ornamentation preview',
    },
    detail:
      'Surface work changes value, durability, and visual weight. Understand embroidery density, bead/stones placement, appliqué edges, lace quality, prints, fabric manipulation, and zari. Learn where heavy work adds elegance (pallu/border) and where it can overwhelm (full body), and how motif placement affects proportion, height, and balance in photographs and real life. You’ll also learn care basics (what snags, what fades), how to judge handwork vs machine finishing, and how to select ornamentation that stays comfortable for long wear. We also cover quality cues like backing cleanliness, thread ends, edge sealing, and how to avoid “itchy” work around arms and waist.',
  },
  {
    id: 'color',
    title: 'COLOR',
    eyebrow: 'Saree & Blouse Intelligence',
    tabImage: '/ds-9.png',
    items: [
      'Color theory',
      'Skin tone and color selection',
      'Occasion based colors',
      'Regional color traditions',
      'Trending colors',
      'Saree blouse pairing',
    ],
    hero: {
      kicker: 'Color Intelligence',
      headline: 'Pairing & Theory',
      cta: { label: 'Explore Colors', href: '#journey' },
      image: '/ds-9.png',
      imageAlt: 'Color preview',
    },
    detail:
      'Color creates impact faster than anything else. Use theory (contrast, harmony, undertones) plus skin tone selection to find shades that light up your face. Learn occasion rules, regional traditions, and trending palettes—then master saree–blouse pairing with safe classics and bold combinations that still feel premium and intentional. We also cover metals (gold vs silver jewelry), makeup harmony, and how to reuse a statement saree by rotating blouse colors for different moods. You’ll also learn a simple “3-color formula” (base + accent + metal) so outfits look intentional in photos and in person.',
  },
  {
    id: 'body-compatability',
    title: 'BODY COMPATABILITY',
    eyebrow: 'Saree & Blouse Intelligence',
    tabImage: '/ds-11.png',
    items: [
      'Body Types',
      'Bust Types',
      'Neck Types',
      'Shoulder Types',
      'Arm Types',
      'Waist & Torso',
      'Face Shape',
      'Neckline Compatibility Guide',
    ],
    hero: {
      kicker: 'Body Compatibility',
      headline: 'Compatibility',
      cta: { label: 'Find Your Fit', href: '#journey' },
      image: '/ds-11.png',
      imageAlt: 'Body compatibility preview',
    },
    detail:
      'Choose styles that flatter your natural proportions. Map body, bust, neck, shoulders, arms, waist/torso, and face shape to the right neckline and blouse silhouette. Use the compatibility guide to avoid common fit mistakes (gaping necklines, tight armholes, unbalanced sleeve lengths) and to select cuts that create a clean, confident line from every angle. You’ll also get quick “best picks” for common body profiles, plus how to adjust drape height and sleeve length to visually balance shoulders, waist, and hips. We also include confidence-first styling tips: where to add structure, where to soften lines, and how to choose jewelry/neckline pairing that flatters the face.',
  },
  {
    id: 'draping',
    title: 'DRAPING',
    eyebrow: 'Saree & Blouse Intelligence',
    tabImage: '/ds-12.png',
    items: [
      'Draping types',
      'How to drape',
    ],
    hero: {
      kicker: 'Draping Intelligence',
      headline: 'How to Drape',
      cta: { label: 'Start Draping', href: '#journey' },
      image: '/ds-12.png',
      imageAlt: 'Draping preview',
    },
    detail:
      'Draping controls balance, movement, and comfort. Learn draping types and step-by-step methods for pleats, pallu placement, and pinning so the saree sits cleanly and stays secure all day. Understand how fabric weight changes drape technique, and how to adjust for height, waist placement, and the occasion (work, wedding, or travel). We also include tips for preventing pleat drift, choosing the right pin points, and styling the pallu for both modern and traditional looks without bulk. Finally, you’ll learn quick fixes (re-pin points, pleat tightening, footwear considerations) so drapes stay neat from entry to exit.',
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

  useEffect(() => {
    let raf = 0;
    const onScroll = () => {
      if (raf) return;
      raf = window.requestAnimationFrame(() => {
        raf = 0;
        if (Date.now() < ignoreScrollActiveUntilRef.current) return;

        const el = sectionRef.current;
        if (!el) return;

        const rect = el.getBoundingClientRect();
        const sectionTop = window.scrollY + rect.top;
        const total = el.offsetHeight - window.innerHeight;
        if (total <= 0) return;

        const y = window.scrollY;
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
          <h2 className="rex-magazine-title">Saree & Blouse Intelligence</h2>
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
                  <a href="#book-trainer" className="rex-btn rex-btn-ghost rex-magazine-skip-next">
                    Skip to next section
                  </a>
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

