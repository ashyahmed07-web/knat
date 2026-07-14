'use client';

import { useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function CosmosSection({ id = 'cosmos' }: { id?: string }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardsContainerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: false, amount: 0.2 });

  useEffect(() => {
    if (!cardsContainerRef.current) return;
    gsap.to('.cosmos-card', {
      scrollTrigger: {
        trigger: cardsContainerRef.current,
        start: 'top center',
        end: 'bottom center',
        scrub: 1,
      },
      x: (i) => i * 50,
      opacity: 1,
      rotation: (i) => i * 2,
    });
  }, []);

  const celestialBodies = [
    { name: 'Nebulae', subtitle: 'Stellar Nurseries', description: 'Vast clouds of gas and dust where new stars are born, often glowing in spectacular colors', icon: '🌌' },
    { name: 'Black Holes', subtitle: 'Cosmic Mysteries', description: 'Regions where spacetime is so warped that not even light can escape their gravitational pull', icon: '⚫' },
    { name: 'Supernovae', subtitle: 'Stellar Explosions', description: 'The violent death of stars that briefly outshine entire galaxies, seeding the cosmos with elements', icon: '💥' },
    { name: 'Pulsars', subtitle: 'Cosmic Lighthouses', description: 'Rapidly rotating neutron stars that emit beams of radiation, pulsing like cosmic beacons', icon: '✨' },
  ];

  return (
    <section id={id} ref={containerRef} className="min-h-screen py-24 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }} transition={{ duration: 0.8 }} className="mb-16 text-center">
          <div className="text-label text-aurora-cyan mb-4">WONDERS OF THE COSMOS</div>
          <h2 className="display-large text-starlight-white mb-6">Phenomena That Defy Understanding</h2>
          <p className="text-body-large text-moon-dust max-w-2xl mx-auto">The universe is populated with objects and events so extraordinary, they challenge the limits of our comprehension and imagination.</p>
        </motion.div>

        <div ref={cardsContainerRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {celestialBodies.map((body, index) => (
            <motion.div key={index} initial={{ opacity: 0, scale: 0.8, y: 40 }} animate={isInView ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.8, y: 40 }} transition={{ delay: index * 0.12, duration: 0.6 }} whileHover={{ y: -10 }} className="cosmos-card card group">
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">{body.icon}</div>
              <h3 className="text-xl font-space-grotesk font-bold text-starlight-white mb-2 group-hover:text-nebula-blue transition-colors">{body.name}</h3>
              <p className="text-label text-nebula-blue mb-3">{body.subtitle}</p>
              <p className="text-body-small text-moon-dust leading-relaxed">{body.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div initial={{ opacity: 0, y: 40 }} animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }} transition={{ delay: 0.3, duration: 0.8 }} className="bg-gradient-to-r from-event-horizon via-cosmic-void to-event-horizon card border-l-4 border-l-nebula-blue">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="text-label text-aurora-cyan mb-4">PROFOUND DISCOVERY</div>
              <h3 className="display-medium text-starlight-white mb-6">The Cosmic Web</h3>
              <p className="text-body text-moon-dust mb-4 leading-relaxed">Modern astronomy has revealed that galaxies are not randomly scattered throughout the universe. Instead, they are arranged in a cosmic web—vast filaments of galaxies separated by enormous voids. This structure emerged from tiny quantum fluctuations in the early universe, amplified by gravity over billions of years.</p>
              <p className="text-body text-moon-dust leading-relaxed">This revelation fundamentally changed how we understand our place in the cosmos: we are not at the center, not even particularly important—and yet, somehow, we exist to marvel at it all.</p>
            </div>
            <motion.div animate={{ y: [0, 20, 0] }} transition={{ duration: 4, repeat: Infinity }} className="h-80 bg-gradient-to-br from-nebula-blue via-quantum-violet to-cosmic-void rounded-lg overflow-hidden relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-6xl opacity-50">🌐</div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
