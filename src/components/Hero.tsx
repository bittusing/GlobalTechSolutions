import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { useState, useEffect } from 'react'
import heroVisual from '../assets/hero-visual.png'

interface HeroProps {
    headline?: string
    subheadline?: string
    primaryCta?: {
        label: string
        href: string
        external?: boolean
    }
    secondaryCta?: {
        label: string
        href: string
        external?: boolean
    }
}

export default function Hero({
    headline = "Engineering Intelligence.\nBuilding What's Next.",
    subheadline = "We design and build scalable digital systems across AI, web platforms, automation, and cloud infrastructure.",
    primaryCta = { label: "Partner with Us", href: "/contact" }
}: HeroProps) {
    const [scrollOpacity, setScrollOpacity] = useState(1)
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

    useEffect(() => {
        const handleScroll = () => {
            const scroll = window.scrollY
            const opacity = Math.max(1 - scroll / 400, 0.3)
            setScrollOpacity(opacity)
        }

        const handleMouseMove = (e: MouseEvent) => {
            const x = (window.innerWidth / 2 - e.clientX) * 0.01
            const y = (window.innerHeight / 2 - e.clientY) * 0.01
            setMousePosition({ x, y })
        }

        window.addEventListener('scroll', handleScroll)
        window.addEventListener('mousemove', handleMouseMove)
        
        return () => {
            window.removeEventListener('scroll', handleScroll)
            window.removeEventListener('mousemove', handleMouseMove)
        }
    }, [])

    return (
        <section className="hero-premium" style={{ opacity: scrollOpacity }}>
            <div className="hero-premium__background"></div>
            <div className="hero-premium__glow"></div>
            
            <div className="hero-premium__container">
                <div className="hero-premium__grid">
                    {/* LEFT SIDE - STATIC CONTENT */}
                    <div className="hero-premium__content">
                        <h1 className="hero-premium__headline">
                            {headline.split('\n').map((line, i) => (
                                <span key={i} className="hero-premium__headline-line">
                                    {line}
                                    {i === 1 && <span className="hero-premium__headline-accent"></span>}
                                </span>
                            ))}
                        </h1>

                        <div className="hero-premium__badges">
                            <span className="hero-premium__badge-item">AI</span>
                            <span className="hero-premium__badge-separator">·</span>
                            <span className="hero-premium__badge-item">Automation</span>
                            <span className="hero-premium__badge-separator">·</span>
                            <span className="hero-premium__badge-item">Cloud</span>
                            <span className="hero-premium__badge-separator">·</span>
                            <span className="hero-premium__badge-item">Product Engineering</span>
                        </div>

                        <p className="hero-premium__subheadline">
                            {subheadline}
                        </p>

                        <div className="hero-premium__cta-group">
                            <Link to={primaryCta.href} className="hero-premium__cta-primary">
                                <span>{primaryCta.label}</span>
                                <ArrowRight size={18} strokeWidth={2.5} />
                            </Link>
                        </div>
                    </div>

                    {/* RIGHT SIDE - VISUAL */}
                    <div 
                        className="hero-premium__visual"
                        style={{
                            transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`
                        }}
                    >
                        <div className="hero-premium__visual-wrapper">
                            <img
                                src={heroVisual}
                                alt="CodexBit engineering platform architecture"
                                className="hero-premium__image"
                                loading="eager"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
