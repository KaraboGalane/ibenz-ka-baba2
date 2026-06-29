/**
 * The recurring signature motif of the site: a three-pointed star inside a
 * ring, echoing the Mercedes-Benz emblem. Used in the logo, loading screen,
 * and as a quiet accent between sections.
 */
export default function StarEmblem({ className = 'w-8 h-8', ringed = true }) {
  return (
    <svg viewBox="0 0 64 64" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      {ringed && (
        <circle cx="32" cy="32" r="29" stroke="currentColor" strokeWidth="1.5" opacity="0.55" />
      )}
      <g fill="currentColor">
        <rect x="30.4" y="8" width="3.2" height="27" rx="1.2" />
        <rect x="30.4" y="8" width="3.2" height="27" rx="1.2" transform="rotate(120 32 32)" />
        <rect x="30.4" y="8" width="3.2" height="27" rx="1.2" transform="rotate(240 32 32)" />
      </g>
      <circle cx="32" cy="32" r="4.2" fill="none" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  )
}
