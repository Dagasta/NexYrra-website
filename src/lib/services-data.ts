export interface Service {
    slug: string;
    icon: string;
    group: 'BUILD' | 'AUTOMATE' | 'SCALE' | 'SECURE';
    title: string;
    titleAr?: string;
    tagline: string;
    description: string;
    longDescription: string;
    features: string[];
    benefits: string[];
    useCases: string[];
}

export const serviceGroups = [
    {
        id: 'BUILD',
        label: 'Build',
        tagline: 'We architect and ship world-class digital products',
        color: '#8B5CF6',
        description: 'Custom software, web & mobile apps, and SaaS platforms built to enterprise standards.',
    },
    {
        id: 'AUTOMATE',
        label: 'Automate',
        tagline: 'We eliminate manual work and scale your operations',
        color: '#22D3EE',
        description: 'AI systems, workflow automation, and CRM engines that replace repetitive human effort.',
    },
    {
        id: 'SCALE',
        label: 'Scale',
        tagline: 'We engineer the infrastructure that carries your growth',
        color: '#A78BFA',
        description: 'Cloud, DevOps, data analytics, and system optimization for high-growth operations.',
    },
    {
        id: 'SECURE',
        label: 'Secure & Integrate',
        tagline: 'We lock down your systems and connect everything',
        color: '#34D399',
        description: 'Cybersecurity, API integrations, and infrastructure hardening for enterprise peace of mind.',
    },
];

