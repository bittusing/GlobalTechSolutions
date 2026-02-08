import Header from './components/Header'
import Footer from './components/Footer'
import AppRoutes from './router'

import ScrollToAnchor from './components/ScrollToAnchor'

export default function App() {
    return (
        <>
            <ScrollToAnchor />
            {/* Skip link for accessibility */}
            <a href="#main-content" className="skip-link">
                Skip to main content
            </a>

            <Header />

            <main id="main-content">
                <AppRoutes />
            </main>

            <Footer />
        </>
    )
}
