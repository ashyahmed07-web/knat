'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export default function JourneySection({ id = 'the-journey' }: { id?: string }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: false, amount: 0.2 });

  const journeySteps = [
    { number: '01', title: 'The Big Bang', description: 'In the first fraction of a second, the entire universe erupted into existence from infinite density and temperature', icon: '⚡' },
    { number: '02', title: 'First Light', description: 'After 380,000 years, the universe became transparent, allowing light to travel freely for the first time', icon: '💡' },
    { number: '03', title: 'Galaxy Formation', description: 'Gravity pulled hydrogen together, igniting the first stars and galaxies across the cosmos', icon: '✨' },
    { number: '04', title: 'Stellar Evolution', description: 'Stars lived and died, creating heavier elements and seeding space with the chemistry of life', icon: '🌟' },
    { number: '05', title: 'Our Solar System', description: 'A cloud of gas and dust collapsed to form our Sun, planets, and ultimately, this pale blue dot', icon: '🌍' },
    { number: '06', title: 'Life Emerges', description: 'On Earth, simple molecules organized into living systems—and consciousness eventually arose', icon: '🧬' },
  ];

  return (
    <section id={id} ref={containerRef} className="min-h-screen py-24 px-6 relative overflow-hidden">
      <div className="max-w-5xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }} transition={{ duration: 0.8 }} className="mb-20 text-center">
          <div className="text-label text-solar-flare mb-4">THE COSMIC TIMELINE</div>
          <h2 className="display-large text-starlight-white mb-6">From Nothing to Everything</h2>
          <p className="text-body-large text-moon-dust">A journey spanning 13.8 billion years</p>
        </motion.div>

        <div className="relative">
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 -translate-x-1/2 bg-gradient-to-b from-nebula-blue via-quantum-violet to-aurora-cyan" />
          <div className="space-y-12">
            {journeySteps.map((step, index) => (
              <motion.div key={index} initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }} animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -40 : 40 }} transition={{ delay: index * 0.1, duration: 0.6 }} className={`flex items-center gap-8 md:gap-0 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                <div className={`flex-1 md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                  <motion.div whileHover={{ x: index % 2 === 0 ? 10 : -10 }} className="card group">
                    <div className="flex items-start gap-4">
                      <div className="text-4xl flex-shrink-0">{step.icon}</div>
                      <div className="flex-1">
                        <div className="text-label text-nebula-blue mb-2">EPOCH {step.number}</div>
                        <h3 className="text-xl font-space-grotesk font-bold text-starlight-white mb-3 group-hover:text-aurora-cyan transition-colors">{step.title}</h3>
                        <p className="text-body-small text-moon-dust leading-relaxed">{step.description}</p>
                      </div>
                    </div>
                  </motion.div>
                </div>
                <div className="hidden md:flex justify-center w-0">
                  <motion.div whileHover={{ scale: 1.3 }} className="w-6 h-6 rounded-full bg-gradient-to-r from-nebula-blue to-quantum-violet border-4 border-event-horizon cursor-pointer shadow-lg shadow-nebula-glow" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div initial={{ opacity: 0, y: 40 }} animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }} transition={{ delay: 0.6, duration: 0.8 }} className="mt-20 text-center">
          <p className="text-body-large text-moon-dust max-w-2xl mx-auto leading-relaxed italic">And so the universe evolved, through chaos and order, through stellar furnaces and silent voids. Each atom in your body was forged in the heart of a dying star. You are made of stardust, experiencing itself.</p>
        </motion.div>
      </div>
    </section>
  );
}
