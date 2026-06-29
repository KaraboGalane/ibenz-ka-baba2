// Placeholder gallery images.
// Replace the `src` values with real photography of your own vehicle and events
// before going live — these are stand-ins only.

export const galleryItems = [
  {
    id: 1,
    src: 'https://picsum.photos/seed/ibenz-wedding-1/900/1100',
    alt: 'Vintage Mercedes at a wedding entrance',
    category: 'Weddings',
  },
  {
    id: 2,
    src: 'https://picsum.photos/seed/ibenz-matric-1/900/700',
    alt: 'Matric dance couple beside the Mercedes',
    category: 'Matric Dance',
  },
  {
    id: 3,
    src: 'https://picsum.photos/seed/ibenz-detail-1/900/900',
    alt: 'Close up of the Mercedes star emblem',
    category: 'Details',
  },
  {
    id: 4,
    src: 'https://picsum.photos/seed/ibenz-traditional-1/900/1200',
    alt: 'Traditional wedding party with the Mercedes',
    category: 'Traditional',
  },
  {
    id: 5,
    src: 'https://picsum.photos/seed/ibenz-chauffeur-1/900/700',
    alt: 'Chauffeur opening the door for a guest',
    category: 'Chauffeur Service',
  },
  {
    id: 6,
    src: 'https://picsum.photos/seed/ibenz-photoshoot-1/900/1000',
    alt: 'Editorial photoshoot using the Mercedes as backdrop',
    category: 'Photoshoots',
  },
  {
    id: 7,
    src: 'https://picsum.photos/seed/ibenz-wedding-2/900/700',
    alt: 'Bridal car decorated with white florals',
    category: 'Weddings',
  },
  {
    id: 8,
    src: 'https://picsum.photos/seed/ibenz-interior-1/900/1100',
    alt: 'Interior detail of the vintage Mercedes',
    category: 'Details',
  },
  {
    id: 9,
    src: 'https://picsum.photos/seed/ibenz-umembeso-1/900/900',
    alt: 'Umembeso ceremony guests arriving in style',
    category: 'Umembeso',
  },
]

export const galleryCategories = [
  'All',
  ...Array.from(new Set(galleryItems.map((item) => item.category))),
]
