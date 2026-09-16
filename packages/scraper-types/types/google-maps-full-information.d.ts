// Generated from the Bright Data scraper catalog. Do not edit by hand.
// scraper: Google Maps full information
// id:      gd_m8ebnr0q2qlklc02fz
// domain:  google.com

/** Input for `Google Maps full information` via `collect_by_url`. */
export interface GoogleMapsFullInformationCollectByUrlInput {
  url: string;
}

/** Input for `Google Maps full information` via `discover_by_location`. */
export interface GoogleMapsFullInformationDiscoverByLocationInput {
  country: string;
  lat?: number;
  long?: number;
  zoom_level?: number;
  keyword: string;
}

/** Input for `Google Maps full information` via `discover_by_place_id`. */
export interface GoogleMapsFullInformationDiscoverByPlaceIdInput {
  place_id: string;
}

/** Input for `Google Maps full information` via `discover_by_cid`. */
export interface GoogleMapsFullInformationDiscoverByCidInput {
  CID: string;
}

/** One row returned by `Google Maps full information`. Fields are optional because a scrape
 *  can legitimately come back without them. */
export interface GoogleMapsFullInformationOutput {
  /** Unique identifier for the place on Google Maps */
  place_id?: string;
  /** URL pointing to the business on Google Maps */
  url?: string;
  /** The country where the business is located */
  country?: string;
  /** The name of the business */
  name?: string;
  /** The category or type of the business */
  category?: string;
  /** The physical address of the business */
  address?: string;
  /** A detailed description of the business */
  description?: string;
  /** A list of structured key-value attributes providing additional details about the business (e.g., accessibility, payment options, amenities) */
  business_details?: unknown[];
  /** Operating hours of the business for each day of the week */
  open_hours?: Record<string, unknown>;
  /** The total number of reviews for the business */
  reviews_count?: number;
  /** The average rating given by customers */
  rating?: number;
  /** URL or identifier of the main image associated with the business */
  main_image?: string;
  /** Latitude coordinate of the business location */
  lat?: number;
  /** Longitude coordinate of the business location */
  lon?: number;
  /** List of services provided by the business */
  services_provided?: unknown[];
  /** Amenities offered by a hotel-type business */
  hotel_amenities?: unknown[];
  /** Star ratings for hotels */
  hotel_star_ratings?: string;
  /** A link or indication of whether the business has a website that can be visited */
  open_website?: string;
  /** The contact phone number for the business */
  phone_number?: string;
  /** Indicates whether the business has been permanently closed */
  permanently_closed?: boolean;
  /** A list of URLs pointing to photos and videos associated with the business */
  photos_and_videos?: unknown[];
  /** A list of related businesses that users frequently searched for alongside this business */
  people_also_search?: unknown[];
  /** A list of web search results related to the business, including external links and previews */
  web_results?: unknown[];
  /** A URL to an external reservation or booking platform for the business */
  reservation_link?: string;
  /** A list of community questions and their answers about the business */
  questions_answers?: unknown[];
  /** A list of the most prominent customer reviews for the business, including reviewer details and ratings */
  top_reviews?: unknown[];
  /** A list of short review snippets displayed for the business, each including the reviewer's name, image, and a text excerpt */
  reviews_snippets?: unknown[];
  /** A list of directory categories associated with the business, including the category name and count of businesses within each */
  directory_categories?: unknown[];
  /** A list of other business locations from the same chain or directory, with ratings, review counts, and category details */
  directory_locations?: unknown[];
  /** A list of popular visiting times for the business, broken down by day of the week and hour, with relative busyness percentages */
  popular_times?: unknown[];
  /** The Google Customer ID (CID) associated with the specific location of the business */
  cid_location?: string;
  /** Indicates whether the business owner has claimed and verified this Google Maps listing */
  is_claimed?: boolean;
  /** The Feature ID (FID) associated with the business location, used internally by Google Maps */
  fid_location?: string;
  /** The distribution of customer reviews broken down by star rating (1 through 5) */
  review_distribution?: Record<string, unknown>;
  /** A complete list of all business categories assigned to the business on Google Maps */
  all_categories?: unknown[];
  /** The ISO 3166-1 alpha-2 country code of the country where the business is located */
  country_code?: string;
  /** The Google Customer ID (CID) uniquely identifying the business on Google Maps */
  cid?: string;
  /** Indicates whether the business is temporarily closed */
  temporarily_closed?: boolean;
  /** Indexing metadata for the business category, including Google Category IDs and Knowledge Graph entity references */
  category_index?: Record<string, unknown>;
}

export type GoogleMapsFullInformationInput = GoogleMapsFullInformationCollectByUrlInput | GoogleMapsFullInformationDiscoverByLocationInput | GoogleMapsFullInformationDiscoverByPlaceIdInput | GoogleMapsFullInformationDiscoverByCidInput;
