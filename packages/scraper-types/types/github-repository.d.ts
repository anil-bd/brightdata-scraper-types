// Generated from the Bright Data scraper catalog. Do not edit by hand.
// scraper: Github repository
// id:      gd_lyrexgxc24b3d4imjt
// domain:  github.com

/** Input for `Github repository` via `collect_by_url`. */
export interface GithubRepositoryCollectByUrlInput {
  url: string;
  website_url?: string;
}

/** Input for `Github repository` via `discover_by_url`. */
export interface GithubRepositoryDiscoverByUrlInput {
  repo_url: string;
}

/** Input for `Github repository` via `discover_by_search_url`. */
export interface GithubRepositoryDiscoverBySearchUrlInput {
  url: string;
}

/** One row returned by `Github repository`. Fields are optional because a scrape
 *  can legitimately come back without them. */
export interface GithubRepositoryOutput {
  /** Repository web address */
  url?: string;
  /** Unique repository ID */
  id?: string;
  /** Main programming language */
  code_language?: string;
  /** Repository source code */
  code?: unknown[];
  /** Total lines of code */
  num_lines?: number;
  /** Repository owner's username */
  user_name?: string;
  /** Owner's profile URL */
  user_url?: string;
  /** Repository size */
  size?: string;
  /** Repository size units */
  size_unit?: string;
  /** Repository size number */
  size_num?: number;
  /** Repository navigation path */
  breadcrumbs?: unknown[];
  /** Total issues count */
  num_issues?: number;
  /** Total pull requests count */
  num_pull_requests?: number;
  /** Number of associated projects */
  num_projects?: number;
  /** Fork count */
  num_fork?: number;
  /** Star count */
  num_stared?: number;
  /** Latest feature change */
  last_feature?: string;
  /** Date of last update */
  latest_update?: string;
  /** Repository website from the About section (e.g., project or company homepage) */
  website_url?: string;
  license?: Record<string, unknown>;
}

export type GithubRepositoryInput = GithubRepositoryCollectByUrlInput | GithubRepositoryDiscoverByUrlInput | GithubRepositoryDiscoverBySearchUrlInput;
