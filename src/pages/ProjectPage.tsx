import type { CSSProperties } from 'react'
import { ArrowLeft, ArrowRight, ArrowUpRight, ExternalLink } from 'lucide-react'
import { Link, useParams } from 'react-router-dom'
import { GitHubIcon } from '@/components/icons'
import { Reveal } from '@/components/Reveal'
import { Seo, SITE_URL } from '@/components/Seo'
import { getProject, projects } from '@/data/projects'
import { pick, profile, ui } from '@/data/site'
import { useLang } from '@/lib/i18n-context'
import { NotFound } from './NotFound'

export function ProjectPage() {
  const { slug } = useParams()
  const { lang } = useLang()
  const project = slug ? getProject(slug) : undefined

  if (!project) return <NotFound />

  const index = projects.findIndex((item) => item.slug === project.slug)
  const next = projects[(index + 1) % projects.length]
  const style = {
    '--project-accent': project.accent,
    '--project-accent-soft': project.accentSoft,
    '--project-accent-light': project.accentLight,
    '--project-accent-soft-light': project.accentSoftLight,
  } as CSSProperties

  const description = pick(project.description, lang)
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    name: project.name,
    description,
    image: `${SITE_URL}${project.cover}`,
    url: `${SITE_URL}/proyectos/${project.slug}`,
    dateCreated: project.year,
    creator: {
      '@type': 'Person',
      name: profile.name,
      url: profile.github,
    },
    keywords: project.stack.join(', '),
  }

  return (
    <article className="case-study" style={style}>
      <Seo
        title={`${project.name} — ${pick(project.category, lang)} | Julian Gualberto`}
        description={description}
        path={`/proyectos/${project.slug}`}
        image={project.cover}
        type="article"
        jsonLd={jsonLd}
      />

      <section className="case-hero container">
        <Link className="back-link" to="/#trabajo">
          <ArrowLeft className="size-4" aria-hidden="true" />
          {pick(ui.allProjects, lang)}
        </Link>

        <div className="case-hero__grid">
          <Reveal>
            <p className="case-kicker">
              {pick(project.category, lang)}
              <span aria-hidden="true">/</span>
              {project.year}
            </p>
            <h1 className="case-title">{project.name}</h1>
            <p className="case-tagline">{pick(project.tagline, lang)}</p>

            <div className="case-actions">
              {project.live ? (
                <a
                  className="btn btn--primary"
                  href={project.live}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  {pick(ui.viewLive, lang)}
                  <ExternalLink className="size-4" aria-hidden="true" />
                </a>
              ) : null}
              {project.repo ? (
                <a
                  className="btn btn--ghost"
                  href={project.repo}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  {pick(ui.viewRepo, lang)}
                  <GitHubIcon className="size-4" />
                </a>
              ) : null}
              {project.repoNote ? (
                <span className="case-private">
                  <ShieldBadge />
                  {pick(project.repoNote, lang)}
                </span>
              ) : null}
            </div>
          </Reveal>

          <Reveal delay={100} className="case-facts">
            <div className="case-fact">
              <span className="case-fact__label">{pick(ui.role, lang)}</span>
              <p>{pick(project.role, lang)}</p>
            </div>
            <div className="case-fact">
              <span className="case-fact__label">{pick(ui.year, lang)}</span>
              <p>{project.year}</p>
            </div>
            <div className="case-fact case-fact--stack">
              <span className="case-fact__label">{pick(ui.stack, lang)}</span>
              <div className="chip-row">
                {project.stack.map((tech) => (
                  <span className="chip" key={tech}>
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="container case-cover-wrap">
        <Reveal>
          <div className="browser-frame case-cover">
            <div className="browser-bar" aria-hidden="true">
              <span className="browser-dot" />
              <span className="browser-dot" />
              <span className="browser-dot" />
              <span className="browser-url">{project.previewLabel}</span>
            </div>
            <img src={project.cover} alt={pick(project.coverAlt, lang)} decoding="async" />
          </div>
        </Reveal>
      </section>

      <section className="container case-metrics">
        {project.metrics.map((metric, metricIndex) => (
          <Reveal className="case-metric" delay={metricIndex * 60} key={metric.value + metric.label.es}>
            <strong>{metric.value}</strong>
            <span>{pick(metric.label, lang)}</span>
          </Reveal>
        ))}
      </section>

      <section className="container case-body">
        <div className="case-columns">
          <Reveal className="case-block">
            <span className="case-block__label">{pick(ui.challenge, lang)}</span>
            <h2>{pick(ui.challenge, lang)}</h2>
            <p>{pick(project.caseStudy.challenge, lang)}</p>
          </Reveal>
          <Reveal className="case-block" delay={80}>
            <span className="case-block__label">{pick(ui.approach, lang)}</span>
            <h2>{pick(ui.approach, lang)}</h2>
            <p>{pick(project.caseStudy.approach, lang)}</p>
          </Reveal>
        </div>

        <Reveal>
          <blockquote className="case-quote">
            <span className="case-quote__mark" aria-hidden="true">
              “
            </span>
            {pick(project.caseStudy.quote, lang)}
          </blockquote>
        </Reveal>

        <Reveal className="case-section-head">
          <span className="case-block__label">{pick(ui.whatBuilt, lang)}</span>
          <h2>{pick(ui.whatBuilt, lang)}</h2>
        </Reveal>

        <div className="case-features">
          {project.caseStudy.features.map((feature, featureIndex) => (
            <Reveal className="case-feature" delay={featureIndex * 50} key={feature.title.es}>
              <span className="case-feature__index">0{featureIndex + 1}</span>
              <h3>{pick(feature.title, lang)}</h3>
              <p>{pick(feature.body, lang)}</p>
            </Reveal>
          ))}
        </div>

        <div className="case-columns case-columns--closing">
          <Reveal className="case-block case-block--accent">
            <span className="case-block__label">{pick(ui.impact, lang)}</span>
            <h2>{pick(ui.impact, lang)}</h2>
            <p>{pick(project.caseStudy.impact, lang)}</p>
          </Reveal>
          <Reveal className="case-block" delay={80}>
            <span className="case-block__label">{pick(ui.learnings, lang)}</span>
            <h2>{pick(ui.learnings, lang)}</h2>
            <p>{pick(project.caseStudy.learnings, lang)}</p>
          </Reveal>
        </div>
      </section>

      <section className="container next-project-wrap">
        <Link className="next-project" to={`/proyectos/${next.slug}`}>
          <span className="next-project__label">{pick(ui.nextProject, lang)}</span>
          <span className="next-project__name">{next.name}</span>
          <span className="next-project__arrow">
            <ArrowRight className="size-5" aria-hidden="true" />
          </span>
        </Link>
        <Link className="back-link back-link--bottom" to="/#trabajo">
          <ArrowLeft className="size-4" aria-hidden="true" />
          {pick(ui.allProjects, lang)}
        </Link>
      </section>

      <a
        className="case-floating-cta"
        href={profile.github}
        target="_blank"
        rel="noreferrer noopener"
      >
        {pick(ui.ctaGithub, lang)}
        <ArrowUpRight className="size-4" aria-hidden="true" />
      </a>
    </article>
  )
}

function ShieldBadge() {
  return (
    <span className="case-private__dot" aria-hidden="true">
      ●
    </span>
  )
}
