import React from "react";

export default function About() {
  const skills = [
    { category: "Languages", items: ["Golang", "JavaScript", "Solidity", "Python"] },
    { category: "Frameworks & Libraries", items: ["Next.js", "React", "Gin Framework", "Django", "TailwindCSS"] },
    { category: "Web3 & Cryptography", items: ["Hardhat", "Viem", "Circom", "SnarkJS", "Avalanche Fuji"] },
    { category: "Databases & Tools", items: ["PostgreSQL", "Supabase", "Docker", "Git/GitHub", "Linux (Pop!_OS)","MongoDB"] }
  ];

  return (
    <section id="about" className="py-24 px-6 relative overflow-hidden bg-transparent">
      <div className="max-w-5xl mx-auto relative z-10">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight">
            About <span className="text-cyan-400">Me</span>
          </h2>
          <div className="h-1 w-20 bg-cyan-500 mx-auto mt-4 rounded-full shadow-lg shadow-cyan-500/50" />
        </div>

        <div className="grid md:grid-cols-12 gap-8 items-start">
          
          {/* KIRI: Profile Summary & Experience (Ambil 7 Kolom) */}
          <div className="md:col-span-7 space-y-8">
            
            {/* Glassmorphic Profile Card */}
            <div className="bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-3xl shadow-xl hover:border-cyan-500/20 transition-all duration-300">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <span className="text-cyan-400">🚀</span> Professional Summary
              </h3>
              <p className="text-gray-300 text-base md:text-lg leading-relaxed text-justify">
                I am a driven <span className="text-cyan-400 font-semibold">Software Engineer & Blockchain Developer</span> with a strong focus on engineering high-performance web systems and secure decentralized architectures. I specialize in bridging the gap between intricate cryptographic protocols—such as <span className="text-cyan-400 font-semibold">Zero-Knowledge Proofs (ZKP)</span>—and clean, intuitive full-stack interfaces that deliver exceptional user experiences.
              </p>
            </div>

            {/* Experience Timeline */}
            <div className="bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-3xl shadow-xl">
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                <span className="text-cyan-400">💼</span> Experience
              </h3>
              
              <div className="relative border-l border-white/10 pl-6 ml-2">
                {/* Timeline Node */}
                <div className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-cyan-500 shadow-lg shadow-cyan-500/50 border-2 border-black" />
                
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2">
                  <div>
                    <h4 className="text-lg font-bold text-white">Fullstack Developer Intern</h4>
                    <p className="text-sm text-cyan-300">Winnicode Garuda Indonesia</p>
                  </div>
                  <span className="text-xs font-mono bg-white/10 text-gray-300 px-3 py-1 rounded-full mt-1 sm:mt-0">
                    6 Months
                  </span>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed text-justify">
                  Contributed to building and scaling production-ready enterprise applications. Collaborated closely across the stack to build fluid, responsive front-end components while optimizing backend business logic, database management schema, and RESTful API structures.
                </p>
              </div>
            </div>
          </div>

          {/* KANAN: Technical Capabilities Grid (Ambil 5 Kolom) */}
          <div className="md:col-span-5 bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-3xl shadow-xl h-full">
            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
              <span className="text-cyan-400">⚡</span> Core Tech Stack
            </h3>
            
            <div className="space-y-6">
              {skills.map((skillGroup, index) => (
                <div key={index} className="space-y-2">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-cyan-400/80 font-mono">
                    {skillGroup.category}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.items.map((skill, i) => (
                      <span 
                        key={i} 
                        className="text-xs bg-white/5 hover:bg-cyan-500/10 hover:border-cyan-500/40 border border-white/10 text-gray-200 px-3 py-1.5 rounded-xl transition-all duration-200"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}