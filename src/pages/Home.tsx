import { Link } from 'react-router-dom'

const testimonials = [
  {
    quote: 'After going through the 4 class series and going to my regular masseuse, I have felt better than I have in a very long time.',
    name: 'Christine Wright',
    role: 'Bank Manager',
  },
  {
    quote: 'I took the 4 class series and after even the first class I actually felt straighter.',
    name: 'Chu-Lan Chiong',
    role: 'Acupuncturist',
  },
  {
    quote: 'After seven months of the SASHX program, I was able to walk up and down stairs, move without fear of falling, and achieve flexibility and strength that can prevent injuries. I can now even run!',
    name: 'Anne Stevenson',
    role: 'Founder',
  },
]

const benefits = [
  'Improved Flexibility & Stability',
  'Enhanced Nerve Flow & Circulation',
  'Smoother Gait & Increased Coordination',
  'Pain Reduction or Elimination',
  'Expanded Breathing Capacity',
  'Increased Bone Density',
]

export default function Home() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────── */}
      <section style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
      }}>
        {/* Background media — swap <img> for <video autoPlay muted loop playsInline> when ready */}
        <img
          src="/images/home-1.jpg"
          alt=""
          aria-hidden="true"
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center',
          }}
        />
        {/* Dark overlay so text stays readable */}
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(to bottom, rgba(0,0,0,0.52) 0%, rgba(0,0,0,0.38) 60%, rgba(0,0,0,0.62) 100%)',
        }} />

        {/* Content */}
        <div className="container" style={{ position: 'relative', zIndex: 1, paddingBlock: 'clamp(6rem, 14vw, 12rem)' }}>
          <div className="fade-up" style={{ maxWidth: '760px' }}>
            <p className="eyebrow mb-2" style={{ color: 'rgba(255,255,255,0.75)' }}>
              Skeletal · Alignment · Spinal · Health · Exercises
            </p>
            <h1 style={{ marginBottom: '1.5rem', color: '#fff' }}>
              Unlock a Healthier,<br />More Vibrant You
            </h1>
            <p style={{
              fontSize: 'clamp(1rem, 2vw, 1.2rem)',
              color: 'rgba(255,255,255,0.85)',
              marginBottom: '2.5rem',
              fontWeight: 300,
              maxWidth: '600px',
            }}>
              As we age, our bodies naturally lose flexibility, mobility, and alignment. With the SASHX Method, you can reverse this and reclaim the vitality of your youth through small, precise movements.
            </p>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <Link to="/book-a-session" className="btn btn-primary">Book a Session</Link>
              <Link to="/about" className="btn btn-outline" style={{ borderColor: 'rgba(255,255,255,0.7)', color: '#fff' }}>Learn the Method</Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Mission strip ────────────────────────────────── */}
      <section style={{
        background: 'var(--accent)',
        paddingBlock: '2.5rem',
      }}>
        <div className="container text-center">
          <p style={{
            fontFamily: 'var(--serif)',
            fontSize: 'clamp(1.1rem, 2.5vw, 1.6rem)',
            color: 'var(--white)',
            fontStyle: 'italic',
            fontWeight: 300,
            maxWidth: '72ch',
            margin: '0 auto',
          }}>
            "SASHX helps you understand how to be one with your body. Healthy balance is discovered as the exercises build muscle at the same time they stretch it."
          </p>
        </div>
      </section>

      {/* ── Testimonials ─────────────────────────────────── */}
      <section className="section section--alt">
        <div className="container">
          <div className="text-center mb-4">
            <p className="eyebrow mb-2">Results</p>
            <h2>How SASHX Has Helped Others</h2>
            <div className="divider divider--center" />
          </div>
          <div className="grid-3">
            {testimonials.map((t, i) => (
              <div key={i} style={{
                background: 'var(--white)',
                borderRadius: 'var(--radius)',
                padding: '2rem',
                boxShadow: 'var(--shadow)',
                display: 'flex',
                flexDirection: 'column',
                gap: '1.25rem',
              }}>
                <p style={{ fontFamily: 'var(--serif)', fontSize: '1.05rem', fontStyle: 'italic', color: 'var(--text)', lineHeight: 1.7, flexGrow: 1 }}>
                  "{t.quote}"
                </p>
                <div style={{ borderTop: '1px solid var(--border)', paddingTop: '1rem' }}>
                  <p style={{ fontWeight: 500, fontSize: '0.88rem' }}>{t.name}</p>
                  <p style={{ fontSize: '0.78rem', color: 'var(--text-muted)', letterSpacing: '0.06em' }}>{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Benefits ─────────────────────────────────────── */}
      <section className="section section--white">
        <div className="container">
          <div className="sashx-benefits-grid" style={{ display: 'grid', gridTemplateColumns: '2fr 3fr', gap: 'clamp(2rem, 5vw, 5rem)', alignItems: 'center' }}>
            <div style={{ order: 2 }} className="sashx-text-col">
              <p className="eyebrow mb-2">For Everyone</p>
              <h2 style={{ marginBottom: '1rem', fontSize: 'clamp(1.4rem, 2.5vw, 2rem)' }}>Is SASHX for Me?</h2>
              <div className="divider" />
              <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem', fontSize: '0.85rem' }}>
                Whether you're young or in your golden years, SASHX is designed for everyone. These gentle yet effective exercises are rehabilitative and the perfect way to maintain a strong, healthy body at any age.
              </p>
              <h4 style={{ marginBottom: '1rem', fontFamily: 'var(--sans)', fontWeight: 500, fontSize: '0.7rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--text-muted)' }}>
                Experience the Benefits
              </h4>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                {benefits.map((b, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '0.85rem' }}>
                    <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--accent)', flexShrink: 0 }} />
                    {b}
                  </li>
                ))}
              </ul>
              <Link to="/about" className="btn btn-outline mt-4" style={{ display: 'inline-block' }}>
                Learn More
              </Link>
            </div>
            <div style={{ order: 1 }} className="sashx-img-col">
              <img
                src="/images/home-acronym.png"
                alt="S - Skeletal  A - Alignment  S - Spinal  H - Health  X - Exercises"
                style={{ width: '100%', display: 'block' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Sessions ─────────────────────────────────────── */}
      <section className="section section--alt">
        <div className="container">
          <div className="text-center mb-4">
            <p className="eyebrow mb-2">Join Us</p>
            <h2>Upcoming Sessions</h2>
            <div className="divider divider--center" />
            <p style={{ color: 'var(--text-muted)', marginTop: '0.5rem' }}>
              Besides our regular schedule, we frequently host visiting teachers and speakers.
            </p>
          </div>
          <div className="grid-2" style={{ alignItems: 'stretch', maxWidth: '800px', margin: '0 auto' }}>
            {[
              { title: 'Private Sessions', desc: '1h 15m one-on-one session tailored to your exact body needs. We provide all equipment.', img: '/images/book-private.png' },
              { title: 'Small Groups', desc: '1.5h group session with up to 3 people. Great for shared learning with friends or family.', img: '/images/book-group.png' },
            ].map((s, i) => (
              <div key={i} className="card" style={{ display: 'flex', flexDirection: 'column' }}>
                <img src={s.img} alt={s.title} style={{ width: '100%', aspectRatio: '4/3', objectFit: 'cover' }} />
                <div className="card__body" style={{ flexGrow: 1, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <h3 style={{ fontSize: '1.3rem' }}>{s.title}</h3>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', flexGrow: 1 }}>{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-4">
            <Link to="/book-a-session" className="btn btn-primary">Session Details</Link>
          </div>
        </div>
      </section>

      {/* ── CTA Banner ───────────────────────────────────── */}
      <section style={{
        position: 'relative',
        padding: 'clamp(6rem, 14vw, 12rem) 0',
        overflow: 'hidden',
      }}>
        <img
          src="/images/river.png"
          alt=""
          aria-hidden="true"
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center',
          }}
        />
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'rgba(0,0,0,0.42)',
        }} />
        <div className="container text-center" style={{ position: 'relative', zIndex: 1 }}>
          <h2 style={{ color: '#fff', maxWidth: '22ch', margin: '0 auto 2rem', fontWeight: 300 }}>
            Interested in experiencing how SASHX can change the way you feel in your body?
          </h2>
          <Link to="/book-a-session" className="btn btn-primary">
            Book a Session
          </Link>
        </div>
      </section>

      {/* ── Newsletter ───────────────────────────────────── */}
      <section className="section section--white">
        <div className="container text-center" style={{ maxWidth: '560px' }}>
          <p className="eyebrow mb-2">Stay Connected</p>
          <h2 style={{ marginBottom: '0.75rem' }}>Subscribe to Our Newsletter</h2>
          <div className="divider divider--center" />
          <p style={{ color: 'var(--text-muted)', marginBottom: '2rem' }}>Sign up to receive news and updates from SASHX.</p>
          <form style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }} onSubmit={e => e.preventDefault()}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              <div className="form-group" style={{ margin: 0 }}>
                <label>First Name</label>
                <input type="text" placeholder="Anne" />
              </div>
              <div className="form-group" style={{ margin: 0 }}>
                <label>Last Name</label>
                <input type="text" placeholder="Stevenson" />
              </div>
            </div>
            <div className="form-group" style={{ margin: 0 }}>
              <label>Email Address</label>
              <input type="email" placeholder="you@example.com" />
            </div>
            <button type="submit" className="btn btn-primary">Sign Up</button>
          </form>
        </div>
      </section>
    </>
  )
}
