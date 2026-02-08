import { Link } from 'react-router-dom'

const colorTokens = [
    { name: '--bg-default', value: '#0F1720', label: 'Background Default' },
    { name: '--bg-elev-1', value: '#1E1E1E', label: 'Elevation 1' },
    { name: '--bg-elev-2', value: '#2D2E31', label: 'Elevation 2' },
    { name: '--bg-elev-3', value: '#3C4043', label: 'Elevation 3' },
    { name: '--text-primary', value: '#E8EAED', label: 'Text Primary' },
    { name: '--text-secondary', value: '#9AA0A6', label: 'Text Secondary' },
    { name: '--accent-blue', value: '#8AB4F8', label: 'Accent Blue' },
    { name: '--accent-blue-strong', value: '#174EA6', label: 'Accent Blue Strong' },
    { name: '--accent-green', value: '#81C995', label: 'Success Green' },
    { name: '--accent-yellow', value: '#FDD663', label: 'Warning Yellow' },
    { name: '--accent-red', value: '#F28B82', label: 'Error Red' },
    { name: '--lavender-blue', value: '#C4DBFA', label: 'Lavender Blue' },
]

const typographyScale = [
    { name: 'H1', size: 'clamp(40px, 6.5vw, 96px)', sample: 'Headline One' },
    { name: 'H2', size: 'clamp(28px, 4.2vw, 48px)', sample: 'Headline Two' },
    { name: 'H3', size: 'clamp(20px, 2.5vw, 28px)', sample: 'Headline Three' },
    { name: 'H4', size: '22px', sample: 'Headline Four' },
    { name: 'Body', size: '16px', sample: 'Body text for paragraphs and content.' },
    { name: 'Small', size: '14px', sample: 'Smaller text for captions.' },
    { name: 'Tiny', size: '12px', sample: 'Tiny text for labels.' },
]

