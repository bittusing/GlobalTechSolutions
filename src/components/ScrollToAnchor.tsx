import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export default function ScrollToAnchor() {
    const { pathname, hash, key } = useLocation()

    useEffect(() => {
        // If we have a hash, find the element and scroll to it
        if (hash) {
            const id = hash.replace('#', '')

            // Function to attempt scrolling
            const attemptScroll = () => {
                const element = document.getElementById(id)
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth', block: 'start' })
                    // Clear hash from URL so refresh doesn't trigger scroll again
                    // We preserve history.state to not break React Router internal state
                    window.history.replaceState(window.history.state, '', window.location.pathname)
                    return true
                }
                return false
            }

            // Try immediately
            if (!attemptScroll()) {
                // If not found immediately (e.g. strict mode or lazy load), retry
                let attempts = 0
                const maxAttempts = 20 // 2 seconds max
                const intervalId = setInterval(() => {
                    attempts++
                    if (attemptScroll() || attempts >= maxAttempts) {
                        clearInterval(intervalId)
                    }
                }, 100)

                return () => clearInterval(intervalId)
            }
        } else {
            // If no hash, scroll to top
            window.scrollTo(0, 0)
        }
    }, [pathname, hash, key])

    return null
}
