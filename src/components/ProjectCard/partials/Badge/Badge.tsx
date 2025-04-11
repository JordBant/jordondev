import type React from "react"
import './Badge.scss'

type BadgeVariant = "default" | "secondary" | "destructive" | "outline"

interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string
  variant?: BadgeVariant
}

const Badge: React.FC<BadgeProps> = ({ className, variant = "default", ...props }) => {
  return <div className={`badge badge-${variant} ${className || ""}`} {...props} />
}

export { Badge }
