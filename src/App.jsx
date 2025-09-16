import { useState } from "react"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import About from "./components/About"
import Projects from "./components/Projects"
import Contact from "./components/Contact"
import Particles from "./components/Particles"
import WelcomeScreen from "./components/WelcomeScreen"

function App() {
  const [showWelcome, setShowWelcome] = useState(true)

  return (
    <div className="relative w-full min-h-screen bg-black text-white overflow-hidden">
      {showWelcome ? (
        <WelcomeScreen onLoadingComplete={() => setShowWelcome(false)} />
      ) : (
        <>
          {/* Background Particles di root, full screen */}
          <div
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              zIndex: -1,
            }}
          >
            <Particles
              particleColors={["#ffffff", "#ffffff"]}
              particleCount={200}
              particleSpread={20}
              speed={0.1}
              particleBaseSize={100}
              moveParticlesOnHover={true}
              alphaParticles={false}
              disableRotation={false}
            />
          </div>

          {/* Konten Website */}
          <Navbar />
          <main>
            <Hero />
            <About />
            <Projects />
            <Contact />
          </main>
        </>
      )}
    </div>
  )
}

export default App
