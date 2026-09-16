// Generated from the Bright Data scraper catalog. Do not edit by hand.
// scraper: LinkedIn company information
// id:      gd_l1vikfnt1wgvvqz95w
// domain:  linkedin.com

/** Input for `LinkedIn company information` via `collect_by_url`. */
export interface LinkedinCompanyInformationCollectByUrlInput {
  url: string;
}

/** One row returned by `LinkedIn company information`. Fields are optional because a scrape
 *  can legitimately come back without them. */
export interface LinkedinCompanyInformationOutput {
  /** Unique to each company */
  id?: string;
  /** The name of the company */
  name?: string;
  /** The country where the company is located or headquartered */
  country_code?: string;
  /** General information about the company's locations */
  locations?: unknown[];
  /** The number of followers the company has on LinkedIn */
  followers?: number;
  /** The number of employees listed on LinkedIn */
  employees_in_linkedin?: number;
  /** A description or summary of the company */
  about?: string;
  /** List of the company's specializations */
  specialties?: string;
  /** The number of employees in the company, as reported by the company */
  company_size?: string;
  /** The type of organization */
  organization_type?: string;
  /** The industries to which the company belongs */
  industries?: string;
  /** The official website of the company */
  website?: string;
  /** URL linking to the company's profile on Crunchbase */
  crunchbase_url?: string;
  /** The year in which the company was founded */
  founded?: number;
  /** A unique identifier for the company */
  company_id?: string;
  /** Additional information about the company's employees */
  employees?: unknown[];
  /** The location of the company's headquarters */
  headquarters?: string;
  /** URL that links to the banner photo associated with the company's LinkedIn page */
  image?: string;
  /** URL that links to the profile picture of the company's LinkedIn page */
  logo?: string;
  /** Information about similar companies */
  similar?: unknown[];
  /** The URL or link to the company's LinkedIn page */
  url?: string;
  /** Information about the company's most recent posts on LinkedIn */
  updates?: unknown[];
  /** The company's slogan */
  slogan?: string;
  /** Information about affiliated companies */
  affiliated?: unknown[];
  /** Information related to the company's financial backing and investments */
  funding?: Record<string, unknown>;
  /** Information about the company's investors */
  investors?: unknown[];
  /** Geographical location of the company */
  formatted_locations?: unknown[];
  /** Information about the company's stock-related data. Include details such as the stock exchange where the company is listed (e.g., NYSE, NASDAQ) */
  stock_info?: Record<string, unknown>;
  /** The url of the directions provided by the company on linkedin */
  get_directions_url?: unknown[];
  /** raw description in html */
  description?: string;
  /** Open-roles summary text extracted from LinkedIn */
  additional_information?: string;
  /** array of all relevant countries the company locate in */
  country_codes_array?: unknown[];
  /** Number of alumni on LinkedIn */
  alumni?: number;
  /** Aggregated alumni insights */
  alumni_information?: unknown[];
  /** Company website root domain */
  website_simplified?: string;
  /** Raw About text captured from the page */
  unformatted_about?: string;
}

export type LinkedinCompanyInformationInput = LinkedinCompanyInformationCollectByUrlInput;
