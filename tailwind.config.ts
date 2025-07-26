import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				'background-secondary': 'hsl(var(--background-secondary))',
				foreground: 'hsl(var(--foreground))',
				glass: 'hsl(var(--glass))',
				'glass-border': 'hsl(var(--glass-border))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					glow: 'hsl(var(--primary-glow))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				advanced: {
					DEFAULT: 'hsl(var(--advanced))',
					light: 'hsl(var(--advanced-light))',
					dark: 'hsl(var(--advanced-dark))',
					foreground: 'hsl(var(--advanced-foreground))'
				},
				parent: {
					DEFAULT: 'hsl(var(--parent))',
					light: 'hsl(var(--parent-light))',
					dark: 'hsl(var(--parent-dark))',
					foreground: 'hsl(var(--parent-foreground))'
				},
				rm: {
					DEFAULT: 'hsl(var(--rm))',
					light: 'hsl(var(--rm-light))',
					dark: 'hsl(var(--rm-dark))',
					foreground: 'hsl(var(--rm-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				}
			},
			backgroundImage: {
				'gradient-nebula': 'var(--gradient-nebula)',
				'gradient-nebula-glow': 'var(--gradient-nebula-glow)',
				'gradient-glass': 'var(--gradient-glass)',
				'gradient-red-glow': 'var(--gradient-red-glow)'
			},
			boxShadow: {
				'glow': 'var(--shadow-glow)',
				'glass': 'var(--shadow-glass)',
				'floating': 'var(--shadow-floating)'
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' }
				},
				'twinkle': {
					'0%, 100%': { opacity: '0.3', transform: 'scale(1)' },
					'50%': { opacity: '1', transform: 'scale(1.2)' }
				},
				'float': {
					'0%, 100%': { transform: 'translateY(0px)' },
					'50%': { transform: 'translateY(-10px)' }
				},
				'pulse-glow': {
					'0%, 100%': { boxShadow: 'var(--shadow-glow)' },
					'50%': { boxShadow: '0 0 60px hsl(343 75% 43% / 0.5)' }
				},
				'fade-in': {
					'0%': { opacity: '0', transform: 'translateY(20px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' }
				},
				'float-text': {
					'0%, 100%': { transform: 'translateY(0px)' },
					'50%': { transform: 'translateY(-8px)' }
				},
				'premium-burn': {
					'0%, 100%': { 
						boxShadow: '0 0 20px hsl(160 60% 45% / 0.3), 0 0 40px hsl(160 60% 45% / 0.2), inset 0 0 20px hsl(160 60% 45% / 0.05)',
						borderColor: 'hsl(160 60% 45% / 0.4)'
					},
					'50%': { 
						boxShadow: '0 0 25px hsl(160 60% 45% / 0.5), 0 0 50px hsl(160 60% 45% / 0.3), inset 0 0 25px hsl(160 60% 45% / 0.1)',
						borderColor: 'hsl(160 60% 45% / 0.6)'
					}
				},
				'gentle-float': {
					'0%, 100%': { transform: 'translateY(0px)' },
					'50%': { transform: 'translateY(-5px)' }
				},
				'gentle-bounce': {
					'0%, 100%': { transform: 'translateY(0px)' },
					'25%, 75%': { transform: 'translateY(-3px)' },
					'50%': { transform: 'translateY(-6px)' }
				},
				'particle-fall': {
					'0%': { 
						transform: 'translateY(-10px) translateX(0px) scale(1)',
						opacity: '1'
					},
					'100%': { 
						transform: 'translateY(30px) translateX(10px) scale(0.3)',
						opacity: '0'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'twinkle': 'twinkle 3s infinite',
				'float': 'float 6s ease-in-out infinite',
				'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
				'fade-in': 'fade-in 0.6s ease-out',
				'float-text': 'float-text 4s ease-in-out infinite',
				'premium-burn': 'premium-burn 10s ease-in-out infinite',
				'particle-fall': 'particle-fall 2s linear infinite',
				'gentle-float': 'gentle-float 3s ease-in-out infinite',
				'gentle-bounce': 'gentle-bounce 2s ease-in-out infinite'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
