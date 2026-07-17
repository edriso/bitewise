import { Link } from 'react-router-dom'
import { Heart, Info } from 'lucide-react'
import { useI18n } from '../lib/i18n'
import { Logo } from './Logo'
import { Container } from './ui'

export function Footer() {
  const { t } = useI18n()
  return (
    <footer className="mt-auto border-t border-border bg-surface">
      <Container className="py-12">
        <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-4">
          <div className="sm:col-span-2 md:col-span-2">
            <Logo />
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted">
              {t('footer.tagline')}
            </p>
          </div>

          <div>
            <h3 className="mb-3 text-sm font-extrabold text-fg">{t('footer.explore')}</h3>
            <ul className="flex flex-col gap-2 text-sm text-muted">
              <li>
                <Link to="/learn" className="transition-colors hover:text-primary">
                  {t('nav.learn')}
                </Link>
              </li>
              <li>
                <Link to="/foods" className="transition-colors hover:text-primary">
                  {t('nav.foods')}
                </Link>
              </li>
              <li>
                <Link to="/tools" className="transition-colors hover:text-primary">
                  {t('nav.tools')}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-3 text-sm font-extrabold text-fg">{t('footer.about')}</h3>
            <ul className="flex flex-col gap-2 text-sm text-muted">
              <li>
                <Link to="/about" className="transition-colors hover:text-primary">
                  {t('nav.about')}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-border pt-6 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
          <p className="flex items-center gap-2">
            <Info className="size-4 shrink-0 text-accent" />
            {t('footer.disclaimer')}
          </p>
          <p className="flex items-center gap-1.5">
            {t('footer.rights')}
            <Heart className="size-4 fill-current text-primary" />
          </p>
        </div>
      </Container>
    </footer>
  )
}
