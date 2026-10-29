import { useEffect, useRef, useState } from 'react'

const projects = [
  {
    num: '01',
    name: 'SKUL',
    meta: 'e-commerce · pagos reales',
    href: 'https://skullt.web.app/',
    cover: '/proyectos/skul-home.jpg',
  },
  {
    num: '02',
    name: 'EduCampus AR',
    meta: 'edtech · en desarrollo',
    href: 'https://educampus-ar.web.app/',
    cover: '/proyectos/educampus-home.jpg',
  },
  {
    num: '03',
    name: 'Control de Flotas',
    meta: 'app · facultad',
    href: 'https://github.com/Juligb-dev/proyecto-gestion-flota',
    cover: '/proyectos/flotas-home.jpg',
  },
]

function useCursor() {
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

  return ref
}

export default function App() {
  const cursor = useCursor()
  const [hovered, setHovered] = useState<string | null>(null)

  return (
    <div className="site">
      <div ref={cursor} className={`cursor ${hovered ? 'cursor--show' : ''}`} />
      <header className="nav">
        <div className="nav__brand">
          <span>Julián Gualberto</span>
        </div>
        <div className="nav__items">
          <a href="#work">Trabajos</a>
          <a href="#info">Info</a>
          <a href="https://github.com/Juligb-dev">GitHub</a>
        </div>
      </header>

      <main>
        <section className="hero">
          <p className="hero__kicker">Full Stack Developer</p>
          <h1 className="hero__title">Armo cosas que funcionan.</h1>
          <p className="hero__sub">Sin rodeos.</p>
        </section>

        <section id="work" className="work">
          <div className="work__head">
            <span>Seleccionados</span>
          </div>
          <div className="work__list">
            {projects.map((p) => (
              <a
                key={p.num}
                className="work__row"
                href={p.href}
                target="_blank"
                rel="noreferrer noopener"
                onMouseEnter={() => setHovered(p.cover)}
                onMouseLeave={() => setHovered(null)}
              >
                <div className="work__left">
                  <span className="work__num">{p.num}</span>
                  <span className="work__name">{p.name}</span>
                </div>
                <span className="work__meta">{p.meta}</span>
              </a>
            ))}
          </div>
          <div className={`work__preview ${hovered ? 'is-on' : ''}`}>
            {hovered ? <img src={hovered} alt="" /> : null}
          </div>
        </section>

        <section id="info" className="info">
          <div className="info__grid">
            <div>
              <p>Desarrollador full stack.</p>
              <p>Me gusta lo directo, lo práctico y que quede bien hecho.</p>
            </div>
            <div>
              <a href="https://github.com/Juligb-dev">github.com/Juligb-dev</a>
            </div>
          </div>
        </section>
      </main>

      <footer className="foot">
        <span>Buenos Aires, AR</span>
        <span>2026</span>
      </footer>
    </div>
  )
}
