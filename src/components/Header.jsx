import { NavLink, Link } from 'react-router-dom'
import { useEffect, useState } from 'react'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`site-header ${scrolled ? 'scrolled' : ''}`}>
      <div className="container nav">
        <Link to="/" className="brand">
          <img src="/assets/logo.png" alt="GrowthStrats Build Logo" style={{ height: '48px', width: 'auto', display: 'block', objectFit: 'contain' }} />
        </Link>
        <button className="mobile-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
          <span /><span /><span />
        </button>
        <nav className={`nav-links ${menuOpen ? 'open' : ''}`}>
          <NavLink to="/" end onClick={() => setMenuOpen(false)}>Home</NavLink>
          <NavLink to="/about" onClick={() => setMenuOpen(false)}>About</NavLink>
          <NavLink to="/services" onClick={() => setMenuOpen(false)}>Services</NavLink>
          <NavLink to="/portfolio" onClick={() => setMenuOpen(false)}>Portfolio</NavLink>
          {/* <NavLink to="/blog" onClick={() => setMenuOpen(false)}>Blog</NavLink> */}
          <Link to="/contact" className="btn btn-primary btn-shimmer" style={{ color: '#ffffff' }} onClick={() => setMenuOpen(false)}>Get a Quote</Link>
        </nav>
      </div>
    </header>
  )
}
