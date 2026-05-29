import { Link } from 'react-router-dom'
import ScrollReveal from '../components/ScrollReveal'
import GlowCard from '../components/GlowCard'
import StatCounter from '../components/StatCounter'
import { IconBolt, IconCart, IconBuilding, IconWrench, IconRocket, IconRefresh, IconClockAlt, IconDollar, IconUsers } from '../components/Icons'
import { useEffect, useState, useRef } from 'react'

const teamVideos = [
  {
    name: 'Arvind Patil',
    role: 'Chief Strategist',
    video: '/Videos/arvindv2.mp4',
    poster: '/assets/thumb_arvind.png',
    bio: 'Leads the vision, growth strategy, and AI-first digital transformation initiatives at Growth Strats, helping businesses scale through modern technology and intelligent execution.',
    quote: 'We are reshaping the digital landscape by proving that AI-engineered sites can launch in days, without sacrificing an ounce of premium quality.',
    focus: 'Vision, growth strategies, and enterprise-grade AI solution design.'
  },
  {
    name: 'Umesh',
    role: 'CTO',
    video: '/Videos/umeshv2.mp4',
    poster: '/assets/thumb_umesh.png',
    bio: 'Oversees AI engineering, development architecture, and scalable technology solutions, ensuring high-performance digital products and efficient AI-enabled workflows.',
    quote: 'By equipping senior developers with optimized AI workflows, we eliminate the boilerplate and focus 100% on delivering high-performance, rock-solid architecture.',
    focus: 'Development architecture, performance optimization, and AI toolchains.'
  },
  {
    name: 'Mini',
    role: 'COO / CPO',
    video: '/Videos/miniv1.mp4',
    poster: '/assets/thumb_mini.png',
    bio: 'Drives operations, product execution, and client delivery while creating seamless digital experiences focused on business growth and customer success.',
    quote: 'Our operations are built on radical transparency. You see daily preview links, pay a fixed rate, and own every single line of code from day one.',
    focus: 'Product execution, project delivery, operations, and quality assurance.'
  },
  {
    name: 'Kavya',
    role: 'AI Solution Lead',
    video: '/Videos/kavyav2.mp4',
    poster: '/assets/thumb_kavya.png',
    bio: 'Focused on AI research, solution experimentation, and implementation support, helping drive innovation and AI-enabled workflows across digital products and client solutions.',
    quote: "We don't just use AI to write code; we build custom intelligent solutions directly into our clients' business engines to drive real success.",
    focus: 'AI research, model experimentation, and intelligent tool integrations.'
  }
];

