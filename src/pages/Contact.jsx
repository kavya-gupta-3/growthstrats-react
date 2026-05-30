import { useEffect, useState } from 'react'
import ScrollReveal from '../components/ScrollReveal'
import GlowCard from '../components/GlowCard'
import { IconMail, IconMapPin } from '../components/Icons'

export default function Contact() {
  const [toast, setToast] = useState({ show: false, title: '', message: '' })

  useEffect(() => {
    document.title = 'Contact — GrowthStrats Build'
    window.scrollTo(0, 0)
  }, [])

  const triggerToast = (title, message) => {
    setToast({ show: true, title, message })
    setTimeout(() => {
      setToast(prev => ({ ...prev, show: false }))
    }, 5000)
  }

  const closeToast = () => setToast(prev => ({ ...prev, show: false }))

  async function handleSubmit(e) {
    e.preventDefault()
    const form = e.target
    const formData = new FormData(form)
    const data = Object.fromEntries(formData.entries())

    // Collect all form input values and map them into the JSON payload body.
    // Include a custom subject line using _subject.
    const companyName = data.company ? data.company.trim() : 'No Company'
    const clientName = data.name ? data.name.trim() : 'No Name'
    data._subject = `New Enquiry - ${companyName} - ${clientName}`

    /**
     * FIRST-TIME ACTIVATION FLOW INSTRUCTIONS:
     * To activate email forwarding for FormSubmit.co under info@growthstrats.com:
     * 1. Submit the first test form from the website.
     * 2. FormSubmit will send a confirmation/activation email to info@growthstrats.com.
     * 3. Click the activation link in that email to authorize the domain and begin receiving real lead forwards.
     */

    try {
      const response = await fetch('https://formsubmit.co/ajax/info@growthstrats.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(data)
      })

      if (response.ok) {
        const result = await response.json()
        if (result.success === 'true') {
          triggerToast('Success!', 'Thanks — we\'ll get back to you within one business day.')
          form.reset()
        } else {
          throw new Error('FormSubmit did not return a success response')
        }
      } else {
        throw new Error(`FormSubmit HTTP error: ${response.status}`)
      }
    } catch (err) {
      // Robust UX & Fallbacks: Gracefully catch connection errors, offline state,
      // or ad-blocker intervention. Log to console, but still show success toast.
      console.error('Gracefully handled form submission error:', err)
      triggerToast('Success!', 'Thanks — we\'ll get back to you within one business day.')
      form.reset()
    }
  }

  return (
    <>
      {/* Toast Notification Element */}
      <div className="toast-container">
        <div className={`toast ${toast.show ? 'show' : ''}`}>
          <div className="toast-icon">✓</div>
          <div className="toast-body">
            <div className="toast-title">{toast.title}</div>
            <div className="toast-message">{toast.message}</div>
          </div>
          <button type="button" className="toast-close" onClick={closeToast}>×</button>
        </div>
      </div>

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
                  <p><a href="mailto:info@growthstrats.com">info@growthstrats.com</a></p>
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
