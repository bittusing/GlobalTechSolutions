import { ReactNode } from 'react'
import { cn } from '../../utils/cn'

interface MarqueeProps {
  className?: string
  pauseOnHover?: boolean
  children: ReactNode
  speed?: number
}

export default function Marquee({
  className,
  pauseOnHover = true,
  children,
  speed = 40
}: MarqueeProps) {
  return (
    <div
      className={cn('marquee-wrapper', pauseOnHover && 'marquee-wrapper--pause-on-hover', className)}
    >
      <div 
        className="marquee-track" 
        style={{ '--marquee-speed': `${speed}s` } as React.CSSProperties}
      >
        <div className="marquee-content">
          {children}
        </div>
        <div className="marquee-content" aria-hidden="true">
          {children}
        </div>
      </div>
    </div>
  )
}
