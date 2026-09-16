// Generated from the Bright Data scraper catalog. Do not edit by hand.
// scraper: Crunchbase companies information
// id:      gd_l1vijqt9jfj7olije
// domain:  crunchbase.com

/** Input for `Crunchbase companies information` via `collect_by_url`. */
export interface CrunchbaseCompaniesInformationCollectByUrlInput {
  url: string;
}

/** Input for `Crunchbase companies information` via `discover_by_keyword`. */
export interface CrunchbaseCompaniesInformationDiscoverByKeywordInput {
  keyword: string;
}

/** One row returned by `Crunchbase companies information`. Fields are optional because a scrape
 *  can legitimately come back without them. */
export interface CrunchbaseCompaniesInformationOutput {
  /** The name of the company */
  name?: string;
  /** The URL or web address associated with the company */
  url?: string;
  /** A unique identifier for each company in Crunchbase */
  id?: string;
  /** Crunchbase rank assigned to the company */
  cb_rank?: number;
  /** The continent where the company's headquarters is located */
  region?: string;
  /** Overview or description of the company */
  about?: string;
  /** Industries associated with the company */
  industries?: unknown[];
  /** The current operating status of the company */
  operating_status?: string;
  /** The type of company (eg, private, public) */
  company_type?: string;
  /** URLs of social media profiles associated with the company */
  social_media_links?: unknown[];
  /** The date when the company was founded */
  founded_date?: string;
  /** The number of employees in the company */
  num_employees?: string;
  /** The country code where the company is located */
  country_code?: string;
  /** The official website of the company */
  website?: string;
  /** Contact email address for the company */
  contact_email?: string;
  /** Contact phone number for the company */
  contact_phone?: string;
  /** Indicates if the company is featured on a list */
  featured_list?: unknown[];
  /** Detailed description of the company */
  full_description?: string;
  /** Type of data entry */
  "type"?: string;
  /** Universally unique identifier for the company */
  uuid?: string;
  /** Number of active technologies used by the company */
  active_tech_count?: number;
  /** Number of technologies the company is built with */
  builtwith_num_technologies_used?: number;
  /** Technologies used by the company */
  builtwith_tech?: unknown[];
  /** Status of the company regarding Initial Public Offering (IPO) */
  ipo_status?: string;
  /** List of companies similar to the specified company */
  similar_companies?: unknown[];
  /** Image or logo associated with the company */
  image?: string;
  /** Number of monthly website visits */
  monthly_visits?: number;
  /** Latest monthly visits data from SEMrush */
  semrush_visits_latest_month?: number;
  /** Last update date for SEMrush data */
  semrush_last_updated?: string;
  /** Growth in monthly visits */
  monthly_visits_growth?: number;
  /** Percentage growth in SEMrush visits */
  semrush_visits_mom_pct?: number;
  /** Total number of contacts associated with the company */
  num_contacts?: number;
  /** Number of LinkedIn contacts */
  num_contacts_linkedin?: number;
  /** Number of employee profiles associated with the company */
  num_employee_profiles?: number;
  /** Total number of active products */
  total_active_products?: number;
  /** Number of news articles related to the company */
  num_news?: number;
  /** Information about funding rounds */
  funding_rounds?: Record<string, unknown>;
  /** Last update date for Bombora data */
  bombora_last_updated?: string;
  /** Number of investors in the company */
  num_investors?: number;
  /** Legal name of the company */
  legal_name?: string;
  /** Number of appearances in events */
  num_event_appearances?: number;
  /** Total number of acquisitions by the company */
  num_acquisitions?: number;
  /** Total number of investments made by the company */
  num_investments?: number;
  /** Number of advisory positions associated with the company */
  num_advisor_positions?: number;
  /** Information about company exits */
  num_exits?: number;
  /** Number of investments led by the company */
  num_investments_lead?: number;
  /** Total number of sub-organizations */
  num_sub_organizations?: number;
  /** Total number of company alumni */
  num_alumni?: number;
  /** Number of diversity spotlight investments */
  num_diversity_spotlight_investments?: number;
  /** Total number of company alumni */
  num_founder_alumni?: number;
  /** Total number of funds */
  num_funds?: number;
  /** Stock symbol associated with the company */
  stock_symbol?: string;
  /** Location information for the company */
  location?: unknown[];
  /** Physical address of the company */
  address?: string;
  /** Contact information for the company */
  contacts?: unknown[];
  /** Number of current employees */
  current_employees?: unknown[];
  /** List of locations according to SEMrush */
  semrush_location_list?: unknown[];
  /** Products listed by Siftery */
  siftery_products?: unknown[];
  /** List of funding rounds */
  funding_rounds_list?: unknown[];
  /** Bombora information */
  bombora?: unknown[];
  /** List of investors in the company */
  investors?: unknown[];
  /** Number of times the company has appeared in events */
  event_appearances?: unknown[];
  /** Information about company acquisitions */
  acquisitions?: unknown[];
  /** Total funds raised by the company */
  funds_raised?: unknown[];
  /** Information about company investments */
  investments?: unknown[];
  /** Apptopia data */
  apptopia?: unknown[];
  /** List of current advisors for the company */
  current_advisors?: unknown[];
  /** Information about company exits */
  exits?: unknown[];
  /** Leadership hiring information */
  leadership_hire?: unknown[];
  /** Sub-organizations associated with the company */
  sub_organizations?: unknown[];
  /** Information about company alumni */
  alumni?: unknown[];
  /** Information about diversity investments */
  diversity_investments?: unknown[];
  /** List of funds associated with the company */
  funds_list?: unknown[];
  /** Layoff information */
  layoff?: unknown[];
  /** News related to the company */
  news?: unknown[];
  /** IT spending data from Aberdeen */
  aberdeen_it_spend?: Record<string, unknown>;
  /** Regions where the company has headquarters */
  headquarters_regions?: unknown[];
  /** Highlights of financial data */
  financials_highlights?: Record<string, unknown>;
  /** Information related to Initial Public Offering (IPO) */
  ipo_fields?: Record<string, unknown>;
  /** IPQwery data */
  ipqwery?: Record<string, unknown>;
  /** Highlights of the company overview */
  overview_highlights?: Record<string, unknown>;
  /** Highlights of people associated with the company */
  people_highlights?: Record<string, unknown>;
  /** Highlights of technologies used by the company */
  technology_highlights?: Record<string, unknown>;
  /** Information about the founders of the company */
  founders?: unknown[];
  /** Total funds raised by the company */
  funds_total?: Record<string, unknown>;
  /** Information about the acquiring entity */
  acquired_by?: Record<string, unknown>;
  /** Type of investor */
  investor_type?: string;
  /** Stage of investment */
  investment_stage?: string;
  /** Information about being a sub-organization of another entity */
  sub_organization_of?: string;
  /** Total downloads according to Apptopia */
  apptopia_total_downloads?: number;
  /** Month-over-month percentage change in total downloads according to Apptopia */
  apptopia_total_downloads_mom_pct?: string;
  /** A unique identifier for each company in Crunchbase */
  company_id?: string;
  /** The continent where the company's headquarters is located */
  hq_continent?: string;
  /** Overview or description of the company */
  company_overview?: string;
  /** URLs of social media profiles associated with the company */
  socila_media_urls?: unknown[];
  /** Contact email address for the company */
  email_address?: string;
  /** Contact phone number for the company */
  phone_number?: string;
  /** Number of technologies the company is built with */
  built_with_num_technologies_used?: number;
  /** Technologies used by the company */
  built_with_tech?: unknown[];
  /** Total number of contacts associated with the company */
  number_of_contacts?: number;
  /** Number of LinkedIn contacts */
  number_of_linkedin_contacts?: number;
  /** Number of employee profiles associated with the company */
  number_of_employee_profiles?: number;
  /** Number of news articles related to the company */
  number_of_news?: number;
  /** Number of investors in the company */
  number_of_investors?: number;
  /** Number of appearances in events */
  number_of_event_appearances?: number;
  /** Total number of acquisitions by the company */
  number_of_acquisitions?: number;
  /** Total number of investments made by the company */
  number_of_investments?: number;
  /** Number of advisory positions associated with the company */
  number_of_advisor_positions?: number;
  /** Information about company exits */
  number_of_exits?: number;
  /** Number of investments led by the company */
  number_of_investments_lead?: number;
  /** Total number of sub-organizations */
  number_of_sub_organizations?: number;
  /** Total number of company alumni */
  number_of_alumni?: number;
  /** Number of diversity spotlight investments */
  number_of_diversity_spotlight_investments?: number;
  /** Total number of company alumni */
  number_of_founder_alumni?: number;
  /** Total number of funds */
  number_of_funds?: number;
  /** Website traffic and engagement metrics sourced from SEMrush */
  web_traffic_by_semrush?: Record<string, unknown>;
  /** List of products and services offered by the company, including their names and descriptions */
  products_and_services?: unknown[];
  /** Overall growth score derived from user, revenue, and engagement metrics */
  growth_score?: number;
  /** Change in growth score over the last quarter */
  growth_trend?: string;
  /** Engagement score based on interest signals and user activity */
  heat_score?: number;
  /** Change in heat score over the last quarter */
  heat_trend?: string;
  /** Whether the company is currently trending in its sector */
  company_trending?: boolean;
  /** Primary industry the company operates in */
  company_industry?: string;
  /** Level of company activity (e.g., High, Medium, Low) */
  company_activity_level?: string;
  /** New top-level field containing a full breakdown of all funding rounds for a company */
  funding_rounds_detailed?: unknown[];
}

export type CrunchbaseCompaniesInformationInput = CrunchbaseCompaniesInformationCollectByUrlInput | CrunchbaseCompaniesInformationDiscoverByKeywordInput;
