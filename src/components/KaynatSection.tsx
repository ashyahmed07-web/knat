'use client';

import { useRef, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import gsap from 'gsap';

export default function KaynatSection({ id = 'kaynat' }: { id?: string }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const isInView = useInView(containerRef, { once: false, amount: 0.3 });

  useEffect(() => {
    if (!titleRef.current || !isInView) return;
    gsap.from(titleRef.current, { opacity: 0, y: 30, duration: 1 });
  }, [isInView]);

  const attributes = [
    { label: 'Eyes', description: 'Like the rarest stars in the firmament—each glance holds universes of depth, wonder, and warmth', emoji: '✨' },
    { label: 'Smile', description: 'Brighter than a thousand galaxies, capable of illuminating the darkest voids and reigniting dying suns', emoji: '💫' },
    { label: 'Spirit', description: 'A constellation of kindness, strength, and beauty that guides like the North Star in endless night', emoji: '🌟' },
    { label: 'Heart', description: 'A supernova of love—infinite, radiant, expanding to embrace all that exists', emoji: '💖' },
  ];

  return (
    <section id={id} ref={containerRef} className="min-h-screen py-24 px-6 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <motion.div animate={{ y: [0, 30, 0], x: [0, 20, 0] }} transition={{ duration: 8, repeat: Infinity }} className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-nebula-blue to-quantum-violet rounded-full blur-3xl opacity-10" />
        <motion.div animate={{ y: [0, -40, 0], x: [0, -15, 0] }} transition={{ duration: 10, repeat: Infinity }} className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-aurora-cyan to-nebula-blue rounded-full blur-3xl opacity-10" />
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : { opacity: 0 }} transition={{ duration: 1 }} className="mb-20 text-center">
          <div className="text-label text-aurora-cyan mb-6 tracking-widest">THE STORY CONCLUDES</div>
          <h2 ref={titleRef} className="display-hero text-transparent bg-clip-text bg-gradient-to-r from-nebula-blue via-quantum-violet to-aurora-cyan mb-8">
            Kaynat
          </h2>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }} transition={{ delay: 0.3, duration: 0.8 }} className="text-body-large text-moon-dust max-w-3xl mx-auto leading-relaxed italic">
            In all the vastness of the cosmos, across 13.8 billion years of cosmic evolution, from the first moments of existence to this present instant—the universe conspired to create something extraordinary. Not just life, not just consciousness, but *you*. Kaynat. A person whose existence brightens the entire cosmos.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {attributes.map((attr, index) => (
            <motion.div key={index} initial={{ opacity: 0, scale: 0.8, y: 40 }} animate={isInView ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.8, y: 40 }} transition={{ delay: 0.2 + index * 0.1, duration: 0.6 }} whileHover={{ y: -5 }} className="card group relative overflow-hidden">
              <div className="absolute -inset-1 bg-gradient-to-r from-nebula-blue via-quantum-violet to-aurora-cyan opacity-0 group-hover:opacity-20 blur transition duration-300 -z-10" />
              <div className="flex items-start gap-6">
                <div className="text-5xl flex-shrink-0">{attr.emoji}</div>
                <div className="flex-1">
                  <h3 className="text-2xl font-space-grotesk font-bold text-starlight-white mb-3 group-hover:text-aurora-cyan transition-colors">{attr.label}</h3>
                  <p className="text-body text-moon-dust leading-relaxed">{attr.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div initial={{ opacity: 0, y: 40 }} animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }} transition={{ delay: 0.5, duration: 0.8 }} className="relative">
          <div className="bg-gradient-to-r from-cosmic-void via-event-horizon to-cosmic-void card border-l-4 border-l-aurora-cyan">
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-body-large text-moon-dust mb-8 leading-relaxed italic">
                Kaynat, your name means "Universe" in some languages—and indeed, you *are* a universe unto yourself. A universe of kindness, of strength, of beauty that defies the ordinary.
              </p>
              <p className="text-body-large text-moon-dust mb-8 leading-relaxed italic">
                Your eyes—like the rarest stars, they hold the light of constellations not yet charted. Your smile—brighter than a thousand galaxies, capable of creating light in the darkest corners. Your spirit—a supernova of love and grace.
              </p>
              <p className="text-body-large text-starlight-white leading-relaxed">
                This website, this journey through the cosmos, all of it is just an elaborate metaphor for one simple truth:
              </p>
              <motion.p initial={{ scale: 0.8, opacity: 0 }} animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0 }} transition={{ delay: 0.7, duration: 0.8 }} className="text-3xl md:text-4xl font-clash font-bold text-transparent bg-clip-text bg-gradient-to-r from-nebula-blue via-quantum-violet to-aurora-cyan mt-8">
                In a universe of infinite possibilities,
                <br />
                You are my favorite reality.
              </motion.p>
            </div>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }} transition={{ delay: 0.8, duration: 0.8 }} className="mt-20 text-center">
          <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="btn-primary text-lg">
            ✨ Explore the Full Experience ✨
          </motion.button>
          <p className="text-moon-dust text-sm mt-6">For someone as special as you</p>
        </motion.div>
      </div>
    </section>
  );
}
