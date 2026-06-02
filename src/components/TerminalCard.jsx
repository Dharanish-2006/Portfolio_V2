import { useEffect, useRef, useState } from 'react'

const SKILLS = ['python', 'django', 'react', 'node.js', 'mongodb', 'javascript', 'c++', 'git']

const LINES = [
  { type: 'prompt', text: 'whoami' },
  { type: 'output', text: 'dharanish' },
  { type: 'gap' },
  { type: 'prompt', text: 'cat profile.json' },
  { type: 'output', text: '{' },
  { type: 'json', key: '  "name"',      value: '"Dharanish S"',          vc: '#e8c07d' },
  { type: 'json', key: '  "role"',      value: '"Full-Stack Developer"', vc: '#e8c07d' },
  { type: 'json', key: '  "location"',  value: '"Chennai, India 🇮🇳"',    vc: '#e8c07d' },
  { type: 'json', key: '  "education"', value: '"Pursuing BCA"',         vc: '#e8c07d' },
  { type: 'json', key: '  "status"',    value: '"Open to freelance ✦"',  vc: '#5ae8a0' },
  { type: 'output', text: '}' },
  { type: 'gap' },
  { type: 'prompt', text: 'ls skills/' },
  { type: 'skills' },
  { type: 'gap' },
  { type: 'prompt', text: 'cat contact.txt' },
  { type: 'link', label: 'github   ', href: 'https://github.com/Dharanish-2006' },
  { type: 'link', label: 'linkedin ', href: 'https://www.linkedin.com/in/dharanishwar-s/' },
  { type: 'link', label: 'instagram', href: 'https://www.instagram.com/x3__dharxnish__' },
  { type: 'gap' },
  { type: 'cursor' },
]

const TIMINGS = (() => {
  let t = 400
  return LINES.map(l => { const d = t; t += l.type === 'gap' ? 80 : l.type === 'prompt' ? 340 : 110; return d })
})()


const S = {
  wrap:    { fontFamily: 'var(--font-mono)', background: '#0e0e14', border: '1px solid #2b2b37', borderRadius: 14, overflow: 'hidden', boxShadow: '0 0 0 1px #1c1c23, 0 24px 64px rgba(0,0,0,.55), 0 0 80px rgba(232,145,90,.05)', transition: 'box-shadow .4s, border-color .4s' },
  bar:     { display: 'flex', alignItems: 'center', gap: '0.6rem', padding: '0.75rem 1rem', background: '#141418', borderBottom: '1px solid #22222a', userSelect: 'none' },
  dots:    { display: 'flex', gap: 6 },
  title:   { flex: 1, textAlign: 'center', fontSize: '0.68rem', color: '#616170', letterSpacing: '0.05em', marginRight: 48 },
  body:    { padding: '1.4rem 1.6rem 1.6rem', display: 'flex', flexDirection: 'column', position: 'relative', minHeight: 340 },
  pfx:     { color: '#e8915a', marginRight: '0.5rem', fontSize: '0.75rem', flexShrink: 0 },
  chevron: { color: '#818194', marginRight: '0.4rem', fontSize: '0.75rem' },
  out:     { color: '#818194', paddingLeft: '1.2rem', fontSize: '0.78rem', lineHeight: 1.85 },
  jkey:    { color: '#7da8e0' },
  jcolon:  { color: '#686878', margin: '0 0.3rem' },
  scan:    { position: 'absolute', inset: 0, background: 'repeating-linear-gradient(to bottom,transparent,transparent 2px,rgba(0,0,0,.03) 2px,rgba(0,0,0,.03) 4px)', pointerEvents: 'none', borderRadius: '0 0 14px 14px' },
}

const DOT_COLORS = ['#ff5f57', '#ffbd2e', '#28c840']
const fade = { animation: 't-fadein .2s ease both' }

