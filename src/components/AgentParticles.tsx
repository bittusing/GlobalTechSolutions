import { useEffect, useRef, useState } from 'react'

interface Particle {
    x: number
    y: number
    vx: number
    vy: number
    radius: number
    opacity: number
}

interface AgentParticlesProps {
    className?: string
    density?: number
    interactive?: boolean
}

export default function AgentParticles({
    className = '',
    density = 0.00012,
    interactive = true
}: AgentParticlesProps) {
    const canvasRef = useRef<HTMLCanvasElement>(null)
    const particlesRef = useRef<Particle[]>([])
    const mouseRef = useRef({ x: 0, y: 0, active: false })
    const animationRef = useRef<number>()
    const [supportsHoudini] = useState(false) // Force Canvas fallback for reliability

    useEffect(() => {
        // Skip canvas if Houdini is supported
        if (supportsHoudini) return

        const canvas = canvasRef.current
        if (!canvas) return

        const ctx = canvas.getContext('2d')
        if (!ctx) return

        let width = 0
        let height = 0

        const resize = () => {
            const dpr = window.devicePixelRatio || 1
            const rect = canvas.getBoundingClientRect()
            width = rect.width
            height = rect.height
            canvas.width = width * dpr
            canvas.height = height * dpr
            ctx.scale(dpr, dpr)

            // Reinitialize particles on resize
            initParticles()
        }

        const initParticles = () => {
            const numParticles = Math.floor(width * height * density)
            particlesRef.current = []

            for (let i = 0; i < numParticles; i++) {
                particlesRef.current.push({
                    x: Math.random() * width,
                    y: Math.random() * height,
                    vx: (Math.random() - 0.5) * 0.3,
                    vy: (Math.random() - 0.5) * 0.3,
                    radius: Math.random() * 1.5 + 0.5,
                    opacity: Math.random() * 0.4 + 0.1
                })
            }
        }

        const handleMouseMove = (e: MouseEvent) => {
            if (!interactive) return
            const rect = canvas.getBoundingClientRect()
            mouseRef.current = {
                x: e.clientX - rect.left,
                y: e.clientY - rect.top,
                active: true
            }
        }

        const handleMouseLeave = () => {
            mouseRef.current.active = false
        }

        const animate = () => {
            ctx.clearRect(0, 0, width, height)

            const particles = particlesRef.current
            const mouse = mouseRef.current
            const connectionDistance = 100

            // Update and draw particles
            for (let i = 0; i < particles.length; i++) {
                const p = particles[i]

                // Mouse interaction - repel effect
                if (mouse.active && interactive) {
                    const dx = p.x - mouse.x
                    const dy = p.y - mouse.y
                    const dist = Math.sqrt(dx * dx + dy * dy)

                    if (dist < 150) {
                        const force = (150 - dist) / 150 * 0.05
                        p.vx += (dx / dist) * force
                        p.vy += (dy / dist) * force
                    }
                }

                // Update position
                p.x += p.vx
                p.y += p.vy

                // Apply friction
                p.vx *= 0.99
                p.vy *= 0.99

                // Wrap around edges
                if (p.x < 0) p.x = width
                if (p.x > width) p.x = 0
                if (p.y < 0) p.y = height
                if (p.y > height) p.y = 0

                // Draw particle
                ctx.beginPath()
                ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2)
                ctx.fillStyle = `rgba(138, 180, 248, ${p.opacity})`
                ctx.fill()
            }

            // Draw connections between nearby particles
            ctx.strokeStyle = 'rgba(138, 180, 248, 0.05)'
            ctx.lineWidth = 0.5

            for (let i = 0; i < Math.min(particles.length, 80); i++) {
                for (let j = i + 1; j < Math.min(particles.length, 80); j++) {
                    const dx = particles[i].x - particles[j].x
                    const dy = particles[i].y - particles[j].y
                    const dist = Math.sqrt(dx * dx + dy * dy)

                    if (dist < connectionDistance) {
                        const opacity = (1 - dist / connectionDistance) * 0.1
                        ctx.strokeStyle = `rgba(138, 180, 248, ${opacity})`
                        ctx.beginPath()
                        ctx.moveTo(particles[i].x, particles[i].y)
                        ctx.lineTo(particles[j].x, particles[j].y)
                        ctx.stroke()
                    }
                }
            }
            // Draw cluster glows
            const clusters = [
                { x: width * 0.2, y: height * 0.3, r: 120 },
                { x: width * 0.7, y: height * 0.5, r: 100 },
                { x: width * 0.5, y: height * 0.8, r: 80 }
            ]

            for (const cluster of clusters) {
                const gradient = ctx.createRadialGradient(
                    cluster.x, cluster.y, 0,
                    cluster.x, cluster.y, cluster.r
                )
                gradient.addColorStop(0, 'rgba(138, 180, 248, 0.06)')
                gradient.addColorStop(0.5, 'rgba(138, 180, 248, 0.02)')
                gradient.addColorStop(1, 'rgba(138, 180, 248, 0)')

                ctx.beginPath()
                ctx.arc(cluster.x, cluster.y, cluster.r, 0, Math.PI * 2)
                ctx.fillStyle = gradient
                ctx.fill()
            }

            animationRef.current = requestAnimationFrame(animate)
        }

        // Initialize
        resize()
        animate()

        // Event listeners
        window.addEventListener('resize', resize)
        canvas.addEventListener('mousemove', handleMouseMove)
        canvas.addEventListener('mouseleave', handleMouseLeave)

        return () => {
            window.removeEventListener('resize', resize)
            canvas.removeEventListener('mousemove', handleMouseMove)
            canvas.removeEventListener('mouseleave', handleMouseLeave)
            if (animationRef.current) {
                cancelAnimationFrame(animationRef.current)
            }
        }
    }, [supportsHoudini, density, interactive])

    // Use Houdini PaintWorklet if supported
    if (supportsHoudini) {
        return (
            <div
                className={`particles-bg ${className}`}
                style={{
                    position: 'absolute',
                    inset: 0,
                    // @ts-expect-error CSS custom properties for Houdini
                    '--particle-seed': 42,
                    '--particle-density': density,
                    '--particle-speed': 1,
                    background: 'paint(agentParticles)'
                }}
                aria-hidden="true"
            />
        )
    }

    // Canvas fallback
    return (
        <canvas
            ref={canvasRef}
            className={`particles-canvas ${className}`}
            style={{
                position: 'absolute',
                inset: 0,
                width: '100%',
                height: '100%'
            }}
            aria-hidden="true"
        />
    )
}
