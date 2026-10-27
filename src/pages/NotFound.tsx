import { ArrowLeft, ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Seo } from '@/components/Seo'
import { pick, profile, ui } from '@/data/site'
import { useLang } from '@/lib/i18n-context'

export function NotFound() {
  const { lang } = useLang()

  return (
    <section className="not-found container">
      <Seo
        title="404 — Julian Gualberto"
        description={pick(ui.notFoundBody, lang)}
        path="/404"
      />
      <p className="not-found__code">404</p>
      <h1>{pick(ui.notFoundTitle, lang)}</h1>
      <p>{pick(ui.notFoundBody, lang)}</p>
      <div className="not-found__actions">
        <Link className="btn btn--primary" to="/">
          <ArrowLeft className="size-4" aria-hidden="true" />
          {pick(ui.backHome, lang)}
        </Link>
        <a
          className="btn btn--ghost"
          href={profile.github}
          target="_blank"
          rel="noreferrer noopener"
        >
          {pick(ui.ctaGithub, lang)}
          <ArrowUpRight className="size-4" aria-hidden="true" />
        </a>
      </div>
    </section>
  )
}
