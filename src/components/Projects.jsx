import { motion } from "framer-motion";

export default function Projects() {
  const projects = [
    {
      title: "Smart News Hub",
      desc: "A modern news portal with React, Node.js, and Vercel.",
      link: "https://smart-news-hub.vercel.app/",
    },
    {
      title: "Portfolio V1",
      desc: "This website you’re looking at, built with React + Tailwind.",
      link: "https://github.com/zeroongit/Portofolio_V1",
    },
  ];

  return (
    <section id="projects" className="py-20 px-6 bg-transparent">
      <h2 className="text-3xl font-bold text-center mb-12">Projects</h2>
      <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {projects.map((p, i) => (
          <motion.a
            key={i}
            href={p.link}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-transparent rounded-xl shadow-lg p-6 block cursor-pointer"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: i * 0.3 }}
            whileHover={{ scale: 1.05, boxShadow: "0px 8px 30px rgba(0,0,0,0.3)" }}
          >
            <h3 className="text-xl font-semibold mb-2">{p.title}</h3>
            <p className="text-gray-600">{p.desc}</p>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