export default function TerminalCard() {
  const [shown, setShown] = useState(0)
  const [typed, setTyped] = useState({})
  const started           = useRef(false)
  const ref               = useRef(null)

  useEffect(() => {
    const io = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting || started.current) return
      started.current = true
      io.disconnect()
      LINES.forEach((line, i) => {
        if (line.type === 'prompt') {
          line.text.split('').forEach((_, ci) =>
            setTimeout(() => setTyped(p => ({ ...p, [i]: line.text.slice(0, ci + 1) })), TIMINGS[i] + ci * 38)
          )
          setTimeout(() => setShown(s => Math.max(s, i + 1)), TIMINGS[i] + line.text.length * 38)
        } else {
          setTimeout(() => setShown(s => Math.max(s, i + 1)), TIMINGS[i])
        }
      })
    }, { threshold: 0.25 })
    if (ref.current) io.observe(ref.current)
    return () => io.disconnect()
  }, [])

  return (
    <>
      <style>{`
        @keyframes t-fadein { from{opacity:0;transform:translateY(3px)} to{opacity:1;transform:none} }
        @keyframes t-blink  { 0%,100%{opacity:1} 50%{opacity:0} }
        .terminal-wrap:hover { border-color:#3c3c4e !important; box-shadow:0 0 0 1px #272730,0 32px 80px rgba(0,0,0,.6),0 0 100px rgba(232,145,90,.10) !important; }
        .terminal-wrap:hover .tb-dot { filter:brightness(1.3); }
        .t-skill { font-size:.68rem; color:#3ecf80; background:rgba(62,207,128,.08); border:1px solid rgba(62,207,128,.25); border-radius:5px; padding:.1rem .45rem; transition:background .2s,border-color .2s; }
        .t-skill:hover { background:rgba(62,207,128,.18); border-color:rgba(62,207,128,.5); }
        .t-lnk { display:flex; align-items:center; gap:.5rem; padding-left:1.2rem; font-size:.78rem; color:#7e8fd4; text-decoration:none; transition:color .2s; }
        .t-lnk:hover { color:#9aaee8; text-decoration:underline; text-underline-offset:3px; }
      `}</style>

      <div className="terminal-wrap reveal reveal-right" style={S.wrap} ref={ref}>
        <div style={S.bar}>
          <div style={S.dots}>
            {DOT_COLORS.map(c => <div key={c} className="tb-dot" style={{ width:12, height:12, borderRadius:'50%', background:c, transition:'filter .2s' }} />)}
          </div>
          <div style={S.title}>dharanish@portfolio ~ zsh</div>
        </div>

        <div style={S.body}>
          <div style={S.scan} />
          {LINES.map((line, i) => {
            if (line.type === 'prompt' && !typed[i]) return null
            if (line.type !== 'prompt' && i >= shown) return null

            if (line.type === 'gap')
              return <div key={i} style={{ height:'0.5rem', ...fade }} />

            if (line.type === 'prompt')
              return (
                <div key={i} style={{ display:'flex', alignItems:'baseline', lineHeight:1.85, fontSize:'0.8rem', ...fade }}>
                  <span style={S.pfx}>dharanish@portfolio</span>
                  <span style={S.chevron}>❯</span>
                  <span style={{ color:'#ede8df' }}>{typed[i]}</span>
                </div>
              )

            if (line.type === 'output')
              return <div key={i} style={{ ...S.out, ...fade }}>{line.text}</div>

            if (line.type === 'json')
              return (
                <div key={i} style={{ ...S.out, display:'flex', ...fade }}>
                  <span style={S.jkey}>{line.key}</span>
                  <span style={S.jcolon}>:</span>
                  <span style={{ color:line.vc }}>{line.value}</span>
                  <span style={S.jcolon}>,</span>
                </div>
              )

            if (line.type === 'skills')
              return (
                <div key={i} style={{ display:'flex', flexWrap:'wrap', gap:'0.4rem', padding:'0.15rem 0 0.15rem 1.2rem', ...fade }}>
                  {SKILLS.map(s => <span key={s} className="t-skill">{s}</span>)}
                </div>
              )

            if (line.type === 'link')
              return (
                <a key={i} className="t-lnk" href={line.href} target="_blank" rel="noreferrer" style={fade}>
                  <span style={{ color:'#e8915a', fontSize:'0.7rem' }}>⌥</span>
                  <span style={{ color:'#6f6f82', minWidth:60 }}>{line.label}</span>
                  <span>{line.href.replace('https://', '')}</span>
                </a>
              )

            if (line.type === 'cursor')
              return (
                <div key={i} style={{ display:'flex', alignItems:'baseline', paddingTop:'0.1rem', ...fade }}>
                  <span style={S.pfx}>dharanish@portfolio</span>
                  <span style={S.chevron}>❯</span>
                  <span style={{ display:'inline-block', width:8, height:'0.85em', background:'#e8915a', borderRadius:1, marginLeft:'0.5rem', verticalAlign:'middle', animation:'t-blink 1.1s step-end infinite' }} />
                </div>
              )

            return null
          })}
        </div>
      </div>
    </>
  )
}