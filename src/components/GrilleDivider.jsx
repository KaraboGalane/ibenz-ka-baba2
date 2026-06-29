/**
 * A thin row of vertical bars referencing the classic Mercedes grille.
 * Used as a section divider in place of a generic horizontal rule.
 */
export default function GrilleDivider({ className = '' }) {
  return (
    <div className={`flex items-center justify-center gap-1.5 ${className}`} aria-hidden="true">
      {Array.from({ length: 13 }).map((_, i) => (
        <span
          key={i}
          className="block rounded-full bg-gold/40"
          style={{
            width: '2px',
            height: i === 6 ? '18px' : `${10 - Math.abs(i - 6) * 1.1}px`,
            opacity: i === 6 ? 1 : 0.45 + (6 - Math.abs(i - 6)) * 0.08,
          }}
        />
      ))}
    </div>
  )
}
