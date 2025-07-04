import type { Config } from "tailwindcss";

export default {
    darkMode: ["class"],
    content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))'
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))'
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))'
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))'
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))'
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))'
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))'
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        chart: {
          '1': 'hsl(var(--chart-1))',
          '2': 'hsl(var(--chart-2))',
          '3': 'hsl(var(--chart-3))',
          '4': 'hsl(var(--chart-4))',
          '5': 'hsl(var(--chart-5))'
        }
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)'
      },
      animation: {
        'float-1': 'float1 7.2s ease-in-out infinite',
        'float-2': 'float2 9s ease-in-out infinite 2s',
        'float-3': 'float3 10.8s ease-in-out infinite 4s',
        'float-4': 'float4 13.5s ease-in-out infinite 1s',
        'float-5': 'float5 8.1s ease-in-out infinite 3s',
      },
      keyframes: {
        float1: {
          '0%, 100%': { transform: 'translate(-8%, -5%) scale(1) rotate(0deg)' },
          '25%': { transform: 'translate(-5%, -8%) scale(1.1) rotate(90deg)' },
          '50%': { transform: 'translate(-12%, -2%) scale(0.9) rotate(180deg)' },
          '75%': { transform: 'translate(-6%, -10%) scale(1.05) rotate(270deg)' },
        },
        float2: {
          '0%, 100%': { transform: 'translate(12%, -8%) scale(1) rotate(0deg)' },
          '25%': { transform: 'translate(8%, -5%) scale(1.15) rotate(-90deg)' },
          '50%': { transform: 'translate(15%, -12%) scale(0.85) rotate(-180deg)' },
          '75%': { transform: 'translate(10%, -6%) scale(1.1) rotate(-270deg)' },
        },
        float3: {
          '0%, 100%': { transform: 'translate(-15%, 8%) scale(1) rotate(0deg)' },
          '33%': { transform: 'translate(-12%, 12%) scale(1.2) rotate(120deg)' },
          '66%': { transform: 'translate(-18%, 5%) scale(0.8) rotate(240deg)' },
        },
        float4: {
          '0%, 100%': { transform: 'translate(-50%, -50%) scale(1) rotate(0deg)' },
          '20%': { transform: 'translate(-45%, -45%) scale(1.1) rotate(72deg)' },
          '40%': { transform: 'translate(-55%, -55%) scale(0.9) rotate(144deg)' },
          '60%': { transform: 'translate(-50%, -40%) scale(1.05) rotate(216deg)' },
          '80%': { transform: 'translate(-40%, -50%) scale(0.95) rotate(288deg)' },
        },
        float5: {
          '0%, 100%': { transform: 'translate(0%, 0%) scale(1) rotate(0deg)' },
          '30%': { transform: 'translate(6%, -8%) scale(1.1) rotate(108deg)' },
          '70%': { transform: 'translate(-6%, 8%) scale(0.9) rotate(252deg)' },
        },
      },
      container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px',
      },
      },
    }
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
