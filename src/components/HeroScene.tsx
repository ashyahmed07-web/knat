'use client';

import { useEffect, useRef } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Stars } from '@react-three/drei';
import * as THREE from 'three';
import { motion } from 'framer-motion';

function CameraController({ scrollProgress }: { scrollProgress: number }) {
  const { camera } = useThree();

  useFrame(() => {
    const targetZ = 20 - scrollProgress * 30;
    const targetY = -scrollProgress * 5;
    camera.position.z = THREE.MathUtils.lerp(camera.position.z, targetZ, 0.05);
    camera.position.y = THREE.MathUtils.lerp(camera.position.y, targetY, 0.05);
  });

  return null;
}

function AnimatedPlanets() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.0005;
    }
  });

  return (
    <group ref={groupRef}>
      <mesh position={[0, 0, 0]}>
        <sphereGeometry args={[2, 32, 32]} />
        <meshBasicMaterial color="#FB923C" />
      </mesh>
      <mesh position={[8, 0, 0]}>
        <sphereGeometry args={[1.2, 32, 32]} />
        <meshPhongMaterial color="#4F9DFF" />
      </mesh>
      <mesh position={[-10, 5, -5]}>
        <sphereGeometry args={[3, 32, 32]} />
        <meshBasicMaterial color="#7C3AED" transparent opacity={0.1} />
      </mesh>
    </group>
  );
}

interface HeroSceneProps {
  scrollProgress: number;
}

export default function HeroScene({ scrollProgress }: HeroSceneProps) {
  const prefersReducedMotion = typeof window !== 'undefined' ? window.matchMedia('(prefers-reduced-motion: reduce)').matches : false;

  if (prefersReducedMotion) {
    return (
      <div className="w-full h-screen bg-gradient-to-b from-event-horizon via-cosmic-void to-event-horizon flex items-center justify-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center">
          <h1 className="display-hero text-starlight-white mb-6">Kaynat</h1>
          <p className="text-moon-dust text-lg">A journey through the cosmos</p>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="w-full h-screen relative">
      <Canvas camera={{ position: [0, 0, 20], fov: 50 }} className="w-full h-full" dpr={typeof window !== 'undefined' ? window.devicePixelRatio : 1}>
        <color attach="background" args={['#020617']} />
        <Stars radius={100} depth={50} count={1000} factor={4} />
        <AnimatedPlanets />
        <CameraController scrollProgress={scrollProgress} />
      </Canvas>

      <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-center z-10">
          <div className="text-label text-aurora-cyan mb-4">Welcome to the cosmos</div>
          <h1 className="display-hero text-starlight-white mb-6 font-clash">Kaynat</h1>
          <p className="text-body-large text-moon-dust max-w-2xl mx-auto mb-12">A love letter written in stardust, across the infinite expanse of space and time</p>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="pointer-events-auto">
            <button className="btn-primary">Begin the Journey</button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
