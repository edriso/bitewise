import { useMemo, useState, type ReactNode } from 'react'
import { Calculator, Flame, PieChart } from 'lucide-react'
import { useI18n } from '../lib/i18n'
import {
  bmi,
  bmiCategory,
  bmr,
  goalCalories,
  healthyWeightRange,
  macroSplit,
  tdee,
  round,
  type Activity,
  type Goal,
  type MacroStyle,
  type Sex,
} from '../lib/calc'
import type { StringKey } from '../lib/strings'
import { Container, Section } from '../components/ui'

type Tab = 'bmi' | 'calories' | 'macros'

export function Tools() {
  const { t } = useI18n()
  const [tab, setTab] = useState<Tab>('bmi')
  // Calories result shared with the macros tab.
  const [sharedCalories, setSharedCalories] = useState<number | null>(null)

  const tabs: { key: Tab; label: StringKey; icon: typeof Calculator }[] = [
    { key: 'bmi', label: 'tools.tabBmi', icon: Calculator },
    { key: 'calories', label: 'tools.tabCalories', icon: Flame },
    { key: 'macros', label: 'tools.tabMacros', icon: PieChart },
  ]

  return (
    <Section>
      <Container className="max-w-3xl">
        <header className="max-w-2xl">
          <h1 className="text-3xl font-extrabold text-fg sm:text-4xl">{t('tools.title')}</h1>
          <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">{t('tools.intro')}</p>
        </header>

        {/* Tabs */}
        <div className="mt-8 grid grid-cols-3 gap-2 rounded-2xl border border-border bg-surface p-1.5">
          {tabs.map((tb) => (
            <button
              key={tb.key}
              type="button"
              onClick={() => setTab(tb.key)}
              className={`flex items-center justify-center gap-2 rounded-xl px-2 py-2.5 text-sm font-bold transition-colors ${
                tab === tb.key ? 'bg-primary text-white shadow-[var(--shadow-soft)]' : 'text-muted hover:text-fg'
              }`}
            >
              <tb.icon className="size-4" />
              <span className="hidden sm:inline">{t(tb.label)}</span>
            </button>
          ))}
        </div>

        <div className="mt-6">
          {tab === 'bmi' && <BmiTool />}
          {tab === 'calories' && <CaloriesTool onResult={setSharedCalories} />}
          {tab === 'macros' && <MacrosTool initialCalories={sharedCalories} />}
        </div>

        <p className="mt-8 rounded-2xl border border-border bg-surface-2 p-4 text-center text-sm text-muted">
          {t('about.disclaimerBody')}
        </p>
      </Container>
    </Section>
  )
}

/* ---------- Shared form primitives ---------- */

function Field({ label, children }: { label: string; children: ReactNode }) {
  return (
    <label className="flex flex-col gap-2">
      <span className="text-sm font-bold text-fg">{label}</span>
      {children}
    </label>
  )
}

function NumberInput({
  value,
  onChange,
  suffix,
  min,
  max,
}: {
  value: string
  onChange: (v: string) => void
  suffix: string
  min?: number
  max?: number
}) {
  return (
    <div className="flex items-center rounded-2xl border border-border bg-surface focus-within:border-primary">
      <input
        type="number"
        inputMode="numeric"
        value={value}
        min={min}
        max={max}
        onChange={(e) => onChange(e.target.value)}
        className="h-12 w-full rounded-2xl bg-transparent px-4 text-base font-semibold text-fg outline-none"
      />
      <span className="pe-4 text-sm font-bold text-muted">{suffix}</span>
    </div>
  )
}

function Segmented<T extends string>({
  value,
  onChange,
  options,
}: {
  value: T
  onChange: (v: T) => void
  options: { value: T; label: string }[]
}) {
  return (
    <div
      role="radiogroup"
      className="grid gap-1.5 rounded-2xl border border-border bg-surface p-1.5"
      style={{ gridTemplateColumns: `repeat(${options.length}, minmax(0, 1fr))` }}
    >
      {options.map((o) => (
        <button
          key={o.value}
          type="button"
          role="radio"
          aria-checked={value === o.value}
          onClick={() => onChange(o.value)}
          className={`rounded-xl px-2 py-2.5 text-sm font-bold transition-colors ${
            value === o.value ? 'bg-primary text-white' : 'text-muted hover:text-fg'
          }`}
        >
          {o.label}
        </button>
      ))}
    </div>
  )
}

function ToolCard({ children }: { children: ReactNode }) {
  return (
    <div className="rounded-3xl border border-border bg-surface p-6 shadow-[var(--shadow-soft)] sm:p-8">
      {children}
    </div>
  )
}

function StatBlock({
  label,
  value,
  unit,
  accent,
}: {
  label: string
  value: string
  unit: string
  accent?: string
}) {
  return (
    <div className="rounded-2xl border border-border bg-surface-2 p-4 text-center">
      <p className="text-sm font-semibold text-muted">{label}</p>
      <p className="mt-1 text-2xl font-extrabold" style={{ color: accent ?? 'var(--fg)' }}>
        {value}
      </p>
      <p className="text-xs font-bold text-muted">{unit}</p>
    </div>
  )
}

