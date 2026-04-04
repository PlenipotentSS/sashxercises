import { Link } from 'react-router-dom'

export default function BlogSoulSelam() {
  return (
    <>
      <section className="page-hero">
        <div className="container" style={{ maxWidth: '760px' }}>
          <Link to="/blog" style={{ fontSize: '0.75rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--accent)', display: 'inline-block', marginBottom: '1.5rem' }}>
            ← Journal
          </Link>
          <p className="eyebrow page-hero__eyebrow">News · August 28, 2024</p>
          <h1 className="page-hero__title" style={{ fontSize: 'clamp(2rem, 5vw, 3.2rem)' }}>Studio Opening</h1>
          <div className="divider" />
          <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)', letterSpacing: '0.06em' }}>
            By Jess Keener
          </p>
        </div>
      </section>

      <section className="section section--white">
        <div className="container" style={{ maxWidth: '760px' }}>
          <img
            src="/images/blog-soul-selam.jpg"
            alt="SASHX studio opening — outdoor setting"
            style={{ width: '100%', borderRadius: 'var(--radius)', boxShadow: 'var(--shadow-md)', marginBottom: '3rem' }}
          />

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <p style={{ fontFamily: 'var(--serif)', fontSize: '1.2rem', fontStyle: 'italic', color: 'var(--text-muted)' }}>
              Our studio is open!
            </p>
            <p>
              We are thrilled to announce that the SASHX studio is now open and welcoming clients. Come by and say hi — we can't wait to introduce you to the SASHX method and begin your journey toward better alignment, mobility, and well-being.
            </p>
            <p style={{ color: 'var(--text-muted)' }}>
              Whether you're curious about what SASHX is, looking for a gentle way to ease chronic pain, or simply want to maintain your body as you age, our doors are open to you. Our first session series starts soon — reserve your spot today.
            </p>
          </div>

          <div style={{ borderTop: '1px solid var(--border)', marginTop: '3rem', paddingTop: '2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
            <Link to="/blog" className="btn btn-ghost">← All Posts</Link>
            <Link to="/blog/summer-retreat-hnfbx" className="btn btn-outline">Next: Summer Retreat 2025 →</Link>
          </div>
        </div>
      </section>
    </>
  )
}
