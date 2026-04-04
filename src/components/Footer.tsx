import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer style={{
      background: 'var(--bg-deep)',
      borderTop: '1px solid var(--border)',
      paddingBlock: '3rem 2rem',
    }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
          gap: '2.5rem',
          marginBottom: '2.5rem',
        }}>
          {/* Brand */}
          <div>
            <p style={{ fontFamily: 'var(--serif)', fontSize: '1.4rem', marginBottom: '0.75rem' }}>SASHX</p>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
              Skeletal Alignment<br />Spinal Health Exercises
            </p>
            <p style={{ fontSize: '0.78rem', color: 'var(--text-light)', marginTop: '0.75rem', letterSpacing: '0.05em' }}>
              Seattle, WA
            </p>
          </div>

          {/* Learn */}
          <div>
            <p className="eyebrow" style={{ marginBottom: '1rem' }}>Learn</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {[
                ['/about', 'About SASHX'],
                ['/founder-story', 'Founder Story'],
                ['/faqs', 'FAQ'],
                ['/blog', 'Blog'],
              ].map(([to, label]) => (
                <Link key={to} to={to} style={{ fontSize: '0.85rem', color: 'var(--text-muted)', transition: 'color 0.2s' }}
                  onMouseEnter={e => (e.currentTarget.style.color = 'var(--text)')}
                  onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-muted)')}>
                  {label}
                </Link>
              ))}
            </div>
          </div>

          {/* Join */}
          <div>
            <p className="eyebrow" style={{ marginBottom: '1rem' }}>Join</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {[
                ['/book-a-session', 'Book a Session'],
                ['/retreats', 'Retreats'],
                ['/videos', 'Video Library'],
                ['/recruit', 'Become an Instructor'],
              ].map(([to, label]) => (
                <Link key={to} to={to} style={{ fontSize: '0.85rem', color: 'var(--text-muted)', transition: 'color 0.2s' }}
                  onMouseEnter={e => (e.currentTarget.style.color = 'var(--text)')}
                  onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-muted)')}>
                  {label}
                </Link>
              ))}
            </div>
          </div>

          {/* Connect */}
          <div>
            <p className="eyebrow" style={{ marginBottom: '1rem' }}>Connect</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {[
                ['/location', 'Locations'],
                ['/contact', 'Contact'],
              ].map(([to, label]) => (
                <Link key={to} to={to} style={{ fontSize: '0.85rem', color: 'var(--text-muted)', transition: 'color 0.2s' }}
                  onMouseEnter={e => (e.currentTarget.style.color = 'var(--text)')}
                  onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-muted)')}>
                  {label}
                </Link>
              ))}
              <a href="https://instagram.com/sashxercises/" target="_blank" rel="noopener noreferrer"
                style={{ fontSize: '0.85rem', color: 'var(--text-muted)', transition: 'color 0.2s' }}
                onMouseEnter={e => (e.currentTarget.style.color = 'var(--text)')}
                onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-muted)')}>
                Instagram
              </a>
              <a href="https://facebook.com/sashxercises" target="_blank" rel="noopener noreferrer"
                style={{ fontSize: '0.85rem', color: 'var(--text-muted)', transition: 'color 0.2s' }}
                onMouseEnter={e => (e.currentTarget.style.color = 'var(--text)')}
                onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-muted)')}>
                Facebook
              </a>
            </div>
          </div>
        </div>

        <div style={{
          borderTop: '1px solid var(--border)',
          paddingTop: '1.5rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '0.5rem',
        }}>
          <p style={{ fontSize: '0.75rem', color: 'var(--text-light)' }}>
            © {new Date().getFullYear()} SASHX. All rights reserved.
          </p>
          <p style={{ fontSize: '0.75rem', color: 'var(--text-light)' }}>
            Discover the power of precision movement.
          </p>
        </div>
      </div>
    </footer>
  )
}
