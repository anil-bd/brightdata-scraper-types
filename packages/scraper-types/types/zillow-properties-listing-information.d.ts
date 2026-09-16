// Generated from the Bright Data scraper catalog. Do not edit by hand.
// scraper: Zillow properties listing information
// id:      gd_lfqkr8wm13ixtbd8f5
// domain:  zillow.com

/** Input for `Zillow properties listing information` via `collect_by_url`. */
export interface ZillowPropertiesListingInformationCollectByUrlInput {
  url: string;
}

/** Input for `Zillow properties listing information` via `discover_by_url`. */
export interface ZillowPropertiesListingInformationDiscoverByUrlInput {
  url: string;
}

/** Input for `Zillow properties listing information` via `discover_by_input_filters`. */
export interface ZillowPropertiesListingInformationDiscoverByInputFiltersInput {
  location: string;
  listingCategory?: string;
  HomeType?: string;
  days_on_zillow?: string;
  exact_address?: boolean;
}

/** One row returned by `Zillow properties listing information`. Fields are optional because a scrape
 *  can legitimately come back without them. */
export interface ZillowPropertiesListingInformationOutput {
  /** A unique identifier for the property listing on Zillow */
  zpid?: number;
  /** The city in which the property is located */
  city?: string;
  /** The state in which the property is located */
  state?: string;
  /** The status of the home (e.g., for sale, sold) */
  homeStatus?: string;
  /** The full address of the property */
  address?: Record<string, unknown>;
  /** Indicates whether the listing is claimed by the current signed-in user (boolean: True/False */
  isListingClaimedByCurrentSignedInUser?: string;
  /** Indicates whether the current signed-in agent is responsible for the listing (boolean: True/False) */
  isCurrentSignedInAgentResponsible?: string;
  /** The number of bedrooms in the property */
  bedrooms?: number;
  /** The number of bathrooms in the property */
  bathrooms?: number;
  /** The price of the property */
  price?: number;
  /** The year in which the property was built */
  yearBuilt?: number;
  /** The street address of the property */
  streetAddress?: string;
  /** The ZIP code of the property */
  zipcode?: string;
  /** Indicates whether the current signed-in user is a verified owner (boolean: True/False) */
  isCurrentSignedInUserVerifiedOwner?: string;
  /** Indicates whether the claimed listing is verified by the current signed-in user (boolean: True/False) */
  isVerifiedClaimedByCurrentSignedInUser?: string;
  /** The source of the listing data */
  listingDataSource?: string;
  /** The longitude coordinate of the property */
  longitude?: number;
  /** The latitude coordinate of the property */
  latitude?: number;
  /** Indicates whether there is an issue with the geocoding of the property (Boolean: True/False) */
  hasBadGeocode?: boolean;
  /** URL for street view metadata using latitude and longitude */
  streetViewMetadataUrlMediaWallLatLong?: string;
  /** URL for street view metadata using the street address */
  streetViewMetadataUrlMediaWallAddress?: string;
  /** URL for the street view service */
  streetViewServiceUrl?: string;
  /** The total living area of the property */
  livingArea?: number;
  /** The type of the home */
  homeType?: string;
  /** The size of the lot */
  lotSize?: number;
  /** The numerical value of the lot area */
  lotAreaValue?: number;
  /** The units of measurement for the lot area */
  lotAreaUnits?: string;
  /** The numerical value of the living area */
  livingAreaValue?: number;
  /** The abbreviated units of measurement for the living area */
  livingAreaUnitsShort?: string;
  /** Indicates whether the address is undisclosed (boolean: True/False) */
  isUndisclosedAddress?: string;
  /** The Zillow estimate of the property's value */
  zestimate?: number;
  /** The Zillow estimate of the property's rental value */
  rentZestimate?: number;
  /** The currency in which the price and estimates are listed */
  currency?: string;
  /** Indicates whether the Zestimate is hidden (boolean: True/False) */
  hideZestimate?: string;
  /** The date on which the property was last sold */
  dateSoldString?: string;
  /** The tax-assessed value of the property */
  taxAssessedValue?: number;
  /** The year for which the tax assessment is provided */
  taxAssessedYear?: number;
  /** The country in which the property is located */
  country?: string;
  /** The property tax rate for the property */
  propertyTaxRate?: number;
  /** The number of photos associated with the property listing */
  photoCount?: number;
  /** Indicates whether the builder is a premier builder (boolean: True/False) */
  isPremierBuilder?: string;
  /** Indicates whether Zillow owns the property (boolean: True/False) */
  isZillowOwned?: string;
  /** The SSID (Service Set Identifier) associated with the property */
  ssid?: number;
  /** The URL to the Home Details Page (HDP) for the property */
  hdpUrl?: string;
  /** The count of views for property tours */
  tourViewCount?: number;
  /** Indicates whether there is a public video associated with the property (boolean: True/False) */
  hasPublicVideo?: boolean;
  /** The price at which the property was last sold */
  lastSoldPrice?: number;
  /** The units of measurement for the living area */
  livingAreaUnits?: string;
  /** Indicates whether there is an approved third-party virtual tour URL (boolean: True/False) */
  hasApprovedThirdPartyVirtualTourUrl?: boolean;
  /** URL for a medium-sized street view tile image using latitude and longitude */
  streetViewTileImageUrlMediumLatLong?: string;
  /** Indicates whether the property is non-owner-occupied (boolean: True/False) */
  isNonOwnerOccupied?: string;
  /** The Zestimate minus 30 days */
  zestimateMinus30?: string;
  /** The Rent Zestimate minus 30 days */
  restimateMinus30?: string;
  /** The lower percentile of the Zestimate range */
  zestimateLowPercent?: string;
  /** The higher percentile of the Zestimate range */
  zestimateHighPercent?: string;
  /** The lower percentile of the Rent Zestimate range */
  restimateLowPercent?: string;
  /** The higher percentile of the Rent Zestimate range */
  restimateHighPercent?: string;
  /** A textual description or details about the property */
  description?: string;
  /** The parcel identifier associated with the property */
  parcelId?: string;
  /** Information about the tax history of the property */
  taxHistory?: unknown[];
  /** Information about the price history of the property */
  priceHistory?: unknown[];
  /** array of ids (zpid) of all nearby properties */
  nearbyHomes?: unknown[];
  /** Information about schools near the property */
  schools?: unknown[];
  /** URL for searching the city associated with the property */
  totalCount?: Record<string, unknown>;
  /** Information about mortgage rates */
  mortgageRates?: Record<string, unknown>;
  /** Indicates whether instant offer is enabled for the property (boolean: True/False) */
  isInstantOfferEnabled?: string;
  /** Information about the Zillow Offer Market */
  zillowOfferMarket?: string;
  /** Indicates whether the rental listing is off-market(boolean: True/False) */
  isRentalListingOffMarket?: string;
  /** Information about nearby cities */
  nearbyCities?: unknown[];
  /** Information about nearby neighborhoods */
  nearbyNeighborhoods?: unknown[];
  /** Information about nearby ZIP codes */
  nearbyZipcodes?: unknown[];
  /** An abbreviated version of the property address */
  abbreviatedAddress?: string;
  /** The number of days the property has been listed on Zillow */
  daysOnZillow?: number;
  /** The type of rental applications accepted for the property */
  rentalApplicationsAcceptedType?: string;
  /** The name of the brokerage associated with the property */
  brokerageName?: string;
  /** The dimension or type of property */
  propertyTypeDimension?: string;
  /** The dimension or type of the Home Details Page */
  hdpTypeDimension?: string;
  /** The time zone associated with the property */
  timeZone?: string;
  /** Information about tour eligibility */
  tourEligibility?: Record<string, unknown>;
  /** URL for a virtual tour of the property */
  virtualTourUrl?: string;
  /** Indicates whether self-tour is enabled for the property (boolean: True/False) */
  selfTour?: Record<string, unknown>;
  /** Information about photos associated with the property */
  photos?: unknown[];
  /** The history of Zestimate values for the property */
  zestimate_history?: unknown[];
  /** Information about sewer utilities */
  "resoFacts:sewer"?: string;
  /** Information about water utilities */
  "resoFacts:waterSource"?: string;
  /** General information about utilities. */
  utilities?: unknown[];
  /** The URL or link to the property listing */
  url?: string;
  /** FIPS codes */
  countyFIPS?: string;
  /** county id */
  countyID?: string;
  /** The ate of sold */
  dateSold?: string;
  /** Indicates whether the property is a featured listing */
  isFeatured?: boolean;
  /** Housing connector */
  isHousingConnector?: boolean;
  /** Is rentals lead cap met */
  isRentalsLeadCapMet?: boolean;
  /** The dimension or type of the property listing */
  listingTypeDimension?: string;
  /** Posting contact */
  postingContact?: unknown[];
  /** Home valuation */
  homeValuation?: unknown[];
  /** Indicates if the rental listing is off-market */
  isOffMarket?: boolean;
  resofacts_sewer?: string;
  resofacts_water_source?: string;
  citySearchUrl?: Record<string, unknown>;
  county?: string;
  /** Whether the listing is showcased or not */
  is_showcased?: boolean;
  /** Description of the property interior */
  interior?: Record<string, unknown>;
  /** Listing meta details: days posted, number of views, etc... */
  overview?: Record<string, unknown>;
  /** Whether the listing is managed by management company */
  is_listed_by_management_company?: boolean;
  /** The phone number of the management company */
  management_company_phone_number?: string;
  listing_provided_by?: Record<string, unknown>;
  /** HOA data from property facts & features */
  hoa_details?: Record<string, unknown>;
  /** Financial data from property facts & features */
  financial?: unknown[];
  /** All interior information of the property */
  interior_full?: unknown[];
  /** All property information from property section */
  property?: unknown[];
  /** All construction information of the property */
  construction?: unknown[];
  tag?: string;
  /** Contingent listing type */
  contingent_listing_type?: string;
  /** Unit number of apartment in apartment complex */
  unit_number?: string;
  unit_amenities?: unknown[];
  open_house_details?: unknown[];
  /** Community details of the property */
  community_details?: unknown[];
  /** MLS ID of the property */
  mls_id?: string;
  base_rent?: number;
  sqft?: number;
  availability_date?: string;
  special_offer?: string;
  originating_mls?: string;
  tags?: unknown[];
  /** The getting around metrics scores */
  getting_around_scores?: Record<string, unknown>;
  days_on_zillow?: number;
  /** Getting around scores */
  getting_around?: Record<string, unknown>;
  other?: unknown[];
  financial_listing_details?: unknown[];
  /** The publish external url */
  publish_url?: string;
  /** The climate risks */
  climate_risks?: Record<string, unknown>;
  /** Number of contacts */
  num_of_contacts?: number;
  /** Number of applications */
  num_of_applications?: number;
  /** Listing offers a 3D/virtual tour on Zillow */
  has_3d_tour?: boolean;
  /** The property's payment breakdown */
  payment_breakdown?: unknown[];
  /** Ratio of lastSoldPrice to price */
  sold_to_list_ratio?: number;
  /** Ratio of lastSoldPrice to zestimate */
  sold_to_zestimate_ratio?: number;
  /** Flag indicating whether there are at least two transactions in priceHistory within the last 365 days */
  is_flipped_within_12_months?: boolean;
  input?: unknown;
  warning?: string;
  error?: string;
  warning_code?: string;
}

export type ZillowPropertiesListingInformationInput = ZillowPropertiesListingInformationCollectByUrlInput | ZillowPropertiesListingInformationDiscoverByUrlInput | ZillowPropertiesListingInformationDiscoverByInputFiltersInput;
