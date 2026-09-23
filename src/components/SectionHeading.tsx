export default function SectionHeading({ eyebrow, title }: { eyebrow?: string; title?: string }) {
  return (
    <div className="section-heading">
      <div>
        {eyebrow && <p className="eyebrow">{eyebrow}</p>}
        {title && <h2>{title}</h2>}
      </div>
    </div>
  )
}
