import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import ScrollReveal from '../components/ScrollReveal'
import GlowCard from '../components/GlowCard'
import { IconBolt, IconCart, IconBuilding, IconWrench, IconRocket, IconRefresh } from '../components/Icons'
import Testimonials from '../components/Testimonials'
export default function Services() {
  useEffect(() => {
    document.title = 'Services — GrowthStrats Build'
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <ScrollReveal>
            <span className="eyebrow">Services</span>
            <h1>Everything you'd hire a web agency for — built by AI engineers.</h1>
            <p>We build from scratch or revamp existing sites. Every project is owned by a senior AI-enabled engineer who knows your stack inside out.</p>
          </ScrollReveal>
        </div>
      </section>

      {/* Service categories */}
      <section>
        <div className="container">
          <div className="grid-2">
            {[
              { icon: <IconBolt />, title: 'Landing Pages for Ads & Campaigns', desc: 'Pages built for paid media, product launches, lead capture, and webinar funnels. Conversion-focused copy, fast load times, and analytics wired up from day one. Typical turnaround: 3–7 days.' },
              { icon: <IconCart />, title: 'Ecommerce Stores', desc: 'New stores or replatforms on Shopify, WooCommerce, BigCommerce, Magento, or headless setups. Catalog migration, payments, shipping rules, and conversion-optimized templates included.' },
              { icon: <IconBuilding />, title: 'Corporate Websites', desc: 'Polished brand sites for established companies — on WordPress, Drupal, Wix, or modern Next.js stacks. CMS training included so your team can update content without us.' },
              { icon: <IconWrench />, title: 'Service Business Sites', desc: 'For consultants, agencies, clinics, contractors, and local services. Designed to convert search and referral traffic into booked calls.' },
              { icon: <IconRocket />, title: 'SaaS Applications & MVPs', desc: 'Full-stack web apps in React, Next.js, and modern backends. From scoped MVPs for founders to production builds for funded startups.' },
              { icon: <IconRefresh />, title: 'Revamps & Migrations', desc: 'Replatform Wix → Shopify, redesign a dated WordPress site, modernize a Magento store, or move a custom build to a managed CMS. We migrate content, redirects, and SEO equity carefully.' },
            ].map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 80}>
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


      {/* Testimonials */}
      <Testimonials />

      {/* Engagement options / pricing */}
      <section>
        <div className="container">
          <ScrollReveal>
            <div className="center">
              <span className="eyebrow">Engagement options</span>
              <h2>Three ways to work with us</h2>
              <p className="lead center">Pick the model that fits the project. Every quote is fixed-price with a delivery date.</p>
            </div>
          </ScrollReveal>

          <div className="tiers" style={{ marginTop: 48 }}>
            <ScrollReveal delay={0}>
              <div className="tier">
                <h3>Quick Build</h3>
                <div className="price">From $1,500 <small>/ project</small></div>
                <p>For landing pages, single-page promos, and small marketing sites.</p>
                <ul>
                  <li>1–5 pages, fully designed</li>
                  <li>Mobile-first, fast loading</li>
                  <li>Analytics + tracking setup</li>
                  <li>3–7 day delivery</li>
                </ul>
                <Link to="/contact" className="btn btn-ghost">Request a quote</Link>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <div className="tier featured">
                <span className="tag">Most popular</span>
                <h3>Studio Build</h3>
                <div className="price">From $6,000 <small>/ project</small></div>
                <p>For corporate sites, service business sites, and ecommerce stores.</p>
                <ul>
                  <li>Up to 20 pages or 100 products</li>
                  <li>Custom design system</li>
                  <li>CMS or storefront setup</li>
                  <li>Migrations + SEO redirects</li>
                  <li>2–4 week delivery</li>
                </ul>
                <Link to="/contact" className="btn btn-primary btn-shimmer">Request a quote</Link>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <div className="tier">
                <h3>SaaS / Custom</h3>
                <div className="price">Custom <small>quote</small></div>
                <p>For SaaS MVPs, custom web apps, and large replatforms.</p>
                <ul>
                  <li>Discovery + technical scoping</li>
                  <li>Full-stack engineering team</li>
                  <li>Auth, payments, integrations</li>
                  <li>Production deployment + handover</li>
                  <li>Ongoing retainer optional</li>
                </ul>
                <Link to="/contact" className="btn btn-ghost">Talk to us</Link>
              </div>
            </ScrollReveal>
          </div>
          <p className="center" style={{ marginTop: 32, fontSize: 14 }}>Prices indicative for prototyping. Final quote provided after a 30-minute scoping call.</p>
        </div>
      </section>

      {/* Tech we support */}
      <section className="section-soft">
        <div className="container">
          <ScrollReveal>
            <div className="kicker-row">
              <div className="kicker-text">
                <span className="eyebrow">Tech we support</span>
                <h2>Whichever platform fits your business — we already work in it.</h2>
                <p>We're not platform-religious. We help you pick the right stack and stick to what your team can maintain.</p>
              </div>
            </div>
          </ScrollReveal>

          <div className="grid-4">
            {[
              { title: 'React / Next.js', desc: 'For SaaS, headless commerce, and high-performance brand sites.' },
              { title: 'WordPress', desc: 'For corporate sites, blogs, and content-heavy publishers.' },
              { title: 'Shopify', desc: 'The default for fast-launching DTC and small ecommerce.' },
              { title: 'WooCommerce', desc: 'WordPress-native ecommerce for stores with custom logic.' },
              { title: 'BigCommerce', desc: 'Mid-market ecommerce with strong out-of-the-box features.' },
              { title: 'Magento', desc: 'Enterprise-grade ecommerce, B2B, and complex catalogs.' },
              { title: 'Drupal', desc: 'Editorial, government, and structured-content workflows.' },
              { title: 'Wix', desc: 'For small sites that need to stay self-serve after launch.' },
            ].map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 60}>
                <GlowCard>
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </GlowCard>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* What's included */}
      <section className="section-soft">
        <div className="container split">
          <ScrollReveal direction="left">
            <div>
              <span className="eyebrow">What every project includes</span>
              <h2>Everything you'd expect — plus the AI advantage.</h2>
              <p>You get a working, modern website without the usual agency overhead. Each project comes with the essentials:</p>
              <ul className="checklist">
                <li>Mobile-first, accessible design</li>
                <li>SEO basics — sitemaps, meta, schema</li>
                <li>Analytics and conversion tracking</li>
                <li>CMS training for non-technical teams</li>
                <li>30-day post-launch support</li>
                <li>Full ownership of code and accounts</li>
              </ul>
            </div>
          </ScrollReveal>
          <ScrollReveal direction="right" delay={200}>
            <div aria-hidden="true">
              <svg className="illustration" viewBox="0 0 560 420" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="bg4" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#eef4ff"/>
                    <stop offset="100%" stopColor="#e6fbff"/>
                  </linearGradient>
                </defs>
                <rect width="560" height="420" fill="url(#bg4)"/>
                <g fontFamily="Inter, sans-serif" fontWeight="700">
                  <g transform="translate(80,60)">
                    <rect width="400" height="60" rx="12" fill="#fff" stroke="#dbe3f3"/>
                    <circle cx="36" cy="30" r="14" fill="#eef4ff"/>
                    <text x="36" y="35" textAnchor="middle" fontSize="12" fill="#2563eb">RE</text>
                    <text x="66" y="28" fontSize="14" fill="#0f172a">React / Next.js</text>
                    <text x="66" y="46" fontSize="11" fontWeight="500" fill="#64748b">SaaS · Headless commerce · Marketing sites</text>
                  </g>
                  <g transform="translate(80,135)">
                    <rect width="400" height="60" rx="12" fill="#fff" stroke="#dbe3f3"/>
                    <circle cx="36" cy="30" r="14" fill="#eef4ff"/>
                    <text x="36" y="35" textAnchor="middle" fontSize="12" fill="#2563eb">WP</text>
                    <text x="66" y="28" fontSize="14" fill="#0f172a">WordPress</text>
                    <text x="66" y="46" fontSize="11" fontWeight="500" fill="#64748b">Corporate · Blogs · Content-heavy publishers</text>
                  </g>
                  <g transform="translate(80,210)">
                    <rect width="400" height="60" rx="12" fill="#fff" stroke="#dbe3f3"/>
                    <circle cx="36" cy="30" r="14" fill="#e6fbff"/>
                    <text x="36" y="35" textAnchor="middle" fontSize="12" fill="#06b6d4">SH</text>
                    <text x="66" y="28" fontSize="14" fill="#0f172a">Shopify</text>
                    <text x="66" y="46" fontSize="11" fontWeight="500" fill="#64748b">DTC · Small ecommerce · Quick launches</text>
                  </g>
                  <g transform="translate(80,285)">
                    <rect width="400" height="60" rx="12" fill="#fff" stroke="#dbe3f3"/>
                    <circle cx="36" cy="30" r="14" fill="#e6fbff"/>
                    <text x="36" y="35" textAnchor="middle" fontSize="12" fill="#06b6d4">WC</text>
                    <text x="66" y="28" fontSize="14" fill="#0f172a">WooCommerce / Magento</text>
                    <text x="66" y="46" fontSize="11" fontWeight="500" fill="#64748b">B2B ecommerce · Custom catalogs</text>
                  </g>
                  <g transform="translate(80,360)">
                    <rect width="400" height="36" rx="12" fill="#0b1736"/>
                    <text x="200" y="22" textAnchor="middle" fontSize="12" fill="#67e8f9">+ Drupal · BigCommerce · Wix</text>
                  </g>
                </g>
              </svg>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Phase 2 teaser */}
      <section className="section-dark">
        <div className="container">
          <ScrollReveal>
            <div className="center">
              <span className="eyebrow">Coming in 2026</span>
              <h2>Phase 2 — MarTech AI</h2>
              <p className="lead center">Our engineers are already in training on the next layer of AI tools. Phase 2 brings practical AI products to the same SMB customers we already serve.</p>
            </div>
          </ScrollReveal>

          <div className="grid-3" style={{ marginTop: 48 }}>
            {[
              { title: 'AI sales & support agents', desc: 'Chat agents that book calls, qualify leads, and answer product questions on your site.' },
              { title: 'Marketing automations', desc: 'Email, SMS, and lifecycle flows that run on AI, not rigid rules.' },
              { title: 'Customer journey personalization', desc: 'Site content that adapts to who\'s visiting and where they came from.' },
            ].map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 100}>
                <GlowCard dark>
                  <h3>{item.title}</h3>
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
