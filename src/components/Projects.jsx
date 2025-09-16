export default function Projects() {
  const projects = [
    {
      title: "Smart News Hub",
      desc: "A modern news portal with React, Node.js, and Vercel.",
    },
    {
      title: "Portfolio V2",
      desc: "This website you’re looking at, built with React + Tailwind.",
    },
  ]

  return (
    <section id="projects" className="bg-gray-100 py-20 px-6">
      <h2 className="text-3xl font-bold text-center mb-12">Projects</h2>
      <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {projects.map((p, i) => (
          <div key={i} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition">
            <h3 className="text-xl font-semibold mb-2">{p.title}</h3>
            <p className="text-gray-600">{p.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
