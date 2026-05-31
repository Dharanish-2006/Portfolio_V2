import { useState, useRef, useEffect } from 'react'
import { BsGithub } from 'react-icons/bs'
import { CgWebsite } from 'react-icons/cg'
import { useScrollReveal } from '../../hooks/useScrollReveal'

const PROJECTS = [
  {
    title: 'E-Commerce Website',
    tag: 'Full-Stack',
    stack: ['Django', 'REST API', 'React'],
    desc: 'A complete E-commerce platform built using Django — with product listings, cart, checkout flow, and user authentication.',
    emoji: '🛒',
    color: '#e8915a',
    gh: 'https://github.com/Dharanish-2006/svs',
    demo: 'https://www.svscollection.com/',
    featured: true,
  },
  {
    title: 'Collab X',
    tag: 'Full-Stack',
    stack: ['Node.js', 'MongoDB', 'Socket.io'],
    desc: 'A platform where users can share their business ideas with real-time collaboration and live messaging.',
    emoji: '💬',
    color: '#7c6fcd',
    gh: 'https://github.com/Dharanish-2006/CollabX',
    demo: 'https://chat-app-v3-stb8.onrender.com/',
    featured: true,
  },
  {
    title: 'RK Portfolio',
    tag: 'Portfolios',
    stack: ['React', 'Vite', 'Vercel'],
    desc: 'A professional portfolio website for an imports & exports company — showcasing services, products, and brand identity.',
    emoji: '🚢',
    color: '#5a9ee8',
    gh: 'https://github.com/Dharanish-2006/RK_Portfolio',
    demo: 'https://rk-portfolio-kappa.vercel.app/',
    featured: false,
  },
  {
    title: 'DigiLabs Marketing',
    tag: 'Portfolios',
    stack: ['React', 'Vite', 'Vercel'],
    desc: 'A sleek agency website for a digital marketing firm — built to convert visitors with modern design and clear service offerings.',
    emoji: '📈',
    color: '#c45ae8',
    gh: 'https://github.com/Dharanish-2006/DigiLabs',
    demo: 'https://www.digilabsmarketing.com/',
    featured: false,
  },
  {
    title: 'PMS Global Elites',
    tag: 'Portfolios',
    stack: ['React', 'Vite', 'Vercel'],
    desc: 'A clean, professional website for an accounting-based startup — presenting services, team, and expertise to clients.',
    emoji: '📊',
    color: '#5ae8c4',
    gh: 'https://github.com/Dharanish-2006/PMS_portfolio',
    demo: 'https://www.pmsglobalelites.in/',
    featured: false,
  },
    {
    title: 'SB Recipes',
    tag: 'Full-Stack',
    stack: ['React', 'Node.js', 'MongoDB'],
    desc: 'A recipe app for cooks built using the MERN Stack — browse, search, and save your favourite recipes.',
    emoji: '🍳',
    color: '#c9a84c',
    gh: 'https://github.com/Dharanish-2006/cook',
    demo: 'https://cook-hazel.vercel.app/',
    featured: false,
  },
]

const FILTERS = ['All', 'Full-Stack', 'Portfolios']

const TAG_COLORS = {
  'Full-Stack': { background: 'oklch(0.68 0.18 35 / 0.12)',  color: 'oklch(0.75 0.16 35)' },
  'Frontend':   { background: 'oklch(0.72 0.17 145 / 0.12)', color: 'oklch(0.72 0.17 145)' },
  'Portfolios':  { background: 'oklch(0.65 0.18 260 / 0.12)', color: 'oklch(0.72 0.14 260)' },
}

