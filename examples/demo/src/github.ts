import { byDomain, type ScraperOutput } from '@anil-bd/scraper-types';

type Repo = ScraperOutput<'github-repository'>;

export function stars(repo: Repo): number {
  return repo.num_stared ?? 0;
}

export const candidates = byDomain('github.com').map((s) => s.title);
