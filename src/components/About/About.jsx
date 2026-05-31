import { GitHubCalendar } from 'react-github-calendar'
import { useScrollReveal } from '../../hooks/useScrollReveal'
import { CgCPlusPlus } from 'react-icons/cg'
import {
  DiJavascript1, DiReact, DiNodejs, DiMongodb,
  DiPython, DiGit, DiJava, DiDjango, DiBootstrap,
  DiExtjs,
} from 'react-icons/di'
import { SiVercel, SiRender, SiExpress } from 'react-icons/si'
import { VscVscode } from 'react-icons/vsc'
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai'
import { ImPointRight } from 'react-icons/im'

const TECH = [
  { icon: <DiDjango />,       label: 'Django' },
  { icon: <DiMongodb />,      label: 'MongoDB' },
  { icon: <SiExpress/> ,      label: 'Express' },
  { icon: <DiReact />,        label: 'React' },
  { icon: <DiNodejs />,       label: 'Node.js' },
  { icon: <DiGit />,          label: 'Git' },
  { icon: <DiBootstrap />,    label: 'Bootstrap' },
  { icon: <DiPython />,       label: 'Python' },
  { icon: <DiJava />,         label: 'Java' },
  { icon: <DiJavascript1 />,  label: 'JavaScript' },
]

const TOOLS = [
  { icon: <VscVscode />,  label: 'VS Code' },
  { icon: <SiVercel />,   label: 'Vercel' },
  { icon: <SiRender />,   label: 'Render' },
]

