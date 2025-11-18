import Navbar from './components/Navbar'
import Hero from './components/Hero'
import { Section } from './components/Section'
import Projects from './components/Projects'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-slate-100 relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(closest-side,rgba(59,130,246,0.08),transparent_70%)]" />
      <Navbar />
      <main>
        <Hero />
        <Section
          id="about"
          eyebrow="About"
          title="A bit about me"
          description="I love building fast, accessible, and fun digital experiences. My work blends performance, animation, and clean code."
        >
          <div className="grid md:grid-cols-2 gap-6">
            <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-6">
              <p className="text-slate-300">
                Over the past few years, I’ve designed and built interfaces, APIs, and systems for products across startups and agencies.
                I focus on developer experience, strong architecture, and tiny details that make software feel great.
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-6">
              <ul className="space-y-2 text-slate-300">
                <li>• Frontend: React, Tailwind, Framer Motion</li>
                <li>• Backend: FastAPI, Node, serverless</li>
                <li>• Database: MongoDB, Postgres</li>
                <li>• Tools: Vite, PNPM, Docker</li>
              </ul>
            </div>
          </div>
        </Section>

        <Section
          id="projects"
          eyebrow="Selected Work"
          title="Projects"
          description="A few highlights from recent builds."
        >
          <Projects />
        </Section>

        <Section
          id="skills"
          eyebrow="Capabilities"
          title="Skills"
          description="What I use to bring ideas to life."
        >
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { t: 'Frontend', d: 'React, Next.js, Tailwind, Animations' },
              { t: 'Backend', d: 'FastAPI, REST, Auth, Integrations' },
              { t: 'Data', d: 'MongoDB, SQL, Modeling, Caching' },
              { t: 'DevOps', d: 'Vite, CI/CD, Observability' },
              { t: 'UX', d: 'Accessibility-first, micro-interactions' },
              { t: '3D', d: 'Spline, playful scenes, performance' },
            ].map((s) => (
              <div key={s.t} className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-6">
                <h3 className="text-white font-semibold">{s.t}</h3>
                <p className="text-slate-300 mt-2">{s.d}</p>
              </div>
            ))}
          </div>
        </Section>

        <Section
          id="contact"
          eyebrow="Contact"
          title="Let’s work together"
          description="Send a quick note and I’ll get back to you."
        >
          <form onSubmit={(e) => e.preventDefault()} className="grid md:grid-cols-2 gap-6">
            <input placeholder="Name" className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500" />
            <input placeholder="Email" className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500" />
            <textarea placeholder="Your message" rows={5} className="md:col-span-2 w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500" />
            <button className="md:col-span-2 justify-self-start px-5 py-3 rounded-xl bg-blue-500 hover:bg-blue-600 text-white font-medium shadow-lg shadow-blue-500/30 transition-colors">Send Message</button>
          </form>
        </Section>

        <Footer />
      </main>
    </div>
  )
}

export default App
