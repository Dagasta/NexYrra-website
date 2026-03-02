import type { Config } from 'tailwindcss';

const config: Config = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                'nex-bg': '#08090f',
                'nex-card': '#0e0f1a',
                'nex-violet': '#8B5CF6',
                'nex-cyan': '#22D3EE',
            },
            fontFamily: {
                main: ['Inter', 'system-ui', 'sans-serif'],
                title: ['Outfit', 'Inter', 'sans-serif'],
                cyber: ['Orbitron', 'monospace'],
            },
        },
    },
    plugins: [],
};

export default config;
