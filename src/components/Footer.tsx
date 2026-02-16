import { Link } from 'react-router-dom'
import { ArrowUpRight, Mail, MapPin } from 'lucide-react'

export default function Footer() {
    const currentYear = new Date().getFullYear()

    return (
        <footer className="footer-premium">
            <div className="container">
                {/* Main Footer Content */}
                <div className="footer-premium__main">
                    {/* Brand Section */}
                    <div className="footer-premium__brand">
                        <div className="footer-premium__logo">
                            <img 
                                src="/logo.jpeg" 
                                alt="Global Tech Solutions" 
                                decoding="async"
                                style={{ height: '50px', width: 'auto' }}
                            />
                        </div>
                        <h3 className="footer-premium__tagline">Engineering Intelligence. Building What's Next.</h3>
                        <p className="footer-premium__description">
                            Global Tech Solutions is a technology company focused on building intelligent digital products and scalable engineering solutions.
                        </p>
                        <div className="footer-premium__contact">
                            <div className="footer-premium__contact-item">
                                <MapPin size={16} />
                                <span>9/304 Old Malhar Sahara States<br />Jankipuram, Lucknow 226021<br />Uttar Pradesh, India</span>
                            </div>
                            <div className="footer-premium__contact-item">
                                <Mail size={16} />
                                <span>Globaltechsolutions.up@gmail.com</span>
                            </div>
                            <div className="footer-premium__contact-item">
                                <span>Phone: +91 73880 10007 | +91 90444 71115</span>
                            </div>
                        </div>
                    </div>

                    {/* Navigation Sections */}
                    <div className="footer-premium__nav">
                        {/* Products */}
                        <div className="footer-premium__nav-section">
                            <h4 className="footer-premium__nav-title">Products</h4>
                            <ul className="footer-premium__nav-list">
                                <li>
                                    <a href="https://www.boomghoom.com/" className="footer-premium__nav-link" target="_blank" rel="noopener noreferrer">
                                        BoomGhoom
                                        <ArrowUpRight size={14} />
                                    </a>
                                </li>
                                <li>
                                    <a href="https://crm.page.codeconnect.in/" className="footer-premium__nav-link" target="_blank" rel="noopener noreferrer">
                                        ConnectCRM
                                        <ArrowUpRight size={14} />
                                    </a>
                                </li>
                            </ul>
                        </div>

                        {/* Services */}
                        <div className="footer-premium__nav-section">
                            <h4 className="footer-premium__nav-title">Services</h4>
                            <ul className="footer-premium__nav-list">
                                <li>
                                    <Link to="/services" className="footer-premium__nav-link">
                                        Custom Development
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/services" className="footer-premium__nav-link">
                                        Web & Mobile
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/services" className="footer-premium__nav-link">
                                        AI & Automation
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        {/* Company */}
                        <div className="footer-premium__nav-section">
                            <h4 className="footer-premium__nav-title">Company</h4>
                            <ul className="footer-premium__nav-list">
                                <li>
                                    <Link to="/about" className="footer-premium__nav-link">About</Link>
                                </li>
                                <li>
                                    <Link to="/contact" className="footer-premium__nav-link">Contact</Link>
                                </li>
                                <li>
                                    <Link to="/privacy" className="footer-premium__nav-link">Privacy</Link>
                                </li>
                                <li>
                                    <Link to="/terms" className="footer-premium__nav-link">Terms</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* CTA Section */}
                <div className="footer-premium__cta">
                    <div className="footer-premium__cta-content">
                        <h3 className="footer-premium__cta-title">Ready to start your project?</h3>
                        <p className="footer-premium__cta-description">
                            Let's discuss how we can help bring your ideas to life.
                        </p>
                        <Link to="/contact" className="footer-premium__cta-button">
                            Get in touch
                        </Link>
                    </div>
                </div>

                {/* Compliance Section */}
                <div className="footer-premium__compliance">
                    <h4 className="footer-premium__compliance-title">Registered & Compliant Business</h4>
                    <div className="footer-premium__compliance-grid">
                        <div className="footer-premium__compliance-item">
                            <span className="footer-premium__compliance-label">Location</span>
                            <span className="footer-premium__compliance-value">Lucknow, Uttar Pradesh, India</span>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="footer-premium__bottom">
                    <p className="footer-premium__copyright">
                        © {currentYear} Global Tech Solutions. All rights reserved.
                    </p>
                    <div className="footer-premium__links">
                        <Link to="/privacy" className="footer-premium__link">Privacy Policy</Link>
                        <span className="footer-premium__separator">•</span>
                        <Link to="/terms" className="footer-premium__link">Terms of Service</Link>
                        <span className="footer-premium__separator">•</span>
                        <span className="footer-premium__location">Made in India</span>
                    </div>
                </div>
            </div>

            {/* LocalBusiness Schema Markup */}
            <script type="application/ld+json" dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "LocalBusiness",
                    "name": "Global Tech Solution",
                    "address": {
                        "@type": "PostalAddress",
                        "streetAddress": "9/304 Old Malhar Sahara States, Jankipuram",
                        "addressLocality": "Lucknow",
                        "postalCode": "226021",
                        "addressRegion": "Uttar Pradesh",
                        "addressCountry": "India"
                    },
                    "telephone": ["+91-73880-10007", "+91-90444-71115"],
                    "email": "Globaltechsolutions.up@gmail.com",
                    "url": "https://www.globaltech.ind.in/"
                })
            }} />
        </footer>
    )
}
