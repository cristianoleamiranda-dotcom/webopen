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
            Desarrollando productos y servicios de acuerdo a las necesidades de nuestros clientes con estándares internacionales.
          </p>
        </div>
        
        <div className="flex flex-col justify-center space-y-12">
          <div>
            <div className="font-mono text-sender-light text-xs mb-2">COMUNICACIONES</div>
            <a href="mailto:sender@sender.cl" className="text-2xl md:text-3xl font-light hover:text-sender-blue transition-colors border-b border-sender-white/20 pb-2">sender@sender.cl</a>
            <div className="mt-4 font-mono text-sender-white/70">
              VENTAS: <a href="mailto:bis.ltda@gmail.com" className="hover:text-sender-blue">bis.ltda@gmail.com</a><br/>
              TEL / WHATSAPP: (+569) 8386 4148
            </div>
          </div>
          <div>
            <div className="font-mono text-sender-light text-xs mb-2">CENTRAL</div>
            <p className="text-xl font-light text-sender-white/80">
              Blanco Viel #1108, 2º piso<br/>
              San Miguel, Santiago, Chile
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
