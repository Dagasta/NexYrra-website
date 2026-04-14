import React from 'react';
import OSNavbar from '../components/OSNavbar';
import OSHero from '../components/OSHero';
import AICapabilities from '../components/AICapabilities';
import WhatWeBuild from '../components/WhatWeBuild';
import ServicesOS from '../components/ServicesOS';
import LiveDashboard from '../components/LiveDashboard';
import CaseStudies from '../components/CaseStudies';
import WhyUs from '../components/WhyUs';
import ClientJourney from '../components/ClientJourney';
import FinalCTA from '../components/FinalCTA';
import OSFooter from '../components/OSFooter';
import AIChatWidget from '../components/AIChatWidget';
import TechMarquee from '../components/TechMarquee';

export default function Home() {
    return (
        <main>
            <OSNavbar />
            <OSHero />
            
            <TechMarquee 
                items={['AUTONOMOUS AGENTS', 'NEURAL NETWORKS', 'ZERO-LATENCY CLOUD', 'PREDICTIVE ML', 'BESPOKE SAAS', 'EDGE COMPUTE']} 
                speed={30} 
            />
            
            <AICapabilities />
            <WhatWeBuild />
            <ServicesOS />
            <LiveDashboard />
            <CaseStudies />
            <WhyUs />
            <ClientJourney />
            <FinalCTA />
            <OSFooter />
            <AIChatWidget />
        </main>
    );
}
