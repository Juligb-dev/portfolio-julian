import { useEffect, useRef, useState } from 'react'

const projects = [
  {
    num: '01',
    name: 'SKUL',
    year: '2026',
    type: 'e-commerce',
    href: 'https://skullt.web.app/',
    img: '/proyectos/skul-home.jpg',
  },
  {
    num: '02',
    name: 'EduCampus AR',
    year: '2026',
    type: 'edtech',
    href: 'https://educampus-ar.web.app/',
    img: '/proyectos/educampus-home.jpg',
  },
  {
    num: '03',
    name: 'Control de Flotas',
    year: '2026',
    type: 'tools',
    href: 'https://github.com/Juligb-dev/proyecto-gestion-flota',
    img: '/proyectos/flotas-home.jpg',
  },
]

function Cursor() {
  const cursor = useRef<HTMLDivElement>(null)
  const [hover, setHover] = useState(false)

  useEffect(() => {
    const move = (e: MouseEvent) => {
      if (!cursor.current) return
      cursor.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px) translate(-50%, -50%)`
    }

    const over = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (target.closest('a, button')) setHover(true)
      else setHover(false)
    }

    window.addEventListener('mousemove', move)
    window.addEventListener('mouseover', over)
    return () => {
      window.removeEventListener('mousemove', move)
      window.removeEventListener('mouseover', over)
    }
  }, [])

  return <div ref={cursor} className={`cursor ${hover ? 'cursor--hover' : ''}`} />
}

export default function App() {
  const [active, setActive] = useState<string | null>(null)

  return (
    <div className="app">
      <Cursor />
      <header className="header">
        <div className="header__left">
          <span>Julián Gualberto</span>
          <span>Full Stack Developer</span>
        </div>
        <nav className="header__right">
          <a href="#work">work</a>
          <a href="#log">log</a>
          <a href="#contact">contact</a>
        </nav>
      </header>

      <main className="main">
        <section>
          <div className="index-row">
            <span className="index-row__num">00</span>
            <span className="index-row__name">index</span>
            <span className="index-row__meta">ar</span>
          </div>
        </section>

        <section id="work">
          <div className="work-list">
            {projects.map((p) => (
              <a
                key={p.num}
                className="work-row"
                href={p.href}
                target="_blank"
                rel="noreferrer noopener"
                onMouseEnter={() => setActive(p.img)}
                onMouseLeave={() => setActive(null)}
              >
                <span className="work-row__num">{p.num}</span>
                <span className="work-row__name">{p.name}</span>
                <span className="work-row__year">{p.year}</span>
                <span className="work-row__type">{p.type}</span>
              </a>
            ))}
          </div>
          <div className={`work-preview ${active ? 'is-visible' : ''}`}>
            {active ? <img src={active} alt="" loading="lazy" /> : null}
          </div>
        </section>

        <section id="log">
          <div className="log">
            <span className="log__num">02</span>
            <div className="log__text">
              <p>Armo lo que tiene que funcionar.</p>
              <p>Voy de punta a punta sin capas innecesarias.</p>
            </div>
          </div>
        </section>

        <section id="contact">
          <div className="contact">
            <span className="contact__num">03</span>
            <a className="contact__link" href="https://github.com/Juligb-dev" target="_blank" rel="noreferrer noopener">
              <span>git</span>
              github.com/Juligb-dev
              <span>→</span>
            </a>
          </div>
        </section>
      </main>

      <footer className="footer">
        <span>© 2026 Julián Gualberto</span>
        <span>build.log</span>
      </footer>
    </div>
  )
}
