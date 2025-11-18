export default function Footer() {
  return (
    <footer className="py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-6">
          <p className="text-slate-300 text-sm">© {new Date().getFullYear()} Alex. All rights reserved.</p>
          <div className="text-slate-400 text-sm">
            Built with React, Tailwind, and a Spline 3D touch.
          </div>
        </div>
      </div>
    </footer>
  )
}
