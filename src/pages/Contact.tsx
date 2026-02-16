import ContactForm from '../components/ContactForm'
import { Mail, Phone, Clock, ArrowRight, Sparkles, ChevronDown } from 'lucide-react'
import { useState, useEffect } from 'react'
import { updatePageSEO } from '../utils/seo'

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

export default function Contact() {
    const faqs = [
        {
            question: "What is the best way to reach Global Tech Solutions?",
            answer: "You can reach us via email at Globaltechsolutions.up@gmail.com, call us at +91 73880 10007, +91 90444 71115, or fill out the contact form on this page. We typically respond within 2-4 hours during business hours."
        },
        {
            question: "What information should I include in my inquiry?",
            answer: "Please share details about your project including goals, timeline, budget range, and any specific requirements. The more information you provide, the better we can understand and address your needs."
        },
        {
            question: "Do you offer free consultations?",
            answer: "Yes, we offer a free initial consultation to understand your requirements and discuss how we can help. Contact us to schedule a call with our team."
        },
        {
            question: "What are your business hours?",
            answer: "We are available Monday to Friday from 9:00 AM to 6:00 PM IST, and Saturday from 10:00 AM to 2:00 PM IST. For urgent matters, you can email us anytime."
        }
    ]

    useEffect(() => {
        // Update page SEO
        updatePageSEO({
            title: 'Contact Global Tech Solutions - Get in Touch for Software Development Services',
            description: 'Contact Global Tech Solutions for custom software development, web and mobile applications, AI solutions. Email: Globaltechsolutions.up@gmail.com, Phone: +91 73880 10007. Free consultation available.',
            keywords: 'contact Global Tech Solutions, software development inquiry, IT services contact, Lucknow',
            canonical: 'https://globaltechsolutions.in/contact'
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
        <div className="contact-premium-wrapper">
            {/* Hero Section */}
            <section className="contact-premium-hero">
                <div className="container">
                    <div className="contact-premium-hero__content">
                        <div className="contact-premium-hero__badge">
                            <Sparkles size={16} />
                            <span>Let's Build Something Amazing</span>
                        </div>
                        <h1 className="contact-premium-hero__title">
                            Ready to start your next project?
                        </h1>
                        <p className="contact-premium-hero__description">
                            Based in Lucknow, we provide IT services including website development, custom software solutions, and digital consulting. 
                            Whether you have a clear vision or just an idea, we're here to help bring it to life.
                        </p>
                    </div>
                </div>
            </section>

            {/* Main Contact Section */}
            <section className="contact-premium-main">
                <div className="container">
                    <div className="contact-premium-grid">
                        {/* Contact Form */}
                        <div className="contact-premium-form">
                            <div className="contact-premium-form__header">
                                <h2 className="contact-premium-form__title">Send us a message</h2>
                                <p className="contact-premium-form__description">
                                    Fill out the form below and we'll get back to you within 24 hours.
                                </p>
                            </div>
                            <div className="contact-premium-form__container">
                                <ContactForm />
                            </div>
                        </div>

                        {/* Contact Info */}
                        <div className="contact-premium-info">
                            <div className="contact-premium-info__header">
                                <h3 className="contact-premium-info__title">Get in touch</h3>
                                <p className="contact-premium-info__description">
                                    Located in Lucknow, Uttar Pradesh, we're ready to help with your software development needs. Here are all the ways you can contact us.
                                </p>
                            </div>

                            <div className="contact-premium-info__items">
                                <div className="contact-premium-info__item">
                                    <div className="contact-premium-info__icon">
                                        <Mail size={20} />
                                    </div>
                                    <div className="contact-premium-info__content">
                                        <h4 className="contact-premium-info__label">Email</h4>
                                        <a href="mailto:Globaltechsolutions.up@gmail.com" className="contact-premium-info__value">
                                            Globaltechsolutions.up@gmail.com
                                        </a>
                                        <p className="contact-premium-info__note">We typically respond within 2-4 hours</p>
                                    </div>
                                </div>

                                <div className="contact-premium-info__item">
                                    <div className="contact-premium-info__icon">
                                        <Phone size={20} />
                                    </div>
                                    <div className="contact-premium-info__content">
                                        <h4 className="contact-premium-info__label">Phone</h4>
                                        <a href="tel:+917388010007" className="contact-premium-info__value">
                                            +91 73880 10007
                                        </a>
                                        <a href="tel:+919044471115" className="contact-premium-info__value" style={{ display: 'block', marginTop: '4px' }}>
                                            +91 90444 71115
                                        </a>
                                        <p className="contact-premium-info__note">Available Mon-Fri, 9 AM - 6 PM IST</p>
                                    </div>
                                </div>

                                <div className="contact-premium-info__item">
                                    <div className="contact-premium-info__icon">
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                                            <circle cx="12" cy="10" r="3"></circle>
                                        </svg>
                                    </div>
                                    <div className="contact-premium-info__content">
                                        <h4 className="contact-premium-info__label">Address</h4>
                                        <div className="contact-premium-info__value">
                                            9/304 Old Malhar Sahara States<br />
                                            Jankipuram, Lucknow 226021
                                        </div>
                                        <p className="contact-premium-info__note">Uttar Pradesh, India</p>
                                    </div>
                                </div>


                                <div className="contact-premium-info__item">
                                    <div className="contact-premium-info__icon">
                                        <Clock size={20} />
                                    </div>
                                    <div className="contact-premium-info__content">
                                        <h4 className="contact-premium-info__label">Business Hours</h4>
                                        <div className="contact-premium-info__value">
                                            Monday - Friday: 9:00 AM - 6:00 PM<br />
                                            Saturday: 10:00 AM - 2:00 PM
                                        </div>
                                        <p className="contact-premium-info__note">Indian Standard Time (IST)</p>
                                    </div>
                                </div>
                            </div>

                            {/* Quick Actions */}
                            <div className="contact-premium-actions">
                                <h4 className="contact-premium-actions__title">Quick Actions</h4>
                                <div className="contact-premium-actions__buttons">
                                    <a href="mailto:Globaltechsolutions.up@gmail.com" className="contact-premium-action-btn">
                                        <Mail size={16} />
                                        <span>Send Email</span>
                                        <ArrowRight size={14} />
                                    </a>
                                    <a href="tel:+917388010007" className="contact-premium-action-btn">
                                        <Phone size={16} />
                                        <span>Call Now</span>
                                        <ArrowRight size={14} />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Map Section */}
            <section className="contact-premium-map">
                <div className="container">
                    <div className="contact-premium-map__header">
                        <h2 className="contact-premium-map__title">Visit Our Office in Lucknow</h2>
                        <p className="contact-premium-map__description">
                            Our office is located in Jankipuram, Lucknow. We welcome clients to visit us for in-person consultations and project discussions.
                        </p>
                    </div>
                    <div className="contact-premium-map__container">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.4982!2d80.9!3d26.9!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjbCsDU0JzAwLjAiTiA4MMKwNTQnMDAuMCJF!5e0!3m2!1sen!2sin!4v1234567890"
                            width="100%"
                            height="450"
                            style={{ border: 0, borderRadius: '12px' }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Global Tech Solution Office Location in Lucknow"
                        ></iframe>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="section faq-section">
                <div className="container">
                    <div className="faq-header">
                        <span className="faq-eyebrow">FREQUENTLY ASKED QUESTIONS</span>
                        <h2 className="faq-title">Questions about contacting us</h2>
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
