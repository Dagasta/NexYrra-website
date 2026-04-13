import React from 'react';
import NeonHero from '../components/NeonHero';
import MatrixNodes from '../components/MatrixNodes';
import Footer from '../components/Footer';

export default function Home() {
    return (
        <main>
            {/* The Top Hero strictly matching Image 1 */}
            <NeonHero />
            
            {/* The Marquee and Node grid strictly matching Image 2 */}
            <MatrixNodes />
            
            <Footer />
        </main>
    );
}
