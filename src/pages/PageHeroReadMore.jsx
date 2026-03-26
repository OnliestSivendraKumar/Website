import { useEffect, useMemo, useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const HERO_CONTENT = {
  'section-0-origin': {
    eyebrow: 'Welcome to Onliest',
    subhead: 'Powered by AI. Inspired by Heritage. Crafted for You.',
    headline: (
      <>
        <em>Onliest</em> the World
        <br />
        Has Never Seen.
      </>
    ),
    body: [
      'Create sarees and blouses shaped around your body, your style, and your imagination.',
      'Intelligent design technology built for the future of couture fashion.',
      'Every piece feels like it was made only... More',
    ],
    extra: {
      imageSrc: 'https://res.cloudinary.com/djlqifbxp/image/upload/v1774509290/ds-1_ao4fyf.png',
      title: 'Make Your First Design Personal',
      intro:
        'Onliest starts with your imagination and turns it into wearable direction. Instead of guessing, you create with clarity.',
      points: [
        'Begin by shaping a saree and blouse around your body and your taste.',
        'Use AI guidance to refine drape, fit, and aesthetic decisions.',
        'End with a piece that feels made only for you.',
      ],
      summary:
        'This section introduces the Onliest promise: personalized design that feels intuitive, confident, and deeply aligned with your identity.',
    },
  },
  'section-1-problem': {
    eyebrow: 'The Problem',
    subhead: null,
    headline: 'Fashion Was Never Meant to Be Standardized',
    body: [
      'For centuries, fashion has relied on standard sizes and fixed designs.',
      'Bodies and tastes are not standard — they are singular.',
      'True elegance was never meant to be mass-produced; it belongs in the hands of the one who wears it... More',
    ],
    extra: {
      imageSrc: 'https://res.cloudinary.com/djlqifbxp/image/upload/v1774509290/ds-3_maibel.png',
      title: 'Why Standard Always Feels Off',
      intro:
        'When garments are built to fit “average” bodies, the most important part—the way you actually move—gets ignored.',
      points: [
        'Standard patterns flatten unique proportions and preferred comfort.',
        'Template aesthetics hide your personal style behind trends.',
        'Your best look is the one designed for your exact story.',
      ],
      summary:
        'The core problem is clear: standardized fashion cannot represent individual bodies and personalities with true precision.',
    },
  },
  'section-2-awakening': {
    eyebrow: 'The Awakening',
    subhead: null,
    headline: 'You Were Always Meant to Create',
    body: [
      'What if fashion didn’t limit your choices but expanded them?',
      'What if you could design something no one else in the world owns?',
      'Onliest unlocks something deeper: your creativity, your confidence, and a garment that carries your name... More',
    ],
    extra: {
      imageSrc: 'https://res.cloudinary.com/djlqifbxp/image/upload/v1774509290/ds-2_n5rdtx.png',
      title: 'From Ideas to Ownership',
      intro:
        'Creation should feel empowering, not confusing. Onliest helps you turn “what if” into a design you truly own.',
      points: [
        'Explore options that match your taste, not just what is available.',
        'Build confidence through guided decisions at every step.',
        'Design a garment that feels unmistakably yours.',
      ],
      summary:
        'This stage shifts the user from passive selection to active creation, making design ownership both practical and inspiring.',
    },
  },
  'section-3-vision': {
    eyebrow: 'ONLIEST JOURNEY',
    subhead: null,
    headline: 'Couture Reimagined Through Intelligence',
    body: [
      'Onliest reimagines couture through artificial intelligence and precision design.',
      'Every saree and blouse is mapped to your body, your preferences, and your story.',
      'Nothing is pulled from a rack - each piece begins as a blank canvas created by you... More',
    ],
    extra: {
      imageSrc: 'https://res.cloudinary.com/djlqifbxp/image/upload/v1774509539/ds-4_gia6xv.png',
      title: 'Intelligence That Understands Your Vision',
      intro:
        'AI doesn’t replace craftsmanship—it supports it. It helps translate your choices into precise direction.',
      points: [
        'Fit and proportions move from guesswork to guided mapping.',
        'Style preferences become clearer, not more complicated.',
        'Your final piece starts as your canvas, not a rack pick.',
      ],
      summary:
        'The vision combines intelligence with craftsmanship so each outcome is precise, expressive, and built around the individual.',
    },
  },
  'section-5-self-discovery': {
    eyebrow: 'The Self-Discovery Layer',
    subhead: null,
    headline: 'Fashion That Reveals Who You Are',
    body: [
      'The moment you create something uniquely yours, you discover something more than design.',
      'You discover your taste, your confidence, and your creative identity.',
      'And when you wear it, it doesn’t just look beautiful - it becomes the design others admire, the design others wish they had created... More',
    ],
    extra: {
      imageSrc: '/ds-5.png',
      title: 'Wear Your Identity, Not Someone Else’s',
      intro:
        'A truly personal garment changes the way you stand, the way you feel, and the way people recognize you.',
      points: [
        'Choose silhouettes and details that match your natural presence.',
        'Build confidence through a design process that respects your preferences.',
        'Create a look others want to understand—and you want to keep.',
      ],
      summary:
        'This layer focuses on identity: what you create becomes a reflection of your taste, confidence, and creative voice.',
    },
  },
  'section-7-emotion': {
    eyebrow: 'The Emotion',
    subhead: null,
    headline: 'The Most Beautiful Saree in the World',
    body: [
      'It should be the one designed by you, for you.',
      'Not mass fashion. Not template designs. Not ordinary clothing.',
      'Onliest is the start of a new era where technology meets craftsmanship, so every woman can wear something that is truly and only hers... More',
    ],
    extra: {
      imageSrc: '/ds-6.png',
      title: 'A Saree Made for the Moment You Live In',
      intro:
        'Beauty becomes unforgettable when it matches your life—your body, your mood, and your story.',
      points: [
        'Design for comfort and movement, not just appearance.',
        'Create with artistry supported by smart precision.',
        'Wear something that feels like it was meant for you from the start.',
      ],
      summary:
        'The emotional outcome is personal pride: a garment that feels original, meaningful, and truly yours from first sketch to final drape.',
    },
  },
};

export default function PageHeroReadMore() {
  const { sectionId = '' } = useParams();
  const [shapeProgress, setShapeProgress] = useState(0);

  const data = useMemo(() => HERO_CONTENT[String(sectionId)], [sectionId]);

  const nav = useMemo(() => {
    const NAV_SEQUENCE = {
      'section-0-origin': {
        prev: { href: '/#journey', label: 'Education Hub' },
        next: { href: '/education/body-compatibility', label: 'Body Compatibility' },
      },
      'section-1-problem': {
        prev: { href: '/education/onliest-world', label: 'Onliest World' },
        next: { href: '/education/trending', label: 'Trending' },
      },
      'section-2-awakening': {
        prev: { href: '/education/body-compatibility', label: 'Body Compatibility' },
        next: { href: '/education/saree-draping', label: 'Saree Draping' },
      },
      'section-3-vision': {
        prev: { href: '/education/trending', label: 'Trending' },
        next: { href: '/education/color-theory', label: 'Color Theory' },
      },
      'section-5-self-discovery': {
        prev: { href: '/education/saree-draping', label: 'Saree Draping' },
        next: { href: '/education/saree', label: 'Saree' },
      },
      'section-7-emotion': {
        prev: { href: '/education/color-theory', label: 'Color Theory' },
        next: { href: '/education/surface-ornamentation', label: 'Surface Ornamentation' },
      },
    };

    return NAV_SEQUENCE[String(sectionId)] || {
      prev: { href: '/#journey', label: 'Education Hub' },
      next: { href: '/education/body-compatibility', label: 'Body Compatibility' },
    };
  }, [sectionId]);

  useEffect(() => {
    const label = data?.eyebrow || 'Onliest';
    document.title = `${label} — Education Hub | Onliest`;
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute('content', `${label} details and creative overview.`);
    return () => {
      document.title = 'Onliest';
    };
  }, [data]);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY || window.pageYOffset || document.documentElement?.scrollTop || 0;
      const max = Math.max(220, Math.floor((window.innerHeight || 900) * 0.35));
      const clamped = Math.max(0, Math.min(1, y / max));
      setShapeProgress(clamped);
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  if (!data) return null;

  const shapeRadius = Math.round(36 + (shapeProgress * 464)); // 36px -> ~500px
  const shapeScale = (1 + (shapeProgress * 0.05)).toFixed(3);
  const shapeTranslate = (-14 * shapeProgress).toFixed(1);

  return (
    <>
      <Header hideOnPanels={false} />
      <main className="rex-page-inner rex-fibre-page rex-hero-readmore-page" id="main-content" role="main">
        <div className="rex-hero-readmore-backbar" aria-label="Hero read more back">
          <a href={nav.prev.href} className="rex-btn rex-btn-edu-nav">
            ← Back
          </a>
        </div>

        <section
          className="rex-hero-readmore-clean"
          aria-label="Hero read more content"
          style={{ '--readmore-shape-progress': String(shapeProgress.toFixed(3)) }}
        >
          <div className="rex-fibre-shell rex-hero-readmore-clean-shell">
            <figure
              className="rex-hero-readmore-clean-visual"
              style={{
                borderRadius: `${shapeRadius}px`,
                '--readmore-img-translate-y': `${shapeTranslate}px`,
                '--readmore-img-scale': `${shapeScale}`,
              }}
            >
              <img
                src={data.extra?.imageSrc || 'https://res.cloudinary.com/djlqifbxp/image/upload/v1774509290/ds-1_ao4fyf.png'}
                alt={`${data.eyebrow || 'Onliest'} inspiration visual`}
                loading="lazy"
              />
            </figure>

            <article className="rex-hero-readmore-clean-content">
              {data.eyebrow && <p className="rex-hero-readmore-kicker">{data.eyebrow}</p>}
              <h2 className="rex-hero-headline">{data.headline}</h2>
              {data.subhead && <p className="rex-hero-subhead">{data.subhead}</p>}

              <h3 className="rex-hero-readmore-clean-heading">Overview</h3>
              <div className="rex-hero-readmore-clean-body">
                {data.body.map((paragraph, idx) => {
                  const isLast = idx === data.body.length - 1;
                  const endsWithMore = isLast && paragraph.endsWith('... More');
                  const text = endsWithMore ? paragraph.slice(0, -7).trim() : paragraph;
                  return (
                    <p key={`${idx}-${paragraph}`} className="rex-hero-desc">
                      {text}
                    </p>
                  );
                })}
              </div>

              {!!data.extra?.points?.length && (
                <>
                  <h3 className="rex-hero-readmore-clean-heading">Key Insights</h3>
                  <ul className="rex-hero-readmore-clean-points">
                    {data.extra.points.map((point, idx) => (
                      <li key={point}>
                        <span className="rex-hero-readmore-clean-point-label">Insight {String(idx + 1).padStart(2, '0')}</span>
                        <span className="rex-hero-readmore-clean-point-text">{point}</span>
                      </li>
                    ))}
                  </ul>
                </>
              )}

              {data.extra?.summary && <p className="rex-hero-readmore-clean-summary">{data.extra.summary}</p>}
            </article>
          </div>
        </section>

        {/* Next buttons are intentionally removed to match the PDF viewer/education inner-page consistency request */}
      </main>
      <Footer />
    </>
  );
}