export default function About() {
  useScrollReveal()

  return (
    <main style={{ paddingTop: '6rem' }}>

      {/* ── WHO AM I ── */}
      <section>
        <div className="about-grid">
          <div>
            <span className="section-eyebrow reveal">Get to know me</span>
            <h1 className="section-title reveal reveal-d1">
              Hi, I'm{' '}
              <span style={{ color: 'var(--accent)' }}>Dharanish</span>{' '}
              —{' '}
              <span style={{ color: 'var(--accent)' }}>Chennai-based</span>{' '}
              Full-Stack Developer.
            </h1>
            <div className="about-text">
              <p className="reveal reveal-d2">
                I'm a <strong>BCA student</strong> and self-driven developer who
                loves turning ideas into real, working products. I picked up
                programming out of curiosity and never really stopped — what
                started as tinkering with small scripts has grown into building
                full-stack web applications used by real people.
              </p>
              <p className="reveal reveal-d3">
                My stack of choice spans <strong>Python & Django</strong> on the
                backend and <strong>React.js</strong> on the frontend, stitched
                together with <strong>Node.js</strong>, <strong>MongoDB</strong>,
                and a healthy obsession with clean API design. I care about both
                how things work <em>and</em> how they feel to use.
              </p>
              <p className="reveal reveal-d4">
                I'm currently open to <strong>freelance projects</strong>,
                internships, and open-source collaborations. If you have an idea
                that needs building — or a codebase that needs rescuing — let's
                talk.
              </p>
              <p className="reveal reveal-d5">
                Outside of code, I write <strong>tech blogs</strong> to share
                what I learn, and I recharge by <strong>travelling</strong> to
                places I've never been before.
              </p>

              <ul
                style={{
                  listStyle: 'none', marginTop: '1.5rem',
                  display: 'flex', flexDirection: 'column', gap: '0.6rem',
                }}
                className="reveal"
              >
                {[
                  'Currently pursuing BCA',
                  'Available for freelance & internships',
                  'Exploring new places whenever I can',
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

          {/* Avatar card */}
          <div className="avatar-card reveal reveal-right">
            <div className="avatar-head">
              <div className="avatar-initials">D</div>
              <div>
                <div className="avatar-name">Dharanish S</div>
                <div className="avatar-role">Full-Stack Developer · Chennai, IN</div>
              </div>
            </div>

            <div className="badge-wrap">
              {['Python','Django','React','Node.js','MongoDB','C++','JavaScript','Git','Java'].map(s => (
                <span className="badge-chip" key={s}>{s}</span>
              ))}
            </div>

            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {[
                { dot: true, text: 'BCA Student' },
                { dot: true, text: 'Full-Stack (Django + MERN)' },
                { dot: true, text: 'Open to freelance & internships' },
                { dot: true, text: 'Tech blogger' },
              ].map(({ text }) => (
                <li key={text} style={{
                  display: 'flex', alignItems: 'center', gap: '0.7rem',
                  fontSize: '0.83rem', color: 'var(--muted)',
                  padding: '0.5rem 0.8rem',
                  background: 'var(--bg)', borderRadius: '8px',
                  border: '1px solid var(--border)',
                }}>
                  <span style={{
                    width: '6px', height: '6px', borderRadius: '50%',
                    background: 'var(--accent)', flexShrink: 0,
                  }} />
                  {text}
                </li>
              ))}
            </ul>

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
      </section>

      {/* ── PROFESSIONAL SKILLSET ── */}
      <section style={{ paddingTop: '2rem' }}>
        <span className="section-eyebrow reveal" style={{ display: 'block', textAlign: 'center' }}>
          What I work with
        </span>
        <h2 className="section-title reveal reveal-d1" style={{ textAlign: 'center' }}>
          Professional{' '}
          <span style={{ color: 'var(--accent)' }}>Skillset</span>
        </h2>
        <p className="section-sub reveal reveal-d2" style={{ textAlign: 'center', margin: '0 auto 2.5rem' }}>
          Technologies I reach for when building — from frontend interfaces
          to backend APIs and databases.
        </p>
        <div className="tech-grid">
          {TECH.map(({ icon, label }, i) => (
            <div
              className="tech-item reveal"
              key={label}
              style={{ transitionDelay: `${i * 0.05}s` }}
            >
              <span className="tech-icon">{icon}</span>
              {label}
            </div>
          ))}
        </div>
      </section>

      {/* ── TOOLS ── */}
      <section style={{ paddingTop: '0' }}>
        <span className="section-eyebrow reveal" style={{ display: 'block', textAlign: 'center' }}>
          My everyday toolkit
        </span>
        <h2 className="section-title reveal reveal-d1" style={{ textAlign: 'center' }}>
          <span style={{ color: 'var(--accent)' }}>Tools</span> I Use
        </h2>
        <p className="section-sub reveal reveal-d2" style={{ textAlign: 'center', margin: '0 auto 2.5rem' }}>
          The tools that keep me productive and my deployments running smoothly.
        </p>
        <div className="tools-grid">
          {TOOLS.map(({ icon, label }, i) => (
            <div
              className="tech-item reveal"
              key={label}
              style={{ transitionDelay: `${i * 0.07}s` }}
            >
              <span className="tech-icon">{icon}</span>
              {label}
            </div>
          ))}
        </div>
      </section>

      {/* ── DAYS I CODE ── */}
      <section className="gh-section">
        <span className="section-eyebrow reveal" style={{ display: 'block' }}>
          Consistency over intensity
        </span>
        <h2 className="section-title reveal reveal-d1" style={{ marginBottom: '0.5rem' }}>
          Days I <span style={{ color: 'var(--accent)' }}>Code</span>
        </h2>
        <p className="section-sub reveal reveal-d2" style={{ margin: '0 auto 2rem' }}>
          A visual of my GitHub contributions over the past year — proof that
          showing up daily beats waiting for inspiration.
        </p>
        <div className="gh-wrap reveal reveal-d3">
          <GitHubCalendar
            username="Dharanish-2006"
            blockSize={13}
            blockMargin={4}
            fontSize={13}
            theme={{
              dark: [
                'oklch(0.20 0.010 280)',
                'oklch(0.35 0.08 35)',
                'oklch(0.50 0.13 35)',
                'oklch(0.62 0.16 35)',
                'oklch(0.68 0.18 35)',
              ],
            }}
          />
        </div>
      </section>

      {/* ── CONTACT / FIND ME ── */}
      <div className="contact-strip" id="contact">
        <p className="contact-big reveal">
          Let's build something <span>great.</span>
        </p>
        <p className="contact-sub reveal reveal-d1">
          Whether it's a freelance project, internship, or just a good
          conversation about tech — my inbox is always open.
        </p>
        <div className="hero-ctas reveal reveal-d2" style={{ justifyContent: 'center', marginBottom: '1rem' }}>
          <a
            href="https://github.com/Dharanish-2006"
            target="_blank" rel="noreferrer"
            className="btn btn-accent"
          >
            <AiFillGithub size={16} /> View GitHub →
          </a>
        </div>
        <div className="social-row reveal reveal-d3">
          {[
            { icon: <AiFillGithub size={16} />,    label: 'GitHub',    href: 'https://github.com/Dharanish-2006' },
            { icon: <AiFillLinkedin size={16} />,  label: 'LinkedIn',  href: 'https://www.linkedin.com/in/dharanishwar-s/' },
            { icon: <AiFillInstagram size={16} />, label: 'Instagram', href: 'https://www.instagram.com/x3__dharxnish__' },
          ].map(({ icon, label, href }) => (
            <a key={label} href={href} target="_blank" rel="noreferrer" className="social-link">
              {icon} {label}
            </a>
          ))}
        </div>
      </div>
    </main>
  )
}
