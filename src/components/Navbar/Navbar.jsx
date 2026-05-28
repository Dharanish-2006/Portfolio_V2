import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { AiFillGithub } from 'react-icons/ai'
import { CgGitFork } from 'react-icons/cg'
import { AiFillStar } from 'react-icons/ai'

const NAV_ITEMS = [
  { label: 'Home',     to: '/' },
  { label: 'About',    to: '/about' },
  { label: 'Projects', to: '/project' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  // Close drawer on route change
  useEffect(() => { setOpen(false) }, [pathname])

  return (
    <>
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        {/* Brand */}
        <Link to="/" className="nav-brand">
          D<span className="nav-brand-dot" />
        </Link>

        {/* Desktop links */}
        <ul className="nav-links">
          {NAV_ITEMS.map(({ label, to }) => (
            <li key={to}>
              <Link
                to={to}
                className={pathname === to ? 'active' : ''}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Right side */}
        <div className="nav-right">
          <a
            href="https://github.com/Dharanish-2006/portfolio"
            target="_blank"
            rel="noreferrer"
            className="nav-gh-btn"
          >
            <CgGitFork size={13} />
            <AiFillStar size={12} />
            <span>Star</span>
          </a>

          {/* Hamburger */}
          <button
            className={`nav-toggle ${open ? 'open' : ''}`}
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </nav>

      {/* Mobile overlay */}
      <div
        className={`nav-overlay ${open ? 'show' : ''}`}
        onClick={() => setOpen(false)}
      />

      {/* Mobile drawer */}
      <nav className={`nav-drawer ${open ? 'open' : ''}`}>
        {NAV_ITEMS.map(({ label, to }) => (
          <Link
            key={to}
            to={to}
            className={pathname === to ? 'active' : ''}
            onClick={() => setOpen(false)}
          >
            {label}
          </Link>
        ))}
        <a
          href="https://github.com/Dharanish-2006"
          target="_blank"
          rel="noreferrer"
          style={{ marginTop: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}
          className=""
        >
          <AiFillGithub size={16} /> GitHub
        </a>
      </nav>
    </>
  )
}
