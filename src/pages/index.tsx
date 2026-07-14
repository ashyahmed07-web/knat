'use client';

import { useEffect, useRef, useState } from 'react';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import Navigation from '@/components/Navigation';
import UniverseSection from '@/components/UniverseSection';
import CosmosSection from '@/components/CosmosSection';
import JourneySection from '@/components/JourneySection';
import KaynatSection from '@/components/KaynatSection';
import Footer from '@/components/Footer';
import Lenis from 'lenis';

const HeroScene = dynamic(() => import('@/components/HeroScene'), {
  ssr: false,
});

export default function Home() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isMounted) return;

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
    });

    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = window.scrollY / scrollHeight;
      setScrollProgress(scrolled);
    };

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      lenis.destroy();
    };
  }, [isMounted]);

  if (!isMounted) {
    return (
      <div className="w-full h-screen bg-event-horizon flex items-center justify-center">
        <div className="text-center">
          <div className="w-12 h-12 rounded-full border-4 border-nebula-blue border-t-aurora-cyan animate-spin mx-auto mb-4" />
          <p className="text-moon-dust">Loading the cosmos...</p>
        </div>
      </div>
    );
  }

  return (
    <>
      <Head>
        <title>Kaynat - A Cosmic Journey</title>
        <meta name="description" content="An immersive space-themed storytelling website celebrating Kaynat—a universe of beauty, kindness, and infinite wonder." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#020617" />
        <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='75' font-size='75' fill='%234F9DFF'>✨</text></svg>" />
      </Head>

      <Navigation scrollProgress={scrollProgress} />

      <main>
        <HeroScene scrollProgress={scrollProgress} />
        <UniverseSection id="universe" />
        <CosmosSection id="cosmos" />
        <JourneySection id="the-journey" />
        <KaynatSection id="kaynat" />
      </main>

      <Footer />
    </>
  );
}
