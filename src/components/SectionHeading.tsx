import type { L } from '@/data/site'
import { pick } from '@/data/site'
import { useLang } from '@/lib/i18n-context'
import { Reveal } from './Reveal'

type SectionHeadingProps = {
  index: string
  label: L
  title: L
  body?: L
  className?: string
}

export function SectionHeading({ index, label, title, body, className = '' }: SectionHeadingProps) {
  const { lang } = useLang()

  return (
    <Reveal className={`section-heading ${className}`.trim()}>
      <div className="section-heading__top">
        <span className="section-index">{index}</span>
        <span className="section-label">{pick(label, lang)}</span>
        <span className="section-rule" aria-hidden="true" />
      </div>
      <h2 className="section-title">{pick(title, lang)}</h2>
      {body ? <p className="section-body">{pick(body, lang)}</p> : null}
    </Reveal>
  )
}
