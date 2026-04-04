import { Link } from 'react-router-dom'

export default function BookSession() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────── */}
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow page-hero__eyebrow">In-Person</p>
          <h1 className="page-hero__title">Session Schedule</h1>
          <div className="divider" />
          <p className="page-hero__lead">
            Choose the session that best fits your needs and begin your journey toward a more aligned, pain-free body.
          </p>
        </div>
      </section>

      {/* ── Session types ────────────────────────────────── */}
      <section className="section section--white">
        <div className="container">
          <div className="grid-2" style={{ maxWidth: '900px', margin: '0 auto' }}>

            {/* Private */}
            <div className="card" style={{ display: 'flex', flexDirection: 'column' }}>
              <img
                src="/images/book-private.png"
                alt="Private SASHX Session"
                style={{ width: '100%', aspectRatio: '4/3', objectFit: 'cover' }}
              />
              <div className="card__body" style={{ flexGrow: 1, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <div>
                  <p className="eyebrow mb-2">1-on-1</p>
                  <h2 style={{ fontSize: '1.8rem' }}>Private Session</h2>
                  <p style={{ fontSize: '0.8rem', color: 'var(--text-light)', letterSpacing: '0.06em', marginTop: '0.25rem' }}>1 hour 15 minutes</p>
                </div>
                <div className="divider" style={{ margin: '0.5rem 0' }} />
                <p style={{ color: 'var(--text-muted)', flexGrow: 1 }}>
                  A private, 1h 15m SASHX session in our studio. We will tailor the experience to your exact body needs and provide all necessary equipment.
                </p>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
                  We suggest doing 4 sessions in order to learn the techniques you can maintain at home.
                </p>
                <Link to="/contact" className="btn btn-primary" style={{ marginTop: 'auto' }}>
                  Book Private
                </Link>
              </div>
            </div>

            {/* Small Group */}
            <div className="card" style={{ display: 'flex', flexDirection: 'column' }}>
              <img
                src="/images/book-group.png"
                alt="Small Group SASHX Session"
                style={{ width: '100%', aspectRatio: '4/3', objectFit: 'cover' }}
              />
              <div className="card__body" style={{ flexGrow: 1, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <div>
                  <p className="eyebrow mb-2">Up to 3 people</p>
                  <h2 style={{ fontSize: '1.8rem' }}>Small Group</h2>
                  <p style={{ fontSize: '0.8rem', color: 'var(--text-light)', letterSpacing: '0.06em', marginTop: '0.25rem' }}>1.5 hours</p>
                </div>
                <div className="divider" style={{ margin: '0.5rem 0' }} />
                <p style={{ color: 'var(--text-muted)', flexGrow: 1 }}>
                  A 1.5h group session with up to 3 people. A wonderful way to share the experience with friends or family.
                </p>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
                  Includes less tailored guidance than the private session, but an engaging communal learning environment.
                </p>
                <Link to="/contact" className="btn btn-outline" style={{ marginTop: 'auto' }}>
                  Book Group
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Visiting teachers note ───────────────────────── */}
      <section className="section section--alt">
        <div className="container text-center" style={{ maxWidth: '600px' }}>
          <p className="eyebrow mb-2">Special Events</p>
          <h2 style={{ marginBottom: '1rem' }}>Visiting Teachers & Speakers</h2>
          <div className="divider divider--center" />
          <p style={{ color: 'var(--text-muted)' }}>
            Besides our regular schedule, we frequently host visiting teachers and speakers. Follow us on social media or subscribe to our newsletter to hear about upcoming special events.
          </p>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────── */}
      <section style={{
        background: 'linear-gradient(135deg, var(--bg-deep) 0%, var(--accent-pale) 100%)',
        paddingBlock: 'clamp(4rem, 8vw, 7rem)',
      }}>
        <div className="container text-center" style={{ maxWidth: '600px' }}>
          <h2 style={{ marginBottom: '1rem' }}>Feel Young Again.<br />Feel Strong. Feel Alive.</h2>
          <div className="divider divider--center" />
          <p style={{ color: 'var(--text-muted)', marginBottom: '2rem' }}>
            Don't let pain or stiffness hold you back. Discover what your body needs to thrive and live a vibrant, healthy life for years to come with the SASHX Method.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/contact" className="btn btn-primary">Book a Session</Link>
            <Link to="/faqs" className="btn btn-outline">View FAQ</Link>
          </div>
        </div>
      </section>
    </>
  )
}
