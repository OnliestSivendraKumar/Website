import { useEffect, useMemo, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const SILK_TYPES = [
  {
    label: 'Tissue',
    slug: 'tissue',
    pdfFile: 'TISSUE.pdf',
    description:
      'Tissue sarees are known for their luminous metallic sheen and airy structure. This guide covers weave behavior, styling contexts, blouse pairings, and care essentials.',
  },
  {
    label: 'Uppada',
    slug: 'uppada',
    pdfFile: 'UPPADA.pdf',
    description:
      'Uppada sarees are celebrated for lightweight drape and intricate jamdani-inspired motifs. Explore key textile traits, motif language, and occasion-based styling.',
  },
  {
    label: 'Velvet',
    slug: 'velvet',
    pdfFile: 'VELVET.pdf',
    description:
      'Velvet sarees deliver depth, richness, and winter-occasion elegance. This note explains pile texture, silhouette control, and ornament balancing.',
  },
  {
    label: 'Venkatagiri',
    slug: 'venkatagiri',
    pdfFile: 'VENKATAGIRI.pdf',
    description:
      'Venkatagiri sarees combine breathable comfort with refined zari detailing. Learn weave characteristics, border structures, and practical draping use-cases.',
  },
  {
    label: 'Mysore Silk',
    slug: 'mysore-silk',
    pdfFile: 'MYSORE SILK.pdf',
    description:
      'Mysore Silk is valued for smooth finish, pure-silk sheen, and classic elegance. Review quality markers, color direction, and blouse compatibility.',
  },
  {
    label: 'Organza',
    slug: 'organza',
    pdfFile: 'ORGANZA.pdf',
    description:
      'Organza sarees offer crisp transparency and architectural fall. This section explains layering, edge finishing, and modern styling approaches.',
  },
  {
    label: 'Patola',
    slug: 'patola',
    pdfFile: 'PATOLA.pdf',
    description:
      'Patola is defined by high-precision double ikat traditions and geometric storytelling. Explore motif alignment, color logic, and heritage significance.',
  },
  {
    label: 'Pochampally Ikat',
    slug: 'pochampally-ikat',
    pdfFile: 'POCHAMPALLY IKAT.pdf',
    description:
      'Pochampally Ikat balances vivid pattern rhythm with wearable drape. This guide details resist-dye behavior, visual texture, and pairing principles.',
  },
  {
    label: 'Banaras',
    slug: 'banaras',
    pdfFile: 'BANARAS.pdf',
    description:
      'Banaras sarees are iconic for brocade richness and zari craftsmanship. Understand weave weight, motif scale, and ceremonial styling frameworks.',
  },
  {
    label: 'Chanderi',
    slug: 'chanderi',
    pdfFile: 'CHANDERI.pdf',
    description:
      'Chanderi sarees are prized for lightness, transparency, and subtle shimmer. Learn texture handling, pallu movement, and elegant day-to-evening use.',
  },
  {
    label: 'Dharmavaram',
    slug: 'dharmavaram',
    pdfFile: 'DHARMAVARAM.pdf',
    description:
      'Dharmavaram sarees are known for broad borders, rich pallus, and bridal heritage. Explore fabric weight management and structured drape outcomes.',
  },
  {
    label: 'Kanjeevaram',
    slug: 'kanjeevaram',
    pdfFile: 'KANJEEVARAM.pdf',
    description:
      'Kanjeevaram sarees represent temple-inspired motifs and enduring silk structure. This guide covers hallmark traits, contrast borders, and timeless styling.',
  },
];

export default function PageSilkSareeType() {
  const { silkType = '' } = useParams();
  const frameWrapRef = useRef(null);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const item = useMemo(
    () => SILK_TYPES.find((x) => x.slug === String(silkType).toLowerCase()),
    [silkType]
  );

  const label = item?.label || 'Silk Saree Type';
  const description = item?.description || 'Explore detailed notes for this silk saree type.';
  const pdfSrc = item?.pdfFile
    ? `/PDF/${encodeURIComponent(item.pdfFile)}`
    : '';
  const iframeSrc = `${pdfSrc}#toolbar=0&navpanes=0&scrollbar=1&view=FitH`;

  useEffect(() => {
    const onFsChange = () => setIsFullscreen(Boolean(document.fullscreenElement));
    document.addEventListener('fullscreenchange', onFsChange);
    return () => document.removeEventListener('fullscreenchange', onFsChange);
  }, []);

  function toggleFullscreen() {
    const el = frameWrapRef.current;
    if (!el) return;
    if (document.fullscreenElement) {
      document.exitFullscreen?.();
      return;
    }
    el.requestFullscreen?.();
  }

  return (
    <>
      <Header hideOnPanels={false} />
      <main className="rex-page-inner rex-fibre-page" id="main-content" role="main">
        <div className="rex-fibre-shell">
          <header className="rex-fibre-header">
            <p className="rex-page-eyebrow">Education Hub</p>
            <h1 className="rex-fibre-title">{label}</h1>
            <p className="rex-fibre-intro">{description}</p>
          </header>

          <section className="rex-fibre-section" aria-label={`${label} PDF viewer`}>
            <div className="rex-silk-pdf-actions">
              <a className="rex-btn rex-btn-edu-nav" href="/education/saree">← Back to Saree</a>
            </div>
            <div className="rex-silk-pdf-frame-wrap" ref={frameWrapRef}>
              <button
                type="button"
                className="rex-silk-pdf-fullscreen-btn"
                onClick={toggleFullscreen}
                aria-pressed={isFullscreen}
              >
                {isFullscreen ? 'Exit Fullscreen' : 'Fullscreen'}
              </button>
              <iframe
                title={`${label} PDF`}
                src={iframeSrc}
                className="rex-silk-pdf-frame"
              />
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
