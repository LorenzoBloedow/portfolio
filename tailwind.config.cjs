/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
        screens: {
            xs: '318px',
            sm: '373px',
            md: '766px',
            lg: '1278px',
            xl: '1918px'
        },
		extend: {
            fontFamily: {
                climate: ["Climate Crisis", "sans-serif"],
                sans: ["Cabin", "sans-serif"]
            },
            colors: {
                "primary": "var(--primary)",
                "secondary": "var(--secondary)",
                "accent": "var(--accent)"
            }
        }
	},
	plugins: [],
    future: {
        hoverOnlyWhenSupported: true
    }
}