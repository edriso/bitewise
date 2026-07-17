import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { useI18n } from '../lib/i18n'
import type { StringKey } from '../lib/strings'
import { Logo } from './Logo'
import { LangToggle, ThemeToggle } from './Toggles'
import { Container } from './ui'

const NAV: { to: string; key: StringKey }[] = [
  { to: '/', key: 'nav.home' },
  { to: '/learn', key: 'nav.learn' },
  { to: '/foods', key: 'nav.foods' },
  { to: '/tools', key: 'nav.tools' },
  { to: '/about', key: 'nav.about' },
]

export function Navbar() {
  const { t } = useI18n()
  const [open, setOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    setOpen(false)
  }, [location.pathname])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `rounded-full px-4 py-2 text-sm font-bold transition-colors ${
      isActive ? 'bg-primary-soft text-primary-strong' : 'text-muted hover:text-fg hover:bg-surface-2'
    }`

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-bg/85 backdrop-blur-lg">
      <Container>
        <nav className="flex h-16 items-center justify-between gap-3">
          <Link to="/" aria-label={t('brand.name')} className="shrink-0">
            <Logo />
          </Link>

          <ul className="hidden items-center gap-1 md:flex">
            {NAV.map((item) => (
              <li key={item.to}>
                <NavLink to={item.to} end={item.to === '/'} className={linkClass}>
                  {t(item.key)}
                </NavLink>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <div className="hidden sm:block">
              <LangToggle />
            </div>
            <ThemeToggle />
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-label={t('action.menu')}
              aria-expanded={open}
              className="grid size-10 place-items-center rounded-xl border border-border bg-surface text-fg md:hidden"
            >
              {open ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
        </nav>
      </Container>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-border bg-surface md:hidden">
          <Container className="py-4">
            <ul className="flex flex-col gap-1">
              {NAV.map((item) => (
                <li key={item.to}>
                  <NavLink
                    to={item.to}
                    end={item.to === '/'}
                    className={({ isActive }) =>
                      `block rounded-xl px-4 py-3 text-base font-bold transition-colors ${
                        isActive
                          ? 'bg-primary-soft text-primary-strong'
                          : 'text-fg hover:bg-surface-2'
                      }`
                    }
                  >
                    {t(item.key)}
                  </NavLink>
                </li>
              ))}
            </ul>
            <div className="mt-4 sm:hidden">
              <LangToggle />
            </div>
          </Container>
        </div>
      )}
    </header>
  )
}
