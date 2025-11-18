import { motion } from 'framer-motion'

export function Section({ id, eyebrow, title, description, children }) {
  return (
    <section id={id} className="relative py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl"
        >
          {eyebrow && <p className="text-sm uppercase tracking-widest text-blue-300/80">{eyebrow}</p>}
          {title && <h2 className="text-3xl md:text-4xl font-bold text-white mt-2">{title}</h2>}
          {description && <p className="text-slate-300 mt-4">{description}</p>}
        </motion.div>
        <div className="mt-10">
          {children}
        </div>
      </div>
    </section>
  )
}

export function Card({ title, subtitle, children }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-6 hover:bg-white/10 transition-colors">
      {title && <h3 className="text-white font-semibold text-lg">{title}</h3>}
      {subtitle && <p className="text-slate-300 text-sm mt-1">{subtitle}</p>}
      <div className="mt-4 text-slate-200">
        {children}
      </div>
    </div>
  )
}
