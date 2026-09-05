import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Menu, X, Heart } from 'lucide-react'
import { orgName } from '../data/content.js'

const links = [
  { to: '/about', label: 'About' },
  { to: '/programs', label: 'Programs' },
  { to: '/stories', label: 'Impact Stories' },
  { to: '/updates', label: 'Updates' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-canvas/95 backdrop-blur border-b border-forest/10">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <NavLink to="/" className="flex items-center gap-2 font-display text-lg font-semibold text-forest-dark">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-forest text-gold-light">
            <Heart size={16} strokeWidth={2.5} />
          </span>
          {orgName}
        </NavLink>

        <nav className="hidden md:flex items-center gap-8 font-body text-[15px]">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              className={({ isActive }) =>
                `transition-colors hover:text-forest-dark ${isActive ? 'text-forest-dark font-medium' : 'text-ink/70'}`
              }
            >
              {l.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden md:block">
          <NavLink
            to="/donate"
            className="inline-flex items-center rounded bg-gold px-5 py-2.5 font-medium text-forest-dark transition-colors hover:bg-gold-dark hover:text-white"
          >
            Donate Now
          </NavLink>
        </div>

        <button
          className="md:hidden text-forest-dark"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {open && (
        <nav className="md:hidden border-t border-forest/10 bg-canvas px-5 py-4 flex flex-col gap-4">
          {links.map((l) => (
            <NavLink key={l.to} to={l.to} onClick={() => setOpen(false)} className="text-ink/80 text-[15px]">
              {l.label}
            </NavLink>
          ))}
          <NavLink
            to="/donate"
            onClick={() => setOpen(false)}
            className="inline-flex justify-center rounded bg-gold px-5 py-3 font-medium text-forest-dark"
          >
            Donate Now
          </NavLink>
        </nav>
      )}
    </header>
  )
}

