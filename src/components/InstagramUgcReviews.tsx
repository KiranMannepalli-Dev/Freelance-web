import { useEffect, useRef, useState } from 'react';
import { Play, Pause, Volume2, VolumeX } from 'lucide-react';
import {
  ugcReels,
  getInstagramEmbedUrl,
  type UgcReelItem,
} from '../data/ugcReviews';

function InstagramGlyph({ className = 'w-4 h-4' }: { className?: string }) {
  return (
    <svg className={`${className} fill-current`} viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
    </svg>
  );
}

interface ReelCardProps {
  reel: UgcReelItem;
  isActive: boolean;
  onActivate: (id: string | null) => void;
}

function ReelCard({ reel, isActive, onActivate }: ReelCardProps) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isMuted, setIsMuted] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  const embedUrl = getInstagramEmbedUrl(reel.reelUrl);
  const showDirectEmbed = Boolean(embedUrl && !reel.videoSrc && (!reel.poster || isActive));

  useEffect(() => {
    if (!isActive && videoRef.current && !videoRef.current.paused) {
      videoRef.current.pause();
    }
  }, [isActive]);

  const handleTogglePlay = () => {
    if (reel.videoSrc && videoRef.current) {
      const video = videoRef.current;
      if (video.paused) {
        onActivate(reel.id);
        void video.play().catch(() => {});
      } else {
        video.pause();
        onActivate(null);
      }
      return;
    }

    if (embedUrl && reel.poster) {
      onActivate(isActive ? null : reel.id);
    }
  };

  const handleToggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!videoRef.current) return;
    const nextMuted = !isMuted;
    videoRef.current.muted = nextMuted;
    setIsMuted(nextMuted);
  };

  return (
    <div
      onClick={showDirectEmbed ? undefined : handleTogglePlay}
      onKeyDown={
        showDirectEmbed
          ? undefined
          : (e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                handleTogglePlay();
              }
            }
      }
      role={showDirectEmbed ? undefined : 'button'}
      tabIndex={showDirectEmbed ? undefined : 0}
      aria-label="Client Review Reel"
      className={`relative aspect-[9/16] shrink-0 w-[66vw] sm:w-[250px] lg:w-full snap-start overflow-hidden rounded-[8px] bg-[#0B0B0F] border transition-all duration-300 group select-none ${
        showDirectEmbed ? '' : 'cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#EF4444]'
      } ${
        isActive
          ? 'border-[#EF4444] shadow-md'
          : 'border-[#E5E7EB] hover:border-[#EF4444]'
      }`}
    >
      {reel.videoSrc ? (
        <video
          ref={videoRef}
          src={reel.videoSrc}
          poster={reel.poster}
          playsInline
          loop
          muted={isMuted}
          preload="metadata"
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
          onEnded={() => {
            setIsPlaying(false);
            onActivate(null);
          }}
          className="w-full h-full object-cover"
        />
      ) : showDirectEmbed && embedUrl ? (
        <iframe
          src={embedUrl}
          title={`Instagram Review ${reel.id}`}
          className="w-full h-full border-0 bg-[#0B0B0F]"
          allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
          allowFullScreen
        />
      ) : reel.poster ? (
        <img
          src={reel.poster}
          alt=""
          loading="lazy"
          className="w-full h-full object-cover object-center group-hover:scale-[1.03] transition-transform duration-500"
        />
      ) : null}

      {/* Center Play / Pause Button on desktop (hidden in mobile/app view so no buttons overlay the reel) */}
      {!showDirectEmbed && (
        <div
          className={`pointer-events-none absolute inset-0 hidden lg:flex items-center justify-center transition-opacity duration-200 ${
            isPlaying ? 'opacity-0 group-hover:opacity-100' : 'opacity-100'
          }`}
        >
          <div className="w-14 h-14 rounded-full bg-white/90 group-hover:bg-[#EF4444] text-[#0B0B0F] group-hover:text-white flex items-center justify-center shadow-lg transition-all duration-200 group-hover:scale-105">
            {isPlaying ? (
              <Pause size={20} className="fill-current" />
            ) : (
              <Play size={20} className="fill-current ml-0.5" />
            )}
          </div>
        </div>
      )}

      {/* Audio Mute/Unmute Toggle on desktop while playing uploaded video */}
      {reel.videoSrc && isPlaying && (
        <button
          type="button"
          onClick={handleToggleMute}
          aria-label={isMuted ? 'Unmute reel' : 'Mute reel'}
          className="hidden lg:flex absolute bottom-3 right-3 z-20 w-9 h-9 rounded-full bg-[#0B0B0F]/80 hover:bg-[#EF4444] text-white border border-white/20 items-center justify-center transition-colors"
        >
          {isMuted ? <VolumeX size={15} /> : <Volume2 size={15} />}
        </button>
      )}
    </div>
  );
}

export default function InstagramUgcReviews() {
  const [activeReelId, setActiveReelId] = useState<string | null>(null);

  const activeReels = ugcReels.filter((r) => Boolean(r.videoSrc || getInstagramEmbedUrl(r.reelUrl)));
  if (activeReels.length === 0) {
    return null;
  }

  return (
    <section
      id="reviews"
      className="py-12 sm:py-16 px-6 sm:px-10 bg-white border-t border-[#E5E7EB]"
      aria-labelledby="ugc-reviews-heading"
    >
      <div className="max-w-[1200px] mx-auto">
        <div className="mb-8">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-wider text-[#EF4444] font-semibold mb-1.5">
            <InstagramGlyph className="w-3.5 h-3.5 text-[#EF4444]" />
            <span>Instagram UGC Reviews</span>
          </div>
          <h2
            id="ugc-reviews-heading"
            className="text-2xl sm:text-3xl font-semibold text-[#0B0B0F] tracking-tight"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Client Review Reels
          </h2>
        </div>

        <div className="flex overflow-x-auto snap-x snap-mandatory gap-3.5 pb-2 -mx-6 px-6 sm:-mx-10 sm:px-10 lg:mx-0 lg:px-0 lg:pb-0 lg:grid lg:grid-cols-4 lg:gap-5 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          {activeReels.map((reel) => (
            <ReelCard
              key={reel.id}
              reel={reel}
              isActive={activeReelId === reel.id}
              onActivate={setActiveReelId}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
