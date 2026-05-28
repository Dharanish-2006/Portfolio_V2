import { useEffect } from 'react'
import { BsGithub } from 'react-icons/bs'
import { CgWebsite } from 'react-icons/cg'
import { useScrollReveal } from '../../hooks/useScrollReveal'

const PROJECTS = [
  {
    title: 'E-Commerce Website',
    tag: 'Django · Full-Stack',
    desc: 'A complete E-commerce platform built using Django — with product listings, cart, checkout flow, and user auth.',
    emoji: '🛒',
    color: 'oklch(0.68 0.18 35)',
    gh: 'https://github.com/Dharanish-2006/e-comm',
    demo: 'https://e-comm-ivory-six.vercel.app/',
    wide: true,
  },
  {
    title: 'Collab X',
    tag: 'Node.js · MongoDB · Socket.io',
    desc: 'A platform where users can share their business ideas. Built using Node.js, MongoDB, and Socket.io for real-time collaboration.',
    emoji: '💬',
    color: 'oklch(0.65 0.18 260)',
    gh: 'https://github.com/Dharanish-2006/CollabX',
    demo: 'https://chat-app-v3-stb8.onrender.com/',
    wide: false,
  },
  {
    title: 'SB Recipes',
    tag: 'MERN Stack',
    desc: 'A recipe app for cooks built using the MERN Stack — browse, search, and save your favourite recipes.',
    emoji: '🍳',
    color: 'oklch(0.72 0.17 90)',
    gh: 'https://github.com/Dharanish-2006/cook',
    demo: 'https://cook-hazel.vercel.app/',
    wide: false,
  },
  {
    title: 'Attendance Management System',
    tag: 'Vanilla JS · LocalStorage',
    desc: 'An attendance management system that maintains your data locally — offline-first, no backend required.',
    emoji: '📋',
    color: 'oklch(0.68 0.18 145)',
    gh: 'https://github.com/Dharanish-2006/attendance-management-system',
    demo: 'https://dharanish-2006.github.io/attendance-management-system/',
    wide: false,
  },
]

export default function Projects() {
  useScrollReveal()

  return (
    <main style={{ paddingTop: '6rem' }}>
      <section>
        <h1 className="section-title reveal" style={{ textAlign: 'center' }}>
          My Recent{' '}
          <span style={{ color: 'var(--accent)' }}>Works</span>
        </h1>
        <p className="section-sub reveal reveal-d1" style={{ textAlign: 'center', margin: '0 auto 3rem' }}>
          Here are a few projects I've worked on recently.
        </p>

        <div className="bento">
          {PROJECTS.map((p, i) => (
            <div
              key={p.title}
              className={`project-card reveal ${p.wide ? 'wide' : ''}`}
              style={{ transitionDelay: `${i * 0.08}s` }}
            >
              {/* Thumb */}
              <div
                className="project-thumb"
                style={{
                  background: `linear-gradient(135deg, ${p.color}22, var(--dim))`,
                  fontSize: p.wide ? '4rem' : '3rem',
                  height: p.wide ? '200px' : '160px',
                }}
              >
                {p.emoji}
              </div>

              <div className="project-body">
                <span className="project-tag">{p.tag}</span>
                <div className="project-title">{p.title}</div>
                <div className="project-desc">{p.desc}</div>
                <div className="project-links">
                  <a className="proj-link" href={p.gh} target="_blank" rel="noreferrer">
                    <BsGithub size={11} /> GitHub
                  </a>
                  {p.demo && (
                    <a className="proj-link" href={p.demo} target="_blank" rel="noreferrer">
                      <CgWebsite size={11} /> Live Demo ↗
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}

          {/* Placeholder */}
          <div
            className="project-card reveal"
            style={{
              background: 'oklch(0.68 0.18 35 / 0.04)',
              borderColor: 'oklch(0.68 0.18 35 / 0.15)',
              justifyContent: 'center',
              alignItems: 'center',
              textAlign: 'center',
              minHeight: '220px',
              transitionDelay: `${PROJECTS.length * 0.08}s`,
            }}
          >
            <div style={{ fontSize: '2rem', color: 'var(--border)', marginBottom: '0.7rem' }}>+</div>
            <div style={{ fontWeight: 700, fontSize: '0.9rem' }}>More coming soon</div>
            <div style={{ fontSize: '0.78rem', color: 'var(--muted)', marginTop: '0.35rem' }}>
              Currently building new things
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
