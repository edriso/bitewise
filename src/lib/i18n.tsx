import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react'
import { strings, type StringKey } from './strings'
import type { Bilingual, Lang } from './types'

interface I18nContextValue {
  lang: Lang
  dir: 'rtl' | 'ltr'
  setLang: (l: Lang) => void
  toggleLang: () => void
  /** Translate a UI string key. */
  t: (key: StringKey) => string
  /** Resolve a bilingual content object to the current language. */
  tr: (value: Bilingual) => string
}

const I18nContext = createContext<I18nContextValue | null>(null)

function readInitialLang(): Lang {
  const attr = document.documentElement.getAttribute('lang')
  return attr === 'en' ? 'en' : 'ar'
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(readInitialLang)

  useEffect(() => {
    const dir = lang === 'ar' ? 'rtl' : 'ltr'
    document.documentElement.setAttribute('lang', lang)
    document.documentElement.setAttribute('dir', dir)
    try {
      localStorage.setItem('bitewise-lang', lang)
    } catch {
      /* ignore storage errors */
    }
  }, [lang])

  const setLang = useCallback((l: Lang) => setLangState(l), [])
  const toggleLang = useCallback(
    () => setLangState((prev) => (prev === 'ar' ? 'en' : 'ar')),
    [],
  )
  const t = useCallback(
    (key: StringKey) => strings[key]?.[lang] ?? String(key),
    [lang],
  )
  const tr = useCallback((value: Bilingual) => value?.[lang] ?? '', [lang])

  const value = useMemo<I18nContextValue>(
    () => ({ lang, dir: lang === 'ar' ? 'rtl' : 'ltr', setLang, toggleLang, t, tr }),
    [lang, setLang, toggleLang, t, tr],
  )

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>
}

// eslint-disable-next-line react-refresh/only-export-components
export function useI18n() {
  const ctx = useContext(I18nContext)
  if (!ctx) throw new Error('useI18n must be used within a LanguageProvider')
  return ctx
}
