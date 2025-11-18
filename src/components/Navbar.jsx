import { useState } from 'react'
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react'

function NavLink({ href, children, onClick }) {
  return (
    <a href={href} onClick={onClick} className="text-sm md:text-base text-slate-300 hover:text-white transition-colors">
      {children}
    </a>
  )
}

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const close = () => setOpen(false)

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between rounded-xl bg-slate-900/60 backdrop-blur supports-[backdrop-filter]:bg-slate-900/40 border border-white/10 mt-4 px-4">
          <a href="#home" className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-400 shadow-lg" />
            <span className="text-white font-semibold tracking-tight">My Portfolio</span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            <NavLink href="#about">About</NavLink>
            <NavLink href="#projects">Projects</NavLink>
            <NavLink href="#skills">Skills</NavLink>
            <NavLink href="#contact">Contact</NavLink>
            <div className="h-6 w-px bg-white/10" />
            <div className="flex items-center gap-3">
              <a href="https://github.com/" target="_blank" rel="noreferrer" className="text-slate-300 hover:text-white"><Github size={18} /></a>
              <a href="https://linkedin.com/" target="_blank" rel="noreferrer" className="text-slate-300 hover:text-white"><Linkedin size={18} /></a>
              <a href="#contact" className="text-slate-300 hover:text-white"><Mail size={18} /></a>
            </div>
          </nav>

          <button className="md:hidden text-white" onClick={() => setOpen(v => !v)} aria-label="Toggle menu">
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mt-2 rounded-xl bg-slate-900/80 backdrop-blur border border-white/10 p-4 flex flex-col gap-4">
            <NavLink href="#about" onClick={close}>About</NavLink>
            <NavLink href="#projects" onClick={close}>Projects</NavLink>
            <NavLink href="#skills" onClick={close}>Skills</NavLink>
            <NavLink href="#contact" onClick={close}>Contact</NavLink>
          </div>
        </div>
      )}
    </header>
  )
}
