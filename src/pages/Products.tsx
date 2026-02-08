import { useState, useEffect } from 'react'
import { updatePageSEO } from '../utils/seo'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

// Product images
import boomghoomLogo from '../assets/boomghoom_logo.png'
import boomghoomPoster from '../assets/boomghoom_poster.png'
import connectCrmLogo from '../assets/ConnectCrm_logo.webp'

// Service images
import softwareDev from '../assets/softwaredevelopment.png'
import websiteDev from '../assets/webistedevelopment.png'
import mobileDev from '../assets/mobileappdevelopment.png'
import domainHosting from '../assets/domainandhosting.png'
import crmErp from '../assets/crmanderp.png'
import maintenance from '../assets/Maintenance.png'
import testing from '../assets/testing.png'
import moreServices from '../assets/more.png'

// Client work images
import connectingHeartImg from '../assets/connectingheart.png'
import hucsImg from '../assets/hucs.png'
import dantaniImg from '../assets/dantaniinc.png'
import triveniImg from '../assets/triveniinframech.png'
import worknestImg from '../assets/worknestconnect.png'
import raebiomedImg from '../assets/raebiomedglobal.png'
import bookMySpaceImg from '../assets/bookmyspace.png'
import flywellImg from '../assets/flywell-logistics.png'

interface ProductItem {
    name: string
    category: string
    description: string
    image: string
    imageAlt: string
    accent: string
    url: string
    type: 'product' | 'service' | 'client'
}

const allProducts: ProductItem[] = [
    // Our Products
    {
        name: 'BoomGhoom',
        category: 'Social Discovery Platform',
        description: 'A real-time social discovery platform that helps people explore live activities happening around them.',
        image: boomghoomPoster,
        imageAlt: 'BoomGhoom mobile app interface',
        accent: '#FF6B9D',
        url: 'https://www.boomghoom.com/',
        type: 'product'
    },
    {
        name: 'ConnectCRM',
        category: 'Business CRM Platform',
        description: 'A business CRM platform designed to manage leads, teams, and workflows from a single system.',
        image: connectCrmLogo,
        imageAlt: 'ConnectCRM dashboard',
        accent: '#4F46E5',
        url: 'https://crm.page.codeconnect.in/',
        type: 'product'
    },
    
    // Services
    {
        name: 'Custom Software Development',
        category: 'Development Services',
        description: 'We design and develop powerful custom software solutions built specifically for your business needs.',
        image: softwareDev,
        imageAlt: 'Custom Software Development',
        accent: '#10B981',
        url: '/contact',
        type: 'service'
    },
    {
        name: 'Website Design and Development',
        category: 'Web Services',
        description: 'We create modern and responsive websites that represent your brand and convert visitors into customers.',
        image: websiteDev,
        imageAlt: 'Website Development',
        accent: '#F59E0B',
        url: '/contact',
        type: 'service'
    },
    {
        name: 'Mobile Application Development',
        category: 'Mobile Services',
        description: 'We build high quality Android and iOS mobile applications that transform ideas into real world products.',
        image: mobileDev,
        imageAlt: 'Mobile App Development',
        accent: '#8B5CF6',
        url: '/contact',
        type: 'service'
    },
    {
        name: 'Domain and Hosting Solutions',
        category: 'Infrastructure Services',
        description: 'We provide reliable domain registration and secure hosting services to keep your business online without interruption.',
        image: domainHosting,
        imageAlt: 'Domain and Hosting',
        accent: '#06B6D4',
        url: '/contact',
        type: 'service'
    },
    {
        name: 'ERP and CRM Solutions',
        category: 'Business Solutions',
        description: 'We develop customized ERP and CRM systems to streamline operations, manage customers and improve decision making.',
        image: crmErp,
        imageAlt: 'ERP and CRM Solutions',
        accent: '#EF4444',
        url: '/contact',
        type: 'service'
    },
    {
        name: 'Maintenance and Support Services',
        category: 'Support Services',
        description: 'We offer reliable maintenance and support services to ensure your software, website and applications run smoothly at all times.',
        image: maintenance,
        imageAlt: 'Maintenance Services',
        accent: '#EC4899',
        url: '/contact',
        type: 'service'
    },
    {
        name: 'Quality Assurance and Testing',
        category: 'Testing Services',
        description: 'We ensure your software delivers flawless performance through structured testing and quality assurance processes.',
        image: testing,
        imageAlt: 'QA and Testing',
        accent: '#14B8A6',
        url: '/contact',
        type: 'service'
    },
    
    // Client Work
    {
        name: 'Connecting Heart',
        category: 'App & Website Platform',
        description: 'A modern digital platform designed to help users build meaningful connections through a secure and scalable app and website experience.',
        image: connectingHeartImg,
        imageAlt: 'Connecting Heart platform',
        accent: '#FF6B9D',
        url: 'https://www.connectingheart.co.in/',
        type: 'client'
    },
    {
        name: 'HUCS',
        category: 'Education & Admissions',
        description: 'A smart student–college connection platform enabling course discovery and simplified admission processes across multiple academic programs.',
        image: hucsImg,
        imageAlt: 'HUCS education platform',
        accent: '#4F46E5',
        url: 'https://hucs.in/',
        type: 'client'
    },
    {
        name: 'Dantani Sports',
        category: 'Sports Media & PR',
        description: 'A global sports media platform offering PR services, media monitoring dashboards, and structured digital systems for communication and broadcast operations.',
        image: dantaniImg,
        imageAlt: 'Dantani Sports media platform',
        accent: '#10B981',
        url: 'https://www.dantaniinc.com/',
        type: 'client'
    },
    {
        name: 'Flywell Logistics',
        category: 'Logistics & Delivery Services',
        description: 'A comprehensive logistics and courier platform based in New Delhi, offering fast domestic and international delivery solutions with real-time tracking and professional support.',
        image: flywellImg,
        imageAlt: 'Flywell Logistics delivery platform',
        accent: '#F59E0B',
        url: 'https://flywell-logistics.vercel.app/',
        type: 'client'
    },
    {
        name: 'Triveni Inframech Pvt. Ltd.',
        category: 'Construction & Infrastructure',
        description: 'A corporate website built for an industrial construction company delivering fabrication, erection, and infrastructure solutions across multiple sectors.',
        image: triveniImg,
        imageAlt: 'Triveni Inframech corporate website',
        accent: '#8B5CF6',
        url: 'https://www.triveniinframech.com/',
        type: 'client'
    },
    {
        name: 'Worknest Connect',
        category: 'Business Solutions (Qatar)',
        description: 'A Doha-based business solutions platform offering digital marketing, IT services, branding, and enterprise support through a unified system.',
        image: worknestImg,
        imageAlt: 'Worknest Connect business platform',
        accent: '#06B6D4',
        url: 'https://www.worknestconnect.com/',
        type: 'client'
    },
    {
        name: 'RaeBioMedGlobal',
        category: 'Healthcare Infrastructure',
        description: 'A healthcare-focused digital presence for a company supplying hospital furniture and medical infrastructure solutions across India.',
        image: raebiomedImg,
        imageAlt: 'RaeBioMedGlobal healthcare platform',
        accent: '#EF4444',
        url: 'https://www.raebiomedglobal.com/',
        type: 'client'
    },
    {
        name: 'BookMySpace',
        category: 'Booking Platform',
        description: 'A student-focused booking platform enabling discovery and reservation of private self-study libraries through a simple and intuitive system.',
        image: bookMySpaceImg,
        imageAlt: 'BookMySpace booking interface',
        accent: '#EC4899',
        url: 'https://bookmyspace.today/',
        type: 'client'
    }
]

