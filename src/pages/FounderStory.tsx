import { Link } from 'react-router-dom'

export default function FounderStory() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────── */}
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow page-hero__eyebrow">The Origin</p>
          <h1 className="page-hero__title">Founder Story</h1>
          <div className="divider" />
          <p className="page-hero__lead">
            How one woman's personal journey became a movement.
          </p>
        </div>
      </section>

      {/* ── Portrait + opening ───────────────────────────── */}
      <section className="section section--white">
        <div className="container">
          <div className="grid-2">
            <div>
              <img
                src="/images/founder-anne.jpg"
                alt="Anne Stevenson, Founder of SASHX"
                style={{
                  width: '100%',
                  maxWidth: '480px',
                  borderRadius: 'var(--radius)',
                  boxShadow: 'var(--shadow-md)',
                }}
              />
              <p style={{ marginTop: '1rem', fontSize: '0.78rem', color: 'var(--text-light)', letterSpacing: '0.06em' }}>
                Anne Stevenson — Founder, SASHX
              </p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              <p className="eyebrow">Anne Stevenson</p>
              <h2 style={{ lineHeight: 1.2 }}>A Personal Journey Toward a Pain-Free Life</h2>
              <div className="divider" />
              <p>
                SASHX was born from my personal physical journey achieving and maintaining a pain-free life as a woman in her late 70s.
              </p>
              <p style={{ color: 'var(--text-muted)' }}>
                As a child, I was diagnosed with scoliosis and kyphosis so my parents enrolled me in ballet to keep me flexible. Lifts were put inside and on the heels of my shoes to make up for the ½ inch length difference in my legs. Despite that and other efforts including a left knee replacement, the misalignment, spinal curves and hip displacement continued to progress, resulting in debilitating arthritis by my early 70s.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Story continued ──────────────────────────────── */}
      <section className="section section--alt">
        <div className="container" style={{ maxWidth: '760px' }}>
          <p className="eyebrow mb-2">The Discovery</p>
          <h2 style={{ marginBottom: '1rem' }}>When Everything Changed</h2>
          <div className="divider" />

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', marginTop: '1.5rem' }}>
            <p>
              But soon after beginning my exercise routine, I realized my knee replacement allowed me to realign my hips enough to experience being even waist down for the first time in 60 years. Because of this great opportunity to see if I could realign my total skeleton, I came to develop the SASHX method.
            </p>
            <p>
              During the pandemic, life became precious and I vowed I would improve my health, so I started doing a ballet barre workout. I had danced and taught ballet and was also a licensed New York Massage Therapist — so I understand the critical role that anatomy and physiology play in achieving harmony with the body.
            </p>
            <p>
              By beginning to move intuitively, listening to my body's language, and responding to its needs to overcome any tightness, knocking or pain I felt, I had discovered a path to overcome skeletal misalignments through small precise movements.
            </p>
          </div>
        </div>
      </section>

      {/* ── Transformation ───────────────────────────────── */}
      <section className="section section--white">
        <div className="container" style={{ maxWidth: '760px' }}>
          <p className="eyebrow mb-2">The Results</p>
          <h2 style={{ marginBottom: '1rem' }}>Dramatic Transformation</h2>
          <div className="divider" />

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', marginTop: '1.5rem' }}>
            <p>
              After seven months of SASHX, I began to see dramatic changes. My mobility had returned. I slipped on a metal plate on a sidewalk in Seattle and had a hard fall — I immediately stood up feeling no negative impact and experienced no bruising. It felt like I squished into the cement.
            </p>
            <p>
              By aligning my low back, I had increased circulation so much to my legs that old wounds healed. I grew out damaged toenails — one from an over-zealous manicurist that had permanently damaged my left toenail bed for 18 years.
            </p>
            <p>
              After three years practicing my realignment method, I repositioned my right turned-in pelvis that had impacted circulation in my right leg. The bad bruising and discoloration inside my right ankle, caused by the misalignment, has almost gone away. I also overcame my osteoarthritis in my right knee.
            </p>
          </div>
        </div>
      </section>

      {/* ── Vision ───────────────────────────────────────── */}
      <section style={{
        background: 'linear-gradient(150deg, var(--bg-deep) 0%, var(--accent-pale) 100%)',
        paddingBlock: 'clamp(3.5rem, 8vw, 7rem)',
      }}>
        <div className="container" style={{ maxWidth: '760px' }}>
          <p className="eyebrow mb-2">The Mission</p>
          <h2 style={{ marginBottom: '1.25rem' }}>Empowering Others</h2>
          <div className="divider" />
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', marginTop: '1.5rem' }}>
            <p>
              SASHX embodies the ongoing efforts of my personal physical journey and my passion for empowering others to achieve good health and wellness. This unique approach towards health is available through a series of four in-person lessons in Seattle so people can practice this method at home.
            </p>
            <p style={{ fontFamily: 'var(--serif)', fontSize: '1.1rem', fontStyle: 'italic', color: 'var(--text-muted)' }}>
              "My goal is to empower individuals to take charge of their own well-being, recognizing the inseparable connection between Mind and Body by using the SASHX method to unlock their potential."
            </p>
            <p style={{ fontSize: '0.8rem', letterSpacing: '0.08em', color: 'var(--text-light)', textTransform: 'uppercase' }}>
              — Anne Stevenson
            </p>
          </div>
          <div style={{ marginTop: '2.5rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <Link to="/book-a-session" className="btn btn-primary">Book a Session</Link>
            <Link to="/about" className="btn btn-outline">About SASHX</Link>
          </div>
        </div>
      </section>
    </>
  )
}
