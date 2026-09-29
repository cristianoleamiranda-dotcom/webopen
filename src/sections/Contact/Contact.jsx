import React from 'react'

export function Contact() {
  return (
    <section id="contacto" className="w-full min-h-[80vh] bg-sender-dark text-sender-white py-32 px-6 md:px-12 flex flex-col justify-center">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-16">
        <div>
           <span className="font-mono text-sender-light text-sm tracking-widest uppercase mb-12 block">
            [ SCENE 08 — CONTACT ]
          </span>
          <h2 className="text-5xl md:text-7xl font-bold mb-8">Inicia la <br/><span className="text-sender-blue">transmisión.</span></h2>
          <p className="text-lg font-light text-sender-white/70 max-w-md">
            Ingeniería especializada para sistemas que no pueden fallar. Contáctanos para discutir la arquitectura de tu próxima red.
          </p>
        </div>
        
        <div className="flex flex-col justify-center space-y-12">
          <div>
            <div className="font-mono text-sender-light text-xs mb-2">CORREO DE INGENIERÍA</div>
            <a href="mailto:contacto@sender.cl" className="text-2xl md:text-3xl font-light hover:text-sender-blue transition-colors border-b border-sender-white/20 pb-2">contacto@sender.cl</a>
          </div>
          <div>
            <div className="font-mono text-sender-light text-xs mb-2">CENTRAL SANTIAGO, CHILE</div>
            <p className="text-xl font-light text-sender-white/80">
              Av. Transmisión 1024<br/>
              Piso 4, Sector Técnico
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
