import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import WelcomeScreen from "./components/WelcomeScreen";
import Particles from "./components/Particles";

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

          <Particles
            particleColors={["#ffffff"]}
            particleCount={200}
            particleSpread={10}
            speed={0.1}
            particleBaseSize={100}
            moveParticlesOnHover
            alphaParticles={false}
            disableRotation={false}
            pixelRatio={1}
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