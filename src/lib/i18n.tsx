import { useCallback, useEffect, useMemo, useState, type ReactNode } from 'react'
import type { Lang } from '@/data/site'
import { LanguageContext, type LanguageContextValue } from './i18n-context'

const STORAGE_KEY = 'jg.lang'

function initialLang(): Lang {
  if (typeof window === 'undefined') return 'es'
  const stored = window.localStorage.getItem(STORAGE_KEY)
  if (stored === 'es' || stored === 'en') return stored
  return window.navigator.language.toLowerCase().startsWith('en') ? 'en' : 'es'
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(initialLang)

  useEffect(() => {
    document.documentElement.lang = lang
    window.localStorage.setItem(STORAGE_KEY, lang)
  }, [lang])

  const setLang = useCallback((next: Lang) => setLangState(next), [])
  const toggle = useCallback(
    () => setLangState((current) => (current === 'es' ? 'en' : 'es')),
    [],
  )

  const value = useMemo<LanguageContextValue>(
    () => ({ lang, setLang, toggle }),
    [lang, setLang, toggle],
  )

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}
