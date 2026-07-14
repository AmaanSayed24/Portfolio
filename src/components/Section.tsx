import { cn } from '../lib/utils'

export function Section({
  id,
  eyebrow,
  title,
  children,
  className,
}: {
  id?: string
  eyebrow: string
  title: string
  children: React.ReactNode
  className?: string
}) {
  return (
    <section id={id} className={cn('relative mx-auto w-full max-w-6xl px-5 py-18 md:px-8', className)}>
      <div className="mb-8">
        <div className="text-xs font-semibold tracking-[0.28em] text-white/50">{eyebrow}</div>
        <h2 className="mt-3 text-2xl font-semibold tracking-tight text-white md:text-4xl">{title}</h2>
      </div>
      {children}
    </section>
  )
}
