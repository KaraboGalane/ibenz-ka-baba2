import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { HiMenu, HiX } from 'react-icons/hi'
import { useScrollPosition } from '../hooks/useScrollPosition'
import { useLockBodyScroll } from '../hooks/useLockBodyScroll'
import { navLinks } from '../data/navLinks'
import StarEmblem from './StarEmblem'

export default function Navbar() {
  const scrolled = useScrollPosition(30)
  const [open, setOpen] = useState(false)
  useLockBodyScroll(open)

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled || open
          ? 'bg-ink-900/95 backdrop-blur-md shadow-deep border-b border-white/5'
          : 'bg-gradient-to-b from-ink-900/70 to-transparent'
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
        <Link to="/" onClick={() => setOpen(false)} className="flex items-center gap-2.5 group">
          <StarEmblem className="w-7 h-7 text-gold transition-transform duration-500 group-hover:rotate-180" />
          <span className="font-wordmark text-lg sm:text-xl tracking-wide text-cloud">
            iBenz ka Baba
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-9">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `relative font-body text-sm uppercase tracking-wider transition-colors duration-300 after:absolute after:-bottom-2 after:left-0 after:h-px after:bg-gold after:transition-all after:duration-300 ${
                  isActive
                    ? 'text-gold after:w-full'
                    : 'text-cloud/80 after:w-0 hover:text-gold hover:after:w-full'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Link to="/booking" className="btn-gold !py-2.5 !px-6 text-xs">
            Book Now
          </Link>
        </div>

        <button
          aria-label={open ? 'Close menu' : 'Open menu'}
          className="lg:hidden text-cloud text-2xl p-1"
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <HiX /> : <HiMenu />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: 'easeInOut' }}
            className="lg:hidden overflow-hidden border-t border-white/5 bg-ink-900"
          >
            <div className="flex flex-col gap-1 px-6 py-6">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `py-3 font-body text-base uppercase tracking-wide border-b border-white/5 ${
                      isActive ? 'text-gold' : 'text-cloud/80'
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
              <Link
                to="/booking"
                onClick={() => setOpen(false)}
                className="btn-gold mt-5 w-full"
              >
                Book Now
              </Link>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  )
}
