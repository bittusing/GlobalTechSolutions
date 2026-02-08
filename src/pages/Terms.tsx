import { useEffect } from 'react'
import { updatePageSEO } from '../utils/seo'

export default function Terms() {
    useEffect(() => {
        updatePageSEO({
            title: 'Terms and Conditions - Global Tech Solutions',
            description: 'Terms and conditions for using Global Tech Solutions services and products. Read our usage policies, intellectual property rights, and service agreements.',
            canonical: 'https://globaltechsolutions.in/terms'
        })
    }, [])

    return (
        <div className="legal-page-wrapper">
            <div className="container">
                <div className="legal-page-content">
                    <div className="legal-page-header">
                        <h1 className="legal-page-title">Terms and Conditions</h1>
                        <p className="legal-page-subtitle">Effective Date: January 2026</p>
                    </div>

                    <div className="legal-page-body">
                        <p className="legal-page-intro">
                            By accessing this website, you agree to comply with the following terms and conditions.
                        </p>

                        <section className="legal-section">
                            <h2 className="legal-section-title">Use of Website</h2>
                            <p>
                                You agree to use this website only for lawful purposes and in a manner that does not 
                                infringe the rights of others.
                            </p>
                        </section>

                        <section className="legal-section">
                            <h2 className="legal-section-title">Services</h2>
                            <p>
                                All services provided by Global Tech Solutions are subject to mutually agreed proposals, timelines, 
                                and commercial terms.
                            </p>
                        </section>

                        <section className="legal-section">
                            <h2 className="legal-section-title">Products</h2>
                            <p>
                                Our products including BoomGhoom and ConnectCRM are governed by their respective 
                                usage policies and subscription terms.
                            </p>
                        </section>

                        <section className="legal-section">
                            <h2 className="legal-section-title">Intellectual Property</h2>
                            <p>
                                All content, designs, logos, code, and materials on this website are the intellectual 
                                property of Global Tech Solutions and may not be copied without written permission.
                            </p>
                        </section>

                        <section className="legal-section">
                            <h2 className="legal-section-title">Limitation of Liability</h2>
                            <p>
                                Global Tech Solutions shall not be liable for any indirect, incidental, or consequential damages 
                                arising from use of this website or services.
                            </p>
                        </section>

                        <section className="legal-section">
                            <h2 className="legal-section-title">Termination</h2>
                            <p>
                                We reserve the right to suspend access to services or website in case of misuse or 
                                violation of these terms.
                            </p>
                        </section>

                        <section className="legal-section">
                            <h2 className="legal-section-title">Governing Law</h2>
                            <p>
                                These terms shall be governed by the laws of India.
                            </p>
                        </section>

                        <section className="legal-section">
                            <h2 className="legal-section-title">Contact</h2>
                            <p>For any questions regarding these terms, contact:</p>
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