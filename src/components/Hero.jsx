import React, { useState } from "react";
import SplitText from "./SplitText"; 
import Lanyard from "./Lanyard"; 
import { X, Download } from "lucide-react"; // Import ikon bantuan

export default function Hero() {
  const [isCVOpen, setIsCVOpen] = useState(false);
  const cvUrl = "/CV H. KHARIS PRAMUDITA 2026.pdf"; // Path file CV Anda di folder public

  return (
    <section id="home" className="w-full min-h-screen flex items-center justify-center px-8 bg-transparent relative overflow-hidden">
      <div className="grid md:grid-cols-12 gap-12 items-center max-w-6xl w-full z-10">
        <div className="md:col-span-7 space-y-6 text-left order-1 relative z-30">
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
          
          {/* Baris Tombol Aksi */}
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
      
        <div className="md:col-span-5 w-full h-[50vh] md:h-[65vh] flex items-center justify-center relative min-h-[400px]">
          <Lanyard position={[0, 0, 20]} gravity={[0, -40, 0]} transparent={true} frontImage="/profile.jpg" imageFit="cover" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-cyan-500/10 blur-[100px] rounded-full pointer-events-none z-0" />
        </div>
      </div>

      {/* ─── WINDOW MODAL POP-UP: PDF PREVIEW (FIXED MOBILE) ─── */}
      {isCVOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-3 md:p-4 bg-black/90 backdrop-blur-sm animate-fade-in">
          <div className="bg-[#0b0c16] border border-white/10 w-full max-w-4xl h-[85vh] rounded-3xl flex flex-col overflow-hidden shadow-2xl">
            
            {/* Header Modal - Diberikan px-4 agar hemat ruang di HP */}
            <div className="flex justify-between items-center px-4 py-3 md:px-6 md:py-4 border-b border-white/5 bg-white/5 gap-2">
              
              {/* Sisi Kiri: Judul File (Dipaksa truncate ketat di HP) */}
              <div className="flex items-center gap-1.5 min-w-0">
                <span className="text-cyan-400 font-mono text-[10px] sm:text-xs flex-shrink-0 hidden xs:inline">
                  PREVIEW //
                </span>
                <h3 className="text-xs md:text-sm font-semibold text-white truncate max-w-[110px] vs:max-w-[150px] sm:max-w-xs">
                  CV H. KHARIS PRAMUDITA 2026.pdf
                </h3>
              </div>

              {/* Sisi Kanan: Tombol Aksi (Diberikan flex-shrink-0 agar tidak mengecil/hilang) */}
              <div className="flex items-center gap-2 flex-shrink-0">
                {/* Tombol Download */}
                <a 
                  href={cvUrl}
                  download
                  className="flex items-center gap-1 text-[10px] md:text-xs bg-cyan-500 hover:bg-cyan-600 text-white px-2.5 py-1.5 md:px-4 md:py-2 rounded-full font-medium transition"
                >
                  <Download size={12} className="md:w-3.5 md:h-3.5" /> 
                  <span>Download</span>
                </a>
                
                {/* Tombol Tutup Silang (X) */}
                <button 
                  onClick={() => setIsCVOpen(false)}
                  className="text-gray-400 hover:text-white p-1.5 rounded-full hover:bg-white/5 transition flex-shrink-0"
                >
                  <X size={18} className="md:w-5 md:h-5" />
                </button>
              </div>

            </div>

            {/* Body Preview */}
            <div className="flex-1 bg-[#121324] p-2">
              <iframe 
                src={`${cvUrl}#toolbar=0`} 
                className="w-full h-full rounded-2xl border border-white/5" 
                title="CV Preview" 
              />
            </div>

          </div>
        </div>
      )}
    </section>
  );
}