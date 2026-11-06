import { useEffect, useState } from 'react'
import basketballImage from './assets/arshad-basketball.jpg'
import speakingImage from './assets/arshad-speaking.jpg'
import heroCutout from './assets/arshad-cutout.png'
import profileImage from './assets/arshad-profile.jpg'

const socialLinks = [
  { label: 'LinkedIn', handle: '@arshad-fahmy', href: 'https://lk.linkedin.com/in/arshad-fahmy', icon: 'in' },
  { label: 'Stack Overflow', handle: 'Arshad Fahmy', href: 'https://stackoverflow.com/users/18627119/arshad-fahmy', icon: 'so' },
  { label: 'YouTube', handle: 'BasketballLK', href: 'https://www.youtube.com/@BasketballLK', icon: 'yt' },
  { label: 'TikTok', handle: '@slbasketballfans', href: 'https://www.tiktok.com/@slbasketballfans', icon: 'tt' },
]

function Arrow({ diagonal = false }) {
  return (
    <svg className={`arrow ${diagonal ? 'arrow-diagonal' : ''}`} viewBox="0 0 24 24" aria-hidden="true">
      <path d="M4 12h15M14 6l6 6-6 6" />
    </svg>
  )
}

function SocialMark({ type }) {
  return <span className={`social-mark social-mark--${type}`} aria-hidden="true">{type}</span>
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    document.body.classList.toggle('no-scroll', menuOpen)
    return () => document.body.classList.remove('no-scroll')
  }, [menuOpen])

  const closeMenu = () => setMenuOpen(false)

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    closeMenu()
  }

  return (
    <main>
      <section className="hero" id="top">
        <nav className="site-nav" aria-label="Main navigation">
          <button className="brand" onClick={() => scrollTo('top')} aria-label="Back to top">AF<span>.</span></button>
          <div className="desktop-nav">
            <button onClick={() => scrollTo('about')}>About</button>
            <button onClick={() => scrollTo('company')}>ESafe</button>
            <button onClick={() => scrollTo('journey')}>Journey</button>
            <button onClick={() => scrollTo('connect')}>Connect</button>
          </div>
          <a className="nav-contact" href="https://lk.linkedin.com/in/arshad-fahmy" target="_blank" rel="noreferrer">View LinkedIn <Arrow /></a>
          <button className="mobile-nav-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen} aria-controls="mobile-menu">
            {menuOpen ? 'Close' : 'Menu'}
          </button>
        </nav>

        <div id="mobile-menu" className={`mobile-menu ${menuOpen ? 'is-open' : ''}`} aria-hidden={!menuOpen}>
          <button onClick={() => scrollTo('about')}>About <Arrow /></button>
          <button onClick={() => scrollTo('company')}>ESafe <Arrow /></button>
          <button onClick={() => scrollTo('journey')}>Journey <Arrow /></button>
          <button onClick={() => scrollTo('connect')}>Connect <Arrow /></button>
        </div>

        <div className="hero-grid">
          <div className="hero-copy reveal-up">
            <h1>Hi, I’m<br /><em>Arshad</em> Fahmy.</h1>
            <p>Building with software, sport, and community — from Mawanella to the wider world.</p>
            <div className="hero-actions">
              <a className="button button--lime button--link" href="https://lk.linkedin.com/in/arshad-fahmy" target="_blank" rel="noreferrer">Connect on LinkedIn <Arrow /></a>
              <button className="text-link text-link--light" onClick={() => scrollTo('about')}>Explore my story <span>↓</span></button>
            </div>
          </div>

          <div className="hero-portrait">
            <div className="portrait-line" />
            <img src={heroCutout} alt="Arshad Fahmy in a black suit" />
            <p className="portrait-caption">INTRODUCTION / 01</p>
          </div>
        </div>
        <button className="scroll-cue" onClick={() => scrollTo('about')}>
          <span>Scroll to discover</span><i />
        </button>
      </section>

      <section className="about" id="about">
        <div className="section-number">01 / ABOUT</div>
        <div className="about-grid">
          <h2>Technology,<br />community, and <em>action.</em></h2>
          <div className="about-copy">
            <p>At ESafe Solutions, I’m pursuing work that brings technology and people closer together.</p>
            <p>I’m also completing a BSc in Computer Science at the University of the People, with a focus on software engineering, artificial intelligence, and web development.</p>
          </div>
        </div>
        <div className="about-rule"><span /></div>
      </section>

      <section className="company" id="company">
        <div className="company-top">
          <div className="section-number section-number--dark">02 / ESAFE SOLUTIONS</div>
          <p className="company-kicker">Explore. Build. Scale. Safely.</p>
        </div>
        <div className="company-intro">
          <h2>Building the systems behind <em>ambitious businesses.</em></h2>
          <div className="company-copy">
            <p>I help build ESafe Solutions: an end-to-end partner for startups and growing SMEs that need the strategy, systems, and execution to move forward with confidence.</p>
            <p>Rather than stitching together disconnected providers, ESafe brings business strategy, technology, brand, people, finance, and sales together under one roof—turning a clear plan into reliable day-to-day operations.</p>
            <a className="button button--dark button--link" href="https://esafesolutions.co/" target="_blank" rel="noreferrer">Visit ESafe Solutions <Arrow /></a>
          </div>
        </div>

        <div className="company-values" aria-label="ESafe principles">
          {['Exploration', 'Safety', 'Empowerment', 'Reliability', 'Inclusivity', 'Innovation'].map((value) => <span key={value}>{value}</span>)}
        </div>

        <div className="company-services">
          <p className="company-label">SIX SPECIALIST DIVISIONS</p>
          <div className="service-grid">
            <article><span>01 / BUSINESS LABS</span><h3>Strategy</h3><p>Business blueprints, market analysis, KPIs, and lead-generation plans built around the next practical move.</p></article>
            <article><span>02 / EVOLVE</span><h3>Technology</h3><p>Custom web platforms, mobile apps, POS systems, and ERP tools designed for the way a business actually operates.</p></article>
            <article><span>03 / ENVISION</span><h3>Marketing</h3><p>Social media, brand identity, video, and campaigns that make a strong business easier to discover and trust.</p></article>
            <article><span>04 / ELEVATE</span><h3>People</h3><p>Recruitment, corporate training, and HR frameworks that help teams grow with clarity and structure.</p></article>
            <article><span>05 / ENSURE</span><h3>Finance</h3><p>Bookkeeping, taxation guidance, auditing, and cash-flow thinking for sharper financial decisions.</p></article>
            <article><span>06 / ENGAGE</span><h3>Sales</h3><p>Outbound sales, customer support, and call-center operations that turn attention into lasting customer relationships.</p></article>
          </div>
        </div>

        <div className="company-products">
          <div><span>STOREFRONT</span><h3>ESafe POS</h3><p>Retail and restaurant sales, inventory, transactions, and shifts in one responsive system.</p></div>
          <div><span>BACK OFFICE</span><h3>ESafe Core</h3><p>ERP infrastructure for multi-branch inventory, supply chain, accounting, and payroll.</p></div>
          <div><span>AUTOMATION</span><h3>ESafe AI</h3><p>Always-on customer support and lead qualification across WhatsApp and the web, with human handoff when it matters.</p></div>
        </div>
      </section>

      <section className="journey" id="journey">
        <div className="journey-header">
          <div className="section-number section-number--light">03 / JOURNEY</div>
          <h2>In <em>motion.</em></h2>
          <p>From code to the court, I’m drawn to the work that turns shared energy into meaningful progress.</p>
        </div>
        <div className="story-grid">
          <article className="story story--court">
            <div className="story-image"><img src={basketballImage} alt="Arshad Fahmy playing basketball" /></div>
            <div className="story-meta"><span>01</span><h3>Leading on the court</h3><p>Founder &amp; President, Mawanella Basketball Club.</p></div>
          </article>
          <article className="story story--voice">
            <div className="story-image"><img src={speakingImage} alt="Arshad Fahmy speaking into a microphone" /></div>
            <div className="story-meta"><span>02</span><h3>Growing the game</h3><p>Vice President, Kegalle District Basketball Association.</p></div>
          </article>
        </div>
      </section>

      <section className="principle" aria-label="Personal principle">
        <div className="principle-line" />
          <p>Build with purpose.<br /><em>Bring people together.</em></p>
        <div className="principle-line" />
      </section>

      <section className="connect" id="connect">
        <div className="connect-lead">
          <div className="section-number">04 / CONNECT</div>
          <h2>Let’s make<br />an <em>impact.</em></h2>
          <div className="connect-note">
            <p>Open to technology, sports, community, and the next meaningful challenge.</p>
            <a className="button button--dark button--link" href="https://lk.linkedin.com/in/arshad-fahmy" target="_blank" rel="noreferrer">Connect on LinkedIn <Arrow /></a>
          </div>
        </div>
        <div className="socials" aria-label="Social links">
          {socialLinks.map((social, index) => (
            <a className="social-link" href={social.href} key={social.label} target="_blank" rel="noreferrer" aria-label={`Visit Arshad Fahmy on ${social.label}`}>
              <span className="social-index">0{index + 1}</span>
              <SocialMark type={social.icon} />
              <span className="social-name"><b>{social.label}</b><small>{social.handle}</small></span>
              <Arrow diagonal />
            </a>
          ))}
        </div>
        <div className="connect-image"><img src={profileImage} alt="Portrait of Arshad Fahmy" /></div>
      </section>

      <footer>
        <button className="footer-brand" onClick={() => scrollTo('top')}>AF<span>.</span></button>
        <p>Arshad Fahmy © {new Date().getFullYear()}</p>
        <p>Built with intention.</p>
        <button className="back-top" onClick={() => scrollTo('top')}>Back to top <Arrow /></button>
      </footer>
    </main>
  )
}

export default App
