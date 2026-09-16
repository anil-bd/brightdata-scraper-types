// Generated from the Bright Data scraper catalog. Do not edit by hand.
// scraper: Amazon products
// id:      gd_l7q7dkf244hwjntr0
// domain:  amazon.com

/** Input for `Amazon products` via `collect_by_url`. */
export interface AmazonProductsCollectByUrlInput {
  url: string;
  asin?: string;
  origin_url?: string;
  zipcode?: string;
  language?: string;
  all_variations?: boolean;
}

/** Input for `Amazon products` via `discover_by_keyword`. */
export interface AmazonProductsDiscoverByKeywordInput {
  keyword: string;
  zipcode?: string;
  all_variations?: boolean;
}

/** Input for `Amazon products` via `discover_by_category_url`. */
export interface AmazonProductsDiscoverByCategoryUrlInput {
  url: string;
  sort_by?: string;
  zipcode?: string;
  all_variation?: boolean;
}

/** Input for `Amazon products` via `discover_by_best_sellers_url`. */
export interface AmazonProductsDiscoverByBestSellersUrlInput {
  category_url: string;
  collect_child_categories?: boolean;
  zipcode?: string;
  all_variations?: boolean;
}

/** Input for `Amazon products` via `discover_by_upc`. */
export interface AmazonProductsDiscoverByUpcInput {
  upc?: string;
  zipcode?: string;
  all_variations?: boolean;
}

/** One row returned by `Amazon products`. Fields are optional because a scrape
 *  can legitimately come back without them. */
