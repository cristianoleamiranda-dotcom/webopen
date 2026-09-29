import React from 'react'

export function Projects() {
  return (
    <section id="proyectos" className="w-full min-h-[150vh] bg-sender-blue text-sender-white py-32 px-6 md:px-12">
      <div className="max-w-7xl mx-auto w-full">
        <span className="font-mono text-sender-white/70 text-sm tracking-widest uppercase mb-12 block">
          [ SCENE 05 — PROJECTS ]
        </span>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 sticky top-32">
          <div className="lg:col-span-5">
            <div className="font-mono text-6xl font-bold text-sender-white/20 mb-4">01</div>
            <h3 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">Actualización Planta Transmisora</h3>
            <div className="font-mono text-xs uppercase tracking-widest border-b border-sender-white/20 pb-4 mb-6">
              Categoría: Transmisión FM
            </div>
            <p className="text-lg font-light leading-relaxed mb-12">
              Despliegue completo de un nuevo sistema de transmisión con redundancia n+1 para asegurar conectividad ininterrumpida.
            </p>
            
            <div className="bg-sender-dark/20 p-6 font-mono text-sm">
              <div className="mb-2 text-sender-white/50">DATA TÉCNICA</div>
              <ul className="space-y-2">
                <li className="flex justify-between border-b border-sender-white/10 pb-1">
                  <span>POTENCIA:</span> <span>10 kW</span>
                </li>
                <li className="flex justify-between border-b border-sender-white/10 pb-1">
                  <span>FRECUENCIA:</span> <span>98.5 MHz</span>
                </li>
                <li className="flex justify-between border-b border-sender-white/10 pb-1">
                  <span>SISTEMA:</span> <span>Estado Sólido</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="lg:col-span-7 h-[60vh] bg-sender-dark/10 border border-sender-white/20 flex flex-col items-center justify-center relative overflow-hidden">
            <span className="font-mono text-sender-white/50 text-sm text-center px-4">
              [ IMAGE ROLE 04 — PROJECT ]<br/>
              REAL PHOTOGRAPHY OVERLAY HERE
            </span>
            <div className="absolute top-4 left-4 w-4 h-4 border-t border-l border-sender-white/50"></div>
            <div className="absolute bottom-4 right-4 w-4 h-4 border-b border-r border-sender-white/50"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
