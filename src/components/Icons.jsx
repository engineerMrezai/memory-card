export function PawIcon({ size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
      <ellipse cx="24" cy="32" rx="11" ry="9" fill="currentColor" />
      <ellipse cx="9" cy="20" rx="5" ry="6" fill="currentColor" />
      <ellipse cx="39" cy="20" rx="5" ry="6" fill="currentColor" />
      <ellipse cx="16" cy="11" rx="4.5" ry="5.5" fill="currentColor" />
      <ellipse cx="32" cy="11" rx="4.5" ry="5.5" fill="currentColor" />
    </svg>
  )
}

export function GearIcon({ size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <path
        d="M12 8.4a3.6 3.6 0 1 0 0 7.2 3.6 3.6 0 0 0 0-7.2Z"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <path
        d="M19.4 13.4a7.6 7.6 0 0 0 0-2.8l2-1.4-1.6-2.8-2.3.8a7.7 7.7 0 0 0-2.4-1.4L14.6 3h-3.2l-.5 2.8a7.7 7.7 0 0 0-2.4 1.4l-2.3-.8-1.6 2.8 2 1.4a7.6 7.6 0 0 0 0 2.8l-2 1.4 1.6 2.8 2.3-.8a7.7 7.7 0 0 0 2.4 1.4l.5 2.8h3.2l.5-2.8a7.7 7.7 0 0 0 2.4-1.4l2.3.8 1.6-2.8-2-1.4Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function CrownIcon({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M3 8l3.5 3L12 5l5.5 6L21 8l-2 10H5L3 8Z" />
    </svg>
  )
}

export function CompassIcon({ size = 28 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
      <circle cx="24" cy="24" r="19" stroke="currentColor" strokeWidth="2" />
      <path d="M24 11v6M24 31v6M11 24h6M31 24h6" stroke="currentColor" strokeWidth="1.6" />
      <path d="M24 24 31 14l-3.5 13.5L17 31l3.5-13.5Z" fill="currentColor" />
    </svg>
  )
}

export function TrophyIcon({ size = 40 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <path
        d="M7 4h10v4a5 5 0 0 1-10 0V4Z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
      <path d="M7 5H4v2a3 3 0 0 0 3 3M17 5h3v2a3 3 0 0 1-3 3" stroke="currentColor" strokeWidth="1.7" />
      <path d="M12 13v3M9 20h6M9.5 17h5l.5 3h-6l.5-3Z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
    </svg>
  )
}
