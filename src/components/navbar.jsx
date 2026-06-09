import { useState } from "react"
import { Menu, X } from "lucide-react"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)

  const navLinks = [
    { href: "#hero", label: "Hero" },
    { href: "#about", label: "About" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ]

  return (
    <nav className="fixed top-0 left-0 w-full bg-black/80 text-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center h-16">
        {/* Logo */}
        <a href="#hero" className="text-xl font-bold tracking-wide">
          MyPortfolio
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          {navLinks.map((link, i) => (
            <a
              key={i}
              href={link.href}
              className="hover:text-cyan-400 transition"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden focus:outline-none"
          onClick={toggleMenu}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-black/95">
          <div className="flex flex-col space-y-4 px-6 py-6">
            {navLinks.map((link, i) => (
              <a
                key={i}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="hover:text-cyan-400 transition"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}
