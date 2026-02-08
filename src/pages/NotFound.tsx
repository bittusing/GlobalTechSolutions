import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import { useEffect } from 'react'
import { updatePageSEO } from '../utils/seo'

export default function NotFound() {
    useEffect(() => {
        updatePageSEO({
            title: '404 - Page Not Found | CodexBit',
            description: 'The page you are looking for does not exist. Return to CodexBit homepage to explore our software development services and products.',
            canonical: 'https://codexbit.in/404'
        })
    }, [])

    return (
        <section
            className="section flex-center"
            style={{
                minHeight: '100vh',
                paddingTop: '80px'
            }}
        >
            <div className="container text-center">
                <div
                    style={{
                        fontSize: 'clamp(80px, 15vw, 160px)',
                        fontWeight: 400,
                        color: 'var(--border-medium)',
                        lineHeight: 1,
                        marginBottom: 'var(--gap)'
                    }}
                >
                    404
                </div>

                <h1 className="h2 mb-md">Page not found</h1>

                <p className="text-secondary" style={{ maxWidth: 350, margin: '0 auto var(--gap-lg)' }}>
                    The page you're looking for doesn't exist.
                </p>

                <Link to="/" className="btn btn--primary">
                    <ArrowLeft size={16} />
                    Back to Home
                </Link>
            </div>
        </section>
    )
}
