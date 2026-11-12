export interface UgcReelItem {
  id: string;
  /** Instagram Reel URL (e.g. "https://www.instagram.com/reel/ABC123/") */
  reelUrl?: string;
  /** Or uploaded video file path in public/reels/ (e.g. "/reels/review-1.mp4") */
  videoSrc?: string;
  /** Optional cover thumbnail path in public/ */
  poster?: string;
}

/**
 * Convert an Instagram Reel URL into an embeddable iframe URL for inline playback.
 */
export function getInstagramEmbedUrl(url?: string): string | null {
  if (!url) return null;
  const match = url.match(/instagram\.com\/(reel|p|tv)\/([A-Za-z0-9_-]+)/);
  if (!match) return null;
  return `https://www.instagram.com/${match[1]}/${match[2]}/embed/`;
}

/**
 * Client Instagram UGC Review Reels
 * Once you record and upload reels, add your `reelUrl` or `videoSrc` entries below.
 * The Reviews section on the Homepage will automatically appear and reflect them.
 *
 * Example:
 * {
 *   id: 'reel-1',
 *   reelUrl: 'https://www.instagram.com/reel/YOUR_REEL_ID/',
 * },
 */
export const ugcReels: UgcReelItem[] = [];
