import {
  ArrowDown,
  ArrowUpRight,
  Check,
  Layers,
  MapPin,
  MoveDown,
  ShieldCheck,
  Sparkles,
  Terminal,
} from 'lucide-react'
import { Link } from 'react-router-dom'
import { GitHubIcon } from '@/components/icons'
import { Marquee } from '@/components/Marquee'
import { ProjectCard } from '@/components/ProjectCard'
import { Reveal } from '@/components/Reveal'
import { SectionHeading } from '@/components/SectionHeading'
import { Seo, SITE_URL } from '@/components/Seo'
import { projects } from '@/data/projects'
import {
  about,
  heroStats,
  pick,
  principles,
  processSteps,
  profile,
  sections,
  skills,
  ui,
} from '@/data/site'
import { useLang } from '@/lib/i18n-context'

export function Home() {
  const { lang } = useLang()

  const seoDescription = pick(
    {
      es: 'Portfolio de Julián Gualberto, desarrollador full stack. SKUL con pagos reales, EduCampus en desarrollo.',
      en: 'Portfolio of Julián Gualberto, full stack developer. SKUL with real payments, EduCampus in development.',
    },
    lang,
  )

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: profile.name,
    url: SITE_URL,
    image: `${SITE_URL}${profile.avatar}`,
    jobTitle: pick(profile.role, lang),
    sameAs: [profile.github, profile.currentSite],
    knowsAbout: ['React', 'TypeScript', 'Node.js', 'Firebase', 'Cloudflare Workers', 'SQLite'],
  }

  return (
    <>
      <Seo
        title="Julián Gualberto — Full-stack Engineer"
        description={seoDescription}
        path="/"
        jsonLd={jsonLd}
      />

      <section className="hero container">
        <div className="hero-grid">
          <div className="hero-content">
            <Reveal>
              <div className="availability">
                <span className="availability__dot" aria-hidden="true" />
                {pick(profile.availability, lang)}
              </div>
            </Reveal>

            <Reveal delay={70}>
              <p className="hero-eyebrow">
                {pick(profile.role, lang)}
                <span className="hero-eyebrow__sep">/</span>
                {pick(profile.location, lang)}
              </p>
            </Reveal>

            <Reveal delay={130}>
              <h1 className="hero-title">{pick(profile.headline, lang)}</h1>
            </Reveal>

            <Reveal delay={190}>
              <p className="hero-intro">{pick(profile.intro, lang)}</p>
            </Reveal>

            <Reveal delay={250}>
              <div className="hero-actions">
                <Link className="btn btn--primary btn--large" to="/#trabajo">
                  {pick(ui.ctaWork, lang)}
                  <ArrowDown className="size-4" aria-hidden="true" />
                </Link>
                <Link className="btn btn--ghost btn--large" to="/#contacto">
                  {pick(ui.ctaContact, lang)}
                  <ArrowUpRight className="size-4" aria-hidden="true" />
                </Link>
                <Link className="text-link" to="/cv">
                  {pick(ui.ctaCv, lang)}
                  <ArrowUpRight className="size-3.5" aria-hidden="true" />
                </Link>
              </div>
            </Reveal>

            <Reveal delay={310}>
              <div className="hero-stats">
                {heroStats.map((stat) => (
                  <div className="hero-stat" key={stat.value}>
                    <strong>{stat.value}</strong>
                    <span>{pick(stat.label, lang)}</span>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal delay={370}>
              <div className="hero-scroll" aria-hidden="true">
                <MoveDown className="size-4" />
                {pick(ui.scroll, lang)}
              </div>
            </Reveal>
          </div>

          <Reveal delay={180} className="hero-visual">
            <div className="hero-orb" aria-hidden="true" />
            <div className="console">
              <div className="console__top">
                <span className="console__dot" />
                <span className="console__dot" />
                <span className="console__dot" />
                <span className="console__file">julian.config.ts</span>
                <span className="console__status">● online</span>
              </div>
              <pre className="console__code" aria-label="Perfil de Julian en formato de código">
                <code>
                  <span className="code-muted">const</span> julian{' '}
                  <span className="code-op">=</span> {'{'}
                  {'\n'}  role:{' '}
                  <span className="code-string">'full stack developer'</span>,
                  {'\n'}  focus:{' '}
                  <span className="code-string">'build & ship'</span>,
                  {'\n'}  stack: [
                  {'\n'}    <span className="code-string">'react'</span>,{' '}
                  <span className="code-string">'typescript'</span>,{' '}
                  <span className="code-string">'node'</span>,
                  {'\n'}    <span className="code-string">'firebase'</span>,{' '}
                  <span className="code-string">'cloudflare'</span>
                  {'\n'}  ],
                  {'\n'}  shipping: <span className="code-bool">true</span>,
                  {'\n'}
                  {'}'};
                </code>
              </pre>
              <div className="console__footer">
                <span>
                  <Terminal className="size-3.5" aria-hidden="true" /> build · test · ship
                </span>
                <span>remote</span>
              </div>
            </div>

            <div className="float-badge float-badge--tests">
              <Check className="size-4" aria-hidden="true" />
              <span>
                <strong>675+</strong> tests
              </span>
            </div>
            <div className="float-badge float-badge--platform">
              <Layers className="size-4" aria-hidden="true" />
              <span>
                <strong>3</strong> products
              </span>
            </div>
            <div className="float-badge float-badge--security">
              <ShieldCheck className="size-4" aria-hidden="true" />
              <span>rules first</span>
            </div>
          </Reveal>
        </div>
      </section>

      <Marquee />

      <section id="trabajo" className="section container work-section">
        <SectionHeading
          index={sections.work.index}
          label={sections.work.label}
          title={sections.work.title}
          body={sections.work.body}
        />
        <div className="project-list">
          {projects.map((project, index) => (
            <Reveal key={project.slug} delay={index * 80}>
              <ProjectCard project={project} index={index} />
            </Reveal>
          ))}
        </div>
      </section>

      <section id="capacidades" className="section section--alt">
        <div className="container">
          <SectionHeading
            index={sections.capabilities.index}
            label={sections.capabilities.label}
            title={sections.capabilities.title}
            body={sections.capabilities.body}
          />

          <div className="capabilities-grid">
            <div className="skills-grid">
              {skills.map((group, index) => (
                <Reveal className="skill-card" delay={index * 60} key={group.title.es}>
                  <div className="skill-card__head">
                    <span className="skill-card__index">0{index + 1}</span>
                    <h3>{pick(group.title, lang)}</h3>
                  </div>
                  <ul className="skill-list">
                    {group.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </Reveal>
              ))}
            </div>

            <Reveal className="quote-card" delay={120}>
              <Sparkles className="quote-card__icon size-5" aria-hidden="true" />
              <blockquote>
                “El navegador no decide nada: precios, descuentos, stock y saldos de gift
                cards los recalcula el Worker.”
              </blockquote>
              <p className="quote-card__source">SKUL · README</p>
              <div className="quote-card__rule" aria-hidden="true" />
              <p className="quote-card__note">
                {pick(
                  {
                    es: 'La misma idea aplica a cada proyecto: la lógica sensible vive donde no se puede manipular desde el cliente.',
                    en: 'The same idea applies to every project: sensitive logic lives where it cannot be manipulated from the client.',
                  },
                  lang,
                )}
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <section id="sobre-mi" className="section container about-section">
        <SectionHeading
          index={sections.about.index}
          label={sections.about.label}
          title={sections.about.title}
        />

        <div className="about-grid">
          <Reveal className="about-portrait">
            <div className="about-portrait__frame">
              <img src={profile.avatar} alt={profile.name} loading="lazy" decoding="async" />
              <span className="about-portrait__tag">JG / 2026</span>
            </div>
            <div className="about-portrait__meta">
              <span className="about-portrait__status">
                <span className="availability__dot" aria-hidden="true" />
                {pick(profile.availability, lang)}
              </span>
              <span>
                <MapPin className="size-3.5" aria-hidden="true" />
                {pick(profile.location, lang)}
              </span>
            </div>
          </Reveal>

          <div className="about-copy">
            {about.body.map((paragraph, index) => (
              <Reveal delay={index * 60} key={paragraph.es}>
                <p className="about-copy__paragraph">{pick(paragraph, lang)}</p>
              </Reveal>
            ))}

            <Reveal delay={180}>
              <div className="currently-card">
                <p className="currently-card__label">
                  {pick({ es: 'Construyendo ahora', en: 'Currently building' }, lang)}
                </p>
                <div className="currently-card__items">
                  {about.currently.map((item) => (
                    <div className="currently-item" key={item.name}>
                      <span className="currently-item__dot" aria-hidden="true" />
                      <div>
                        <strong>{item.name}</strong>
                        <span>{pick(item.detail, lang)}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

            <div className="principles-grid">
              {principles.map((principle, index) => (
                <Reveal className="principle" delay={index * 50} key={principle.title.es}>
                  <span className="principle__index">0{index + 1}</span>
                  <h3>{pick(principle.title, lang)}</h3>
                  <p>{pick(principle.body, lang)}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="proceso" className="section section--alt">
        <div className="container">
          <SectionHeading
            index={sections.process.index}
            label={sections.process.label}
            title={sections.process.title}
            body={sections.process.body}
          />

          <div className="process-grid">
            {processSteps.map((step, index) => (
              <Reveal className="process-step" delay={index * 70} key={step.number}>
                <div className="process-step__top">
                  <span className="process-step__number">{step.number}</span>
                  <span className="process-step__line" aria-hidden="true" />
                </div>
                <h3>{pick(step.title, lang)}</h3>
                <p>{pick(step.body, lang)}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="contacto" className="section container contact-section">
        <Reveal>
          <div className="contact-card">
            <div className="contact-card__top">
              <span className="section-index">{sections.contact.index}</span>
              <span className="section-label">{pick(sections.contact.label, lang)}</span>
              <span className="section-rule" aria-hidden="true" />
            </div>
            <h2 className="contact-title">{pick(sections.contact.title, lang)}</h2>
            <p className="contact-body">{pick(sections.contact.body, lang)}</p>

            <div className="contact-actions">
              <a
                className="btn btn--primary btn--large"
                href={profile.github}
                target="_blank"
                rel="noreferrer noopener"
              >
                <GitHubIcon className="size-4" />
                {pick(ui.ctaGithub, lang)}
                <ArrowUpRight className="size-4" aria-hidden="true" />
              </a>
              <Link className="btn btn--ghost btn--large" to="/cv">
                {pick(ui.ctaCv, lang)}
                <ArrowUpRight className="size-4" aria-hidden="true" />
              </Link>
            </div>

            {!profile.email ? <p className="contact-note">{pick(ui.noEmail, lang)}</p> : null}

            <div className="contact-links">
              <a
                className="contact-link"
                href={profile.github}
                target="_blank"
                rel="noreferrer noopener"
              >
                <span className="contact-link__label">GitHub</span>
                <span className="contact-link__value">@{profile.handle}</span>
                <ArrowUpRight className="size-4" aria-hidden="true" />
              </a>
              <a
                className="contact-link"
                href={profile.currentSite}
                target="_blank"
                rel="noreferrer noopener"
              >
                <span className="contact-link__label">{pick(ui.ctaSite, lang)}</span>
                <span className="contact-link__value">skullt.web.app</span>
                <ArrowUpRight className="size-4" aria-hidden="true" />
              </a>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  )
}
