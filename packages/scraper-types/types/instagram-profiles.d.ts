// Generated from the Bright Data scraper catalog. Do not edit by hand.
// scraper: Instagram - Profiles
// id:      gd_l1vikfch901nx3by4
// domain:  instagram.com

/** Input for `Instagram - Profiles` via `collect_by_url`. */
export interface InstagramProfilesCollectByUrlInput {
  url: string;
}

/** Input for `Instagram - Profiles` via `discover_by_user_name`. */
export interface InstagramProfilesDiscoverByUserNameInput {
  user_name: string;
}

/** One row returned by `Instagram - Profiles`. Fields are optional because a scrape
 *  can legitimately come back without them. */
export interface InstagramProfilesOutput {
  /** The username or handle of the Instagram account */
  account?: string;
  /** Facebook ID associated with the account */
  fbid?: string;
  /** Unique identifier for the Instagram account */
  id?: string;
  /** The number of followers for the account */
  followers?: number;
  /** The total count of posts made by the account */
  posts_count?: number;
  /** Indicates whether the account is verified */
  is_verified?: boolean;
  /** External websites that users may link to from their Instagram profiles, such as personal blogs or online stores */
  external_url?: unknown[];
  /** Brief descriptions or statements that users write to introduce themselves or share their interests and passions on Instagram */
  biography?: string;
  /** Keywords or phrases that the user specified in their top posts preceded by the "#" symbol that help categorize and discover content related to a specific topic */
  post_hashtags?: unknown[];
  /** The number of accounts that the account is following */
  following?: number;
  /** Data regarding the top posts that the user has published */
  posts?: unknown[];
  /** URL that link directly to the Instagram profile image */
  profile_image_link?: string;
  /** URL that link directly to the Instagram profile */
  profile_url?: string;
  /** The name associated with the account's profile */
  profile_name?: string;
  /** The count of highlights (featured stories) on the account */
  highlights_count?: number;
  /** Data regarding the highlights that the user has published */
  highlights?: unknown[];
  /** The full name associated with the account */
  full_name?: string;
  /** Indicates whether the account is private */
  is_private?: boolean;
  /** Keywords or phrases that the user specified in his bio preceded by the "#" symbol that help categorize and discover content related to a specific topic */
  bio_hashtags?: unknown[];
  /** URL pointing to the account's profile */
  url?: string;
  /** Indicates if the account has joined Instagram recently */
  is_joined_recently?: boolean;
  /** The partner ID associated with the account */
  partner_id?: string;
  /** Email address extracted from profile description */
  email_address?: string;
  /** External websites that users may link to from their Instagram profiles, such as personal blogs or online stores, with their descriptions */
  external_url_title?: Record<string, unknown>;
  /** The profile's pronouns (if available) */
  pronouns?: string;
  /** External URLs */
  external_urls?: unknown[];
}

export type InstagramProfilesInput = InstagramProfilesCollectByUrlInput | InstagramProfilesDiscoverByUserNameInput;
