// Generated from the Bright Data scraper catalog. Do not edit by hand.
// scraper: Youtube - Videos posts
// id:      gd_lk56epmy2i5g7lzu0k
// domain:  youtube.com

/** Input for `Youtube - Videos posts` via `collect_by_url`. */
export interface YoutubeVideosPostsCollectByUrlInput {
  url: string;
  discovery_input?: Record<string, unknown>;
  subscribers?: number;
  country?: string;
  transcription_language?: string;
}

/** Input for `Youtube - Videos posts` via `discover_by_keyword`. */
export interface YoutubeVideosPostsDiscoverByKeywordInput {
  keyword: string;
  num_of_posts?: string;
  start_date?: string;
  end_date?: string;
  country?: string;
  include_shorts?: boolean;
}

/** Input for `Youtube - Videos posts` via `discover_by_url`. */
export interface YoutubeVideosPostsDiscoverByUrlInput {
  url: string;
  num_of_posts?: number;
  start_date?: string;
  end_date?: string;
  order_by?: string;
  country?: string;
  time_period?: string;
  transcription_language?: string;
}

/** Input for `Youtube - Videos posts` via `discover_by_search_filters`. */
export interface YoutubeVideosPostsDiscoverBySearchFiltersInput {
  keyword_search: string;
  upload_date?: string;
  "type"?: string;
  duration?: string;
  features?: string;
  country?: string;
  sort_by?: string;
}

/** Input for `Youtube - Videos posts` via `discover_by_hashtag`. */
export interface YoutubeVideosPostsDiscoverByHashtagInput {
  hashtag: string;
  num_of_posts?: number;
  posts_to_not_include?: unknown[];
  start_date?: string;
  end_date?: string;
  country?: string;
}

/** Input for `Youtube - Videos posts` via `discover_by_explore`. */
export interface YoutubeVideosPostsDiscoverByExploreInput {
  url: string;
  all_tabs?: boolean;
  country?: string;
}

/** Input for `Youtube - Videos posts` via `discover_by_podcast_url`. */
export interface YoutubeVideosPostsDiscoverByPodcastUrlInput {
  url: string;
}

/** One row returned by `Youtube - Videos posts`. Fields are optional because a scrape
 *  can legitimately come back without them. */
