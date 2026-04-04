import { Link } from 'react-router-dom'

export default function Location() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────── */}
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow page-hero__eyebrow">Find Us</p>
          <h1 className="page-hero__title">Locations</h1>
          <div className="divider" />
          <p className="page-hero__lead">
            Our original studio is based in Seattle, WA.
          </p>
        </div>
      </section>

      {/* ── Main location ────────────────────────────────── */}
      <section className="section section--white">
        <div className="container">
          <div className="grid-2">
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div>
                <p className="eyebrow mb-2">Home Studio</p>
                <h2>Seattle, Washington</h2>
                <div className="divider" />
              </div>
              <p style={{ color: 'var(--text-muted)' }}>
                The SASHX studio is located in Seattle, WA. Sessions are conducted in our fully equipped private studio designed to support your practice with all necessary equipment including ballet bar, ottoman, and hanging grippers.
              </p>
              <div style={{ background: 'var(--bg-alt)', borderRadius: 'var(--radius)', padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <p style={{ fontSize: '0.72rem', fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--text-muted)' }}>Studio Details</p>
                <p style={{ fontSize: '0.9rem' }}>Seattle, WA</p>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Exact address provided upon booking</p>
              </div>
              <Link to="/book-a-session" className="btn btn-primary" style={{ alignSelf: 'flex-start' }}>
                Book a Session
              </Link>
            </div>

            {/* Map placeholder */}
            <div style={{
              background: 'var(--bg-deep)',
              borderRadius: 'var(--radius)',
              minHeight: '360px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.75rem',
              border: '1px solid var(--border)',
            }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: 'var(--accent-pale)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: 'var(--accent)' }} />
              </div>
              <p style={{ fontFamily: 'var(--serif)', fontSize: '1.1rem' }}>Seattle, WA</p>
              <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Pacific Northwest</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Find nearby ──────────────────────────────────── */}
      <section className="section section--alt">
        <div className="container text-center" style={{ maxWidth: '580px' }}>
          <p className="eyebrow mb-2">Coming Soon</p>
          <h2 style={{ marginBottom: '1rem' }}>Find a Studio Near You</h2>
          <div className="divider divider--center" />
          <p style={{ color: 'var(--text-muted)', marginBottom: '2rem' }}>
            We are growing our network of certified SASHX instructors across the country. A studio locator is coming soon — enter your area to find the closest SASHX facility near you.
          </p>
          <div style={{ display: 'flex', gap: '0.75rem', maxWidth: '380px', margin: '0 auto' }}>
            <input
              type="text"
              placeholder="Enter your zip code"
              style={{
                flex: 1,
                padding: '0.75rem 1rem',
                border: '1px solid var(--border)',
                borderRadius: 'var(--radius)',
                background: 'var(--white)',
                fontFamily: 'var(--sans)',
                fontSize: '0.9rem',
                color: 'var(--text)',
                outline: 'none',
              }}
              disabled
            />
            <button className="btn btn-primary" disabled style={{ opacity: 0.5 }}>
              Search
            </button>
          </div>
          <p style={{ fontSize: '0.75rem', color: 'var(--text-light)', marginTop: '1rem' }}>
            Location finder functionality coming soon.
          </p>
        </div>
      </section>

      {/* ── Interested in hosting ─────────────────────────── */}
      <section className="section section--white">
        <div className="container text-center" style={{ maxWidth: '560px' }}>
          <p className="eyebrow mb-2">Expand SASHX</p>
          <h2 style={{ marginBottom: '1rem' }}>Bring SASHX to Your Studio</h2>
          <div className="divider divider--center" />
          <p style={{ color: 'var(--text-muted)', marginBottom: '2rem' }}>
            Are you a fitness instructor or studio owner interested in bringing the SASHX method to your community? We offer 1-on-1 training to certify new instructors.
          </p>
          <Link to="/recruit" className="btn btn-outline">Become an Instructor</Link>
        </div>
      </section>
    </>
  )
}
