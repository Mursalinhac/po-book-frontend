export interface Model { name: string; slug: string; image: string; title: string; available: boolean }

export const models: Model[] = [
  { name: 'Stingray', slug: 'stingray', image: '/images/stingray.jpeg', title: 'Stingray', available: true },
  { name: 'Z06', slug: 'z06', image: '/images/Z06.jpg', title: 'Z06', available: true },
  { name: 'E-Ray', slug: 'eray', image: '/images/eray.jpg', title: 'E-Ray', available: true },
  { name: 'ZR1', slug: 'zr1', image: '/images/ZR1.webp', title: 'ZR1', available: false },
];

export interface CatalogSummary { trims: number; bodyStyles: string[]; minPrice: number | null }

// Derives the home-page figures from a price list; returns null when the data has no usable trims.
export function summarizeCatalog(priceList: unknown): CatalogSummary | null {
  const options = (priceList as { factoryInstalled?: { model?: { options?: { title?: string; price?: number }[] } } })
    ?.factoryInstalled?.model?.options;
  if (!Array.isArray(options) || options.length === 0) return null;
  const bodyStyles: string[] = [];
  for (const style of ['Coupe', 'Convertible']) {
    if (options.some((o) => (o.title ?? '').trim().includes(style))) bodyStyles.push(style);
  }
  const prices = options.map((o) => o.price).filter((p): p is number => typeof p === 'number' && p > 0);
  return { trims: options.length, bodyStyles, minPrice: prices.length ? Math.min(...prices) : null };
}
