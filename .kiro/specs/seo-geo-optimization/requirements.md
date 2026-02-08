# SEO + GEO Optimization Requirements

## 1. Business Context

### 1.1 Company Overview
CodexBit is a technology company based in India that:
- Builds custom software solutions (services business)
- Develops and operates its own products (BoomGhoom, CodeConnect)
- Serves startups, SMEs, and growing enterprises
- Focuses on AI, web, mobile, automation, and cloud infrastructure

### 1.2 Current Digital Presence
- Website: https://codexbit.com
- Products: BoomGhoom (social discovery), CodeConnect (CRM)
- Contact: hello@codexbit.com, +91 93212 20039
- Location: Navi Mumbai, Maharashtra, India

### 1.3 Target Audience
- Startups looking for technical partners
- SMEs needing custom software development
- Enterprises requiring scalable solutions
- Decision makers: CTOs, Product Managers, Founders

## 2. SEO Optimization Requirements

### 2.1 Technical SEO

#### 2.1.1 Meta Tags Optimization
**Acceptance Criteria:**
- Each page must have unique, descriptive title tags (50-60 characters)
- Each page must have unique meta descriptions (150-160 characters)
- All meta tags must include target keywords naturally
- Open Graph and Twitter Card tags must be present on all pages
- Canonical URLs must be properly set

#### 2.1.2 Structured Data (Schema Markup)
**Acceptance Criteria:**
- Organization schema must be implemented in index.html
- Service schema must be added to Services page
- FAQ schema must be added to relevant pages
- Product schema must be added for BoomGhoom and CodeConnect
- All schema markup must validate with Google's Rich Results Test

#### 2.1.3 Site Infrastructure
**Acceptance Criteria:**
- sitemap.xml must be generated and include all pages
- robots.txt must be created with proper directives
- All images must have descriptive alt text
- Page load time must be under 3 seconds (LCP < 2.5s)
- Mobile responsiveness must be maintained

### 2.2 On-Page SEO

#### 2.2.1 Keyword Strategy
**Acceptance Criteria:**
- Primary keywords identified for each page
- Secondary keywords identified for supporting content
- Long-tail keywords integrated naturally
- Keyword density maintained at 1-2% (natural usage)
- No keyword stuffing

**Target Keywords by Page:**
- Home: "custom software development", "AI automation", "product engineering"
- About: "technology company India", "software development team", "product builders"
- Services: "web development services", "mobile app development", "CRM solutions"
- Contact: "software development company contact", "IT services inquiry"

#### 2.2.2 Content Structure
**Acceptance Criteria:**
- H1 tags must be unique and descriptive on each page
- Heading hierarchy (H1 > H2 > H3) must be logical
- Content must be scannable with clear sections
- Internal linking must connect related pages
- External links must open in new tabs with rel="noopener noreferrer"

#### 2.2.3 URL Structure
**Acceptance Criteria:**
- URLs must be clean and descriptive
- No unnecessary parameters or fragments
- Consistent URL structure across site
- Proper routing for SPA (handled by Vercel config)

### 2.3 Content Optimization

#### 2.3.1 Page-Specific Content Enhancement
**Acceptance Criteria:**
- Home page must clearly communicate value proposition
- About page must establish authority and credibility
- Services page must detail offerings with benefits
- Contact page must provide multiple contact methods
- All pages must have clear calls-to-action

#### 2.3.2 E-A-T Signals (Expertise, Authoritativeness, Trustworthiness)
**Acceptance Criteria:**
- Company credentials clearly stated (2+ years, 50+ projects)
- Product portfolio showcased (BoomGhoom, CodeConnect)
- Contact information visible on all pages
- Terms and Privacy pages properly linked
- Professional tone maintained throughout

## 3. GEO (Generative Engine Optimization) Requirements

### 3.1 AI Retrieval Optimization

#### 3.1.1 Factual Statement Structure
**Acceptance Criteria:**
- Key facts must be stated clearly and directly
- Statistics must be specific and verifiable
- Company information must be consistent across pages
- Dates and timelines must be accurate
- No ambiguous or vague statements

