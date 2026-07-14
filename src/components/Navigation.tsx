'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import clsx from 'clsx';

interface NavigationProps {
  scrollProgress: number;
}

export default function Navigation({ scrollProgress }: NavigationProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = ['Universe', 'Cosmos', 'The Journey', 'Kaynat'];

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className={clsx(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
        isScrolled ? 'glass backdrop-blur-md' : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <motion.div whileHover={{ scale: 1.05 }} className="flex items-center gap-2 cursor-pointer">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-nebula-blue to-quantum-violet flex items-center justify-center">
            <span className="text-white font-clash font-bold text-sm">K</span>
          </div>
          <span className="text-starlight-white font-clash font-bold text-lg">KAYNAT</span>
        </motion.div>

        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item, index) => (
            <motion.a key={item} href={`#${item.toLowerCase()}`} whileHover={{ color: '#22D3EE' }} className="text-moon-dust hover:text-aurora-cyan transition-colors text-sm font-space-grotesk tracking-wide" initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.1 }}>
              {item}
            </motion.a>
          ))}
        </div>

        <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="btn-primary hidden md:block">
          Explore Now
        </motion.button>

        <motion.button whileTap={{ scale: 0.95 }} className="md:hidden text-starlight-white" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} aria-label="Toggle menu">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </motion.button>
      </div>

      {isMobileMenuOpen && (
        <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="md:hidden glass backdrop-blur-lg border-t border-orbit-line">
          <div className="px-6 py-4 space-y-4">
            {navItems.map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="block text-moon-dust hover:text-aurora-cyan transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
                {item}
              </a>
            ))}
            <button className="btn-primary w-full mt-4">Explore Now</button>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}
