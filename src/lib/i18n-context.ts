import { createContext, useContext } from 'react'
import type { Lang } from '@/data/site'

export type LanguageContextValue = {
  lang: Lang
  setLang: (lang: Lang) => void
  toggle: () => void
}

export const LanguageContext = createContext<LanguageContextValue | null>(null)

export function useLang() {
  const value = useContext(LanguageContext)
  if (!value) throw new Error('useLang must be used inside LanguageProvider')
  return value
}
