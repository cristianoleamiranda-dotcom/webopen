import React from 'react'

export function Products() {
  const products = [
    { id: '01', title: 'Transmisores FM (30W a 1000W)', desc: 'Serie FM-30, FM-150, FM-350. Estado sólido 88-108MHz con sintetizador PLL digital.', image: '/webopen/images/tx-fm.jpg' },
    { id: '02', title: 'Transmisores AM', desc: 'Sistemas de transmisión AM de estado sólido para operación continua en estaciones comunitarias y regionales.', image: '/webopen/images/tx-am.jpg' },
    { id: '03', title: 'Antenas HF 1.6 - 30 MHz', desc: 'Antenas de alta eficiencia (hasta 1 kW) para comunicaciones profesionales y enlaces de largo alcance.', image: '/webopen/images/cap-antennas.jpg' },
    { id: '04', title: 'Sistema NAVTEX Profesional', desc: 'Sistemas de transmisión MF (490/518 kHz) diseñados para entornos marítimos e institucionales.', image: '/webopen/images/navtex.jpg' },
    { id: '05', title: 'Enlaces STL Estudio-Planta', desc: 'Transmisión confiable y de alta calidad de audio y datos IP entre el estudio y la planta transmisora.', image: '/webopen/images/cap-transmission.jpg' },
    { id: '06', title: 'Comunicaciones Críticas', desc: 'Infraestructura RF de máxima integridad, control multibanda y despliegue para redes que no pueden fallar.', image: '/webopen/images/cap-critical.jpg' }
  ]

  return (
    <section id="productos" className="w-full min-h-screen bg-sender-white text-sender-dark py-32 px-6 md:px-12 border-t border-sender-dark/10">
      <div className="max-w-7xl mx-auto w-full">
        <span className="font-mono text-sender-blue text-sm tracking-widest uppercase mb-12 block">
          [ SCENE 06 — PRODUCTS ]
        </span>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((prod) => (
            <div key={prod.id} className="border border-sender-dark/10 hover:border-sender-blue transition-colors group cursor-pointer flex flex-col bg-white overflow-hidden shadow-sm hover:shadow-md">
              <div className="aspect-[4/3] bg-sender-dark flex items-center justify-center relative shrink-0 overflow-hidden">
                <img 
                  src={prod.image} 
                  alt={prod.title} 
                  className="absolute inset-0 w-full h-full object-cover opacity-90 group-hover:scale-105 group-hover:opacity-100 transition-all duration-700 ease-out" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-sender-dark/50 via-transparent to-transparent z-10 pointer-events-none"></div>
              </div>
              <div className="p-6 flex flex-col grow relative z-20 bg-white">
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
