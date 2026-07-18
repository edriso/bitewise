import { Link, useParams } from 'react-router-dom'
import {
  ArrowLeft,
  ArrowRight,
  HelpCircle,
  Lightbulb,
  MapPin,
  Scale,
  Sparkles,
  Utensils,
} from 'lucide-react'
import { useI18n } from '../lib/i18n'
import { getNutrient, nutrients } from '../data/nutrients'
import type { Bilingual } from '../lib/types'
import { Container, Section } from '../components/ui'

export function LearnDetail() {
  const { id } = useParams()
  const { t, tr, n, lang } = useI18n()
  const Arrow = lang === 'ar' ? ArrowLeft : ArrowRight
  const BackArrow = lang === 'ar' ? ArrowRight : ArrowLeft

  const nutrient = id ? getNutrient(id) : undefined

  if (!nutrient) {
    return (
      <Section>
        <Container className="text-center">
          <p className="text-lg text-muted">{t('learn.notFound')}</p>
          <Link
            to="/learn"
            className="mt-4 inline-flex items-center gap-2 font-bold text-primary-strong"
          >
            <BackArrow className="size-4" />
            {t('learn.backToLearn')}
          </Link>
        </Container>
      </Section>
    )
  }

  const idx = nutrients.findIndex((n) => n.id === nutrient.id)
  const next = nutrients[(idx + 1) % nutrients.length]

  const sections: { icon: typeof HelpCircle; title: string; body: Bilingual }[] = [
    { icon: HelpCircle, title: t('learn.what'), body: nutrient.what },
    { icon: Sparkles, title: t('learn.why'), body: nutrient.why },
    { icon: Scale, title: t('learn.howMuch'), body: nutrient.howMuch },
    { icon: MapPin, title: t('learn.foundIn'), body: nutrient.sources },
  ]

  return (
    <Section>
      <Container className="max-w-3xl">
        <Link
          to="/learn"
          className="inline-flex items-center gap-2 text-sm font-bold text-muted transition-colors hover:text-primary"
        >
          <BackArrow className="size-4" />
          {t('learn.backToLearn')}
        </Link>

        {/* Header */}
        <header
          className="mt-6 overflow-hidden rounded-3xl border border-border bg-surface p-8 shadow-[var(--shadow-soft)]"
          style={{ borderTopWidth: 5, borderTopColor: nutrient.accent }}
        >
          <div className="flex flex-wrap items-center gap-5">
            <span
              className="grid size-20 place-items-center rounded-3xl text-5xl"
              style={{ backgroundColor: `color-mix(in srgb, ${nutrient.accent} 14%, transparent)` }}
            >
              {nutrient.emoji}
            </span>
            <div>
              <h1 className="text-3xl font-extrabold text-fg sm:text-4xl">{tr(nutrient.name)}</h1>
              <p className="mt-1 text-base text-muted">{tr(nutrient.short)}</p>
              {nutrient.kcalPerGram && (
                <span
                  className="mt-3 inline-flex rounded-full px-3 py-1 text-sm font-bold"
                  style={{
                    color: nutrient.accent,
                    backgroundColor: `color-mix(in srgb, ${nutrient.accent} 14%, transparent)`,
                  }}
                >
                  {n(nutrient.kcalPerGram)} {t('learn.perGram')}
                </span>
              )}
            </div>
          </div>
        </header>

        {/* Content sections */}
        <div className="mt-6 flex flex-col gap-6">
          {sections.map((s) => (
            <article
              key={s.title}
              className="rounded-3xl border border-border bg-surface p-6 shadow-[var(--shadow-soft)] sm:p-8"
            >
              <h2 className="flex items-center gap-3 text-xl font-extrabold text-fg">
                <span className="grid size-9 place-items-center rounded-xl bg-primary-soft text-primary-strong">
                  <s.icon className="size-5" />
                </span>
                {s.title}
              </h2>
              <p className="mt-4 text-base leading-loose text-fg/90">{tr(s.body)}</p>
            </article>
          ))}

          {/* Examples */}
          <article className="rounded-3xl border border-border bg-surface p-6 shadow-[var(--shadow-soft)] sm:p-8">
            <h2 className="flex items-center gap-3 text-xl font-extrabold text-fg">
              <span className="grid size-9 place-items-center rounded-xl bg-primary-soft text-primary-strong">
                <Utensils className="size-5" />
              </span>
              {t('learn.examples')}
            </h2>
            <ul className="mt-4 grid gap-3 sm:grid-cols-3">
              {nutrient.examples.map((ex, i) => (
                <li
                  key={i}
                  className="rounded-2xl border border-border bg-surface-2 px-4 py-3 text-sm font-semibold text-fg"
                >
                  {tr(ex)}
                </li>
              ))}
            </ul>
          </article>

          {/* Tip callout */}
          <aside className="flex gap-4 rounded-3xl border border-accent/30 bg-accent-soft p-6 sm:p-8">
            <span className="grid size-11 shrink-0 place-items-center rounded-2xl bg-accent text-white">
              <Lightbulb className="size-6" />
            </span>
            <div>
              <h2 className="text-lg font-extrabold text-fg">{t('learn.tip')}</h2>
              <p className="mt-2 text-base leading-relaxed text-fg/90">{tr(nutrient.tip)}</p>
            </div>
          </aside>
        </div>

        {/* Next lesson */}
        <Link
          to={`/learn/${next.id}`}
          className="group mt-8 flex items-center justify-between gap-4 rounded-3xl border border-border bg-surface p-5 shadow-[var(--shadow-soft)] transition-all hover:-translate-y-0.5 hover:shadow-[var(--shadow-card)]"
        >
          <span className="flex items-center gap-4">
            <span
              className="grid size-12 place-items-center rounded-2xl text-2xl"
              style={{ backgroundColor: `color-mix(in srgb, ${next.accent} 14%, transparent)` }}
            >
              {next.emoji}
            </span>
            <span>
              <span className="block text-xs font-bold text-muted">{t('learn.readMore')}</span>
              <span className="block text-lg font-extrabold text-fg">{tr(next.name)}</span>
            </span>
          </span>
          <Arrow className="size-6 text-primary transition-transform group-hover:-translate-x-1 rtl:group-hover:translate-x-1" />
        </Link>
      </Container>
    </Section>
  )
}