export default function Styleguide() {
    return (
        <>
            {/* Header */}
            <section className="section" style={{ paddingTop: 'calc(80px + var(--gap-xl))' }}>
                <div className="container">
                    <div className="text-center mb-xl">
                        <span className="text-accent" style={{ fontSize: 'var(--small)', fontWeight: 500 }}>
                            Design System
                        </span>
                        <h1 className="h1 mb-md">Styleguide</h1>
                        <p style={{ maxWidth: 600, margin: '0 auto' }}>
                            A comprehensive overview of the Codexbit design system, including
                            color tokens, typography, components, and patterns.
                        </p>
                    </div>
                </div>
            </section>

            {/* Color Tokens */}
            <section className="section" style={{ paddingTop: 0 }}>
                <div className="container">
                    <h2 className="h2 mb-lg">Color Tokens</h2>
                    <div className="grid grid--4">
                        {colorTokens.map((token) => (
                            <div key={token.name} className="card" style={{ padding: 'var(--space-md)' }}>
                                <div
                                    style={{
                                        width: '100%',
                                        height: 60,
                                        background: token.value,
                                        borderRadius: 'var(--radius-sm)',
                                        marginBottom: 'var(--space-md)',
                                        border: token.value === '#0F1720' ? '1px solid var(--bg-elev-2)' : 'none'
                                    }}
                                />
                                <code style={{ fontSize: 'var(--tiny)', color: 'var(--muted)' }}>
                                    {token.name}
                                </code>
                                <div className="text-primary" style={{ fontSize: 'var(--small)', marginTop: 4 }}>
                                    {token.label}
                                </div>
                                <div className="text-secondary" style={{ fontSize: 'var(--tiny)' }}>
                                    {token.value}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Typography */}
            <section className="section section--dark">
                <div className="container">
                    <h2 className="h2 mb-lg">Typography</h2>
                    <div className="card">
                        {typographyScale.map((item, index) => (
                            <div
                                key={item.name}
                                style={{
                                    padding: 'var(--gap)',
                                    borderBottom: index < typographyScale.length - 1 ? '1px solid var(--bg-elev-2)' : 'none'
                                }}
                            >
                                <div className="flex-between mb-sm" style={{ flexWrap: 'wrap', gap: 'var(--space-sm)' }}>
                                    <span className="text-accent" style={{ fontWeight: 600 }}>{item.name}</span>
                                    <code style={{ fontSize: 'var(--tiny)', color: 'var(--muted)' }}>{item.size}</code>
                                </div>
                                <div
                                    style={{
                                        fontSize: item.size,
                                        fontWeight: item.name.startsWith('H') ? 600 : 400,
                                        lineHeight: item.name.startsWith('H') ? 1.1 : 1.6
                                    }}
                                >
                                    {item.sample}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Buttons */}
            <section className="section">
                <div className="container">
                    <h2 className="h2 mb-lg">Buttons</h2>

                    <div className="card mb-lg">
                        <h4 className="h4 mb-md">Variants</h4>
                        <div className="flex gap-md" style={{ flexWrap: 'wrap' }}>
                            <button className="btn btn--primary">Primary</button>
                            <button className="btn btn--secondary">Secondary</button>
                            <button className="btn btn--ghost">Ghost</button>
                        </div>
                    </div>

                    <div className="card mb-lg">
                        <h4 className="h4 mb-md">Sizes</h4>
                        <div className="flex gap-md" style={{ flexWrap: 'wrap', alignItems: 'center' }}>
                            <button className="btn btn--primary btn--sm">Small</button>
                            <button className="btn btn--primary">Default</button>
                            <button className="btn btn--primary btn--lg">Large</button>
                        </div>
                    </div>

                    <div className="card">
                        <h4 className="h4 mb-md">With Icons</h4>
                        <div className="flex gap-md" style={{ flexWrap: 'wrap' }}>
                            <button className="btn btn--primary">
                                Continue
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
                                    <path d="M3 8h10m-4-4 4 4-4 4" />
                                </svg>
                            </button>
                            <button className="btn btn--secondary">
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
                                    <path d="M12.5 8.5v4a1 1 0 0 1-1 1h-8a1 1 0 0 1-1-1v-8a1 1 0 0 1 1-1h4m0-2h5v5m-5-5 5 5" />
                                </svg>
                                External Link
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Cards */}
            <section className="section section--dark">
                <div className="container">
                    <h2 className="h2 mb-lg">Cards</h2>
                    <div className="grid grid--3">
                        <div className="card">
                            <h4 className="h4 mb-sm">Basic Card</h4>
                            <p className="text-secondary text-small">
                                A simple card with hover animation.
                            </p>
                        </div>
                        <div className="card text-center">
                            <span style={{ fontSize: '2rem', marginBottom: 'var(--space-sm)', display: 'block' }}>📊</span>
                            <h4 className="h4 mb-sm">Icon Card</h4>
                            <p className="text-secondary text-small">
                                Card with centered icon.
                            </p>
                        </div>
                        <div className="card">
                            <div className="metric__value" style={{ fontSize: 'var(--h2)' }}>42%</div>
                            <div className="text-secondary text-small">Metric Card</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Form Elements */}
            <section className="section">
                <div className="container">
                    <h2 className="h2 mb-lg">Form Elements</h2>
                    <div className="card" style={{ maxWidth: 500 }}>
                        <div className="form-group">
                            <label className="form-label">Text Input</label>
                            <input type="text" className="form-input" placeholder="Enter text..." />
                        </div>
                        <div className="form-group">
                            <label className="form-label form-label--required">Required Input</label>
                            <input type="text" className="form-input" placeholder="Required field..." />
                        </div>
                        <div className="form-group">
                            <label className="form-label">Select</label>
                            <select className="form-select">
                                <option>Option 1</option>
                                <option>Option 2</option>
                                <option>Option 3</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label className="form-label">Textarea</label>
                            <textarea className="form-textarea" placeholder="Enter message..." />
                        </div>
                        <div className="form-group">
                            <label className="form-label">Error State</label>
                            <input type="text" className="form-input form-input--error" placeholder="Invalid input" />
                            <p className="form-error">This field has an error</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Back */}
            <section className="section section--dark">
                <div className="container text-center">
                    <Link to="/" className="btn btn--secondary">
                        ← Back to Home
                    </Link>
                </div>
            </section>
        </>
    )
}
