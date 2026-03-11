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

export default function HeroSlide() {
  return (
    <section className="rex-hero-slide" aria-label="Hero — AI Meets Tradition">
      <div className="rex-hero-inner">
        {/* Left: copy — AI Meets Tradition */}
        <div className="rex-hero-copy">
        <span className="rex-hero-badge">Welcome to Onliest</span>
          <h2 className="rex-hero-headline">
            AI Meets<br /><em>Tradition</em>
          </h2>
          <p className="rex-hero-subhead">The Future of Fashion</p>
          <p className="rex-hero-desc">
            Experience revolutionary AI-powered fashion design. Perfect fits, personalized styles, and traditional craftsmanship — all in one platform.
          </p>
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
