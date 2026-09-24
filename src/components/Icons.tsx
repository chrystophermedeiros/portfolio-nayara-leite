import type { SVGProps } from 'react'

export type IconProps = SVGProps<SVGSVGElement>

type StrokeProps = IconProps & { strokeWidth?: number }

const base = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.9,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
}

export function ArrowUpRightIcon(props: IconProps) {
  return <svg viewBox="0 0 24 24" aria-hidden="true" {...base} {...props}><path d="M7 17 17 7"/><path d="M9 7h8v8"/></svg>
}

export function DownloadIcon(props: IconProps) {
  return <svg viewBox="0 0 24 24" aria-hidden="true" {...base} {...props}><path d="M12 3v11"/><path d="m8 10 4 4 4-4"/><path d="M5 20h14"/></svg>
}

export function ChevronLeftIcon(props: IconProps) {
  return <svg viewBox="0 0 24 24" aria-hidden="true" {...base} {...props}><path d="m14.5 5-7 7 7 7"/></svg>
}

export function ChevronRightIcon(props: IconProps) {
  return <svg viewBox="0 0 24 24" aria-hidden="true" {...base} {...props}><path d="m9.5 5 7 7-7 7"/></svg>
}

export function MailIcon(props: IconProps) {
  return <svg viewBox="0 0 24 24" aria-hidden="true" {...base} {...props}><rect x="3" y="5.5" width="18" height="13" rx="1.6"/><path d="m4.2 7 7.8 6 7.8-6"/></svg>
}

export function LinkedInIcon(props: IconProps) {
  return <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
    <rect x="2.1" y="2.1" width="19.8" height="19.8" rx="4" fill="currentColor"/>
    <circle cx="7.3" cy="7.1" r="1.15" fill="#fff"/>
    <path d="M6.2 10.2v7.25h2.25V10.2H6.2Zm4.05 0v7.25h2.25v-3.58c0-1.02.2-2.02 1.47-2.02 1.25 0 1.26 1.17 1.26 2.09v3.51h2.25v-3.98c0-1.96-.42-3.46-2.69-3.46-1.09 0-1.82.6-2.12 1.18h-.03v-.99h-2.39Z" fill="#fff"/>
  </svg>
}

export function BehanceIcon(props: IconProps) {
  return <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
    <rect x="2.1" y="2.1" width="19.8" height="19.8" rx="4" fill="currentColor"/>
    <path d="M6 6.2h4.1c2.25 0 3.54 1 3.54 2.66 0 1.12-.58 1.92-1.55 2.34 1.24.37 1.88 1.24 1.88 2.58 0 1.98-1.47 3.42-4.03 3.42H6V6.2Zm2.05 1.75v2.6h1.85c.98 0 1.52-.46 1.52-1.3 0-.85-.54-1.3-1.52-1.3H8.05Zm0 4.25v3.25h2.03c1.02 0 1.58-.57 1.58-1.62 0-1.07-.56-1.63-1.58-1.63H8.05Z" fill="#fff"/>
    <path d="M15.75 7.4h3.2" stroke="#fff" strokeWidth="1.35" strokeLinecap="round"/>
    <path d="M15.05 12.15c0-2.27 1.48-3.9 3.55-3.9 2.17 0 3.47 1.73 3.36 4.22h-5.1c.14 1.03.72 1.58 1.64 1.58.65 0 1.13-.31 1.35-.88h1.82c-.36 1.49-1.56 2.4-3.2 2.4-2.1 0-3.42-1.45-3.42-3.42Zm1.85-1.04h3.22c-.12-.85-.6-1.38-1.48-1.38-.82 0-1.47.51-1.74 1.38Z" fill="#fff"/>
  </svg>
}

export function FigmaIcon(props: IconProps) {
  return <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
    <path d="M8 2h4v6H8a3 3 0 1 1 0-6Z" fill="currentColor"/>
    <path d="M12 2h4a3 3 0 1 1 0 6h-4V2Z" fill="currentColor"/>
    <path d="M8 8h4v6H8a3 3 0 1 1 0-6Z" fill="currentColor"/>
    <path d="M12 8h4a3 3 0 1 1 0 6h-4V8Z" fill="currentColor"/>
    <path d="M8 14h4v5a3 3 0 1 1-3-3h3v-2H8Z" fill="currentColor"/>
  </svg>
}

export function NotionIcon(props: IconProps) {
  return <svg viewBox="0 0 28 28" aria-hidden="true" {...props}>
    <rect x="3.1" y="3.1" width="21.8" height="21.8" rx="2.1" fill="none" stroke="currentColor" strokeWidth="2"/>
    <path d="M8.6 20.2V7.8h3.1l6.15 7.9V7.8h2.35v12.4h-2.7l-6.55-8.35v8.35H8.6Z" fill="currentColor"/>
    <path d="M8.25 5.5h6.1" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
  </svg>
}

