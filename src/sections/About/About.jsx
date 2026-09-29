import React from 'react'

export function About() {
  return (
    <section id="nosotros" className="w-full min-h-screen bg-sender-white text-sender-dark py-32 px-6 md:px-12 flex flex-col justify-center">
      <div className="max-w-7xl mx-auto w-full">
        <span className="font-mono text-sender-blue text-sm tracking-widest uppercase mb-12 block">
          [ SCENE 02 — SENDER ]
        </span>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-8">
            <h2 className="text-5xl md:text-7xl font-bold tracking-tight leading-tight">
              Diseñamos y construimos sistemas de transmisión de misión crítica.
            </h2>
          </div>
          <div className="md:col-span-4 flex flex-col justify-end">
            <div className="border-t border-sender-dark/20 pt-6">
              <p className="text-lg font-light leading-relaxed mb-6">
                Nuestra ingeniería asegura que la señal nunca se detenga. Con base en Santiago de Chile, proveemos soluciones de radiofrecuencia para toda Latinoamérica.
              </p>
              <div className="font-mono text-xs text-sender-dark/60 tracking-wider">
                LATITUDE: 33.4489° S<br/>
                LONGITUDE: 70.6693° W
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
