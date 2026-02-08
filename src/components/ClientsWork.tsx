import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { useState } from 'react'
import connectingHeartImg from '../assets/connectingheart.png'
import hucsImg from '../assets/hucs.png'
import dantaniImg from '../assets/dantaniinc.png'
import triveniImg from '../assets/triveniinframech.png'
import worknestImg from '../assets/worknestconnect.png'
import raebiomedImg from '../assets/raebiomedglobal.png'
import bookMySpaceImg from '../assets/bookmyspace.png'
import flywellImg from '../assets/flywell-logistics.png'

interface ClientProject {
    name: string
    industry: string
    description: string
    image: string
    imageAlt: string
    accent: string
    url: string
}

const clients: ClientProject[] = [
    {
        name: 'Connecting Heart',
        industry: 'App & Website Platform',
        description: 'A modern digital platform designed to help users build meaningful connections through a secure and scalable app and website experience.',
        image: connectingHeartImg,
        imageAlt: 'Connecting Heart platform interface',
        accent: '#FF6B9D',
        url: 'https://www.connectingheart.co.in/'
    },
    {
        name: 'HUCS',
        industry: 'Education & Admissions',
        description: 'A smart student–college connection platform enabling course discovery and simplified admission processes across multiple academic programs.',
        image: hucsImg,
        imageAlt: 'HUCS education platform',
        accent: '#4F46E5',
        url: 'https://hucs.in/'
    },
    {
        name: 'Dantani Sports',
        industry: 'Sports Media & PR',
        description: 'A global sports media platform offering PR services, media monitoring dashboards, and structured digital systems for communication and broadcast operations.',
        image: dantaniImg,
        imageAlt: 'Dantani Sports media platform',
        accent: '#10B981',
        url: 'https://www.dantaniinc.com/'
    },
    {
        name: 'Flywell Logistics',
        industry: 'Logistics & Delivery Services',
        description: 'A comprehensive logistics and courier platform based in New Delhi, offering fast domestic and international delivery solutions with real-time tracking and professional support.',
        image: flywellImg,
        imageAlt: 'Flywell Logistics delivery platform',
        accent: '#F59E0B',
        url: 'https://flywell-logistics.vercel.app/'
    },
    {
        name: 'Triveni Inframech Pvt. Ltd.',
        industry: 'Construction & Infrastructure',
        description: 'A corporate website built for an industrial construction company delivering fabrication, erection, and infrastructure solutions across multiple sectors.',
        image: triveniImg,
        imageAlt: 'Triveni Inframech corporate website',
        accent: '#8B5CF6',
        url: 'https://www.triveniinframech.com/'
    },
    {
        name: 'Worknest Connect',
        industry: 'Business Solutions (Qatar)',
        description: 'A Doha-based business solutions platform offering digital marketing, IT services, branding, and enterprise support through a unified system.',
        image: worknestImg,
        imageAlt: 'Worknest Connect business platform',
        accent: '#06B6D4',
        url: 'https://www.worknestconnect.com/'
    },
    {
        name: 'RaeBioMedGlobal',
        industry: 'Healthcare Infrastructure',
        description: 'A healthcare-focused digital presence for a company supplying hospital furniture and medical infrastructure solutions across India.',
        image: raebiomedImg,
        imageAlt: 'RaeBioMedGlobal healthcare platform',
        accent: '#EF4444',
        url: 'https://www.raebiomedglobal.com/'
    },
    {
        name: 'BookMySpace',
        industry: 'Booking Platform',
        description: 'A student-focused booking platform enabling discovery and reservation of private self-study libraries through a simple and intuitive system.',
        image: bookMySpaceImg,
        imageAlt: 'BookMySpace booking interface',
        accent: '#EC4899',
        url: 'https://bookmyspace.today/'
    }
]

function ClientCard({ client, index }: { client: ClientProject; index: number }) {
    const { ref: scrollRef, isVisible } = useScrollAnimation(0.1)
    const [isHovered, setIsHovered] = useState(false)

    return (
        <a
            href={client.url}
            target="_blank"
            rel="noopener noreferrer"
            ref={scrollRef as React.RefObject<HTMLAnchorElement>}
            className={`clients-work__card ${isVisible ? 'clients-work__card--visible' : ''}`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            style={{ 
                '--item-delay': `${index * 0.1}s`, 
                '--accent-color': client.accent
            } as React.CSSProperties}
        >
            <div className="clients-work__card-image">
                <div className="clients-work__card-image-overlay"></div>
                <img
                    src={client.image}
                    alt={client.imageAlt}
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
                        {client.industry}
                    </span>
                </div>
                <h3 className="clients-work__card-name">{client.name}</h3>
                <p className="clients-work__card-description">{client.description}</p>
                <div className="clients-work__card-footer">
                    <span className="clients-work__card-link">
                        Explore Project
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <path d="M4 10H16M16 10L10 4M16 10L10 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </span>
                </div>
            </div>
        </a>
    )
}

export default function ClientsWork() {
    const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation(0.1)

    return (
        <section 
            className="section clients-work-section"
        >
            <div className="container">
                <div
                    ref={headerRef as React.RefObject<HTMLDivElement>}
                    className={`clients-work__header ${headerVisible ? 'clients-work__header--visible' : ''}`}
                >
                    <div className="clients-work__header-badge">
                        <span className="clients-work__header-badge-dot"></span>
                        <span>OUR CLIENTS & WORK</span>
                    </div>
                    <h2 className="clients-work__title">
                        Real platforms.
                        <span className="clients-work__title-highlight"> Real impact.</span>
                    </h2>
                    <p className="clients-work__description">
                        A glimpse of the platforms, systems, and digital products we've built for growing brands.
                    </p>
                </div>

                <div className="clients-work__grid">
                    {clients.map((client, index) => (
                        <ClientCard key={client.name} client={client} index={index} />
                    ))}
                </div>
            </div>
        </section>
    )
}
