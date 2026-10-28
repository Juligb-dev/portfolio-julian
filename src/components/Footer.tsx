import { ArrowUpRight, FileText } from 'lucide-react'
import { Link } from 'react-router-dom'
import { nav, pick, profile, ui } from '@/data/site'
import { useLang } from '@/lib/i18n-context'
import { GitHubIcon } from './icons'

const year = new Date().getFullYear()

export function Footer() {
  const { lang } = useLang()

  return (
    <footer className="site-footer">
      <div className="container site-footer__inner">
        <div className="site-footer__brand">
          <Link className="brand brand--footer" to="/" aria-label={profile.name}>
            <span className="brand-mark" aria-hidden="true">
              {profile.initials}
            </span>
            <span className="brand-text">
              <span className="brand-name">{profile.name}</span>
            </span>
          </Link>
          <p className="site-footer__note">
            {pick(
              {
                es: 'Productos web con interfaces cuidadas y una base técnica que aguanta producción.',
                en: 'Web products with considered interfaces and a technical foundation that holds up in production.',
              },
              lang,
            )}
          </p>
        </div>

        <nav className="site-footer__nav" aria-label="Navegación del pie">
          {nav.map((item) => (
            <Link className="site-footer__link" to={item.href} key={item.href}>
              {pick(item.label, lang)}
            </Link>
          ))}
          <Link className="site-footer__link" to="/cv">
            {pick(ui.ctaCv, lang)}
          </Link>
        </nav>

        <div className="site-footer__links">
          <a
            className="site-footer__link"
            href={profile.github}
            target="_blank"
            rel="noreferrer noopener"
          >
            <GitHubIcon className="size-4" />
            GitHub
            <ArrowUpRight className="size-3.5" aria-hidden="true" />
          </a>
          <a
            className="site-footer__link"
            href={profile.currentSite}
            target="_blank"
            rel="noreferrer noopener"
          >
            <FileText className="size-4" aria-hidden="true" />
            {pick(ui.ctaSite, lang)}
            <ArrowUpRight className="size-3.5" aria-hidden="true" />
          </a>
        </div>
      </div>

      <div className="container site-footer__bottom">
        <span>
          © {year} {profile.name}. {pick(ui.rights, lang)}
        </span>
        <span className="site-footer__built">
          {pick(ui.builtWith, lang)} {profile.name} · React · Vite · Tailwind
        </span>
      </div>
    </footer>
  )
}
