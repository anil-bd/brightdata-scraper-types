// Generated from the Bright Data scraper catalog. Do not edit by hand.
// scraper: npmjs
// id:      gd_mk57m0301khq4jmsul
// domain:  npmjs.com

/** Input for `npmjs` via `collect_by_url`. */
export interface NpmjsCollectByUrlInput {
  package_name: string;
}

/** One row returned by `npmjs`. Fields are optional because a scrape
 *  can legitimately come back without them. */
export interface NpmjsOutput {
  url?: string;
  /** NPMjs package name */
  package_name?: string;
  /** NPMjs version number */
  version?: string;
  /** NPMjs README.md content */
  readme_content?: string;
}

export type NpmjsInput = NpmjsCollectByUrlInput;
