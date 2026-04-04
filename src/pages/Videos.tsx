import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'

const categories = [
  { slug: '',               label: 'All' },
  { slug: 'neck',           label: 'Neck' },
  { slug: 'shoulder',       label: 'Shoulders' },
  { slug: 'upper-back',     label: 'Upper Back' },
  { slug: 'mid--back',      label: 'Mid Back' },
  { slug: 'lower-back',     label: 'Lower Back' },
  { slug: 'hip',            label: 'Hip' },
  { slug: 'knees',          label: 'Knees' },
  { slug: 'mindful-meditation', label: 'Feet / Mindfulness' },
]

const instructionalVideos = [
  'The importance of proper starting positions for your body.',
  'How to properly place your body on the bar.',
  'Starting positions on the ottoman.',
  'Starting positions for hanging exercises.',
  'Adjusting equipment to the correct height.',
]

const placeholderCards = [
  { title: '5 Tips for Beginners', category: 'Upper Back' },
  { title: 'Practicing Mindfulness', category: 'Upper Back / Feet' },
  { title: 'Tips for Better Focus', category: 'Feet' },
]

export default function Videos() {
  const { category } = useParams<{ category?: string }>()
  const [activeFilter, setActiveFilter] = useState(category || '')

  return (
    <>
      {/* ── Hero ─────────────────────────────────────────── */}
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow page-hero__eyebrow">Self-Practice</p>
          <h1 className="page-hero__title">Video Library</h1>
          <div className="divider" />
          <p className="page-hero__lead">
            Learn the SASHX method at your own pace with guided video lessons for every part of the body.
          </p>
        </div>
      </section>

      {/* ── Introduction ─────────────────────────────────── */}
      <section className="section section--white">
        <div className="container" style={{ maxWidth: '760px' }}>
          <p className="eyebrow mb-2">Where to Start</p>
          <h2 style={{ marginBottom: '1rem' }}>Begin Here</h2>
          <div className="divider" />
          <p style={{ color: 'var(--text-muted)', marginTop: '1rem', marginBottom: '2rem' }}>
            Begin by watching the introduction video below. It will outline how to approach your SASHX experience and set you up for a safe and effective practice.
          </p>

          {/* Introduction video placeholder */}
          <div style={{
            background: 'var(--bg-deep)',
            borderRadius: 'var(--radius)',
            aspectRatio: '16/9',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            border: '1px solid var(--border)',
            marginBottom: '2.5rem',
          }}>
            <div style={{ textAlign: 'center' }}>
              <div style={{
                width: '56px',
                height: '56px',
                borderRadius: '50%',
                border: '2px solid var(--accent-light)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 1rem',
              }}>
                <div style={{ width: 0, height: 0, borderTop: '10px solid transparent', borderBottom: '10px solid transparent', borderLeft: '16px solid var(--accent)', marginLeft: '4px' }} />
              </div>
              <p style={{ fontFamily: 'var(--serif)', color: 'var(--text-muted)' }}>Introduction Video</p>
              <p style={{ fontSize: '0.78rem', color: 'var(--text-light)', marginTop: '0.25rem' }}>Coming soon</p>
            </div>
          </div>

          {/* Instructional sequence */}
          <p className="eyebrow mb-3">Follow These First</p>
          <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem', fontSize: '0.9rem' }}>
            Follow these videos in order before beginning your exercises in the full video library.
          </p>
          <ol style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', paddingLeft: '1.25rem' }}>
            {instructionalVideos.map((v, i) => (
              <li key={i} style={{ color: 'var(--text-muted)', fontSize: '0.95rem', paddingLeft: '0.5rem' }}>
                {v}
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ── Body assessment ──────────────────────────────── */}
      <section className="section section--alt">
        <div className="container text-center" style={{ maxWidth: '640px' }}>
          <p className="eyebrow mb-2">Personalized Practice</p>
          <h2 style={{ marginBottom: '1rem' }}>Listen to Your Body</h2>
          <div className="divider divider--center" />
          <p style={{ color: 'var(--text-muted)', marginTop: '1rem' }}>
            Take a moment to listen to your body. What do you need help repairing today? When building your personalized curriculum, begin your exercises from the feet up to help align your frame.
          </p>
        </div>
      </section>

      {/* ── Video library ────────────────────────────────── */}
      <section className="section section--white">
        <div className="container">
          <div className="text-center mb-4">
            <p className="eyebrow mb-2">Full Library</p>
            <h2>Exercise Videos</h2>
            <div className="divider divider--center" />
          </div>

          {/* Filter bar */}
          <div style={{
            display: 'flex',
            gap: '0.5rem',
            flexWrap: 'wrap',
            justifyContent: 'center',
            marginBottom: '3rem',
          }}>
            {categories.map((cat) => (
              <Link
                key={cat.slug}
                to={cat.slug ? `/videos-1-2-1/${cat.slug}` : '/videos'}
                onClick={() => setActiveFilter(cat.slug)}
                style={{
                  padding: '0.45rem 1rem',
                  borderRadius: '20px',
                  fontSize: '0.72rem',
                  fontWeight: 500,
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  border: '1px solid',
                  borderColor: activeFilter === cat.slug ? 'var(--accent)' : 'var(--border)',
                  background: activeFilter === cat.slug ? 'var(--accent)' : 'transparent',
                  color: activeFilter === cat.slug ? 'var(--white)' : 'var(--text-muted)',
                  transition: 'all 0.2s',
                  textDecoration: 'none',
                }}
              >
                {cat.label}
              </Link>
            ))}
          </div>

          {/* Placeholder video cards */}
          <div className="grid-3">
            {placeholderCards.map((card, i) => (
              <div key={i} className="card">
                <div style={{
                  background: 'var(--bg-deep)',
                  aspectRatio: '16/9',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                  <div style={{ textAlign: 'center' }}>
                    <div style={{
                      width: '40px',
                      height: '40px',
                      borderRadius: '50%',
                      border: '1px solid var(--accent-light)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      margin: '0 auto 0.5rem',
                    }}>
                      <div style={{ width: 0, height: 0, borderTop: '7px solid transparent', borderBottom: '7px solid transparent', borderLeft: '11px solid var(--accent)', marginLeft: '3px' }} />
                    </div>
                  </div>
                </div>
                <div className="card__body">
                  <p className="eyebrow mb-1" style={{ fontSize: '0.65rem' }}>{card.category}</p>
                  <h3 style={{ fontSize: '1rem', marginBottom: '0.5rem' }}>{card.title}</h3>
                  <p style={{ fontSize: '0.82rem', color: 'var(--text-light)', fontStyle: 'italic' }}>Video coming soon</p>
                  <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)', marginTop: '0.5rem' }}>
                    A guided video lesson for this area of the body will be available here. Check back soon or subscribe for updates.
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-4">
            <p style={{ fontSize: '0.85rem', color: 'var(--text-light)' }}>
              Full video library coming soon. <Link to="/contact" style={{ color: 'var(--accent)' }}>Subscribe for updates</Link>.
            </p>
          </div>
        </div>
      </section>

      {/* ── Book a session CTA ───────────────────────────── */}
      <section style={{
        background: 'linear-gradient(135deg, var(--bg-deep) 0%, var(--accent-pale) 100%)',
        paddingBlock: 'clamp(3rem, 7vw, 6rem)',
      }}>
        <div className="container text-center" style={{ maxWidth: '560px' }}>
          <h2 style={{ marginBottom: '1rem' }}>Learn In Person First</h2>
          <div className="divider divider--center" />
          <p style={{ color: 'var(--text-muted)', marginBottom: '2rem' }}>
            We recommend beginning with a 4-session in-person series before using the video library at home. This ensures you learn proper form and get the most from your practice.
          </p>
          <Link to="/book-a-session" className="btn btn-primary">Book a Session</Link>
        </div>
      </section>
    </>
  )
}
