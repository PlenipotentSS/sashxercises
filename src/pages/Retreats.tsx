import { Link } from 'react-router-dom'

const retreats = [
  {
    slug: 'seattle-retreat',
    title: 'Seattle Retreat',
    dates: 'July 24 – 28, 2025',
    time: 'Thu Jul 24 · 1:00 PM — Mon Jul 28 · 2:00 PM',
    desc: 'We are hosting our first retreat in Summer of 2025. Dates and details to be announced soon!',
    status: 'Upcoming',
  },
  {
    slug: 'event-one-akjs9',
    title: 'SASHX First Retreat',
    dates: 'June 15 – 21, 2025',
    time: 'Sun Jun 15 · 9:00 AM — Sat Jun 21 · 10:00 AM',
    desc: 'Happening in early summer of 2025! We are bringing together a nutritionist, meditation specialist, and masseuse to pair with your SASHX exercises. More details coming soon…',
    status: 'Upcoming',
  },
]

export default function Retreats() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────── */}
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow page-hero__eyebrow">Immersive Experiences</p>
          <h1 className="page-hero__title">Retreats</h1>
          <div className="divider" />
          <p className="page-hero__lead">
            Multi-day immersive experiences combining SASHX exercises with nutrition, meditation, and massage.
          </p>
        </div>
      </section>

      {/* ── Retreat list ─────────────────────────────────── */}
      <section className="section section--white">
        <div className="container">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', maxWidth: '800px', margin: '0 auto' }}>
            {retreats.map((r) => (
              <div key={r.slug} style={{
                background: 'var(--bg-alt)',
                borderRadius: 'var(--radius)',
                padding: 'clamp(1.5rem, 4vw, 2.5rem)',
                boxShadow: 'var(--shadow)',
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.5rem' }}>
                  <div>
                    <p className="eyebrow mb-1">{r.status}</p>
                    <h2 style={{ fontSize: '1.7rem' }}>{r.title}</h2>
                  </div>
                  <span style={{
                    fontSize: '0.72rem',
                    fontWeight: 500,
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    color: 'var(--accent)',
                    background: 'var(--accent-pale)',
                    padding: '0.3rem 0.75rem',
                    borderRadius: '20px',
                    whiteSpace: 'nowrap',
                  }}>
                    2025
                  </span>
                </div>

                <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', letterSpacing: '0.04em' }}>{r.time}</p>

                <div className="divider" style={{ margin: '0.25rem 0' }} />

                <p style={{ color: 'var(--text-muted)' }}>{r.desc}</p>

                <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', marginTop: '0.5rem' }}>
                  <Link to={`/retreats/${r.slug}`} className="btn btn-primary" style={{ fontSize: '0.72rem' }}>
                    View Details →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── What's included ──────────────────────────────── */}
      <section className="section section--alt">
        <div className="container text-center" style={{ maxWidth: '680px' }}>
          <p className="eyebrow mb-2">What to expect</p>
          <h2 style={{ marginBottom: '1rem' }}>A Holistic Retreat Experience</h2>
          <div className="divider divider--center" />
          <p style={{ color: 'var(--text-muted)', marginTop: '1rem' }}>
            Our retreats bring together a curated team of specialists — nutritionist, meditation guide, and licensed masseuse — alongside your SASHX exercises for a complete mind-body reset.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '1.5rem', marginTop: '2.5rem' }}>
            {['SASHX Exercises', 'Nutrition', 'Meditation', 'Massage'].map((item) => (
              <div key={item} style={{
                padding: '1.25rem',
                background: 'var(--white)',
                borderRadius: 'var(--radius)',
                boxShadow: 'var(--shadow)',
              }}>
                <p style={{ fontFamily: 'var(--serif)', fontSize: '1rem' }}>{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
