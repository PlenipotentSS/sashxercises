import { useState } from 'react'

export default function Contact() {
  const [sent, setSent] = useState(false)

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSent(true)
  }

  return (
    <>
      {/* ── Hero ─────────────────────────────────────────── */}
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow page-hero__eyebrow">Reach Out</p>
          <h1 className="page-hero__title">Contact Us</h1>
          <div className="divider" />
          <p className="page-hero__lead">We would love to hear from you.</p>
        </div>
      </section>

      {/* ── Contact form ─────────────────────────────────── */}
      <section className="section section--white">
        <div className="container">
          <div className="grid-2" style={{ alignItems: 'start', maxWidth: '900px', margin: '0 auto' }}>

            {/* Form */}
            <div>
              {sent ? (
                <div style={{
                  background: 'var(--accent-pale)',
                  borderRadius: 'var(--radius)',
                  padding: '2.5rem',
                  textAlign: 'center',
                }}>
                  <p style={{ fontFamily: 'var(--serif)', fontSize: '1.5rem', marginBottom: '0.5rem' }}>Thank you.</p>
                  <p style={{ color: 'var(--text-muted)' }}>We'll be in touch with you shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
                  <div className="form-group">
                    <label>Name <span style={{ color: 'var(--accent)' }}>*</span></label>
                    <input type="text" placeholder="Your full name" required />
                  </div>
                  <div className="form-group">
                    <label>Email <span style={{ color: 'var(--accent)' }}>*</span></label>
                    <input type="email" placeholder="you@example.com" required />
                  </div>
                  <div className="form-group">
                    <label>Message <span style={{ color: 'var(--accent)' }}>*</span></label>
                    <textarea placeholder="Tell us how we can help you…" required />
                  </div>
                  <button type="submit" className="btn btn-primary" style={{ alignSelf: 'flex-start' }}>
                    Send Message
                  </button>
                </form>
              )}
            </div>

            {/* Info sidebar */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              <div>
                <p className="eyebrow mb-2">Location</p>
                <p style={{ color: 'var(--text-muted)' }}>Seattle, WA<br />Pacific Northwest</p>
              </div>
              <div>
                <p className="eyebrow mb-2">Follow Along</p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <a
                    href="https://instagram.com/sashxercises/"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: 'var(--text-muted)', fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '0.5rem', transition: 'color 0.2s' }}
                    onMouseEnter={e => (e.currentTarget.style.color = 'var(--text)')}
                    onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-muted)')}
                  >
                    Instagram — @sashxercises
                  </a>
                  <a
                    href="https://facebook.com/sashxercises"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: 'var(--text-muted)', fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '0.5rem', transition: 'color 0.2s' }}
                    onMouseEnter={e => (e.currentTarget.style.color = 'var(--text)')}
                    onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-muted)')}
                  >
                    Facebook — sashxercises
                  </a>
                </div>
              </div>
              <div style={{ background: 'var(--bg-alt)', borderRadius: 'var(--radius)', padding: '1.5rem' }}>
                <p style={{ fontFamily: 'var(--serif)', fontSize: '1rem', fontStyle: 'italic', color: 'var(--text-muted)', lineHeight: 1.6 }}>
                  "Don't let pain or stiffness hold you back. Discover what your body needs to thrive."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
