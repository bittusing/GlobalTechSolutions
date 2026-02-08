// SEO utility functions for managing page metadata

export function setPageTitle(title: string) {
    document.title = title
}

export function setPageMeta(name: string, content: string) {
    let meta = document.querySelector(`meta[name="${name}"]`)
    if (!meta) {
        meta = document.createElement('meta')
        meta.setAttribute('name', name)
        document.head.appendChild(meta)
    }
    meta.setAttribute('content', content)
}

export function setPageMetaProperty(property: string, content: string) {
    let meta = document.querySelector(`meta[property="${property}"]`)
    if (!meta) {
        meta = document.createElement('meta')
        meta.setAttribute('property', property)
        document.head.appendChild(meta)
    }
    meta.setAttribute('content', content)
}

export function setCanonicalUrl(url: string) {
    let link = document.querySelector('link[rel="canonical"]') as HTMLLinkElement
    if (!link) {
        link = document.createElement('link')
        link.setAttribute('rel', 'canonical')
        document.head.appendChild(link)
    }
    link.href = url
}

export interface PageSEO {
    title: string
    description: string
    keywords?: string
    canonical?: string
}

export function updatePageSEO({ title, description, keywords, canonical }: PageSEO) {
    // Update title
    setPageTitle(title)
    
    // Update meta tags
    setPageMeta('description', description)
    setPageMeta('title', title)
    
    if (keywords) {
        setPageMeta('keywords', keywords)
    }
    
    // Update Open Graph
    setPageMetaProperty('og:title', title)
    setPageMetaProperty('og:description', description)
    
    // Update Twitter Card
    setPageMetaProperty('twitter:title', title)
    setPageMetaProperty('twitter:description', description)
    
    // Update canonical URL
    if (canonical) {
        setCanonicalUrl(canonical)
    }
}
