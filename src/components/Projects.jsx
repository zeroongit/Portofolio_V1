import { motion } from "framer-motion";

const techLogos = [
  { name: "React", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "Next.js", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
  { name: "Solidity", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/solidity/solidity-original.svg" },
  { name: "PHP", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" },
  { name: "Firebase", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-original.svg" },
  { name: "MetaMask", url: "https://raw.githubusercontent.com/MetaMask/brand-resources/master/SVG/Metamask-logo.svg" },
  { name: "Google Cloud", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg" },
  { name: "Tailwind", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
  { name: "Node.js", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { name: "JavaScript", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
];

export default function Projects() {
  const projects = [
    {
      title: "E-Voting Blockchain",
      desc: "A decentralized voting system ensuring transparency and election security using Zero-Knowledge Proofs (ZKP) for voter privacy.",
      tech: ["Next.js", "Hardhat", "Solidity", "IPFS", "Circom"],
      live: "https://evoting-blockchain.vercel.app/",
      github: "https://github.com/zeroongit/evoting_blockchain",
    },
    {
      title: "Smart News Hub",
      desc: "An intelligent news portal integrating various information sources with a modern, responsive user interface.",
      tech: ["React", "Node.js", "Tailwind CSS", "Vercel"],
      live: "https://smart-news-hub.vercel.app/",
      github: "https://github.com/zeroongit/smart-news-hub",
    },
  ];

  return (
    <section id="projects" className="py-20 overflow-hidden">
      <h2 className="text-3xl font-bold text-center mb-12">Projects & Tech Stack</h2>

      {/* Scrolling Tech Logos */}
      <div className="flex mb-20 overflow-hidden group">
        <motion.div 
          className="flex space-x-12 whitespace-nowrap"
          animate={{ x: [0, -1000] }}
          transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
        >
          {[...techLogos, ...techLogos].map((logo, index) => (
            <div key={index} className="flex flex-col items-center justify-center w-20 grayscale hover:grayscale-0 transition-all duration-300">
              <img src={logo.url} alt={logo.name} className="h-12 w-12 object-contain" />
              <span className="text-[10px] text-gray-500 mt-2">{logo.name}</span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Projects Cards */}
      <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto px-6">
        {projects.map((p, i) => (
          <motion.div
            key={i}
            className="bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 p-8 shadow-xl"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-3 text-cyan-400">{p.title}</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">{p.desc}</p>
            <div className="flex flex-wrap gap-2 mb-6">
              {p.tech.map((t, index) => (
                <span key={index} className="text-xs bg-cyan-900/30 text-cyan-300 px-3 py-1 rounded-full border border-cyan-500/30">
                  {t}
                </span>
              ))}
            </div>
            <div className="flex gap-4">
              <a href={p.live} target="_blank" rel="noreferrer" className="bg-cyan-500 hover:bg-cyan-600 text-white px-4 py-2 rounded-lg text-sm transition">Live Demo</a>
              <a href={p.github} target="_blank" rel="noreferrer" className="border border-white/20 hover:bg-white/10 text-white px-4 py-2 rounded-lg text-sm transition">GitHub</a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}