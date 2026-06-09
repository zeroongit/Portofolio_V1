import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    // 1. Membuat wrapper navbar melayang di posisi atas tengah (fixed top-6 left-1/2)
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-6xl">
      
      {/* 2. Container utama dengan desain rounded-full, border tipis, dan backdrop blur transparan */}
      <div className="flex items-center justify-between px-6 py-3 bg-black/40 backdrop-blur-md rounded-full shadow-lg border border-white/10">
        
        {/* 🌐 Sisi Kiri: Logo / Nama Portofolio */}
        <div className="flex items-center gap-2 text-white font-semibold">
          <span className="text-xl text-cyan-400">🌐</span>
          <a href="#home" className="tracking-wide hover:text-cyan-400 transition">
            Habibullah.dev
          </a>
        </div>

        {/* 🖥️ Sisi Tengah: Desktop Menu Links */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-white">
          {navLinks.map((link, i) => (
            <a
              key={i}
              href={link.href}
              className="hover:text-cyan-400 transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </div>
        {/* 📱 Sisi Kanan (Mobile Only): Tombol Menu Hamburger */}
        <button
          className="md:hidden text-white focus:outline-none hover:text-cyan-400 transition-colors"
          onClick={toggleMenu}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* 📱 Mobile Dropdown Menu Panel (Disesuaikan agar rapi saat dibuka di HP) */}
      {isOpen && (
        <div className="md:hidden mt-3 w-full bg-black/80 backdrop-blur-lg border border-white/10 rounded-2xl p-4 shadow-xl animate-fade-in">
          <div className="flex flex-col space-y-4 text-center text-sm font-medium text-white">
            {navLinks.map((link, i) => (
              <a
                key={i}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="py-2 hover:text-cyan-400 transition-colors rounded-lg hover:bg-white/5"
              >
                {link.label}
              </a>
            ))}
            <hr className="border-white/10" />
          </div>
        </div>
      )}
    </nav>
  );
}