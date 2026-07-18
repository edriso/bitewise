import { useMemo, useState } from 'react'
import { Search, X } from 'lucide-react'
import { useI18n } from '../lib/i18n'
import { foods } from '../data/foods'
import { CATEGORY_COLORS } from '../lib/calc'
import type { FoodCategory } from '../lib/types'
import type { StringKey } from '../lib/strings'
import { MacroBar } from '../components/MacroBar'
import { Container, Section } from '../components/ui'

const CATEGORIES: FoodCategory[] = [
  'fruits',
  'vegetables',
  'grains',
  'protein',
  'legumes',
  'dairy',
  'nuts',
  'fats',
  'beverages',
  'sweets',
]

type SortKey = 'name' | 'calDesc' | 'calAsc' | 'protein'

const SORTS: { key: SortKey; label: StringKey }[] = [
  { key: 'name', label: 'foods.sortName' },
  { key: 'calDesc', label: 'foods.sortCalDesc' },
  { key: 'calAsc', label: 'foods.sortCalAsc' },
  { key: 'protein', label: 'foods.sortProtein' },
]

export function Foods() {
  const { t, tr, n, lang } = useI18n()
  const [query, setQuery] = useState('')
  const [category, setCategory] = useState<FoodCategory | 'all'>('all')
  const [sort, setSort] = useState<SortKey>('name')

  const results = useMemo(() => {
    const q = query.trim().toLowerCase()
    let list = foods.filter((f) => {
      const matchesCat = category === 'all' || f.category === category
      const matchesQuery =
        q === '' ||
        f.name.ar.toLowerCase().includes(q) ||
        f.name.en.toLowerCase().includes(q)
      return matchesCat && matchesQuery
    })

    list = [...list].sort((a, b) => {
      switch (sort) {
        case 'calDesc':
          return b.per100g.calories - a.per100g.calories
        case 'calAsc':
          return a.per100g.calories - b.per100g.calories
        case 'protein':
          return b.per100g.protein - a.per100g.protein
        default:
          return a.name[lang].localeCompare(b.name[lang], lang === 'ar' ? 'ar' : 'en')
      }
    })
    return list
  }, [query, category, sort, lang])

  const countLabel =
    results.length === 1
      ? t('foods.resultsOne')
      : lang === 'ar'
        ? `${results.length} نتيجة`
        : `${results.length} results`

  return (
    <Section>
      <Container>
        <header className="max-w-2xl">
          <h1 className="text-3xl font-extrabold text-fg sm:text-4xl">{t('foods.title')}</h1>
          <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">{t('foods.intro')}</p>
        </header>

        {/* Controls */}
        <div className="sticky top-16 z-30 mt-8 -mx-4 bg-bg/85 px-4 py-4 backdrop-blur-lg sm:-mx-6 sm:px-6">
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-3 sm:flex-row">
              <div className="relative flex-1">
                <Search className="pointer-events-none absolute top-1/2 start-4 size-5 -translate-y-1/2 text-muted" />
                <input
                  type="search"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder={t('foods.search')}
                  aria-label={t('foods.search')}
                  className="h-12 w-full rounded-2xl border border-border bg-surface ps-12 pe-10 text-base text-fg outline-none transition-colors focus:border-primary"
                />
                {query && (
                  <button
                    type="button"
                    onClick={() => setQuery('')}
                    aria-label={t('action.close')}
                    className="absolute top-1/2 end-3 grid size-7 -translate-y-1/2 place-items-center rounded-full text-muted hover:bg-surface-2"
                  >
                    <X className="size-4" />
                  </button>
                )}
              </div>
              <label className="flex h-12 items-center gap-2 rounded-2xl border border-border bg-surface px-4 text-sm font-semibold text-muted">
                {t('foods.sortLabel')}
                <select
                  value={sort}
                  onChange={(e) => setSort(e.target.value as SortKey)}
                  className="bg-transparent font-bold text-fg outline-none"
                >
                  {SORTS.map((s) => (
                    <option key={s.key} value={s.key} className="bg-surface text-fg">
                      {t(s.label)}
                    </option>
                  ))}
                </select>
              </label>
            </div>

            {/* Category chips */}
            <div className="-mx-1 flex gap-2 overflow-x-auto px-1 pb-1">
              <CategoryChip
                active={category === 'all'}
                onClick={() => setCategory('all')}
                label={t('foods.all')}
              />
              {CATEGORIES.map((c) => (
                <CategoryChip
                  key={c}
                  active={category === c}
                  onClick={() => setCategory(c)}
                  label={t(`cat.${c}` as StringKey)}
                  color={CATEGORY_COLORS[c]}
                />
              ))}
            </div>
          </div>
        </div>

        <p className="mt-2 text-sm font-semibold text-muted">{countLabel}</p>

        {/* Results */}
        {results.length === 0 ? (
          <div className="mt-16 text-center">
            <p className="text-5xl">🔍</p>
            <p className="mt-4 text-lg text-muted">{t('foods.none')}</p>
          </div>
        ) : (
          <ul className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {results.map((f) => (
              <li
                key={f.id}
                className="flex flex-col rounded-3xl border border-border bg-surface p-5 shadow-[var(--shadow-soft)] transition-transform hover:-translate-y-1"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <span className="text-4xl">{f.emoji}</span>
                    <div>
                      <h3 className="text-lg font-extrabold text-fg">{tr(f.name)}</h3>
                      <span
                        className="mt-1 inline-flex rounded-full px-2.5 py-0.5 text-xs font-bold"
                        style={{
                          color: CATEGORY_COLORS[f.category],
                          backgroundColor: `color-mix(in srgb, ${CATEGORY_COLORS[f.category]} 14%, transparent)`,
                        }}
                      >
                        {t(`cat.${f.category}` as StringKey)}
                      </span>
                    </div>
                  </div>
                  <div className="text-end">
                    <span className="block text-2xl font-extrabold text-fg">{n(f.per100g.calories)}</span>
                    <span className="block text-[11px] font-bold text-muted">{t('foods.kcal')}</span>
                  </div>
                </div>

                <div className="mt-4">
                  <MacroBar
                    protein={f.per100g.protein}
                    carbs={f.per100g.carbs}
                    fat={f.per100g.fat}
                  />
                </div>

                <dl className="mt-4 grid grid-cols-2 gap-2 border-t border-border pt-4 text-sm">
                  <NutrientRow label={t('foods.fiber')} value={`${n(f.per100g.fiber)} ${t('foods.grams')}`} />
                  <NutrientRow label={t('foods.sugar')} value={`${n(f.per100g.sugar)} ${t('foods.grams')}`} />
                </dl>

                <p className="mt-3 text-center text-[11px] font-semibold tracking-wide text-muted uppercase">
                  {t('foods.per100g')}
                </p>
              </li>
            ))}
          </ul>
        )}
      </Container>
    </Section>
  )
}

function CategoryChip({
  active,
  onClick,
  label,
  color,
}: {
  active: boolean
  onClick: () => void
  label: string
  color?: string
}) {
  const style =
    active && color
      ? { backgroundColor: color, color: '#fff', borderColor: color }
      : undefined
  return (
    <button
      type="button"
      onClick={onClick}
      style={style}
      className={`shrink-0 rounded-full border px-4 py-2 text-sm font-bold whitespace-nowrap transition-colors ${
        active
          ? color
            ? ''
            : 'border-primary bg-primary text-white'
          : 'border-border bg-surface text-muted hover:text-fg'
      }`}
    >
      {label}
    </button>
  )
}

function NutrientRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between gap-2">
      <dt className="text-muted">{label}</dt>
      <dd className="font-bold text-fg">{value}</dd>
    </div>
  )
}