function TiltCard({ children, className, style }) {
  const ref = useRef(null)

  const handleMouseMove = (e) => {
    const card = ref.current
    if (!card) return
    const rect = card.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const cx = rect.width / 2
    const cy = rect.height / 2
    const rotateX = ((y - cy) / cy) * -6
    const rotateY = ((x - cx) / cx) * 6
    card.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-6px)`
    card.style.transition = 'transform 0.1s ease-out'
    const spotlight = card.querySelector('.card-spotlight')
    if (spotlight) {
      spotlight.style.background = `radial-gradient(280px at ${x}px ${y}px, rgba(255,255,255,0.06), transparent 80%)`
    }
  }

  const handleMouseLeave = () => {
    const card = ref.current
    if (!card) return
    card.style.transform = 'perspective(800px) rotateX(0deg) rotateY(0deg) translateY(0px)'
    card.style.transition = 'transform 0.5s var(--ease-out-expo)'
    const spotlight = card.querySelector('.card-spotlight')
    if (spotlight) spotlight.style.background = 'transparent'
  }

  return (
    <div
      ref={ref}
      className={className}
      style={{ ...style, transformStyle: 'preserve-3d', willChange: 'transform' }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </div>
  )
}

export default function Projects() {
  useScrollReveal()
  const [activeFilter, setActiveFilter] = useState('All')
  const [visible, setVisible] = useState(true)

  const filtered = activeFilter === 'All'
    ? PROJECTS
    : PROJECTS.filter(p => p.tag === activeFilter)

  const handleFilter = (f) => {
    if (f === activeFilter) return
    setVisible(false)
    setTimeout(() => {
      setActiveFilter(f)
      setVisible(true)
    }, 180)
  }

  const featured = filtered.filter(p => p.featured)
  const rest = filtered.filter(p => !p.featured)

  return (
    <>
      <style>{`
        .filter-bar {
          display: flex;
          justify-content: center;
          gap: 0.5rem;
          flex-wrap: wrap;
          margin-bottom: 3.5rem;
        }
        .filter-btn {
          font-family: var(--font-mono);
          font-size: 0.72rem;
          letter-spacing: 0.08em;
          padding: 0.4rem 1.1rem;
          border-radius: 100px;
          border: 1px solid var(--border);
          background: transparent;
          color: var(--muted);
          cursor: pointer;
          transition: all 0.2s;
        }
        .filter-btn:hover { color: var(--text); border-color: var(--muted); }
        .filter-btn.active { background: var(--accent); border-color: var(--accent); color: #fff; }

        .featured-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(min(100%, 500px), 1fr));
          gap: 1.4rem;
          margin-bottom: 1.4rem;
        }
        .project-card-v2 {
          background: var(--surface);
          border: 1px solid var(--border);
          border-radius: 20px;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          position: relative;
          cursor: pointer;
          transition: border-color 0.3s;
        }
        .project-card-v2:hover { border-color: oklch(0.68 0.18 35 / 0.45); }

        .card-spotlight {
          position: absolute;
          inset: 0;
          pointer-events: none;
          z-index: 1;
          border-radius: 20px;
          transition: background 0.15s;
        }

        .card-thumb-featured {
          width: 100%; height: 220px;
          display: flex; align-items: center; justify-content: center;
          font-size: 5rem; position: relative; overflow: hidden; flex-shrink: 0;
        }
        .card-thumb-featured::after {
          content: ''; position: absolute; inset: 0;
          background: linear-gradient(to bottom, transparent 40%, var(--surface) 100%);
        }
        .card-thumb-grid {
          width: 100%; height: 160px;
          display: flex; align-items: center; justify-content: center;
          font-size: 3.2rem; position: relative; overflow: hidden; flex-shrink: 0;
        }
        .card-thumb-grid::after {
          content: ''; position: absolute; inset: 0;
          background: linear-gradient(to bottom, transparent 40%, var(--surface) 100%);
        }

        .thumb-emoji {
          position: relative; z-index: 1;
          filter: drop-shadow(0 0 24px currentColor);
          transition: transform 0.4s var(--ease-out-expo);
        }
        .project-card-v2:hover .thumb-emoji { transform: scale(1.15) translateY(-4px); }

        .card-body-v2 {
          padding: 1.5rem 1.6rem 1.6rem;
          display: flex; flex-direction: column; gap: 0.75rem;
          flex: 1; position: relative; z-index: 2;
        }

        .card-tag-row {
          display: flex; align-items: center;
          justify-content: space-between; gap: 0.5rem;
        }
        .card-tag-pill {
          font-family: var(--font-mono); font-size: 0.62rem;
          letter-spacing: 0.1em; text-transform: uppercase;
          padding: 0.22rem 0.65rem; border-radius: 100px;
        }
        .card-number {
          font-family: var(--font-mono); font-size: 0.62rem;
          color: var(--border); letter-spacing: 0.05em;
        }

        .card-title-v2 {
          font-size: 1.15rem; font-weight: 800;
          letter-spacing: -0.02em; line-height: 1.2;
        }
        .card-title-featured { font-size: 1.45rem; }

        .card-desc-v2 {
          font-size: 0.82rem; color: var(--muted);
          line-height: 1.7; flex: 1;
        }

        .card-stack { display: flex; flex-wrap: wrap; gap: 0.35rem; }
        .stack-chip {
          font-family: var(--font-mono); font-size: 0.62rem;
          padding: 0.2rem 0.55rem; border-radius: 6px;
          background: var(--dim); border: 1px solid var(--border);
          color: var(--muted); transition: border-color 0.2s, color 0.2s;
        }
        .project-card-v2:hover .stack-chip {
          border-color: oklch(0.68 0.18 35 / 0.3); color: var(--text);
        }

        .card-footer {
          display: flex; align-items: center;
          justify-content: space-between;
          padding-top: 0.6rem;
          border-top: 1px solid var(--border);
          margin-top: 0.2rem;
        }
        .card-links { display: flex; gap: 0.5rem; }
        .card-link-btn {
          display: inline-flex; align-items: center; gap: 0.35rem;
          font-family: var(--font-mono); font-size: 0.68rem;
          color: var(--muted); text-decoration: none;
          border: 1px solid var(--border); border-radius: 100px;
          padding: 0.3rem 0.8rem;
          transition: color 0.2s, border-color 0.2s, background 0.2s, transform 0.2s;
        }
        .card-link-btn:hover {
          color: var(--text); border-color: var(--muted);
          background: var(--dim); transform: translateY(-1px);
        }
        .card-link-btn.primary {
          background: oklch(0.68 0.18 35 / 0.1);
          border-color: oklch(0.68 0.18 35 / 0.35);
          color: var(--accent);
        }
        .card-link-btn.primary:hover {
          background: oklch(0.68 0.18 35 / 0.2);
          border-color: var(--accent); color: var(--accent);
        }

        .projects-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.4rem;
        }
        @media (max-width: 960px) { .projects-grid { grid-template-columns: repeat(2, 1fr); } }
        @media (max-width: 600px) {
          .projects-grid { grid-template-columns: 1fr; }
          .featured-grid { grid-template-columns: 1fr; }
        }

        .cards-fade { transition: opacity 0.18s ease, transform 0.18s ease; }
        .cards-fade.hidden { opacity: 0; transform: translateY(8px); }

        .more-card {
          background: oklch(0.68 0.18 35 / 0.04);
          border: 1px dashed oklch(0.68 0.18 35 / 0.2);
          border-radius: 20px;
          display: flex; flex-direction: column;
          align-items: center; justify-content: center;
          text-align: center; min-height: 200px; gap: 0.6rem;
          transition: border-color 0.3s, background 0.3s; cursor: default;
        }
        .more-card:hover {
          border-color: oklch(0.68 0.18 35 / 0.4);
          background: oklch(0.68 0.18 35 / 0.07);
        }

        .live-dot {
          width: 7px; height: 7px; border-radius: 50%;
          background: var(--green);
          box-shadow: 0 0 6px oklch(0.72 0.17 145 / 0.5);
          flex-shrink: 0;
        }
      `}</style>

      <main style={{ paddingTop: '6rem' }}>
        <section>

          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <span className="section-eyebrow reveal">Portfolio</span>
            <h1 className="section-title reveal reveal-d1">
              My Recent{' '}
              <span style={{ color: 'var(--accent)' }}>Works</span>
            </h1>
            <p className="section-sub reveal reveal-d2" style={{ margin: '0 auto' }}>
              A mix of personal projects and freelance client work —
              each one solving a real problem.
            </p>
          </div>

          <div className="filter-bar reveal reveal-d3">
            {FILTERS.map(f => (
              <button
                key={f}
                className={`filter-btn ${activeFilter === f ? 'active' : ''}`}
                onClick={() => handleFilter(f)}
              >
                {f}
                <span style={{ marginLeft: '0.4rem', opacity: 0.6, fontSize: '0.6rem' }}>
                  ({f === 'All' ? PROJECTS.length : PROJECTS.filter(p => p.tag === f).length})
                </span>
              </button>
            ))}
          </div>

          <div className={`cards-fade ${visible ? '' : 'hidden'}`}>

            {featured.length > 0 && (
              <div className="featured-grid">
                {featured.map((p, i) => (
                  <TiltCard key={p.title} className="project-card-v2 reveal" style={{ transitionDelay: `${i * 0.08}s` }}>
                    <div className="card-spotlight" />
                    <div className="card-thumb-featured" style={{ background: `linear-gradient(135deg, ${p.color}28, ${p.color}08)` }}>
                      <span className="thumb-emoji" style={{ color: p.color }}>{p.emoji}</span>
                    </div>
                    <div className="card-body-v2">
                      <div className="card-tag-row">
                        <span className="card-tag-pill" style={TAG_COLORS[p.tag]}>{p.tag}</span>
                        <span className="card-number">{String(PROJECTS.indexOf(p) + 1).padStart(2, '0')}</span>
                      </div>
                      <div className="card-title-v2 card-title-featured">{p.title}</div>
                      <div className="card-desc-v2">{p.desc}</div>
                      <div className="card-stack">
                        {p.stack.map(s => <span className="stack-chip" key={s}>{s}</span>)}
                      </div>
                      <div className="card-footer">
                        <div className="card-links">
                          <a className="card-link-btn" href={p.gh} target="_blank" rel="noreferrer">
                            <BsGithub size={11} /> GitHub
                          </a>
                          {p.demo && (
                            <a className="card-link-btn primary" href={p.demo} target="_blank" rel="noreferrer">
                              <CgWebsite size={11} /> Live Demo ↗
                            </a>
                          )}
                        </div>
                        <span className="live-dot" title="Live" />
                      </div>
                    </div>
                  </TiltCard>
                ))}
              </div>
            )}

            {rest.length > 0 && (
              <div className="projects-grid">
                {rest.map((p, i) => (
                  <TiltCard
                    key={p.title}
                    className="project-card-v2 reveal"
                    style={{ transitionDelay: `${(featured.length + i) * 0.07}s` }}
                  >
                    <div className="card-spotlight" />
                    <div className="card-thumb-grid" style={{ background: `linear-gradient(135deg, ${p.color}28, ${p.color}08)` }}>
                      <span className="thumb-emoji" style={{ color: p.color }}>{p.emoji}</span>
                    </div>
                    <div className="card-body-v2">
                      <div className="card-tag-row">
                        <span className="card-tag-pill" style={TAG_COLORS[p.tag]}>{p.tag}</span>
                        <span className="card-number">{String(PROJECTS.indexOf(p) + 1).padStart(2, '0')}</span>
                      </div>
                      <div className="card-title-v2">{p.title}</div>
                      <div className="card-desc-v2">{p.desc}</div>
                      <div className="card-stack">
                        {p.stack.map(s => <span className="stack-chip" key={s}>{s}</span>)}
                      </div>
                      <div className="card-footer">
                        <div className="card-links">
                          <a className="card-link-btn" href={p.gh} target="_blank" rel="noreferrer">
                            <BsGithub size={11} /> GitHub
                          </a>
                          {p.demo && (
                            <a className="card-link-btn primary" href={p.demo} target="_blank" rel="noreferrer">
                              <CgWebsite size={11} /> Live ↗
                            </a>
                          )}
                        </div>
                        <span className="live-dot" title="Live" />
                      </div>
                    </div>
                  </TiltCard>
                ))}

                <div className="more-card reveal" style={{ transitionDelay: `${(featured.length + rest.length) * 0.07}s` }}>
                  <div style={{ fontSize: '1.8rem', opacity: 0.3 }}>✦</div>
                  <div style={{ fontWeight: 700, fontSize: '0.9rem' }}>More coming soon</div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--muted)' }}>Currently building new things</div>
                </div>
              </div>
            )}

            {filtered.length === 0 && (
              <div style={{ textAlign: 'center', padding: '4rem 0', color: 'var(--muted)' }}>
                No projects in this category yet.
              </div>
            )}
          </div>
        </section>
      </main>
    </>
  )
}