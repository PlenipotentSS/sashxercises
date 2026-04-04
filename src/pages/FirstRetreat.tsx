import { Link } from 'react-router-dom'

export default function FirstRetreat() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <Link to="/retreats" style={{ fontSize: '0.75rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--accent)', display: 'inline-block', marginBottom: '1.5rem' }}>
            ← Back to All Events
          </Link>
          <p className="eyebrow page-hero__eyebrow">Retreat · Summer 2025</p>
          <h1 className="page-hero__title">SASHX First Retreat</h1>
          <div className="divider" />
        </div>
      </section>

      <section className="section section--white">
        <div className="container">
          <div className="grid-2" style={{ maxWidth: '900px', margin: '0 auto' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              <div style={{ background: 'var(--bg-alt)', padding: '1.5rem', borderRadius: 'var(--radius)' }}>
                <p className="eyebrow mb-2">Event Details</p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <p style={{ fontSize: '0.9rem' }}><span style={{ color: 'var(--text-muted)', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.08em' }}>Starts</span><br />Sunday, June 15, 2025 · 9:00 AM</p>
                  <p style={{ fontSize: '0.9rem' }}><span style={{ color: 'var(--text-muted)', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.08em' }}>Ends</span><br />Saturday, June 21, 2025 · 10:00 AM</p>
                  <p style={{ fontSize: '0.9rem' }}><span style={{ color: 'var(--text-muted)', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.08em' }}>Location</span><br />Seattle, WA</p>
                </div>
              </div>
              <p style={{ color: 'var(--text-muted)' }}>
                Happening in early summer of 2025! We are bringing together a nutritionist, meditation specialist, and masseuse to pair with your SASHX exercises.
              </p>
              <p style={{ color: 'var(--text-muted)' }}>
                More details coming soon — this will be a one-of-a-kind immersive experience designed to restore and realign your body over seven transformative days.
              </p>
              <Link to="/contact" className="btn btn-primary" style={{ alignSelf: 'flex-start' }}>
                Register Interest
              </Link>
            </div>
            <div>
              <img src="/images/blog-soul-selam.jpg" alt="Retreat landscape" style={{ width: '100%', borderRadius: 'var(--radius)', boxShadow: 'var(--shadow-md)' }} />
            </div>
          </div>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container" style={{ maxWidth: '600px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Link to="/retreats" className="btn btn-ghost">All Events</Link>
            <Link to="/retreats/seattle-retreat" className="btn btn-outline">Seattle Retreat →</Link>
          </div>
        </div>
      </section>
    </>
  )
}
