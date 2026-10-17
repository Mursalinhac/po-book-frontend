import { models, summarizeCatalog, type CatalogSummary } from '../lib/models';
import ModelLineup from './ModelLineup';
import styles from './home.module.css';

const origin = (process.env.API_URL || 'http://localhost:3001').replace(/\/$/, '');

// Same backend as the /api rewrite in next.config.ts; any failure just means no figures.
async function loadSummary(slug: string): Promise<CatalogSummary | null> {
  try {
    const res = await fetch(`${origin}/pricelist/${encodeURIComponent(slug)}`, {
      signal: AbortSignal.timeout(2500),
      next: { revalidate: 300 },
    });
    return res.ok ? summarizeCatalog(await res.json()) : null;
  } catch {
    return null;
  }
}

export default async function Home() {
  const summaries = await Promise.all(models.map((m) => (m.available ? loadSummary(m.slug) : null)));
  const items = models.map((model, i) => ({ ...model, summary: summaries[i] }));
  return (
    <section className={styles.showroom} aria-labelledby="model-selection-title">
      <header className={styles.intro}>
        <h1 id="model-selection-title">Select your Corvette</h1>
        <p>Choose a model, explore its options, and prepare your purchase order.</p>
      </header>
      <ModelLineup items={items} />
    </section>
  );
}
