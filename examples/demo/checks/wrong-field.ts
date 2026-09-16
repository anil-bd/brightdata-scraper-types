// This file is meant to fail. It is the proof that the types catch a bad field
// name at edit time instead of after a scrape run returns undefined.
import type { ScraperOutput } from '@anil-bd/scraper-types';

type Product = ScraperOutput<'amazon-products'>;

export function broken(row: Product) {
  return row.prodcut_title;   // typo, no such field
}
