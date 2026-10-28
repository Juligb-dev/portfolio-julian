import { useEffect, useState } from 'react'
import { ArrowUpRight, Menu, Moon, Sun, X } from 'lucide-react'
import { Link } from 'react-router-dom'
import { nav, pick, profile, ui } from '@/data/site'
import { useLang } from '@/lib/i18n-context'
import { useTheme } from '@/lib/theme-context'
import { GitHubIcon } from './icons'

function LanguageToggle({ compact = false }: { compact?: boolean }) {
  const { lang, toggle } = useLang()
  const label = pick(ui.language, lang)

  return (
    <button
      type="button"
      className={`lang-toggle ${compact ? 'lang-toggle--compact' : ''}`.trim()}
      onClick={toggle}
      aria-label={label}
      title={label}
    >
      <span className={lang === 'es' ? 'is-active' : ''}>ES</span>
      <span className="lang-toggle__slash" aria-hidden="true">
        /
      </span>
      <span className={lang === 'en' ? 'is-active' : ''}>EN</span>
    </button>
  )
}

function ThemeToggle({ compact = false }: { compact?: boolean }) {
  const { theme, toggle } = useTheme()
  const { lang } = useLang()
  const label = pick(theme === 'dark' ? ui.themeLight : ui.themeDark, lang)

  return (
    <button
      type="button"
      className={`icon-btn ${compact ? 'icon-btn--compact' : ''}`.trim()}
      onClick={toggle}
      aria-label={label}
      title={label}
    >
      {theme === 'dark' ? (
        <Sun className="size-[18px]" aria-hidden="true" />
      ) : (
        <Moon className="size-[18px]" aria-hidden="true" />
      )}
    </button>
  )
}

export function Header() {
  const { lang } = useLang()
  const [scrolled, setScrolled] = useState(() => typeof window !== 'undefined' && window.scrollY > 12)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [])

  useEffect(() => {
    document.body.classList.toggle('menu-open', open)
    return () => document.body.classList.remove('menu-open')
  }, [open])

  return (
    <header className={`site-header ${scrolled ? 'is-scrolled' : ''}`.trim()}>
      <div className="site-header__inner container">
        <Link className="brand" to="/" aria-label={profile.name} onClick={() => setOpen(false)}>
          <span className="brand-mark" aria-hidden="true">
            {profile.initials}
          </span>
          <span className="brand-text">
            <span className="brand-name">{profile.name}</span>
          </span>
        </Link>

        <nav className="desktop-nav" aria-label="Navegación principal">
          {nav.map((item) => (
            <Link className="nav-link" to={item.href} key={item.href}>
              {pick(item.label, lang)}
            </Link>
          ))}
        </nav>

        <div className="header-actions">
          <LanguageToggle />
          <ThemeToggle />
          <a
            className="icon-btn header-github"
            href={profile.github}
            target="_blank"
            rel="noreferrer noopener"
            aria-label="GitHub"
            title="GitHub"
          >
            <GitHubIcon className="size-[18px]" />
          </a>
          <Link className="btn btn--primary btn--small header-cta" to="/#contacto">
            {pick(ui.ctaContact, lang)}
            <ArrowUpRight className="size-4" aria-hidden="true" />
          </Link>
          <button
            type="button"
            className="menu-btn"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={pick(open ? ui.closeMenu : ui.menu, lang)}
          >
            {open ? <X className="size-5" aria-hidden="true" /> : <Menu className="size-5" aria-hidden="true" />}
          </button>
        </div>
      </div>

      <div id="mobile-menu" className={`mobile-menu ${open ? 'is-open' : ''}`.trim()}>
        <nav className="mobile-nav" aria-label="Navegación móvil">
          {nav.map((item, index) => (
            <Link
              className="mobile-nav__link"
              to={item.href}
              key={item.href}
              onClick={() => setOpen(false)}
            >
              <span className="mobile-nav__index">0{index + 1}</span>
              {pick(item.label, lang)}
            </Link>
          ))}
          <Link className="mobile-nav__link" to="/cv" onClick={() => setOpen(false)}>
            <span className="mobile-nav__index">06</span>
            {pick(ui.ctaCv, lang)}
          </Link>
        </nav>
        <div className="mobile-menu__footer">
          <div className="mobile-menu__controls">
            <LanguageToggle compact />
            <ThemeToggle compact />
          </div>
          <a
            className="btn btn--primary"
            href={profile.github}
            target="_blank"
            rel="noreferrer noopener"
          >
            {pick(ui.ctaGithub, lang)}
            <ArrowUpRight className="size-4" aria-hidden="true" />
          </a>
        </div>
      </div>
    </header>
  )
}
