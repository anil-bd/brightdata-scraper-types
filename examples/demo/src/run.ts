/**
 * One end-to-end example: scrape an Amazon product page with typed input and
 * typed rows. Run it with no token to see the request without sending it.
 *
 *   npx tsx src/run.ts                            dry run, prints the request
 *   BRIGHTDATA_API_TOKEN=... npx tsx src/run.ts   real trigger and poll
 */
import {
  byDomain,
  type ScraperInput,
  type ScraperOutput,
} from '@anil-bd/scraper-types';

const TARGET = process.argv[2] ?? 'https://www.amazon.com/dp/B0CHX1W1XY';
const TOKEN = process.env.BRIGHTDATA_API_TOKEN;
const API = 'https://api.brightdata.com/datasets/v3';

// 1. The agent knows the URL. The package knows which scraper handles it.
const [scraper] = byDomain(TARGET);
if (!scraper) {
  throw new Error(`no scraper in this package for ${TARGET}`);
}

// This example is written against one scraper. Resolving any other host still
// works, it just stops here, because the payload below is typed to Amazon.
const AMAZON = 'amazon-products' as const;

// 2. Typed input. Drop the url and this does not compile.
const payload: ScraperInput<typeof AMAZON>[] = [{ url: TARGET }];

// 3. Typed rows, known before a single request goes out.
type Product = ScraperOutput<typeof AMAZON>;

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

async function api<T>(path: string, init?: RequestInit): Promise<T> {
  const res = await fetch(`${API}${path}`, {
    ...init,
    headers: {
      Authorization: `Bearer ${TOKEN}`,
      'Content-Type': 'application/json',
      ...(init?.headers ?? {}),
    },
  });
  if (!res.ok) {
    throw new Error(`${res.status} ${res.statusText} on ${path}: ${await res.text()}`);
  }
  return (await res.json()) as T;
}

async function main() {
  console.log(`scraper : ${scraper.title}`);
  console.log(`id      : ${scraper.id}`);
  console.log(`methods : ${scraper.types.join(', ')}`);
  console.log(`target  : ${TARGET}\n`);

  if (scraper.name !== AMAZON) {
    console.log(`This example only sends requests for ${AMAZON}. Resolved ${scraper.name}, stopping here.`);
    return;
  }

  if (!TOKEN) {
    console.log('BRIGHTDATA_API_TOKEN is not set, so this is a dry run.\n');
    console.log(`POST ${API}/trigger?dataset_id=${scraper.id}&include_errors=true`);
    console.log(JSON.stringify(payload, null, 2));
    return;
  }

  const { snapshot_id } = await api<{ snapshot_id: string }>(
    `/trigger?dataset_id=${scraper.id}&include_errors=true`,
    { method: 'POST', body: JSON.stringify(payload) },
  );
  console.log(`snapshot: ${snapshot_id}`);

  for (let i = 0; i < 60; i++) {
    const { status } = await api<{ status: string }>(`/progress/${snapshot_id}`);
    if (status === 'ready') break;
    if (status === 'failed') throw new Error('snapshot failed');
    process.stdout.write(`\r  ${status} ... ${i * 5}s`);
    await sleep(5000);
  }
  console.log('');

  // The only cast in the file. Everything downstream is typed.
  const rows = (await api<Product[]>(`/snapshot/${snapshot_id}?format=json`)) ?? [];
  console.log(`rows: ${rows.length}\n`);

  for (const row of rows) {
    // Autocomplete lists all 107 fields here, each with its catalog description.
    const price = row.final_price ?? row.initial_price;
    console.log(`  ${row.title ?? 'untitled'}`);
    console.log(`  brand   ${row.brand ?? '-'}`);
    console.log(`  price   ${price ?? '-'} ${row.currency ?? ''}`);
    console.log(`  rating  ${row.rating ?? '-'} from ${row.reviews_count ?? 0} reviews`);
    console.log(`  asin    ${row.asin ?? '-'}`);
  }
}

main().catch((err) => {
  console.error(err instanceof Error ? err.message : err);
  process.exit(1);
});
