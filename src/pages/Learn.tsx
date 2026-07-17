import { Link } from 'react-router-dom'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { useI18n } from '../lib/i18n'
import { nutrients } from '../data/nutrients'
import type { StringKey } from '../lib/strings'
import type { Nutrient } from '../lib/types'
import { Container, Section } from '../components/ui'

const GROUPS: { key: Nutrient['group']; title: StringKey }[] = [
  { key: 'macro', title: 'learn.groupMacro' },
  { key: 'other', title: 'learn.groupOther' },
  { key: 'micro', title: 'learn.groupMicro' },
]

export function Learn() {
  const { t, tr, lang } = useI18n()
  const Arrow = lang === 'ar' ? ArrowLeft : ArrowRight

  return (
    <Section>
      <Container>
        <header className="max-w-2xl">
          <h1 className="text-3xl font-extrabold text-fg sm:text-4xl">{t('learn.title')}</h1>
          <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">{t('learn.intro')}</p>
        </header>

        <div className="mt-12 flex flex-col gap-12">
          {GROUPS.map((group) => {
            const items = nutrients.filter((n) => n.group === group.key)
            if (items.length === 0) return null
            return (
              <section key={group.key}>
                <h2 className="mb-5 flex items-center gap-3 text-xl font-extrabold text-fg">
                  <span className="h-6 w-1.5 rounded-full bg-primary" />
                  {t(group.title)}
                </h2>
                <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                  {items.map((n) => (
                    <Link
                      key={n.id}
                      to={`/learn/${n.id}`}
                      className="group flex flex-col rounded-3xl border border-border bg-surface p-6 shadow-[var(--shadow-soft)] transition-all hover:-translate-y-1 hover:shadow-[var(--shadow-card)]"
                    >
                      <div className="flex items-center gap-4">
                        <span
                          className="grid size-14 shrink-0 place-items-center rounded-2xl text-3xl"
                          style={{ backgroundColor: `color-mix(in srgb, ${n.accent} 14%, transparent)` }}
                        >
                          {n.emoji}
                        </span>
                        <div>
                          <h3 className="text-lg font-extrabold text-fg">{tr(n.name)}</h3>
                          {n.kcalPerGram && (
                            <span className="text-xs font-bold" style={{ color: n.accent }}>
                              {n.kcalPerGram} {t('learn.perGram')}
                            </span>
                          )}
                        </div>
                      </div>
                      <p className="mt-4 flex-1 text-sm leading-relaxed text-muted">{tr(n.short)}</p>
                      <span className="mt-4 inline-flex items-center gap-1 text-sm font-bold text-primary-strong">
                        {t('learn.readMore')}
                        <Arrow className="size-4 transition-transform group-hover:-translate-x-1 rtl:group-hover:translate-x-1" />
                      </span>
                    </Link>
                  ))}
                </div>
              </section>
            )
          })}
        </div>
      </Container>
    </Section>
  )
}
