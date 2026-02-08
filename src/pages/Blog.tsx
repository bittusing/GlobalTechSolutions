import BlogCard from '../components/BlogCard'
import { Link } from 'react-router-dom'

const blogPosts = [
    {
        title: 'Building Scalable Microservices with Node.js',
        excerpt: 'Learn how to design and deploy microservices that handle millions of requests while maintaining developer productivity.',
        date: '2025-01-05',
        slug: 'scalable-microservices-nodejs',
        category: 'Engineering'
    },
    {
        title: 'The Future of AI in Enterprise Software',
        excerpt: 'How AI agents are revolutionizing business operations and decision-making across industries.',
        date: '2025-01-01',
        slug: 'ai-enterprise-software',
        category: 'AI/ML'
    },
    {
        title: 'From Startup to Scale: Our Journey',
        excerpt: 'Lessons learned growing Global Tech Solutions from a two-person team to a product company serving global clients.',
        date: '2024-12-20',
        slug: 'startup-to-scale',
        category: 'Company'
    },
    {
        title: 'Modern CSS Techniques for Production Apps',
        excerpt: 'Container queries, cascade layers, and other CSS features you should be using in 2025.',
        date: '2024-12-15',
        slug: 'modern-css-production',
        category: 'Frontend'
    },
    {
        title: 'Building a Real-Time Event Platform',
        excerpt: 'Technical deep-dive into how we built BoomGhoom\'s real-time map-based discovery system.',
        date: '2024-12-10',
        slug: 'realtime-event-platform',
        category: 'Product'
    },
    {
        title: 'Why We Chose TypeScript for Everything',
        excerpt: 'How TypeScript transformed our development workflow and improved code quality across the board.',
        date: '2024-12-05',
        slug: 'typescript-everything',
        category: 'Engineering'
    },
]

const categories = ['All', 'Engineering', 'AI/ML', 'Company', 'Frontend', 'Product']

export default function Blog() {
    return (
        <>
            {/* Header */}
            <section className="section" style={{ paddingTop: 'calc(80px + var(--gap-xl))' }}>
                <div className="container">
                    <div className="text-center mb-xl">
                        <h1 className="h1 mb-md">Blog</h1>
                        <p style={{ maxWidth: 600, margin: '0 auto' }}>
                            Insights, tutorials, and updates from the Global Tech Solutions team.
                            We share what we learn building products and serving clients.
                        </p>
                    </div>

                    {/* Categories */}
                    <div className="flex-center gap-sm mb-xl" style={{ flexWrap: 'wrap' }}>
                        {categories.map((category, index) => (
                            <button
                                key={category}
                                className={`btn btn--ghost ${index === 0 ? 'text-accent' : ''}`}
                                style={{
                                    background: index === 0 ? 'var(--bg-elev-2)' : undefined,
                                    fontSize: 'var(--small)'
                                }}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Blog Grid */}
            <section className="section" style={{ paddingTop: 0 }}>
                <div className="container">
                    <div className="grid grid--3">
                        {blogPosts.map((post) => (
                            <BlogCard key={post.slug} {...post} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Newsletter */}
            <section className="section section--dark">
                <div className="container">
                    <div className="card" style={{ maxWidth: 600, margin: '0 auto', textAlign: 'center' }}>
                        <h2 className="h3 mb-md">Subscribe to Our Newsletter</h2>
                        <p className="text-secondary mb-lg">
                            Get the latest articles and updates delivered to your inbox.
                        </p>
                        <form
                            onSubmit={(e) => e.preventDefault()}
                            style={{ display: 'flex', gap: 'var(--space-sm)', flexWrap: 'wrap' }}
                        >
                            <input
                                type="email"
                                placeholder="your@email.com"
                                className="form-input"
                                style={{ flex: 1, minWidth: 200 }}
                            />
                            <button type="submit" className="btn btn--primary">
                                Subscribe
                            </button>
                        </form>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="section">
                <div className="container text-center">
                    <h2 className="h2 mb-md">Want to Contribute?</h2>
                    <p style={{ maxWidth: 500, margin: '0 auto var(--gap-lg)' }}>
                        We're always looking for guest writers to share their expertise.
                    </p>
                    <Link to="/contact" className="btn btn--secondary btn--lg">
                        Get in Touch
                    </Link>
                </div>
            </section>
        </>
    )
}
