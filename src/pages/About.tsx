import { AlertTriangle, BookMarked, ExternalLink, Globe, Target } from 'lucide-react'
import { useI18n } from '../lib/i18n'
import { sources } from '../data/sources'
import { Container, Section } from '../components/ui'

export function About() {
  const { t, tr } = useI18n()

  const blocks = [
    { icon: Target, title: t('about.missionTitle'), body: t('about.missionBody') },
    { icon: Globe, title: t('about.langTitle'), body: t('about.langBody') },
  ]

  return (
    <Section>
      <Container className="max-w-3xl">
        <header className="max-w-2xl">
          <h1 className="text-3xl font-extrabold text-fg sm:text-4xl">{t('about.title')}</h1>
          <p className="mt-4 text-lg leading-relaxed text-muted">{t('about.lead')}</p>
        </header>

        <div className="mt-10 flex flex-col gap-6">
          {blocks.map((b) => (
            <article
              key={b.title}
              className="rounded-3xl border border-border bg-surface p-6 shadow-[var(--shadow-soft)] sm:p-8"
            >
              <h2 className="flex items-center gap-3 text-xl font-extrabold text-fg">
                <span className="grid size-10 place-items-center rounded-xl bg-primary-soft text-primary-strong">
                  <b.icon className="size-5" />
                </span>
                {b.title}
              </h2>
              <p className="mt-4 text-base leading-loose text-fg/90">{b.body}</p>
            </article>
          ))}

          {/* Sources */}
          <article className="rounded-3xl border border-border bg-surface p-6 shadow-[var(--shadow-soft)] sm:p-8">
            <h2 className="flex items-center gap-3 text-xl font-extrabold text-fg">
              <span className="grid size-10 place-items-center rounded-xl bg-primary-soft text-primary-strong">
                <BookMarked className="size-5" />
              </span>
              {t('about.sourcesTitle')}
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted">{t('about.sourcesBody')}</p>
            <ul className="mt-5 grid gap-3 sm:grid-cols-2">
              {sources.map((s) => (
                <li key={s.url}>
                  <a
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between gap-3 rounded-2xl border border-border bg-surface-2 px-4 py-3 text-sm font-semibold text-fg transition-colors hover:border-primary hover:text-primary-strong"
                  >
                    <span>{tr(s.name)}</span>
                    <ExternalLink className="size-4 shrink-0 text-muted transition-colors group-hover:text-primary" />
                  </a>
                </li>
              ))}
            </ul>
          </article>

          {/* Disclaimer */}
          <aside className="flex gap-4 rounded-3xl border border-accent/30 bg-accent-soft p-6 sm:p-8">
            <span className="grid size-11 shrink-0 place-items-center rounded-2xl bg-accent text-white">
              <AlertTriangle className="size-6" />
            </span>
            <div>
              <h2 className="text-lg font-extrabold text-fg">{t('about.disclaimerTitle')}</h2>
              <p className="mt-2 text-base leading-relaxed text-fg/90">
                {t('about.disclaimerBody')}
              </p>
            </div>
          </aside>
        </div>
      </Container>
    </Section>
  )
}