function ProductCard({ product, index }: { product: ProductItem; index: number }) {
    const { ref: scrollRef, isVisible } = useScrollAnimation(0.1)
    const [isHovered, setIsHovered] = useState(false)

    return (
        <a
            href={product.url}
            target={product.url.startsWith('http') ? '_blank' : '_self'}
            rel={product.url.startsWith('http') ? 'noopener noreferrer' : undefined}
            ref={scrollRef as React.RefObject<HTMLAnchorElement>}
            className={`clients-work__card ${isVisible ? 'clients-work__card--visible' : ''}`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            style={{ 
                '--item-delay': `${index * 0.05}s`, 
                '--accent-color': product.accent
            } as React.CSSProperties}
        >
            <div className="clients-work__card-image">
                <div className="clients-work__card-image-overlay"></div>
                <img
                    src={product.image}
                    alt={product.imageAlt}
                    loading="lazy"
                    decoding="async"
                    className="clients-work__card-img"
                    width="580"
                    height="363"
                    style={{
                        transform: isHovered ? 'scale(1.05)' : 'scale(1)',
                        transition: 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)'
                    }}
                />
            </div>
            <div className="clients-work__card-content">
                <div className="clients-work__card-header">
                    <div className="clients-work__card-number">
                        {String(index + 1).padStart(2, '0')}
                    </div>
                    <span className="clients-work__card-industry">
                        {product.category}
                    </span>
                </div>
                <h3 className="clients-work__card-name">{product.name}</h3>
                <p className="clients-work__card-description">{product.description}</p>
                <div className="clients-work__card-footer">
                    <span className="clients-work__card-link">
                        {product.type === 'service' ? 'Get Started' : 'Explore Project'}
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <path d="M4 10H16M16 10L10 4M16 10L10 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </span>
                </div>
            </div>
        </a>
    )
}

export default function Products() {
    const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation(0.1)

    useEffect(() => {
        updatePageSEO({
            title: 'Products & Services - Global Tech Solutions | Complete Digital Solutions',
            description: 'Explore our products like BoomGhoom and ConnectCRM, along with our comprehensive services including custom software development, web & mobile apps, and client success stories.',
            keywords: 'products, services, BoomGhoom, ConnectCRM, software development, web development, mobile apps, Lucknow, India',
            canonical: 'https://globaltechsolutions.in/products'
        })
    }, [])

    return (
        <div className="products-page-wrapper">
            <section className="section clients-work-section">
                <div className="container">
                    <div
                        ref={headerRef as React.RefObject<HTMLDivElement>}
                        className={`clients-work__header ${headerVisible ? 'clients-work__header--visible' : ''}`}
                    >
                        <div className="clients-work__header-badge">
                            <span className="clients-work__header-badge-dot"></span>
                            <span>OUR PRODUCTS, SERVICES & WORK</span>
                        </div>
                        <h1 className="clients-work__title">
                            Real platforms.
                            <span className="clients-work__title-highlight"> Real impact.</span>
                        </h1>
                        <p className="clients-work__description">
                            A glimpse of the platforms, systems, and digital products we've built for growing brands.
                        </p>
                    </div>

                    <div className="clients-work__grid">
                        {allProducts.map((product, index) => (
                            <ProductCard key={product.name} product={product} index={index} />
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}
