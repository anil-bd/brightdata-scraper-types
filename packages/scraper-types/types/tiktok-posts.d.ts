// Generated from the Bright Data scraper catalog. Do not edit by hand.
// scraper: TikTok - Posts
// id:      gd_lu702nij2f790tmv9h
// domain:  tiktok.com

/** Input for `TikTok - Posts` via `collect_by_url`. */
export interface TiktokPostsCollectByUrlInput {
  url: string;
  discovery_input?: Record<string, unknown>;
  country?: string;
}

/** Input for `TikTok - Posts` via `discover_by_profile_url`. */
export interface TiktokPostsDiscoverByProfileUrlInput {
  url: string;
  num_of_posts?: number;
  posts_to_not_include?: unknown[];
  start_date?: string;
  end_date?: string;
  what_to_collect?: string;
  post_type?: string;
  country?: string;
  include_pinned_post?: boolean;
  sort_by?: string;
}

/** Input for `TikTok - Posts` via `discover_by_keyword`. */
export interface TiktokPostsDiscoverByKeywordInput {
  search_keyword: string;
  num_of_posts?: number;
  posts_to_not_include?: unknown[];
  country?: string;
}

/** Input for `TikTok - Posts` via `discover_by_url`. */
export interface TiktokPostsDiscoverByUrlInput {
  URL: string;
  num_of_posts?: number;
  country?: string;
}

/** One row returned by `TikTok - Posts`. Fields are optional because a scrape
 *  can legitimately come back without them. */
export interface TiktokPostsOutput {
  /** Unique post link */
  url?: string;
  /** Identification for each post */
  post_id?: string;
  /** Text accompanying the post */
  description?: string;
  /** Post creation timestamp */
  create_time?: string;
  /** Likes received */
  digg_count?: number;
  /** Number of shares */
  share_count?: string;
  /** Number of times saved */
  collect_count?: number;
  /** Number of comments */
  comment_count?: number;
  /** Video play count */
  play_count?: number;
  /** Duration of the video */
  video_duration?: number;
  /** Included hashtags */
  hashtags?: unknown[];
  /** Sound used, if any */
  original_sound?: string;
  /** Unique user identifier */
  profile_id?: string;
  /** User's username */
  profile_username?: string;
  /** User's profile link */
  profile_url?: string;
  /** User's profile picture */
  profile_avatar?: string;
  /** User's bio */
  profile_biography?: string;
  /** Post preview image */
  preview_image?: string;
  /** Type of post (video, image, text) */
  post_type?: string;
  /** Discovery input value */
  discovery_input?: Record<string, unknown>;
  /** Indicates if the video is an official item */
  offical_item?: boolean;
  /** Security identifier for the profile */
  secu_id?: string;
  /** Indicates if the video is original */
  original_item?: boolean;
  /** Shortcode for the video */
  shortcode?: string;
  /** Width of the video */
  width?: number;
  /** Aspect ratio of the video */
  ratio?: string;
  /** URL of the video, URLs that are generated are session-based only */
  video_url?: string;
  /** Information about the music used in the video */
  music?: Record<string, unknown>;
  /** URL link to media */
  cdn_url?: string;
  /** Indicates whether the TikTok account is verified (boolean: True/False) */
  is_verified?: boolean;
  /** Account ID */
  account_id?: string;
  /** List of images for 'carousel'-type TikTok posts */
  carousel_images?: unknown[];
  /** Tagged user */
  tagged_user?: unknown[];
  /** Number of followers of the post Author */
  profile_followers?: number;
  /** A session-related token used by TikTok to track and validate user requests */
  tt_chain_token?: string;
  /** The region column indicates the video's country of origin (e.g., US, UK) */
  region?: string;
  /** Information indicating if the post includes shopping, promotional, or affiliate content */
  commerce_info?: string;
  /** URL for the subtitles */
  subtitle_url?: string;
  /** Format of the subtitles */
  subtitle_format?: string;
  /** Subtitle info */
  subtitle_info?: unknown[];
  /** URL link to media */
  cdn_link?: string;
  /** Number of shares */
  num_share_count?: number;
  /** Comments of the post */
  comments?: unknown[];
}

export type TiktokPostsInput = TiktokPostsCollectByUrlInput | TiktokPostsDiscoverByProfileUrlInput | TiktokPostsDiscoverByKeywordInput | TiktokPostsDiscoverByUrlInput;
