/**
 * Designers data — used by designers list page and designer detail (inner) page.
 * IDs/slugs must match route param /designers/:id
 */
export const DESIGNERS = [
  {
    id: 'ananya-reddy',
    name: 'Ananya Reddy',
    specialty: 'Traditional Silk',
    bio: 'Ananya brings decades of experience in South Indian silks and contemporary drapes. Her work balances heritage motifs with modern wearability.',
    image: 'https://res.cloudinary.com/djlqifbxp/image/upload/v1774509290/ds-1_ao4fyf.png',
    imageAlt: 'Ananya Reddy',
    collections: 24,
    rating: 4.9,
    reviewCount: 401,
    featuredProductIds: ['royal-silk-gok', 'chiffon-elegance'],
    location: 'Chennai, India',
  },
  {
    id: 'ravi-kumar',
    name: 'Ravi Kumar',
    specialty: 'Banarasi Weaves',
    bio: 'Ravi specializes in Banarasi brocades and intricate zari work. Each piece is crafted for occasion wear that stands the test of time.',
    image: 'https://res.cloudinary.com/djlqifbxp/image/upload/v1774509290/ds-3_maibel.png',
    imageAlt: 'Ravi Kumar',
    collections: 18,
    rating: 5,
    reviewCount: 273,
    featuredProductIds: ['modern-fusion-blouse', 'cotton-weave'],
    location: 'Varanasi, India',
  },
  {
    id: 'priya-sharma',
    name: 'Priya Sharma',
    specialty: 'Kanjivaram Art',
    bio: 'Priya’s Kanjivaram collections fuse traditional temple borders with bold color palettes. Recognized for precision and finish.',
    image: 'https://res.cloudinary.com/djlqifbxp/image/upload/v1774509290/ds-2_n5rdtx.png',
    imageAlt: 'Priya Sharma',
    collections: 31,
    rating: 4.8,
    reviewCount: 312,
    featuredProductIds: ['banarasi-traditional'],
    location: 'Kanchipuram, India',
  },
  {
    id: 'meera-iyer',
    name: 'Meera Iyer',
    specialty: 'Light Weaves & Florals',
    bio: 'Meera focuses on lightweight sarees and floral prints for everyday and summer occasions. Easy care and versatile styling.',
    image: 'https://res.cloudinary.com/djlqifbxp/image/upload/v1774509539/ds-4_gia6xv.png',
    imageAlt: 'Meera Iyer',
    collections: 16,
    rating: 4.7,
    reviewCount: 198,
    featuredProductIds: ['floral-pink-saree'],
    location: 'Bengaluru, India',
  },
  {
    id: 'saanvi-patel',
    name: 'Saanvi Patel',
    specialty: 'Blouse & Surface Work',
    bio: 'Saanvi designs statement blouses with mirror work, embroidery, and clean cuts. Her pieces pair with both traditional and modern sarees.',
    image: '/ds-5.png',
    imageAlt: 'Saanvi Patel',
    collections: 22,
    rating: 4.9,
    reviewCount: 267,
    featuredProductIds: ['elegant-designer-blouse'],
    location: 'Mumbai, India',
  },
  {
    id: 'divya-menon',
    name: 'Divya Menon',
    specialty: 'Contemporary Blouses',
    bio: 'Divya creates contemporary blouse silhouettes—crop, high neck, and back-detail—that work across occasions and body types.',
    image: '/ds-6.png',
    imageAlt: 'Divya Menon',
    collections: 14,
    rating: 4.6,
    reviewCount: 145,
    featuredProductIds: ['contemporary-crop'],
    location: 'Kochi, India',
  },
];

export function getDesignerById(id) {
  return DESIGNERS.find((d) => d.id === id);
}

export function getDesignerBySlug(slug) {
  return DESIGNERS.find((d) => d.id === slug);
}
