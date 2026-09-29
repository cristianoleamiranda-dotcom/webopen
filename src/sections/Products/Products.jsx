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
            { id: '01', title: 'Transmisores FM (30W a 1000W)', desc: 'Serie FM-30, FM-150, FM-350, FM-600. Estado sólido 88-108MHz con sintetizador PLL digital de alta eficiencia.' },
            { id: '02', title: 'Sistema NAVTEX Profesional', desc: 'Sistemas de transmisión MF (490/518 kHz) diseñados para entornos marítimos e institucionales.' },
            { id: '03', title: 'Antenas HF 1.6 - 30 MHz', desc: 'Antenas de alta eficiencia (hasta 1 kW) para comunicaciones profesionales y enlaces de largo alcance.' },
            { id: '04', title: 'Transmisores AM', desc: 'Sistemas de transmisión AM de estado sólido para operación continua en estaciones comunitarias y regionales.' },
            { id: '05', title: 'Enlaces STL Estudio-Planta', desc: 'Transmisión confiable y de alta calidad de audio y datos IP entre el estudio y la planta transmisora.' },
            { id: '06', title: 'Cables Coaxiales LMR-400', desc: 'Cableado profesional 1/2" Super Flex para máxima integridad de señal e infraestructura RF.' }
          ].map((prod) => (
            <div key={prod.id} className="border border-sender-dark/10 hover:border-sender-blue transition-colors group cursor-pointer flex flex-col">
              <div className="aspect-[4/3] bg-sender-dark/5 flex items-center justify-center relative shrink-0">
                <span className="font-mono text-sender-dark/30 text-xs text-center px-2">
                  [ IMAGE: {prod.title.toUpperCase()} ]<br/>
                  FOTO REAL DEL EQUIPO
                </span>
              </div>
              <div className="p-6 flex flex-col grow">
                <div className="font-mono text-sender-blue text-xs mb-2">{prod.id}</div>
                <h4 className="text-xl font-bold mb-2">{prod.title}</h4>
                <p className="text-sender-dark/60 font-light text-sm mb-6 grow">{prod.desc}</p>
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
