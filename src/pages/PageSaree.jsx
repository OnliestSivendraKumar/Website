import { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const PAGE_TITLE = 'Saree Draping — Education Hub | Onliest';
const PAGE_DESCRIPTION =
  'Explore saree draping: regional styles, modern variations, and step-by-step draping basics.';
const SAREE_DRAPING_VIDEO_URL = '';

const REGIONAL_STYLES = [
  {
    name: 'Nivi Style',
    region: 'Andhra Pradesh',
    image: '/edu-saree.png',
    description:
      'The Nivi drape is the most widely practiced saree style in India and forms the foundation for many modern draping methods.',
    steps: [
      'The saree is tucked into the petticoat at the waist and wrapped once around the body.',
      'Pleats are made at the front and tucked neatly into the waistband.',
      'The remaining fabric (pallu) is draped over the left shoulder.',
    ],
  },
  {
    name: 'Bengali Style',
    region: 'West Bengal',
    image: '/ds-4.png',
    description:
      'The Bengali drape is known for its graceful structure and dramatic pallu arrangement, often seen during festivals.',
    steps: [
      'The saree is wrapped around the body without forming front pleats.',
      'The pallu is brought over the left shoulder.',
      'The loose end is taken across the back and placed over the right shoulder.',
    ],
  },
  {
    name: 'Seedha Pallu',
    region: 'Gujarat',
    image: '/edu-saree.png',
    description:
      'The Seedha Pallu style highlights the decorative pallu at the front, drawing attention to border work and embroidery.',
    steps: [
      'Pleats are made at the front similar to the Nivi style.',
      'The saree is wrapped around the body once.',
      'The pallu is brought from the back over the right shoulder.',
      'The pallu is spread across the front of the torso.',
    ],
  },
  {
    name: 'Nauvari Style',
    region: 'Maharastra',
    image: '/ds-6fh.png',
    description:
      'The Nauvari drape is a traditional Maharashtrian style that uses a nine-yard saree with a dhoti-like lower structure.',
    steps: [
      'The saree is wrapped around the waist and passed between the legs.',
      'Pleats are arranged in front and back to form a dhoti structure.',
      'The pallu is draped over the shoulder.',
    ],
  },
  {
    name: 'Coorgi Style',
    region: 'Karnataka',
    image: '/ds-6fh.png',
    description:
      'A distinctive Kodagu drape where pleats are positioned at the back and the pallu is brought from behind.',
    steps: [
      'The saree is wrapped around the body with pleats tucked at the back.',
      'The pallu is brought over the shoulder from the back.',
      'The pallu is secured with a pin or brooch.',
    ],
  },
  {
    name: 'Madisar Style',
    region: 'Tamil Nadu',
    image: '/edu-saree.png',
    description:
      'The Madisar style, traditionally worn by Tamil Brahmin women, combines saree and dhoti draping elements.',
    steps: [
      'The saree is wrapped around the waist and passed between the legs.',
      'Pleats are arranged to form a dhoti-like lower structure.',
      'The remaining fabric is draped as the pallu over the shoulder.',
    ],
  },
  {
    name: 'Mundum Neriyathum Style',
    region: 'Kerala',
    image: '/edu-saree.png',
    description:
      'A traditional two-piece drape from Kerala consisting of a lower mundu and an upper neriyathu.',
    steps: [
      'The lower garment (mundu) is wrapped around the waist and tucked securely.',
      'The upper cloth (neriyathu) is draped across the torso.',
      'The loose end is placed over the shoulder similar to a saree pallu.',
    ],
  },
  {
    name: 'Assamese Mekhela Chador',
    region: 'Assam',
    image: '/edu-saree.png',
    description:
      'A two-piece Assamese drape where the lower Mekhela and upper Chador are styled with neat front folds.',
    steps: [
      'The Mekhela is wrapped around the waist like a cylindrical skirt and tucked securely.',
      'Pleats are made in the front and folded toward the left side.',
      'The Chador is draped around the upper body and placed over the shoulder.',
      'The loose end is pleated and pinned for a neat appearance.',
    ],
  },
  {
    name: 'Tribal Style',
    region: 'Central and Eastern India',
    image: '/edu-saree.png',
    description:
      'Regional tribal drapes often use shorter fabric lengths and prioritize comfort and mobility for daily work.',
    steps: [
      'The saree is wrapped around the waist and tucked firmly.',
      'Pleats are minimal or sometimes omitted.',
      'The upper portion is draped across the chest and over one shoulder.',
      'The drape is adjusted for ease of movement.',
    ],
  },
];

const MODERN_STYLES = [
  { name: 'Belted Sraee Drape', image: '/edu-saree.png' },
  { name: 'Corset Style Saree', image: '/edu-saree.png' },
  { name: 'Butterfly Style Saree', image: '/edu-saree.png' },
];

export default function PageSaree() {
  useEffect(() => {
    document.title = PAGE_TITLE;
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute('content', PAGE_DESCRIPTION);
    return () => {
      document.title = 'Onliest';
    };
  }, []);

  return (
    <>
      <Header hideOnPanels={false} />
      <main className="rex-page-inner rex-fibre-page rex-sd-page" id="main-content" role="main">
        <div className="rex-fibre-shell rex-sd-shell">
          <header className="rex-fibre-header rex-sd-header">
            <p className="rex-page-eyebrow">Education Hub</p>
            <h1 className="rex-fibre-title">Saree Draping</h1>
          </header>

          <section className="rex-sd-intro" aria-label="Saree draping introduction">
            <figure className="rex-sd-hero-fig">
              <img src="/ds-3.png" alt="Saree draping editorial introduction visual" loading="eager" />
            </figure>
            <p className="rex-sd-p">
              Saree draping styles vary widely across India and reflect cultural traditions, climate, and lifestyle.
              While the saree itself remains a single unstitched garment, the way it is wrapped, pleated, and arranged
              can change significantly from one state to another.
            </p>
            <p className="rex-sd-p">
              Many traditional drapes were developed to suit daily activities such as farming, household work, or
              ceremonial rituals, while others evolved as formal or festive styles. These draping techniques influence
              both visual appearance and practicality.
            </p>
            <p className="rex-sd-p">
              Saree draping refers to the method of wrapping and arranging a saree around the body to create a structured
              and elegant garment. Unlike stitched garments, the saree does not have a fixed form, its appearance depends
              entirely on the draping method.
            </p>
          </section>

          <section className="rex-sd-regional" aria-label="Regional draping styles">
            <h2 className="rex-sd-h2">Regional Draping Styles</h2>
            {REGIONAL_STYLES.map((style) => (
              <article key={style.name} className="rex-sd-style">
                <h3 className="rex-sd-h3">{style.name}</h3>
                <p className="rex-sd-region">{style.region}</p>
                <p className="rex-sd-p">{style.description}</p>
                <p className="rex-sd-p rex-sd-how">How it is draped</p>
                <ul className="rex-sd-list">
                  {style.steps.map((step) => (
                    <li key={step}>{step}</li>
                  ))}
                </ul>
                <figure className="rex-sd-style-fig">
                  <img src={style.image} alt={`${style.name} drape`} loading="lazy" />
                </figure>
              </article>
            ))}
          </section>

          <section className="rex-sd-modern" aria-label="Modern draping variations">
            <h2 className="rex-sd-h2">Modern Draping Variations</h2>
            <p className="rex-sd-p">
              In contemporary fashion, saree draping includes modern styling methods that adapt traditional garments for
              current aesthetics.
            </p>
            {MODERN_STYLES.map((item) => (
              <article key={item.name} className="rex-sd-modern-item">
                <h3 className="rex-sd-h3">{item.name}</h3>
                <figure className="rex-sd-style-fig">
                  <img src={item.image} alt={item.name} loading="lazy" />
                </figure>
              </article>
            ))}
          </section>

          <section className="rex-sd-howto" aria-label="How to drape a saree">
            <div className="rex-sd-howto-layout">
              <div className="rex-sd-howto-copy">
                <h2 className="rex-sd-h2">How to Drape a Saree?</h2>
                <p className="rex-sd-p">
                  Because of its versatility, the saree remains one of the most adaptable garments in fashion, capable of
                  being styled in both traditional and modern ways through different draping techniques.
                </p>
                <h3 className="rex-sd-h3">Basic Saree Draping Method</h3>
                <ol className="rex-sd-steps">
                  <li>
                    <strong>Step 1: Prepare the Base</strong> - Wear a fitted blouse and petticoat with a secure drawstring.
                  </li>
                  <li>
                    <strong>Step 2: Tuck the Starting End</strong> - Tuck the plain end into the petticoat at the waist.
                  </li>
                  <li>
                    <strong>Step 3: Wrap Around the Waist</strong> - Wrap once from right to left, keeping the lower edge even.
                  </li>
                  <li>
                    <strong>Step 4: Create Front Pleats</strong> - Make 5 to 8 pleats and tuck neatly at the center waist.
                  </li>
                  <li>
                    <strong>Step 5: Arrange the Pallu</strong> - Drape the remaining length over the left shoulder.
                  </li>
                  <li>
                    <strong>Step 6: Adjust the Length</strong> - Leave, pleat, or pin the pallu as preferred.
                  </li>
                </ol>
              </div>
            <div className="rex-sd-video-block" aria-label="Saree draping tutorial video">
              {SAREE_DRAPING_VIDEO_URL ? (
                <iframe
                  className="rex-sd-video-frame"
                  src={SAREE_DRAPING_VIDEO_URL}
                  title="Saree draping tutorial"
                  loading="lazy"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
              ) : (
                <div className="rex-sd-video-placeholder">VIDEO BLOCK</div>
              )}
            </div>
            </div>
          </section>

          <nav className="rex-fibre-footer-cta rex-fibre-footer-nav" aria-label="Education module navigation">
            <a href="/#journey" className="rex-btn rex-btn-edu-nav">← Previous: Education Hub</a>
            <a href="/education/fibre-foundations" className="rex-btn rex-btn-edu-nav">Next: Fibre &amp; Fabric →</a>
          </nav>
        </div>
      </main>
      <Footer />
    </>
  );
}
