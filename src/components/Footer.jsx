import { Link } from 'react-router-dom'
import ScrollReveal from './ScrollReveal'
import { IconLinkedin } from './Icons'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <ScrollReveal direction="up">
          <div className="footer-brand">
            <Link to="/" className="brand footer-brand-link" style={{ display: 'inline-block' }}>
              <img src="/assets/Logo-white-1.png" alt="GrowthStrats Build Logo" style={{ height: '48px', width: 'auto', display: 'block', objectFit: 'contain' }} />
            </Link>
            <p>AI-powered web development for small and mid-sized businesses across the US, UK, and Australia.</p>
          </div>
        </ScrollReveal>
        <ScrollReveal direction="up" delay={100}>
          <div>
            <h4>Company</h4>
            <Link to="/about">About</Link>
            <Link to="/services">Services</Link>
            <Link to="/portfolio">Portfolio</Link>
            {/* <Link to="/blog">Blog</Link> */}
            <Link to="/contact">Contact</Link>
          </div>
        </ScrollReveal>
        <ScrollReveal direction="up" delay={200}>
          <div>
            <h4>What we build</h4>
            <Link to="/services">Landing pages</Link>
            <Link to="/services">Ecommerce</Link>
            <Link to="/services">Corporate sites</Link>
            <Link to="/services">SaaS apps</Link>
          </div>
        </ScrollReveal>
        <ScrollReveal direction="up" delay={300}>
          <div>
            <h4>Get in touch</h4>
            <a href="mailto:info@growthstrats.com">info@growthstrats.com</a>
            <Link to="/contact" style={{ marginBottom: '16px' }}>Request a quote</Link>
            <a href="https://www.linkedin.com/company/growthstrats/" target="_blank" rel="noopener noreferrer" className="social-link" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginTop: '8px' }}>
              <IconLinkedin style={{ width: '18px', height: '18px' }} />
              <span>LinkedIn</span>
            </a>
          </div>
        </ScrollReveal>
      </div>
      <div className="container footer-bottom">
        <span>© 2026 GrowthStrats Build. All rights reserved.</span>
        <span>US • UK • Australia</span>
      </div>
    </footer>
  )
}
