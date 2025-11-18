import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] flex items-center">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-8 items-center pt-24">
        <div className="text-left">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-bold tracking-tight text-white drop-shadow-[0_0_25px_rgba(59,130,246,0.4)]"
          >
            Hi, I'm Alex —
            <br />
            I craft modern web experiences.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-6 text-lg md:text-xl text-blue-100/90 max-w-xl"
          >
            Full‑stack developer focused on delightful UX, robust APIs, and playful 3D interactions.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <a href="#projects" className="px-5 py-3 rounded-xl bg-blue-500 hover:bg-blue-600 text-white font-medium shadow-lg shadow-blue-500/30 transition-colors">View Projects</a>
            <a href="#contact" className="px-5 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-medium border border-white/20 backdrop-blur transition-colors">Contact Me</a>
          </motion.div>
        </div>

        <div className="relative hidden lg:block">
          <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 via-cyan-400/10 to-purple-500/10 blur-3xl rounded-full pointer-events-none" />
          <div className="relative aspect-square rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl overflow-hidden shadow-2xl">
            <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(closest-side,rgba(59,130,246,0.15),transparent)] opacity-60" />
    </section>
  )
}
