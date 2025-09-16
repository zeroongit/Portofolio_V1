import React from "react";
import SplitText from "./SplitText"; 

export default function Hero() {
  return (
    <section className="w-full min-h-screen flex items-center justify-center bg-gray-50 px-8">
      <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl">
        
        {/* Kiri - Perkenalan */}
        <div className="space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            <SplitText>Hi, I’m Habibullah Kharis Pramudita</SplitText>
          </h1>
          <p className="text-lg text-gray-600">
            I’m a <span className="font-semibold">Fullstack Developer</span> passionate
            about building modern web applications, blending clean design with
            powerful functionality.
          </p>
          <button className="px-6 py-3 bg-blue-600 text-white rounded-2xl shadow-md hover:bg-blue-700 transition">
            Let’s Connect
          </button>
        </div>

        {/* Kanan - Foto */}
        <div className="flex justify-center">
          <img
            src="../assets/profile.jpg"
            alt="My profile"
            className="w-72 h-72 object-cover rounded-full shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}
