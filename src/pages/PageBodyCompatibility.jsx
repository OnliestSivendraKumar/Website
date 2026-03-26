import { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const PAGE_TITLE = 'Body and Compatibility — Education Hub | Onliest';
const PAGE_DESCRIPTION =
  'Understand body identification, body shapes, proportion analysis, shoulder and bust types, neck and back types, face shape and neckline compatibility, sleeve compatibility, and garment balance for saree and blouse.';

export default function PageBodyCompatibility() {
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
      <main className="rex-page-inner rex-fibre-page rex-body-compat-page" id="main-content" role="main">
        <div className="rex-fibre-shell">

          <header className="rex-fibre-header rex-body-compat-header">
          <p className="rex-page-eyebrow">Education Hub</p>
            <h1 className="rex-fibre-title">Body and compatibility</h1>
          </header>

          {/* Editorial hero: asymmetric magazine layout */}
          <section className="rex-body-compat-hero rex-body-compat-hero--magazine" aria-label="Body and compatibility intro">
            <div className="rex-body-compat-mag-grid">
              <figure className="rex-body-compat-mag-fig rex-body-compat-mag-fig--top-left">
                <img src="https://res.cloudinary.com/djlqifbxp/image/upload/v1774509290/ds-3_maibel.png" alt="Silhouette and proportion" loading="eager" />
              </figure>
              <figure className="rex-body-compat-mag-fig rex-body-compat-mag-fig--top-right">
                <img src="https://res.cloudinary.com/djlqifbxp/image/upload/v1774509290/ds-1_ao4fyf.png" alt="Fashion and body structure" loading="eager" />
              </figure>

              <div className="rex-body-compat-mag-title-block">
                <h2 className="rex-body-compat-hero-title">
                  <span className="rex-body-compat-hero-title-line">Body</span>
                  <span className="rex-body-compat-hero-title-line rex-body-compat-hero-title-line--2">and compatibility</span>
                </h2>
              </div>

              <div className="rex-body-compat-mag-copy">
                <p className="rex-body-compat-hero-p">
                  Understanding the body begins with observing its overall structure and silhouette. Every person&rsquo;s body carries a natural arrangement of shoulders, waist, and hips that together form a recognizable shape. Identifying this structure helps explain why certain garments feel balanced and comfortable while others may appear disproportionate.
                </p>
                <p className="rex-body-compat-hero-p">
                  Clothing rarely exists in isolation. Every garment interacts with the structure of the body wearing it: shoulders shape silhouettes, torso proportions influence garment length, and even small details like neckline width can shift the visual balance of the entire outfit.
                </p>
              </div>

              <figure className="rex-body-compat-mag-fig rex-body-compat-mag-fig--bottom-right">
                <img src="https://res.cloudinary.com/djlqifbxp/image/upload/v1774509290/ds-2_n5rdtx.png" alt="Garment and body balance" loading="lazy" />
              </figure>
            </div>
          </section>

          <hr className="rex-fibre-divider" />

          {/* Body Identification */}
          <section className="rex-fibre-section rex-fibre-full-section" id="body-identification">
            <h2 className="rex-fibre-section-title">Body Identification</h2>
            <p className="rex-fibre-full-p">
              Body identification begins with observing the overall structure and silhouette of the body. Every person&rsquo;s body carries a natural arrangement of shoulders, waist, and hips that together form a recognizable shape. Identifying this structure helps explain why certain garments feel balanced and comfortable while others may appear disproportionate.
            </p>
            <p className="rex-fibre-full-p">
              Body identification focuses on the relationship between shoulders, waist, and hips, forming the visual framework for how clothing interacts with the body.
            </p>
            <p className="rex-fibre-full-p">
              Measurements such as shoulder, waist, and hip width, along with visual silhouette identification, are used. Simple assessment tools like body shape tests and ratio methods help understand natural body structure and how garments interact with it.
            </p>
          </section>

          {/* Body Shapes */}
          <section className="rex-fibre-section rex-fibre-full-section" id="body-shapes">
            <h2 className="rex-fibre-section-title">Body Shapes</h2>
            <p className="rex-fibre-full-p">
              Body shapes describe the general distribution of width and curves across shoulders, waist, and hips. Clothing elements such as seams, waist placement, sleeve volume, and garment length visually interact with the body in different ways depending on this distribution.
            </p>
            <div className="rex-body-compat-subsection">
              <h3 className="rex-fibre-sub-h">Hourglass</h3>
              <p className="rex-fibre-full-p">
                Characterized by balanced shoulders and hips with a defined waist, allowing garments to follow curves and emphasize the waist.
              </p>
            </div>
            <div className="rex-body-compat-subsection">
              <h3 className="rex-fibre-sub-h">Pear (Triangle)</h3>
              <p className="rex-fibre-full-p">
                Hips wider than shoulders with a defined waist; visual weight is often in the lower half. Garment design often balances upper and lower proportions.
              </p>
            </div>
            <div className="rex-body-compat-subsection">
              <h3 className="rex-fibre-sub-h">Apple (Round)</h3>
              <p className="rex-fibre-full-p">
                Typically carries fullness around the midsection, with shoulders and hips appearing narrower or balanced. Clothing often focuses on creating vertical flow and softening waist emphasis.
              </p>
            </div>
            <div className="rex-body-compat-subsection">
              <h3 className="rex-fibre-sub-h">Rectangle</h3>
              <p className="rex-fibre-full-p">
                Shoulders, waist, and hips appear similar in width, creating a straighter silhouette. Garments often use shaping elements to create visual curves and structure.
              </p>
            </div>
            <div className="rex-body-compat-subsection">
              <h3 className="rex-fibre-sub-h">Inverted Triangle</h3>
              <p className="rex-fibre-full-p">
                Broader shoulders compared to the hips, creating visual emphasis in the upper body. Balance is often achieved by introducing structure or volume in the lower half.
              </p>
            </div>
          </section>

          <figure className="rex-body-compat-banner" aria-hidden="true">
            <div className="rex-body-compat-banner-inner" />
          </figure>

          {/* Body Proportion Analysis */}
          <section className="rex-fibre-section rex-fibre-full-section" id="body-proportion">
            <h2 className="rex-fibre-section-title">Body Proportion Analysis</h2>
            <p className="rex-fibre-full-p">
              While body shape describes the general silhouette of the body, body proportion analysis looks deeper into how different sections of the body relate to one another. Two individuals may share the same body shape but still have very different proportions in terms of torso length, leg length, shoulder width, or overall vertical balance. Understanding these relationships helps explain why the same garment may appear different on different bodies.
            </p>
            <p className="rex-fibre-full-p">
              Body proportion analysis focuses on dividing the body into key visual sections such as the upper body, waist area, and lower body. By comparing these sections, it becomes possible to understand how the body distributes length and width. These relationships influence how garments sit on the body, where waistlines appear, how sleeves align with the arms, and how garment lengths visually affect height.
            </p>
            <p className="rex-fibre-full-p">
              One important aspect is torso and leg length balance. Some bodies naturally have a longer torso with shorter legs, while others have longer legs and a shorter torso. This difference affects where waistlines, belts, and garment breaks should ideally sit to maintain visual balance.
            </p>
            <p className="rex-fibre-full-p">
              The relationship between upper and lower body also matters—whether shoulders and bust or hips and lower body dominate the visual frame. Clothing elements like sleeve structure, skirt volume, and garment length respond to this balance. Shoulder width and hip width influence visual weight distribution; balanced or wider proportions shift the body&rsquo;s visual center. Height proportion analysis examines vertical appearance: proportions such as torso length, leg length, and head-to-body ratio can differ even among people of the same height, influencing how garment lengths and vertical design lines interact with the body.
            </p>
            <p className="rex-fibre-full-p">
              These observations help individuals recognize body patterns—short torso, long torso, balanced, or dominant upper or lower body structures. Understanding proportions guides garment choices to work with the body&rsquo;s natural structure. Body proportion analysis bridges body identification and garment design, allowing elements like waist placement, length, and volume to be adjusted for visual balance and comfort.
            </p>
          </section>

          <figure className="rex-body-compat-banner" aria-hidden="true">
            <div className="rex-body-compat-banner-inner" />
          </figure>

          {/* Upper Body Structure */}
          <section className="rex-fibre-section rex-fibre-full-section" id="upper-body">
            <h2 className="rex-fibre-section-title">Upper Body Structure</h2>
            <p className="rex-fibre-full-p">
              The upper body plays a central role in garment fit, support, movement, and visual balance. Areas such as shoulders, bust, neck, and back form a structural framework that influences how necklines, sleeves, and garment construction sit on the body.
            </p>
            <p className="rex-fibre-full-p">
              Upper body analysis is distinct from overall body shape; it focuses on specific structural areas such as shoulder width, bust placement, and back width that influence garment fit and movement.
            </p>
          </section>

          {/* Shoulder Types */}
          <section className="rex-fibre-section rex-fibre-full-section" id="shoulder-types">
            <h2 className="rex-fibre-section-title">Shoulder Types</h2>
            <p className="rex-fibre-full-p">
              Shoulders are influential in determining the garment&rsquo;s frame and affect sleeve attachment, neckline appearance, and the overall balance of the upper silhouette.
            </p>
            <div className="rex-body-compat-subsection">
              <h3 className="rex-fibre-sub-h">Narrow Shoulders</h3>
              <p className="rex-fibre-full-p">Appear slimmer, forming a smaller horizontal frame and influencing visual width across the upper body.</p>
            </div>
            <div className="rex-body-compat-subsection">
              <h3 className="rex-fibre-sub-h">Broad Shoulders</h3>
              <p className="rex-fibre-full-p">Extend wider than the waist and hips, creating a strong upper body frame and often becoming the dominant visual point of the silhouette.</p>
            </div>
            <div className="rex-body-compat-subsection">
              <h3 className="rex-fibre-sub-h">Sloped Shoulders</h3>
              <p className="rex-fibre-full-p">Angle downward from the neck toward the shoulder tip, influencing how garments hang and how sleeves fall.</p>
            </div>
            <div className="rex-body-compat-subsection">
              <h3 className="rex-fibre-sub-h">Square Shoulders</h3>
              <p className="rex-fibre-full-p">Appear relatively straight from the neck to the shoulder tip with minimal downward slope, providing a strong and stable base for garments and sleeves.</p>
            </div>
          </section>

          <figure className="rex-body-compat-banner" aria-hidden="true">
            <div className="rex-body-compat-banner-inner" />
          </figure>

          {/* Bust Types */}
          <section className="rex-fibre-section rex-fibre-full-section" id="bust-types">
            <h2 className="rex-fibre-section-title">Bust Types</h2>
            <p className="rex-fibre-full-p">
              The bust influences how garments fit across the chest area and how shaping elements such as darts, seams, and gathers function within a garment.
            </p>
            <div className="rex-body-compat-subsection">
              <h3 className="rex-fibre-sub-h">Small Bust</h3>
              <p className="rex-fibre-full-p">A smaller bust creates a flatter chest area, often allowing garments to sit closer to the body with minimal shaping.</p>
            </div>
            <div className="rex-body-compat-subsection">
              <h3 className="rex-fibre-sub-h">Full Bust</h3>
              <p className="rex-fibre-full-p">A fuller bust adds volume to the front of the upper body. Garments may require additional shaping or structure to accommodate this volume comfortably.</p>
            </div>
            <div className="rex-body-compat-subsection">
              <h3 className="rex-fibre-sub-h">Wide-Set Bust</h3>
              <p className="rex-fibre-full-p">The breasts are positioned further apart across the chest. This spacing influences how darts and shaping elements are placed within garment construction.</p>
            </div>
            <div className="rex-body-compat-subsection">
              <h3 className="rex-fibre-sub-h">Close-Set Bust</h3>
              <p className="rex-fibre-full-p">The breasts sit closer to the center of the chest. Garment shaping and neckline choices often consider this spacing to maintain balance across the upper body.</p>
            </div>
          </section>

          <figure className="rex-body-compat-banner" aria-hidden="true">
            <div className="rex-body-compat-banner-inner" />
          </figure>

          {/* Neck Types */}
          <section className="rex-fibre-section rex-fibre-full-section" id="neck-types">
            <h2 className="rex-fibre-section-title">Neck Types</h2>
            <p className="rex-fibre-full-p">
              The neck influences how necklines sit and how the transition from face to shoulder is perceived. Different neck lengths and structures interact with neckline depth and width.
            </p>
            <div className="rex-body-compat-subsection">
              <h3 className="rex-fibre-sub-h">Short Neck</h3>
              <p className="rex-fibre-full-p">A shorter neck benefits from deeper or more open necklines that create the illusion of length and avoid crowding the chin and jaw.</p>
            </div>
            <div className="rex-body-compat-subsection">
              <h3 className="rex-fibre-sub-h">Long Neck</h3>
              <p className="rex-fibre-full-p">A longer neck can carry higher or more closed necklines and statement collars without overwhelming the proportions.</p>
            </div>
            <div className="rex-body-compat-subsection">
              <h3 className="rex-fibre-sub-h">Average Neck</h3>
              <p className="rex-fibre-full-p">An average neck length allows flexibility across a wide range of neckline styles while maintaining balance.</p>
            </div>
          </section>

          <figure className="rex-body-compat-banner" aria-hidden="true">
            <div className="rex-body-compat-banner-inner" />
          </figure>

          {/* Back Types */}
          <section className="rex-fibre-section rex-fibre-full-section" id="back-types">
            <h2 className="rex-fibre-section-title">Back Types</h2>
            <p className="rex-fibre-full-p">
              The back provides structural support for garments and affects how clothing fits across the shoulder blades and upper torso.
            </p>
            <div className="rex-body-compat-subsection">
              <h3 className="rex-fibre-sub-h">Narrow Back</h3>
              <p className="rex-fibre-full-p">A narrow back appears slimmer across the shoulder blades and upper torso, which can influence garment fit across the back panel.</p>
            </div>
            <div className="rex-body-compat-subsection">
              <h3 className="rex-fibre-sub-h">Broad Back</h3>
              <p className="rex-fibre-full-p">A broad back creates greater width across the shoulder blade area, often requiring more room in the garment structure to maintain comfort and mobility.</p>
            </div>
          </section>

          {/* Face Shape Identification */}
          <section className="rex-fibre-section rex-fibre-full-section" id="face-shape">
            <h2 className="rex-fibre-section-title">Face Shape Identification</h2>
            <p className="rex-fibre-full-p">
              The face is one of the most visible reference points when clothing frames the upper body. Identifying the overall shape of the face helps explain how necklines visually interact with the head and shoulders. Face shapes are generally observed through the outline formed by the forehead, cheekbones, and jawline.
            </p>
          </section>

          <figure className="rex-body-compat-banner" aria-hidden="true">
            <div className="rex-body-compat-banner-inner" />
          </figure>

          {/* Face Shape and Neckline Compatibility */}
          <section className="rex-fibre-section rex-fibre-full-section" id="face-neckline">
            <h2 className="rex-fibre-section-title">Face Shape and Neckline Compatibility</h2>
            <p className="rex-fibre-full-p">
              Necklines frame the face and influence how facial proportions are visually perceived. The shape and depth of a neckline can introduce vertical lines, horizontal width, or structural framing around the neck and shoulders. By selecting necklines that complement the natural outline of the face, garments can maintain visual balance between the head, neck, and upper body.
            </p>
            <div className="rex-body-compat-subsection">
              <h3 className="rex-fibre-sub-h">Round Face</h3>
              <p className="rex-fibre-full-p"><strong>Best Necklines:</strong> V-neck, Deep U-neck, Scoop neck. These necklines create a strong vertical opening that visually elongates the face and reduce the appearance of width around the cheeks and jawline.</p>
            </div>
            <div className="rex-body-compat-subsection">
              <h3 className="rex-fibre-sub-h">Oval Face</h3>
              <p className="rex-fibre-full-p"><strong>Best Necklines:</strong> Wider necklines such as boat or square necks add horizontal structure that complements the face without disrupting its natural symmetry.</p>
            </div>
            <div className="rex-body-compat-subsection">
              <h3 className="rex-fibre-sub-h">Square Face</h3>
              <p className="rex-fibre-full-p"><strong>Best Necklines:</strong> Curved necklines soften angular features by introducing rounded shapes near the neckline, balancing the sharp lines of the jaw.</p>
            </div>
            <div className="rex-body-compat-subsection">
              <h3 className="rex-fibre-sub-h">Heart-Shaped Face</h3>
              <p className="rex-fibre-full-p"><strong>Best Necklines:</strong> Necklines that create downward movement help balance width at the forehead and draw attention toward the center of the torso.</p>
            </div>
            <div className="rex-body-compat-subsection">
              <h3 className="rex-fibre-sub-h">Long or Rectangular Face</h3>
              <p className="rex-fibre-full-p"><strong>Best Necklines:</strong> Necklines that create horizontal width near the shoulder and neckline area reduce excessive vertical length and balance the elongated facial structure.</p>
            </div>
          </section>

          {/* Sleeve Compatibility */}
          <section className="rex-fibre-section rex-fibre-full-section" id="sleeve-compat">
            <h2 className="rex-fibre-section-title">Sleeve Compatibility</h2>
            <p className="rex-fibre-full-p">
              Sleeves influence how the arms appear in relation to the body. The point where a sleeve ends creates a visual break on the arm, while the volume of the sleeve affects how wide or narrow the arm appears. By adjusting sleeve length and volume, garments can balance the natural proportions of the arms and maintain comfortable movement.
            </p>
            <div className="rex-body-compat-subsection">
              <h3 className="rex-fibre-sub-h">Long Arms</h3>
              <p className="rex-fibre-full-p">
                When arms appear longer in proportion to the torso, sleeve lengths that divide the arm help maintain visual balance. Elbow-length sleeves, three-quarter sleeves, and full sleeves create natural sections along the arm. For lean long arms, sleeves with moderate volume add visual presence. For fuller long arms, relaxed or straight sleeves with enough ease allow comfortable movement while maintaining a clean line.
              </p>
            </div>
            <figure className="rex-body-compat-banner" aria-hidden="true">
              <div className="rex-body-compat-banner-inner" />
            </figure>
            <div className="rex-body-compat-subsection">
              <h3 className="rex-fibre-sub-h">Short Arms</h3>
              <p className="rex-fibre-full-p">
                When arms appear shorter in proportion to the torso, sleeve lengths that expose more of the arm help maintain visual length. Cap sleeves, short sleeves, and mid-arm sleeves keep the arm line visible from shoulder to wrist. For lean short arms, slight structure or gentle volume can balance shoulder and arm proportions. For fuller short arms, short or mid-arm sleeves with adequate ease around the bicep allow comfortable movement and a smoother visual line.
              </p>
            </div>
            <p className="rex-fibre-full-p">
              Sleeve compatibility is guided by two principles: where the sleeve ends and how much space the sleeve provides around the arm. When these align with the natural length and structure of the arm, the garment maintains both visual balance and comfort.
            </p>
          </section>

          {/* Garment Balance Principles */}
          <section className="rex-fibre-section rex-fibre-full-section" id="garment-balance">
            <h2 className="rex-fibre-section-title">Garment Balance Principles</h2>
            <p className="rex-fibre-full-p">
              Clothing does more than cover the body; it shapes how the body is visually perceived. Design elements create harmony and support ease of movement.
            </p>
            <p className="rex-fibre-full-p">
              Balance in garments is achieved by controlling how visual weight is distributed across the body. Seams, fabric structure, sleeve shapes, and garment lengths all contribute.
            </p>
            <div className="rex-body-compat-subsection">
              <h3 className="rex-fibre-sub-h">Visual Lengthening</h3>
              <p className="rex-fibre-full-p">
                Vertical lines, deeper necklines, and uninterrupted garment lengths create an impression of height and elongation.
              </p>
            </div>
            <div className="rex-body-compat-subsection">
              <h3 className="rex-fibre-sub-h">Visual Narrowing</h3>
              <p className="rex-fibre-full-p">
                Controlled shaping, vertical seams, streamlined silhouettes, and smoothly falling fabrics contribute to a narrower appearance.
              </p>
            </div>
          </section>

          <figure className="rex-body-compat-banner" aria-hidden="true">
            <div className="rex-body-compat-banner-inner" />
          </figure>

          {/* Volume, Waist, Proportion */}
          <section className="rex-fibre-section rex-fibre-full-section" id="volume-waist">
            <h2 className="rex-fibre-section-title">Volume Control</h2>
            <p className="rex-fibre-full-p">
              Volume refers to the amount of space a garment creates around the body. Strategic placement of volume can balance body proportions. Additional volume in sleeves can expand the upper frame, while volume in skirts or lower garments can balance broader shoulders. The key is placement: when volume appears in areas that support the body&rsquo;s natural structure, the garment feels balanced rather than overwhelming.
            </p>
            <h2 className="rex-fibre-section-title">Waist Emphasis and Waist Concealment</h2>
            <p className="rex-fibre-full-p">
              The waist acts as one of the central visual anchors of the body. Garments can emphasize the waist through shaping, seams, belts, or fitted construction, creating a defined silhouette. In some cases, garments may soften or conceal the waist by allowing fabric to fall more freely through the midsection, shifting focus away from the waist and creating a smoother vertical flow.
            </p>
            <h2 className="rex-fibre-section-title">Volume Placement and Proportion Balancing</h2>
            <p className="rex-fibre-full-p">
              The placement of design elements determines how attention moves across the garment. When volume, structure, or decorative elements are placed thoughtfully, they guide the eye toward areas that maintain balance. By adjusting garment length, sleeve structure, neckline depth, and volume distribution, clothing can work with the natural proportions of the body. Garment balance principles form the bridge between body structure and garment design, allowing visual harmony while maintaining comfort and mobility.
            </p>
          </section>

          {/* Saree Dimensions and Proportion Guide */}
          <section className="rex-fibre-section rex-fibre-full-section" id="saree-dimensions">
            <h2 className="rex-fibre-section-title">Saree Dimensions and Proportion Guide</h2>
            <p className="rex-fibre-full-p">
              Bottom border, pallu width, and top border influence body proportions. Choosing the right scale helps the saree drape work with natural proportions.
            </p>
            <h3 className="rex-fibre-sub-h">Bottom Border</h3>
            <p className="rex-fibre-full-p">
              The bottom border creates a strong horizontal line at the feet and along the pleats; its width affects how tall or balanced the lower body appears.
            </p>
            <ul className="rex-fibre-list">
              <li><strong>Short Height:</strong> Narrow borders (1–2 inches) support continuous vertical flow; wide borders can make the lower body appear shorter.</li>
              <li><strong>Tall Height:</strong> Medium to wide borders (3–6 inches) can anchor the saree visually and prevent stretching.</li>
              <li><strong>Petite Frame:</strong> Minimal or medium borders look more balanced; heavy borders can overpower the frame.</li>
              <li><strong>Broad or Larger Frame:</strong> A medium to wider border often balances a broader frame by adding structure to the lower half.</li>
            </ul>
            <h3 className="rex-fibre-sub-h">Pallu Width and Upper Body Balance</h3>
            <p className="rex-fibre-full-p">
              The pallu sits across the torso and shoulder; its width influences how the upper body appears.
            </p>
            <ul className="rex-fibre-list">
              <li><strong>Short Height:</strong> A moderately narrow or neatly pleated pallu works well; a very wide or heavily spread pallu can make the body appear shorter.</li>
              <li><strong>Tall Height:</strong> A wider or more open pallu can be carried comfortably without compressing vertical proportions.</li>
              <li><strong>Narrow Shoulders:</strong> A wider pallu spread across the shoulder can help visually expand the upper frame.</li>
              <li><strong>Broad Shoulders:</strong> A narrower or neatly pleated pallu helps maintain a cleaner shoulder line without adding extra width.</li>
            </ul>
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
