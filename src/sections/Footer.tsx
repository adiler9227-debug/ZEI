import { Heart } from 'lucide-react';

export function Footer() {
  return (
    <footer className="relative z-10 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <div className="flex items-center justify-center gap-3 mb-6">
          <span className="w-20 h-[1px] bg-gradient-to-r from-transparent via-[#ff8c69] to-transparent" />
        </div>
        
        <p className="text-xl sm:text-2xl text-[#e64a19] font-light flex items-center justify-center gap-3 flex-wrap">
          <span>С любовью</span>
          <Heart 
            className="w-8 h-8 text-[#ff7043] animate-heartbeat inline-block" 
            fill="#ff7043" 
          />
          <span>навсегда</span>
        </p>
        
        <div className="mt-8 text-sm text-[#ff8c69]/70">
          <p>Создано с заботой для самой особенной</p>
        </div>

        <div className="mt-6 flex items-center justify-center gap-2">
          <Heart className="w-4 h-4 text-[#ffb088]" fill="#ffb088" />
          <Heart className="w-5 h-5 text-[#ff8c69]" fill="#ff8c69" />
          <Heart className="w-4 h-4 text-[#ffb088]" fill="#ffb088" />
        </div>
      </div>
    </footer>
  );
}
