# Kaynat - Immersive Space Storytelling Website

## 🌌 Overview

Kaynat is a cinematic, space-inspired website that tells a love story through the lens of the universe itself. The experience begins with the cosmos and evolves into a beautiful tribute to Kaynat—a person whose qualities are compared to the most extraordinary phenomena in the universe.

**Benchmark**: Not "clean SaaS site," but "planetarium meets premium sci-fi film title sequence."

## ✨ Key Features

### Immersive Scroll Mechanics
- **3D Camera Flythrough**: Scroll drives a virtual camera through a Three.js scene with planets, asteroids, and nebulae
- **Scroll-Scrubbed Animations**: GSAP ScrollTrigger ties animation progress directly to scroll distance (reversible)
- **Smooth Inertia Scrolling**: Lenis library decouples scroll input from rendering for a zero-gravity feel
- **Warp Cut Transitions**: Hyperspace jump effects between major sections instead of hard cuts

### Visual Design
- **Cosmic Color Palette**:
  - Event Horizon (#020617) - Main background
  - Cosmic Void (#071330) - Secondary background
  - Nebula Blue (#4F9DFF) - Primary accent
  - Quantum Violet (#7C3AED) - Interactive elements
  - Aurora Cyan (#22D3EE) - Hover states
  - Solar Flare (#FB923C) - Warnings/highlights

- **Typography**:
  - Clash Display for hero text
  - Space Grotesk for headings
  - Inter for body text

### Micro-Interactions
- Scroll-triggered reveals (fade + drift upward)
- Cursor-reactive glow effects
- Magnetic buttons
- Hover states with Aurora Cyan glow
- Themed loading state (pulsing orbit ring)

### Accessibility
- Full `prefers-reduced-motion` support
- WCAG AA contrast compliance
- Keyboard-navigable with visible focus states
- Semantic HTML structure

## 🛠️ Tech Stack

- **Framework**: Next.js 14+ with TypeScript
- **Animation**: GSAP + ScrollTrigger, Framer Motion
- **Smooth Scroll**: Lenis
- **3D Graphics**: React Three Fiber / Three.js
- **Styling**: Tailwind CSS with custom theme
- **Fonts**: Space Grotesk, Clash Display, Inter

## 📦 Installation

```bash
# Clone the repository
git clone https://github.com/ashyahmed07-web/knat.git
cd knat

# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
npm start
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```
src/
├── components/
│   ├── Navigation.tsx         # Glassmorphic nav bar
│   ├── HeroScene.tsx          # 3D flythrough scene
│   ├── UniverseSection.tsx    # Cosmic foundations
│   ├── CosmosSection.tsx      # Wonders of cosmos
│   ├── JourneySection.tsx     # Timeline journey
│   ├── KaynatSection.tsx      # Love letter finale
│   └── Footer.tsx             # Footer with links
├── pages/
│   ├── _app.tsx              # App wrapper
│   └── index.tsx             # Main page
└── styles/
    └── globals.css           # Global styles & theme
```

## 🎨 Story Arc

1. **Universe Section** - Explores cosmic foundations, the Big Bang, and universal scale
2. **Cosmos Section** - Discovers extraordinary phenomena (nebulae, black holes, supernovae, pulsars)
3. **Journey Section** - Timeline from Big Bang to emergence of life
4. **Kaynat Section** - The story concludes with a celebration of Kaynat
   - Eyes like rare stars
   - Smile brighter than galaxies
   - Spirit as a constellation of grace
   - Heart as a supernova of love

## 🌟 Performance Optimizations

- Lazy-loaded WebGL/particle assets
- Fast initial paint with deferred 3D scene load
- Instanced particle geometry for starfield
- CSS-based animations for non-critical elements
- Respects `prefers-reduced-motion` to disable expensive 3D rendering

## 📱 Responsive Design

- Mobile-first approach
- Adaptive typography (clamp() for fluid scaling)
- Touch-friendly interactions
- Optimized performance on lower-end devices

## ♿ Accessibility

- WCAG AA contrast compliance
- Full keyboard navigation
- Focus states (Aurora Cyan outline)
- Semantic HTML structure
- Reduced motion support

## 🚀 Deployment

Deploy to Vercel, Netlify, or any Next.js-compatible host:

```bash
# Vercel (recommended)
vercel deploy

# Or build for self-hosting
npm run build
npm start
```

## 💝 Credits

Crafted with ✨ and cosmic love for someone extraordinary.

---

**In a universe of infinite possibilities, you are my favorite reality.** ✨🌌
