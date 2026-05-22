import { useEffect, useState } from 'react'
import ScrollReveal from '../components/ScrollReveal'

const categories = ['All posts', 'AI & Workflow', 'Web Development', 'Ecommerce', 'Conversion', 'Case Studies']

const posts = [
  { cat: 'Conversion', title: 'The five elements every landing page needs in 2026', excerpt: 'Hero, proof, demo, FAQ, and call-to-action — but the order, and the way you write them, matters more than the elements themselves.', author: 'Maya Chen', date: 'May 5, 2026', img: 'https://picsum.photos/seed/post-1/600/400', avatar: 'https://i.pravatar.cc/100?img=33' },
  { cat: 'Ecommerce', title: 'Shopify vs. WooCommerce in 2026 — an honest comparison', excerpt: 'Tax, payments, plugins, app sprawl, total cost of ownership. The right answer is almost never "whichever one you already know."', author: "Daniel O'Hara", date: 'Apr 28, 2026', img: 'https://picsum.photos/seed/post-2/600/400', avatar: 'https://i.pravatar.cc/100?img=47' },
  { cat: 'AI & Workflow', title: 'What AI is actually good at in front-end development', excerpt: "After a year of using copilots on every project, here's the honest list of where they speed us up — and where they slow us down.", author: 'Priya Iyer', date: 'Apr 20, 2026', img: 'https://picsum.photos/seed/post-3/600/400', avatar: 'https://i.pravatar.cc/100?img=26' },
  { cat: 'Case Studies', title: 'How Heirloom Goods went from Etsy to $30k/mo on Shopify', excerpt: 'A breakdown of the rebrand, migration, and post-launch automations that doubled their average order value in three months.', author: 'Arvind Patil', date: 'Apr 14, 2026', img: 'https://picsum.photos/seed/post-4/600/400', avatar: 'https://i.pravatar.cc/100?img=12' },
  { cat: 'Web Development', title: 'Why we still recommend WordPress for most corporate sites', excerpt: "It's not the trendiest stack, but for content-heavy brand sites with non-technical editors, it's still hard to beat. Here's the case.", author: 'Maya Chen', date: 'Apr 7, 2026', img: 'https://picsum.photos/seed/post-5/600/400', avatar: 'https://i.pravatar.cc/100?img=33' },
  { cat: 'AI & Workflow', title: 'Designing prompts for design — getting consistent UI from AI tools', excerpt: "A pattern library of prompts our team uses to get mockups that don't need ten rounds of revisions.", author: "Daniel O'Hara", date: 'Mar 30, 2026', img: 'https://picsum.photos/seed/post-6/600/400', avatar: 'https://i.pravatar.cc/100?img=47' },
  { cat: 'Conversion', title: 'The pricing page experiment that lifted demos by 38%', excerpt: 'Three small changes to a SaaS pricing page — what we tested, what worked, and what bombed.', author: 'Priya Iyer', date: 'Mar 22, 2026', img: 'https://picsum.photos/seed/post-7/600/400', avatar: 'https://i.pravatar.cc/100?img=26' },
  { cat: 'Ecommerce', title: 'Replatforming without losing SEO equity — a checklist', excerpt: 'Wix to Shopify, Magento to BigCommerce — the redirects, schema, and analytics steps that protect your rankings during a move.', author: 'Arvind Patil', date: 'Mar 15, 2026', img: 'https://picsum.photos/seed/post-8/600/400', avatar: 'https://i.pravatar.cc/100?img=12' },
  { cat: 'Case Studies', title: 'FleetIQ: shipping a SaaS MVP in 8 weeks with a 2-person team', excerpt: 'Scope, stack, what we cut, what we kept, and the AI-assisted code review that made the small team viable.', author: 'Maya Chen', date: 'Mar 8, 2026', img: 'https://picsum.photos/seed/post-9/600/400', avatar: 'https://i.pravatar.cc/100?img=33' },
]

export default function Blog() {
  const [active, setActive] = useState('All posts')

  useEffect(() => {
    document.title = 'Blog — GrowthStrats Build'
    window.scrollTo(0, 0)
  }, [])

  const filtered = active === 'All posts' ? posts : posts.filter(p => p.cat === active)

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <ScrollReveal>
            <span className="eyebrow">Blog</span>
            <h1>Notes from an AI-first web studio.</h1>
            <p>How we ship websites in days, what AI actually changes in our workflow, and tactics small and mid-sized businesses can use today.</p>
          </ScrollReveal>
        </div>
      </section>

      <section style={{ paddingTop: 0 }}>
        <div className="container">
          <ScrollReveal>
            <div className="filter-chips">
              {categories.map(cat => (
                <button key={cat} className={`chip ${active === cat ? 'active' : ''}`} onClick={() => setActive(cat)}>
                  {cat}
                </button>
              ))}
            </div>
          </ScrollReveal>

          {/* Featured */}
          <ScrollReveal>
            <article className="blog-featured">
              <div className="thumb" style={{ backgroundImage: "url('https://picsum.photos/seed/build-featured/900/600')" }} />
              <div className="body">
                <div className="meta">Featured · AI &amp; Workflow</div>
                <h2>How we cut a 6-week website build down to 6 days</h2>
                <p>A walkthrough of every step where AI saves us time — and the moments where senior engineers still take over by hand. Honest numbers from our last ten builds.</p>
                <div className="byline">
                  <img src="https://i.pravatar.cc/100?img=12" alt="Arvind Patil" />
                  <span><strong>Arvind Patil</strong> · May 12, 2026 · 8 min read</span>
                </div>
              </div>
            </article>
          </ScrollReveal>

          {/* Grid */}
          <div className="blog-grid">
            {filtered.map((post, i) => (
              <ScrollReveal key={post.title} delay={i * 80}>
                <article className="post-card">
                  <div className="thumb" style={{ backgroundImage: `url('${post.img}')` }} />
                  <div className="body">
                    <div className="meta">{post.cat}</div>
                    <h3>{post.title}</h3>
                    <p className="excerpt">{post.excerpt}</p>
                    <div className="byline">
                      <img src={post.avatar} alt={post.author} />
                      <span><strong>{post.author}</strong> · {post.date}</span>
                    </div>
                  </div>
                </article>
              </ScrollReveal>
            ))}
          </div>

          <p className="center" style={{ marginTop: 48, fontSize: 14, color: 'var(--color-muted)' }}>
            Placeholder articles shown for prototype purposes. Swap in your real posts as you publish.
          </p>
        </div>
      </section>

      {/* Newsletter band */}
      <section className="section-soft">
        <div className="container">
          <ScrollReveal direction="scale">
            <div className="cta-band">
              <h2>One post a week. No filler.</h2>
              <form onSubmit={e => { e.preventDefault(); alert('Thanks — placeholder signup.') }} style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
                <input type="email" placeholder="your@email.com" required style={{ padding: '13px 18px', borderRadius: 999, border: '1px solid rgba(255,255,255,0.4)', background: 'rgba(255,255,255,0.12)', color: '#fff', minWidth: 240, fontFamily: 'inherit', fontSize: 15 }} />
                <button type="submit" className="btn btn-primary btn-shimmer">Subscribe</button>
              </form>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}
