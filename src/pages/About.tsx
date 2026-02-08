import { Target, Users, Lightbulb, Shield, Sparkles, Zap, Globe, ChevronDown } from 'lucide-react'
import { useState, useEffect } from 'react'
import { updatePageSEO } from '../utils/seo'

const values = [
    {
        icon: Target,
        title: 'Excellence',
        description: 'We strive for excellence in everything we do, delivering quality-driven solutions.'
    },
    {
        icon: Users,
        title: 'Partnership',
        description: 'We treat every client relationship as a true partnership built on trust.'
    },
    {
        icon: Lightbulb,
        title: 'Innovation',
        description: 'We embrace new technologies to solve complex business challenges.'
    },
    {
        icon: Shield,
        title: 'Integrity',
        description: 'We operate with transparency, honesty, and ethical business practices.'
    },
]

const metrics = [
    { number: '2+', label: 'Years of Experience', icon: Zap },
    { number: '50+', label: 'Projects Delivered', icon: Target },
    { number: '2', label: 'Products Built', icon: Sparkles },
    { number: '100%', label: 'Client Satisfaction', icon: Users },
]

function FAQItem({ question, answer }: { question: string, answer: string }) {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className="faq-item">
            <button 
                className="faq-question"
                onClick={() => setIsOpen(!isOpen)}
                aria-expanded={isOpen}
            >
                <span>{question}</span>
                <ChevronDown 
                    size={20} 
                    style={{ 
                        transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                        transition: 'transform 0.3s ease'
                    }} 
                />
            </button>
            {isOpen && (
                <div className="faq-answer">
                    <p>{answer}</p>
                </div>
            )}
        </div>
    )
}

