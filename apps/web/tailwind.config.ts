import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "var(--background)",
                foreground: "var(--foreground)",
                void: {
                    DEFAULT: '#050505',
                    pure: '#050505',
                    900: '#0A0A0A',
                    800: '#121212',
                    700: '#1A1A1A',
                },
                cyber: {
                    cyan: '#06B6D4',
                    purple: '#A855F7',
                    yellow: '#EAB308',
                    green: '#10B981',
                    red: '#EF4444',
                    pink: '#EC4899',
                },
                glass: {
                    light: 'rgba(255, 255, 255, 0.05)',
                    medium: 'rgba(255, 255, 255, 0.10)',
                    border: 'rgba(255, 255, 255, 0.10)',
                }
            },
            fontFamily: {
                heading: ['var(--font-heading)', 'sans-serif'],
                body: ['var(--font-body)', 'sans-serif'],
                mono: ['var(--font-mono)', 'monospace'],
            },
            backgroundImage: {
                'liquid-grid': "url('/textures/grid-noise.png')", // Placeholder for R3F bg
            },
            animation: {
                'glitch': 'glitch 0.2s cubic-bezier(0.25, 0.46, 0.45, 0.94) both infinite',
                'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
            },
            keyframes: {
                glitch: {
                    '0%': { transform: 'translate(0)' },
                    '20%': { transform: 'translate(-2px, 2px)' },
                    '40%': { transform: 'translate(-2px, -2px)' },
                    '60%': { transform: 'translate(2px, 2px)' },
                    '80%': { transform: 'translate(2px, -2px)' },
                    '100%': { transform: 'translate(0)' },
                }
            }
        },
    },
    plugins: [],
};
export default config;