const num = (s: string) => (s.trim() === '' ? NaN : Number(s))

/* ---------- BMI ---------- */

function BmiTool() {
  const { t, n } = useI18n()
  const [weight, setWeight] = useState('')
  const [height, setHeight] = useState('')

  const result = useMemo(() => {
    const w = num(weight)
    const h = num(height)
    if (!(w > 0) || !(h > 0)) return null
    const value = bmi(w, h)
    return { value, cat: bmiCategory(value), range: healthyWeightRange(h) }
  }, [weight, height])

  const catLabel: Record<string, StringKey> = {
    under: 'tools.bmiUnder',
    normal: 'tools.bmiNormal',
    over: 'tools.bmiOver',
    obese: 'tools.bmiObese',
  }
  const catColor: Record<string, string> = {
    under: 'var(--fat)',
    normal: 'var(--fiber)',
    over: 'var(--carbs)',
    obese: 'var(--protein)',
  }

  // Position on a 15–40 scale.
  const markerPct = result ? Math.min(100, Math.max(0, ((result.value - 15) / 25) * 100)) : 0

  return (
    <ToolCard>
      <p className="text-sm leading-relaxed text-muted">{t('tools.bmiDesc')}</p>
      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <Field label={`${t('tools.weight')} (${t('tools.kg')})`}>
          <NumberInput value={weight} onChange={setWeight} suffix={t('tools.kg')} min={1} />
        </Field>
        <Field label={`${t('tools.height')} (${t('tools.cm')})`}>
          <NumberInput value={height} onChange={setHeight} suffix={t('tools.cm')} min={1} />
        </Field>
      </div>

      {result && (
        <div className="mt-8 animate-fade-up">
          <div className="text-center">
            <p className="text-sm font-semibold text-muted">{t('tools.yourResult')}</p>
            <p className="text-5xl font-extrabold text-fg">{n(round(result.value, 1))}</p>
            <span
              className="mt-2 inline-flex rounded-full px-4 py-1 text-sm font-bold text-white"
              style={{ backgroundColor: catColor[result.cat] }}
            >
              {t(catLabel[result.cat])}
            </span>
          </div>

          {/* Scale */}
          <div className="relative mt-8">
            <div
              className="h-3 w-full rounded-full"
              style={{
                background:
                  'linear-gradient(to right, var(--fat) 0%, var(--fiber) 25%, var(--carbs) 60%, var(--protein) 100%)',
              }}
            />
            <div
              className="absolute -top-1.5 size-6 -translate-x-1/2 rounded-full border-4 border-surface bg-fg shadow-md rtl:translate-x-1/2"
              style={{ insetInlineStart: `${markerPct}%` }}
            />
          </div>

          <p className="mt-6 text-center text-sm text-muted">
            {t('tools.bmiHealthyRange')} · {n(round(result.range[0]))}–{n(round(result.range[1]))}{' '}
            {t('tools.kg')}
          </p>
        </div>
      )}
    </ToolCard>
  )
}

/* ---------- Calories ---------- */

