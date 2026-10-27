import type { CSSProperties } from 'react'
import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import type { Project } from '@/data/projects'
import { pick, ui } from '@/data/site'
import { useLang } from '@/lib/i18n-context'

type ProjectCardProps = {
  project: Project
  index: number
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  const { lang } = useLang()
  const number = String(index + 1).padStart(2, '0')
  const visibleStack = project.stack.slice(0, 4)
  const extraStack = project.stack.length - visibleStack.length

  return (
    <article
      className={`project-card ${index % 2 === 1 ? 'project-card--reverse' : ''}`.trim()}
      style={
        {
          '--project-accent': project.accent,
          '--project-accent-soft': project.accentSoft,
          '--project-accent-light': project.accentLight,
          '--project-accent-soft-light': project.accentSoftLight,
        } as CSSProperties
      }
    >
      <Link
        className="project-card__media"
        to={`/proyectos/${project.slug}`}
        aria-label={`${pick(ui.viewCase, lang)}: ${project.name}`}
      >
        <div className="browser-frame">
          <div className="browser-bar" aria-hidden="true">
            <span className="browser-dot" />
            <span className="browser-dot" />
            <span className="browser-dot" />
            <span className="browser-url">{project.previewLabel}</span>
          </div>
          <img
            src={project.cover}
            alt={pick(project.coverAlt, lang)}
            loading={index === 0 ? 'eager' : 'lazy'}
            decoding="async"
          />
        </div>
        <span className="project-card__view">
          {pick(ui.viewCase, lang)}
          <ArrowUpRight className="size-4" aria-hidden="true" />
        </span>
      </Link>

      <div className="project-card__body">
        <div className="project-card__meta">
          <span className="project-card__index">{number}</span>
          <span className="project-card__category">{pick(project.category, lang)}</span>
          <span className="project-card__year">{project.year}</span>
        </div>

        <h3 className="project-card__title">
          <Link to={`/proyectos/${project.slug}`}>{project.name}</Link>
        </h3>
        <p className="project-card__tagline">{pick(project.tagline, lang)}</p>

        <div className="project-card__metrics" aria-label="Métricas del proyecto">
          {project.metrics.slice(0, 2).map((metric) => (
            <div className="project-card__metric" key={metric.value + metric.label.es}>
              <strong>{metric.value}</strong>
              <span>{pick(metric.label, lang)}</span>
            </div>
          ))}
        </div>

        <div className="project-card__footer">
          <div className="project-card__stack" aria-label={pick(ui.stack, lang)}>
            {visibleStack.map((tech) => (
              <span className="chip" key={tech}>
                {tech}
              </span>
            ))}
            {extraStack > 0 ? <span className="chip chip--muted">+{extraStack}</span> : null}
          </div>
          <Link className="project-card__arrow" to={`/proyectos/${project.slug}`} aria-label={pick(ui.viewCase, lang)}>
            <ArrowUpRight className="size-5" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </article>
  )
}
