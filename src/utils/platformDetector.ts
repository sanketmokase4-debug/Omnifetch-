import { SupportedPlatformId, PlatformConfig } from '../types';

export const PLATFORMS_DATA: Record<SupportedPlatformId, PlatformConfig> = {
  youtube: {
    id: 'youtube',
    name: 'YouTube',
    seoSlug: 'youtube-downloader',
    seoTitle: 'Free YouTube Video Downloader | OmniFetch',
    seoDescription: 'Download public YouTube videos in 1080p, 720p HD, and MP3 audio instantly. Fast, free, and safe downloader.',
    color: '#FF0000',
    bgGradient: 'from-red-600/20 via-red-500/10 to-transparent',
    iconName: 'Youtube',
    supportedFormats: ['MP4', 'WebM', 'MP3', 'Thumbnail HD (JPG)'],
    supportedContent: ['Public Videos', 'Podcasts', 'Creative Commons Videos', 'Public Playlists (single items)'],
    sampleUrls: [
      'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      'https://youtu.be/jNQXAC9IVRw'
    ],
    features: [
      'High-speed 1080p & 720p HD downloads',
      'Clean MP3 Audio conversion (320kbps)',
      'Direct HD Thumbnail capture',
      'Zero quality loss'
    ],
    guidanceText: 'Supports all standard public YouTube video URLs and shortened youtu.be links. Private or DRM-protected videos are not accessible.',
    faq: [
      {
        question: 'Can I download public YouTube videos on mobile?',
        answer: 'Yes! On iOS Safari or Android Chrome, simply paste the link and tap Download. On iOS, files save directly to your Files or Photos app.'
      },
      {
        question: 'What video resolutions are available?',
        answer: 'Depending on the source upload, we offer 1080p Full HD, 720p HD, 480p SD, 360p, and high-fidelity audio streams.'
      },
      {
        question: 'Does this violate copyright laws?',
        answer: 'OmniFetch is intended exclusively for content you own, public domain content, or media with permitted sharing licenses (e.g., Creative Commons).'
      }
    ]
  },
  'youtube-shorts': {
    id: 'youtube-shorts',
    name: 'YouTube Shorts',
    seoSlug: 'youtube-shorts-downloader',
    seoTitle: 'YouTube Shorts Downloader - Save Shorts in Full HD',
    seoDescription: 'Download vertical YouTube Shorts in high quality MP4 video or MP3 audio without watermarks.',
    color: '#FF2A2A',
    bgGradient: 'from-rose-600/20 via-red-500/10 to-transparent',
    iconName: 'Video',
    supportedFormats: ['MP4 (1080p Vertical)', 'MP3', 'Thumbnail HD'],
    supportedContent: ['Public YouTube Shorts', 'Vertical Reels'],
    sampleUrls: [
      'https://www.youtube.com/shorts/3i_h32ZcWfg',
      'https://youtube.com/shorts/kfVsfOSbJY0'
    ],
    features: ['Vertical 9:16 optimized format', 'Crystal clear audio track', 'One-click instant mobile save'],
    guidanceText: 'Paste any YouTube Shorts vertical link to retrieve the crisp original video file.',
    faq: [
      {
        question: 'How do I download YouTube Shorts without watermarks?',
        answer: 'YouTube Shorts public media analyzed through OmniFetch are retrieved directly from public streams in pristine original quality.'
      }
    ]
  },
  instagram: {
    id: 'instagram',
    name: 'Instagram',
    seoSlug: 'instagram-downloader',
    seoTitle: 'Instagram Downloader - Photos, Carousels & Posts',
    seoDescription: 'Download public Instagram photos, multi-image carousels, and public posts in original high resolution.',
    color: '#E1306C',
    bgGradient: 'from-pink-600/20 via-purple-600/10 to-transparent',
    iconName: 'Instagram',
    supportedFormats: ['JPG (High Res)', 'MP4 (Video)', 'PNG'],
    supportedContent: ['Public Posts', 'Public Multi-Image Carousels', 'Public Highlights', 'Post Captions & Media'],
    sampleUrls: [
      'https://www.instagram.com/p/C_EXAMPLE_POST/',
      'https://instagr.am/p/D_PUBLIC_ITEM/'
    ],
    features: ['Multi-photo carousel extraction', 'Full resolution image preservation', 'No account login required'],
    guidanceText: 'Works on all public Instagram posts and multi-photo carousels. Private profile media cannot be downloaded.',
    faq: [
      {
        question: 'Can I download private Instagram posts?',
        answer: 'No. To protect privacy and adhere to platform security, OmniFetch strictly processes only publicly accessible URLs.'
      },
      {
        question: 'Can I download entire multi-slide carousels?',
        answer: 'Yes! When a carousel URL is analyzed, all public images and video slides are extracted with separate download buttons.'
      }
    ]
  },
  'instagram-reels': {
    id: 'instagram-reels',
    name: 'Instagram Reels',
    seoSlug: 'instagram-reels-downloader',
    seoTitle: 'Instagram Reels Downloader - High Quality MP4 Reels',
    seoDescription: 'Download Instagram Reels in HD MP4 with audio. Safe, fast, and completely free.',
    color: '#C13584',
    bgGradient: 'from-purple-600/20 via-pink-600/10 to-transparent',
    iconName: 'Film',
    supportedFormats: ['MP4 Video (1080p)', 'MP3 Audio', 'Cover Image (JPG)'],
    supportedContent: ['Public Reels', 'Audio Tracks', 'Cover Frames'],
    sampleUrls: [
      'https://www.instagram.com/reel/C8_SAMPLE_REEL/',
      'https://www.instagram.com/reels/videos/D_REEL/'
    ],
    features: ['HD 1080p MP4 format', 'Extracted original sound audio', 'Cover frame extraction'],
    guidanceText: 'Paste any public Instagram reel link to get the MP4 video and extracted audio track.',
    faq: [
      {
        question: 'How do I copy an Instagram Reel link?',
        answer: 'On Instagram, tap the Share icon on the Reel and select "Copy link", then paste it here.'
      }
    ]
  },
  tiktok: {
    id: 'tiktok',
    name: 'TikTok',
    seoSlug: 'tiktok-downloader',
    seoTitle: 'TikTok Video Downloader - Fast MP4 & MP3 Download',
    seoDescription: 'Download public TikTok videos in HD and MP3 sound format. Fast, easy, and works on all devices.',
    color: '#00f2fe',
    bgGradient: 'from-cyan-600/20 via-rose-600/10 to-transparent',
    iconName: 'Flame',
    supportedFormats: ['MP4 HD Video', 'MP3 Audio Track', 'Cover Art'],
    supportedContent: ['Public Videos', 'Trending Sounds', 'TikTok Slideshows'],
    sampleUrls: [
      'https://www.tiktok.com/@tiktok/video/7123456789012345678',
      'https://vm.tiktok.com/ZMEXAMPLE/'
    ],
    features: ['Crisp video quality', 'Extract background audio track', 'Supports short vm.tiktok links'],
    guidanceText: 'Supports standard tiktok.com/@user/video links and short vm.tiktok.com / vt.tiktok.com mobile share URLs.',
    faq: [
      {
        question: 'Can I download TikTok sounds as MP3?',
        answer: 'Yes! Select the "Audio Only (MP3)" format button after analyzing your TikTok video.'
      }
    ]
  },
  facebook: {
    id: 'facebook',
    name: 'Facebook',
    seoSlug: 'facebook-video-downloader',
    seoTitle: 'Facebook Video Downloader - Save FB Videos in HD',
    seoDescription: 'Download public Facebook videos, reels, and watch clips in 1080p and 720p HD quality.',
    color: '#1877F2',
    bgGradient: 'from-blue-600/20 via-blue-500/10 to-transparent',
    iconName: 'Facebook',
    supportedFormats: ['MP4 HD (1080p/720p)', 'MP4 SD', 'MP3'],
    supportedContent: ['Public FB Watch Videos', 'Public Group Videos', 'Facebook Reels', 'Public Page Posts'],
    sampleUrls: [
      'https://www.facebook.com/watch/?v=123456789',
      'https://fb.watch/sampleWatchId/'
    ],
    features: ['HD and SD quality options', 'FB Watch & Reel compatibility', 'Fast CDN download speed'],
    guidanceText: 'Make sure the Facebook post or video privacy is set to Public (globe icon).',
    faq: [
      {
        question: 'Why does a Facebook link say private?',
        answer: 'If the video is shared within a closed private group or set to "Friends Only", our public parser cannot read it without bypassing privacy controls.'
      }
    ]
  },
  twitter: {
    id: 'twitter',
    name: 'X (Twitter)',
    seoSlug: 'twitter-video-downloader',
    seoTitle: 'Twitter (X) Video Downloader - Download X Videos & GIFs',
    seoDescription: 'Download public videos, GIFs, and media attachments from X / Twitter posts in HD MP4.',
    color: '#1DA1F2',
    bgGradient: 'from-sky-600/20 via-slate-700/10 to-transparent',
    iconName: 'Twitter',
    supportedFormats: ['MP4 (1080p/720p/360p)', 'MP4 (GIF Loop)', 'JPG Photo'],
    supportedContent: ['Public Tweet Videos', 'Animated GIFs', 'Public Photo Attachments'],
    sampleUrls: [
      'https://x.com/Twitter/status/1234567890123456789',
      'https://twitter.com/NASA/status/1789012345678901234'
    ],
    features: ['High-bitrate MP4 streams', 'Clean GIF export', 'Preserves creator attribution'],
    guidanceText: 'Paste any public tweet or x.com post containing a video, GIF, or image attachment.',
    faq: [
      {
        question: 'Can I download GIFs from X (Twitter)?',
        answer: 'Twitter converts uploaded GIFs to MP4 video loops. OmniFetch lets you download both the MP4 loop or frame captures.'
      }
    ]
  },
  pinterest: {
    id: 'pinterest',
    name: 'Pinterest',
    seoSlug: 'pinterest-downloader',
    seoTitle: 'Pinterest Video & Image Downloader - Save Pins in HD',
    seoDescription: 'Download public Pinterest pins, idea pins, video pins, and high-resolution images easily.',
    color: '#BD081C',
    bgGradient: 'from-red-600/20 via-pink-600/10 to-transparent',
    iconName: 'Pin',
    supportedFormats: ['MP4 Video', 'JPG HD Image', 'PNG'],
    supportedContent: ['Public Image Pins', 'Video Pins', 'Idea Pins'],
    sampleUrls: [
      'https://www.pinterest.com/pin/123456789012345678/',
      'https://pin.it/7xample'
    ],
    features: ['Full uncompressed JPG resolution', 'Full 1080p video pin downloads', 'Short pin.it support'],
    guidanceText: 'Supports all standard Pinterest pin links and pin.it mobile share links.',
    faq: [
      {
        question: 'How do I download high-res images from Pinterest?',
        answer: 'Paste the pin link, and OmniFetch automatically retrieves the highest available resolution image source (originals up to 4K).'
      }
    ]
  },
  reddit: {
    id: 'reddit',
    name: 'Reddit',
    seoSlug: 'reddit-video-downloader',
    seoTitle: 'Reddit Video Downloader with Audio - Save Reddit Videos',
    seoDescription: 'Download public Reddit videos with merged audio, GIFs, and images in HD MP4 format.',
    color: '#FF4500',
    bgGradient: 'from-orange-600/20 via-amber-600/10 to-transparent',
    iconName: 'MessageSquare',
    supportedFormats: ['MP4 (Video + Audio)', 'GIF', 'JPG Image'],
    supportedContent: ['v.redd.it Public Videos', 'Reddit Image Posts', 'Reddit Gallery Posts'],
    sampleUrls: [
      'https://www.reddit.com/r/videos/comments/abc123/sample_title/',
      'https://redd.it/abc123'
    ],
    features: ['Merged audio and video streams', 'HD 1080p/720p', 'Gallery album extraction'],
    guidanceText: 'Supports posts from public subreddits. Audio is seamlessly integrated with the video file.',
    faq: [
      {
        question: 'Does the downloaded Reddit video have sound?',
        answer: 'Yes! Reddit stores video and audio streams separately. OmniFetch delivers the complete stream with synchronized audio.'
      }
    ]
  },
  snapchat: {
    id: 'snapchat',
    name: 'Snapchat',
    seoSlug: 'snapchat-downloader',
    seoTitle: 'Snapchat Public Spotlight & Story Downloader',
    seoDescription: 'Download public Snapchat Spotlight videos and public story clips in original quality.',
    color: '#FFFC00',
    bgGradient: 'from-yellow-500/20 via-amber-500/10 to-transparent',
    iconName: 'Ghost',
    supportedFormats: ['MP4 (9:16 Vertical)', 'JPG'],
    supportedContent: ['Public Spotlight Videos', 'Public Stories', 'Lens Previews'],
    sampleUrls: [
      'https://www.snapchat.com/p/sample-spotlight-id',
      'https://story.snapchat.com/s/sample'
    ],
    features: ['Vertical HD MP4', 'Spotlight creator attribution', 'Instant mobile saving'],
    guidanceText: 'Supports public Spotlight and public Creator Story links. Private snaps/chats are strictly unavailable.',
    faq: [
      {
        question: 'Can I download private chats or disappearing snaps?',
        answer: 'Never. OmniFetch only processes publicly published Spotlight videos and verified creator public stories.'
      }
    ]
  },
  linkedin: {
    id: 'linkedin',
    name: 'LinkedIn',
    seoSlug: 'linkedin-video-downloader',
    seoTitle: 'LinkedIn Video & Document Downloader',
    seoDescription: 'Download public LinkedIn video posts, infographics, and public slide presentations in HD.',
    color: '#0A66C2',
    bgGradient: 'from-blue-700/20 via-sky-600/10 to-transparent',
    iconName: 'Linkedin',
    supportedFormats: ['MP4 Video', 'JPG/PNG Image', 'Thumbnail'],
    supportedContent: ['Public Feed Videos', 'Public Infographics', 'Company Page Posts'],
    sampleUrls: [
      'https://www.linkedin.com/posts/activity-1234567890123456789-abcd',
      'https://www.linkedin.com/feed/update/urn:li:activity:1234567890/'
    ],
    features: ['Clear business video downloads', 'High resolution slides & charts', 'Watermark-free'],
    guidanceText: 'Works with public company posts and public member updates.',
    faq: [
      {
        question: 'Can I download videos from private LinkedIn groups?',
        answer: 'No, only public feed posts and public company updates can be analyzed.'
      }
    ]
  },
  threads: {
    id: 'threads',
    name: 'Threads',
    seoSlug: 'threads-downloader',
    seoTitle: 'Threads Video & Photo Downloader - Save Meta Threads',
    seoDescription: 'Download public Threads videos, photos, and media attachments in original HD quality.',
    color: '#000000',
    bgGradient: 'from-slate-700/20 via-zinc-800/10 to-transparent',
    iconName: 'AtSign',
    supportedFormats: ['MP4 Video', 'JPG Image', 'MP3 Audio'],
    supportedContent: ['Public Threads Posts', 'Thread Videos', 'Photo Slides'],
    sampleUrls: [
      'https://www.threads.net/@user/post/C_EXAMPLE_THREAD',
      'https://threads.net/t/C_EXAMPLE'
    ],
    features: ['HD video extraction', 'Single or multiple photo posts', 'Fast parsing'],
    guidanceText: 'Paste any public Threads link from a public profile.',
    faq: [
      {
        question: 'How do I copy a link from the Threads app?',
        answer: 'Tap the three dots on any public thread post, select "Copy link", and paste it here.'
      }
    ]
  },
  generic: {
    id: 'generic',
    name: 'Direct / Public Web Media',
    seoSlug: 'universal-media-downloader',
    seoTitle: 'Universal Public Media Downloader',
    seoDescription: 'Analyze and download publicly hosted videos, podcasts, and media files from open websites.',
    color: '#6366F1',
    bgGradient: 'from-indigo-600/20 via-violet-600/10 to-transparent',
    iconName: 'Globe',
    supportedFormats: ['MP4', 'MP3', 'WEBM', 'JPG', 'PNG'],
    supportedContent: ['Open Video Links', 'Public Podcasts', 'Direct Media Streams'],
    sampleUrls: [
      'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4'
    ],
    features: ['Universal media stream inspection', 'Clean direct file proxying', 'High download speed'],
    guidanceText: 'Supports open web video and audio links with public headers.',
    faq: [
      {
        question: 'What websites are supported?',
        answer: 'Any website offering public oEmbed metadata or publicly accessible media files that do not require login credentials or DRM.'
      }
    ]
  }
};

