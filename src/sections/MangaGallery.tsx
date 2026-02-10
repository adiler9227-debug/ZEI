import { useState } from 'react';
import { X, Eye } from 'lucide-react';

interface MangaItem {
  id: number;
  src: string;
  title: string;
}

const mangaItems: MangaItem[] = [
  { id: 1, src: 'A/A1.jpeg', title: 'Глава 1' },
  { id: 2, src: 'A/A2.jpeg', title: 'Глава 2' },
  { id: 3, src: 'A/A3.jpeg', title: 'Глава 3' },
  { id: 4, src: 'A/A4.jpeg', title: 'Глава 4' },
];

export function MangaGallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const openModal = (src: string) => {
    setSelectedImage(src);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <section className="relative z-10 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-light text-center mb-12 bg-gradient-to-r from-[#ff7043] via-[#ff8c69] to-[#ff7043] bg-clip-text text-transparent animate-glow">
          Наша История
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
          {mangaItems.map((item, index) => (
            <div
              key={item.id}
              className="manga-card group relative bg-white rounded-3xl overflow-hidden shadow-lg shadow-[#ff8c69]/10 cursor-pointer"
              style={{ 
                animationDelay: `${index * 0.15}s`,
                aspectRatio: '3/4'
              }}
              onClick={() => openModal(item.src)}
            >
              <img
                src={item.src}
                alt={item.title}
                loading="lazy"
                className="w-full h-full object-cover"
              />
              
              {/* Overlay */}
              <div className="overlay absolute inset-0 bg-gradient-to-t from-[#ff7043]/90 via-[#ff8c69]/40 to-transparent flex flex-col items-center justify-end pb-8">
                <button className="view-btn flex items-center gap-2 bg-white text-[#ff7043] px-6 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-shadow">
                  <Eye className="w-5 h-5" />
                  <span>Смотреть</span>
                </button>
              </div>

              {/* Номер главы */}
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full text-[#ff7043] font-medium text-sm shadow-md">
                {item.title}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Модальное окно */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/95 backdrop-blur-xl"
          onClick={closeModal}
        >
          <button
            className="absolute top-6 right-6 w-12 h-12 flex items-center justify-center text-white/80 hover:text-[#ff8c69] transition-colors rounded-full hover:bg-white/10"
            onClick={closeModal}
          >
            <X className="w-8 h-8" />
          </button>
          
          <img
            src={selectedImage}
            alt="Манга"
            className="modal-enter max-w-full max-h-[90vh] object-contain rounded-2xl shadow-2xl shadow-[#ff8c69]/20"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
}
