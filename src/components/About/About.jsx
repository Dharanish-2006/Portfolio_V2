import { GitHubCalendar } from 'react-github-calendar'
import { useScrollReveal } from '../../hooks/useScrollReveal'
import { CgCPlusPlus } from 'react-icons/cg'
import {
  DiJavascript1, DiReact, DiNodejs, DiMongodb,
  DiPython, DiGit, DiJava, DiDjango, DiBootstrap,
} from 'react-icons/di'
import { SiVercel, SiRender } from 'react-icons/si'
import { VscVscode } from 'react-icons/vsc'
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai'
import { ImPointRight } from 'react-icons/im'

const TECH = [
  { icon: <CgCPlusPlus />,    label: 'C++' },
  { icon: <DiJavascript1 />,  label: 'JavaScript' },
  { icon: <DiBootstrap />,    label: 'Bootstrap' },
  { icon: <DiNodejs />,       label: 'Node.js' },
  { icon: <DiReact />,        label: 'React' },
  { icon: <DiMongodb />,      label: 'MongoDB' },
  { icon: <DiGit />,          label: 'Git' },
  { icon: <DiPython />,       label: 'Python' },
  { icon: <DiDjango />,       label: 'Django' },
  { icon: <DiJava />,         label: 'Java' },
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
            <span className="section-eyebrow reveal">Know Who I'M</span>
            <h1 className="section-title reveal reveal-d1">
              Hi Everyone, I am{' '}
              <span style={{ color: 'var(--accent)' }}>Dharanish</span>{' '}
              from{' '}
              <span style={{ color: 'var(--accent)' }}>Chennai, India.</span>
            </h1>
            <div className="about-text">
              <p className="reveal reveal-d2">
                I am currently pursuing <strong>BCA</strong>.
              </p>
              <p className="reveal reveal-d3">
                Apart from coding, some other activities that I love to do!
              </p>

              <ul style={{
                listStyle: 'none', marginTop: '0.5rem',
                display: 'flex', flexDirection: 'column', gap: '0.6rem',
              }} className="reveal reveal-d4">
                {['Writing Tech Blogs', 'Travelling'].map(item => (
                  <li key={item} style={{
                    display: 'flex', alignItems: 'center', gap: '0.7rem',
                    color: 'var(--muted)', fontSize: '0.95rem',
                  }}>
                    <ImPointRight style={{ color: 'var(--accent)', flexShrink: 0 }} />
                    {item}
                  </li>
                ))}
              </ul>

              <div className="about-quote reveal reveal-d5">
                "Strive to build things that make a difference!"
              </div>
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
                'Pursuing BCA',
                'Writing tech blogs',
                'Freelancing',
                'Open-source contributions',
                'Travelling',
              ].map(item => (
                <li key={item} style={{
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
                  {item}
                </li>
              ))}
            </ul>

            <div className="stats-row">
              {[['4+','Projects'],['3+','Stacks'],['2+','Years'],['100%','Open Source']].map(([n,l]) => (
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
        <h2 className="section-title reveal" style={{ textAlign: 'center' }}>
          Professional{' '}
          <span style={{ color: 'var(--accent)' }}>Skillset</span>
        </h2>
        <p className="section-sub reveal reveal-d1" style={{ textAlign: 'center', margin: '0 auto 2.5rem' }}>
          Technologies I work with on a daily basis.
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
        <h2 className="section-title reveal" style={{ textAlign: 'center' }}>
          <span style={{ color: 'var(--accent)' }}>Tools</span> I Use
        </h2>
        <p className="section-sub reveal reveal-d1" style={{ textAlign: 'center', margin: '0 auto 2.5rem' }}>
          My everyday development toolkit.
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
        <h2 className="section-title reveal" style={{ marginBottom: '0.5rem' }}>
          Days I <span style={{ color: 'var(--accent)' }}>Code</span>
        </h2>
        <p className="section-sub reveal reveal-d1" style={{ margin: '0 auto 2rem' }}>
          My GitHub contribution activity over the past year.
        </p>
        <div className="gh-wrap reveal reveal-d2">
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
          Open to freelance, internship, and collaboration opportunities.
          Feel free to connect!
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
