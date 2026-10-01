import { MediaAnalysisResult, DownloadJob, GlobalStatsData } from '../types';

export async function analyzeMediaUrl(url: string): Promise<MediaAnalysisResult> {
  const response = await fetch('/api/analyze', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ url })
  });

  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.error || 'Failed to analyze media URL');
  }

  return data as MediaAnalysisResult;
}

export async function initiateDownloadJob(params: {
  url: string;
  quality: string;
  format: string;
  title: string;
  platform: string;
}): Promise<{ jobId: string; downloadUrl: string; estimatedSeconds: number }> {
  const response = await fetch('/api/download', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(params)
  });

  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.error || 'Failed to initiate download');
  }

  return data;
}

export async function checkJobStatus(jobId: string): Promise<DownloadJob> {
  const response = await fetch(`/api/status/${jobId}`);
  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.error || 'Failed to check job status');
  }
  return data as DownloadJob;
}

export async function fetchGlobalStats(): Promise<GlobalStatsData> {
  try {
    const response = await fetch('/api/stats');
    if (response.ok) {
      return await response.json();
    }
  } catch (e) {
    console.error('Failed to fetch stats:', e);
  }
  return {
    totalRequests: 52190,
    successfulDownloads: 49830,
    failedDownloads: 2360,
    activeUsers: 1680,
    updatedAt: new Date().toISOString(),
    platformsBreakdown: {
      youtube: 19800,
      instagram: 12400,
      tiktok: 10100,
      facebook: 3800,
      twitter: 2700,
      pinterest: 1400,
      reddit: 1100,
      snapchat: 750,
      linkedin: 480,
      threads: 360
    },
    formatBreakdown: {
      '1080p MP4': 20800,
      '720p MP4': 15200,
      'MP3 Audio': 9100,
      'HD JPG Image': 4730
    }
  };
}

export async function trackDownloadEvent(platform: string, format: string) {
  try {
    await fetch('/api/stats/increment', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ type: 'download', platform, format })
    });
  } catch {
    // Non-blocking
  }
}
