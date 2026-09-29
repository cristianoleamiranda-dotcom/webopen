import React, { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export function Projects() {
  const containerRef = useRef()

  useGSAP(() => {
    gsap.utils.toArray('.project-image').forEach(img => {
      gsap.to(img, {
        yPercent: 15,
        ease: 'none',
        scrollTrigger: {
          trigger: img.parentElement,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true
        }
      })
    })

    gsap.utils.toArray('.project-text').forEach(text => {
      gsap.fromTo(text, 
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1, ease: 'power3.out', scrollTrigger: { trigger: text, start: 'top 85%' } }
      )
    })
  }, { scope: containerRef })

  return (
    <section ref={containerRef} id="proyectos" className="w-full min-h-screen bg-sender-blue text-sender-white py-32 px-6 md:px-12 relative z-10">
      <div className="max-w-7xl mx-auto w-full">
        <span className="font-mono text-sender-white/70 text-sm tracking-widest uppercase mb-24 block">
          [ SCENE 05 — PROJECTS ]
        </span>
        
        <div className="flex flex-col gap-40">
          {/* Project 01 */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center project-text">
            <div className="lg:col-span-5 order-2 lg:order-1">
              <div className="font-mono text-6xl font-bold text-sender-white/20 mb-4">01</div>
              <h3 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">Desmontaje Armada de Chile</h3>
              <div className="font-mono text-xs uppercase tracking-widest border-b border-sender-white/20 pb-4 mb-6">Infraestructura</div>
              <p className="text-lg font-light leading-relaxed mb-12">Desmontaje complejo de infraestructura estratégica en Playa Ancha.</p>
            </div>
            
            <div className="lg:col-span-7 h-[70vh] bg-sender-dark/10 border border-sender-white/20 relative overflow-hidden group order-1 lg:order-2">
              <img src="/webopen/images/IMG-20260910-WA0022.jpg" alt="Torre Armada" className="project-image absolute -top-[15%] w-full h-[130%] object-cover object-center mix-blend-luminosity opacity-80" />
            </div>
          </div>

          {/* Project 02 */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center project-text">
            <div className="lg:col-span-7 h-[70vh] bg-sender-dark/10 border border-sender-white/20 relative overflow-hidden group">
              <img src="/webopen/images/antena-navtex.jpg" alt="Rapa Nui" className="project-image absolute -top-[15%] w-full h-[130%] object-cover object-bottom mix-blend-luminosity opacity-80" />
            </div>

            <div className="lg:col-span-5">
              <div className="font-mono text-6xl font-bold text-sender-white/20 mb-4">02</div>
              <h3 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">Comunicaciones HF Rapa Nui</h3>
              <div className="font-mono text-xs uppercase tracking-widest border-b border-sender-white/20 pb-4 mb-6">Misión Crítica</div>
              <p className="text-lg font-light leading-relaxed mb-12">Solución de alta eficiencia y largo alcance instalada en Isla de Pascua.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
