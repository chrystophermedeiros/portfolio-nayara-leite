import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react'

const styles = {
  primary: 'button button--primary',
  dark: 'button button--dark',
  ghost: 'button button--ghost',
}

type Variant = keyof typeof styles

export function Button({ children, variant = 'primary', className = '', ...props }: ButtonHTMLAttributes<HTMLButtonElement> & { variant?: Variant; children: ReactNode }) {
  return <button className={`${styles[variant]} ${className}`} {...props}>{children}</button>
}

export function LinkButton({ children, variant = 'primary', className = '', ...props }: AnchorHTMLAttributes<HTMLAnchorElement> & { variant?: Variant; children: ReactNode }) {
  return <a className={`${styles[variant]} ${className}`} {...props}>{children}</a>
}