#### 3.1.2 Entity Recognition
**Acceptance Criteria:**
- Company name (CodexBit) must be consistently formatted
- Product names (BoomGhoom, CodeConnect) must be clearly identified
- Service offerings must be explicitly named
- Location information must be precise
- Contact details must be machine-readable

### 3.2 AI-Friendly Content Structure

#### 3.2.1 FAQ Sections
**Acceptance Criteria:**
- FAQ sections must be added to Home, About, Services, and Contact pages
- Questions must match common user queries
- Answers must be concise and direct (2-3 sentences)
- FAQ schema markup must be implemented
- Questions must cover: services, pricing, timeline, process, support

#### 3.2.2 Semantic Clarity
**Acceptance Criteria:**
- Sentences must be clear and unambiguous
- Technical jargon must be explained when used
- Lists must be used for multiple items
- Relationships between concepts must be explicit
- Context must be provided for all claims

### 3.3 Citation and Authority Signals

#### 3.3.1 Brand Mentions
**Acceptance Criteria:**
- Products (BoomGhoom, CodeConnect) must be mentioned with context
- Client success metrics must be stated clearly
- Industry expertise must be demonstrated
- Technology stack must be mentioned where relevant

#### 3.3.2 Verifiable Information
**Acceptance Criteria:**
- All statistics must be accurate and current
- Contact information must be consistent
- Business hours must be clearly stated
- Location must be specific (Navi Mumbai, Maharashtra, India)
- Service areas must be defined

## 4. Performance Requirements

### 4.1 Core Web Vitals
**Acceptance Criteria:**
- Largest Contentful Paint (LCP) < 2.5s
- First Input Delay (FID) < 100ms
- Cumulative Layout Shift (CLS) < 0.1
- All images optimized and lazy-loaded
- Critical CSS inlined where beneficial

### 4.2 Accessibility
**Acceptance Criteria:**
- All images must have alt text
- Color contrast must meet WCAG AA standards
- Keyboard navigation must work properly
- ARIA labels must be used where appropriate
- Semantic HTML must be maintained

## 5. Analytics and Monitoring

### 5.1 Tracking Setup
**Acceptance Criteria:**
- Google Analytics 4 integration (optional, user decision)
- Google Search Console verification
- Sitemap submitted to Search Console
- Performance monitoring in place

### 5.2 Success Metrics
**Acceptance Criteria:**
- Organic traffic growth tracked
- Keyword rankings monitored
- Conversion rate measured (contact form submissions)
- Page load times monitored
- Search visibility improved

## 6. Implementation Priorities

### Phase 1: Foundation (High Priority)
- Meta tags optimization for all pages
- Schema markup implementation
- sitemap.xml and robots.txt creation
- Image alt text audit and updates

### Phase 2: Content Enhancement (High Priority)
- FAQ sections added to all pages
- Content structure improvements
- Internal linking optimization
- Keyword integration

### Phase 3: Advanced Optimization (Medium Priority)
- Performance optimization
- Additional schema types
- Content expansion
- Analytics setup

### Phase 4: Ongoing (Low Priority)
- Content updates
- Keyword monitoring
- Performance tracking
- Competitive analysis

## 7. Success Criteria

### 7.1 SEO Success Indicators
- All pages indexed by Google within 2 weeks
- Lighthouse SEO score > 95
- Rich results appearing in search
- Organic traffic increase of 50% in 3 months

### 7.2 GEO Success Indicators
- Company information correctly cited by AI engines
- Product names recognized in AI responses
- Service offerings accurately described
- Contact information easily retrievable

## 8. Constraints and Considerations

### 8.1 Technical Constraints
- React SPA architecture (client-side rendering)
- Vercel hosting platform
- No backend/CMS currently
- Static site generation not implemented

### 8.2 Content Constraints
- Maintain premium, engineering-focused tone
- No marketing fluff or exaggeration
- Factual, authoritative language only
- Professional and confident voice

### 8.3 Business Constraints
- No budget for paid tools initially
- Focus on organic optimization
- Quick wins prioritized
- Minimal maintenance overhead
