import { useState, useRef } from 'react';
import { Play, Pause } from 'lucide-react';

interface VideoItem {
  id: number;
  videoSrc: string;
  posterSrc: string;
}

const videos: VideoItem[] = [
  { id: 1, videoSrc: 'A/V1.mp4', posterSrc: 'A/A1.jpeg' },
  { id: 2, videoSrc: 'A/V2.mp4', posterSrc: 'A/A2.jpeg' },
  { id: 3, videoSrc: 'A/V3.mp4', posterSrc: 'A/A3.jpeg' },
  { id: 4, videoSrc: 'A/v4.mp4', posterSrc: 'A/A4.jpeg' },
];

export function VideoSection() {
  const [playingId, setPlayingId] = useState<number | null>(null);
  const videoRefs = useRef<Map<number, HTMLVideoElement>>(new Map());

  const handlePlay = (id: number) => {
    const video = videoRefs.current.get(id);
    if (!video) return;

    if (playingId === id) {
      video.pause();
      setPlayingId(null);
    } else {
      // Останавливаем другие видео
      if (playingId !== null) {
        const otherVideo = videoRefs.current.get(playingId);
        otherVideo?.pause();
      }
      video.play();
      setPlayingId(id);
    }
  };

  const handleVideoEnd = (id: number) => {
    if (playingId === id) {
      setPlayingId(null);
    }
  };

  return (
    <section className="relative z-10 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-light text-center mb-12 bg-gradient-to-r from-[#ff7043] via-[#ff8c69] to-[#ff7043] bg-clip-text text-transparent animate-glow">
          Наши Моменты
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
          {videos.map((video, index) => (
            <div
              key={video.id}
              className="video-card group relative bg-white/80 backdrop-blur-sm rounded-3xl overflow-hidden shadow-lg shadow-[#ff8c69]/10 border border-white/60 cursor-pointer"
              style={{ animationDelay: `${index * 0.15}s` }}
              onClick={() => handlePlay(video.id)}
            >
              <div className="relative aspect-video overflow-hidden">
                <video
                  ref={(el) => {
                    if (el) videoRefs.current.set(video.id, el);
                  }}
                  src={video.videoSrc}
                  poster={video.posterSrc}
                  loop
                  muted
                  playsInline
                  preload="metadata"
                  className="w-full h-full object-cover"
                  onEnded={() => handleVideoEnd(video.id)}
                />
                
                {/* Play/Pause Overlay */}
                <div 
                  className={`absolute inset-0 flex items-center justify-center bg-black/20 transition-opacity duration-300 ${
                    playingId === video.id ? 'opacity-0 group-hover:opacity-100' : 'opacity-100'
                  }`}
                >
                  <div className="play-btn absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 sm:w-20 sm:h-20 bg-white/95 rounded-full flex items-center justify-center shadow-xl shadow-[#ff7043]/30">
                    {playingId === video.id ? (
                      <Pause className="w-6 h-6 sm:w-8 sm:h-8 text-[#ff7043] ml-0" />
                    ) : (
                      <Play className="w-6 h-6 sm:w-8 sm:h-8 text-[#ff7043] ml-1" />
                    )}
                  </div>
                </div>

                {/* Градиент внизу */}
                <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black/30 to-transparent pointer-events-none" />
              </div>

              {/* Номер видео */}
              <div className="absolute bottom-3 left-4 text-white text-sm font-medium drop-shadow-md">
                Видео {video.id}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
