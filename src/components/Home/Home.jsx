import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import ParticleCanvas from '../ParticleCanvas'
import { useScrollReveal } from '../../hooks/useScrollReveal'
import {
  AiFillGithub, AiFillInstagram, AiFillLinkedin,
} from 'react-icons/ai'
import { ImPointRight } from 'react-icons/im'
import { HiDownload } from 'react-icons/hi'

const TYPING_STRINGS = [
  'Python Fullstack Developer',
  'Freelancer',
  'MERN Stack Developer',
]

function useTypewriter(strings, typeSpeed = 80, deleteSpeed = 45, pause = 1600) {
  const [display, setDisplay] = useState('')
  const [cursor, setCursor] = useState(true)
  const state = useRef({ si: 0, ci: 0, deleting: false })

  useEffect(() => {
    const cursorInterval = setInterval(() => setCursor(c => !c), 530)
    return () => clearInterval(cursorInterval)
  }, [])

  useEffect(() => {
    let timeout

    const tick = () => {
      const { si, ci, deleting } = state.current
      const current = strings[si]

      if (!deleting) {
        const next = current.slice(0, ci + 1)
        setDisplay(next)
        state.current.ci = ci + 1

        if (ci + 1 === current.length) {
          state.current.deleting = true
          timeout = setTimeout(tick, pause)
        } else {
          timeout = setTimeout(tick, typeSpeed)
        }
      } else {
        const next = current.slice(0, ci - 1)
        setDisplay(next)
        state.current.ci = ci - 1

        if (ci - 1 === 0) {
          state.current.deleting = false
          state.current.si = (si + 1) % strings.length
          timeout = setTimeout(tick, 400)
        } else {
          timeout = setTimeout(tick, deleteSpeed)
        }
      }
    }

    timeout = setTimeout(tick, 800)
    return () => clearTimeout(timeout)
  }, [])

  return { display, cursor }
}

const CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%'
function scramble(el, text, duration = 1200) {
  let frame = 0
  const total = Math.floor(duration / 16)
  const id = setInterval(() => {
    let out = ''
    for (let i = 0; i < text.length; i++) {
      out += (frame / total > i / text.length)
        ? text[i]
        : (text[i] === ' ' ? ' ' : CHARS[Math.floor(Math.random() * CHARS.length)])
    }
    el.textContent = out
    if (++frame >= total) { el.textContent = text; clearInterval(id) }
  }, 16)
  return () => clearInterval(id)
}

const MARQUEE_ITEMS = [
  'Python', 'Django', 'React.js', 'Node.js', 'MongoDB',
  'JavaScript', 'C++', 'Git', 'Vercel', 'Render', 'Bootstrap', 'REST APIs',
]

function Wave() {
  return (
    <span
      role="img"
      aria-label="wave"
      style={{
        display: 'inline-block',
        animation: 'wave 2.1s ease-in-out infinite',
        transformOrigin: '70% 70%',
      }}
    >
      👋🏻
    </span>
  )
}

