import { useState, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'

const links = [
  { to: '/about',         label: 'About' },
  { to: '/founder-story', label: 'Founder' },
  { to: '/book-a-session',label: 'Schedule' },
  { to: '/retreats',      label: 'Retreats' },
  { to: '/videos',        label: 'Videos' },
  { to: '/location',      label: 'Locations' },
  { to: '/faqs',          label: 'FAQ' },
  { to: '/recruit',       label: 'Recruitment' },
  { to: '/blog',          label: 'Blog' },
  { to: '/contact',       label: 'Contact' },
]

export default function Nav() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => { setOpen(false) }, [pathname])

  return (
    <>
    <header style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 101,
      backgroundColor: scrolled ? 'rgba(244,241,235,0.96)' : 'rgba(244,241,235,0.80)',
      backdropFilter: 'blur(12px)',
      borderBottom: scrolled ? '1px solid var(--border)' : '1px solid transparent',
      transition: 'all 0.35s ease',
    }}>
      <nav style={{
        width: 'min(1160px, 92vw)',
        marginInline: 'auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: '64px',
      }}>
        {/* Logo */}
        <Link to="/" style={{
          fontFamily: 'var(--serif)',
          fontSize: '1.5rem',
          fontWeight: 400,
          letterSpacing: '0.06em',
          color: 'var(--text)',
        }}>
          SASHX
        </Link>

        {/* Desktop links */}
        <div style={{
          display: 'flex',
          gap: '1.75rem',
          alignItems: 'center',
        }} className="nav-desktop">
          {links.map(l => (
            <NavLink
              key={l.to}
              to={l.to}
              style={({ isActive }) => ({
                fontFamily: 'var(--sans)',
                fontSize: '0.72rem',
                fontWeight: 500,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: isActive ? 'var(--accent)' : 'var(--text-muted)',
                transition: 'color 0.2s',
              })}
            >
              {l.label}
            </NavLink>
          ))}
          <Link to="/book-a-session" className="btn btn-primary" style={{ fontSize: '0.68rem', padding: '0.55rem 1.25rem' }}>
            Book
          </Link>
        </div>

        {/* Hamburger */}
        <button
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          style={{
            display: 'none',
            flexDirection: 'column',
            gap: '5px',
            padding: '4px',
          }}
          className="nav-hamburger"
        >
          {[0,1,2].map(i => (
            <span key={i} style={{
              display: 'block',
              width: '22px',
              height: '1px',
              background: 'var(--text)',
              transition: 'all 0.3s',
              transformOrigin: 'center',
              transform: open && i === 0 ? 'rotate(45deg) translate(4px, 4px)'
                       : open && i === 1 ? 'scaleX(0)'
                       : open && i === 2 ? 'rotate(-45deg) translate(4px, -4px)'
                       : 'none',
            }} />
          ))}
        </button>
      </nav>

      <style>{`
        @media (max-width: 900px) {
          .nav-desktop { display: none !important; }
          .nav-hamburger { display: flex !important; }
        }
      `}</style>
    </header>

      {/* Mobile drawer — outside <header> to escape its stacking context */}
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 100,
        background: 'var(--bg)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        overflowY: 'auto',
        transition: 'opacity 0.3s ease, visibility 0.3s ease',
        opacity: open ? 1 : 0,
        visibility: open ? 'visible' : 'hidden',
        pointerEvents: open ? 'auto' : 'none',
      }}>
        {links.map(l => (
          <NavLink
            key={l.to}
            to={l.to}
            style={({ isActive }) => ({
              fontFamily: 'var(--serif)',
              fontSize: 'clamp(1.6rem, 6vw, 2.2rem)',
              fontWeight: 400,
              color: isActive ? 'var(--accent)' : 'var(--text)',
              padding: '0.65rem 0',
              width: '80vw',
              textAlign: 'center',
              borderBottom: '1px solid var(--border)',
            })}
          >
            {l.label}
          </NavLink>
        ))}
        <Link to="/book-a-session" className="btn btn-primary" style={{ marginTop: '2rem' }}>
          Book a Session
        </Link>
      </div>
    </>
  )
}
