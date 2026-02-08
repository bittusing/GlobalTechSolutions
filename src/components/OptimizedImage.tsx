import { useState, useEffect, useRef } from 'react'

interface OptimizedImageProps {
    src: string
    alt: string
    width?: number
    height?: number
    className?: string
    priority?: boolean
    aspectRatio?: string
    onLoad?: () => void
}

export default function OptimizedImage({
    src,
    alt,
    width,
    height,
    className = '',
    priority = false,
    aspectRatio,
    onLoad
}: OptimizedImageProps) {
    const [isLoaded, setIsLoaded] = useState(false)
    const [isInView, setIsInView] = useState(priority)
    const imgRef = useRef<HTMLImageElement>(null)
    const containerRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if (priority) return

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setIsInView(true)
                        observer.disconnect()
                    }
                })
            },
            {
                rootMargin: '200px',
                threshold: 0.01
            }
        )

        if (containerRef.current) {
            observer.observe(containerRef.current)
        }

        return () => observer.disconnect()
    }, [priority])

    const handleLoad = () => {
        setIsLoaded(true)
        onLoad?.()
    }

    const containerStyle: React.CSSProperties = {
        position: 'relative',
        overflow: 'hidden',
        ...(aspectRatio && { aspectRatio }),
        ...(width && height && !aspectRatio && { aspectRatio: `${width} / ${height}` })
    }

    const imageStyle: React.CSSProperties = {
        opacity: isLoaded ? 1 : 0,
        transition: 'opacity 0.3s ease-in-out',
        width: '100%',
        height: '100%',
        objectFit: 'cover'
    }

    const skeletonStyle: React.CSSProperties = {
        position: 'absolute',
        inset: 0,
        background: 'linear-gradient(90deg, rgba(240, 240, 240, 0.8) 25%, rgba(250, 250, 250, 0.8) 50%, rgba(240, 240, 240, 0.8) 75%)',
        backgroundSize: '200% 100%',
        animation: 'shimmer 1.5s infinite',
        opacity: isLoaded ? 0 : 1,
        transition: 'opacity 0.3s ease-in-out',
        pointerEvents: 'none'
    }

    return (
        <div ref={containerRef} style={containerStyle} className={className}>
            {!isLoaded && <div style={skeletonStyle} />}
            {isInView && (
                <img
                    ref={imgRef}
                    src={src}
                    alt={alt}
                    width={width}
                    height={height}
                    loading={priority ? 'eager' : 'lazy'}
                    decoding="async"
                    onLoad={handleLoad}
                    style={imageStyle}
                />
            )}
        </div>
    )
}
