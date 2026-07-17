import { Link } from 'react-router-dom'
import { useI18n } from '../lib/i18n'
import { Container, Section } from '../components/ui'

export function NotFound() {
  const { t } = useI18n()
  return (
    <Section>
      <Container className="text-center">
        <p className="text-7xl">🍽️</p>
        <h1 className="mt-6 text-3xl font-extrabold text-fg">{t('common.notFound')}</h1>
        <Link
          to="/"
          className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 font-bold text-white shadow-[var(--shadow-card)] transition-transform hover:-translate-y-0.5"
        >
          {t('common.goHome')}
        </Link>
      </Container>
    </Section>
  )
}
