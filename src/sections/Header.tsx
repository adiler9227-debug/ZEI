import { Heart } from 'lucide-react';

export function Header() {
  return (
    <header className="relative z-10 pt-20 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <div className="flex items-center justify-center gap-3 mb-6">
          <Heart className="w-8 h-8 text-[#ff8c69] animate-heartbeat" fill="#ff8c69" />
          <Heart className="w-10 h-10 text-[#ff7043] animate-heartbeat" fill="#ff7043" style={{ animationDelay: '0.2s' }} />
          <Heart className="w-8 h-8 text-[#ff8c69] animate-heartbeat" fill="#ff8c69" style={{ animationDelay: '0.4s' }} />
        </div>
        
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light tracking-wide mb-4">
          <span className="bg-gradient-to-r from-[#ff7043] via-[#ff8c69] via-[#ffb088] to-[#ff7043] bg-clip-text text-transparent animate-glow">
            Для Моей Любимой
          </span>
        </h1>
        
        <p className="text-lg sm:text-xl text-[#e64a19]/80 font-light tracking-wider">
          С любовью, навсегда
        </p>

        <div className="mt-8 flex items-center justify-center gap-2">
          <span className="w-16 h-[2px] bg-gradient-to-r from-transparent to-[#ff8c69]" />
          <Heart className="w-5 h-5 text-[#ffb088]" fill="#ffb088" />
          <span className="w-16 h-[2px] bg-gradient-to-l from-transparent to-[#ff8c69]" />
        </div>
      </div>
    </header>
  );
}