export const services: Service[] = [
    // BUILD
    {
        slug: 'custom-software',
        icon: '⚙️',
        group: 'BUILD',
        title: 'Custom Software Development',
        tagline: 'Built for your exact problem',
        description: 'Bespoke software solutions engineered from scratch — designed for your exact workflow, scale, and competitive edge.',
        longDescription: `Off-the-shelf software forces your business into someone else's template. We build precisely what you need — nothing more, nothing less.\n\nFrom internal tools to customer-facing platforms, every line of code is written for performance, security, and long-term maintainability. We use modern tech stacks (Next.js, Python, Node.js, PostgreSQL) and deliver production-ready systems.`,
        features: ['Full-stack Architecture', 'Agile Delivery', 'Scalable Codebase'],
        benefits: ['Software that fits your exact process', 'No vendor lock-in', 'Owned IP — forever', 'Built to scale from day one'],
        useCases: ['Internal Business Tools', 'Client Portals', 'Industry-specific Platforms', 'Legacy System Modernization'],
    },
    {
        slug: 'web-app-development',
        icon: '🌐',
        group: 'BUILD',
        title: 'Web & Mobile Apps',
        titleAr: 'تطوير المواقع والتطبيقات',
        tagline: 'Premium digital experiences',
        description: 'Premium AI-powered web and mobile applications built with cutting-edge technology for enterprise performance.',
        longDescription: `We don't build generic websites — we build premium digital experiences that convert. Every site and app we craft is AI-enhanced, lightning-fast, and designed to make a $100,000+ impression from the first pixel.\n\nFrom custom Next.js web apps to React Native mobile applications, we deliver production-ready code with full DevOps setup, monitoring, and ongoing support.`,
        features: ['AI-Enhanced UX', 'Cloud Architecture', 'SEO Optimized'],
        benefits: ['Sub-1s page load times', 'Mobile-first responsive design', 'Built-in SEO from day one', 'Scalable cloud infrastructure'],
        useCases: ['Corporate Websites', 'SaaS Platforms', 'E-commerce Stores', 'Mobile Applications'],
    },
    {
        slug: 'saas-platforms',
        icon: '🧩',
        group: 'BUILD',
        title: 'SaaS Platform Development',
        tagline: 'Launch your product, not a prototype',
        description: 'From idea to live product — we design, build, and launch production-grade SaaS platforms with full multi-tenancy and billing.',
        longDescription: `Building a SaaS product is one of the most complex undertakings in software. We've done it dozens of times.\n\nWe handle architecture decisions, authentication, multi-tenancy, subscription billing, feature flags, analytics, and onboarding flows — so you can focus on growth.`,
        features: ['Multi-tenant Architecture', 'Stripe Billing Integration', 'Admin & User Dashboards'],
        benefits: ['Launch in weeks, not months', 'Built for investor scrutiny', 'Designed to scale to millions of users', 'Full source code ownership'],
        useCases: ['B2B SaaS Products', 'Marketplace Platforms', 'Subscription Businesses', 'Internal SaaS Tools'],
    },
    // AUTOMATE
    {
        slug: 'ai-agents',
        icon: '🤖',
        group: 'AUTOMATE',
        title: 'AI Systems & Agents',
        titleAr: 'وكلاء الذكاء الاصطناعي المستقلون',
        tagline: 'Your 24/7 digital workforce',
        description: 'Intelligent agents that work 24/7 to automate complex business decisions, customer interactions, and operational workflows at scale.',
        longDescription: `Nexyrra's Autonomous AI Agents are purpose-built digital workers that never sleep, never tire, and continuously learn. They handle complex multi-step reasoning, interact with customers in natural language, and execute business logic with precision.\n\nDeployed across sales, support, operations, and beyond — our agents integrate with your existing tools (CRM, ERP, WhatsApp, email) and can escalate to humans intelligently when needed.`,
        features: ['Self-Learning Models', 'Natural Language Processing', 'Multi-Channel Deployment'],
        benefits: ['Reduce operational costs by up to 70%', 'Handle 1000+ simultaneous interactions', '24/7 uptime with zero human intervention', 'Seamless handoff to human agents'],
        useCases: ['Customer Support Automation', 'Sales Qualification Bots', 'Internal HR Assistants', 'Appointment & Booking Systems'],
    },
    {
        slug: 'workflow-automation',
        icon: '⚡',
        group: 'AUTOMATE',
        title: 'Workflow Automation',
        titleAr: 'أتمتة سير العمل باحترافية',
        tagline: 'Eliminate every manual process',
        description: 'End-to-end automation of business processes, eliminating manual work and human error across your entire operation.',
        longDescription: `We map, analyze, and automate your entire business workflow — from data entry to complex multi-system processes. Our automation solutions connect your apps, move data seamlessly, and trigger actions based on real-time events.\n\nBuilt with enterprise-grade reliability, our workflows include error handling, audit trails, and real-time monitoring dashboards so you always know what's running.`,
        features: ['Process Mapping', 'API Integration', 'Real-time Monitoring'],
        benefits: ['10x faster process execution', 'Eliminate human error completely', 'Full audit trail and compliance', 'Scale without hiring headcount'],
        useCases: ['Invoice & Finance Processing', 'Lead Routing & CRM Sync', 'Inventory Management', 'Report Generation & Distribution'],
    },
    {
        slug: 'crm-lead-systems',
        icon: '🎯',
        group: 'AUTOMATE',
        title: 'CRM & Lead Generation Systems',
        tagline: 'Never lose a lead again',
        description: 'AI-powered lead capture, qualification, and nurturing systems that convert more prospects into paying customers — automatically.',
        longDescription: `Your CRM should work for you, not the other way around. We build and integrate intelligent CRM systems that capture every lead, score them automatically, and trigger the right follow-up at the right time.\n\nFrom WhatsApp sequences to email drip campaigns — we architect the full funnel.`,
        features: ['AI Lead Scoring', 'Automated Nurture Sequences', 'Multi-channel Follow-up'],
        benefits: ['3x more leads converted', 'Zero leads falling through the cracks', 'Full pipeline visibility', 'Automated follow-up at scale'],
        useCases: ['Sales Pipeline Automation', 'WhatsApp Lead Nurturing', 'Real Estate CRM', 'E-commerce Remarketing'],
    },
    // SCALE
    {
        slug: 'cloud-devops',
        icon: '☁️',
        group: 'SCALE',
        title: 'Cloud Infrastructure & DevOps',
        tagline: 'Infrastructure that never breaks',
        description: 'Enterprise-grade cloud architecture, CI/CD pipelines, and DevOps practices that make your systems bulletproof and your deployments instant.',
        longDescription: `Slow deployments, downtime, and scaling panics are symptoms of poor infrastructure. We architect cloud systems on AWS, GCP, and Azure that auto-scale, self-heal, and deploy continuously.\n\nOur DevOps practice covers the full lifecycle: infrastructure as code, containerization (Docker/K8s), CI/CD pipelines, monitoring, alerting, and disaster recovery.`,
        features: ['Auto-scaling Architecture', 'CI/CD Pipelines', 'Kubernetes Orchestration'],
        benefits: ['99.99% uptime SLA', 'Deploy in minutes, not hours', 'Automatic scaling under load', 'Disaster recovery built-in'],
        useCases: ['Cloud Migration', 'High-traffic Applications', 'Microservices Architecture', 'Multi-region Deployments'],
    },
    {
        slug: 'data-intelligence',
        icon: '📊',
        group: 'SCALE',
        title: 'Data Systems & Analytics',
        titleAr: 'ذكاء البيانات والتحليلات المؤسسية',
        tagline: 'See around corners',
        description: 'Transform raw business data into strategic intelligence with predictive analytics, data warehouses, and real-time reporting dashboards.',
        longDescription: `Your data is your most valuable asset — but only if you can understand it. Nexyrra builds custom analytics infrastructure that transforms raw data into board-ready insights, predictive forecasts, and automated alerts.\n\nWe connect to all your data sources (POS, CRM, ERP, web analytics), unify them into a single source of truth, and surface answers to your most important business questions in real time.`,
        features: ['Predictive Analytics', 'Custom Dashboards', 'Data Warehousing'],
        benefits: ['Real-time KPI monitoring', 'Predictive revenue forecasting', 'Automated anomaly detection', 'Executive-ready reports'],
        useCases: ['Sales & Revenue Analytics', 'Customer Lifetime Value Modeling', 'Supply Chain Optimization', 'Market Intelligence'],
    },
    {
        slug: 'digital-transformation',
        icon: '🚀',
        group: 'SCALE',
        title: 'Digital Transformation Consulting',
        tagline: 'From legacy to leading-edge',
        description: 'Strategic consulting to modernize legacy systems, restructure digital operations, and build a technology roadmap that drives measurable business growth.',
        longDescription: `Digital transformation isn't a project — it's a complete shift in how your business operates. We provide the strategic clarity and technical execution to move your organization from where it is to where it needs to be.\n\nWe assess your current technology stack, identify bottlenecks, and build a phased roadmap that delivers ROI at every step.`,
        features: ['Technology Audit', 'Phased Roadmap', 'Change Management'],
        benefits: ['Clear path from legacy to modern', 'ROI at every phase', 'Reduced technical debt', 'Future-proof architecture'],
        useCases: ['Legacy System Modernization', 'Digital Strategy Development', 'Tech Stack Optimization', 'Operational Transformation'],
    },
    // SECURE
    {
        slug: 'cybersecurity',
        icon: '🛡️',
        group: 'SECURE',
        title: 'Cybersecurity Solutions',
        tagline: 'Protection built into every layer',
        description: 'Enterprise cybersecurity architecture — from penetration testing and compliance to real-time threat detection and incident response.',
        longDescription: `A single breach can cost millions and destroy years of trust. We architect security from the ground up — identifying vulnerabilities before attackers do and building defenses across your entire digital surface.\n\nOur security practice covers application security, network hardening, identity management, compliance (ISO 27001, SOC 2), and 24/7 threat monitoring.`,
        features: ['Penetration Testing', 'Compliance Readiness', 'Threat Monitoring'],
        benefits: ['Zero known vulnerabilities', 'Compliance-ready documentation', '24/7 threat detection', 'Executive security reporting'],
        useCases: ['Security Audits & Pen Testing', 'GDPR/ISO 27001 Compliance', 'Application Security Review', 'Incident Response Planning'],
    },
    {
        slug: 'api-integrations',
        icon: '🔗',
        group: 'SECURE',
        title: 'API Development & Integrations',
        tagline: 'Connect everything. Break nothing.',
        description: 'Custom API development and third-party integrations that connect your entire tech stack into one unified, efficient system.',
        longDescription: `Disconnected tools kill productivity. We design and build robust API layers that make your entire technology ecosystem communicate seamlessly — from payment gateways to ERP systems.\n\nWhether you need a custom REST/GraphQL API, webhook infrastructure, or complex third-party integrations (Salesforce, SAP, Stripe, Twilio), we deliver it reliably.`,
        features: ['REST & GraphQL APIs', 'Webhook Architecture', 'Third-party Integrations'],
        benefits: ['Unified data across all tools', 'Eliminate manual data transfer', 'Reliable, documented APIs', 'Scales without breaking'],
        useCases: ['Payment Gateway Integration', 'ERP/CRM Connectivity', 'Marketplace API Build', 'Legacy System Bridging'],
    },
    {
        slug: 'ui-ux-design',
        icon: '🎨',
        group: 'SECURE',
        title: 'UI/UX Design Systems',
        tagline: 'Interfaces that convert and delight',
        description: 'World-class user interface design and design systems that make your product feel premium, perform beautifully, and convert users into customers.',
        longDescription: `Design is not decoration — it's conversion. Every interaction a user has with your product is either building trust or destroying it. We build design systems that are beautiful, consistent, and engineered for outcomes.\n\nFrom user research and wireframes to pixel-perfect Figma designs and coded component libraries, we deliver the full design infrastructure.`,
        features: ['Design System Architecture', 'Figma Prototyping', 'Coded Component Library'],
        benefits: ['Consistent brand across all touchpoints', 'Faster product development', 'Higher user retention', 'Premium brand perception'],
        useCases: ['SaaS Product Design', 'Website Redesigns', 'Mobile App UI', 'Design System Creation'],
    },
];
