import { useEffect } from 'react'
import { updatePageSEO } from '../utils/seo'

export default function Privacy() {
    useEffect(() => {
        updatePageSEO({
            title: 'Privacy Policy - Global Tech Solutions',
            description: 'Global Tech Solutions privacy policy. Learn how we collect, use, and protect your personal information. We respect your privacy and are committed to data security.',
            canonical: 'https://globaltechsolutions.in/privacy'
        })
    }, [])

    return (
        <div className="legal-page-wrapper">
            <div className="container">
                <div className="legal-page-content">
                    <div className="legal-page-header">
                        <h1 className="legal-page-title">Privacy Policy</h1>
                        <p className="legal-page-subtitle">Effective Date: January 2026</p>
                    </div>

                    <div className="legal-page-body">
                        <p className="legal-page-intro">
                            Global Tech Solutions ("we", "our", "us") respects your privacy and is committed to protecting your personal information. 
                            This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website 
                            or use our services and products.
                        </p>

                        <section className="legal-section">
                            <h2 className="legal-section-title">Information We Collect</h2>
                            <p>We may collect the following information:</p>
                            <ul className="legal-list">
                                <li>Name</li>
                                <li>Email address</li>
                                <li>Phone number</li>
                                <li>Company name</li>
                                <li>Project or inquiry details</li>
                                <li>Usage data (via cookies and analytics tools)</li>
                            </ul>
                        </section>

                        <section className="legal-section">
                            <h2 className="legal-section-title">How We Use Your Information</h2>
                            <p>We use your information to:</p>
                            <ul className="legal-list">
                                <li>Respond to inquiries</li>
                                <li>Provide our services</li>
                                <li>Improve our website and products</li>
                                <li>Communicate updates and offers</li>
                                <li>Maintain security and prevent misuse</li>
                            </ul>
                        </section>

                        <section className="legal-section">
                            <h2 className="legal-section-title">Cookies</h2>
                            <p>
                                Our website may use cookies to enhance user experience and analyze website performance. 
                                You may choose to disable cookies through your browser settings.
                            </p>
                        </section>

                        <section className="legal-section">
                            <h2 className="legal-section-title">Third Party Services</h2>
                            <p>
                                We may use trusted third party tools such as analytics or hosting providers. 
                                These providers access data only as required to perform their services.
                            </p>
                        </section>

                        <section className="legal-section">
                            <h2 className="legal-section-title">Data Security</h2>
                            <p>
                                We implement appropriate technical and organizational measures to protect your personal 
                                information from unauthorized access, loss, or misuse.
                            </p>
                        </section>

                        <section className="legal-section">
                            <h2 className="legal-section-title">Product Data</h2>
                            <p>
                                For our products (BoomGhoom and ConnectCRM), user data is processed solely to provide 
                                platform functionality and is not sold or shared with third parties without consent.
                            </p>
                        </section>

                        <section className="legal-section">
                            <h2 className="legal-section-title">Your Rights</h2>
                            <p>You have the right to:</p>
                            <ul className="legal-list">
                                <li>Request access to your data</li>
                                <li>Request correction or deletion</li>
                                <li>Withdraw consent where applicable</li>
                            </ul>
                        </section>

                        <section className="legal-section">
                            <h2 className="legal-section-title">Contact Us</h2>
                            <p>If you have questions about this Privacy Policy, please contact:</p>
                            <div className="legal-contact">
                                <p><strong>Global Tech Solutions</strong><br />
                                9/304 Old Malhar Sahara States, Jankipuram<br />
                                Lucknow 226021, Uttar Pradesh, India<br />
                                Email: Globaltechsolutions.up@gmail.com</p>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    )
}