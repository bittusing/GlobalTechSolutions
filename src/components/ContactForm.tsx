import { useState, FormEvent, ChangeEvent, useRef } from 'react'
import emailjs from '@emailjs/browser'

interface FormData {
    name: string
    email: string
    mobile: string
    company: string
    message: string
    interest: string
    honeypot: string
}

interface FormErrors {
    name?: string
    email?: string
    mobile?: string
    message?: string
}

// EmailJS Configuration
const EMAILJS_SERVICE_ID = 'service_0uio6jy'
const EMAILJS_TEMPLATE_ID = 'template_ka7nlte'
const EMAILJS_PUBLIC_KEY = 'o0Tqv-uae4TAffopV'

export default function ContactForm() {
    const formRef = useRef<HTMLFormElement>(null)
    const [formData, setFormData] = useState<FormData>({
        name: '',
        email: '',
        mobile: '',
        company: '',
        message: '',
        interest: 'product',
        honeypot: ''
    })

    const [errors, setErrors] = useState<FormErrors>({})
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [isSuccess, setIsSuccess] = useState(false)
    const [submitError, setSubmitError] = useState<string>('')
    const [showToast, setShowToast] = useState(false)

    const validateEmail = (email: string) => {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
    }

    const validateMobile = (mobile: string) => {
        // Indian mobile number validation: 10 digits, optionally starting with +91
        return /^(\+91)?[6-9]\d{9}$/.test(mobile.replace(/\s/g, ''))
    }

    const validate = (): boolean => {
        const newErrors: FormErrors = {}

        if (!formData.name.trim()) {
            newErrors.name = 'Name is required'
        }

        if (!formData.email.trim()) {
            newErrors.email = 'Email is required'
        } else if (!validateEmail(formData.email)) {
            newErrors.email = 'Please enter a valid email address'
        }

        if (!formData.mobile.trim()) {
            newErrors.mobile = 'Mobile number is required'
        } else if (!validateMobile(formData.mobile)) {
            newErrors.mobile = 'Please enter a valid 10-digit mobile number'
        }

        if (!formData.message.trim()) {
            newErrors.message = 'Message is required'
        }

        setErrors(newErrors)
        return Object.keys(newErrors).length === 0
    }

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target
        setFormData(prev => ({ ...prev, [name]: value }))

        // Clear error when user starts typing
        if (errors[name as keyof FormErrors]) {
            setErrors(prev => ({ ...prev, [name]: undefined }))
        }
        if (submitError) {
            setSubmitError('')
        }
    }

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault()

        // Honeypot check
        if (formData.honeypot) {
            return
        }

        if (!validate()) {
            return
        }

        setIsSubmitting(true)
        setSubmitError('')

        try {
            // Get current date and time
            const now = new Date()
            const formattedTime = now.toLocaleString('en-US', {
                weekday: 'short',
                year: 'numeric',
                month: 'short',
                day: 'numeric',
                hour: '2-digit',
                minute: '2-digit'
            })

            // Prepare template parameters
            const templateParams = {
                name: formData.name,
                email: formData.email,
                mobile: formData.mobile,
                company: formData.company || 'Not provided',
                interest: formData.interest,
                message: formData.message,
                time: formattedTime
            }

            // Send email using EmailJS
            await emailjs.send(
                EMAILJS_SERVICE_ID,
                EMAILJS_TEMPLATE_ID,
                templateParams,
                EMAILJS_PUBLIC_KEY
            )

            setIsSuccess(true)
            setShowToast(true)
            setFormData({
                name: '',
                email: '',
                mobile: '',
                company: '',
                message: '',
                interest: 'product',
                honeypot: ''
            })

            // Hide toast after 5 seconds
            setTimeout(() => {
                setShowToast(false)
            }, 5000)
        } catch (error) {
            console.error('EmailJS Error:', error)
            setSubmitError('Failed to send message. Please try again or email us directly at Globaltechsolutions.up@gmail.com')
        } finally {
            setIsSubmitting(false)
        }
    }

    if (isSuccess) {
        return (
            <div className="card text-center" style={{ padding: 'var(--gap-xl)' }}>
                <div style={{
                    width: 64,
                    height: 64,
                    borderRadius: '50%',
                    background: 'var(--accent-green)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto var(--gap)'
                }}>
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                        <polyline points="20 6 9 17 4 12" />
                    </svg>
                </div>
                <h3 className="h3 mb-md">Thanks for reaching out!</h3>
                <p className="text-secondary">We've received your message and will get back to you within 24 hours.</p>
                <button
                    className="btn btn--secondary mt-lg"
                    onClick={() => setIsSuccess(false)}
                >
                    Send another message
                </button>
            </div>
        )
    }

    return (
        <>
            {/* Success Toast Notification */}
            {showToast && (
                <div style={{
                    position: 'fixed',
                    top: '20px',
                    right: '20px',
                    background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
                    color: 'white',
                    padding: '16px 24px',
                    borderRadius: '12px',
                    boxShadow: '0 10px 40px rgba(16, 185, 129, 0.3)',
                    zIndex: 9999,
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    animation: 'slideInRight 0.3s ease-out',
                    maxWidth: '400px'
                }}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                        <polyline points="22 4 12 14.01 9 11.01"></polyline>
                    </svg>
                    <div>
                        <div style={{ fontWeight: 600, marginBottom: '4px' }}>Message Sent!</div>
                        <div style={{ fontSize: '14px', opacity: 0.9 }}>We'll get back to you within 24 hours.</div>
                    </div>
                </div>
            )}

            <style>{`
                @keyframes slideInRight {
                    from {
                        transform: translateX(100%);
                        opacity: 0;
                    }
                    to {
                        transform: translateX(0);
                        opacity: 1;
                    }
                }
            `}</style>

            <form ref={formRef} onSubmit={handleSubmit} noValidate>
            {submitError && (
                <div className="form-error" role="alert" style={{ marginBottom: '20px', padding: '12px', background: '#fee', borderRadius: '8px' }}>
                    {submitError}
                </div>
            )}

            <div className="form-group">
                <label htmlFor="name" className="form-label form-label--required">
                    Name
                </label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`form-input ${errors.name ? 'form-input--error' : ''}`}
                    placeholder="Your name"
                    aria-describedby={errors.name ? 'name-error' : undefined}
                    aria-invalid={!!errors.name}
                />
                {errors.name && (
                    <p id="name-error" className="form-error" role="alert">
                        {errors.name}
                    </p>
                )}
            </div>

            <div className="form-group">
                <label htmlFor="email" className="form-label form-label--required">
                    Email
                </label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`form-input ${errors.email ? 'form-input--error' : ''}`}
                    placeholder="you@company.com"
                    aria-describedby={errors.email ? 'email-error' : undefined}
                    aria-invalid={!!errors.email}
                />
                {errors.email && (
                    <p id="email-error" className="form-error" role="alert">
                        {errors.email}
                    </p>
                )}
            </div>

            <div className="form-group">
                <label htmlFor="mobile" className="form-label form-label--required">
                    Mobile Number
                </label>
                <input
                    type="tel"
                    id="mobile"
                    name="mobile"
                    value={formData.mobile}
                    onChange={handleChange}
                    className={`form-input ${errors.mobile ? 'form-input--error' : ''}`}
                    placeholder="+91 9315857918"
                    aria-describedby={errors.mobile ? 'mobile-error' : undefined}
                    aria-invalid={!!errors.mobile}
                />
                {errors.mobile && (
                    <p id="mobile-error" className="form-error" role="alert">
                        {errors.mobile}
                    </p>
                )}
            </div>

            <div className="form-group">
                <label htmlFor="company" className="form-label">
                    Company
                </label>
                <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="form-input"
                    placeholder="Your company name"
                />
            </div>

            <div className="form-group">
                <label htmlFor="interest" className="form-label">
                    I'm interested in
                </label>
                <select
                    id="interest"
                    name="interest"
                    value={formData.interest}
                    onChange={handleChange}
                    className="form-select"
                >
                    <option value="product">Product Inquiry</option>
                    <option value="services">Development Services</option>
                    <option value="partnership">Partnership</option>
                    <option value="other">Other</option>
                </select>
            </div>

            <div className="form-group">
                <label htmlFor="message" className="form-label form-label--required">
                    Message
                </label>
                <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className={`form-textarea ${errors.message ? 'form-textarea--error' : ''}`}
                    placeholder="Tell us about your project..."
                    aria-describedby={errors.message ? 'message-error' : undefined}
                    aria-invalid={!!errors.message}
                />
                {errors.message && (
                    <p id="message-error" className="form-error" role="alert">
                        {errors.message}
                    </p>
                )}
            </div>

            {/* Honeypot field */}
            <div className="form-honeypot" aria-hidden="true">
                <label htmlFor="honeypot">Leave this empty</label>
                <input
                    type="text"
                    id="honeypot"
                    name="honeypot"
                    value={formData.honeypot}
                    onChange={handleChange}
                    tabIndex={-1}
                    autoComplete="off"
                />
            </div>

            <button
                type="submit"
                className="btn btn--primary btn--lg w-full"
                disabled={isSubmitting}
                style={{
                    opacity: isSubmitting ? 0.7 : 1,
                    cursor: isSubmitting ? 'not-allowed' : 'pointer',
                    position: 'relative'
                }}
                title={isSubmitting ? 'Sending your message...' : 'Click to send message'}
            >
                {isSubmitting ? (
                    <>
                        <span style={{
                            display: 'inline-block',
                            width: '16px',
                            height: '16px',
                            border: '2px solid rgba(255,255,255,0.3)',
                            borderTopColor: 'white',
                            borderRadius: '50%',
                            animation: 'spin 0.8s linear infinite',
                            marginRight: '8px'
                        }} />
                        Sending...
                    </>
                ) : (
                    'Send Message'
                )}
            </button>

            <style>{`
                @keyframes spin {
                    to { transform: rotate(360deg); }
                }
            `}</style>
        </form>
        </>
    )
}