export default function About() {
    const faqs = [
        {
            question: "When was Global Tech Solutions founded?",
            answer: "Global Tech Solutions was founded in 2024 as a modern product and technology company focused on building scalable digital solutions and operating our own platforms."
        },
        {
            question: "What makes Global Tech Solutions different from other software companies?",
            answer: "We are both a service provider and product builder. We actively develop and operate our own platforms (BoomGhoom and ConnectCRM), which gives us real-world product experience that benefits our client projects."
        },
        {
            question: "Where is Global Tech Solutions located?",
            answer: "Global Tech Solutions is based in Lucknow, Uttar Pradesh, India. We serve clients across India and work with businesses globally through remote collaboration."
        },
        {
            question: "What industries do you serve?",
            answer: "We work across multiple industries including technology startups, e-commerce, healthcare, education, finance, and enterprise businesses requiring custom software solutions."
        }
    ]

    useEffect(() => {
        // Update page SEO
        updatePageSEO({
            title: 'About Global Tech Solutions - Technology Company Building Intelligent Digital Solutions',
            description: 'Founded in 2024, Global Tech Solutions is a modern product and technology company. We have delivered 50+ projects and built products like BoomGhoom and ConnectCRM. Based in Lucknow, India.',
            keywords: 'technology company India, software development team, product builders, Global Tech Solutions about, IT company Lucknow',
            canonical: 'https://globaltechsolutions.in/about'
        })

        const script = document.createElement('script')
        script.type = 'application/ld+json'
        script.text = JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqs.map(faq => ({
                "@type": "Question",
                "name": faq.question,
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": faq.answer
                }
            }))
        })
        document.head.appendChild(script)
        return () => {
            document.head.removeChild(script)
        }
    }, [])

    return (
        <div className="about-premium-wrapper">
            {/* Hero Section */}
            <section className="about-premium-hero">
                <div className="container">
                    <div className="about-premium-hero__content">
                        <div className="about-premium-hero__badge">
                            <Sparkles size={16} />
                            <span>About Global Tech Solutions</span>
                        </div>
                        <h1 className="about-premium-hero__title">
                            Building intelligent digital experiences
                        </h1>
                        <p className="about-premium-hero__description">
                            We believe technology should empower businesses, not complicate them.
                        </p>
                    </div>
                </div>
            </section>

            {/* Our Story */}
            <section className="about-premium-story">
                <div className="container">
                    <div className="about-premium-story__grid">
                        <div className="about-premium-story__content">
                            <h2 className="about-premium-story__title">Our Story</h2>
                            <div className="about-premium-story__text">
                                <p>
                                    Founded in 2024, Global Tech Solutions is a modern product and technology company focused on building scalable digital solutions. What started as a small engineering team has evolved into a full-service IT company delivering reliable software solutions and building its own products.
                                </p>
                                <p>
                                    Over the past two years, we have successfully delivered 50+ projects across startups, SMEs, and growing enterprises. Alongside client services, we actively design, build, and operate our own platforms including BoomGhoom and ConnectCRM.
                                </p>
                            </div>
                        </div>
                        
                        <div className="about-premium-story__mission">
                            <div className="about-premium-mission-card">
                                <h3 className="about-premium-mission-card__title">Our Mission</h3>
                                <p className="about-premium-mission-card__text">
                                    To simplify technology for businesses by building secure, scalable, and meaningful digital solutions.
                                </p>
                            </div>
                            <div className="about-premium-mission-card">
                                <h3 className="about-premium-mission-card__title">Our Vision</h3>
                                <p className="about-premium-mission-card__text">
                                    To become a trusted technology partner for companies worldwide by delivering quality-driven engineering and innovative products.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Key Metrics */}
            <section className="about-premium-metrics">
                <div className="container">
                    <div className="about-premium-metrics__header">
                        <h2 className="about-premium-metrics__title">Key Highlights</h2>
                        <p className="about-premium-metrics__description">
                            Numbers that reflect our commitment to excellence and growth.
                        </p>
                    </div>
                    <div className="about-premium-metrics__grid">
                        {metrics.map((metric, index) => {
                            const Icon = metric.icon
                            return (
                                <div key={index} className="about-premium-metric-card">
                                    <div className="about-premium-metric-card__icon">
                                        <Icon size={24} />
                                    </div>
                                    <div className="about-premium-metric-card__number">{metric.number}</div>
                                    <div className="about-premium-metric-card__label">{metric.label}</div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </section>

            {/* What We Do */}
            <section className="about-premium-services">
                <div className="container">
                    <div className="about-premium-services__content">
                        <h2 className="about-premium-services__title">What We Do</h2>
                        <p className="about-premium-services__description">
                            At Global Tech Solutions, we design, build, and maintain software that helps businesses operate smarter. 
                            Alongside client services, we actively develop and manage our own platforms including BoomGhoom and ConnectCRM, 
                            allowing us to think not only as service providers but also as product builders.
                        </p>
                        <div className="about-premium-services__highlights">
                            <div className="about-premium-highlight">
                                <Globe size={20} />
                                <span>Expertise across web, mobile, cloud, and automation</span>
                            </div>
                            <div className="about-premium-highlight">
                                <Sparkles size={20} />
                                <span>2 in-house products serving real users</span>
                            </div>
                            <div className="about-premium-highlight">
                                <Target size={20} />
                                <span>50+ successful project deliveries</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Values */}
            <section className="about-premium-values">
                <div className="container">
                    <div className="about-premium-values__header">
                        <h2 className="about-premium-values__title">Our Values</h2>
                        <p className="about-premium-values__description">
                            The principles that guide everything we do.
                        </p>
                    </div>
                    <div className="about-premium-values__grid">
                        {values.map((value, index) => {
                            const Icon = value.icon
                            return (
                                <div key={index} className="about-premium-value-card">
                                    <div className="about-premium-value-card__icon">
                                        <Icon size={24} />
                                    </div>
                                    <h3 className="about-premium-value-card__title">{value.title}</h3>
                                    <p className="about-premium-value-card__description">{value.description}</p>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="section faq-section">
                <div className="container">
                    <div className="faq-header">
                        <span className="faq-eyebrow">FREQUENTLY ASKED QUESTIONS</span>
                        <h2 className="faq-title">Learn more about Global Tech Solutions</h2>
                    </div>
                    <div className="faq-list">
                        {faqs.map((faq, index) => (
                            <FAQItem key={index} question={faq.question} answer={faq.answer} />
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}