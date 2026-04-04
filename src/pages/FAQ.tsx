import { useState } from 'react'
import { Link } from 'react-router-dom'

const faqs = [
  {
    q: 'Who can benefit from SASHX?',
    a: 'Everyone! SASHX is designed for all ages and skill levels. Whether you are young or in your golden years, these gentle yet effective exercises are rehabilitative and the perfect way to maintain a strong, healthy body.',
  },
  {
    q: 'I have a back injury — is SASHX for me?',
    a: 'Like with all exercise and stretching, consult with your doctor if you have an injury before beginning your SASHX program. Our exercises are gentle and precision-based, but it is always best to check with your healthcare provider first.',
  },
  {
    q: 'How many sessions are recommended to learn the SASHX process?',
    a: 'We recommend beginning with the 4 private session series where you will learn the SASHX method. After that, you can choose to continue in-person sessions or do your SASHX program at home on your own.',
  },
  {
    q: 'What types of payment are accepted?',
    a: 'Payment information is coming soon. Please contact us directly for current options.',
  },
  {
    q: 'When will the next retreat be held?',
    a: 'We are hosting retreats in Summer 2025. Visit our Retreats page for the latest dates and details.',
  },
  {
    q: 'What equipment do I need to do SASHX at home?',
    a: 'A ballet bar, ottoman, hanging hand grippers on straps, and 2 lb weights. All equipment is provided during in-person sessions.',
  },
]

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false)
  return (
    <div style={{
      borderBottom: '1px solid var(--border)',
      overflow: 'hidden',
    }}>
      <button
        onClick={() => setOpen(!open)}
        style={{
          width: '100%',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '1.5rem 0',
          background: 'none',
          cursor: 'pointer',
          textAlign: 'left',
          gap: '1rem',
        }}
      >
        <span style={{ fontFamily: 'var(--serif)', fontSize: '1.15rem', color: 'var(--text)' }}>{q}</span>
        <span style={{
          flexShrink: 0,
          width: '20px',
          height: '20px',
          border: '1px solid var(--border)',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '0.8rem',
          color: 'var(--accent)',
          transition: 'transform 0.3s',
          transform: open ? 'rotate(45deg)' : 'none',
        }}>+</span>
      </button>
      {open && (
        <div style={{ paddingBottom: '1.5rem' }}>
          <p style={{ color: 'var(--text-muted)', lineHeight: 1.75 }}>{a}</p>
        </div>
      )}
    </div>
  )
}

export default function FAQ() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────── */}
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow page-hero__eyebrow">Questions</p>
          <h1 className="page-hero__title">Frequently Asked Questions</h1>
          <div className="divider" />
          <p className="page-hero__lead">Everything you need to know before getting started.</p>
        </div>
      </section>

      {/* ── FAQ list ─────────────────────────────────────── */}
      <section className="section section--white">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr min(560px, 40%)', gap: '5rem', alignItems: 'start' }}>

            {/* Accordion */}
            <div style={{ borderTop: '1px solid var(--border)' }}>
              {faqs.map((item, i) => (
                <FAQItem key={i} q={item.q} a={item.a} />
              ))}
            </div>

            {/* Sidebar images */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', position: 'sticky', top: '5rem' }}>
              {['/images/faq-3.jpg', '/images/faq-5.jpg', '/images/faq-1.jpg'].map((src, i) => (
                <img key={i} src={src} alt="SASHX session" style={{ width: '100%', borderRadius: 'var(--radius)', boxShadow: 'var(--shadow)' }} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Still have questions ─────────────────────────── */}
      <section className="section section--alt">
        <div className="container text-center" style={{ maxWidth: '560px' }}>
          <h2 style={{ marginBottom: '1rem' }}>Still Have Questions?</h2>
          <div className="divider divider--center" />
          <p style={{ color: 'var(--text-muted)', marginBottom: '2rem' }}>
            We're happy to answer anything else. Reach out and we'll get back to you promptly.
          </p>
          <Link to="/contact" className="btn btn-primary">Contact Us</Link>
        </div>
      </section>
    </>
  )
}