/**
 * Automatically inspects a URL string and returns the detected platform ID.
 */
export function detectPlatform(rawUrl: string): {
  platform: SupportedPlatformId;
  config: PlatformConfig;
  isValid: boolean;
  cleanUrl: string;
} {
  const trimmed = rawUrl.trim();
  if (!trimmed) {
    return {
      platform: 'generic',
      config: PLATFORMS_DATA.generic,
      isValid: false,
      cleanUrl: ''
    };
  }

  let parsedUrl: URL;
  try {
    let urlWithProtocol = trimmed;
    if (!/^https?:\/\//i.test(urlWithProtocol)) {
      urlWithProtocol = 'https://' + urlWithProtocol;
    }
    parsedUrl = new URL(urlWithProtocol);
  } catch {
    return {
      platform: 'generic',
      config: PLATFORMS_DATA.generic,
      isValid: false,
      cleanUrl: trimmed
    };
  }

  const hostname = parsedUrl.hostname.toLowerCase();
  const pathname = parsedUrl.pathname.toLowerCase();

  // 1. YouTube Shorts
  if (
    (hostname.includes('youtube.com') || hostname.includes('youtu.be')) &&
    pathname.includes('/shorts/')
  ) {
    return { platform: 'youtube-shorts', config: PLATFORMS_DATA['youtube-shorts'], isValid: true, cleanUrl: parsedUrl.toString() };
  }

  // 2. YouTube
  if (
    hostname.includes('youtube.com') ||
    hostname.includes('youtu.be') ||
    hostname.includes('m.youtube.com')
  ) {
    return { platform: 'youtube', config: PLATFORMS_DATA.youtube, isValid: true, cleanUrl: parsedUrl.toString() };
  }

  // 3. Instagram Reels
  if (
    (hostname.includes('instagram.com') || hostname.includes('instagr.am')) &&
    (pathname.includes('/reel/') || pathname.includes('/reels/'))
  ) {
    return { platform: 'instagram-reels', config: PLATFORMS_DATA['instagram-reels'], isValid: true, cleanUrl: parsedUrl.toString() };
  }

  // 4. Instagram
  if (
    hostname.includes('instagram.com') ||
    hostname.includes('instagr.am')
  ) {
    return { platform: 'instagram', config: PLATFORMS_DATA.instagram, isValid: true, cleanUrl: parsedUrl.toString() };
  }

  // 5. TikTok
  if (
    hostname.includes('tiktok.com') ||
    hostname.includes('vm.tiktok.com') ||
    hostname.includes('vt.tiktok.com')
  ) {
    return { platform: 'tiktok', config: PLATFORMS_DATA.tiktok, isValid: true, cleanUrl: parsedUrl.toString() };
  }

  // 6. Facebook
  if (
    hostname.includes('facebook.com') ||
    hostname.includes('fb.watch') ||
    hostname.includes('m.facebook.com') ||
    hostname.includes('fb.com')
  ) {
    return { platform: 'facebook', config: PLATFORMS_DATA.facebook, isValid: true, cleanUrl: parsedUrl.toString() };
  }

  // 7. X / Twitter
  if (
    hostname.includes('twitter.com') ||
    hostname.includes('x.com') ||
    hostname.includes('t.co')
  ) {
    return { platform: 'twitter', config: PLATFORMS_DATA.twitter, isValid: true, cleanUrl: parsedUrl.toString() };
  }

  // 8. Pinterest
  if (
    hostname.includes('pinterest.com') ||
    hostname.includes('pin.it') ||
    hostname.includes('pinterest.ca') ||
    hostname.includes('pinterest.co.uk')
  ) {
    return { platform: 'pinterest', config: PLATFORMS_DATA.pinterest, isValid: true, cleanUrl: parsedUrl.toString() };
  }

  // 9. Reddit
  if (
    hostname.includes('reddit.com') ||
    hostname.includes('redd.it') ||
    hostname.includes('v.redd.it')
  ) {
    return { platform: 'reddit', config: PLATFORMS_DATA.reddit, isValid: true, cleanUrl: parsedUrl.toString() };
  }

  // 10. Snapchat
  if (
    hostname.includes('snapchat.com') ||
    hostname.includes('story.snapchat.com')
  ) {
    return { platform: 'snapchat', config: PLATFORMS_DATA.snapchat, isValid: true, cleanUrl: parsedUrl.toString() };
  }

  // 11. LinkedIn
  if (
    hostname.includes('linkedin.com') ||
    hostname.includes('lnkd.in')
  ) {
    return { platform: 'linkedin', config: PLATFORMS_DATA.linkedin, isValid: true, cleanUrl: parsedUrl.toString() };
  }

  // 12. Threads
  if (
    hostname.includes('threads.net') ||
    hostname.includes('threads.com')
  ) {
    return { platform: 'threads', config: PLATFORMS_DATA.threads, isValid: true, cleanUrl: parsedUrl.toString() };
  }

  // Valid generic URL
  return {
    platform: 'generic',
    config: PLATFORMS_DATA.generic,
    isValid: true,
    cleanUrl: parsedUrl.toString()
  };
}
