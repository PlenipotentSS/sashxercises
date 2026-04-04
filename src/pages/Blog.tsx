import { Link } from 'react-router-dom'

const posts = [
  {
    slug: 'blog/summer-retreat-hnfbx',
    title: 'Summer Retreat 2025',
    date: 'April 22, 2025',
    author: 'Jess Keener',
    excerpt: 'Retreat details, testimonials, and information about future retreats — all coming soon.',
    img: '/images/blog-summer-retreat.jpg',
    category: 'Retreats',
  },
  {
    slug: 'blog/soul-selam',
    title: 'Studio Opening',
    date: 'August 28, 2024',
    author: 'Jess Keener',
    excerpt: 'Our studio is open! Come by and say hi — we are excited to welcome you into the SASHX space.',
    img: '/images/blog-soul-selam.jpg',
    category: 'News',
  },
]

export default function Blog() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────── */}
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow page-hero__eyebrow">Insights</p>
          <h1 className="page-hero__title">Journal</h1>
          <div className="divider" />
          <p className="page-hero__lead">
            Stories, updates, and reflections from the SASHX community.
          </p>
        </div>
      </section>

      {/* ── Posts ────────────────────────────────────────── */}
      <section className="section section--white">
        <div className="container">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
            {posts.map((post, i) => (
              <article key={post.slug} style={{
                display: 'grid',
                gridTemplateColumns: i % 2 === 0 ? '1fr 1fr' : '1fr 1fr',
                gap: '0',
                borderBottom: '1px solid var(--border)',
              }}>
                <div style={{ order: i % 2 === 0 ? 0 : 1 }}>
                  <img
                    src={post.img}
                    alt={post.title}
                    style={{ width: '100%', height: '360px', objectFit: 'cover', display: 'block' }}
                  />
                </div>
                <div style={{
                  padding: 'clamp(2rem, 5vw, 4rem)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  gap: '1rem',
                  order: i % 2 === 0 ? 1 : 0,
                }}>
                  <p className="eyebrow">{post.category}</p>
                  <h2 style={{ fontSize: 'clamp(1.4rem, 3vw, 2rem)', lineHeight: 1.2 }}>{post.title}</h2>
                  <p style={{ fontSize: '0.8rem', color: 'var(--text-light)', letterSpacing: '0.06em' }}>
                    {post.date} · {post.author}
                  </p>
                  <p style={{ color: 'var(--text-muted)', maxWidth: '52ch' }}>{post.excerpt}</p>
                  <Link to={`/${post.slug}`} className="btn btn-outline" style={{ alignSelf: 'flex-start' }}>
                    Read More
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