export default function Home() {
  useScrollReveal()
  const nameRef = useRef(null)
  const { display, cursor } = useTypewriter(TYPING_STRINGS)

  useEffect(() => {
    const el = nameRef.current
    if (!el) return
    const t = setTimeout(() => scramble(el, 'DHARANISH'), 400)
    return () => clearTimeout(t)
  }, [])

  return (
    <>
      <style>{`
        @keyframes wave {
          0%   { transform: rotate(  0deg) }
          10%  { transform: rotate( 14deg) }
          20%  { transform: rotate( -8deg) }
          30%  { transform: rotate( 14deg) }
          40%  { transform: rotate( -4deg) }
          50%  { transform: rotate( 10deg) }
          60%  { transform: rotate(  0deg) }
          100% { transform: rotate(  0deg) }
        }
        @keyframes scroll-pulse {
          0%,100% { opacity:1; transform:scaleY(1) }
          50%     { opacity:.3; transform:scaleY(.5) }
        }
        .typewriter-text {
          color: var(--accent);
          font-weight: 700;
          font-size: clamp(1.4rem, 3vw, 2rem);
          font-family: var(--font-display);
          min-height: 2.5rem;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .typewriter-cursor {
          display: inline-block;
          width: 3px;
          height: 1.1em;
          background: var(--accent);
          margin-left: 3px;
          vertical-align: middle;
          border-radius: 1px;
        }
        @keyframes resume-shimmer {
          0%   { background-position: -200% center; }
          100% { background-position:  200% center; }
        }
        .btn-resume {
          background: transparent;
          color: var(--text);
          border: 1px solid var(--border);
          position: relative;
          overflow: hidden;
        }
        .btn-resume::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(
            105deg,
            transparent 35%,
            oklch(0.68 0.18 35 / 0.18) 50%,
            transparent 65%
          );
          background-size: 200% 100%;
          animation: resume-shimmer 2.8s ease-in-out infinite;
        }
        .btn-resume:hover {
          border-color: var(--accent);
          color: var(--accent);
          background: oklch(0.68 0.18 35 / 0.08);
        }
        .btn-resume:hover::before { animation-play-state: paused; }
      `}</style>

      <div className="hero-wrap">
        <ParticleCanvas />
        <div className="hero-noise" />
        <div className="hero-glow" />

        <div className="hero-inner">
          <div className="hero-badge">
            <span className="nav-brand-dot" style={{ animationDelay: '0.3s' }} />
            Available for freelance work
          </div>

          <p style={{
            fontSize: 'clamp(1.3rem, 3vw, 1.8rem)',
            fontWeight: 500,
            marginBottom: '0.4rem',
            animation: 'hero-title-in 0.8s 0s var(--ease-out-expo) both',
            color: 'var(--text)',
          }}>
            Hi There! <Wave />
          </p>

          <h1 className="hero-title" style={{ marginBottom: '0.5rem' }}>
            I'M{' '}
            <span className="hero-name" ref={nameRef}>DHARANISH</span>
          </h1>

          <div
            className="typewriter-text"
            style={{ marginBottom: '2rem', animation: 'hero-title-in 0.8s 0.3s var(--ease-out-expo) both' }}
          >
            {display}
            <span
              className="typewriter-cursor"
              style={{ opacity: cursor ? 1 : 0, transition: 'opacity 0.1s' }}
            />
          </div>

          <div className="hero-ctas">
            <Link to="/project" className="btn btn-accent">
              View Projects →
            </Link>
            <a
              href="/Dharanish_Resume.pdf"
              download="Dharanish_Resume.pdf"
              className="btn btn-resume"
            >
              <HiDownload size={15} />
              Resume
            </a>
            <a href="#about" className="btn btn-ghost">
              About Me
            </a>
          </div>
        </div>

        <div style={{
          position: 'absolute', bottom: '2rem', left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem',
          fontFamily: 'var(--font-mono)', fontSize: '0.62rem',
          color: 'var(--muted)', letterSpacing: '0.12em',
          textTransform: 'uppercase',
          animation: 'hero-title-in 1s 0.8s var(--ease-out-expo) both',
        }}>
          <div style={{
            width: '1px', height: '40px',
            background: 'linear-gradient(to bottom, var(--accent), transparent)',
            animation: 'scroll-pulse 1.6s ease-in-out infinite',
          }} />
          <span>scroll</span>
        </div>
      </div>

      <div className="marquee-wrap">
        <div className="marquee-track">
          {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, i) => (
            <div className="marquee-item" key={i}>
              <span className="marquee-sep">◆</span>
              {item}
            </div>
          ))}
        </div>
      </div>

      <section id="about">
        <div className="about-grid">
          <div>
            <span className="section-eyebrow reveal">Let me introduce myself</span>
            <h2 className="section-title reveal reveal-d1">
              Who I <span style={{ color: 'var(--accent)' }}>am.</span>
            </h2>
            <div className="about-text">
              <p className="reveal reveal-d2">
                I fell in love with programming — I am a passionate{' '}
                <strong>Full-Stack Developer</strong> who enjoys turning ideas
                into real-world web applications.
              </p>
              <p className="reveal reveal-d3">
                I have experience working with{' '}
                <strong>JavaScript</strong>, <strong>Python</strong>,{' '}
                <strong>React.js</strong>, <strong>Node.js</strong>,{' '}
                <strong>Django</strong>, and <strong>MongoDB</strong>, and I am
                always eager to learn new technologies.
              </p>
              <p className="reveal reveal-d4">
                My primary interest lies in building <strong>modern, scalable,
                and user-friendly</strong> web applications that solve real
                problems and deliver meaningful user experiences.
              </p>
              <p className="reveal reveal-d5">
                I enjoy working across both <strong>frontend</strong> and{' '}
                <strong>backend</strong> development — creating responsive
                interfaces with <strong>React.js</strong> and developing robust
                server-side solutions using <strong>Node.js</strong> and{' '}
                <strong>Django</strong>.
              </p>
              <p className="reveal" style={{ transitionDelay: '0.6s' }}>
                I am constantly improving my skills through personal projects,
                open-source contributions, and continuous learning.
              </p>

              <div className="about-quote reveal" style={{ marginTop: '1.5rem', transitionDelay: '0.7s' }}>
                "Strive to build things that make a difference!"
              </div>

              <ul style={{
                listStyle: 'none', marginTop: '1.5rem',
                display: 'flex', flexDirection: 'column', gap: '0.6rem',
              }} className="reveal" style={{ transitionDelay: '0.75s' }}>
                {[
                  'Writing Tech Blogs',
                  'Travelling',
                ].map(item => (
                  <li key={item} style={{
                    display: 'flex', alignItems: 'center', gap: '0.7rem',
                    color: 'var(--muted)', fontSize: '0.95rem',
                  }}>
                    <ImPointRight style={{ color: 'var(--accent)', flexShrink: 0 }} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right — avatar card */}
          <div className="avatar-card reveal reveal-right">
            <div className="avatar-head">
              <div className="avatar-initials">D</div>
              <div>
                <div className="avatar-name">Dharanish S</div>
                <div className="avatar-role">Full-Stack Dev · Chennai, IN</div>
              </div>
            </div>

            <div className="badge-wrap">
              {['Python','Django','React','Node.js','MongoDB','C++','JavaScript','Git'].map(s => (
                <span className="badge-chip" key={s}>{s}</span>
              ))}
            </div>

            <div className="stats-row">
              {[
                ['4+',   'Projects'],
                ['3+',   'Tech Stacks'],
                ['2+',   'Years Coding'],
                ['100%', 'Open Source'],
              ].map(([n, l]) => (
                <div className="stat-cell" key={l}>
                  <div className="stat-num">{n}</div>
                  <div className="stat-label">{l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── FIND ME ON ── */}
        <div style={{
          textAlign: 'center',
          marginTop: '4rem', paddingTop: '3rem',
          borderTop: '1px solid var(--border)',
        }} className="reveal">
          <h3 style={{
            fontSize: '1.4rem', fontWeight: 700, marginBottom: '0.5rem',
          }}>
            FIND ME ON
          </h3>
          <p style={{ color: 'var(--muted)', marginBottom: '1.5rem' }}>
            Feel free to{' '}
            <span style={{ color: 'var(--accent)' }}>connect</span>{' '}
            with me
          </p>
          <div className="social-row">
            {[
              { icon: <AiFillGithub size={18} />,    label: 'GitHub',    href: 'https://github.com/Dharanish-2006' },
              { icon: <AiFillLinkedin size={18} />,  label: 'LinkedIn',  href: 'https://www.linkedin.com/in/dharanishwar-s/' },
              { icon: <AiFillInstagram size={18} />, label: 'Instagram', href: 'https://www.instagram.com/x3__dharxnish__' },
            ].map(({ icon, label, href }) => (
              <a key={label} href={href} target="_blank" rel="noreferrer" className="social-link">
                {icon} {label}
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}