import React from 'react'

export function Engineering() {
  return (
    <section id="ingenieria" className="w-full min-h-screen bg-sender-dark text-sender-white py-32 px-6 md:px-12 border-t border-sender-white/10">
      <div className="max-w-7xl mx-auto w-full">
        <span className="font-mono text-sender-light text-sm tracking-widest uppercase mb-12 block">
          [ SCENE 03 — ENGINEERING ]
        </span>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <div className="w-full aspect-square bg-sender-white/5 border border-sender-white/10 flex items-center justify-center relative overflow-hidden group">
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
              <span className="font-mono text-sender-white/30 text-sm text-center">
                [ IMAGE ROLE 02 — ENGINEERING ]<br/>
                FOTO REAL DE MONTAJE DE TORRE<br/>
                (Esperando archivo)
              </span>
            </div>
          </div>
          <div className="flex flex-col justify-center">
            <h3 className="text-4xl font-bold mb-8">Ingeniería y Montaje de Infraestructura</h3>
            <div className="space-y-6 border-l border-sender-light/30 pl-6">
              <div>
                <h4 className="font-mono text-sender-light mb-2">01 / TORRES Y ANTENAS</h4>
                <p className="text-sender-white/70 font-light leading-relaxed">Venta e instalación de torres contraventadas galvanizadas, antenas y equipos de radiodifusión. Experiencia en desmontaje de torres autosoportadas.</p>
              </div>
              <div>
                <h4 className="font-mono text-sender-light mb-2">02 / SISTEMAS NAVTEX Y DEFENSA</h4>
                <p className="text-sender-white/70 font-light leading-relaxed">Soluciones de transmisión MF (490/518 kHz) para sistemas NAVTEX, diseñadas para operación confiable en entornos marítimos.</p>
              </div>
              <div>
                <h4 className="font-mono text-sender-light mb-2">03 / COMUNICACIONES HF</h4>
                <p className="text-sender-white/70 font-light leading-relaxed">Soluciones en antenas HF de alto rendimiento (1.6 a 30 MHz) para comunicaciones profesionales de largo alcance.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
