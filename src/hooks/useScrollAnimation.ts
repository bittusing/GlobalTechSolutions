import { useEffect, useRef, useState } from 'react'

export function useScrollAnimation(threshold = 0.1) {
    const ref = useRef<HTMLElement>(null)
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        const element = ref.current
        if (!element) return

        // Use passive event listener for better scroll performance
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true)
                    observer.disconnect() // Stop observing once visible
                }
            },
            {
                threshold,
                rootMargin: '100px' // Pre-load earlier for smoother experience
            }
        )

        observer.observe(element)

        return () => observer.disconnect()
    }, [threshold])

    return { ref, isVisible }
}
