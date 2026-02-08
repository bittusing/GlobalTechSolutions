import { Link } from 'react-router-dom'

interface ProductCardProps {
    title: string
    tagline: string
    description: string
    features: string[]
    ctaLabel: string
    ctaHref: string
    external?: boolean
    image?: string
    reversed?: boolean
}

export default function ProductCard({
    title,
    tagline,
    description,
    features,
    ctaLabel,
    ctaHref,
    external = false,
    image,
    reversed = false
}: ProductCardProps) {
    const imageElement = (
        <div className="product-card__image">
            {image ? (
                <img src={image} alt={`${title} preview`} loading="lazy" />
            ) : (
                <div
                    style={{
                        width: '100%',
                        height: '100%',
                        background: 'linear-gradient(135deg, var(--bg-elev-2) 0%, var(--bg-elev-3) 100%)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'var(--muted)',
                        fontSize: 'var(--h3)'
                    }}
                >
                    {title}
                </div>
            )}
        </div>
    )

    const contentElement = (
        <div className="product-card__content">
            <span className="text-accent text-small mb-sm" style={{ display: 'block', fontSize: 'var(--small)' }}>
                {tagline}
            </span>
            <h3 className="product-card__title h2">{title}</h3>
            <p className="product-card__description">{description}</p>

            <ul className="product-card__features">
                {features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                ))}
            </ul>

            {external ? (
                <a
                    href={ctaHref}
                    className="btn btn--primary"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    {ctaLabel}
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                        <path d="M12.5 8.5v4a1 1 0 0 1-1 1h-8a1 1 0 0 1-1-1v-8a1 1 0 0 1 1-1h4m0-2h5v5m-5-5 5 5"
                            stroke="currentColor" strokeWidth="1.5" fill="none" />
                    </svg>
                </a>
            ) : (
                <Link to={ctaHref} className="btn btn--primary">
                    {ctaLabel}
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <path d="M3 8h10m-4-4 4 4-4 4" />
                    </svg>
                </Link>
            )}
        </div>
    )

    return (
        <article className="product-card">
            <div className="product-card__inner" style={{ direction: reversed ? 'rtl' : 'ltr' }}>
                <div style={{ direction: 'ltr' }}>{imageElement}</div>
                <div style={{ direction: 'ltr' }}>{contentElement}</div>
            </div>
        </article>
    )
}
