import type { ReactNode } from 'react'

export function Container({
  children,
  className = '',
}: {
  children: ReactNode
  className?: string
}) {
  return <div className={`mx-auto w-full max-w-6xl px-4 sm:px-6 ${className}`}>{children}</div>
}

export function Section({
  children,
  className = '',
}: {
  children: ReactNode
  className?: string
}) {
  return <section className={`py-14 sm:py-20 ${className}`}>{children}</section>
}

export function SectionHeading({
  eyebrow,
  title,
  intro,
  center = true,
}: {
  eyebrow?: string
  title: string
  intro?: string
  center?: boolean
}) {
  return (
    <div className={`${center ? 'mx-auto text-center' : 'text-start'} max-w-2xl`}>
      {eyebrow && (
        <p className="mb-2 text-sm font-bold tracking-wide text-primary uppercase">{eyebrow}</p>
      )}
      <h2 className="text-2xl font-extrabold text-fg sm:text-3xl md:text-4xl">{title}</h2>
      {intro && <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">{intro}</p>}
    </div>
  )
}

export function Card({
  children,
  className = '',
  as: Tag = 'div',
}: {
  children: ReactNode
  className?: string
  as?: 'div' | 'article' | 'li'
}) {
  return (
    <Tag
      className={`rounded-3xl border border-border bg-surface shadow-[var(--shadow-soft)] ${className}`}
    >
      {children}
    </Tag>
  )
}

export function Badge({
  children,
  color,
  className = '',
}: {
  children: ReactNode
  color?: string
  className?: string
}) {
  const style = color
    ? { color, backgroundColor: `color-mix(in srgb, ${color} 14%, transparent)` }
    : undefined
  return (
    <span
      style={style}
      className={`inline-flex items-center gap-1 rounded-full px-3 py-1 text-xs font-bold ${
        color ? '' : 'bg-primary-soft text-primary-strong'
      } ${className}`}
    >
      {children}
    </span>
  )
}
