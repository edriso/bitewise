import { Link } from 'react-router-dom'
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  Calculator,
  Languages,
  Salad,
  Sparkles,
} from 'lucide-react'
import { useI18n } from '../lib/i18n'
import { nutrients } from '../data/nutrients'
import { foods } from '../data/foods'
import { Card, Container, Section, SectionHeading } from '../components/ui'

const HERO_EMOJI = ['🥑', '🍎', '🥦', '🐟', '🥚', '🍊', '🫐', '🥕']

export function Home() {
  const { t, tr, lang } = useI18n()
  const Arrow = lang === 'ar' ? ArrowLeft : ArrowRight
  const macros = nutrients.filter((n) => n.group === 'macro')

  const features = [
    { icon: BookOpen, title: t('home.f1Title'), desc: t('home.f1Desc'), color: 'var(--primary)' },
    { icon: Salad, title: t('home.f2Title'), desc: t('home.f2Desc'), color: 'var(--fiber)' },
    { icon: Calculator, title: t('home.f3Title'), desc: t('home.f3Desc'), color: 'var(--fat)' },
    { icon: Languages, title: t('home.f4Title'), desc: t('home.f4Desc'), color: 'var(--accent)' },
  ]

  const steps = [
    { title: t('home.how1Title'), desc: t('home.how1Desc') },
    { title: t('home.how2Title'), desc: t('home.how2Desc') },
    { title: t('home.how3Title'), desc: t('home.how3Desc') },
  ]

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div
          className="pointer-events-none absolute -top-40 start-1/2 size-[38rem] -translate-x-1/2 rounded-full opacity-40 blur-3xl"
          style={{ background: 'radial-gradient(circle, var(--primary), transparent 65%)' }}
          aria-hidden="true"
        />
        <Container className="relative">
          <div className="grid items-center gap-10 py-14 sm:py-20 lg:grid-cols-2 lg:gap-8">
            <div className="animate-fade-up text-center lg:text-start">
              <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-1.5 text-sm font-bold text-primary-strong shadow-[var(--shadow-soft)]">
                {t('home.badge')}
              </span>
              <h1 className="mt-6 text-4xl leading-tight font-extrabold text-fg sm:text-5xl lg:text-6xl">
                {t('home.title1')}{' '}
                <span className="bg-gradient-to-l from-[#3ad07f] to-[#15a05a] bg-clip-text text-transparent">
                  {t('home.title2')}
                </span>
              </h1>
              <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-muted sm:text-lg lg:mx-0">
                {t('home.subtitle')}
              </p>
              <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row lg:justify-start">
                <Link
                  to="/learn"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-base font-bold text-white shadow-[var(--shadow-card)] transition-transform hover:-translate-y-0.5"
                >
                  {t('home.ctaPrimary')}
                  <Arrow className="size-5" />
                </Link>
                <Link
                  to="/foods"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-surface px-6 py-3 text-base font-bold text-fg transition-colors hover:bg-surface-2"
                >
                  <Salad className="size-5 text-primary" />
                  {t('home.ctaSecondary')}
                </Link>
              </div>

              <dl className="mt-10 flex justify-center gap-8 lg:justify-start">
                {[
                  { n: `${foods.length}+`, l: t('home.statFoods') },
                  { n: `${nutrients.length}`, l: t('home.statTopics') },
                  { n: '3', l: t('home.statTools') },
                ].map((s) => (
                  <div key={s.l} className="text-center lg:text-start">
                    <dd className="text-3xl font-extrabold text-fg">{s.n}</dd>
                    <dt className="text-sm text-muted">{s.l}</dt>
                  </div>
                ))}
              </dl>
            </div>

            {/* Hero visual */}
            <div className="relative mx-auto hidden aspect-square w-full max-w-md lg:block">
              <div
                className="absolute inset-6 rounded-[3rem] border border-border bg-surface shadow-[var(--shadow-card)]"
                aria-hidden="true"
              />
              <div className="animate-float absolute inset-0 grid grid-cols-3 grid-rows-3 place-items-center gap-2 p-8">
                {HERO_EMOJI.map((e, i) => (
                  <span
                    key={i}
                    className="grid size-20 place-items-center rounded-3xl border border-border bg-surface text-4xl shadow-[var(--shadow-soft)]"
                    style={{ animationDelay: `${i * 0.3}s` }}
                  >
                    {e}
                  </span>
                ))}
                <span className="grid size-20 place-items-center rounded-3xl bg-gradient-to-br from-[#3ad07f] to-[#15a05a] text-white shadow-[var(--shadow-card)]">
                  <Sparkles className="size-8" />
                </span>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Features */}
      <Section className="bg-surface/50">
        <Container>
          <SectionHeading
            eyebrow="Bitewise"
            title={t('home.featuresTitle')}
            intro={t('home.featuresIntro')}
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((f) => (
              <Card key={f.title} className="p-6 transition-transform hover:-translate-y-1">
                <span
                  className="grid size-12 place-items-center rounded-2xl"
                  style={{ backgroundColor: `color-mix(in srgb, ${f.color} 15%, transparent)`, color: f.color }}
                >
                  <f.icon className="size-6" />
                </span>
                <h3 className="mt-5 text-lg font-extrabold text-fg">{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{f.desc}</p>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* Macros preview */}
      <Section>
        <Container>
          <SectionHeading title={t('home.macrosTitle')} intro={t('home.macrosIntro')} />
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {macros.map((m) => (
              <Link
                key={m.id}
                to={`/learn/${m.id}`}
                className="group block rounded-3xl border border-border bg-surface p-6 shadow-[var(--shadow-soft)] transition-all hover:-translate-y-1 hover:shadow-[var(--shadow-card)]"
                style={{ borderTopWidth: 4, borderTopColor: m.accent }}
              >
                <div className="flex items-center justify-between">
                  <span className="text-4xl">{m.emoji}</span>
                  {m.kcalPerGram && (
                    <span
                      className="rounded-full px-3 py-1 text-xs font-bold"
                      style={{
                        color: m.accent,
                        backgroundColor: `color-mix(in srgb, ${m.accent} 14%, transparent)`,
                      }}
                    >
                      {m.kcalPerGram} {t('learn.perGram')}
                    </span>
                  )}
                </div>
                <h3 className="mt-4 text-xl font-extrabold text-fg">{tr(m.name)}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{tr(m.short)}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-bold text-primary-strong">
                  {t('learn.readMore')}
                  <Arrow className="size-4 transition-transform group-hover:-translate-x-1 rtl:group-hover:translate-x-1" />
                </span>
              </Link>
            ))}
          </div>
        </Container>
      </Section>

      {/* How to use */}
      <Section className="bg-surface/50">
        <Container>
          <SectionHeading title={t('home.howTitle')} />
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {steps.map((s, i) => (
              <div key={i} className="relative rounded-3xl border border-border bg-surface p-6">
                <span className="grid size-11 place-items-center rounded-2xl bg-primary-soft text-lg font-extrabold text-primary-strong">
                  {i + 1}
                </span>
                <h3 className="mt-4 text-lg font-extrabold text-fg">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{s.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* CTA banner */}
      <Section>
        <Container>
          <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-[#15a05a] to-[#0e7c43] px-6 py-14 text-center shadow-[var(--shadow-card)] sm:px-12">
            <div
              className="pointer-events-none absolute -top-20 end-0 size-72 rounded-full bg-white/10 blur-2xl"
              aria-hidden="true"
            />
            <h2 className="relative text-2xl font-extrabold text-white sm:text-3xl">
              {t('home.bannerTitle')}
            </h2>
            <p className="relative mx-auto mt-3 max-w-lg text-white/85">{t('home.bannerDesc')}</p>
            <Link
              to="/learn"
              className="relative mt-8 inline-flex items-center gap-2 rounded-full bg-white px-7 py-3 text-base font-bold text-primary-strong shadow-lg transition-transform hover:-translate-y-0.5"
            >
              {t('home.ctaPrimary')}
              <Arrow className="size-5" />
            </Link>
          </div>
        </Container>
      </Section>
    </>
  )
}
