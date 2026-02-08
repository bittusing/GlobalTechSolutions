import { Link } from 'react-router-dom'
import { ChevronDown } from 'lucide-react'
import { useState, useEffect } from 'react'
import { updatePageSEO } from '../utils/seo'

// Import assets
import softwareDev from '../assets/softwaredevelopment.png'
import websiteDev from '../assets/webistedevelopment.png'
import mobileDev from '../assets/mobileappdevelopment.png'
import domainHosting from '../assets/domainandhosting.png'
import crmErp from '../assets/crmanderp.png'
import maintenance from '../assets/Maintenance.png'
import testing from '../assets/testing.png'
import moreServices from '../assets/more.png'

interface Service {
    image: string
    title: string
    description: string
    link: string
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

const services: Service[] = [
    {
        image: softwareDev,
        title: 'Custom Software Development',
        description: 'We design and develop powerful custom software solutions built specifically for your business needs. From billing systems and inventory management to complete enterprise platforms, our solutions are secure, scalable and optimized for long term performance. Every product is crafted to simplify operations and support business growth.',
        link: '/contact'
    },
    {
        image: websiteDev,
        title: 'Website Design and Development',
        description: 'We create modern and responsive websites that represent your brand and convert visitors into customers. Our websites are fast, user friendly and optimized for all devices, helping your business build a strong digital presence and drive consistent growth online.',
        link: '/contact'
    },
    {
        image: mobileDev,
        title: 'Mobile Application Development',
        description: 'We build high quality Android and iOS mobile applications that transform ideas into real world products. Whether it is a startup application or a business mobility solution, our apps are designed for performance, security and smooth user experience.',
        link: '/contact'
    },
    {
        image: domainHosting,
        title: 'Domain and Hosting Solutions',
        description: 'We provide reliable domain registration and secure hosting services to keep your business online without interruption. With stable servers, data protection and continuous monitoring, we ensure your website and applications remain fast, safe and always accessible.',
        link: '/contact'
    },
    {
        image: crmErp,
        title: 'ERP and CRM Solutions',
        description: 'We develop customized ERP and CRM systems to streamline operations, manage customers and improve decision making. Our solutions help businesses automate workflows, track performance and maintain complete control over data and processes.',
        link: '/contact'
    },
    {
        image: maintenance,
        title: 'Maintenance and Support Services',
        description: 'We offer reliable maintenance and support services to ensure your software, website and applications run smoothly at all times. From performance optimization to security updates and regular monitoring, we take care of your systems so you can focus on your business.',
        link: '/contact'
    },
    {
        image: testing,
        title: 'Quality Assurance and Testing',
        description: 'We ensure your software delivers flawless performance through structured testing and quality assurance processes. Our team identifies bugs, improves stability and validates functionality to guarantee a smooth and reliable experience for end users.',
        link: '/contact'
    },
    {
        image: moreServices,
        title: 'Explore More Services',
        description: 'Looking for additional IT solutions beyond our core offerings. We provide a wide range of technology services tailored to your business goals. Connect with us to discover how Global Tech Solutions can support your next digital initiative.',
        link: '/contact'
    },
]

export default function Services() {
    const faqs = [
        {
            question: "What is the typical cost of a custom software project?",
            answer: "Project costs vary based on complexity, features, and timeline. We provide detailed proposals after understanding your requirements. Contact us for a free consultation and quote."
        },
        {
            question: "Do you provide ongoing support after project delivery?",
            answer: "Yes, we offer comprehensive maintenance and support packages including bug fixes, updates, security patches, and feature enhancements to ensure your software runs smoothly."
        },
        {
            question: "Can you work with our existing technology stack?",
            answer: "Absolutely. Our team has expertise across multiple technologies and platforms. We can integrate with your existing systems or recommend the best stack for your needs."
        },
        {
            question: "How do you ensure project quality and timelines?",
            answer: "We follow agile methodology with regular sprints, testing at every stage, and continuous client communication. We provide weekly updates and maintain transparent project tracking."
        },
        {
            question: "Do you sign NDAs and protect intellectual property?",
            answer: "Yes, we sign NDAs before project discussions and ensure complete IP ownership transfer to clients upon project completion. Your ideas and data are fully protected."
        }
    ]

    useEffect(() => {
        // Update page SEO
        updatePageSEO({
            title: 'Software Development Services - Web, Mobile, AI & Cloud Solutions | Global Tech Solutions',
            description: 'Global Tech Solutions offers custom software development, web and mobile applications, AI automation, CRM/ERP solutions, cloud infrastructure, and quality assurance services. Contact us for a free consultation.',
            keywords: 'web development services, mobile app development, CRM solutions, ERP systems, AI automation, cloud infrastructure, software testing, Lucknow, India',
            canonical: 'https://globaltechsolutions.in/services'
        })

        // Add Service Schema
        const serviceSchema = {
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Software Development",
            "provider": {
                "@type": "Organization",
                "name": "Global Tech Solutions",
                "url": "https://globaltechsolutions.in"
            },
            "areaServed": "IN",
            "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Software Development Services",
                "itemListElement": services.slice(0, -1).map((service) => ({
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": service.title,
                        "description": service.description
                    }
                }))
            }
        }

        // Add FAQ Schema
        const faqSchema = {
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
        }

        const serviceScript = document.createElement('script')
        serviceScript.type = 'application/ld+json'
        serviceScript.text = JSON.stringify(serviceSchema)
        document.head.appendChild(serviceScript)

        const faqScript = document.createElement('script')
        faqScript.type = 'application/ld+json'
        faqScript.text = JSON.stringify(faqSchema)
        document.head.appendChild(faqScript)

        return () => {
            document.head.removeChild(serviceScript)
            document.head.removeChild(faqScript)
        }
    }, [])

    return (
        <div className="services-premium-wrapper">
            {/* Premium Services Section */}
            <section className="section section--services-premium">
                <div className="container services-premium-container">
                    {/* Section Header */}
                    <div className="services-premium-header">
                        <span className="services-premium-eyebrow">OUR SERVICES</span>
                        <h2 className="services-premium-title">Engineering services built for modern businesses</h2>
                        <p className="services-premium-description">
                            We partner with businesses to build digital products that matter. From concept to code, we deliver excellence.
                        </p>
                    </div>

                    {/* Services Grid */}
                    <div className="services-premium-grid">
                        {services.map((service, index) => (
                            <div key={index} className="service-premium-card">
                                {/* Image Area */}
                                <div className="service-premium-image">
                                    <div className="service-premium-image-container">
                                        <img
                                            src={service.image}
                                            alt={`${service.title} - ${service.description.substring(0, 100)}`}
                                            className="service-premium-img"
                                            loading={index < 2 ? "eager" : "lazy"}
                                            decoding="async"
                                        />
                                    </div>
                                </div>

                                {/* Content Area */}
                                <div className="service-premium-content">
                                    <h3 className="service-premium-title">{service.title}</h3>
                                    <p className="service-premium-description">{service.description}</p>
                                    <Link to={service.link} className="service-premium-cta">
                                        Discover Now
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Premium CTA Block */}
                    <div className="services-premium-cta">
                        <div className="services-premium-cta-content">
                            <h2 className="services-premium-cta-title">Looking for something specific?</h2>
                            <p className="services-premium-cta-description">
                                Tell us about your requirements and we will help you design the right solution.
                            </p>
                            <Link to="/contact" className="services-premium-cta-button">
                                Partner with Global Tech Solutions
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="section faq-section">
                <div className="container">
                    <div className="faq-header">
                        <span className="faq-eyebrow">FREQUENTLY ASKED QUESTIONS</span>
                        <h2 className="faq-title">Common questions about our services</h2>
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
