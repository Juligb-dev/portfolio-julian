import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Layout } from '@/components/Layout'
import { LanguageProvider } from '@/lib/i18n'
import { ThemeProvider } from '@/lib/theme'
import { CvPage } from '@/pages/CvPage'
import { Home } from '@/pages/Home'
import { NotFound } from '@/pages/NotFound'
import { ProjectPage } from '@/pages/ProjectPage'

export default function App() {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <LanguageProvider>
          <Routes>
            <Route element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="proyectos/:slug" element={<ProjectPage />} />
              <Route path="cv" element={<CvPage />} />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </LanguageProvider>
      </ThemeProvider>
    </BrowserRouter>
  )
}
