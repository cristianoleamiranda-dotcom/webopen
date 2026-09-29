import React from 'react'

export function Navigation() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 mix-blend-difference border-b border-sender-white/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center h-20 text-sender-white text-xs font-mono tracking-widest uppercase">
        <div className="font-bold text-sm tracking-tighter">SENDER</div>
        <div className="hidden md:flex space-x-8">
          <a href="#nosotros" className="hover:text-sender-light transition-colors">Nosotros</a>
          <a href="#ingenieria" className="hover:text-sender-light transition-colors">Ingeniería</a>
          <a href="#productos" className="hover:text-sender-light transition-colors">Productos</a>
          <a href="#proyectos" className="hover:text-sender-light transition-colors">Proyectos</a>
          <a href="#contacto" className="hover:text-sender-light transition-colors">Contacto</a>
        </div>
        <div className="flex space-x-4">
          <button className="text-sender-white hover:text-sender-light">ES</button>
          <span className="text-sender-white/30">/</span>
          <button className="text-sender-white/50 hover:text-sender-white">EN</button>
        </div>
      </div>
    </nav>
  )
}
