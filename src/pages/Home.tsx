import { Link } from 'react-router-dom'
import { ArrowRight, ChevronDown } from 'lucide-react'
import { useState, useEffect } from 'react'
import { updatePageSEO } from '../utils/seo'
import Hero from '../components/Hero'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import Marquee from '../components/ui/Marquee'
import ServicePreviewCard from '../components/ServicePreviewCard'
import ClientsWork from '../components/ClientsWork'
import boomghoomLogo from '../assets/boomghoom_logo.png'
import boomghoomPoster from '../assets/boomghoom_poster.png'
import connectCrmLogo from '../assets/ConnectCrm_logo.webp'
import crmVideo from '../assets/CRM_Video.mp4'

function AnimatedSection({ children, className = '', delay = 0, id }: { children: React.ReactNode, className?: string, delay?: number, id?: string }) {
    const { ref, isVisible } = useScrollAnimation(0.1)

    return (
        <section
            ref={ref}
            id={id}
            className={`${className} ${isVisible ? 'animate-fade-in' : ''}`}
            style={{ animationDelay: `${delay}s` }}
        >
            {children}
        </section>
    )
}

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

export default function Home() {
    const faqs = [
        {
            question: "What services does Global Tech Solutions offer?",
            answer: "Global Tech Solutions provides custom software development, web and mobile application development, AI automation solutions, CRM and ERP systems, cloud infrastructure, and ongoing maintenance and support services."
        },
        {
            question: "How long does it take to build a custom software solution?",
            answer: "Project timelines vary based on complexity and requirements. Typically, a standard web application takes 8-12 weeks, while complex enterprise solutions may take 3-6 months. We provide detailed timelines during the initial consultation."
        },
        {
            question: "Do you work with startups or only established companies?",
            answer: "We work with businesses of all sizes including startups, SMEs, and enterprises. We have successfully delivered 50+ projects across various industries and company stages."
        },
        {
            question: "What is your development process?",
            answer: "We follow an agile development methodology with clear milestones, regular updates, and iterative feedback cycles. Our process includes discovery, design, development, testing, deployment, and ongoing support."
        },
        {
            question: "Can you help maintain and update existing software?",
            answer: "Yes, we offer comprehensive maintenance and support services including bug fixes, security updates, performance optimization, and feature enhancements for existing applications."
        }
    ]

    useEffect(() => {
        // Update page SEO
        updatePageSEO({
            title: 'Global Tech Solutions - Custom Software Development & AI Solutions | Product Engineering Company',
            description: 'Global Tech Solutions is a technology company specializing in custom software development, AI automation, web and mobile applications. Builders of BoomGhoom and ConnectCRM. 50+ projects delivered across India.',
            keywords: 'custom software development, AI automation, web development, mobile app development, product engineering, CRM solutions, Lucknow, India',
            canonical: 'https://globaltechsolutions.in/'
        })

        // Add FAQ Schema to page
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
        <>
            {/* Hero Section */}
            <Hero
                headline={"Global Tech Solution – Software Company in Lucknow"}
                subheadline="We design and build scalable digital solutions across AI, web, automation, and cloud systems."
                primaryCta={{
                    label: "Partner with Us",
                    href: "/contact"
                }}
                secondaryCta={{
                    label: "View Products",
                    href: "/products"
                }}
            /> {/* Products Section - Premium Redesign */}
            <AnimatedSection className="section section--products-premium" id="products">
                <div className="container products-premium-container">
                    {/* Section Header */}
                    <div className="products-premium-header">
                        <span className="products-premium-eyebrow">OUR PRODUCTS</span>
                        <h2 className="products-premium-title">Take a look at our Products</h2>
                        <p className="products-premium-description">
                            Alongside client solutions, we design, build, and operate our own platforms used by teams and communities.
                        </p>
                    </div>

                    {/* Product Showcase - Zig-zag Layout */}
                    <div className="products-premium-showcase">
                        {/* BoomGhoom - Image Left, Content Right */}
                        <div className="product-premium-card product-premium-card--boomghoom">
                            <div className="product-premium-visual">
                                <div className="product-premium-image-container">
                                    <img
                                        src={boomghoomPoster}
                                        alt="BoomGhoom mobile app interface showing real-time social discovery features and live activity feed"
                                        loading="lazy"
                                        decoding="async"
                                        className="product-premium-image"
                                        width="1466"
                                        height="1466"
                                    />
                                </div>
                            </div>
                            <div className="product-premium-content">
                                <div className="product-premium-title-group">
                                    <img
                                        src={boomghoomLogo}
                                        alt="BoomGhoom - Real-time social discovery platform logo"
                                        loading="lazy"
                                        decoding="async"
                                        className="product-premium-logo product-premium-logo--round"
                                        width="118"
                                        height="118"
                                    />
                                    <h3 className="product-premium-name">BoomGhoom</h3>
                                </div>
                                <p className="product-premium-description">
                                    A real-time social discovery platform that helps people explore live activities happening around them.
                                </p>
                                <a
                                    href="https://www.boomghoom.com/"
                                    className="product-premium-cta"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Visit BoomGhoom
                                </a>
                            </div>
                        </div>

                        {/* ConnectCRM - Content Left, Image Right */}
                        <div className="product-premium-card product-premium-card--codeconnect product-premium-card--reversed">
                            <div className="product-premium-content">
                                <div className="product-premium-title-group">
                                    <img
                                        src={connectCrmLogo}
                                        alt="ConnectCRM - Business CRM platform logo"
                                        loading="lazy"
                                        decoding="async"
                                        className="product-premium-logo"
                                        width="127"
                                        height="127"
                                    />
                                    <h3 className="product-premium-name">ConnectCRM</h3>
                                </div>
                                <p className="product-premium-description">
                                    A business CRM platform designed to manage leads, teams, and workflows from a single system.
                                </p>
                                <a
                                    href="https://crm.page.codeconnect.in/"
                                    className="product-premium-cta"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Visit ConnectCRM
                                </a>
                            </div>
                            <div className="product-premium-visual">
                                <div className="product-premium-image-container">
                                    <video
                                        src={crmVideo}
                                        autoPlay
                                        muted
                                        loop
                                        playsInline
                                        preload="metadata"
                                        className="product-premium-video"
                                        aria-label="ConnectCRM dashboard demonstration"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </AnimatedSection>

            {/* Services Preview */}
            <AnimatedSection className="section">
                <div className="container">
                    <div className="services-preview">
                        <div className="services-preview__content">
                            <span className="services-preview__eyebrow">SERVICES</span>
                            <h2 className="services-preview__heading">Engineering services built for modern businesses</h2>
                            <p className="services-preview__description">
                                We deliver end to end engineering solutions focused on quality, performance, and long term scalability.
                            </p>
                            <Link to="/services" className="btn btn--secondary">
                                View all services
                                <ArrowRight size={14} />
                            </Link>
                        </div>
                        <div className="services-preview__marquee">
                            <Marquee pauseOnHover={true} speed={35}>
                                <ServicePreviewCard title="Custom Development" />
                                <ServicePreviewCard title="Web and Mobile" />
                                <ServicePreviewCard title="AI & Automation" />
                                <ServicePreviewCard title="Technical Consulting" />
                            </Marquee>
                        </div>
                    </div>
                </div>
            </AnimatedSection>

            {/* CTA Section - Floating Card */}
            <AnimatedSection className="section cta-section">
                <div className="container">
                    <div className="cta-section__container">
                        <div className="cta-section__content">
                            <span className="cta-section__eyebrow">READY TO START</span>
                            <h2 className="cta-section__heading">Let's build something meaningful together</h2>
                            <p className="cta-section__description">
                                Tell us about your idea, product, or business challenge. Our team will help you plan the right solution.
                            </p>
                            <Link to="/contact" className="cta-section__button">
                                Get in touch →
                            </Link>
                        </div>
                    </div>
                </div>
            </AnimatedSection>

            {/* Clients & Work Section - Premium Editorial Showcase */}
            <ClientsWork />

            {/* FAQ Section */}
            <AnimatedSection className="section faq-section">
                <div className="container">
                    <div className="faq-header">
                        <span className="faq-eyebrow">FREQUENTLY ASKED QUESTIONS</span>
                        <h2 className="faq-title">Common questions about our services</h2>
                        <p className="faq-description">
                            Find answers to the most common questions about working with Global Tech Solutions.
                        </p>
                    </div>
                    <div className="faq-list">
                        {faqs.map((faq, index) => (
                            <FAQItem key={index} question={faq.question} answer={faq.answer} />
                        ))}
                    </div>
                </div>
            </AnimatedSection>
        </>
    )
}
