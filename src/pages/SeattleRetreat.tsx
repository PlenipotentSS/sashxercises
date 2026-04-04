import { Link } from 'react-router-dom'

export default function SeattleRetreat() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <Link to="/retreats" style={{ fontSize: '0.75rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--accent)', display: 'inline-block', marginBottom: '1.5rem' }}>
            ← Back to All Events
          </Link>
          <p className="eyebrow page-hero__eyebrow">Retreat · Summer 2025</p>
          <h1 className="page-hero__title">Seattle Retreat</h1>
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
                  <p style={{ fontSize: '0.9rem' }}><span style={{ color: 'var(--text-muted)', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.08em' }}>Starts</span><br />Thursday, July 24, 2025 · 1:00 PM</p>
                  <p style={{ fontSize: '0.9rem' }}><span style={{ color: 'var(--text-muted)', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.08em' }}>Ends</span><br />Monday, July 28, 2025 · 2:00 PM</p>
                  <p style={{ fontSize: '0.9rem' }}><span style={{ color: 'var(--text-muted)', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.08em' }}>Location</span><br />Seattle, WA</p>
                </div>
              </div>
              <p style={{ color: 'var(--text-muted)' }}>
                We are hosting our first retreat in Summer of 2025. Dates and details to be announced soon!
              </p>
              <p style={{ color: 'var(--text-muted)' }}>
                Stay tuned for a full lineup including SASHX exercises, nutrition guidance, meditation sessions, and massage therapy — all designed to work in harmony for a transformative experience.
              </p>
              <Link to="/contact" className="btn btn-primary" style={{ alignSelf: 'flex-start' }}>
                Register Interest
              </Link>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <img src="/images/blog-summer-retreat.jpg" alt="Retreat setting" style={{ width: '100%', borderRadius: 'var(--radius)', boxShadow: 'var(--shadow-md)' }} />
            </div>
          </div>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container" style={{ maxWidth: '600px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Link to="/retreats/event-one-akjs9" className="btn btn-outline">← SASHX First Retreat</Link>
            <Link to="/retreats" className="btn btn-ghost">All Events</Link>
          </div>
        </div>
      </section>
    </>
  )
}
