import React, { useRef } from 'react'
import { Canvas } from '@react-three/fiber'
import { SignalField } from '../../components/three/SignalField'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

export function Hero() {
  const heroRef = useRef()
  const titleRef = useRef()

  useGSAP(() => {
    const tl = gsap.timeline()
    tl.fromTo('.hero-text', 
      { y: 100, opacity: 0, clipPath: 'inset(100% 0 0 0)' },
      { y: 0, opacity: 1, clipPath: 'inset(0% 0 0 0)', duration: 1.5, stagger: 0.2, ease: 'power4.out', delay: 0.5 }
    )
    tl.fromTo('.hero-line',
      { scaleX: 0 },
      { scaleX: 1, duration: 1.5, ease: 'expo.inOut' },
      "-=1"
    )
    
    // Parallax en scroll
    gsap.to('.hero-bg', {
      yPercent: 30,
      ease: 'none',
      scrollTrigger: {
        trigger: heroRef.current,
        start: 'top top',
        end: 'bottom top',
        scrub: true
      }
    })
  }, { scope: heroRef })

  return (
    <section ref={heroRef} className="relative w-full h-screen bg-sender-dark overflow-hidden flex flex-col justify-center">
      <div className="absolute inset-0 z-0 hero-bg">
        <img 
          src="/webopen/images/hero-wide.jpg" 
          alt="SENDER Environment"
          className="w-full h-full object-cover opacity-20 mix-blend-luminosity scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-sender-dark/50 to-sender-dark"></div>
      </div>

      <div className="absolute inset-0 z-10 opacity-60">
        <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
          <SignalField />
        </Canvas>
      </div>

      <div className="relative z-20 px-6 md:px-12 max-w-7xl mx-auto w-full pointer-events-none">
        <div className="flex flex-col space-y-4">
          <span className="hero-text font-mono text-sender-light text-sm tracking-widest uppercase">
            [ SCENE 01 — THE SIGNAL ]
          </span>
          <div className="overflow-hidden py-2">
            <h1 className="hero-text text-sender-white text-7xl md:text-9xl font-black tracking-tighter leading-none">
              SENDER
            </h1>
          </div>
          <div className="hero-line origin-left flex flex-col md:flex-row md:items-center gap-4 md:gap-12 mt-8 border-t border-sender-white/20 pt-8">
            <h2 className="hero-text text-sender-white/80 text-xl md:text-2xl font-light tracking-wide">ENGINEERING</h2>
            <h2 className="hero-text text-sender-white/80 text-xl md:text-2xl font-light tracking-wide">TRANSMISSION</h2>
            <h2 className="hero-text text-sender-white/80 text-xl md:text-2xl font-light tracking-wide">BROADCASTING</h2>
          </div>
        </div>
      </div>
    </section>
  )
}
