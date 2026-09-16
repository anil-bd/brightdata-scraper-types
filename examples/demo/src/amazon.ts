import { SCRAPERS, byDomain, type ScraperOutput, type ScraperInput } from '@anil-bd/scraper-types';

// The agent already knows the URL it wants. One call resolves the scraper.
const [scraper] = byDomain('https://www.amazon.com/dp/B0CHX1W1XY');
console.log(scraper.id, scraper.title);   // gd_l7q7dkf244hwjntr0 Amazon products

// Input is checked. Omit a required field and this stops compiling.
const input: ScraperInput<'amazon-products'> = {
  url: 'https://www.amazon.com/dp/B0CHX1W1XY',
};

// The row shape is known before a single request is made.
type Product = ScraperOutput<'amazon-products'>;

function summarise(row: Product): string {
  // Type "row." in an editor here and every field in the catalog is listed,
  // each with the description from the scraper's output schema.
  const price = row.final_price ?? row.initial_price ?? 0;
  return `${row.title ?? 'untitled'} by ${row.brand ?? 'unknown'} at ${price} ${row.currency ?? ''}`;
}

// Scraper ids stay out of your code. The map carries them.
console.log(SCRAPERS['amazon-reviews'].id, SCRAPERS['amazon-reviews'].domain);

export { summarise, input };
