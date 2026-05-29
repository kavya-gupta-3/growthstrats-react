import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import ScrollReveal from '../components/ScrollReveal'
import StatCounter from '../components/StatCounter'

const projects = [
  {
    img: '/assets/portfolio_myreminder.png',
    category: 'SaaS',
    meta: 'Web App · SaaS',
    title: 'MyReminder.xyz — AI-Powered Birthday Reminders',
    desc: 'Never forget another birthday! Create personalized reminders with AI-powered messages. Get notifications and send heartfelt wishes to your loved ones.',
    tags: ['AI Integration', 'Next.js', 'Web App'],
    link: 'https://myreminder.xyz',
  },
  {
    img: '/assets/portfolio_nddb.png',
    category: 'Corporate',
    meta: 'Corporate · Agriculture',
    title: 'NDDB Dairy Services — Institutional & Livestock Development Platform',
    desc: 'Empowering millions of rural dairy farmers. Designed and developed a secure, multi-tenant digital infrastructure facilitating Milk Producer Organisations (MPOs) and Superior Animal Genetics (SAG) nationwide.',
    tags: ['React', 'Corporate', 'Enterprise'],
    link: 'https://www.nddbdairyservices.com/',
  },
  {
    img: '/assets/portfolio_techcognate.png',
    category: 'Corporate',
    meta: 'Corporate · Digital Agency',
    title: 'TechCognate — Digital Agency Website',
    desc: 'Full-service Digital Agency serving in various domains. We are result driven and specialized in SEO, content marketing, link building, web design, and development.',
    tags: ['Corporate', 'SEO', 'Web Design'],
    link: 'https://www.techcognate.com/',
  },
  {
    img: '/assets/portfolio_alamadhi.png',
    category: 'Service business',
    meta: 'Biotech · Service Business',
    title: 'Alamadhi Semen Station — Bovine Genetics & Training Portal',
    desc: 'A Grade "A" biotechnology and livestock training repository managing over 300 elite bulls, native breeds conservation, and state-of-the-art animal husbandry education programs.',
    tags: ['Biotech', 'Service Business', 'Training Portal'],
    link: 'https://alamadhisemenstation.com/',
  },
  {
    img: '/assets/portfolio_telesleep.png',
    category: 'Service business',
    meta: 'Healthcare · Service Business',
    title: 'TeleSleep Clinic — Sleep Consultation Platform',
    desc: 'Convenient At-Home Sleep Apnea Testing & Virtual Sleep Consultations — No Insurance Needed. Fast Shipping & Easy Scheduling. Book Your Sleep Test Today!',
    tags: ['Healthcare', 'Telehealth', 'Booking'],
    link: 'https://telesleepclinic.com/',
  },
]

const categories = ['All work', 'Landing pages', 'Ecommerce', 'Corporate', 'Service business', 'SaaS']

export default function Portfolio() {
  const [active, setActive] = useState('All work')

  useEffect(() => {
    document.title = 'Portfolio — GrowthStrats Build'
    window.scrollTo(0, 0)
  }, [])

  const filtered = active === 'All work' ? projects : projects.filter(p => p.category === active)

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <ScrollReveal>
            <span className="eyebrow">Portfolio</span>
            <h1>Selected work from our AI-powered studio.</h1>
            <p>A snapshot of the kinds of builds we ship — landing pages, ecommerce stores, corporate sites, service business pages, and SaaS apps. New case studies added as projects launch.</p>
          </ScrollReveal>
        </div>
      </section>

      <section style={{ paddingTop: 0 }}>
        <div className="container">
          <ScrollReveal>
            <div className="filter-chips">
              {categories.map(cat => (
                <button
                  key={cat}
                  className={`chip ${active === cat ? 'active' : ''}`}
                  onClick={() => setActive(cat)}
                >
                  {cat}
                </button>
              ))}
            </div>
          </ScrollReveal>

          <div className="portfolio-grid">
            {filtered.map((project, i) => (
              <ScrollReveal key={project.title} delay={i * 100}>
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-card-link">
                  <article className="project-card">
                    <div className="thumb" style={{ backgroundImage: `url('${project.img}')` }} />
                    <div className="body">
                      <div className="meta">{project.meta}</div>
                      <h3>{project.title}</h3>
                      <p>{project.desc}</p>
                      <div className="tags">
                        {project.tags.map(tag => <span key={tag} className="tag">{tag}</span>)}
                      </div>
                    </div>
                  </article>
                </a>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Stats band */}
      <section className="section-dark">
        <div className="container">
          <ScrollReveal>
            <div className="center">
              <span className="eyebrow">By the numbers</span>
              <h2>Built for speed, scaled with AI</h2>
            </div>
          </ScrollReveal>
          <div className="stats">
            <StatCounter value="120" suffix="+" label="Projects launched" />
            <StatCounter value="4" suffix="d" label="Average landing page time" />
            <StatCounter value="3" label="Continents served" />
            <StatCounter value="98" suffix="%" label="On-time delivery rate" />
          </div>
          <ScrollReveal delay={200}>
            <div className="cta-band" style={{ marginTop: 64 }}>
              <h3>Ready to ship a site that pays for itself?</h3>
              <Link to="/contact" className="btn btn-primary btn-shimmer">Get a Quote</Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}
