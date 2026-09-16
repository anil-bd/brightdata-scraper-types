// Generated from the Bright Data scraper catalog. Do not edit by hand.
'use strict';

const SCRAPERS = {
  'amazon-products': {"id": "gd_l7q7dkf244hwjntr0", "name": "amazon-products", "title": "Amazon products", "domain": "amazon.com", "types": ["collect_by_url", "discover_by_keyword", "discover_by_category_url", "discover_by_best_sellers_url", "discover_by_upc"]},
  'amazon-reviews': {"id": "gd_le8e811kzy4ggddlq", "name": "amazon-reviews", "title": "Amazon Reviews", "domain": "amazon.com", "types": ["collect_by_url"]},
  'linkedin-people-profiles': {"id": "gd_l1viktl72bvl7bjuj0", "name": "linkedin-people-profiles", "title": "LinkedIn people profiles", "domain": "linkedin.com", "types": ["collect_by_url"]},
  'linkedin-company-information': {"id": "gd_l1vikfnt1wgvvqz95w", "name": "linkedin-company-information", "title": "LinkedIn company information", "domain": "linkedin.com", "types": ["collect_by_url"]},
  'instagram-profiles': {"id": "gd_l1vikfch901nx3by4", "name": "instagram-profiles", "title": "Instagram - Profiles", "domain": "instagram.com", "types": ["collect_by_url", "discover_by_user_name"]},
  'tiktok-posts': {"id": "gd_lu702nij2f790tmv9h", "name": "tiktok-posts", "title": "TikTok - Posts", "domain": "tiktok.com", "types": ["collect_by_url", "discover_by_profile_url", "discover_by_keyword", "discover_by_url"]},
  'youtube-videos-posts': {"id": "gd_lk56epmy2i5g7lzu0k", "name": "youtube-videos-posts", "title": "Youtube - Videos posts", "domain": "youtube.com", "types": ["collect_by_url", "discover_by_keyword", "discover_by_url", "discover_by_search_filters", "discover_by_hashtag", "discover_by_explore", "discover_by_podcast_url"]},
  'zillow-properties-listing-information': {"id": "gd_lfqkr8wm13ixtbd8f5", "name": "zillow-properties-listing-information", "title": "Zillow properties listing information", "domain": "zillow.com", "types": ["collect_by_url", "discover_by_url", "discover_by_input_filters"]},
  'google-maps-full-information': {"id": "gd_m8ebnr0q2qlklc02fz", "name": "google-maps-full-information", "title": "Google Maps full information", "domain": "google.com", "types": ["collect_by_url", "discover_by_location", "discover_by_place_id", "discover_by_cid"]},
  'github-repository': {"id": "gd_lyrexgxc24b3d4imjt", "name": "github-repository", "title": "Github repository", "domain": "github.com", "types": ["collect_by_url", "discover_by_url", "discover_by_search_url"]},
  'npmjs': {"id": "gd_mk57m0301khq4jmsul", "name": "npmjs", "title": "npmjs", "domain": "npmjs.com", "types": ["collect_by_url"]},
  'crunchbase-companies-information': {"id": "gd_l1vijqt9jfj7olije", "name": "crunchbase-companies-information", "title": "Crunchbase companies information", "domain": "crunchbase.com", "types": ["collect_by_url", "discover_by_keyword"]},
};

function canon(hostOrUrl) {
  let h = String(hostOrUrl || '').trim().toLowerCase();
  h = h.replace(/^https?:\/\//, '').split('/')[0].split(':')[0];
  return h.replace(/^www\./, '');
}

function byDomain(hostOrUrl) {
  const host = canon(hostOrUrl);
  return Object.values(SCRAPERS).filter((s) => s.domain === host);
}

module.exports = { SCRAPERS, byDomain };
