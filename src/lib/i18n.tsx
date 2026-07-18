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
  /**
   * Localize the digits and numeric separators in a value to match the current
   * language: Arabic-Indic digits (٠١٢٣) with the Arabic decimal (٫) and percent
   * (٪) signs in Arabic, Western digits (0123) in English.
   */
  n: (value: string | number) => string
}

const I18nContext = createContext<I18nContextValue | null>(null)

const AR_DIGITS = '٠١٢٣٤٥٦٧٨٩'

/**
 * Map Western numerals and numeric punctuation to their Arabic-Indic
 * equivalents. Modern Standard Arabic editorial surfaces conventionally use
 * Arabic-Indic digits (٠-٩), the Arabic decimal separator (٫) and the Arabic
 * percent sign (٪); keeping every rendered number in this system avoids the
 * jarring mix of ٠ and 0 on the same screen.
 */
function toArabicNumerals(input: string): string {
  return input
    .replace(/[0-9]/g, (d) => AR_DIGITS[+d])
    .replace(/\./g, '٫')
    .replace(/,/g, '٬')
    .replace(/%/g, '٪')
}

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
  const n = useCallback(
    (value: string | number) =>
      lang === 'ar' ? toArabicNumerals(String(value)) : String(value),
    [lang],
  )

  const value = useMemo<I18nContextValue>(
    () => ({ lang, dir: lang === 'ar' ? 'rtl' : 'ltr', setLang, toggleLang, t, tr, n }),
    [lang, setLang, toggleLang, t, tr, n],
  )

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>
}

// eslint-disable-next-line react-refresh/only-export-components
export function useI18n() {
  const ctx = useContext(I18nContext)
  if (!ctx) throw new Error('useI18n must be used within a LanguageProvider')
  return ctx
}
