import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { MessageSquare, Github, Linkedin, Instagram, Mail, Send } from "lucide-react"; // Pastikan lucide-react terinstall

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ipf9ajo",   
        "template_x9cegek",  
        form.current,
        "DBvrEo400U7c9Ruwq"    
      )
      .then(
        () => {
          alert("Message sent successfully! 🚀");
          form.current.reset();
        },
        (error) => {
          alert("Failed to send message ❌", error.text);
        }
      );
  };

  const socialLinks = [
    {
      name: "GitHub",
      href: "https://github.com/zeroongit", // Diarahkan ke username Anda
      icon: <Github size={20} />,
      color: "hover:text-white hover:border-white/40 hover:bg-white/5",
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/habibullah-kharis-pramudita-b0a5841bb/", // Berdasarkan nama profesional Anda
      icon: <Linkedin size={20} />,
      color: "hover:text-blue-400 hover:border-blue-400/40 hover:bg-blue-400/5",
    },
    {
      name: "Instagram",
      href: "https://instagram.com/karispramudita_",
      icon: <Instagram size={20} />,
      color: "hover:text-pink-400 hover:border-pink-400/40 hover:bg-pink-400/5",
    },
    {
      name: "WhatsApp",
      href: "https://wa.me/62895338668050",
      icon: <MessageSquare size={20} />,
      color: "hover:text-green-400 hover:border-green-400/40 hover:bg-green-400/5",
    },
  ];

  return (
    <section id="contact" className="py-24 px-6 relative overflow-hidden bg-transparent">
      <div className="max-w-5xl mx-auto relative z-10">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight">
            Contact <span className="text-cyan-400">Me</span>
          </h2>
          <div className="h-1 w-20 bg-cyan-500 mx-auto mt-4 rounded-full shadow-lg shadow-cyan-500/50" />
          <p className="text-gray-400 mt-4 max-w-md mx-auto text-sm md:text-base">
            Have a project in mind or want to discuss blockchain integration? Let's connect!
          </p>
        </div>

        <div className="grid md:grid-cols-12 gap-8 items-start">
          
          {/* KIRI: Social Channels Grid (Ambil 5 Kolom) */}
          <div className="md:col-span-5 space-y-4">
            <h3 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
              <span className="text-cyan-400">🌐</span> Connect Channels
            </h3>
            
            <div className="grid grid-cols-1 gap-3">
              {socialLinks.map((link, i) => (
                <a
                  key={i}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center justify-between p-4 bg-white/5 border border-white/10 rounded-2xl text-gray-300 transition-all duration-300 ${link.color}`}
                >
                  <div className="flex items-center gap-3">
                    {link.icon}
                    <span className="text-sm font-medium">{link.name}</span>
                  </div>
                  <span className="text-xs text-gray-500 font-mono">_connect ↗</span>
                </a>
              ))}
            </div>
          </div>

          {/* KANAN: Email Form Container (Ambil 7 Kolom) */}
          <div className="md:col-span-7 bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-3xl shadow-xl">
            <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
              <span className="text-cyan-400">✉️</span> Direct Message
            </h3>

            <form ref={form} onSubmit={sendEmail} className="space-y-4">
              <div>
                <input
                  type="text"
                  name="user_name"
                  placeholder="Your Name"
                  required
                  className="w-full p-4 bg-black/20 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 transition-all text-sm"
                />
              </div>
              
              <div>
                <input
                  type="email"
                  name="user_email"
                  placeholder="Your Email"
                  required
                  className="w-full p-4 bg-black/20 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 transition-all text-sm"
                />
              </div>

              <div>
                <textarea
                  name="message"
                  rows="5"
                  placeholder="Your Message"
                  required
                  className="w-full p-4 bg-black/20 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 transition-all text-sm resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-cyan-500 hover:bg-cyan-600 text-white font-medium p-4 rounded-xl transition-all shadow-lg shadow-cyan-500/20 flex items-center justify-center gap-2 cursor-pointer text-sm"
              >
                <Send size={16} /> Send Message
              </button>
            </form>
          </div>

        </div>

      </div>
    </section>
  );
}