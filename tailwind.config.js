/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'event-horizon': '#020617',
        'cosmic-void': '#071330',
        'nebula-blue': '#4F9DFF',
        'quantum-violet': '#7C3AED',
        'aurora-cyan': '#22D3EE',
        'solar-flare': '#FB923C',
        'starlight-white': '#F8FAFC',
        'moon-dust': '#CBD5E1',
        'meteor-gray': '#64748B',
        'orbit-line': '#1E293B',
      },
      fontFamily: {
        'space-grotesk': ['Space Grotesk', 'sans-serif'],
        'clash': ['Clash Display', 'sans-serif'],
        'inter': ['Inter', 'sans-serif'],
      },
      animation: {
        'pulse-orbit': 'pulse-orbit 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'drift': 'drift 3s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite',
      },
      keyframes: {
        'pulse-orbit': {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.8', transform: 'scale(1.05)' },
        },
        'drift': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'glow': {
          '0%, 100%': { opacity: '0.5' },
          '50%': { opacity: '1' },
        },
      },
      boxShadow: {
        'nebula-glow': '0 0 20px rgba(79, 157, 255, 0.4)',
        'quantum-glow': '0 0 30px rgba(124, 58, 237, 0.3)',
        'aurora-glow': '0 0 25px rgba(34, 211, 238, 0.5)',
      },
    },
  },
  plugins: [],
}