export default function Home() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false); // Track play state
  const videoRef = useRef(null);

  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const handleTouchStart = (e) => {
    touchStartX.current = e.targetTouches[0].clientX;
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    const swipeDistance = touchStartX.current - touchEndX.current;
    if (swipeDistance > 50) {
      handleNext();
    } else if (swipeDistance < -50) {
      handlePrev();
    }
  };

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play().catch(err => {
          console.log("Play failed:", err);
        });
      }
    }
  };

  const changeSlide = (newIndex) => {
    setIsTransitioning(true);
    setTimeout(() => {
      setActiveIndex(newIndex);
      setIsTransitioning(false);
    }, 250);
  };

  const handleNext = () => {
    changeSlide((activeIndex + 1) % teamVideos.length);
  };

  const handlePrev = () => {
    changeSlide((activeIndex - 1 + teamVideos.length) % teamVideos.length);
  };

  useEffect(() => {
    document.title = 'GrowthStrats Build — AI-Powered Web Development for Modern Businesses';
  }, []);

  useEffect(() => {
    setIsPlaying(false); // Reset play state and pause player when activeIndex changes
    if (videoRef.current) {
      videoRef.current.load(); // Load the new video source which automatically shows the poster paused by default
    }
  }, [activeIndex]);

  useEffect(() => {
    // Only auto-slide if the video is NOT currently playing
    if (isPlaying) return;

    // Slide automatically every 4 seconds when the video is paused
    // Using a setTimeout chained to activeIndex/isPlaying changes makes the transition timer extremely robust
    const timer = setTimeout(() => {
      handleNext();
    }, 4000);

    return () => clearTimeout(timer);
  }, [isPlaying, activeIndex]);

  return (
    <>
      {/* Hero */}
      <section className="hero">
        <div className="container hero-grid">
          <ScrollReveal direction="left">
            <div>
              <span className="eyebrow">AI-Powered Web Studio</span>
              <h1>AI-engineered websites, <span className="grad">shipped in days</span> — not months.</h1>
              <p className="lead">
                A 100% AI-enabled web development agency. Senior AI engineers build your landing pages, ecommerce stores, corporate sites, and SaaS applications faster and more affordably than traditional agencies — without compromising on quality or transparency.
              </p>
              <div className="hero-cta">
                <Link to="/contact" className="btn btn-primary btn-shimmer">Start a Project</Link>
                <Link to="/portfolio" className="btn btn-ghost">See What We Build</Link>
              </div>
            </div>
          </ScrollReveal>
          <ScrollReveal direction="right" delay={200}>
            <div className="illustration-wrap" aria-hidden="true">
              <svg className="illustration" viewBox="0 0 560 460" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="AI-powered web development illustration">
                <defs>
                  <linearGradient id="bg1" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#eef4ff"/>
                    <stop offset="100%" stopColor="#e6fbff"/>
                  </linearGradient>
                  <linearGradient id="accent1" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#2563eb"/>
                    <stop offset="100%" stopColor="#06b6d4"/>
                  </linearGradient>
                  <linearGradient id="bar1" x1="0" y1="1" x2="0" y2="0">
                    <stop offset="0%" stopColor="#2563eb" stopOpacity=".25"/>
                    <stop offset="100%" stopColor="#06b6d4"/>
                  </linearGradient>
                </defs>
                <rect width="560" height="460" fill="url(#bg1)"/>
                <g fill="#bcd0f5" opacity=".4">
                  <circle cx="30" cy="30" r="1.5"/><circle cx="80" cy="30" r="1.5"/><circle cx="130" cy="30" r="1.5"/>
                  <circle cx="30" cy="80" r="1.5"/><circle cx="80" cy="80" r="1.5"/>
                  <circle cx="500" cy="400" r="1.5"/><circle cx="530" cy="400" r="1.5"/><circle cx="500" cy="430" r="1.5"/>
                </g>
                <g transform="translate(60,60)">
                  <rect width="420" height="320" rx="14" fill="#ffffff" stroke="#dbe3f3"/>
                  <rect width="420" height="36" rx="14" fill="#f5f7fc"/>
                  <rect y="22" width="420" height="14" fill="#f5f7fc"/>
                  <circle cx="20" cy="18" r="5" fill="#ff5f57"/>
                  <circle cx="38" cy="18" r="5" fill="#febc2e"/>
                  <circle cx="56" cy="18" r="5" fill="#28c840"/>
                  <rect x="90" y="9" width="240" height="18" rx="9" fill="#ffffff" stroke="#e3e8f3"/>
                  <text x="105" y="22" fontFamily="Inter, sans-serif" fontSize="11" fill="#94a3b8">growthstrats.com/build</text>
                  <rect x="0" y="36" width="110" height="284" fill="#fbfcfe"/>
                  <rect x="18" y="58" width="74" height="10" rx="3" fill="#e5e9f2"/>
                  <rect x="18" y="80" width="60" height="8" rx="3" fill="#dbe3f3"/>
                  <rect x="18" y="100" width="74" height="8" rx="3" fill="#dbe3f3"/>
                  <rect x="18" y="120" width="50" height="8" rx="3" fill="#dbe3f3"/>
                  <rect x="18" y="140" width="74" height="8" rx="3" fill="#dbe3f3"/>
                  <rect x="130" y="58" width="170" height="14" rx="4" fill="#0f172a"/>
                  <rect x="130" y="80" width="240" height="8" rx="3" fill="#cfd8ea"/>
                  <rect x="130" y="94" width="200" height="8" rx="3" fill="#cfd8ea"/>
                  <rect x="130" y="120" width="80" height="60" rx="8" fill="#eef4ff"/>
                  <text x="140" y="146" fontFamily="Inter, sans-serif" fontSize="18" fontWeight="700" fill="#2563eb">42%</text>
                  <rect x="140" y="156" width="50" height="6" rx="2" fill="#b9cbf3"/>
                  <rect x="220" y="120" width="80" height="60" rx="8" fill="#e6fbff"/>
                  <text x="230" y="146" fontFamily="Inter, sans-serif" fontSize="18" fontWeight="700" fill="#06b6d4">+3.4x</text>
                  <rect x="230" y="156" width="50" height="6" rx="2" fill="#bfe7f0"/>
                  <rect x="310" y="120" width="80" height="60" rx="8" fill="#f5f7fc"/>
                  <text x="320" y="146" fontFamily="Inter, sans-serif" fontSize="18" fontWeight="700" fill="#0f172a">98</text>
                  <rect x="320" y="156" width="50" height="6" rx="2" fill="#d6dcea"/>
                  <rect x="130" y="194" width="260" height="106" rx="8" fill="#fbfcfe" stroke="#e5e9f2"/>
                  <rect x="146" y="266" width="14" height="22" rx="2" fill="url(#bar1)"/>
                  <rect x="172" y="248" width="14" height="40" rx="2" fill="url(#bar1)"/>
                  <rect x="198" y="236" width="14" height="52" rx="2" fill="url(#bar1)"/>
                  <rect x="224" y="222" width="14" height="66" rx="2" fill="url(#bar1)"/>
                  <rect x="250" y="208" width="14" height="80" rx="2" fill="url(#bar1)"/>
                  <rect x="276" y="226" width="14" height="62" rx="2" fill="url(#bar1)"/>
                  <rect x="302" y="216" width="14" height="72" rx="2" fill="url(#bar1)"/>
                  <rect x="328" y="200" width="14" height="88" rx="2" fill="url(#bar1)"/>
                  <rect x="354" y="208" width="14" height="80" rx="2" fill="url(#bar1)"/>
                  <polyline points="153,260 179,232 205,224 231,206 257,196 283,212 309,200 335,188 361,200" fill="none" stroke="#2563eb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </g>
                <g transform="translate(20,300)">
                  <rect width="180" height="120" rx="12" fill="#0b1736"/>
                  <circle cx="14" cy="14" r="3" fill="#ff5f57"/>
                  <circle cx="26" cy="14" r="3" fill="#febc2e"/>
                  <circle cx="38" cy="14" r="3" fill="#28c840"/>
                  <rect x="14" y="34" width="40" height="6" rx="2" fill="#67e8f9"/>
                  <rect x="58" y="34" width="80" height="6" rx="2" fill="#94a3b8"/>
                  <rect x="14" y="50" width="100" height="6" rx="2" fill="#a5b4fc"/>
                  <rect x="14" y="66" width="60" height="6" rx="2" fill="#67e8f9"/>
                  <rect x="78" y="66" width="50" height="6" rx="2" fill="#94a3b8"/>
                  <rect x="14" y="82" width="120" height="6" rx="2" fill="#a5b4fc"/>
                  <rect x="14" y="98" width="40" height="6" rx="2" fill="#67e8f9"/>
                </g>
                <g transform="translate(440,30)">
                  <circle r="32" cx="32" cy="32" fill="url(#accent1)"/>
                  <path d="M32 18 L34.5 28 L44 30 L34.5 32 L32 42 L29.5 32 L20 30 L29.5 28 Z" fill="#fff"/>
                  <circle cx="48" cy="14" r="3" fill="#fff"/>
                  <circle cx="18" cy="50" r="2" fill="#fff"/>
                </g>
              </svg>

              <div className="float-card top-right">
                <span className="pulse" /> Live preview ready
              </div>
              <div className="float-card bottom-left">
                ⚡ 4-day delivery
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Tech logos / stack strip */}
      <section className="logo-strip">
        <div className="container" style={{ overflow: 'hidden' }}>
          <ScrollReveal>
            <div className="label">We build with the stack you already use</div>
          </ScrollReveal>
          <div className="tech-marquee-wrapper">
            <div className="tech-row">
              <span>React</span><span>Next.js</span><span>WordPress</span><span>Shopify</span>
              <span>WooCommerce</span><span>BigCommerce</span><span>Magento</span><span>Drupal</span><span>Wix</span>
              <span>React</span><span>Next.js</span><span>WordPress</span><span>Shopify</span>
              <span>WooCommerce</span><span>BigCommerce</span><span>Magento</span><span>Drupal</span><span>Wix</span>
            </div>
          </div>
        </div>
      </section>

      {/* What we build */}
      <section>
        <div className="container">
          <ScrollReveal>
            <div className="kicker-row">
              <div className="kicker-text">
                <span className="eyebrow">What we build</span>
                <h2>From a single landing page to a full SaaS product</h2>
                <p>Whether you're launching an ad campaign next week or replatforming your storefront, we deliver in days — not months.</p>
              </div>
              <Link to="/services" className="btn btn-ghost">Explore services →</Link>
            </div>
          </ScrollReveal>

          <div className="grid-3">
            {[
              { icon: <IconBolt />, title: 'Landing Pages', desc: 'High-converting pages for paid media, launches, and lead capture. Ship in under a week.' },
              { icon: <IconCart />, title: 'Ecommerce Stores', desc: 'Shopify, WooCommerce, BigCommerce, Magento — built or revamped end-to-end.' },
              { icon: <IconBuilding />, title: 'Corporate Sites', desc: 'Brand sites that look premium and load fast, on WordPress, Drupal, or modern stacks.' },
              { icon: <IconWrench />, title: 'Service Business Sites', desc: 'Pages built to attract clients for consultants, agencies, clinics, and local businesses.' },
              { icon: <IconRocket />, title: 'SaaS Applications', desc: 'Full-stack web apps and MVPs delivered with modern frameworks like React and Next.js.' },
              { icon: <IconRefresh />, title: 'Revamps & Migrations', desc: 'Replatform from Wix to Shopify, redesign a tired WordPress site, or modernize the stack.' },
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

      {/* Behind the Build — Premium Team Video Slider Carousel */}
      <section className="team-slider-section">
        <div className="team-slider-glow" />
        <div className="team-slider-glow-2" />
        <div className="container">
          <ScrollReveal>
            <div className="center" style={{ marginBottom: 48 }}>
              <span className="eyebrow">Inside the Studio</span>
              <h2>Behind the Build — Meet the Architects</h2>
              <p className="lead center" style={{ margin: '0 auto', color: '#cbd5e1' }}>
                Hear directly from the core leaders of GrowthStrats. We explain our roles, our AI-first developer format, and how we deliver senior-level engineering at unmatched speeds.
              </p>
            </div>
          </ScrollReveal>

          <div className="team-slider-container">
            {/* Main Centered Widescreen Landscape Card with Swipe Gesture Support */}
            <div 
              className={`team-slider-card ${isTransitioning ? 'slide-transitioning' : ''}`}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              <div className="team-slider-video-pane">
                {/* Left Chevron Button inside video pane */}
                <button 
                  className="slider-arrow slider-arrow-left" 
                  onClick={handlePrev}
                  aria-label="Previous slide"
                >
                  <svg viewBox="0 0 24 24">
                    <polyline points="15 18 9 12 15 6" />
                  </svg>
                </button>

                <video 
                  ref={videoRef}
                  src={teamVideos[activeIndex].video}
                  poster={teamVideos[activeIndex].poster}
                  loop
                  playsInline
                  controls
                  onPlay={() => setIsPlaying(true)}
                  onPause={() => setIsPlaying(false)}
                />

                {/* Glassmorphic Play Button Overlay in the Center */}
                {!isPlaying && (
                  <button 
                    className="video-play-overlay" 
                    onClick={togglePlay}
                    aria-label="Play video"
                  >
                    <svg viewBox="0 0 24 24">
                      <polygon points="6 4 20 12 6 20 6 4" />
                    </svg>
                  </button>
                )}

                {/* Right Chevron Button inside video pane */}
                <button 
                  className="slider-arrow slider-arrow-right" 
                  onClick={handleNext}
                  aria-label="Next slide"
                >
                  <svg viewBox="0 0 24 24">
                    <polyline points="9 18 15 12 9 6" />
                  </svg>
                </button>
              </div>
              <div className="team-slider-info-pane">
                <div className="team-slider-left-col">
                  <h4>{teamVideos[activeIndex].role}</h4>
                  <h3>{teamVideos[activeIndex].name}</h3>
                  <div className="team-slider-quote">
                    "{teamVideos[activeIndex].quote}"
                  </div>
                </div>
                <div className="team-slider-right-col">
                  <p className="team-slider-bio">
                    {teamVideos[activeIndex].bio}
                  </p>
                  <div className="team-slider-focus">
                    <h5>Primary Focus Area</h5>
                    <p>{teamVideos[activeIndex].focus}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Slider Dot Indicators */}
          <div className="slider-dots">
            {teamVideos.map((_, index) => (
              <button 
                key={index}
                className={`slider-dot ${activeIndex === index ? 'active' : ''}`}
                onClick={() => changeSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Why us / stats */}
      <section>
        <div className="container">
          <ScrollReveal>
            <div className="center">
              <span className="eyebrow">Why GrowthStrats Build</span>
              <h2>The honest case for an AI-first studio</h2>
              <p className="lead center">Most agencies quietly use AI but bill for traditional timelines. We do the opposite — we tell you exactly where AI saves time, pass those savings on, and put senior engineers on the work to keep quality high.</p>
            </div>
          </ScrollReveal>

          <div className="grid-3" style={{ marginTop: 48 }}>
            {[
              { icon: <IconClockAlt />, title: '3–5x faster delivery', desc: 'AI-assisted workflows compress weeks of build, QA, and content work into days.' },
              { icon: <IconDollar />, title: '40–60% lower cost', desc: 'Less manual lift means smaller invoices for the same output quality.' },
              { icon: <IconUsers />, title: 'Senior engineers only', desc: 'Every project is owned end-to-end by AI-enabled developers and designers — no junior handoffs, no shifting team.' },
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

          <div className="stats">
            <StatCounter value="4" suffix="d" label="Avg. landing page turnaround" />
            <StatCounter value="3" label="Continents served — US, UK, AU" />
            <StatCounter value="10" suffix="+" label="Platforms supported" />
            <StatCounter value="100" suffix="%" label="AI-enabled team" />
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-soft">
        <div className="container">
          <ScrollReveal>
            <div className="center">
              <span className="eyebrow">How we work</span>
              <h2>A four-step process built around AI</h2>
              <p className="lead center">We move fast because we've engineered every step. You stay in the loop with daily previews.</p>
            </div>
          </ScrollReveal>

          <div className="process" style={{ marginTop: 48 }}>
            {[
              { title: 'Discover', desc: '30-minute call to scope the build, share examples, and lock in a fixed quote.' },
              { title: 'Design', desc: 'AI-generated mockups paired with hands-on design review — usually within 48 hours.' },
              { title: 'Build', desc: 'Engineers ship code with AI copilots, with daily preview links you can review live.' },
              { title: 'Launch', desc: 'QA, performance tuning, SEO basics, and go-live. Optional retainer for ongoing changes.' },
            ].map((step, i) => (
              <ScrollReveal key={step.title} delay={i * 150}>
                <div className="step">
                  <h3>{step.title}</h3>
                  <p>{step.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Roadmap */}
      <section>
        <div className="container split">
          <ScrollReveal direction="left">
            <div>
              <span className="eyebrow">Roadmap</span>
              <h2>Today: web. Tomorrow: full MarTech AI.</h2>
              <p>Phase 1 — what you see now — is fast, AI-built websites and apps for small and mid-sized businesses across the US, UK, and Australia.</p>
              <p>Phase 2 expands into MarTech AI: marketing automations, customer journey personalization, AI agents for sales and support, and analytics products. Our engineering team is already in training.</p>
              <ul className="checklist">
                <li>Landing pages, ecommerce, corporate, service, and SaaS sites</li>
                <li>Revamps and platform migrations on every major CMS</li>
                <li>MarTech AI products and agents — rolling out in 2026</li>
              </ul>
            </div>
          </ScrollReveal>
          <ScrollReveal direction="right" delay={200}>
            <div aria-hidden="true">
              <svg className="illustration" viewBox="0 0 560 420" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="bg2" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#eef4ff"/>
                    <stop offset="100%" stopColor="#e6fbff"/>
                  </linearGradient>
                  <linearGradient id="line2" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor="#2563eb"/>
                    <stop offset="100%" stopColor="#06b6d4"/>
                  </linearGradient>
                </defs>
                <rect width="560" height="420" fill="url(#bg2)"/>
                <path d="M50 320 Q 160 160, 280 220 T 510 100" stroke="url(#line2)" strokeWidth="4" fill="none" strokeLinecap="round"/>
                <g transform="translate(50,300)">
                  <circle r="22" fill="#fff" stroke="#2563eb" strokeWidth="3"/>
                  <text x="0" y="6" textAnchor="middle" fontFamily="Inter, sans-serif" fontWeight="800" fontSize="14" fill="#2563eb">1</text>
                  <rect x="-70" y="34" width="140" height="56" rx="10" fill="#fff" stroke="#dbe3f3"/>
                  <text x="0" y="56" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="12" fontWeight="700" fill="#0f172a">Web Studio</text>
                  <text x="0" y="74" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="10" fill="#475569">Live today</text>
                </g>
                <g transform="translate(280,200)">
                  <circle r="22" fill="#fff" stroke="#2563eb" strokeWidth="3"/>
                  <text x="0" y="6" textAnchor="middle" fontFamily="Inter, sans-serif" fontWeight="800" fontSize="14" fill="#2563eb">2</text>
                  <rect x="-70" y="-90" width="140" height="56" rx="10" fill="#fff" stroke="#dbe3f3"/>
                  <text x="0" y="-68" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="12" fontWeight="700" fill="#0f172a">MarTech AI</text>
                  <text x="0" y="-50" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="10" fill="#475569">2026</text>
                </g>
                <g transform="translate(510,80)">
                  <circle r="22" fill="#fff" stroke="#06b6d4" strokeWidth="3"/>
                  <text x="0" y="6" textAnchor="middle" fontFamily="Inter, sans-serif" fontWeight="800" fontSize="14" fill="#06b6d4">3</text>
                  <rect x="-110" y="34" width="120" height="56" rx="10" fill="#fff" stroke="#dbe3f3"/>
                  <text x="-50" y="56" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="12" fontWeight="700" fill="#0f172a">SaaS Products</text>
                  <text x="-50" y="74" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="10" fill="#475569">R&amp;D</text>
                </g>
                <g opacity=".5">
                  <circle cx="100" cy="80" r="4" fill="#2563eb"/>
                  <circle cx="200" cy="60" r="2" fill="#06b6d4"/>
                  <circle cx="430" cy="280" r="3" fill="#06b6d4"/>
                  <circle cx="380" cy="340" r="2" fill="#2563eb"/>
                </g>
              </svg>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <section>
        <div className="container">
          <ScrollReveal direction="scale">
            <div className="cta-band">
              <h2>Ready to ship a site that pays for itself?</h2>
              <Link to="/contact" className="btn btn-primary btn-shimmer">Get a Quote</Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

    </>
  )
}
