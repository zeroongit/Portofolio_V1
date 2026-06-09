import React, { useState } from "react";
import SplitText from "./SplitText"; 
import ProfileCard from "./ProfileCard"; 
import { X, Download } from "lucide-react"; 

export default function Hero() {
  const [isCVOpen, setIsCVOpen] = useState(false);
  const cvUrl = "/CV H. KHARIS PRAMUDITA 2026.pdf"; 

  return (
    <section id="home" className="w-full min-h-screen flex items-center justify-center px-6 md:px-8 bg-transparent relative overflow-hidden pt-28 md:pt-0">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center max-w-6xl w-full z-10">
        
        {/* 1. PERKENALAN */}
        <div className="order-1 md:order-1 md:col-span-7 space-y-6 text-left relative z-30">
          <h1 className="text-3xl md:text-6xl font-bold leading-tight text-white">
            <SplitText
              text="Hi, I'm Habibullah Kharis Pramudita"
              className="text-3xl md:text-6xl font-bold leading-tight"
              delay={50}
              duration={0.5}
              ease="power3.out"
              splitType="chars"
              from={{ opacity: 0, y: 40 }}
              to={{ opacity: 1, y: 0 }}
            />
          </h1>
          <p className="text-base md:text-xl text-gray-400 max-w-lg">
            A passionate <span className="text-cyan-400 font-semibold">Software Engineer & Blockchain Developer</span> focused on building secure decentralized applications and high-performance web systems.
          </p>
          
          {/* Tombol Aksi */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <a 
              href="#projects" 
              className="bg-cyan-500 hover:bg-cyan-600 text-white px-5 py-2.5 md:px-6 md:py-3 rounded-full text-sm font-medium transition-all shadow-lg shadow-cyan-500/20"
            >
              View My Work
            </a>
            <a 
              href="#contact" 
              className="border border-white/20 hover:bg-white/5 text-white px-5 py-2.5 md:px-6 md:py-3 rounded-full text-sm font-medium transition-all"
            >
              Contact Me
            </a>
            <button 
              onClick={() => setIsCVOpen(true)}
              className="border border-white/20 bg-white/5 hover:bg-white/10 px-5 py-2.5 md:px-6 md:py-3 rounded-full inline-flex items-center gap-2 text-sm font-medium text-cyan-400 hover:text-cyan-300 transition-all cursor-pointer"
            >
              <span>📄</span> View Resume
            </button>
          </div>
        </div>

        {/* 2. KANAN - PROFILE CARD (FULL ATTRIBUTES) */}
        <div className="order-2 md:order-2 md:col-span-5 w-full flex items-center justify-center relative z-20">
          <ProfileCard
            name="Kharis Pramudita"
            title="Software & Blockchain Engineer"
            handle="zeroongit"
            status="🟢 Online"
            contactText="Hire Me"
            avatarUrl="/profile.jpg"
            miniAvatarUrl="/profile.jpg"
            showUserInfo={true} // Set true agar info bar nama & tombol di bawah kartu muncul
            enableTilt={true}
            enableMobileTilt={true} // Aktifkan giroskop agar ikut goyang saat HP dimiringkan
            mobileTiltSensitivity={5}
            behindGlowEnabled={true}
            behindGlowColor="rgba(34, 211, 238, 0.4)" // Efek pancaran glow warna Cyan di belakang kartu
            behindGlowSize="60%"
            // Mengambil aset tekstur resmi dari server React Bits agar efek hologramnya keluar
            iconUrl="/iconpattern.png"
            grainUrl="https://reactbits.dev/assets/demo/grain.png"
            innerGradient="linear-gradient(145deg, rgba(34, 211, 238, 0.15) 0%, rgba(15, 23, 42, 0.6) 100%)"
            onContactClick={() => {
              const contactSection = document.getElementById("contact");
              contactSection?.scrollIntoView({ behavior: "smooth" });
            }}
            className="max-w-full"
          />
        </div>
        
      </div>

      {/* WINDOW MODAL POP-UP: PDF PREVIEW */}
      {isCVOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-3 md:p-4 bg-black/90 backdrop-blur-sm animate-fade-in">
          <div className="bg-[#0b0c16] border border-white/10 w-full max-w-4xl h-[85vh] rounded-3xl flex flex-col overflow-hidden shadow-2xl">
            <div className="flex justify-between items-center px-4 py-3 md:px-6 md:py-4 border-b border-white/5 bg-white/5 gap-2">
              <div className="flex items-center gap-1.5 min-w-0">
                <span className="text-cyan-400 font-mono text-[10px] sm:text-xs flex-shrink-0 hidden xs:inline">PREVIEW //</span>
                <h3 className="text-xs md:text-sm font-semibold text-white truncate max-w-[110px] vs:max-w-[150px] sm:max-w-xs">
                  CV H. KHARIS PRAMUDITA 2026.pdf
                </h3>
              </div>
              <div className="flex items-center gap-2 flex-shrink-0">
                <a href={cvUrl} download className="flex items-center gap-1 text-[10px] md:text-xs bg-cyan-500 hover:bg-cyan-600 text-white px-2.5 py-1.5 md:px-4 md:py-2 rounded-full font-medium transition">
                  <Download size={12} className="md:w-3.5 md:h-3.5" /> <span>Download</span>
                </a>
                <button onClick={() => setIsCVOpen(false)} className="text-gray-400 hover:text-white p-1.5 rounded-full hover:bg-white/5 transition flex-shrink-0">
                  <X size={18} className="md:w-5 md:h-5" />
                </button>
              </div>
            </div>
            <div className="flex-1 bg-[#121324] p-2">
              <iframe src={`${cvUrl}#toolbar=0`} className="w-full h-full rounded-2xl border border-white/5" title="CV Preview" />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}