// Generated from the Bright Data scraper catalog. Do not edit by hand.

import type { AmazonProductsOutput, AmazonProductsInput } from './types/amazon-products';
import type { AmazonReviewsOutput, AmazonReviewsInput } from './types/amazon-reviews';
import type { LinkedinPeopleProfilesOutput, LinkedinPeopleProfilesInput } from './types/linkedin-people-profiles';
import type { LinkedinCompanyInformationOutput, LinkedinCompanyInformationInput } from './types/linkedin-company-information';
import type { InstagramProfilesOutput, InstagramProfilesInput } from './types/instagram-profiles';
import type { TiktokPostsOutput, TiktokPostsInput } from './types/tiktok-posts';
import type { YoutubeVideosPostsOutput, YoutubeVideosPostsInput } from './types/youtube-videos-posts';
import type { ZillowPropertiesListingInformationOutput, ZillowPropertiesListingInformationInput } from './types/zillow-properties-listing-information';
import type { GoogleMapsFullInformationOutput, GoogleMapsFullInformationInput } from './types/google-maps-full-information';
import type { GithubRepositoryOutput, GithubRepositoryInput } from './types/github-repository';
import type { NpmjsOutput, NpmjsInput } from './types/npmjs';
import type { CrunchbaseCompaniesInformationOutput, CrunchbaseCompaniesInformationInput } from './types/crunchbase-companies-information';

export type { AmazonProductsOutput, AmazonProductsInput };
export type { AmazonReviewsOutput, AmazonReviewsInput };
export type { LinkedinPeopleProfilesOutput, LinkedinPeopleProfilesInput };
export type { LinkedinCompanyInformationOutput, LinkedinCompanyInformationInput };
export type { InstagramProfilesOutput, InstagramProfilesInput };
export type { TiktokPostsOutput, TiktokPostsInput };
export type { YoutubeVideosPostsOutput, YoutubeVideosPostsInput };
export type { ZillowPropertiesListingInformationOutput, ZillowPropertiesListingInformationInput };
export type { GoogleMapsFullInformationOutput, GoogleMapsFullInformationInput };
export type { GithubRepositoryOutput, GithubRepositoryInput };
export type { NpmjsOutput, NpmjsInput };
export type { CrunchbaseCompaniesInformationOutput, CrunchbaseCompaniesInformationInput };

/** Every scraper in this package, by its short name. */
export type ScraperName =
  | 'amazon-products'
  | 'amazon-reviews'
  | 'linkedin-people-profiles'
  | 'linkedin-company-information'
  | 'instagram-profiles'
  | 'tiktok-posts'
  | 'youtube-videos-posts'
  | 'zillow-properties-listing-information'
  | 'google-maps-full-information'
  | 'github-repository'
  | 'npmjs'
  | 'crunchbase-companies-information';

export interface ScraperMeta {
  /** The catalog id you pass to the Bright Data API. */
  readonly id: string;
  readonly name: ScraperName;
  /** Human readable name as it appears in the catalog. */
  readonly title: string;
  /** Canonical host this scraper targets. */
  readonly domain: string;
  /** Collection methods this scraper supports. */
  readonly types: readonly string[];
}

/** Row shape returned by a scraper. */
export type ScraperOutput<N extends ScraperName> = OutputByName[N];

/** Accepted input for a scraper. */
export type ScraperInput<N extends ScraperName> = InputByName[N];

interface OutputByName {
  'amazon-products': AmazonProductsOutput;
  'amazon-reviews': AmazonReviewsOutput;
  'linkedin-people-profiles': LinkedinPeopleProfilesOutput;
  'linkedin-company-information': LinkedinCompanyInformationOutput;
  'instagram-profiles': InstagramProfilesOutput;
  'tiktok-posts': TiktokPostsOutput;
  'youtube-videos-posts': YoutubeVideosPostsOutput;
  'zillow-properties-listing-information': ZillowPropertiesListingInformationOutput;
  'google-maps-full-information': GoogleMapsFullInformationOutput;
  'github-repository': GithubRepositoryOutput;
  'npmjs': NpmjsOutput;
  'crunchbase-companies-information': CrunchbaseCompaniesInformationOutput;
}

interface InputByName {
  'amazon-products': AmazonProductsInput;
  'amazon-reviews': AmazonReviewsInput;
  'linkedin-people-profiles': LinkedinPeopleProfilesInput;
  'linkedin-company-information': LinkedinCompanyInformationInput;
  'instagram-profiles': InstagramProfilesInput;
  'tiktok-posts': TiktokPostsInput;
  'youtube-videos-posts': YoutubeVideosPostsInput;
  'zillow-properties-listing-information': ZillowPropertiesListingInformationInput;
  'google-maps-full-information': GoogleMapsFullInformationInput;
  'github-repository': GithubRepositoryInput;
  'npmjs': NpmjsInput;
  'crunchbase-companies-information': CrunchbaseCompaniesInformationInput;
}

export declare const SCRAPERS: { readonly [N in ScraperName]: ScraperMeta };

/** Scrapers that target a host. Accepts 'www.' prefixes and full URLs. */
export declare function byDomain(hostOrUrl: string): ScraperMeta[];
