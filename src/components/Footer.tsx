'use client';

import { motion } from 'framer-motion';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-event-horizon border-t border-orbit-line relative overflow-hidden py-12 px-6">
      <div className="absolute inset-0 pointer-events-none">
        <motion.div animate={{ opacity: [0.3, 0.6, 0.3] }} transition={{ duration: 5, repeat: Infinity }} className="absolute top-0 left-1/4 w-96 h-96 bg-nebula-blue rounded-full blur-3xl opacity-5" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-nebula-blue to-quantum-violet" />
              <span className="font-clash font-bold text-starlight-white">KAYNAT</span>
            </div>
            <p className="text-moon-dust text-sm leading-relaxed">A love letter written in stardust across the infinite expanse of the cosmos.</p>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}>
            <h4 className="text-starlight-white font-space-grotesk font-bold mb-4 text-label tracking-widest">NAVIGATION</h4>
            <ul className="space-y-2">
              {['Universe', 'Cosmos', 'Journey', 'Kaynat'].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase()}`} className="text-moon-dust hover:text-aurora-cyan transition-colors text-sm">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}>
            <h4 className="text-starlight-white font-space-grotesk font-bold mb-4 text-label tracking-widest">CONNECT</h4>
            <ul className="space-y-2">
              {[{ label: 'GitHub', href: '#' }, { label: 'Twitter', href: '#' }, { label: 'Email', href: 'mailto:hello@kaynat.space' }].map((item) => (
                <li key={item.label}>
                  <a href={item.href} className="text-moon-dust hover:text-nebula-blue transition-colors text-sm">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        <div className="border-t border-orbit-line mb-8" />

        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.3 }} className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-moon-dust text-sm text-center md:text-left">© {currentYear} Kaynat. Crafted with ✨ and cosmic love.</p>
          <p className="text-moon-dust text-sm text-center">"In a universe of infinite possibilities, you are my favorite reality."</p>
        </motion.div>
      </div>
    </footer>
  );
}
