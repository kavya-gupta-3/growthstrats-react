import { useEffect, useState } from 'react'
import ScrollReveal from '../components/ScrollReveal'
import GlowCard from '../components/GlowCard'
import { IconMail, IconMapPin } from '../components/Icons'

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)

  useEffect(() => {
    document.title = 'Contact — GrowthStrats Build'
    window.scrollTo(0, 0)
  }, [])

  function handleSubmit(e) {
    e.preventDefault()
    const form = e.target
    const formData = new FormData(form)
    
    fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: formData,
    })
      .then(res => res.json())
      .then(() => {
        setSubmitted(true)
        form.reset()
      })
      .catch(() => {
        setSubmitted(true)
      })
  }

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <ScrollReveal>
            <span className="eyebrow">Contact us</span>
            <h1>Let's scope your project — usually within 24 hours.</h1>
            <p>Tell us what you're trying to build (or replatform). We'll come back with a fixed quote, a delivery date, and a few examples of similar work.</p>
          </ScrollReveal>
        </div>
      </section>

      <section style={{ paddingTop: 0 }}>
        <div className="container split">
          <ScrollReveal direction="left">
            <form onSubmit={handleSubmit} className="form">
              <input type="hidden" name="access_key" value="2312d4b5-150c-421d-8857-c63abe3a09dd" />
              <div className="form-row">
                <div className="field">
                  <label htmlFor="name">Your name</label>
                  <input id="name" name="name" type="text" placeholder="Jane Doe" required />
                </div>
                <div className="field">
                  <label htmlFor="email">Work email</label>
                  <input id="email" name="email" type="email" placeholder="jane@company.com" required />
                </div>
              </div>
              <div className="form-row">
                <div className="field">
                  <label htmlFor="company">Company</label>
                  <input id="company" name="company" type="text" placeholder="Acme Inc." />
                </div>
                <div className="field">
                  <label htmlFor="region">Region</label>
                  <select id="region" name="region">
                    <option>United States</option>
                    <option>United Kingdom</option>
                    <option>Australia</option>
                    <option>Other</option>
                  </select>
                </div>
              </div>
              <div className="form-row">
                <div className="field">
                  <label htmlFor="project">Project type</label>
                  <select id="project" name="project">
                    <option>Landing page</option>
                    <option>Ecommerce store</option>
                    <option>Corporate website</option>
                    <option>Service business site</option>
                    <option>SaaS / web app</option>
                    <option>Revamp / migration</option>
                    <option>Not sure yet</option>
                  </select>
                </div>
                <div className="field">
                  <label htmlFor="budget">Budget range</label>
                  <select id="budget" name="budget">
                    <option>Under $2,000</option>
                    <option>$2,000 – $6,000</option>
                    <option>$6,000 – $15,000</option>
                    <option>$15,000 – $50,000</option>
                    <option>$50,000+</option>
                    <option>Not sure</option>
                  </select>
                </div>
              </div>
              <div className="field">
                <label htmlFor="message">Tell us about the project</label>
                <textarea id="message" name="message" placeholder="What are you building? What platform? Any deadlines we should know about?" />
              </div>
              <button type="submit" className="btn btn-primary btn-shimmer">Send request</button>
              {submitted && (
                <p style={{ marginTop: 16, color: 'var(--color-accent)', fontWeight: 600 }}>
                  Thanks — we'll get back to you within one business day.
                </p>
              )}
            </form>
          </ScrollReveal>

          <ScrollReveal direction="right" delay={200}>
            <div>
              <span className="eyebrow">Other ways to reach us</span>
              <h2>We're online during your working hours.</h2>
              <p>Our team covers US, UK, and Australian time zones with overlap built into the schedule.</p>

              <div className="grid-2" style={{ marginTop: 24 }}>
                <GlowCard>
                  <div className="card-header">
                    <div className="icon"><IconMail /></div>
                    <h3>Email</h3>
                  </div>
                  <p><a href="mailto:hello@growthstrats.com">hello@growthstrats.com</a></p>
                  <p style={{ margin: 0, fontSize: 13 }}>Average reply: under 4 working hours.</p>
                </GlowCard>
                <GlowCard>
                  <div className="card-header">
                    <div className="icon"><IconMapPin /></div>
                    <h3>Offices</h3>
                  </div>
                  <p style={{ marginBottom: 16 }}>
                    <strong>India</strong><br/>
                    235, BINNAMANGALA, 2nd Floor, 13th Cross Road, Indira Nagar 2nd Stage, Bengaluru – 560038
                  </p>
                  <p style={{ margin: 0 }}>
                    <strong>US</strong><br/>
                    1309 Coffeen Ave STE 1200, Sheridan, WY 82801, United States
                  </p>
                </GlowCard>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-soft">
        <div className="container">
          <ScrollReveal>
            <div className="center">
              <span className="eyebrow">Common questions</span>
              <h2>Before you fill out the form</h2>
            </div>
          </ScrollReveal>

          <div className="grid-2" style={{ marginTop: 48 }}>
            {[
              { title: 'How fast can you ship?', desc: 'A landing page typically goes live in 3–7 days. Full corporate sites or ecommerce stores take 2–4 weeks. SaaS projects scope individually.' },
              { title: 'Do we own the code and accounts?', desc: 'Yes — everything transfers to you on launch day. Code, designs, CMS access, hosting, analytics. No lock-in.' },
              { title: 'How do you actually use AI?', desc: 'AI helps us at every stage — discovery research, design mockups, code generation, content drafting, QA. Senior engineers review every output before it ships.' },
              { title: 'Do you do ongoing maintenance?', desc: 'Optional retainers are available after launch for updates, content changes, performance work, and new pages.' },
            ].map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 100}>
                <GlowCard>
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </GlowCard>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
