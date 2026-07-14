'use client';

import { useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function UniverseSection({ id = 'universe' }: { id?: string }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: false, amount: 0.3 });

  useEffect(() => {
    if (!containerRef.current) return;
    gsap.to('.fact-card', {
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top center',
        end: 'bottom center',
        scrub: 1,
      },
      opacity: 1,
      y: 0,
      stagger: 0.2,
    });
  }, []);

  const facts = [
    { number: '13.8B', label: 'Years Old', description: 'The universe began with the Big Bang, approximately 13.8 billion years ago' },
    { number: '2T+', label: 'Galaxies', description: 'Recent observations suggest over 2 trillion galaxies exist in the observable universe' },
    { number: '300K', label: 'Light-Years', description: 'Distance light travels in one year, the cosmic ruler of space' },
    { number: '96%', label: 'Unknown', description: 'Dark matter and dark energy comprise most of the universe, their nature still mysterious' },
  ];

  return (
    <section id={id} ref={containerRef} className="min-h-screen py-24 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }} transition={{ duration: 0.8 }} className="mb-16 text-center">
          <div className="text-label text-nebula-blue mb-4">COSMIC FOUNDATIONS</div>
          <h2 className="display-large text-starlight-white mb-6">The Universe Awakens</h2>
          <p className="text-body-large text-moon-dust max-w-2xl mx-auto">Before stars, before galaxies, before time itself—there was a singularity. In that infinite moment, everything that exists was born.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {facts.map((fact, index) => (
            <motion.div key={index} initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }} transition={{ delay: index * 0.15, duration: 0.6 }} className="fact-card card group cursor-pointer">
              <div className="relative">
                <div className="text-4xl font-clash font-bold text-nebula-blue mb-2 group-hover:text-aurora-cyan transition-colors">{fact.number}</div>
                <div className="text-label text-meteor-gray mb-4">{fact.label}</div>
                <p className="text-body-small text-moon-dust leading-relaxed">{fact.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div initial={{ opacity: 0, y: 40 }} animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }} transition={{ delay: 0.4, duration: 0.8 }} className="bg-gradient-to-r from-cosmic-void to-event-horizon card">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="display-medium text-starlight-white mb-6">The Fabric of Reality</h3>
              <p className="text-body text-moon-dust mb-4 leading-relaxed">The universe is not simply a collection of objects floating in space. It is a dynamic, interconnected web—spacetime itself curves and bends around matter and energy. Einstein revealed that gravity is not a force pulling objects together, but rather the shape of the universe responding to the presence of mass.</p>
              <p className="text-body text-moon-dust leading-relaxed">This cosmic dance continues today: galaxies spiral through the void, stars ignite in their cores, and somewhere in this infinite expanse, consciousness emerged to wonder about its own existence.</p>
            </div>
            <div className="relative h-96 bg-gradient-to-br from-quantum-violet via-cosmic-void to-event-horizon rounded-lg overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div animate={{ rotate: 360 }} transition={{ duration: 20, repeat: Infinity, ease: 'linear' }} className="w-32 h-32 border-2 border-nebula-blue rounded-full" />
              </div>
              <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 4, repeat: Infinity }} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-gradient-to-r from-nebula-blue to-quantum-violet rounded-full blur-2xl opacity-50" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
