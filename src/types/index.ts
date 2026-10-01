export type SupportedPlatformId =
  | 'youtube'
  | 'youtube-shorts'
  | 'instagram'
  | 'instagram-reels'
  | 'tiktok'
  | 'facebook'
  | 'twitter'
  | 'pinterest'
  | 'reddit'
  | 'snapchat'
  | 'linkedin'
  | 'threads'
  | 'generic';

export type MediaType = 'video' | 'reel' | 'shorts' | 'image' | 'carousel' | 'audio' | 'gif' | 'post';

export interface QualityOption {
  id: string;
  label: string; // e.g. "1080p Full HD", "720p HD", "480p SD", "360p", "Audio Only (320kbps)", "Thumbnail HD"
  quality: 'original' | '1080p' | '720p' | '480p' | '360p' | 'audio' | 'image' | 'thumbnail';
  format: 'mp4' | 'mp3' | 'jpg' | 'png' | 'webm';
  fileSize?: string;
  bitrate?: string;
  downloadUrl: string;
  directUrl?: string;
  isAvailable: boolean;
  unavailableReason?: string;
  hasAudio: boolean;
  resolution?: string;
}

export interface MediaAnalysisResult {
  id: string;
  platform: SupportedPlatformId;
  platformName: string;
  platformIcon: string;
  originalUrl: string;
  title: string;
  author: string;
  authorAvatar?: string;
  authorUrl?: string;
  thumbnailUrl: string;
  duration?: string;
  durationSeconds?: number;
  mediaType: MediaType;
  publishedAt?: string;
  aspectRatio?: string;
  qualities: QualityOption[];
  isPrivate?: boolean;
  isCopyrightProtected?: boolean;
  requiresAuth?: boolean;
  errorMessage?: string;
  carouselItems?: Array<{
    type: 'image' | 'video';
    url: string;
    thumbnailUrl?: string;
  }>;
}

export interface DownloadJob {
  jobId: string;
  mediaId: string;
  url: string;
  platform: SupportedPlatformId;
  title: string;
  format: string;
  quality: string;
  status: 'queued' | 'processing' | 'completed' | 'failed';
  progress: number; // 0 to 100
  downloadUrl?: string;
  fileSize?: string;
  error?: string;
  createdAt: number;
}

export interface UserHistoryRecord {
  id: string;
  userId: string;
  platform: string;
  url: string;
  title: string;
  author: string;
  mediaType: string;
  thumbnailUrl: string;
  selectedFormat: string;
  selectedQuality: string;
  status: 'completed' | 'saved' | 'failed';
  createdAt: string;
}

export interface PlatformConfig {
  id: SupportedPlatformId;
  name: string;
  seoSlug: string;
  seoTitle: string;
  seoDescription: string;
  color: string;
  bgGradient: string;
  iconName: string;
  supportedFormats: string[];
  supportedContent: string[];
  sampleUrls: string[];
  features: string[];
  faq: Array<{ question: string; answer: string }>;
  guidanceText: string;
}

export interface GlobalStatsData {
  totalRequests: number;
  successfulDownloads: number;
  failedDownloads: number;
  activeUsers: number;
  updatedAt: string;
  platformsBreakdown: Record<string, number>;
  formatBreakdown: Record<string, number>;
}
