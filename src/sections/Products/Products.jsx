import React from 'react'

export function Products() {
  return (
    <section id="productos" className="w-full min-h-screen bg-sender-white text-sender-dark py-32 px-6 md:px-12 border-t border-sender-dark/10">
      <div className="max-w-7xl mx-auto w-full">
        <span className="font-mono text-sender-blue text-sm tracking-widest uppercase mb-12 block">
          [ SCENE 06 — PRODUCTS ]
        </span>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { id: '01', title: 'Transmisor FM 5kW', desc: 'Eficiencia extrema de estado sólido con modulación digital.' },
            { id: '02', title: 'Antena Panel FM', desc: 'Polarización circular y banda ancha para penetración de señal.' },
            { id: '03', title: 'Procesador de Audio', desc: 'Control multibanda absoluto para broadcast tradicional.' }
          ].map((prod) => (
            <div key={prod.id} className="border border-sender-dark/10 hover:border-sender-blue transition-colors group cursor-pointer">
              <div className="aspect-[4/3] bg-sender-dark/5 flex items-center justify-center relative">
                <span className="font-mono text-sender-dark/30 text-xs">
                  [ IMAGE ROLE 03 - PRODUCT ]
                </span>
              </div>
              <div className="p-6">
                <div className="font-mono text-sender-blue text-xs mb-2">{prod.id}</div>
                <h4 className="text-xl font-bold mb-2">{prod.title}</h4>
                <p className="text-sender-dark/60 font-light text-sm mb-6">{prod.desc}</p>
                <div className="font-mono text-xs flex justify-between border-t border-sender-dark/10 pt-4">
                  <span className="text-sender-blue group-hover:underline">VER ESPECIFICACIONES</span>
                  <span>→</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
