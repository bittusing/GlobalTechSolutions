import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const location = useLocation()
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50)
        }
        window.addEventListener('scroll', handleScroll, { passive: true })
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    useEffect(() => {
        setIsMobileMenuOpen(false)
    }, [location])

    useEffect(() => {
        document.body.style.overflow = isMobileMenuOpen ? 'hidden' : ''
        return () => {
            document.body.style.overflow = ''
        }
    }, [isMobileMenuOpen])

    return (
        <>
            <header className={`header ${isScrolled ? 'header--scrolled' : ''}`}>
                <div className="container">
                    <div className="header__inner">
                        {/* Logo */}
                        <Link to="/" className="header__logo" aria-label="Global Tech Solutions Home">
                            <img
                                src="/iconlogo.png"
                                alt="Global Tech Solutions"
                                className="header__logo-icon"
                                loading="eager"
                                decoding="async"
                                width="50"
                                height="50"
                            />
                        </Link>

                        {/* Desktop Navigation */}
                        <nav className="header__nav" aria-label="Main navigation">
                            <Link to="/products" className="header__nav-link">Products</Link>
                            <Link to="/services" className="header__nav-link">Services</Link>
                            <Link to="/about" className="header__nav-link">About</Link>
                            <Link to="/contact" className="header__nav-link">Contact</Link>
                        </nav>

                        {/* Actions */}
                        <div className="header__actions">
                            <Link to="/contact" className="btn btn--primary btn--sm mobile\:hidden">
                                Partner with Us
                            </Link>

                            <button
                                className="header__menu-btn"
                                onClick={() => setIsMobileMenuOpen(true)}
                                aria-label="Open menu"
                                aria-expanded={isMobileMenuOpen}
                            >
                                <Menu size={24} />
                            </button>
                        </div>
                    </div>
                </div>
            </header>

            {/* Mobile Navigation Overlay */}
            <nav
                className={`mobile-nav ${isMobileMenuOpen ? 'mobile-nav--open' : ''}`}
                aria-label="Mobile navigation"
                aria-hidden={!isMobileMenuOpen}
            >
                <button
                    className="mobile-nav__close"
                    onClick={() => setIsMobileMenuOpen(false)}
                    aria-label="Close menu"
                >
                    <X size={24} />
                </button>

                <Link to="/" className="mobile-nav__link">Home</Link>
                <Link to="/products" className="mobile-nav__link">Products</Link>
                <Link to="/services" className="mobile-nav__link">Services</Link>
                <Link to="/about" className="mobile-nav__link">About</Link>
                <Link to="/contact" className="mobile-nav__link">Contact</Link>

                <div style={{ marginTop: 'auto' }}>
                    <Link to="/contact" className="btn btn--primary w-full">
                        Partner with Us
                    </Link>
                </div>
            </nav>
        </>
    )
}