function CaloriesTool({ onResult }: { onResult: (c: number) => void }) {
  const { t, n } = useI18n()
  const [sex, setSex] = useState<Sex>('male')
  const [age, setAge] = useState('')
  const [weight, setWeight] = useState('')
  const [height, setHeight] = useState('')
  const [activity, setActivity] = useState<Activity>('light')
  const [goal, setGoal] = useState<Goal>('maintain')

  const result = useMemo(() => {
    const a = num(age)
    const w = num(weight)
    const h = num(height)
    if (!(a > 0) || !(w > 0) || !(h > 0)) return null
    const b = bmr(sex, w, h, a)
    const maintain = tdee(b, activity)
    const goalCals = goalCalories(maintain, goal)
    return { bmr: b, maintain, goalCals }
  }, [sex, age, weight, height, activity, goal])

  const activityOptions: { value: Activity; label: string }[] = [
    { value: 'sedentary', label: t('tools.actSedentary') },
    { value: 'light', label: t('tools.actLight') },
    { value: 'moderate', label: t('tools.actModerate') },
    { value: 'active', label: t('tools.actActive') },
    { value: 'veryActive', label: t('tools.actVery') },
  ]

  return (
    <ToolCard>
      <p className="text-sm leading-relaxed text-muted">{t('tools.caloriesDesc')}</p>
      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <Field label={t('tools.gender')}>
          <Segmented
            value={sex}
            onChange={setSex}
            options={[
              { value: 'male', label: t('tools.male') },
              { value: 'female', label: t('tools.female') },
            ]}
          />
        </Field>
        <Field label={`${t('tools.age')} (${t('tools.years')})`}>
          <NumberInput value={age} onChange={setAge} suffix={t('tools.years')} min={2} max={120} />
        </Field>
        <Field label={`${t('tools.weight')} (${t('tools.kg')})`}>
          <NumberInput value={weight} onChange={setWeight} suffix={t('tools.kg')} min={1} />
        </Field>
        <Field label={`${t('tools.height')} (${t('tools.cm')})`}>
          <NumberInput value={height} onChange={setHeight} suffix={t('tools.cm')} min={1} />
        </Field>
      </div>

      <div className="mt-4 flex flex-col gap-4">
        <Field label={t('tools.activity')}>
          <select
            value={activity}
            onChange={(e) => setActivity(e.target.value as Activity)}
            className="h-12 w-full rounded-2xl border border-border bg-surface px-4 text-base font-semibold text-fg outline-none focus:border-primary"
          >
            {activityOptions.map((o) => (
              <option key={o.value} value={o.value} className="bg-surface text-fg">
                {o.label}
              </option>
            ))}
          </select>
        </Field>
        <Field label={t('tools.goal')}>
          <Segmented
            value={goal}
            onChange={setGoal}
            options={[
              { value: 'lose', label: t('tools.goalLose') },
              { value: 'maintain', label: t('tools.goalMaintain') },
              { value: 'gain', label: t('tools.goalGain') },
            ]}
          />
        </Field>
      </div>

      {result && (
        <div className="mt-8 animate-fade-up">
          <div className="grid gap-3 sm:grid-cols-3">
            <StatBlock
              label={t('tools.bmr')}
              value={n(round(result.bmr))}
              unit={t('tools.perDay')}
            />
            <StatBlock
              label={t('tools.tdee')}
              value={n(round(result.maintain))}
              unit={t('tools.perDay')}
            />
            <StatBlock
              label={t('tools.goalCalories')}
              value={n(round(result.goalCals))}
              unit={t('tools.perDay')}
              accent="var(--primary)"
            />
          </div>
          <button
            type="button"
            onClick={() => onResult(round(result.goalCals))}
            className="mt-5 w-full rounded-2xl bg-primary-soft py-3 text-sm font-bold text-primary-strong transition-colors hover:bg-primary hover:text-white"
          >
            {t('tools.tabMacros')} →
          </button>
        </div>
      )}
    </ToolCard>
  )
}

/* ---------- Macros ---------- */

function MacrosTool({ initialCalories }: { initialCalories: number | null }) {
  const { t, n } = useI18n()
  const [calories, setCalories] = useState(initialCalories ? String(initialCalories) : '')
  const [style, setStyle] = useState<MacroStyle>('balanced')

  const result = useMemo(() => {
    const c = num(calories)
    if (!(c > 0)) return null
    return macroSplit(c, style)
  }, [calories, style])

  const macros = result
    ? [
        { key: 'protein', label: t('foods.protein'), data: result.protein, color: 'var(--protein)' },
        { key: 'carbs', label: t('foods.carbs'), data: result.carbs, color: 'var(--carbs)' },
        { key: 'fat', label: t('foods.fat'), data: result.fat, color: 'var(--fat)' },
      ]
    : []

  return (
    <ToolCard>
      <p className="text-sm leading-relaxed text-muted">{t('tools.macrosDesc')}</p>
      <div className="mt-6 flex flex-col gap-4">
        <Field label={t('tools.enterCalories')}>
          <NumberInput value={calories} onChange={setCalories} suffix={t('tools.perDay')} min={500} />
        </Field>
        <p className="-mt-2 text-xs text-muted">{t('tools.useCalc')}</p>
        <Field label={t('tools.tabMacros')}>
          <Segmented
            value={style}
            onChange={setStyle}
            options={[
              { value: 'balanced', label: t('tools.macroBalanced') },
              { value: 'lowCarb', label: t('tools.macroLowCarb') },
              { value: 'highProtein', label: t('tools.macroHighProtein') },
            ]}
          />
        </Field>
      </div>

      {result && (
        <div className="mt-8 animate-fade-up">
          {/* Proportion bar */}
          <div className="flex h-4 w-full overflow-hidden rounded-full bg-surface-2">
            {macros.map((m) => (
              <span
                key={m.key}
                className="h-full transition-[width] duration-500"
                style={{ width: `${m.data.pct * 100}%`, backgroundColor: m.color }}
              />
            ))}
          </div>
          <div className="mt-5 grid gap-3 sm:grid-cols-3">
            {macros.map((m) => (
              <div
                key={m.key}
                className="rounded-2xl border border-border bg-surface-2 p-4 text-center"
                style={{ borderTopWidth: 3, borderTopColor: m.color }}
              >
                <p className="text-sm font-bold" style={{ color: m.color }}>
                  {m.label}
                </p>
                <p className="mt-1 text-2xl font-extrabold text-fg">
                  {n(round(m.data.grams))}
                  <span className="text-base font-bold text-muted"> {t('foods.grams')}</span>
                </p>
                <p className="text-xs font-semibold text-muted">
                  {n(`${round(m.data.pct * 100)}%`)} · {n(round(m.data.kcal))} {t('foods.kcal')}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}
    </ToolCard>
  )
}
