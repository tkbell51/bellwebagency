/** @type {import('tailwindcss').Config} */
export default {
    theme: {
        container: {
            center: true,
            padding: { DEFAULT: '1.25rem', sm: '2rem', lg: '2.5rem' },
            screens: { '2xl': '1320px' },
        },
        extend: {
            colors: {
                // Contrast-checked: ink/paper 16.9:1, muted/paper 6.5:1, copper-deep/paper 5.1:1, copper/ink 6.7:1
                ink: { DEFAULT: '#121110', soft: '#1f1d1b', line: '#2e2b28' },
                paper: { DEFAULT: '#f5f2ec', deep: '#ebe6dd' },
                muted: { DEFAULT: '#5c564f', dark: '#b8b1a7' },
                copper: { DEFAULT: '#d5893d', deep: '#9c5418' },
                line: 'rgb(18 17 16 / 0.12)',
            },
            fontFamily: {
                sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
                display: ['"Inter Tight"', 'Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
                serif: ['"Instrument Serif"', 'ui-serif', 'Georgia', 'serif'],
            },
            fontSize: {
                'display-xl': ['clamp(3.25rem, 8.5vw, 7.5rem)', { lineHeight: '0.94', letterSpacing: '-0.045em' }],
                'display-lg': ['clamp(2.5rem, 5.6vw, 5rem)', { lineHeight: '0.98', letterSpacing: '-0.04em' }],
                'display-md': ['clamp(2rem, 3.8vw, 3.25rem)', { lineHeight: '1.04', letterSpacing: '-0.035em' }],
                'display-sm': ['clamp(1.375rem, 2.2vw, 1.875rem)', { lineHeight: '1.15', letterSpacing: '-0.025em' }],
                lede: ['clamp(1.125rem, 1.6vw, 1.3125rem)', { lineHeight: '1.6' }],
            },
            maxWidth: {
                prose: '62ch',
            },
            transitionTimingFunction: {
                out: 'cubic-bezier(0.22, 1, 0.36, 1)',
            },
            keyframes: {
                'page-scroll': {
                    '0%, 8%': { transform: 'translateY(0)' },
                    '92%, 100%': { transform: 'translateY(calc(-100% + 100cqh))' },
                },
                'fade-up': {
                    from: { opacity: '0', transform: 'translateY(18px)' },
                    to: { opacity: '1', transform: 'translateY(0)' },
                },
            },
            animation: {
                'page-scroll': 'page-scroll 36s cubic-bezier(0.45, 0, 0.55, 1) infinite alternate',
                'fade-up': 'fade-up 0.9s cubic-bezier(0.22, 1, 0.36, 1) both',
            },
        },
    },
}
