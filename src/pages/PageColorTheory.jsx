import Header from '../components/Header';
import Footer from '../components/Footer';

const PAGE_TITLE = 'Color Theory — Education Hub | Onliest';
const PAGE_DESCRIPTION =
  'Learn color theory, warm and cool tones, skin undertones, color pairing, occasion and color, cultural meanings, regional traditions, and how color shapes body proportion.';

export default function PageColorTheory() {
  if (typeof document !== 'undefined') {
    const prevTitle = document.title;
    const metaDesc = document.querySelector('meta[name="description"]');
    const prevDesc = metaDesc?.getAttribute('content') || '';
    if (document.title !== PAGE_TITLE) document.title = PAGE_TITLE;
    if (metaDesc && metaDesc.getAttribute('content') !== PAGE_DESCRIPTION)
      metaDesc.setAttribute('content', PAGE_DESCRIPTION);
    window.addEventListener('beforeunload', () => {
      document.title = prevTitle;
      if (metaDesc) metaDesc.setAttribute('content', prevDesc);
    }, { once: true });
  }

  return (
    <>
      <Header hideOnPanels={false} />
      <main className="rex-page-inner rex-fibre-page rex-color-page" id="main-content" role="main">
        <div className="rex-fibre-shell rex-color-shell">

          {/* ── Screenshot 1: Edition title + two images + sidebar + drop cap ── */}
          <p className="rex-page-eyebrow">Education Hub · Saree Intelligence</p>
          <header className="rex-color-edition-header">
            <p className="rex-color-edition-top">THE</p>
            <h1 className="rex-color-edition-title">Color Theory</h1>
            <p className="rex-color-edition-bottom">EDITION</p>
          </header>

          {/* Section 1: Two images — 30% left (taller) | 70% right (wider) */}
          <div className="rex-color-hero-images">
            <figure className="rex-color-hero-fig rex-color-hero-fig--left">
              <img src="/ds-1.png" alt="Style and movement" loading="eager" />
            </figure>
            <figure className="rex-color-hero-fig rex-color-hero-fig--right">
              <img src="/ds-3.png" alt="Portrait styling" loading="lazy" />
            </figure>
          </div>

          {/* Section 2: Left vertical bar title | Right content (drop cap + 4 paras) */}
          <section className="rex-color-with-sidebar" id="color-intro">
            <div className="rex-color-sidebar" aria-hidden="true">
              <span className="rex-color-sidebar-text">COLOR STYLING SYSTEM</span>
            </div>
            <div className="rex-color-main">
              <p className="rex-color-drop-cap">
                <span className="rex-color-cap">C</span>olor is often the first detail the eye notices. Before fabric texture, silhouette, or ornamentation reveals itself, color quietly sets the mood of the garment. In blouse design, color guides how the blouse interacts with the saree, the wearer&rsquo;s skin tone, and the occasion for which the ensemble is created.
              </p>
              <p className="rex-color-body-p">
                Understanding color allows designers and wearers to move beyond simple matching, creating combinations that feel balanced, intentional, and visually refined.
              </p>
              <p className="rex-color-body-p">
                Before color becomes a matter of style or personal expression, it begins with understanding its foundations. In the world of garment design, color is not chosen at random. It follows relationships, balance, and visual harmony that have been studied and practiced for centuries. For blouses and saree ensembles, these principles help guide how colors interact with fabric, silhouette, and the wearer.
              </p>
              <p className="rex-color-body-p">
                Color foundations provide the framework that allows designers and wearers to move beyond guesswork, creating combinations that feel intentional and visually balanced.
              </p>
            </div>
          </section>

          {/* Section 3: Full-width content, para-wise (color wheel + color theory) */}
          <section className="rex-color-bottom-block" id="color-understanding">
            <p className="rex-color-bottom-p">
              At the center of color understanding lies the color wheel—a visual arrangement that organizes colors according to their relationships. The color wheel acts as a guide. It reveals which shades sit harmoniously beside one another and which create contrast. When pairing a blouse with a saree, the wheel often becomes an invisible reference point that helps determine whether a combination will feel balanced, striking, or subtle.
            </p>
            <p className="rex-color-bottom-p">
              Color theory explores how colors behave when placed together. Some combinations create calm harmony, while others introduce energy and contrast.
            </p>
          </section>

          <hr className="rex-fibre-divider" />

          {/* ── Screenshot 2: Color Unites + Warm & Cool ── */}

          {/* Section 1: Left = grid (2 stacked + 1 full-height right) | Right = text */}
          <section className="rex-fibre-section rex-color-split" id="color-unites">
            <div className="rex-color-split-images">
              <figure className="rex-color-split-fig rex-color-split-fig--top"><img src="/ds-8.png" alt="Composition" loading="lazy" /></figure>
              <figure className="rex-color-split-fig rex-color-split-fig--bottom"><img src="/edu-fibre.jpg" alt="Detail" loading="lazy" /></figure>
              <figure className="rex-color-split-fig rex-color-split-fig--full"><img src="/ds-4.png" alt="Style" loading="lazy" /></figure>
            </div>
            <div className="rex-color-split-text">
              <h2 className="rex-fibre-section-title">Color Unites the Design</h2>
              <p>
                In clothing design, this understanding helps guide choices such as whether a blouse should mirror the saree&rsquo;s shade, introduce a new color, or remain within the same tonal family. Designers often use these principles to create ensembles that appear thoughtfully composed rather than accidental.
              </p>
              <p>
                A well-balanced color relationship ensures that no single element overwhelms the garment. Instead, the blouse and saree complement each other, allowing the entire ensemble to feel cohesive.
              </p>
            </div>
          </section>

          {/* Section 2: Left = text (Warm & Cool) | Right = image, then full-width para below */}
          <section className="rex-fibre-section rex-color-split rex-color-split--reverse" id="warm-cool">
            <div className="rex-color-split-text">
              <h2 className="rex-fibre-section-title">Warm and Cool Tones</h2>
              <p>
                Warm tones are influenced by shades of red, orange, and yellow. These colors often feel vibrant, radiant, and energetic.
              </p>
              <p>
                Cool tones draw from blue, green, and violet, creating a calmer and more composed visual effect.
              </p>
            </div>
            <figure className="rex-color-split-single">
              <img src="/ds-7.png" alt="Tones in context" loading="lazy" />
            </figure>
          </section>
          <p className="rex-color-full-para">
            In clothing design, this understanding helps guide choices such as whether a blouse should mirror the saree&rsquo;s shade, introduce a new color, or remain within the same tonal family. Designers often use these principles to create ensembles that appear thoughtfully composed rather than accidental. A well-balanced color relationship ensures that no single element overwhelms the garment. Instead, the blouse and saree complement each other, allowing the entire ensemble to feel cohesive.
          </p>

          <hr className="rex-fibre-divider" />

          {/* ── Skin undertones: 1st screenshot — left heading + 2 paras, right image; then full-width rest below ── */}
          <section className="rex-fibre-section" id="skin-undertones">
            <div className="rex-color-skin-top">
              <div className="rex-color-split-text">
                <h2 className="rex-fibre-section-title">Skin Undertones</h2>
                <p>
                  Color does not exist in isolation from the wearer. The same shade of fabric can appear vibrant on one person and subdued on another. This difference often comes from skin undertones—the subtle hues that lie beneath the surface of the skin.
                </p>
                <p>
                  Understanding undertones allows blouse colors to work in harmony with the wearer rather than competing with their natural complexion. When the right colors are chosen, the entire ensemble appears more balanced, and the garment naturally enhances the wearer&rsquo;s presence.
                </p>
              </div>
              <figure className="rex-color-skin-fig">
                <img src="/ds-3.png" alt="Skin and tone in styling" loading="lazy" />
              </figure>
            </div>
            <div className="rex-color-skin-rest">
              <h3 className="rex-fibre-sub-h">Identifying Undertones</h3>
              <p className="rex-fibre-full-p">
                Skin undertones fall into three categories: <strong>warm, cool, and neutral</strong>. These refer to the subtle colors beneath the skin, not whether skin is light or deep. Warm undertones show hints of golden, peach, or yellow; cool undertones reflect pink, red, or bluish hues; neutral undertones balance warm and cool. Recognizing them aids color selection so blouse colors complement the wearer&rsquo;s natural tone.
              </p>
              <h3 className="rex-fibre-sub-h">Warm Skin Palettes</h3>
              <p className="rex-fibre-full-p">
                Colors that harmonize with warm undertones include warm reds, coral tones, earthy browns, deep maroons, mustard yellows, and olive greens—enhancing the skin&rsquo;s natural warmth and creating a natural connection between garment and wearer.
              </p>
              <figure className="rex-color-skin-inline-img">
                <img src="/edu-fibre.jpg" alt="Warm palette texture" loading="lazy" />
              </figure>
              <h3 className="rex-fibre-sub-h">Cool Skin Palettes</h3>
              <p className="rex-fibre-full-p">
                Cool undertones pair well with colors that share similar cool characteristics: jewel tones like sapphire blue, emerald green, deep purple, and berry shades, as well as soft cool pastels like lavender, powder blue, and rose pink, for a refined and balanced effect. These colors can highlight the clarity and brightness of cool undertones.
              </p>
              <figure className="rex-color-skin-inline-img">
                <img src="/ds-4.png" alt="Cool palette styling" loading="lazy" />
              </figure>
              <h3 className="rex-fibre-sub-h">Neutral Skin Palettes</h3>
              <p className="rex-fibre-full-p">
                Neutral undertones offer flexibility—a balance of warm and cool allows a wider range of harmonious shades. Both warm and cool palettes can complement neutral undertones, giving versatility for pairing blouses with various saree shades and fabrics.
              </p>
              <figure className="rex-color-skin-inline-img">
                <img src="/ds-7.png" alt="Neutral palette" loading="lazy" />
              </figure>
            </div>
          </section>

          <hr className="rex-fibre-divider" />

          {/* ── Color pairing: 1st screenshot — single column, image after intro, image between Monochrome para 2 and 3 ── */}
          <section className="rex-fibre-section rex-color-pairing-block" id="color-pairing">
            <h2 className="rex-fibre-section-title">Color Pairing</h2>
            <p className="rex-fibre-full-p">
              Color pairing determines the visual outcome of blouse and saree combinations—whether the ensemble feels unified, varied, or deliberately contrasted. Designers draw on established approaches to create balance and intention.
            </p>
            <figure className="rex-color-pairing-img">
              <img src="/ds-4.png" alt="Color pairing in practice" loading="lazy" />
            </figure>
            <h3 className="rex-fibre-sub-h">Monochrome Pairing</h3>
            <p className="rex-fibre-full-p">
              Monochrome styling uses different shades and intensities of the same color, keeping blouse and saree within the same color family.
            </p>
            <p className="rex-fibre-full-p">
              A deep-shade saree paired with a lighter or richer blouse variation of the same color creates depth and harmony, resulting in an elegant, cohesive, and understated ensemble.
            </p>
            <figure className="rex-color-pairing-img">
              <img src="/edu-fibre.jpg" alt="Monochrome texture" loading="lazy" />
            </figure>
            <p className="rex-fibre-full-p">
              Monochrome combinations are often favored in traditional styling, emphasizing fabric texture, weave, or ornamentation over dramatic color contrast.
            </p>
            <h3 className="rex-fibre-sub-h">Complementary Pairing</h3>
            <p className="rex-fibre-full-p">
              Complementary colors sit opposite on the color wheel and create strong, visually striking contrast when paired.
            </p>
            <p className="rex-fibre-full-p">
              In blouse styling, this approach can make the blouse stand out while maintaining balance with the saree—for example, a dominant saree color paired with a complementary blouse shade to create energy and focus.
            </p>
          </section>

          <hr className="rex-fibre-divider" />

          {/* ── Screenshot 5: Analogous, occasion, day wear, workwear ── */}
          <section className="rex-fibre-section" id="analogous-occasion">
            <p className="rex-fibre-full-p">
              When used carefully, complementary pairing adds vibrancy without overwhelming the overall composition.
            </p>
            <figure className="rex-color-inline-fig rex-color-inline-fig--sm">
              <img src="/edu-fibre.jpg" alt="Texture" loading="lazy" />
            </figure>
            <h2 className="rex-fibre-section-title">Analogous Pairing</h2>
            <p className="rex-fibre-full-p">
              Analogous colors sit next to each other on the color wheel, sharing similar undertones. These combinations feel naturally harmonious because the colors are closely related. A saree may contain multiple tones within the same palette, allowing the blouse to echo one of those neighboring shades. The transition between colors appears soft and fluid, creating an ensemble that feels layered yet cohesive.
            </p>
            <figure className="rex-color-inline-fig rex-color-inline-fig--sm">
              <img src="/edu-fibre.jpg" alt="Texture" loading="lazy" />
            </figure>
            <p className="rex-fibre-full-p">
              Analogous pairings are often used when a subtle variation in color is desired without strong contrast. Color pairing transforms individual shades into a complete visual story—whether through the quiet elegance of monochrome styling, the bold energy of complementary colors, or the gentle harmony of analogous combinations, thoughtful pairing ensures that the blouse and saree exist together in balance.
            </p>
            <h2 className="rex-fibre-section-title">Occasion and Color</h2>
            <p className="rex-fibre-full-p">
              Color is not chosen only for visual appeal. Across garments and traditions, it often reflects the mood of the moment, the purpose of the gathering, and sometimes cultural symbolism. In blouse and saree styling, color quietly communicates the tone of the occasion. Understanding how color aligns with different settings allows designers and wearers to create ensembles that feel appropriate, expressive, and thoughtfully composed.
            </p>
            <h3 className="rex-fibre-sub-h">Day Wear</h3>
            <p className="rex-fibre-full-p">
              During the day, colors often lean toward lighter and more refreshing shades. Soft pastels, gentle neutrals, and lighter tones tend to feel comfortable under natural daylight and reflect the calm and ease of daytime settings. Blouses chosen for daywear often support the saree without appearing overly dramatic, creating an ensemble that feels effortless and refined.
            </p>
            <h3 className="rex-fibre-sub-h">Workwear</h3>
            <p className="rex-fibre-full-p">
              In professional or formal work environments, color choices often become more restrained and composed. Blouses paired with workwear sarees frequently use structured tones such as muted neutrals, deeper shades, or balanced colors that convey confidence without excessive ornamentation—maintaining elegance while remaining appropriate for the setting.
            </p>
          </section>

          <hr className="rex-fibre-divider" />

          {/* ── Screenshot 6: Festive, evening, cultural meanings ── */}
          <section className="rex-fibre-section rex-fibre-full-section" id="festive-cultural">
            <h2 className="rex-fibre-section-title">Festive Wear</h2>
            <p className="rex-fibre-full-p">
              Festivals and celebrations often call for vibrant colors—reds, yellows, greens, and jewel tones that reflect energy and joy. Blouses for festive occasions often complement the saree while adding to the celebratory mood.
            </p>
            <h2 className="rex-fibre-section-title">Evening Wear</h2>
            <p className="rex-fibre-full-p">
              Color palettes often deepen in the evening; darker shades appear more striking under softer lighting. Evening wear blouses may incorporate deep blues, wine shades, emerald greens, or metallics to convey sophistication and drama for formal events.
            </p>
            <div className="rex-color-landscape" aria-hidden="true" />
            <h2 className="rex-fibre-section-title">Cultural Meanings of Color</h2>
            <p className="rex-fibre-full-p">
              Colors carry symbolic meaning across cultures—red for celebration, white for simplicity or ritual significance, gold and jewel tones for prosperity. These meanings vary by region but influence blouse color choices for significant events.
            </p>
            <div className="rex-color-landscape" aria-hidden="true" />
          </section>

          <hr className="rex-fibre-divider" />

          {/* ── Screenshot 7: Regional color traditions ── */}
          <section className="rex-fibre-section rex-fibre-full-section" id="regional-traditions">
            <h2 className="rex-fibre-section-title">Regional Color Traditions in India</h2>
            <p className="rex-fibre-full-p">
              Color in Indian clothing extends beyond aesthetics—it is influenced by climate, culture, festivals, and local weaving traditions. Regional palettes shape saree ensembles and the blouses that accompany them.
            </p>
            <h3 className="rex-fibre-sub-h">Southern India</h3>
            <p className="rex-fibre-full-p">
              Rich and luminous colors are associated with traditional silk sarees: deep maroons, temple reds, mustard yellows, emerald greens, and royal purples. Blouses often mirror the saree&rsquo;s richness or highlight contrasting borders, with gold accents frequently present.
            </p>
            <h3 className="rex-fibre-sub-h">Eastern India</h3>
            <p className="rex-fibre-full-p">
              Bold yet balanced color compositions are seen in sarees from this region—red, ivory, black, and deep indigo. Blouses may echo the primary color or introduce contrast, resulting in a striking combination where color and textile pattern work together harmoniously.
            </p>
            <h3 className="rex-fibre-sub-h">Northern India</h3>
            <p className="rex-fibre-full-p">
              Vibrant and expressive colors define weddings and festive occasions: bright reds, pinks, oranges, and jewel tones. Blouses complement the vibrancy of the saree, sometimes with embroidery or surface detailing.
            </p>
            <h3 className="rex-fibre-sub-h">Western India</h3>
            <p className="rex-fibre-full-p">
              Intricate dyeing techniques and vibrant palettes feature bright yellows, greens, reds, and blues in combination. Blouses may reflect the same vibrant palette or use a contrasting color to highlight saree patterns.
            </p>
            <div className="rex-color-landscape" aria-hidden="true" />
          </section>

          <hr className="rex-fibre-divider" />

          {/* ── Screenshot 8 & 9: Body proportion, visual balance, height, width, contrast ── */}
          <section className="rex-fibre-section rex-fibre-full-section" id="color-body">
            <h2 className="rex-fibre-section-title">Color and Body Proportion</h2>
            <p className="rex-fibre-full-p">
              Color shapes how the body is perceived. The placement, depth, and contrast of color affect height, width, and proportion in an outfit. In blouse and saree styling, understanding these relationships is a design tool that can balance proportions, guide visual attention, and create a harmonious silhouette.
            </p>
            <h2 className="rex-fibre-section-title">Color and Visual Balance</h2>
            <p className="rex-fibre-full-p">
              Different shades carry different visual weight. Darker tones recede, creating depth and structure; lighter or brighter colors draw the eye and appear more prominent. In blouse styling, this principle helps balance the upper body with the rest of the saree. A deeper-toned blouse creates a compact look, while a lighter or more vibrant one draws attention upward. Designers use this contrast to guide the eye&rsquo;s focus.
            </p>
            <h2 className="rex-fibre-section-title">Color and Height Perception</h2>
            <p className="rex-fibre-full-p">
              Color can influence the visual perception of height. When blouse and saree share similar tones, the ensemble appears continuous, creating the impression of greater vertical length. A strong color break between blouse and saree can visually divide the body, emphasizing the separation between upper and lower proportions.
            </p>
            <div className="rex-color-landscape rex-color-landscape--large" aria-hidden="true" />
            <h2 className="rex-fibre-section-title">Color and Body Width</h2>
            <p className="rex-fibre-full-p">
              Color placement can subtly influence how width is perceived across the upper body. Darker blouse shades often create a more defined and structured appearance, while lighter or brighter colors tend to draw attention and appear more expansive. Designers sometimes use deeper tones to create visual balance when the saree carries strong patterns or bright colors. When balanced carefully, the blouse color can help maintain proportion within the entire ensemble.
            </p>
            <h2 className="rex-fibre-section-title">Contrast and Focus</h2>
            <p className="rex-fibre-full-p">
              Contrast naturally attracts attention. When a blouse strongly contrasts with the saree, the eye is drawn toward the upper body and neckline area. This can be used intentionally when the blouse features distinctive necklines, sleeves, or back designs—by using color contrast, these design features become more noticeable. In softer pairings where blouse and saree share related tones, the visual focus may shift toward the drape, weave, or pattern of the saree instead.
            </p>
            <p className="rex-fibre-full-p">
              Color therefore plays a quiet yet influential role in shaping the silhouette of a saree ensemble. Through thoughtful use of shade, contrast, and tonal balance, blouse color can guide visual proportion and enhance harmony between the garment, the wearer, and the overall composition of the outfit.
            </p>
          </section>

          <nav className="rex-fibre-footer-cta rex-fibre-footer-nav" aria-label="Education module navigation">
            <a href="/#journey" className="rex-btn rex-btn-edu-nav">
              ← Previous: Education Hub
            </a>
            <a href="/education/fibre-foundations" className="rex-btn rex-btn-edu-nav">
              Next: Fibre &amp; Fabric →
            </a>
          </nav>

        </div>
      </main>
      <Footer />
    </>
  );
}
