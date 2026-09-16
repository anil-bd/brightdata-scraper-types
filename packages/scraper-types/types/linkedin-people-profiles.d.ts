// Generated from the Bright Data scraper catalog. Do not edit by hand.
// scraper: LinkedIn people profiles
// id:      gd_l1viktl72bvl7bjuj0
// domain:  linkedin.com

/** Input for `LinkedIn people profiles` via `collect_by_url`. */
export interface LinkedinPeopleProfilesCollectByUrlInput {
  url: string;
}

/** One row returned by `LinkedIn people profiles`. Fields are optional because a scrape
 *  can legitimately come back without them. */
export interface LinkedinPeopleProfilesOutput {
  /** A unique identifier for the person's LinkedIn profile */
  id?: string;
  /** Profile name */
  name?: string;
  /** Geographical location of the user */
  city?: string;
  /** Geographical location of the user */
  country_code?: string;
  /** The current job title or position of the profile */
  position?: string;
  /** A concise profile summary. In some cases, only a truncated version with "…" is displayed on the website, and this is the version we capture */
  about?: string;
  /** Contains information related to the user's last LinkedIn posts. It typically includes the post title, created date, URL link to the post, etc. */
  posts?: unknown[];
  /** Provides information about the user's current professional position. It typically includes the company name, the user's job title, the company ID, and the industry or sector to which the company be... */
  current_company?: Record<string, unknown>;
  /** Contains information about user's professional history. It typically includes the user's job title, length of time the user held the position, the geographic location of the company, the start and ... */
  experience?: unknown[];
  /** URL that link directly to the LinkedIn profile */
  url?: string;
  /** Provides a list of LinkedIn profiles that users who have viewed the user's profile, have viewed these as well */
  people_also_viewed?: unknown[];
  /** Provides information about the user's educational background */
  educations_details?: string;
  /** Provides information about the user's educational background. It typically includes the degree, the start and end year, the filed, etc. */
  education?: unknown[];
  /** A numeric count of the total number of recommendations that the user has received */
  recommendations_count?: number;
  /** URL that link to the profile picture of the LinkedIn user */
  avatar?: string;
  /** Contains information about courses or educational programs that the user has undertaken */
  courses?: unknown[];
  /** Contains information about the user's proficiency in different languages */
  languages?: unknown[];
  /** Licenses & Certifications */
  certifications?: unknown[];
  /** Recommendations that the user has received from their connections or colleagues on LinkedIn */
  recommendations?: unknown[];
  /** Contains information related to the user's volunteer work */
  volunteer_experience?: unknown[];
  /** How many users/ companies following the profile */
  followers?: number;
  /** How many connections the profile has */
  connections?: number;
  /** The id of the latest/current company of the profile */
  current_company_company_id?: string;
  /** The name of the latest/current company of the profile */
  current_company_name?: string;
  /** Published works or presentations */
  publications?: unknown[];
  /** Patents filed or granted */
  patents?: unknown[];
  /** Professional or academic projects */
  projects?: unknown[];
  /** Memberships in professional organizations */
  organizations?: unknown[];
  /** Geographical location of the user */
  location?: string;
  /** The URL that was entered when starting the scraping process */
  input_url?: string;
  /** LinkedIn profile identifier */
  linkedin_id?: string;
  /** Any activity the user has regarding posts */
  activity?: unknown[];
  /** Numeric LinkedIn profile ID */
  linkedin_num_id?: string;
  /** Banner image */
  banner_image?: string;
  /** Awards and recognitions received */
  honors_and_awards?: unknown[];
  /** Profiles similar to the current one */
  similar_profiles?: unknown[];
  /** Is the avatar picture the default avatar empty picture */
  default_avatar?: boolean;
  /** Boolean indicating if the account is memorialized */
  memorialized_account?: boolean;
  /** External links added to the bio */
  bio_links?: unknown[];
  /** First name of the user */
  first_name?: string;
  /** Last name of the user */
  last_name?: string;
  /** Indicator if the profile marked as influencer */
  influencer?: boolean;
}

export type LinkedinPeopleProfilesInput = LinkedinPeopleProfilesCollectByUrlInput;
