import React from "react";
import SplitText from "./SplitText"; 

export default function Hero() {
  return (
    <section id="hero" className="w-full min-h-screen flex items-center justify-center px-8-transparent">
      <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl">
        
        {/* Kiri - Perkenalan */}
        <div className="space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            <SplitText
            text="Hi, I’m Habibullah Kharis Pramudita"
            className="text-4xl md:text-5xl font-bold leading-tight"
            delay={100}
            duration={0.6}
            ease="power3.out"
            splitType="chars"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="-100px"
            />
          </h1>
          <p className="text-lg text-gray-600">
            I’m a <span className="font-semibold">Fullstack Developer</span> passionate
            about building modern web applications, blending clean design with
            powerful functionality.
          </p>
        </div>

        {/* Kanan - Foto */}
        <div className="flex justify-center">
          <img
            src="/profile.jpg"
            alt="My profile"
            className="w-72 h-72 object-cover rounded-full shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}
