import SplitText from "./SplitText"

const handleAnimationComplete = () => {
  console.log("All letters have animated!")
}

export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen text-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white">
      <SplitText
        text="Hello, GSAP!"
        className="text-5xl font-bold mb-4"
        delay={100}
        duration={0.6}
        ease="easeOut"
        splitType="chars"
        from={{ opacity: 0, y: 40 }}
        to={{ opacity: 1, y: 0 }}
        threshold={0.1}
        rootMargin="-100px"
        textAlign="center"
        onLetterAnimationComplete={handleAnimationComplete}
      />

      <p className="text-lg max-w-xl">
        I’m a Fullstack Developer building modern web apps with React, Tailwind, and Node.js.
      </p>
    </section>
  )
}
