import React, { useRef } from 'react';
import ScrollReveal from './ScrollReveal';

const HoverVideo = ({ src, children }) => {
  const videoRef = useRef(null);

  const handleMouseEnter = () => {
    if (videoRef.current) {
      videoRef.current.muted = false;
      videoRef.current.play().catch(e => console.log("Playback failed", e));
    }
  };

  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.muted = true;
      videoRef.current.pause();
    }
  };

  return (
    <div 
      className="testimonial-video-card"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <video ref={videoRef} src={src} loop muted playsInline controls={false} />
      <div className="play-indicator">▶</div>
      {children}
    </div>
  );
};

export default function Testimonials() {
  const textTestimonials = [
    {
      id: 1,
      quote: "They delivered a complete platform migration in under 3 weeks. Our bounce rate dropped by 40% almost immediately. Incredibly fast execution.",
      author: "Marcus T.",
      role: "CEO, TechFlow",
      image: "/assets/avatar_1.png"
    },
    {
      id: 2,
      quote: "The attention to detail and modern aesthetics are unmatched. They didn't just build a site; they built an experience that actually converts.",
      author: "Sarah L.",
      role: "Founder, Zenith Co",
      image: "/assets/avatar_2.png"
    },
    {
      id: 3,
      quote: "Finally, an agency that understands both design and deep tech. They integrated our complex backend seamlessly with a beautiful Next.js frontend.",
      author: "David R.",
      role: "CTO, Datastream",
      image: "/assets/avatar_3.png"
    },
    {
      id: 4,
      quote: "Working with them was a breeze. They understood our brand vision perfectly and delivered a highly polished, interactive site that users love.",
      author: "Priya M.",
      role: "Design Director, Motif",
      image: "/assets/avatar_4.png"
    },
    {
      id: 5,
      quote: "The ROI has been fantastic. They restructured our funnel and optimized the entire user journey. We're seeing record high conversion rates.",
      author: "James W.",
      role: "Product Manager, Scale Up",
      image: "/assets/avatar_5.png"
    },
    {
      id: 6,
      quote: "Absolute game changers! From the initial discovery call to the final launch, the process was transparent, fast, and highly professional.",
      author: "Elena C.",
      role: "Head of Marketing, Lumina",
      image: "/assets/avatar_6.png"
    }
  ];

  return (
    <>
      {/* Video Testimonials Section (Highlighted, Dark Theme) */}
      <section className="section-dark">
        <div className="container">
          <ScrollReveal>
            <div className="kicker-row">
              <div className="kicker-text">
                <span className="eyebrow">Client Stories</span>
                <h2>Don't just take our word for it.</h2>
                <p>Hear directly from the founders and leaders who have transformed their businesses with our engineering.</p>
              </div>
            </div>
          </ScrollReveal>

          <div className="testimonial-video-grid">
            <ScrollReveal delay={0}>
              <HoverVideo src="/assets/testimonial_video_1.mp4">
                <div className="testimonial-video-overlay">
                  <h4>"How easy everything felt from start to finish."</h4>
                  <p>Michael Carter — Carter Home Solutions, Austin, TX</p>
                </div>
              </HoverVideo>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <HoverVideo src="/assets/testimonial_video_2.mp4">
                <div className="testimonial-video-overlay">
                  <h4>"Very collaborative and easy to work with."</h4>
                  <p>Sophia Martinez — GlowSkin Aesthetics, Miami, FL</p>
                </div>
              </HoverVideo>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Text Testimonials Section */}
      <section className="section-soft">
        <div className="container">
          <ScrollReveal>
            <div className="center" style={{ marginBottom: 40 }}>
              <span className="eyebrow">More Testimonials</span>
              <h2>Trusted by 100+ Companies</h2>
            </div>
          </ScrollReveal>

          <div className="testimonial-text-grid">
            {textTestimonials.map((testimonial, i) => (
              <ScrollReveal key={testimonial.id} delay={i * 50}>
                <div className="testimonial-text-card">
                  <div className="stars">★★★★★</div>
                  <p className="quote">"{testimonial.quote}"</p>
                  <div className="testimonial-author">
                    <img src={testimonial.image} alt={testimonial.author} />
                    <div className="testimonial-author-info">
                      <h4>{testimonial.author}</h4>
                      <p>{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
