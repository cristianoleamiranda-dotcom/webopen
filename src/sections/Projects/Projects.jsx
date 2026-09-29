import React from 'react'

export function Projects() {
  return (
    <section id="proyectos" className="w-full min-h-screen bg-sender-blue text-sender-white py-32 px-6 md:px-12">
      <div className="max-w-7xl mx-auto w-full">
        <span className="font-mono text-sender-white/70 text-sm tracking-widest uppercase mb-24 block">
          [ SCENE 05 — PROJECTS ]
        </span>
        
        <div className="flex flex-col gap-32">
          {/* Project 01 */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 order-2 lg:order-1">
              <div className="font-mono text-6xl font-bold text-sender-white/20 mb-4">01</div>
              <h3 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">Desmontaje Armada de Chile</h3>
              <div className="font-mono text-xs uppercase tracking-widest border-b border-sender-white/20 pb-4 mb-6">
                Categoría: Infraestructura
              </div>
              <p className="text-lg font-light leading-relaxed mb-12">
                Trabajo de ingeniería civil y telecomunicaciones para la Armada de Chile. Desmontaje complejo de infraestructura estratégica en Playa Ancha.
              </p>
              
              <div className="bg-sender-dark/20 p-6 font-mono text-sm">
                <div className="mb-2 text-sender-white/50">DATA TÉCNICA</div>
                <ul className="space-y-2">
                  <li className="flex justify-between border-b border-sender-white/10 pb-1">
                    <span>CLIENTE:</span> <span>Armada de Chile</span>
                  </li>
                  <li className="flex justify-between border-b border-sender-white/10 pb-1">
                    <span>UBICACIÓN:</span> <span>Valparaíso</span>
                  </li>
                  <li className="flex justify-between border-b border-sender-white/10 pb-1">
                    <span>ESTRUCTURA:</span> <span>Torre 60 metros</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="lg:col-span-7 h-[60vh] bg-sender-dark/10 border border-sender-white/20 relative overflow-hidden group order-1 lg:order-2">
              <img 
                src="/images/IMG-20260910-WA0022.jpg" 
                alt="Torre Armada de Chile" 
                className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-[1.5s] ease-out" 
              />
              <div className="absolute inset-0 bg-sender-dark/20 mix-blend-overlay"></div>
              {/* Technical visual elements */}
              <div className="absolute top-4 left-4 w-4 h-4 border-t border-l border-sender-white/80"></div>
              <div className="absolute bottom-4 right-4 w-4 h-4 border-b border-r border-sender-white/80"></div>
            </div>
          </div>

          {/* Project 02 */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 h-[60vh] bg-sender-dark/10 border border-sender-white/20 relative overflow-hidden group">
              <img 
                src="/images/antena-navtex.jpg" 
                alt="Antena HF Rapa Nui" 
                className="absolute inset-0 w-full h-full object-cover object-bottom group-hover:scale-105 transition-transform duration-[1.5s] ease-out" 
              />
              <div className="absolute inset-0 bg-sender-dark/30 mix-blend-overlay"></div>
              <div className="absolute top-4 left-4 w-4 h-4 border-t border-l border-sender-white/80"></div>
              <div className="absolute bottom-4 right-4 w-4 h-4 border-b border-r border-sender-white/80"></div>
            </div>

            <div className="lg:col-span-5">
              <div className="font-mono text-6xl font-bold text-sender-white/20 mb-4">02</div>
              <h3 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">Comunicaciones HF Rapa Nui</h3>
              <div className="font-mono text-xs uppercase tracking-widest border-b border-sender-white/20 pb-4 mb-6">
                Categoría: Defensa y Radiodifusión
              </div>
              <p className="text-lg font-light leading-relaxed mb-12">
                Solución de comunicaciones de alta eficiencia y largo alcance para entornos estratégicos con instalación y operación directa en Isla de Pascua.
              </p>
              <div className="bg-sender-dark/20 p-6 font-mono text-sm">
                <div className="mb-2 text-sender-white/50">DATA TÉCNICA</div>
                <ul className="space-y-2">
                  <li className="flex justify-between border-b border-sender-white/10 pb-1">
                    <span>SISTEMA:</span> <span>HF Largo Alcance</span>
                  </li>
                  <li className="flex justify-between border-b border-sender-white/10 pb-1">
                    <span>UBICACIÓN:</span> <span>Isla de Pascua</span>
                  </li>
                  <li className="flex justify-between border-b border-sender-white/10 pb-1">
                    <span>OPERACIÓN:</span> <span>Misión Crítica</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
