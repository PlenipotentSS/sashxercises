import { Link } from 'react-router-dom'

export default function Recruit() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────── */}
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow page-hero__eyebrow">Join the Team</p>
          <h1 className="page-hero__title">Become an Instructor</h1>
          <div className="divider" />
          <p className="page-hero__lead">
            Bring the SASHX philosophy and exercises to your own home studio or fitness facility.
          </p>
        </div>
      </section>

      {/* ── What it means ────────────────────────────────── */}
      <section className="section section--white">
        <div className="container">
          <div className="grid-2">
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              <p className="eyebrow mb-1">Instructor Recruitment</p>
              <h2>How Do I Join the SASHX Family?</h2>
              <div className="divider" />
              <p style={{ color: 'var(--text-muted)' }}>
                We offer 1-on-1 training sessions so you can bring the SASHX philosophy and exercises to your own home studio or fitness facility. Our training program equips you with everything you need to share this transformative method with your clients.
              </p>
              <p style={{ color: 'var(--text-muted)' }}>
                After completing training, you will be part of a growing network of certified SASHX instructors helping people across the country discover the power of precision movement.
              </p>
              <Link to="/contact" className="btn btn-primary" style={{ alignSelf: 'flex-start' }}>
                Apply Now
              </Link>
            </div>
            <div>
              <img
                src="/images/recruit-studio.jpg"
                alt="SASHX studio training"
                style={{ width: '100%', borderRadius: 'var(--radius)', boxShadow: 'var(--shadow-md)' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Training program ─────────────────────────────── */}
      <section className="section section--alt">
        <div className="container">
          <div className="text-center mb-4">
            <p className="eyebrow mb-2">The Program</p>
            <h2>What Training Includes</h2>
            <div className="divider divider--center" />
          </div>
          <div className="grid-3" style={{ maxWidth: '900px', margin: '0 auto' }}>
            {[
              {
                num: '01',
                title: '10 Training Sessions',
                body: 'Intensive 1-on-1 training sessions with a SASHX specialist to fully learn the method and how to teach it.',
              },
              {
                num: '02',
                title: 'Full Equipment',
                body: 'All equipment needed to perform the SASHX method — ballet bar, ottoman, hanging grippers, and weights.',
              },
              {
                num: '03',
                title: 'Brand Guidance',
                body: 'Guidance on how to grow the SASHX brand within your community and attract new clients to the practice.',
              },
            ].map((item) => (
              <div key={item.num} style={{
                background: 'var(--white)',
                borderRadius: 'var(--radius)',
                padding: '2rem',
                boxShadow: 'var(--shadow)',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.75rem',
              }}>
                <p style={{ fontFamily: 'var(--serif)', fontSize: '2.5rem', color: 'var(--accent-light)', lineHeight: 1 }}>{item.num}</p>
                <h3 style={{ fontSize: '1.1rem' }}>{item.title}</h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem' }}>{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Register CTA ─────────────────────────────────── */}
      <section style={{
        background: 'linear-gradient(135deg, var(--bg-deep) 0%, var(--accent-pale) 100%)',
        paddingBlock: 'clamp(4rem, 8vw, 7rem)',
      }}>
        <div className="container text-center" style={{ maxWidth: '560px' }}>
          <p className="eyebrow mb-2">Register for Training</p>
          <h2 style={{ marginBottom: '1rem' }}>Ready to Get Started?</h2>
          <div className="divider divider--center" />
          <p style={{ color: 'var(--text-muted)', marginBottom: '2rem' }}>
            You will be matched with an instructor closest to your location automatically. Reach out to begin the process.
          </p>
          <Link to="/contact" className="btn btn-primary">Contact Us to Apply</Link>
        </div>
      </section>
    </>
  )
}
