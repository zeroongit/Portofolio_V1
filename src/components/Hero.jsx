import React from "react";
import SplitText from "./SplitText"; 

export default function Hero() {
  return (
    <section id="home" className="w-full min-h-screen flex items-center justify-center px-8 bg-transparent">
      <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl w-full">
        
        {/* Kiri - Perkenalan */}
        <div className="space-y-6 text-left">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight text-white">
            <SplitText
              text="Hi, I'm Habibullah Kharis Pramudita"
              className="text-4xl md:text-6xl font-bold leading-tight"
              delay={50}
              duration={0.5}
              ease="power3.out"
              splitType="chars"
              from={{ opacity: 0, y: 40 }}
              to={{ opacity: 1, y: 0 }}
            />
          </h1>
          <p className="text-lg md:text-xl text-gray-400 max-w-lg">
            A passionate <span className="text-cyan-400 font-semibold">Software Engineer & Blockchain Developer</span> focused on building secure decentralized applications and high-performance web systems.
          </p>
          <div className="flex gap-4 pt-4">
            <a 
              href="#projects" 
              className="bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-3 rounded-full font-medium transition-all shadow-lg shadow-cyan-500/20"
            >
              View My Work
            </a>
            <a 
              href="#contact" 
              className="border border-white/20 hover:bg-white/5 text-white px-6 py-3 rounded-full font-medium transition-all"
            >
              Contact Me
            </a>
          </div>
        </div>

        {/* Kanan - Foto */}
        <div className="flex justify-center md:justify-end">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
            
            <img
              src="/profile.jpg"
              alt="Habibullah Kharis Pramudita"
              className="relative w-64 h-64 md:w-80 md:h-80 object-cover rounded-full border-2 border-white/10 shadow-2xl"
            />
          </div>
        </div>
        
      </div>
    </section>
  );
}