// Generated from the Bright Data scraper catalog. Do not edit by hand.
// scraper: Amazon Reviews
// id:      gd_le8e811kzy4ggddlq
// domain:  amazon.com

/** Input for `Amazon Reviews` via `collect_by_url`. */
export interface AmazonReviewsCollectByUrlInput {
  url: string;
  reviews_to_not_include?: unknown[];
  max_reviews?: number;
  variation_specific?: boolean;
}

/** One row returned by `Amazon Reviews`. Fields are optional because a scrape
 *  can legitimately come back without them. */
export interface AmazonReviewsOutput {
  /** The URL or link to the review on Amazon */
  url?: string;
  /** The name of the product */
  product_name?: string;
  /** The average rating of the product */
  product_rating?: number;
  /** Object representing the breakdown of product ratings */
  product_rating_object?: Record<string, unknown>;
  /** The maximum product rating */
  product_rating_max?: number;
  /** The rating given by the reviewer for the product */
  rating?: number;
  /** The name of the person who wrote the review */
  author_name?: string;
  /** The Amazon Standard Identification Number of the product */
  asin?: string;
  /** The total count of ratings for the product */
  product_rating_count?: number;
  /** The header or title of the review */
  review_header?: string;
  /** The unique identifier for each review */
  review_id?: string;
  /** The textual content of the review */
  review_text?: string;
  /** The unique identifier for the review author */
  author_id?: string;
  /** Link to the author's profile or page */
  author_link?: string;
  /** Any badge or recognition associated with the review author */
  badge?: string;
  /** The brand of the product being reviewed */
  brand?: string;
  /** The date when the review was posted */
  review_posted_date?: string;
  /** The country associated with the reviewer */
  review_country?: string;
  /** Any images attached to the review */
  review_images?: unknown[];
  /** The count of users who found the review helpful */
  helpful_count?: number;
  /** is_amazon_vine */
  is_amazon_vine?: boolean;
  /** is_verified */
  is_verified?: boolean;
  /** variant_asin */
  variant_asin?: string;
  /** variant_name */
  variant_name?: string;
  /** videos */
  videos?: unknown[];
  /** The product's categories */
  categories?: unknown[];
  /** The product's department */
  department?: string;
}

export type AmazonReviewsInput = AmazonReviewsCollectByUrlInput;