export interface AmazonProductsOutput {
  /** Product title */
  title?: string;
  /** Seller name */
  seller_name?: string;
  /** Product brand */
  brand?: string;
  /** A brief description of the product */
  description?: string;
  /** Initial price */
  initial_price?: number;
  /** Currency of the product */
  currency?: string;
  /** Product availability */
  availability?: string;
  /** Number of reviews */
  reviews_count?: number;
  /** Product categories */
  categories?: unknown[];
  /** Parent ASIN of the product */
  parent_asin?: string;
  /** Unique identifier for each product */
  asin?: string;
  /** Seller in the buy box */
  buybox_seller?: string;
  /** Number of sellers for the product */
  number_of_sellers?: number;
  /** Best sellers rank in the general category */
  root_bs_rank?: number;
  /** ISBN-10 identifier for books */
  ISBN10?: string;
  /** Number of answered questions */
  answered_questions?: number;
  /** URL of the product domain */
  domain?: string;
  /** Number of images */
  images_count?: number;
  /** URL that links directly to the product */
  url?: string;
  /** Number of videos */
  video_count?: number;
  /** URL that links directly to the product image */
  image_url?: string;
  /** Weight of the product */
  item_weight?: string;
  /** Product rating */
  rating?: number;
  /** Dimensions of the product */
  product_dimensions?: string;
  /** Unique identifier for each seller */
  seller_id?: string;
  /** URL that links directly to the product image */
  image?: string;
  /** Date when the product first became available */
  date_first_available?: string;
  /** Product discount information */
  discount?: string;
  /** Model number of the product */
  model_number?: string;
  /** Manufacturer of the product */
  manufacturer?: string;
  /** Department to which the product belongs */
  department?: string;
  /** Boolean indicating the presence of additional content */
  plus_content?: boolean;
  /** Universal Product Code */
  upc?: string;
  /** Boolean indicating the presence of videos */
  video?: boolean;
  /** Top review for the product */
  top_review?: string;
  /** Highest value of the final price when it is a range */
  final_price_high?: number;
  /** Final price of the product */
  final_price?: number;
  /** Details about the same product in different variations */
  variations?: unknown[];
  /** Delivery-related information */
  delivery?: unknown[];
  /** Product features */
  features?: unknown[];
  /** Books format-related information */
  format?: unknown[];
  /** Product price details */
  buybox_prices?: Record<string, unknown>;
  /** Input ASIN (currently inactive) */
  input_asin?: string;
  /** Ingredients of the product, relevant mostly for food products */
  ingredients?: string;
  /** Source page URL used to extract this record */
  origin_url?: string;
  /** Units bought in the past month (as shown by Amazon) */
  bought_past_month?: number;
  /** Indication if the product is still available */
  is_available?: boolean;
  /** best seller root category */
  root_bs_category?: string;
  /** best seller category */
  bs_category?: string;
  /** best seller rank in the specific category */
  bs_rank?: number;
  /** product badge. for example: #1 Best Seller or Amazons Choice */
  badge?: string;
  /** Best Sellers rank entries by subcategory */
  subcategory_rank?: unknown[];
  /** Specifies if the product is amazons choice */
  amazon_choice?: boolean;
  /** URLs of the product images */
  images?: unknown[];
  /** Full product details */
  product_details?: unknown[];
  /** Breakdown of list/typical pricing and deal status */
  prices_breakdown?: Record<string, unknown>;
  /** Country of origin of the product */
  country_of_origin?: string;
  /** Brand-provided promotional media shown on the page */
  from_the_brand?: unknown[];
  /** Media embedded in the product description section */
  product_description?: unknown[];
  /** Seller storefront/profile URL on Amazon */
  seller_url?: string;
  /** customer_says */
  customer_says?: string;
  /** Sustainability badges/certifications with references */
  sustainability_features?: unknown[];
  /** Whether the product shows the Climate Pledge Friendly badge */
  climate_pledge_friendly?: boolean;
  /** URLs of the products videos */
  videos?: unknown[];
  /** Offers from other sellers for the same product */
  other_sellers_prices?: unknown[];
  /** Direct media URL */
  downloadable_videos?: unknown[];
  /** The Editorial Reviews of the book */
  editorial_reviews?: unknown[];
  /** About the author information */
  about_the_author?: string;
  /** ZIP/postal code used for delivery and availability estimates */
  zipcode?: string;
  /** coupon */
  coupon?: string;
  /** sponsored */
  sponsered?: boolean;
  /** The products store URL */
  store_url?: string;
  /** Where the item ships from */
  ships_from?: string;
  /** City related to shipping or seller/location context */
  city?: string;
  /** Amazons Customers say summary extracted from reviews */
  customers_say?: Record<string, unknown>;
  /** Maximum quantity allowed to add to cart */
  max_quantity_available?: number;
  /** Variations and their possible values */
  variations_values?: unknown[];
  /** Language of the product page/content */
  language?: string;
  /** Return policy text shown on the product page */
  return_policy?: string;
  /** Price information when the Buy Box is unavailable/inactive */
  inactive_buy_box?: Record<string, unknown>;
  /** The rating of the buy box seller */
  buybox_seller_rating?: number;
  /** Is it premium brand */
  premium_brand?: boolean;
  /** Does it have amazon prime delivery */
  amazon_prime?: boolean;
  /** coupon description */
  coupon_description?: string;
  /** all badges */
  all_badges?: unknown[];
  /** Amazon Sponsored flag */
  sponsored?: boolean;
  /** Current variant attributes as name/value pairs */
  variant_attributes?: unknown[];
  /** Safety Information */
  safety_information?: string;
  /** Best Sellers link entries by subcategory */
  subcategory_link?: unknown[];
  /** Indicates whether the badge is present */
  is_frequently_returned_item_badge?: boolean;
  /** The text shown inside the warning box */
  frequently_returned_item_message?: string;
  /** Indicates whether customers usually keep this item */
  is_customers_usually_keep?: boolean;
  /** Title of the badge */
  title_badge?: string;
  /** review_images */
  review_images?: unknown[];
  /** review_videos */
  review_videos?: unknown[];
  /** Units bought in the past month (as displayed by Amazon), in text format. */
  bought_past_month_text?: string;
  /** Indicates whether the product is tagged as high price. */
  is_high_price?: boolean;
  /** Captures the supplementary marketing/highlight text that Amazon renders directly after the product title on the product page */
  title_highlight?: string;
  /** The actual product title as defined by the seller/brand, excluding any Amazon-rendered highlight text that may appear next to/after it on the page */
  title_clean?: string;
  /** Structured breakdown of the "Customers say" section */
  customers_say_topics?: unknown[];
  /** Product brand URL */
  brand_url?: string;
  input?: unknown;
  warning?: string;
  warning_code?: string;
  error?: string;
  /** input pdp */
  all_variation?: boolean;
  /** all_variations */
  all_variations?: boolean;
}

export type AmazonProductsInput = AmazonProductsCollectByUrlInput | AmazonProductsDiscoverByKeywordInput | AmazonProductsDiscoverByCategoryUrlInput | AmazonProductsDiscoverByBestSellersUrlInput | AmazonProductsDiscoverByUpcInput;
