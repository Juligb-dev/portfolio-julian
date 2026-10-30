import { useEffect, useRef, useState } from 'react'

const works = [
  {
    id: '01',
    title: 'SKUL',
    cat: 'store',
    url: 'https://skullt.web.app/',
    img: '/proyectos/skul-home.jpg',
  },
  {
    id: '02',
    title: 'EduCampus AR',
    cat: 'platform',
    url: 'https://educampus-ar.web.app/',
    img: '/proyectos/educampus-home.jpg',
  },
  {
    id: '03',
    title: 'Control de Flotas',
    cat: 'ops',
    url: 'https://github.com/Juligb-dev/proyecto-gestion-flota',
    img: '/proyectos/flotas-home.jpg',
  },
]

function Cursor() {
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const move = (e: MouseEvent) => {
      el.style.left = e.clientX + 'px'
      el.style.top = e.clientY + 'px'
    }
    window.addEventListener('mousemove', move)
    return () => window.removeEventListener('mousemove', move)
  }, [])
  return <div ref={ref} className="cursor" aria-hidden="true" />
}

export default function App() {
  const [active, setActive] = useState<string | null>(null)

  return (
    <div className="wrap">
      <Cursor />
      <header className="bar">
        <div className="bar__left">Julián Gualberto</div>
        <div className="bar__right">
          <a
            href="https://github.com/Juligb-dev"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub (opens in a new tab)"
          >
            GitHub
          </a>
        </div>
      </header>

      <main>
        <section className="mast">
          <h1 className="mast__name">JULIÁN<br />GUALBERTO</h1>
          <p className="mast__role">FULL STACK DEVELOPER</p>
        </section>

        <section className="list" aria-labelledby="works-title">
          <h2 id="works-title" className="sr-only">Selected work</h2>
          {works.map((w) => (
            <a
              key={w.id}
              className="row"
              href={w.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${w.id}. ${w.title} — ${w.cat} (opens in a new tab)`}
              onMouseEnter={() => setActive(w.img)}
              onMouseLeave={() => setActive(null)}
              onFocus={() => setActive(w.img)}
              onBlur={() => setActive(null)}
            >
              <span className="row__id">{w.id}</span>
              <span className="row__title">{w.title}</span>
              <span className="row__cat">{w.cat}</span>
            </a>
          ))}
        </section>
      </main>

      <footer className="foot">
        <span>BA</span>
        <span>2026</span>
      </footer>

      <div className={`imgframe ${active ? 'on' : ''}`} aria-hidden="true">
        {active && <img src={active} alt="" />}
      </div>
    </div>
  )
}
