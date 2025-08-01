import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { motion } from 'framer-motion'

export default function NavBar() {
  const [open, setOpen] = useState(false)
  const [dark, setDark] = useState(false)

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }, [dark])

  useEffect(() => {
    const stored = localStorage.getItem('theme')
    if (stored === 'dark') setDark(true)
  }, [])

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `block px-3 py-2 rounded hover:bg-primary/10 ${isActive ? 'text-primary' : 'text-gray-700 dark:text-gray-200'}`

  return (
    <header className="bg-white dark:bg-gray-900 shadow">
      <div className="max-w-7xl mx-auto flex items-center justify-between p-4">
        <NavLink
          to="/"
          className="font-heading text-xl"
          onClick={() => setOpen(false)}
        >
          NovaFrame
        </NavLink>
        <motion.button
          className="md:hidden text-gray-700 dark:text-gray-200"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          animate={{ rotate: open ? 90 : 0 }}
          transition={{ duration: 0.3 }}
        >
          {open ? (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </motion.button>
        <nav className="hidden md:flex items-center gap-4">
          <NavLink to="/" className={linkClass} end>
            Home
          </NavLink>
          <NavLink to="/features" className={linkClass}>
            Features
          </NavLink>
          <NavLink to="/contact" className={linkClass}>
            Contact Us
          </NavLink>
          <button
            onClick={() => setDark(!dark)}
            className="ml-2 p-2 rounded hover:bg-primary/10 text-gray-700 dark:text-gray-200"
            aria-label="Toggle dark mode"
          >
            {dark ? (
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 2a8 8 0 100 16 8 8 0 000-16zM8 10a2 2 0 114 0 2 2 0 01-4 0z" />
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M10 2a8 8 0 017.446 10.032A6 6 0 0110 4a8 8 0 010-2z"
                  clipRule="evenodd"
                />
              </svg>
            )}
          </button>
        </nav>
      </div>
      {open && (
        <nav className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
          <NavLink
            to="/"
            className={linkClass}
            end
            onClick={() => setOpen(false)}
          >
            Home
          </NavLink>
          <NavLink
            to="/features"
            className={linkClass}
            onClick={() => setOpen(false)}
          >
            Features
          </NavLink>
          <NavLink
            to="/contact"
            className={linkClass}
            onClick={() => setOpen(false)}
          >
            Contact Us
          </NavLink>
          <button
            onClick={() => setDark(!dark)}
            className="block px-3 py-2 rounded hover:bg-primary/10 text-left w-full text-gray-700 dark:text-gray-200"
          >
            {dark ? 'Light Mode' : 'Dark Mode'}
          </button>
        </nav>
      )}
    </header>
  )
}
