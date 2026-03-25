/**
 * Central search index for site-wide search. Used by Header search overlay.
 * Each entry: { type, label, href, keywords } — keywords are used for matching.
 */
import { DESIGNERS } from './designers';

// Marketplace product titles (must match SectionMarketplace / PageMarketplace for q=)
const MARKETPLACE_PRODUCTS = [
  { title: 'Mysore Silk Saree', designer: 'Ananya Reddy' },
  { title: 'Banarasi Heritage', designer: 'Ravi Kumar' },
  { title: 'Kanjivaram Gold', designer: 'Priya Sharma' },
  { title: 'Tussar Silk Classic', designer: 'Meera Iyer' },
  { title: 'Chiffon Elegance', designer: 'Ananya Reddy' },
  { title: 'Cotton Weave', designer: 'Ravi Kumar' },
];

// Pages and main nav targets
const PAGES = [
  { label: 'About', href: '/about', keywords: 'about us story team' },
  { label: 'Market Place', href: '/marketplace', keywords: 'marketplace shop designs saree collection buy' },
  { label: 'Designers', href: '/designers', keywords: 'designers designer list all' },
  { label: 'Contact Us', href: '/contact', keywords: 'contact help support reach' },
  { label: 'Blog', href: '/blog', keywords: 'blog article journal' },
  { label: 'FAQ', href: '/contact#faq', keywords: 'faq questions contact support' },
  { label: 'Careers', href: '/careers', keywords: 'careers jobs hiring' },
  { label: 'Merchandise', href: '/merchandise', keywords: 'merchandise gift card clips belts' },
  { label: 'Reviews', href: '/reviews', keywords: 'reviews testimonials' },
  { label: 'Return Policy', href: '/policies/return', keywords: 'return policy refund' },
  { label: 'Shipping', href: '/policies/shipping', keywords: 'shipping delivery' },
  { label: 'Onliest REX', href: '/products/rex', keywords: 'rex ai' },
  { label: 'Design Studio', href: '/products/design-studio', keywords: 'design studio' },
  { label: 'Fitting Room', href: '/products/fitting-room', keywords: 'fitting room try' },
  { label: 'Onliest Atelier', href: '/products/atelier', keywords: 'atelier' },
  { label: 'Onliest HALO', href: '/products/halo', keywords: 'halo' },
];

// Education hub sections (tab titles + fibre inner page)
const EDUCATION = [
  { label: 'Onliest World', href: '/education/onliest-world', keywords: 'onliest world intelligence textile' },
  { label: 'Trending', href: '/education/trending', keywords: 'trending trends style forecast modern saree blouse' },
  { label: 'Body Compatibility', href: '/education/body-compatibility', keywords: 'body compatibility fit shape' },
  { label: 'Color', href: '/education/color-theory', keywords: 'color colour skin undertone theory pairing warm cool' },
  { label: 'Fibre & Fabric', href: '/education/fibre-foundations', keywords: 'fibre fabric weave silk cotton' },
  { label: 'Fabric Construction', href: '/education/fabric-construction', keywords: 'fabric construction woven knit textile yarn' },
  { label: 'Saree', href: '/education/saree', keywords: 'saree sari weaving' },
  { label: 'Surface Ornamentation', href: '/education/surface-ornamentation', keywords: 'surface ornamentation embroidery zari beads sequins appliqué lace trims printing' },
  { label: 'Blouse', href: '/education/blouse', keywords: 'blouse neckline sleeve' },
  { label: 'Saree Draping', href: '/education/saree-draping', keywords: 'saree draping drape pallu' },
];

function buildSearchIndex() {
  const index = [];

  PAGES.forEach((p) => {
    index.push({ type: 'page', label: p.label, href: p.href, keywords: `${p.label} ${p.keywords}`.toLowerCase() });
  });

  DESIGNERS.forEach((d) => {
    const keywords = `${d.name} ${d.specialty}`.toLowerCase();
    index.push({ type: 'designer', label: d.name, href: `/designers/${d.id}`, keywords });
  });

  MARKETPLACE_PRODUCTS.forEach((p) => {
    const keywords = `${p.title} ${p.designer}`.toLowerCase();
    index.push({ type: 'design', label: p.title, href: `/marketplace?q=${encodeURIComponent(p.title)}`, keywords });
  });

  EDUCATION.forEach((e) => {
    index.push({ type: 'education', label: e.label, href: e.href, keywords: `${e.label} ${e.keywords}`.toLowerCase() });
  });

  return index;
}

export const SEARCH_INDEX = buildSearchIndex();

/**
 * Filter index by query (case-insensitive match on label + keywords).
 * @param {string} query
 * @param {number} maxResults
 * @returns {{ type: string, label: string, href: string }[]}
 */
export function filterSearchIndex(query, maxResults = 12) {
  const q = (query || '').trim().toLowerCase();
  if (!q) return [];

  const matched = SEARCH_INDEX.filter(
    (entry) => entry.label.toLowerCase().includes(q) || entry.keywords.includes(q) || q.split(/\s+/).every((word) => entry.keywords.includes(word) || entry.label.toLowerCase().includes(word))
  );

  // Dedupe by href+label, then by type order: page, designer, design, education
  const typeOrder = { page: 0, designer: 1, design: 2, education: 3 };
  const seen = new Set();
  const deduped = matched.filter((entry) => {
    const key = `${entry.href}|${entry.label}`;
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
  deduped.sort((a, b) => typeOrder[a.type] - typeOrder[b.type] || a.label.localeCompare(b.label));

  return deduped.slice(0, maxResults).map(({ type, label, href }) => ({ type, label, href }));
}

const RECENT_STORAGE_KEY = 'onliest_search_recent';
const RECENT_MAX = 8;

export function getRecentSearches() {
  try {
    const raw = localStorage.getItem(RECENT_STORAGE_KEY);
    if (!raw) return [];
    const list = JSON.parse(raw);
    return Array.isArray(list) ? list.slice(0, RECENT_MAX) : [];
  } catch {
    return [];
  }
}

export function addRecentSearch(term) {
  const t = (term || '').trim();
  if (!t) return;
  const list = getRecentSearches();
  const next = [t, ...list.filter((x) => x !== t)].slice(0, RECENT_MAX);
  try {
    localStorage.setItem(RECENT_STORAGE_KEY, JSON.stringify(next));
  } catch (_) {}
}
