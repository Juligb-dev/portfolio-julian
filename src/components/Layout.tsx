import { Outlet } from 'react-router-dom'
import { pick, ui } from '@/data/site'
import { useLang } from '@/lib/i18n-context'
import { Footer } from './Footer'
import { Header } from './Header'
import { ScrollManager } from './ScrollManager'
import { ScrollProgress } from './ScrollProgress'

export function Layout() {
  const { lang } = useLang()

  return (
    <>
      <a className="skip-link" href="#contenido">
        {pick(ui.skip, lang)}
      </a>
      <ScrollProgress />
      <ScrollManager />
      <Header />
      <main id="contenido" className="site-main">
        <Outlet />
      </main>
      <Footer />
    </>
  )
}
