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
              <h3 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">Enlaces STL Cerro San Cristóbal</h3>
              <div className="font-mono text-xs uppercase tracking-widest border-b border-sender-white/20 pb-4 mb-6">
                Categoría: Infraestructura RF
              </div>
              <p className="text-lg font-light leading-relaxed mb-12">
                Trabajo de ingeniería de transmisión de alta frecuencia sobre el área metropolitana. Despliegue de arreglos para telecomunicaciones estratégicas.
              </p>
              
              <div className="bg-sender-dark/20 p-6 font-mono text-sm">
                <div className="mb-2 text-sender-white/50">DATA TÉCNICA</div>
                <ul className="space-y-2">
                  <li className="flex justify-between border-b border-sender-white/10 pb-1">
                    <span>SECTOR:</span> <span>Telecomunicaciones</span>
                  </li>
                  <li className="flex justify-between border-b border-sender-white/10 pb-1">
                    <span>UBICACIÓN:</span> <span>Santiago, Chile</span>
                  </li>
                  <li className="flex justify-between border-b border-sender-white/10 pb-1">
                    <span>ENLACE:</span> <span>STL Alta Frecuencia</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="lg:col-span-7 h-[60vh] bg-sender-dark/10 border border-sender-white/20 relative overflow-hidden group order-1 lg:order-2">
              <img 
                src="/webopen/images/proj-stl.jpg" 
                alt="Antenas STL Atardecer" 
                className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-[1.5s] ease-out" 
              />
              <div className="absolute inset-0 bg-sender-dark/20 mix-blend-overlay"></div>
              <div className="absolute top-4 left-4 w-4 h-4 border-t border-l border-sender-white/80"></div>
              <div className="absolute bottom-4 right-4 w-4 h-4 border-b border-r border-sender-white/80"></div>
            </div>
          </div>

          {/* Project 02 */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 h-[60vh] bg-sender-dark/10 border border-sender-white/20 relative overflow-hidden group">
              <img 
                src="/webopen/images/cap-broadcast.jpg" 
                alt="Antena Torre Nocturna Rapa Nui" 
                className="absolute inset-0 w-full h-full object-cover object-bottom group-hover:scale-105 transition-transform duration-[1.5s] ease-out" 
              />
              <div className="absolute inset-0 bg-sender-dark/10 mix-blend-overlay"></div>
              <div className="absolute top-4 left-4 w-4 h-4 border-t border-l border-sender-white/80"></div>
              <div className="absolute bottom-4 right-4 w-4 h-4 border-b border-r border-sender-white/80"></div>
            </div>

            <div className="lg:col-span-5">
              <div className="font-mono text-6xl font-bold text-sender-white/20 mb-4">02</div>
              <h3 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">Comunicaciones Costeras AM/MF</h3>
              <div className="font-mono text-xs uppercase tracking-widest border-b border-sender-white/20 pb-4 mb-6">
                Categoría: Defensa y Radiodifusión
              </div>
              <p className="text-lg font-light leading-relaxed mb-12">
                Solución de comunicaciones de alta eficiencia y largo alcance para entornos estratégicos marítimos y de alta complejidad meteorológica.
              </p>
              <div className="bg-sender-dark/20 p-6 font-mono text-sm">
                <div className="mb-2 text-sender-white/50">DATA TÉCNICA</div>
                <ul className="space-y-2">
                  <li className="flex justify-between border-b border-sender-white/10 pb-1">
                    <span>SISTEMA:</span> <span>MF/AM Largo Alcance</span>
                  </li>
                  <li className="flex justify-between border-b border-sender-white/10 pb-1">
                    <span>UBICACIÓN:</span> <span>Zona Costera Sur</span>
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
