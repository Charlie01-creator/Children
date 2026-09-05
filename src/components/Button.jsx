import { Link } from 'react-router-dom'

const base = 'inline-flex items-center justify-center gap-2 px-6 py-3 text-[15px] font-medium transition-colors duration-150 rounded'

const variants = {
  primary: 'bg-gold text-forest-dark hover:bg-gold-dark hover:text-white',
  secondary: 'border border-forest text-forest hover:bg-forest hover:text-white',
  ghost: 'text-forest hover:text-gold-dark underline underline-offset-4 decoration-1',
  onDark: 'bg-white text-forest-dark hover:bg-sand',
}

export default function Button({ to, href, onClick, variant = 'primary', children, className = '', type = 'button' }) {
  const classes = `${base} ${variants[variant]} ${className}`
  if (to) return <Link to={to} className={classes}>{children}</Link>
  if (href) return <a href={href} className={classes}>{children}</a>
  return <button type={type} onClick={onClick} className={classes}>{children}</button>
}

