import { useI18n } from '../lib/i18n'

export function Logo({ withText = true }: { withText?: boolean }) {
  const { t } = useI18n()
  return (
    <span className="flex items-center gap-2.5">
      <span className="grid size-9 place-items-center rounded-xl bg-gradient-to-br from-[#3ad07f] to-[#15a05a] text-white shadow-[var(--shadow-soft)]">
        <svg viewBox="0 0 64 64" className="size-6" aria-hidden="true">
          <path
            d="M40 14c-6 0-9 4-9 10 0 3 1 6 3 8-2 1-4 3-4 6 0 5 4 8 9 8 6 0 10-5 10-16S46 14 40 14Z"
            fill="currentColor"
            opacity="0.96"
          />
          <path
            d="M22 16c1 6-1 11-5 13 3 1 5 4 5 8s-2 7-5 8"
            fill="none"
            stroke="currentColor"
            strokeWidth="3.5"
            strokeLinecap="round"
            opacity="0.9"
          />
        </svg>
      </span>
      {withText && (
        <span className="flex flex-col leading-none">
          <span className="text-lg font-extrabold text-fg">{t('brand.name')}</span>
          <span className="hidden text-[11px] font-medium text-muted sm:block">
            {t('brand.tagline')}
          </span>
        </span>
      )}
    </span>
  )
}
