import { ArrowLeft, ArrowUpRight, Printer } from 'lucide-react'
import { Link } from 'react-router-dom'
import { GitHubIcon } from '@/components/icons'
import { Seo, SITE_URL } from '@/components/Seo'
import { projects } from '@/data/projects'
import { pick, profile, skills, ui } from '@/data/site'
import { useLang } from '@/lib/i18n-context'

const cvUi = {
  kicker: { es: 'Curriculum vitae', en: 'Curriculum vitae' },
  profile: { es: 'Perfil', en: 'Profile' },
  selected: { es: 'Proyectos seleccionados', en: 'Selected projects' },
  skills: { es: 'Habilidades', en: 'Skills' },
  contact: { es: 'Contacto', en: 'Contact' },
  portfolio: { es: 'Portfolio', en: 'Portfolio' },
  updated: { es: 'Actualizado', en: 'Updated' },
  updatedValue: { es: 'octubre de 2026', en: 'October 2026' },
  summary: {
    es: 'Desarrollador full-stack con foco en producto. Construyo aplicaciones web completas: interfaces cuidadas, datos validados y lógica sensible del lado del servidor. Experiencia en e-commerce con pagos reales, plataformas educativas a escala y herramientas operativas.',
    en: 'Product-focused full-stack developer. I build complete web applications: considered interfaces, validated data, and sensitive logic on the server. Experience in e-commerce with real payments, education platforms at scale, and operational tools.',
  },
}

export function CvPage() {
  const { lang } = useLang()
  const updated = pick(cvUi.updatedValue, lang)

  return (
    <section className="cv-page container">
      <Seo
        title={`CV — ${profile.name}`}
        description={pick(cvUi.summary, lang)}
        path="/cv"
        image={profile.avatar}
      />

      <div className="cv-toolbar">
        <Link className="back-link" to="/">
          <ArrowLeft className="size-4" aria-hidden="true" />
          {pick(ui.backHome, lang)}
        </Link>
        <button type="button" className="btn btn--primary btn--small" onClick={() => window.print()}>
          <Printer className="size-4" aria-hidden="true" />
          {pick(ui.print, lang)}
        </button>
      </div>

      <article className="cv-sheet">
        <header className="cv-header">
          <div>
            <p className="cv-kicker">{pick(cvUi.kicker, lang)}</p>
            <h1>{profile.name}</h1>
            <p>
              {pick(profile.role, lang)} · {pick(profile.location, lang)}
            </p>
          </div>
          <div className="cv-contact">
            <a href={profile.github} target="_blank" rel="noreferrer noopener">
              github.com/{profile.handle}
            </a>
            <a href={profile.currentSite} target="_blank" rel="noreferrer noopener">
              skullt.web.app
            </a>
            <a href={SITE_URL} target="_blank" rel="noreferrer noopener">
              {pick(cvUi.portfolio, lang)}: portfolio-julian.vercel.app
            </a>
            {profile.email ? <a href={`mailto:${profile.email}`}>{profile.email}</a> : null}
          </div>
        </header>

        <section className="cv-section">
          <h2>{pick(cvUi.profile, lang)}</h2>
          <p>{pick(cvUi.summary, lang)}</p>
        </section>

        <section className="cv-section">
          <h2>{pick(cvUi.selected, lang)}</h2>
          {projects.map((project) => (
            <div className="cv-project" key={project.slug}>
              <div className="cv-project__head">
                <h3>{project.name}</h3>
                <span>
                  {project.year} · {pick(project.category, lang)}
                </span>
              </div>
              <p>{pick(project.description, lang)}</p>
              <ul>
                {project.caseStudy.features.slice(0, 3).map((feature) => (
                  <li key={feature.title.es}>
                    <strong>{pick(feature.title, lang)}:</strong> {pick(feature.body, lang)}
                  </li>
                ))}
              </ul>
              <div className="cv-project__links">
                {project.live ? (
                  <a href={project.live} target="_blank" rel="noreferrer noopener">
                    {pick(ui.viewLive, lang)}
                    <ArrowUpRight className="size-3" aria-hidden="true" />
                  </a>
                ) : null}
                {project.repo ? (
                  <a href={project.repo} target="_blank" rel="noreferrer noopener">
                    {pick(ui.viewRepo, lang)}
                    <GitHubIcon className="size-3" />
                  </a>
                ) : null}
              </div>
            </div>
          ))}
        </section>

        <section className="cv-section">
          <h2>{pick(cvUi.skills, lang)}</h2>
          <div className="cv-skills">
            {skills.map((group) => (
              <div className="cv-skill" key={group.title.es}>
                <strong>{pick(group.title, lang)}</strong>
                <span>{group.items.join(' · ')}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="cv-section">
          <h2>{pick(cvUi.contact, lang)}</h2>
          <p>
            GitHub: {profile.github} · {pick(ui.ctaSite, lang)}: {profile.currentSite}
          </p>
        </section>

        <footer className="cv-footer">
          {pick(cvUi.updated, lang)}: {updated} · {SITE_URL}
        </footer>
      </article>
    </section>
  )
}
