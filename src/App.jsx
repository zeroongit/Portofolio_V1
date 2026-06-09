import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import WelcomeScreen from "./components/WelcomeScreen";
import Lightfall from './components/Lightfall';

function App() {
  const [showWelcome, setShowWelcome] = useState(true);

  return (
    <div className="relative w-full min-h-screen bg-[#030014] text-white overflow-x-hidden">
      {showWelcome ? (
        <WelcomeScreen onLoadingComplete={() => setShowWelcome(false)} />
      ) : (
        <>
          {/* BACKGROUND GLOBAL: Efek Lightfall interaktif yang mengunci di balik seluruh layar */}
          <div
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              zIndex: 0, // Berada di paling bawah
              pointerEvents: "none", // Agar tidak menghalangi tarikan mouse pada Lanyard 3D Anda
            }}
          >
            <Lightfall
              colors={['#00f2fe', '#4facfe', '#000000']} // Tema warna Cyan khas Web3/Blockchain
              backgroundColor="#020208" // Warna dasar sangat gelap agar teks putih kontras dan terbaca
              speed={0.4}
              streakCount={3}
              streakWidth={1.5}
              streakLength={1.2}
              glow={1.5}
              density={0.5}
              twinkle={1}
              zoom={2.5}
              backgroundGlow={0.3}
              opacity={0.6} // Opacity diturunkan sedikit agar tidak terlalu menyilaukan mata
              mouseInteraction={true}
              mouseStrength={0.6}
              mouseRadius={1.2}
              mouseDampening={0.15}
            />
          </div>

          {/* KONTEN UTAMA: Diberikan z-index lebih tinggi agar berada di atas background shader */}
          <div className="relative z-10 w-full">
            <Navbar />
            <main>
              <Hero />
              <About />
              <Projects />
              <Contact />
            </main>
          </div>
        </>
      )}
    </div>
  );
}

export default App;