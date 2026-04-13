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
        label: 'Architect',
        tagline: 'We engineer world-class digital systems and products',
        color: '#8B5CF6',
        description: 'Bespoke software, enterprise platforms, and cross-platform applications engineered for performance.',
    },
    {
        id: 'AUTOMATE',
        label: 'Optimize',
        tagline: 'We eliminate operational friction through intelligent execution',
        color: '#22D3EE',
        description: 'Autonomous systems, workflow engines, and unified pipelines that replace manual overhead.',
    },
    {
        id: 'SCALE',
        label: 'Accelerate',
        tagline: 'We build the high-performance infrastructure for global scale',
        color: '#A78BFA',
        description: 'Cloud systems, data intelligence, and infrastructure hardening for explosive growth.',
    },
    {
        id: 'SECURE',
        label: 'Fortify',
        tagline: 'We integrate complex ecosystems and secure every node',
        color: '#34D399',
        description: 'Hardened cybersecurity, secure API layers, and advanced systems integration for enterprise resilience.',
    },
];

export const services: Service[] = [
    // BUILD
    {
        slug: 'custom-software',
        icon: '⚙️',
        group: 'BUILD',
        title: 'Bespoke Software Engineering',
        tagline: 'Engineered for your exact constraints',
        description: 'Bespoke software solutions engineered from the ground up — designed for your specific workflow, scale, and competitive edge.',
        longDescription: `Off-the-shelf software forces your business into someone else's template. We build precisely what you need — nothing more, nothing less.\n\nFrom internal tools to customer-facing platforms, every line of code is written for performance, security, and long-term maintainability. We use high-performance tech stacks (Next.js, Python, Rust, Node.js, PostgreSQL) and deliver production-ready systems.`,
        features: ['Full-stack Architecture', 'High-Performance Delivery', 'Scalable Codebase'],
        benefits: ['Systems that fit your exact process', 'No vendor lock-in', 'Owned IP — forever', 'Built for global scale'],
        useCases: ['Internal Business Tools', 'Client Portals', 'Industry-specific Platforms', 'Infrastructure Modernization'],
    },
    {
        slug: 'web-app-development',
        icon: '🌐',
        group: 'BUILD',
        title: 'High-Performance Apps',
        titleAr: 'تطوير المواقع والتطبيقات',
        tagline: 'Premium digital architecture',
        description: 'Premium system-driven web and mobile applications built with cutting-edge technology for enterprise-grade performance.',
        longDescription: `We don't build generic websites — we build premium digital systems that convert. Every application we craft is lightning-fast, secure, and designed to make a high-authority impression from the first pixel.\n\nFrom custom Next.js web systems to React Native mobile applications, we deliver production-ready code with full DevOps setup and monitoring.`,
        features: ['Optimized Performance UX', 'Cloud Architecture', 'SEO Optimized'],
        benefits: ['Sub-1s page load times', 'Mobile-first responsive design', 'Built-in SEO from day one', 'Scalable cloud infrastructure'],
        useCases: ['Corporate Platforms', 'SaaS Engines', 'E-commerce Systems', 'Mobile Applications'],
    },
    {
        slug: 'saas-platforms',
        icon: '🧩',
        group: 'BUILD',
        title: 'SaaS Infrastructure & Dev',
        tagline: 'Launch an engine, not a prototype',
        description: 'From architecture to launch — we design, build, and deploy production-grade SaaS platforms with full multi-tenancy and billing systems.',
        longDescription: `Building a SaaS product is a complex systems problem. We've solved it dozens of times.\n\nWe handle architecture decisions, secure authentication, multi-tenancy, subscription billing, feature flags, and onboarding flows — so you can focus on scale.`,
        features: ['Multi-tenant Architecture', 'Stripe Billing Integration', 'Admin & Data Dashboards'],
        benefits: ['Launch in weeks, not months', 'Built for investor-grade scrutiny', 'Designed for millions of concurrent users', 'Full source code ownership'],
        useCases: ['B2B SaaS Products', 'Marketplace Platforms', 'Subscription Businesses', 'Internal SaaS Tools'],
    },
    // AUTOMATE
    {
        slug: 'autonomous-systems',
        icon: '🤖',
        group: 'AUTOMATE',
        title: 'Autonomous Systems & Engines',
        titleAr: 'الأنظمة المستقلة والمحركات',
        tagline: 'Your 24/7 digital workforce',
        description: 'Intelligent systems that work 24/7 to execute complex business logic, customer interactions, and operational tasks at scale.',
        longDescription: `Nexyrra's Autonomous Systems are purpose-built digital workers that never sleep. They handle complex multi-step reasoning, interact with stakeholders, and execute business logic with mathematical precision.\n\nDeployed across operations, support, and sales — our systems integrate with your existing infrastructure (CRM, ERP, WhatsApp, email) and manage workflows with zero human overhead.`,
        features: ['Self-Scaling Logic', 'Natural Language Processing', 'Multi-Channel Engines'],
        benefits: ['Reduce operational costs by up to 70%', 'Handle unlimited simultaneous interactions', '24/7 uptime with zero human error', 'Seamless systems handoff'],
        useCases: ['Customer Support Automation', 'Sales Qualification Systems', 'Internal Process Assistants', 'Dispatch & Booking Engines'],
    },
    {
        slug: 'workflow-automation',
        icon: '⚡',
        group: 'AUTOMATE',
        title: 'Intelligent Workflow Engineering',
        titleAr: 'هندسة سير العمل الذكية',
        tagline: 'Eliminate every manual friction',
        description: 'End-to-end automation of business processes, eliminating manual overhead and human error across your entire operation.',
        longDescription: `We map, analyze, and automate your entire business operation — from high-volume data processing to complex multi-system connectivity. Our automation solutions link your apps, move data securely, and trigger actions based on real-time events.\n\nBuilt with enterprise-grade reliability, our workflows include error handling, deep audit trails, and monitoring dashboards.`,
        features: ['Process Optimization', 'API Connectors', 'Real-time Logic Engines'],
        benefits: ['10x faster execution speed', 'Eliminate human error completely', 'Full audit trail and compliance', 'Scale without hiring overhead'],
        useCases: ['Invoice & Finance Pipelines', 'Lead Routing & CRM Engines', 'Inventory Management Systems', 'Automated Reporting'],
    },
    {
        slug: 'crm-lead-systems',
        icon: '🎯',
        group: 'AUTOMATE',
        title: 'Revenue & Lead Systems',
        tagline: 'Direct-to-revenue automation',
        description: 'High-performance lead capture, qualification, and nurturing systems that convert more prospects into paying customers — automatically.',
        longDescription: `Your data systems should drive revenue. We build and integrate intelligent CRM ecosystems that capture every interaction, qualify them automatically, and trigger the right logic at the right time.\n\nFrom automated WhatsApp sequences to cross-platform lead nurturing, we architect the profit engine.`,
        features: ['Lead Scoring Logic', 'Automated Nurture Pipelines', 'Multi-channel Execution'],
        benefits: ['Increased conversion yield', 'Zero revenue leakage', 'Full pipeline visibility', 'Automated follow-up at scale'],
        useCases: ['Sales Pipeline Optimization', 'WhatsApp Lead Engines', 'Real Estate Systems', 'E-commerce Revenue Engines'],
    },
    // SCALE
    {
        slug: 'cloud-devops',
        icon: '☁️',
        group: 'SCALE',
        title: 'Cloud Systems & Site Reliability',
        tagline: 'Infrastructure that never breaks',
        description: 'Enterprise-grade cloud architecture, deployment pipelines, and reliability engineering that make your systems bulletproof.',
        longDescription: `Slow deployments, downtime, and scaling friction are symptoms of weak architecture. We build cloud systems on AWS, GCP, and Azure that are self-healing, auto-scaling, and deployed continuously.\n\nOur practices cover the full lifecycle: infrastructure as code, containerization, CI/CD pipelines, monitoring, and disaster recovery.`,
        features: ['Auto-scaling Architecture', 'CI/CD Pipelines', 'Reliability Engineering'],
        benefits: ['99.99% uptime SLA', 'Instant deployments', 'Automatic scaling under load', 'Disaster recovery built-in'],
        useCases: ['Cloud Migration', 'High-traffic Infrastructure', 'Microservices Architecture', 'Global Deployments'],
    },
    {
        slug: 'data-intelligence',
        icon: '📊',
        group: 'SCALE',
        title: 'Data Systems & Intelligence',
        titleAr: 'أنظمة البيانات والذكاء المؤسسي',
        tagline: 'Extract signal from noise',
        description: 'Transform raw business data into strategic intelligence with predictive models, data warehouses, and real-time visualization systems.',
        longDescription: `Your data is a massive asset — if you have the architecture to unlock it. Nexyrra builds custom data systems that transform raw input into strategic signals, predictive forecasts, and automated insights.\n\nWe connect your data sources (POS, CRM, ERP), unify them into a single source of truth, and surface real-time intelligence for decisive action.`,
        features: ['Predictive Logic', 'Custom Dashboards', 'Data Warehousing'],
        benefits: ['Real-time KPI visibility', 'Predictive revenue models', 'Automated anomaly detection', 'Executive-ready signals'],
        useCases: ['Revenue Growth Analytics', 'Customer Lifetime Modeling', 'Supply Chain Optimization', 'Market Intelligence Systems'],
    },
    {
        slug: 'digital-transformation',
        icon: '🚀',
        group: 'SCALE',
        title: 'Strategic Systems Transformation',
        tagline: 'Evolve or become obsolete',
        description: 'Strategic systems consulting to modernize legacy operations, restructure digital infrastructure, and build a technology roadmap for growth.',
        longDescription: `Systems transformation isn't just about software — it's about how your business executes. We provide the strategic clarity and technical engineering to move your organization from legacy to leading-edge.\n\nWe audit your current architecture, identify bottlenecks, and build an execution roadmap that delivers ROI at every phase.`,
        features: ['Architecture Audit', 'Execution Roadmap', 'Systemic Transformation'],
        benefits: ['Clear evolution path', 'ROI at every phase', 'Reduced technical overhead', 'Future-proof systems'],
        useCases: ['Legacy System Modernization', 'Digital Strategy Engineering', 'Tech Stack Optimization', 'Operational Transformation'],
    },
    // SECURE
    {
        slug: 'cybersecurity',
        icon: '🛡️',
        group: 'SECURE',
        title: 'Hardened Systems Security',
        tagline: 'Security by design, not by default',
        description: 'Enterprise cybersecurity architecture — from systems hardening and compliance to real-time threat detection and incident response.',
        longDescription: `A single systems failure can destroy trust and capital. We architect security from the ground up — hardening nodes, securing communication layers, and building real-time defenses across your entire infrastructure.\n\nOur practice covers application security, network hardening, identity management, and global data compliance.`,
        features: ['Systems Hardening', 'Compliance Engineering', 'Threat Monitoring'],
        benefits: ['Zero-trust architecture', 'Compliance-ready systems', '24/7 threat detection', 'Executive security reporting'],
        useCases: ['Security Audits & Hardening', 'Data Privacy Compliance', 'Application Security Tuning', 'Incident Response Architecture'],
    },
    {
        slug: 'api-integrations',
        icon: '🔗',
        group: 'SECURE',
        title: 'Systems Integration & APIs',
        tagline: 'Connect the ecosystem',
        description: 'Custom API development and infrastructure integrations that connect your entire technology stack into one unified, high-performance engine.',
        longDescription: `Disconnected systems kill momentum. We design and build robust communication layers that make your technology stack speak one language — from payment systems to ERP backbones.\n\nWhether you need custom microservices, event-driven infrastructure, or complex enterprise integrations, we deliver the plumbing.`,
        features: ['Microservices & APIs', 'Event-Driven Architecture', 'Enterprise Integration'],
        benefits: ['Unified data flow', 'Eliminate manual handoffs', 'Reliable, hardened connectivity', 'Built-in scalability'],
        useCases: ['Payment Infrastructure', 'ERP/CRM Sync', 'System-wide Middleware', 'Legacy-to-Cloud Bridging'],
    },
    {
        slug: 'ui-ux-design',
        icon: '🎨',
        group: 'SECURE',
        title: 'Systems Design & UI/UX',
        tagline: 'High-performance user interfaces',
        description: 'High-authority user interfaces and design systems that make your product feel premium, perform flawlessly, and convert users at scale.',
        longDescription: `Design is a systems component. Every interaction is part of a broader conversion engine. We build design systems that are aesthetically stunning, consistent, and engineered for high-performance outcomes.\n\nFrom user maps and systems architecture to component libraries and high-fidelity interfaces, we design for execution.`,
        features: ['Design System Architecture', 'Conversion Engineering', 'Component Libraries'],
        benefits: ['Consistent high-authority brand', 'Accelerated product build', 'Superior retention yield', 'Premium market perception'],
        useCases: ['Product Interface Design', 'Systems Redesign', 'Mobile Architecture UI', 'Design Infrastructure Build'],
    },
];
