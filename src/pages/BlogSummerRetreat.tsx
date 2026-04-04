import { Link } from 'react-router-dom'

export default function BlogSummerRetreat() {
  return (
    <>
      <section className="page-hero">
        <div className="container" style={{ maxWidth: '760px' }}>
          <Link to="/blog" style={{ fontSize: '0.75rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--accent)', display: 'inline-block', marginBottom: '1.5rem' }}>
            ← Journal
          </Link>
          <p className="eyebrow page-hero__eyebrow">Retreats · April 22, 2025</p>
          <h1 className="page-hero__title" style={{ fontSize: 'clamp(2rem, 5vw, 3.2rem)' }}>Summer Retreat 2025</h1>
          <div className="divider" />
          <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)', letterSpacing: '0.06em' }}>
            By Jess Keener
          </p>
        </div>
      </section>

      <section className="section section--white">
        <div className="container" style={{ maxWidth: '760px' }}>
          <img
            src="/images/blog-summer-retreat.jpg"
            alt="Summer Retreat 2025 — scenic outdoor setting"
            style={{ width: '100%', borderRadius: 'var(--radius)', boxShadow: 'var(--shadow-md)', marginBottom: '3rem' }}
          />

          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            <div>
              <h3 style={{ marginBottom: '0.75rem', fontSize: '1.4rem' }}>Retreat Details</h3>
              <p style={{ color: 'var(--text-muted)' }}>
                Our Summer 2025 Retreat is taking shape — a transformative multi-day experience in the Pacific Northwest. Details are being finalized and will be announced soon. We will be hosting a small group of participants for an intimate, immersive program.
              </p>
            </div>

            <div>
              <h3 style={{ marginBottom: '0.75rem', fontSize: '1.4rem' }}>What People Had to Say</h3>
              <p style={{ color: 'var(--text-muted)' }}>
                Testimonials and reflections from retreat participants will be shared here following the event. Stay tuned for stories of transformation, community, and renewal.
              </p>
            </div>

            <div>
              <h3 style={{ marginBottom: '0.75rem', fontSize: '1.4rem' }}>Future Retreats</h3>
              <p style={{ color: 'var(--text-muted)' }}>
                We plan to host retreats on an ongoing basis. If you are interested in attending a future retreat, reach out or subscribe to our newsletter to be notified when new dates are announced.
              </p>
              <Link to="/retreats" className="btn btn-primary mt-3" style={{ display: 'inline-block' }}>
                View All Retreats
              </Link>
            </div>
          </div>

          <div style={{ borderTop: '1px solid var(--border)', marginTop: '3rem', paddingTop: '2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
            <Link to="/blog/soul-selam" className="btn btn-outline">← Studio Opening</Link>
            <Link to="/blog" className="btn btn-ghost">All Posts →</Link>
          </div>
        </div>
      </section>
    </>
  )
}
