import { useRoutes } from 'react-router-dom'
import { lazy, Suspense } from 'react'

// Lazy load pages for code splitting
const Home = lazy(() => import('./pages/Home'))
const Products = lazy(() => import('./pages/Products'))
const Services = lazy(() => import('./pages/Services'))
const About = lazy(() => import('./pages/About'))
const Contact = lazy(() => import('./pages/Contact'))
const Privacy = lazy(() => import('./pages/Privacy'))
const Terms = lazy(() => import('./pages/Terms'))
const NotFound = lazy(() => import('./pages/NotFound'))

// Loading fallback - minimal
const PageLoader = () => (
    <div className="flex-center" style={{ minHeight: '100vh' }}>
        <div style={{
            width: 20,
            height: 20,
            border: '2px solid var(--border-subtle)',
            borderTopColor: 'var(--text-muted)',
            borderRadius: '50%',
            animation: 'spin 0.8s linear infinite'
        }} />
    </div>
)

export default function AppRoutes() {
    return useRoutes([
        { path: '/', element: <Suspense fallback={<PageLoader />}><Home /></Suspense> },
        { path: '/products', element: <Suspense fallback={<PageLoader />}><Products /></Suspense> },
        { path: '/services', element: <Suspense fallback={<PageLoader />}><Services /></Suspense> },
        { path: '/about', element: <Suspense fallback={<PageLoader />}><About /></Suspense> },
        { path: '/contact', element: <Suspense fallback={<PageLoader />}><Contact /></Suspense> },
        { path: '/privacy', element: <Suspense fallback={<PageLoader />}><Privacy /></Suspense> },
        { path: '/terms', element: <Suspense fallback={<PageLoader />}><Terms /></Suspense> },
        { path: '*', element: <Suspense fallback={<PageLoader />}><NotFound /></Suspense> },
    ])
}
