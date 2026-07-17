import { useI18n } from '../lib/i18n'

interface MacroBarProps {
  protein: number
  carbs: number
  fat: number
  /** Show gram labels under the bar. */
  showLegend?: boolean
  height?: number
}

/**
 * A stacked bar showing how a food's calories split between protein, carbs,
 * and fat. Protein & carbs = 4 kcal/g, fat = 9 kcal/g.
 */
export function MacroBar({ protein, carbs, fat, showLegend = true, height = 10 }: MacroBarProps) {
  const { t } = useI18n()
  const pKcal = protein * 4
  const cKcal = carbs * 4
  const fKcal = fat * 9
  const total = pKcal + cKcal + fKcal

  const seg = (kcal: number) => (total > 0 ? (kcal / total) * 100 : 0)

  const parts = [
    { key: 'protein', label: t('foods.protein'), grams: protein, pct: seg(pKcal), color: 'var(--protein)' },
    { key: 'carbs', label: t('foods.carbs'), grams: carbs, pct: seg(cKcal), color: 'var(--carbs)' },
    { key: 'fat', label: t('foods.fat'), grams: fat, pct: seg(fKcal), color: 'var(--fat)' },
  ]

  return (
    <div>
      <div
        className="flex w-full overflow-hidden rounded-full bg-surface-2"
        style={{ height }}
        role="img"
        aria-label={`${t('foods.protein')} ${protein}${t('foods.grams')}, ${t('foods.carbs')} ${carbs}${t('foods.grams')}, ${t('foods.fat')} ${fat}${t('foods.grams')}`}
      >
        {total > 0 &&
          parts.map((p) => (
            <span
              key={p.key}
              className="h-full transition-[width] duration-500"
              style={{ width: `${p.pct}%`, backgroundColor: p.color }}
            />
          ))}
      </div>
      {showLegend && (
        <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1.5 text-xs font-semibold text-muted">
          {parts.map((p) => (
            <span key={p.key} className="inline-flex items-center gap-1.5">
              <span className="size-2.5 rounded-full" style={{ backgroundColor: p.color }} />
              {p.label}
              <span className="text-fg">
                {p.grams}
                {t('foods.grams')}
              </span>
            </span>
          ))}
        </div>
      )}
    </div>
  )
}