export function MiroIcon(props: IconProps) {
  return <svg viewBox="0 0 32 32" aria-hidden="true" {...props}>
    <path d="M4 6h5l3.35 6.75L16 6h5l-4.8 10 4.8 10h-5l-3.65-6.6L9 26H4l4.8-10L4 6Z" fill="currentColor"/>
    <path d="M18.5 6h5l4.5 10-4.5 10h-5l4.8-10-4.8-10Z" fill="currentColor" opacity=".88"/>
  </svg>
}

export function SmartphoneIcon(props: StrokeProps) {
  return <svg viewBox="0 0 24 24" aria-hidden="true" {...base} {...props}><rect x="7" y="2.5" width="10" height="19" rx="2.2"/><path d="M10.5 5h3M10.4 18.5h3.2"/></svg>
}

export function PrototypeIcon(props: StrokeProps) {
  return <svg viewBox="0 0 24 24" aria-hidden="true" {...base} {...props}><path d="m6.5 3.7 9.9 8.2-5 1.2-1.9 5.1L6.5 3.7Z"/><path d="m14.8 15.1 3.2 3.2M17.5 14.4l2.1-2.1"/></svg>
}

export function LeafIcon(props: IconProps) {
  return <svg viewBox="0 0 48 48" aria-hidden="true" {...base} {...props}><path d="M23 41V22.8"/><path d="M23 26.2c-6.1-7-11.1-8.2-14.1-8.2.9 7.3 5.1 11.7 14.1 12.4"/><path d="M24.2 28.4c1.2-8.3 6.2-13.7 14.1-15.2-.3 9.2-5.2 15-14.1 17.2"/></svg>
}

export function ClarityIcon(props: IconProps) {
  return <svg viewBox="0 0 48 48" aria-hidden="true" {...base} {...props}><rect x="7.8" y="11" width="9.6" height="25.2" rx="2.2"/><rect x="26.6" y="8" width="10.2" height="28.2" rx="2.2"/></svg>
}

export function FocusIcon(props: IconProps) {
  return <svg viewBox="0 0 52 48" aria-hidden="true" {...base} {...props}><rect x="6" y="9" width="29" height="22" rx="3"/><path d="M20.5 31v8M13.5 40h14"/><path d="m40 7 2.1 4.9L47 14l-4.9 2.1L40 21l-2.1-4.9L33 14l4.9-2.1L40 7Z"/><path d="M14.5 19.5a6.6 6.6 0 1 0 6-6.1"/><path d="m22.5 13.4-2.9 0 .1 2.9"/></svg>
}

export function CheckCircleIcon(props: IconProps) {
  return <svg viewBox="0 0 24 24" aria-hidden="true" {...props}><circle cx="12" cy="12" r="9.2" fill="currentColor"/><path d="m8.2 12.1 2.5 2.5 5.3-5.3" fill="none" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
}

export function BulbIcon(props: IconProps) {
  return <svg viewBox="0 0 24 24" aria-hidden="true" {...base} {...props}><path d="M8.3 16.2a6.5 6.5 0 1 1 7.4-.1c-.8.6-1.3 1.5-1.4 2.4H9.8c-.1-.9-.6-1.7-1.5-2.3Z"/><path d="M9.6 18.5h4.8M10.4 21h3.2M12 .8v1.8M4.2 4.2l1.3 1.3M19.8 4.2l-1.3 1.3M2.2 12H4M20 12h1.8"/></svg>
}

export function ObjectiveIcon({ kind = 0, ...props }: IconProps & { kind?: 0 | 1 | 2 | 3 }) {
  if (kind === 1) return <svg viewBox="0 0 24 24" aria-hidden="true" {...base} {...props}><circle cx="5" cy="6" r="1.4"/><circle cx="12" cy="11" r="1.4"/><circle cx="19" cy="6" r="1.4"/><circle cx="5" cy="18" r="1.4"/><path d="m6.2 7 4.6 3.2M13.2 10l4.6-3.1M10.9 12.1 6.3 16.9M13.1 12.3l4.7 4.2"/></svg>
  if (kind === 2) return <SmartphoneIcon {...props}/>
  if (kind === 3) return <svg viewBox="0 0 24 24" aria-hidden="true" {...base} {...props}><circle cx="8.5" cy="8" r="2.8"/><path d="M4 18.5a4.5 4.5 0 0 1 9 0M15.8 8.1c2.2.2 3.6 1.3 4.1 3.1M15.5 14.6c2.1.2 3.6 1.3 4.2 3.4"/><path d="m18.2 5.6.5 1.3 1.3.5-1.3.5-.5 1.3-.5-1.3-1.3-.5 1.3-.5.5-1.3Z"/></svg>
  return <svg viewBox="0 0 24 24" aria-hidden="true" {...base} {...props}><rect x="4" y="4" width="16" height="16" rx="2.2"/><path d="M8 8h8M8 12h4M8 16h5"/><path d="m16 13.5 1.3 1.3 2.2-2.6"/></svg>
}
