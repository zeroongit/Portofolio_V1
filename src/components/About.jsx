export default function About() {
  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10 text-white">About Me</h2>
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-3xl">
          <p className="text-gray-300 text-lg leading-relaxed text-center">
            I am a passionate Software Engineer and Blockchain Developer based in West Jakarta. 
            My expertise lies in developing decentralized solutions, particularly in e-voting systems 
            using Zero-Knowledge Proofs. I enjoy bridging the gap between complex blockchain 
            protocols and intuitive user interfaces.
          </p>
        </div>
      </div>
    </section>
  );
}