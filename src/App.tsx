import { FallingPetals } from './components/FallingPetals';
import { BackgroundEffects } from './components/BackgroundEffects';
import { Header } from './sections/Header';
import { VideoSection } from './sections/VideoSection';
import { MangaGallery } from './sections/MangaGallery';
import { Footer } from './sections/Footer';

function App() {
  return (
    <div className="min-h-screen relative overflow-x-hidden">
      {/* Фоновые эффекты */}
      <BackgroundEffects />
      
      {/* Падающие лепестки сакуры */}
      <FallingPetals />
      
      {/* Основной контент */}
      <main className="relative z-10">
        <Header />
        <VideoSection />
        <MangaGallery />
        <Footer />
      </main>
    </div>
  );
}

export default App;
