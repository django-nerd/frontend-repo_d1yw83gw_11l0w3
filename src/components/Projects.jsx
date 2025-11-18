import { motion } from 'framer-motion'
import { Card } from './Section'
import { ExternalLink } from 'lucide-react'

const projects = [
  {
    title: 'Interactive 3D Showcase',
    desc: 'A playful hero powered by Spline with smooth Framer Motion transitions.',
    tags: ['React', 'Spline', 'Framer Motion'],
    link: '#'
  },
  {
    title: 'API-driven Dashboard',
    desc: 'Live metrics, real-time updates, and crisp UI built with Tailwind.',
    tags: ['FastAPI', 'Tailwind', 'Charts'],
    link: '#'
  },
  {
    title: 'E-commerce Starter',
    desc: 'Full-stack template with authentication, product catalog, and cart.',
    tags: ['MongoDB', 'Auth', 'Stripe'],
    link: '#'
  }
]

export default function Projects() {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      variants={{ hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0 } }}
      transition={{ duration: 0.5 }}
      className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
    >
      {projects.map((p, i) => (
        <Card key={i} title={p.title} subtitle={p.desc}>
          <div className="mt-4 flex flex-wrap gap-2">
            {p.tags.map((t) => (
              <span key={t} className="px-2 py-1 text-xs rounded-full bg-blue-500/10 text-blue-200 border border-blue-400/20">{t}</span>
            ))}
          </div>
          <a href={p.link} className="inline-flex items-center gap-2 mt-4 text-blue-300 hover:text-white transition-colors">
            <ExternalLink size={16} />
            Visit project
          </a>
        </Card>
      ))}
    </motion.div>
  )
}
