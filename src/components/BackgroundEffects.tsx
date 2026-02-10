import { useEffect, useRef } from 'react';

export function BackgroundEffects() {
  const particlesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = particlesRef.current;
    if (!container) return;

    // Создаем плавающие световые частицы
    for (let i = 0; i < 20; i++) {
      const particle = document.createElement('div');
      const size = Math.random() * 6 + 3;
      particle.className = 'absolute rounded-full animate-float';
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      particle.style.left = `${Math.random() * 100}%`;
      particle.style.top = `${Math.random() * 100}%`;
      particle.style.background = `radial-gradient(circle, rgba(255, 176, 136, ${Math.random() * 0.5 + 0.3}) 0%, transparent 70%)`;
      particle.style.boxShadow = `0 0 ${size * 2}px rgba(255, 176, 136, 0.5)`;
      particle.style.animationDelay = `${Math.random() * 4}s`;
      particle.style.animationDuration = `${Math.random() * 3 + 3}s`;
      container.appendChild(particle);
    }
  }, []);

  return (
    <>
      {/* Лавовая лампа фон */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        {/* Большие размытые пятна */}
        <div 
          className="lava-blob w-[500px] h-[500px] bg-gradient-radial from-[#ffb088] to-[#ff8c69]"
          style={{ top: '-10%', left: '-10%', animationDelay: '0s' }}
        />
        <div 
          className="lava-blob w-[400px] h-[400px] bg-gradient-radial from-[#ffc4a3] to-[#ffb088]"
          style={{ top: '20%', right: '-5%', animationDelay: '5s' }}
        />
        <div 
          className="lava-blob w-[450px] h-[450px] bg-gradient-radial from-[#ffd4c4] to-[#ffb088]"
          style={{ bottom: '10%', left: '15%', animationDelay: '10s' }}
        />
        <div 
          className="lava-blob w-[350px] h-[350px] bg-gradient-radial from-[#ff8c69] to-[#ff7043]"
          style={{ top: '50%', right: '10%', animationDelay: '7s' }}
        />
        <div 
          className="lava-blob w-[300px] h-[300px] bg-gradient-radial from-[#ffa07a] to-[#ff8c69]"
          style={{ bottom: '30%', right: '25%', animationDelay: '12s' }}
        />
        <div 
          className="lava-blob w-[380px] h-[380px] bg-gradient-radial from-[#ffccbc] to-[#ffb088]"
          style={{ top: '60%', left: '5%', animationDelay: '3s' }}
        />
      </div>

      {/* Плавающие частицы */}
      <div 
        ref={particlesRef}
        className="fixed inset-0 pointer-events-none z-[1]"
        aria-hidden="true"
      />

      {/* Градиентный оверлей */}
      <div 
        className="fixed inset-0 pointer-events-none z-[2]"
        style={{
          background: 'linear-gradient(180deg, rgba(255, 245, 235, 0.3) 0%, rgba(255, 228, 214, 0.2) 50%, rgba(255, 212, 196, 0.3) 100%)'
        }}
      />
    </>
  );
}
