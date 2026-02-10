import { useEffect, useRef } from 'react';

interface Petal {
  id: number;
  left: number;
  size: number;
  duration: number;
  delay: number;
  opacity: number;
  color: string;
}

export function FallingPetals() {
  const containerRef = useRef<HTMLDivElement>(null);
  const petalsRef = useRef<Petal[]>([]);
  const nextIdRef = useRef(0);

  useEffect(() => {
    const colors = [
      '#ffb7c5', // розовый
      '#ffc4d6', // светло-розовый
      '#ffd4e5', // персиково-розовый
      '#ff8c94', // коралловый
      '#ffb088', // персиковый
      '#ffd1dc', // бледно-розовый
    ];

    // Создаем начальные лепестки
    const initialPetals: Petal[] = [];
    for (let i = 0; i < 40; i++) {
      initialPetals.push({
        id: nextIdRef.current++,
        left: Math.random() * 100,
        size: Math.random() * 15 + 10,
        duration: Math.random() * 8 + 12,
        delay: Math.random() * 15,
        opacity: Math.random() * 0.4 + 0.4,
        color: colors[Math.floor(Math.random() * colors.length)],
      });
    }
    petalsRef.current = initialPetals;

    // Функция для создания SVG лепестка
    const createPetalSVG = (size: number, color: string) => {
      const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
      svg.setAttribute('width', String(size));
      svg.setAttribute('height', String(size));
      svg.setAttribute('viewBox', '0 0 30 30');
      svg.style.filter = 'drop-shadow(0 2px 4px rgba(0,0,0,0.1))';
      
      const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
      path.setAttribute('d', 'M15 2C15 2 8 8 8 15C8 20 11 25 15 28C19 25 22 20 22 15C22 8 15 2 15 2Z');
      path.setAttribute('fill', color);
      path.setAttribute('opacity', '0.9');
      
      svg.appendChild(path);
      return svg;
    };

    // Рендерим лепестки
    const container = containerRef.current;
    if (container) {
      container.innerHTML = '';
      petalsRef.current.forEach((petal) => {
        const petalEl = document.createElement('div');
        petalEl.className = 'petal';
        petalEl.style.left = `${petal.left}%`;
        petalEl.style.animationDuration = `${petal.duration}s`;
        petalEl.style.animationDelay = `${petal.delay}s`;
        petalEl.style.opacity = String(petal.opacity);
        
        const svg = createPetalSVG(petal.size, petal.color);
        petalEl.appendChild(svg);
        container.appendChild(petalEl);
      });
    }

    // Добавляем новые лепестки периодически
    const interval = setInterval(() => {
      if (container && container.childElementCount < 50) {
        const newPetal: Petal = {
          id: nextIdRef.current++,
          left: Math.random() * 100,
          size: Math.random() * 15 + 10,
          duration: Math.random() * 8 + 12,
          delay: 0,
          opacity: Math.random() * 0.4 + 0.4,
          color: colors[Math.floor(Math.random() * colors.length)],
        };
        
        const petalEl = document.createElement('div');
        petalEl.className = 'petal';
        petalEl.style.left = `${newPetal.left}%`;
        petalEl.style.animationDuration = `${newPetal.duration}s`;
        petalEl.style.animationDelay = '0s';
        petalEl.style.opacity = String(newPetal.opacity);
        
        const svg = createPetalSVG(newPetal.size, newPetal.color);
        petalEl.appendChild(svg);
        container.appendChild(petalEl);

        // Удаляем лепесток после анимации
        setTimeout(() => {
          if (petalEl.parentNode === container) {
            container.removeChild(petalEl);
          }
        }, newPetal.duration * 1000);
      }
    }, 800);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div 
      ref={containerRef} 
      className="fixed inset-0 pointer-events-none z-50 overflow-hidden"
      aria-hidden="true"
    />
  );
}
