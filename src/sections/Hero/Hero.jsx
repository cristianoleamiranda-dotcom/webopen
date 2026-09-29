import React from 'react'
import { Canvas } from '@react-three/fiber'
import { SignalField } from '../../components/three/SignalField'

export function Hero() {
  return (
    <section className="relative w-full h-screen bg-sender-dark overflow-hidden flex flex-col justify-center">
      {/* 3D Background - The Signal Field */}
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
          <SignalField />
        </Canvas>
      </div>

      {/* Cinematic Typography Layer */}
      <div className="relative z-10 px-6 md:px-12 max-w-7xl mx-auto w-full pointer-events-none">
        <div className="flex flex-col space-y-4">
          <span className="font-mono text-sender-light text-sm tracking-widest uppercase">
            [ SCENE 01 — THE SIGNAL ]
          </span>
          <h1 className="text-sender-white text-6xl md:text-8xl font-black tracking-tighter leading-none">
            SENDER
          </h1>
          <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-12 mt-8 border-t border-sender-white/10 pt-8">
            <h2 className="text-sender-white/80 text-2xl font-light tracking-wide">
              ENGINEERING
            </h2>
            <h2 className="text-sender-white/80 text-2xl font-light tracking-wide">
              TRANSMISSION
            </h2>
            <h2 className="text-sender-white/80 text-2xl font-light tracking-wide">
              BROADCASTING
            </h2>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-12 left-6 md:left-12 z-10 font-mono text-sender-white/50 text-xs tracking-widest">
        SCROLL TO PROPAGATE ↓
      </div>
    </section>
  )
}
