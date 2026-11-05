import { useEffect, useState } from 'react'
import basketballImage from './assets/arshad-basketball.jpg'
import speakingImage from './assets/arshad-speaking.jpg'
import heroCutout from './assets/arshad-cutout.png'

const socialLinks = [
  { label: 'LinkedIn', handle: 'lk.linkedin.com/in/arshad-fahmy', href: 'https://lk.linkedin.com/in/arshad-fahmy', icon: 'in' },
]

function Arrow({ diagonal = false }) {
  return (
    <svg className={`arrow ${diagonal ? 'arrow-diagonal' : ''}`} viewBox="0 0 24 24" aria-hidden="true">
      <path d="M4 12h15M14 6l6 6-6 6" />
    </svg>
  )
}

function MenuIcon({ open }) {
  return (
    <span className={`menu-icon ${open ? 'is-open' : ''}`} aria-hidden="true">
      <i />
      <i />
    </span>
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
            <button onClick={() => scrollTo('journey')}>Journey</button>
            <button onClick={() => scrollTo('connect')}>Connect</button>
          </div>
          <a className="nav-contact" href="https://lk.linkedin.com/in/arshad-fahmy" target="_blank" rel="noreferrer">View LinkedIn <Arrow /></a>
          <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen} aria-controls="mobile-menu">
            <span className="sr-only">{menuOpen ? 'Close menu' : 'Open menu'}</span><MenuIcon open={menuOpen} />
          </button>
        </nav>

        <div id="mobile-menu" className={`mobile-menu ${menuOpen ? 'is-open' : ''}`} aria-hidden={!menuOpen}>
          <button onClick={() => scrollTo('about')}>About <Arrow /></button>
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

      <section className="journey" id="journey">
        <div className="journey-header">
          <div className="section-number section-number--light">02 / JOURNEY</div>
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
          <div className="section-number">03 / CONNECT</div>
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
        <div className="connect-image"><img src={speakingImage} alt="Arshad Fahmy ready to speak" /></div>
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
