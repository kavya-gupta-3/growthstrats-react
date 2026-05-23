import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import ScrollReveal from '../components/ScrollReveal'
import GlowCard from '../components/GlowCard'
import { IconGlobe, IconStar } from '../components/Icons'

export default function About() {
  useEffect(() => {
    document.title = 'About — GrowthStrats Build'
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <ScrollReveal>
            <span className="eyebrow">About us</span>
            <h1>An AI-first studio, on the record about it.</h1>
            <p>We started GrowthStrats Build because we saw something the industry wasn't saying out loud: AI has already changed how websites get made. Most agencies are using it quietly. We use it openly — and pass the speed and savings to you.</p>
          </ScrollReveal>
        </div>
      </section>

      {/* Story */}
      <section>
        <div className="container split">
          <ScrollReveal direction="left">
            <div>
              <span className="eyebrow">Our story</span>
              <h2>Built for a market that needed honesty.</h2>
              <p>Across the US, UK, and Australia, small and mid-sized businesses still pay traditional agency rates for the same work AI now helps deliver in a fraction of the time. Many agencies use AI behind the scenes but bill as if they don't.</p>
              <p>GrowthStrats Build is the opposite. We're an AI-native studio staffed entirely by senior AI engineers who lead every project end-to-end. We use AI everywhere it helps — discovery, design, code, QA, and content — and we charge for the work, not the wait.</p>
              <p>We're a sister brand to <a href="https://growthstrats.com/" target="_blank" rel="noopener">GrowthStrats</a>, the AI-driven marketing agency. While that team handles paid media, SEO, and growth strategy, Build focuses on what you launch and where customers land.</p>
            </div>
          </ScrollReveal>
          <ScrollReveal direction="right" delay={200}>
            <div aria-hidden="true">
              <svg className="illustration" viewBox="0 0 560 420" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="bg3" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#eef4ff"/>
                    <stop offset="100%" stopColor="#e6fbff"/>
                  </linearGradient>
                  <linearGradient id="node1" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#2563eb"/>
                    <stop offset="100%" stopColor="#06b6d4"/>
                  </linearGradient>
                </defs>
                <rect width="560" height="420" fill="url(#bg3)"/>
                <g stroke="#9bb5e6" strokeWidth="1.5" strokeDasharray="4 4" fill="none" opacity=".7">
                  <line x1="280" y1="210" x2="140" y2="100"/>
                  <line x1="280" y1="210" x2="420" y2="100"/>
                  <line x1="280" y1="210" x2="100" y2="320"/>
                  <line x1="280" y1="210" x2="460" y2="320"/>
                  <line x1="280" y1="210" x2="280" y2="60"/>
                  <line x1="280" y1="210" x2="280" y2="360"/>
                </g>
                <g transform="translate(280,210)">
                  <circle r="58" fill="url(#node1)"/>
                  <circle r="58" fill="none" stroke="#fff" strokeWidth="2" opacity=".4"/>
                  <text y="-4" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="14" fontWeight="700" fill="#fff">AI Studio</text>
                  <text y="16" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="10" fill="#fff" opacity=".85">core team</text>
                </g>
                <g fontFamily="Inter, sans-serif" fontSize="11" fontWeight="600" fill="#0f172a">
                  <g transform="translate(140,100)">
                    <circle r="34" fill="#fff" stroke="#cfd8ea" strokeWidth="2"/>
                    <text textAnchor="middle" y="2">Engineering</text>
                    <text textAnchor="middle" y="18" fontSize="9" fill="#64748b">React · Next</text>
                  </g>
                  <g transform="translate(420,100)">
                    <circle r="34" fill="#fff" stroke="#cfd8ea" strokeWidth="2"/>
                    <text textAnchor="middle" y="2">Design</text>
                    <text textAnchor="middle" y="18" fontSize="9" fill="#64748b">UX · Brand</text>
                  </g>
                  <g transform="translate(100,320)">
                    <circle r="34" fill="#fff" stroke="#cfd8ea" strokeWidth="2"/>
                    <text textAnchor="middle" y="2">Delivery</text>
                    <text textAnchor="middle" y="18" fontSize="9" fill="#64748b">Ops · QA</text>
                  </g>
                  <g transform="translate(460,320)">
                    <circle r="34" fill="#fff" stroke="#cfd8ea" strokeWidth="2"/>
                    <text textAnchor="middle" y="2">Strategy</text>
                    <text textAnchor="middle" y="18" fontSize="9" fill="#64748b">Growth</text>
                  </g>
                  <g transform="translate(280,60)">
                    <circle r="28" fill="#fff" stroke="#cfd8ea" strokeWidth="2"/>
                    <text textAnchor="middle" y="4">Clients</text>
                  </g>
                  <g transform="translate(280,360)">
                    <circle r="28" fill="#fff" stroke="#cfd8ea" strokeWidth="2"/>
                    <text textAnchor="middle" y="4">Partners</text>
                  </g>
                </g>
              </svg>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Principles */}
      <section className="section-soft">
        <div className="container">
          <ScrollReveal>
            <div className="center">
              <span className="eyebrow">How we operate</span>
              <h2>Four principles we don't break</h2>
            </div>
          </ScrollReveal>

          <div className="grid-2" style={{ marginTop: 48 }}>
            {[
              { title: 'Transparent about AI', desc: 'We tell you exactly where AI is used in your project, what the engineers do by hand, and how that shapes the timeline and price. No marketing fog.' },
              { title: 'Senior engineers only', desc: 'Every project is owned by a senior AI-enabled developer or designer. No outsourced juniors, no shifting team, no surprise handoffs.' },
              { title: 'Fixed quotes, fast delivery', desc: "We quote a flat price and a delivery date in the first call. AI lets us commit to timelines that traditional agencies can't." },
              { title: 'You own everything', desc: 'Code, designs, accounts, deployments — all transferred to you on day one of launch. No vendor lock-in.' },
            ].map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 100}>
                <GlowCard>
                  <div className="card-header">
                    <div className="icon"><IconStar /></div>
                    <h3>{item.title}</h3>
                  </div>
                  <p>{item.desc}</p>
                </GlowCard>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Markets */}
      <section>
        <div className="container">
          <ScrollReveal>
            <div className="center">
              <span className="eyebrow">Where we work</span>
              <h2>Serving SMBs in three markets</h2>
              <p className="lead center">Time zones covered, accents understood, billing in your currency.</p>
            </div>
          </ScrollReveal>

          <div className="grid-3" style={{ marginTop: 48 }}>
            {[
              { title: 'United States', desc: 'Coast-to-coast coverage with overlap into Pacific time. USD billing and US-compliant data handling.', icon: <IconGlobe /> },
              { title: 'United Kingdom', desc: 'Mainland UK and Ireland. GBP billing, GDPR-aware delivery, and full UK English content production.', icon: <IconGlobe /> },
              { title: 'Australia', desc: 'Sydney to Perth. AUD billing, Australian English defaults, and a team that overlaps with your morning.', icon: <IconGlobe /> },
            ].map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 100}>
                <GlowCard>
                  <div className="card-header">
                    <div className="icon">{item.icon}</div>
                    <h3>{item.title}</h3>
                  </div>
                  <p>{item.desc}</p>
                </GlowCard>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership team */}
      <section className="section-soft">
        <div className="container">
          <ScrollReveal>
            <div className="center">
              <span className="eyebrow">Leadership</span>
              <h2>Meet the team behind your build</h2>
              <p className="lead center">A small, senior team of AI-enabled engineers, designers, and operators — covering US, UK, and AU hours.</p>
            </div>
          </ScrollReveal>

          <div className="team-grid" style={{ marginTop: 48 }}>
            {[
              { name: 'Arvind', role: 'Chief Strategist', bio: 'Leads the vision, growth strategy, and AI-first digital transformation initiatives at Growth Strats, helping businesses scale through modern technology and intelligent execution.', img: '/assets/team_1.png', links: [{ text: 'Email', url: 'mailto:info@growthstrats.com' }] },
              { name: 'Umesh', role: 'CTO', bio: 'Oversees AI engineering, development architecture, and scalable technology solutions, ensuring high-performance digital products and efficient AI-enabled workflows.', img: '/assets/team_4.jpeg', links: [] },
              { name: 'Mini', role: 'COO / CPO', bio: 'Drives operations, product execution, and client delivery while creating seamless digital experiences focused on business growth and customer success.', img: '/assets/team_5.jpeg', links: [] },
              { name: 'Kavya', role: 'AI Solution Lead', bio: 'Focused on AI research, solution experimentation, and implementation support, helping drive innovation and AI-enabled workflows across digital products and client solutions at Growth Strats.', img: '/assets/team_3.jpeg', links: [] },
              { name: 'Saurav', role: 'Client Success Manager', bio: 'Manages client communication, project coordination, and ongoing service relationships to ensure smooth delivery, strong collaboration, and long-term client success.', img: '/assets/team_2.jpeg', links: [] },
            ].map((member, i) => (
              <ScrollReveal key={i} delay={i * 100}>
                <div className="team-card">
                  <img className="photo" src={member.img} alt={member.name} />
                  <div className="body">
                    <h3>{member.name}</h3>
                    <div className="role">{member.role}</div>
                    <p>{member.bio}</p>
                    {member.links && member.links.length > 0 && (
                      <div className="links">
                        {member.links.map(link => (
                          <a key={link.text} href={link.url}>{link.text}</a>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Roadmap */}
      <section className="section-dark">
        <div className="container">
          <ScrollReveal>
            <div className="kicker-row">
              <div className="kicker-text">
                <span className="eyebrow">What's next</span>
                <h2>From web studio to a full MarTech AI platform</h2>
                <p>Building websites is Phase 1. As our engineers grow into the next wave of AI tooling, we're expanding into MarTech — AI agents, marketing automations, and personalization products that small businesses normally can't afford.</p>
              </div>
            </div>
          </ScrollReveal>

          <div className="grid-3" style={{ marginTop: 24 }}>
            {[
              { title: 'Phase 1 — Web', desc: 'Landing pages, ecommerce, corporate sites, service business pages, SaaS apps. Live today.' },
              { title: 'Phase 2 — MarTech AI', desc: 'Customer journey personalization, AI sales and support agents, automated reporting. Rolling out 2026.' },
              { title: 'Phase 3 — Products', desc: 'Our own SaaS products built for SMB marketing teams. Early R&D underway.' },
            ].map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 100}>
                <GlowCard dark>
                  <div className="card-header">
                    <div className="icon"><IconStar /></div>
                    <h3>{item.title}</h3>
                  </div>
                  <p>{item.desc}</p>
                </GlowCard>
              </ScrollReveal>
            ))}
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
