import QuotasGridDemo from '../components/QuotasGridDemo'
import { Link } from 'react-router-dom'

export default function QuotasGrid() {
    return (
        <>
            {/* Header */}
            <section className="section" style={{ paddingTop: 'calc(80px + var(--gap-xl))' }}>
                <div className="container">
                    <div className="text-center mb-xl">
                        <span className="text-accent" style={{ fontSize: 'var(--small)', fontWeight: 500 }}>
                            Product Demo
                        </span>
                        <h1 className="h1 mb-md">QuotasGrid</h1>
                        <p style={{ maxWidth: 600, margin: '0 auto' }}>
                            A lightweight, high-performance dashboard for monitoring resource quotas
                            and usage across your organization.
                        </p>
                    </div>
                </div>
            </section>

            {/* Demo */}
            <section className="section" style={{ paddingTop: 0 }}>
                <div className="container">
                    <QuotasGridDemo />
                </div>
            </section>

            {/* Features */}
            <section className="section section--dark">
                <div className="container">
                    <div className="text-center mb-xl">
                        <h2 className="h2 mb-md">Built for Performance</h2>
                        <p style={{ maxWidth: 500, margin: '0 auto' }}>
                            QuotasGrid is designed to be fast, lightweight, and easy to integrate.
                        </p>
                    </div>

                    <div className="grid grid--3" style={{ maxWidth: 900, margin: '0 auto' }}>
                        <div className="card text-center">
                            <div className="h2 mb-sm" style={{ color: 'var(--accent-green)' }}>&lt;50KB</div>
                            <p className="text-secondary text-small">Bundle Size</p>
                        </div>
                        <div className="card text-center">
                            <div className="h2 mb-sm" style={{ color: 'var(--accent-green)' }}>&lt;100ms</div>
                            <p className="text-secondary text-small">Render Time</p>
                        </div>
                        <div className="card text-center">
                            <div className="h2 mb-sm" style={{ color: 'var(--accent-green)' }}>0</div>
                            <p className="text-secondary text-small">Dependencies</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="section">
                <div className="container text-center">
                    <h2 className="h2 mb-md">Interested in a Full Demo?</h2>
                    <p style={{ maxWidth: 500, margin: '0 auto var(--gap-lg)' }}>
                        Learn how QuotasGrid can help you monitor and optimize your resource usage.
                    </p>
                    <div className="flex-center gap-md" style={{ flexWrap: 'wrap' }}>
                        <Link to="/contact" className="btn btn--primary btn--lg">
                            Request Full Demo
                        </Link>
                        <Link to="/product/codeconnect" className="btn btn--secondary btn--lg">
                            View CodeConnect
                        </Link>
                    </div>
                </div>
            </section>
        </>
    )
}
