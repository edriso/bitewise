import { Languages, Moon, Sun } from 'lucide-react'
import { useTheme } from '../lib/theme'
import { useI18n } from '../lib/i18n'

export function ThemeToggle() {
  const { theme, toggle } = useTheme()
  const { t } = useI18n()
  const isDark = theme === 'dark'
  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={isDark ? t('action.light') : t('action.dark')}
      title={isDark ? t('action.light') : t('action.dark')}
      className="grid size-10 place-items-center rounded-xl border border-border bg-surface text-fg transition-colors hover:bg-surface-2"
    >
      {isDark ? <Sun className="size-5" /> : <Moon className="size-5" />}
    </button>
  )
}

export function LangToggle() {
  const { toggleLang, t } = useI18n()
  return (
    <button
      type="button"
      onClick={toggleLang}
      className="inline-flex h-10 items-center gap-2 rounded-xl border border-border bg-surface px-3 text-sm font-bold text-fg transition-colors hover:bg-surface-2"
    >
      <Languages className="size-4" />
      {t('action.toLang')}
    </button>
  )
}
