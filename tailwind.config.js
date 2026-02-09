/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: ["class"],
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				border: "hsl(var(--border))",
				input: "hsl(var(--input))",
				ring: "hsl(var(--ring))",
				background: "hsl(var(--background))",
				foreground: "hsl(var(--foreground))",
				primary: {
					DEFAULT: "hsl(var(--primary))",
					foreground: "hsl(var(--primary-foreground))",
				},
				secondary: {
					DEFAULT: "hsl(var(--secondary))",
					foreground: "hsl(var(--secondary-foreground))",
				},
				destructive: {
					DEFAULT: "hsl(var(--destructive))",
					foreground: "hsl(var(--destructive-foreground))",
				},
				muted: {
					DEFAULT: "hsl(var(--muted))",
					foreground: "hsl(var(--muted-foreground))",
				},
				accent: {
					DEFAULT: "hsl(var(--accent))",
					foreground: "hsl(var(--accent-foreground))",
				},
				popover: {
					DEFAULT: "hsl(var(--popover))",
					foreground: "hsl(var(--popover-foreground))",
				},
				card: {
					DEFAULT: "hsl(var(--card))",
					foreground: "hsl(var(--card-foreground))",
				},
				// Brand Colors - Premium Nightlife Theme
				"royal-purple": "#2E1A47",
				"dark-violet": "#3B235A",
				"soft-gold": "#C9B27C",
				"charcoal": "#1E1E1E",
				"brand-black": "#0B0B0F", // Keeping for legacy support if needed
				"brand-gray": "#F4F4F4",
			},
			fontFamily: {
				heading: ["var(--font-playfair)", "serif"],
				body: ["var(--font-inter)", "sans-serif"],
			},
			borderRadius: {
				lg: "var(--radius)",
				md: "calc(var(--radius) - 2px)",
				sm: "calc(var(--radius) - 4px)",
			},
			backgroundImage: {
				'gradient-luxury': 'linear-gradient(135deg, #2E1A47 0%, #3B235A 100%)',
				'gradient-gold': 'linear-gradient(135deg, #C9B27C 0%, #E5D5A8 50%, #C9B27C 100%)',
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
};
