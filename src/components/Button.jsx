import React from 'react'

const base =
  'inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-medium transition-all duration-200 focus-visible:outline-none disabled:opacity-50 disabled:pointer-events-none'

const variants = {
  primary:
    'bg-accent-cyan text-[#04101F] hover:bg-[#6cc5ff] active:bg-[#3ba6ef] shadow-[0_10px_30px_-12px_rgba(79,184,255,0.55)]',
  secondary:
    'border border-surface-border bg-surface/60 text-ink hover:border-accent-cyan/40 hover:bg-surface-raised',
  ghost: 'text-ink-muted hover:text-ink',
}

/**
 * A polymorphic button that renders as <a> when `href` is provided,
 * otherwise as a native <button>.
 */
export default function Button({
  as,
  href,
  variant = 'primary',
  icon: Icon,
  iconPosition = 'left',
  className = '',
  children,
  ...rest
}) {
  const classes = `${base} ${variants[variant] || variants.primary} ${className}`
  const content = (
    <>
      {Icon && iconPosition === 'left' && <Icon size={17} strokeWidth={2} />}
      <span>{children}</span>
      {Icon && iconPosition === 'right' && <Icon size={17} strokeWidth={2} />}
    </>
  )

  if (href) {
    const isExternal = href.startsWith('http')
    return (
      <a
        href={href}
        className={classes}
        {...(isExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
        {...rest}
      >
        {content}
      </a>
    )
  }

  const Tag = as || 'button'
  return (
    <Tag className={classes} {...rest}>
      {content}
    </Tag>
  )
}
