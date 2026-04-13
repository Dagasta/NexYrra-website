import React from 'react';
import NeonHero from '../components/NeonHero';
import MatrixNodes from '../components/MatrixNodes';
import MatrixServices from '../components/MatrixServices';
import NeonPlayground from '../components/NeonPlayground';
import MatrixFooter from '../components/MatrixFooter';

export default function Home() {
    return (
        <main>
            {/* The Top Hero strictly matching Image 1 */}
            <NeonHero />
            
            {/* The Marquee and Node grid strictly matching Image 2 */}
            <MatrixNodes />

            {/* The expanded services returning the core content to the site */}
            <MatrixServices />

            {/* The functional terminal playground */}
            <NeonPlayground />
            
            {/* The contact & navigation footer */}
            <MatrixFooter />
        </main>
    );
}
