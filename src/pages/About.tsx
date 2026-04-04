import { Link } from 'react-router-dom'

export default function About() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────── */}
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow page-hero__eyebrow">The Method</p>
          <h1 className="page-hero__title">About SASHX</h1>
          <div className="divider" />
          <p className="page-hero__lead">
            Discover the Power of Precision Movement
          </p>
        </div>
      </section>

      {/* ── Main content ─────────────────────────────────── */}
      <section className="section section--white">
        <div className="container">
          <div className="grid-2">
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', fontStyle: 'italic', fontFamily: 'var(--serif)' }}>
                SASHX focuses on small, precise, and selective movements that are key to loosening, strengthening, and realigning your body.
              </p>
              <p>
                These small and slow to fast and tight, steady exercises help restore muscle balance and support healthy aging.
              </p>
              <p>
                SASHX helps you understand how to be one with your body. Healthy balance is discovered as the SASHX exercises build muscle at the same time it stretches them. The focus is to condition your body with small precise movements.
              </p>
              <p>
                Body alignment begins with the feet, works up the legs and then to the hips, which are the cradle for the spine. By securing solid points on either side of any joint and circling that joint, you will even out the joint muscles, which is key in promoting alignment.
              </p>
            </div>
            <div>
              <img
                src="/images/home-vibrant.png"
                alt="Healthy vibrant life with SASHX"
                style={{ width: '100%', borderRadius: 'var(--radius)' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── How it works ─────────────────────────────────── */}
      <section className="section section--alt">
        <div className="container">
          <div className="text-center mb-4">
            <p className="eyebrow mb-2">Philosophy</p>
            <h2>How It Works</h2>
            <div className="divider divider--center" />
          </div>
          <div className="grid-3">
            {[
              {
                num: '01',
                title: 'Spinal Alignment',
                body: 'Spinal work loosens and strengthens the deep back muscles, re-stacking vertebrae into their proper position or maintaining perfect alignment.',
              },
              {
                num: '02',
                title: 'Gentle Stretching',
                body: 'Stretching is approached gently — holding each stretch in no more than two-second intervals, releasing and repeating until a full stretch is achieved.',
              },
              {
                num: '03',
                title: 'Body Language',
                body: 'Follow the body\'s messages as they move through you, letting them guide the next steps needed to heal and realign. Learn your body\'s unique language.',
              },
            ].map((item, i) => (
              <div key={i} style={{ padding: '2rem', background: 'var(--white)', borderRadius: 'var(--radius)', boxShadow: 'var(--shadow)' }}>
                <p style={{ fontFamily: 'var(--serif)', fontSize: '2.5rem', color: 'var(--accent-light)', lineHeight: 1, marginBottom: '1rem' }}>{item.num}</p>
                <h3 style={{ fontSize: '1.2rem', marginBottom: '0.75rem' }}>{item.title}</h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem' }}>{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Timing ───────────────────────────────────────── */}
      <section className="section section--white">
        <div className="container" style={{ maxWidth: '720px' }}>
          <p className="eyebrow mb-2">Best Practice</p>
          <h2 style={{ marginBottom: '1rem' }}>When to Practice</h2>
          <div className="divider" />
          <p style={{ marginBottom: '1rem' }}>
            The best time to integrate SASHX into your routine is in the evening before bed. This allows the body to settle in and rejuvenate during sleep, deepening the effects of your practice.
          </p>
          <p style={{ color: 'var(--text-muted)', fontStyle: 'italic', fontFamily: 'var(--serif)', fontSize: '1.1rem' }}>
            SASHX can help you live a healthy vibrant life as you age.
          </p>
        </div>
      </section>

      {/* ── Founder quote ────────────────────────────────── */}
      <section style={{
        background: 'linear-gradient(135deg, var(--bg-deep) 0%, var(--accent-pale) 100%)',
        paddingBlock: 'clamp(3rem, 7vw, 6rem)',
      }}>
        <div className="container text-center" style={{ maxWidth: '680px' }}>
          <p style={{
            fontFamily: 'var(--serif)',
            fontSize: 'clamp(1.2rem, 2.5vw, 1.7rem)',
            fontStyle: 'italic',
            fontWeight: 300,
            color: 'var(--text)',
            lineHeight: 1.6,
            marginBottom: '1.5rem',
          }}>
            "I have created a system of exercises that anyone can do without pain. My body taught me a technique to eliminate joint pain as it arises."
          </p>
          <p style={{ fontSize: '0.8rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-muted)' }}>
            Anne Stevenson — Founder
          </p>
          <Link to="/founder-story" className="btn btn-outline mt-4" style={{ display: 'inline-block' }}>
            Read Her Story
          </Link>
        </div>
      </section>
    </>
  )
}
