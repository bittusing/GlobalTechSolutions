import { Link } from 'react-router-dom'

interface BlogCardProps {
    title: string
    excerpt: string
    date: string
    slug: string
    image?: string
    category?: string
}

export default function BlogCard({
    title,
    excerpt,
    date,
    slug,
    image,
    category
}: BlogCardProps) {
    return (
        <article className="blog-card">
            <Link to={`/blog/${slug}`}>
                <div className="blog-card__image">
                    {image ? (
                        <img src={image} alt="" loading="lazy" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    ) : (
                        <div
                            style={{
                                width: '100%',
                                height: '100%',
                                background: 'linear-gradient(135deg, var(--bg-elev-2) 0%, var(--bg-elev-3) 100%)'
                            }}
                        />
                    )}
                </div>

                <div className="blog-card__content">
                    <div className="blog-card__meta">
                        {category && <span>{category} • </span>}
                        <time dateTime={date}>{new Date(date).toLocaleDateString('en-US', {
                            month: 'short',
                            day: 'numeric',
                            year: 'numeric'
                        })}</time>
                    </div>

                    <h3 className="blog-card__title">{title}</h3>
                    <p className="blog-card__excerpt">{excerpt}</p>
                </div>
            </Link>
        </article>
    )
}
