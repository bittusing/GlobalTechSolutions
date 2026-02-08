import { Link } from 'react-router-dom'

interface ServicePreviewCardProps {
  title: string
  subtitle?: string
  href?: string
}

export default function ServicePreviewCard({
  title,
  subtitle,
  href = '/services'
}: ServicePreviewCardProps) {
  return (
    <Link to={href} className="service-preview-card">
      <div className="service-preview-card__content">
        <h3 className="service-preview-card__title">{title}</h3>
        {subtitle && <p className="service-preview-card__subtitle">{subtitle}</p>}
      </div>
    </Link>
  )
}