export interface YoutubeVideosPostsOutput {
  /** The full YouTube watch URL of the collected video */
  url?: string;
  /** Title of the YouTube video */
  title?: string;
  /** The channel handle extracted from the channel's browse endpoint */
  youtuber?: string;
  /** MD5 hash of the youtuber field */
  youtuber_md5?: string;
  /** Direct streaming URL of the video file, extracted from YouTube's adaptive formats or decoded from signatureCipher */
  video_url?: string;
  /** Duration of the video in seconds */
  video_length?: number;
  /** Number of likes received by the video */
  likes?: number;
  /** Number of views the video has received */
  views?: number;
  /** Date when the video was published */
  date_posted?: string;
  /** Text description accompanying the video */
  description?: string;
  /** Number of comments on the video, as displayed by YouTube (includes both top-level comments and replies in YouTube's count) */
  num_comments?: number;
  /** Number of subscribers to the YouTube channel */
  subscribers?: number;
  /** Information about the music used in the video. Only present when YouTube's Content ID system has identified music in the video */
  music?: Record<string, unknown>;
  /** Unique identifier for the YouTube video */
  video_id?: string;
  /** URL-encoded URL of the YouTube channel, derived from the channel's canonical browse endpoint */
  channel_url?: string;
  /** URL of the preview image for the video */
  preview_image?: string;
  /** The unique short identifier of the video, identical to video_id, used across all YouTube video types including regular videos and Shorts */
  shortcode?: string;
  /** Indicates whether the channel is verified */
  verified?: boolean;
  /** The display name of the YouTube channel as shown on the video page */
  handle_name?: string;
  /** The URL of the avatar image of the YouTube channel */
  avatar_img_channel?: string;
  /** Indicates whether the video contains a paid content overlay as declared by YouTube */
  is_sponsored?: boolean;
  /** List of URLs of videos shown in the sidebar alongside the current video */
  related_videos?: unknown[];
  /** URL of the video's license as declared in YouTube's video metadata */
  license?: string;
  /** Resolution of the primary video stream format, derived from YouTube's streaming data */
  viewport_frames?: string;
  /** Current and optimal video resolution with frame rate, from YouTube's streaming format metadata */
  current_optimal_res?: string;
  /** Video and audio codec strings formatted as video codec and audio codec, extracted from YouTube's adaptive streaming formats */
  codecs?: string;
  /** Color primaries of the video stream, extracted from YouTube's adaptive format color info */
  color?: string;
  /** Quality identifier of the first adaptive streaming format as reported by YouTube */
  quality?: string;
  /** Human-readable video quality label as reported by YouTube */
  quality_label?: string;
  /** Type of YouTube content inferred from the URL structure. Possible values: post for standard video, short for YouTube Short, or N/A */
  post_type?: string;
  /** YouTube's internal channel ID, distinct from the channel handle */
  youtuber_id?: string;
  /** Full plain-text transcript of the video, compiled from YouTube's caption tracks. English captions are preferred, falls back to the first available language if English is unavailable */
  transcript?: string;
  /** Timestamped transcript segments from YouTube's caption tracks, each containing start time, end time, and duration in milliseconds, and the caption text */
  formatted_transcript?: unknown[];
  /** List of hashtags found in the video title or description, each with the hashtag text and its YouTube search link */
  hashtags?: unknown[];
  /** Tags of the video */
  tags?: unknown[];
  /** Videos shown as end-screen cards during the final seconds of the video, including timing in milliseconds and display style */
  next_recommended_videos?: unknown[];
  /** Videos recommended by YouTube in the sidebar alongside the current video */
  recommended_videos?: unknown[];
  /** List of caption and transcript languages available for this video on YouTube, including whether each track was auto-generated */
  transcript_language?: unknown[];
  /** List of chapter markers defined by the creator, each with a title, start time in milliseconds, and preview image */
  chapters?: unknown[];
  /** The language code requested by the caller for transcript retrieval, passed as an input parameter at collection time */
  transcription_language?: string;
  /** Whether the video is age-restricted, inferred from a non-OK playability status combined with an age-related reason from YouTube */
  is_age_restricted?: boolean;
  /** Plain-text percent-decoded version of the channel URL */
  channel_url_decoded?: string;
  /** YouTube's content category assigned to the video, from YouTube's predefined category taxonomy */
  category?: string;
  /** audio Tracks */
  audio_tracks?: unknown[];
  /** Indicates whether the video is designated as made for kids, inferred from the YouTube miniplayer playback mode */
  made_for_kids?: boolean;
  /** User-facing notification text shown inside the video player */
  player_notification_text?: string;
  /** Indicates whether the video has been labeled as AI-generated or significantly AI-altered, either by the creator or auto-detected by YouTube. */
  ai_content_label?: boolean;
  /** Livestream status of the video, equivalent to yt-dlp's live_status. One of "is_live", "was_live", or "not_live", parsed from YouTube's info string (e.g. "Streamed live 29 minutes ago") or defaulted... */
  live_status?: string;
  /** 10 Most relevant comments of the video */
  comments?: unknown[];
  discovery_input?: Record<string, unknown>;
  input?: unknown;
  warning?: string;
  error?: string;
}

export type YoutubeVideosPostsInput = YoutubeVideosPostsCollectByUrlInput | YoutubeVideosPostsDiscoverByKeywordInput | YoutubeVideosPostsDiscoverByUrlInput | YoutubeVideosPostsDiscoverBySearchFiltersInput | YoutubeVideosPostsDiscoverByHashtagInput | YoutubeVideosPostsDiscoverByExploreInput | YoutubeVideosPostsDiscoverByPodcastUrlInput;
